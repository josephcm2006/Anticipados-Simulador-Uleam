import os
import re
import json
import sys
import subprocess

# Set stdout to UTF-8
sys.stdout.reconfigure(encoding='utf-8')

DAY_MAP = {
    'Lun': 'Lunes',
    'Mar': 'Martes',
    'Mie': 'Miércoles',
    'Jue': 'Jueves',
    'Vie': 'Viernes',
    'Sab': 'Sábado',
    'Dom': 'Domingo'
}

SUBJECT_NORM = {
    'LENGUA Y LITERATURA': 'Lengua y Literatura',
    'LENGUA': 'Lengua y Literatura',
    'HISTORIA': 'Historia',
    'RAZONAMIENTO VERBAL': 'Razonamiento Verbal',
    'VERBAL': 'Razonamiento Verbal',
    'RAZONAMIENTO NUMÉRICO': 'Razonamiento Numérico',
    'NUMÉRICO': 'Razonamiento Numérico',
    'NUMERICO': 'Razonamiento Numérico'
}

SUBJECT_IMAGES = {
    'Lengua y Literatura': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=60',
    'Historia': 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=600&auto=format&fit=crop&q=60',
    'Razonamiento Verbal': 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&auto=format&fit=crop&q=60',
    'Razonamiento Numérico': 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=60'
}

def normalize_subject(subj):
    subj_upper = subj.upper().strip()
    for k, v in SUBJECT_NORM.items():
        if k in subj_upper:
            return v
    return subj

def parse_concepts_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    concepts = []
    current_subject = None
    in_concept = False
    concept_lines = []
    topic_name = ""
    topic_subject = None
    
    lines = content.split('\n')
    for line in lines:
        stripped = line.strip()
        if stripped.startswith("MATERIA - "):
            current_subject = normalize_subject(stripped.replace("MATERIA - ", "", 1))
        elif stripped.startswith("TEMA - "):
            if in_concept:
                concept_text = "\n".join(concept_lines).strip()
                if concept_text.endswith(")"):
                    concept_text = concept_text[:-1].strip()
                concepts.append({
                    "topic": topic_name,
                    "subject": topic_subject,
                    "concept": concept_text,
                    "image": SUBJECT_IMAGES.get(topic_subject, SUBJECT_IMAGES['Lengua y Literatura']),
                    "videoUrl": f"https://www.youtube.com/results?search_query={topic_name.replace(' ', '+')}",
                    "exercises": []
                })
                concept_lines = []
            
            # Start new concept
            rest = stripped.replace("TEMA - ", "", 1)
            topic_subject = current_subject
            if ", (" in rest:
                topic_name, first_part = rest.split(", (", 1)
                topic_name = topic_name.strip()
                concept_lines = [first_part]
                in_concept = True
            else:
                topic_name = rest.strip()
                in_concept = False
        else:
            if in_concept:
                concept_lines.append(line)
                
    if in_concept:
        concept_text = "\n".join(concept_lines).strip()
        if concept_text.endswith(")"):
            concept_text = concept_text[:-1].strip()
        concepts.append({
            "topic": topic_name,
            "subject": topic_subject,
            "concept": concept_text,
            "image": SUBJECT_IMAGES.get(topic_subject, SUBJECT_IMAGES['Lengua y Literatura']),
            "videoUrl": f"https://www.youtube.com/results?search_query={topic_name.replace(' ', '+')}",
            "exercises": []
        })
        
    return concepts

def parse_questions_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    lines = content.split('\n')
    current_subject = None
    questions_by_subject = {
        "Lengua y Literatura": [],
        "Historia": [],
        "Razonamiento Verbal": [],
        "Razonamiento Numérico": []
    }
    answer_key_lines = []
    in_answers = False
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue
        if "Clave de Respuestas" in stripped or "Clave de respuestas" in stripped:
            in_answers = True
            current_subject = None
        elif in_answers:
            answer_key_lines.append(stripped)
        elif "Lengua y Literatura" in stripped and "(" in stripped:
            current_subject = "Lengua y Literatura"
        elif "Historia" in stripped and "(" in stripped:
            current_subject = "Historia"
        elif "Razonamiento Verbal" in stripped and "(" in stripped:
            current_subject = "Razonamiento Verbal"
        elif "Razonamiento Numérico" in stripped and "(" in stripped:
            current_subject = "Razonamiento Numérico"
        elif current_subject:
            # Parse: 1. Question text a) OptA b) OptB c) OptC d) OptD
            match = re.match(r'^(\d+)\.\s+(.*?)\s+a\)\s+(.*?)\s+b\)\s+(.*?)\s+c\)\s+(.*?)\s+d\)\s+(.*?)$', stripped)
            if match:
                q_num = int(match.group(1))
                q_text = match.group(2).strip()
                opt_a = match.group(3).strip()
                opt_b = match.group(4).strip()
                opt_c = match.group(5).strip()
                opt_d = match.group(6).strip()
                
                questions_by_subject[current_subject].append({
                    "id": len(questions_by_subject[current_subject]) + 1,
                    "subject": current_subject,
                    "question": q_text,
                    "options": [opt_a, opt_b, opt_c, opt_d],
                    "q_num_original": q_num
                })
                
    # Now parse answer key lines
    for a_line in answer_key_lines:
        if ":" not in a_line:
            continue
        subj_part, key_part = a_line.split(":", 1)
        subj_norm = normalize_subject(subj_part)
        if subj_norm not in questions_by_subject:
            continue
        
        parts = key_part.split("|")
        for part in parts:
            part = part.strip()
            if not part:
                continue
            if ":" not in part:
                continue
            num_part, ans_part = part.split(":", 1)
            try:
                q_num = int(num_part.strip())
            except ValueError:
                continue
            
            ans_part = ans_part.strip()
            correct_letter = ans_part[0].lower()
            
            explanation = ""
            if "(" in ans_part and ans_part.endswith(")"):
                exp_start = ans_part.find("(")
                explanation = ans_part[exp_start+1:-1].strip()
            
            found_q = None
            for q in questions_by_subject[subj_norm]:
                if q["q_num_original"] == q_num:
                    found_q = q
                    break
            
            if found_q:
                correct_idx = ord(correct_letter) - ord('a')
                found_q["correct"] = correct_idx
                if explanation:
                    found_q["explanation"] = explanation
                else:
                    opt_val = found_q["options"][correct_idx]
                    found_q["explanation"] = f"La respuesta correcta es la {correct_letter}) porque {opt_val}"
                    
    final_questions = []
    subjects_seq = ["Lengua y Literatura", "Historia", "Razonamiento Verbal", "Razonamiento Numérico"]
    for s in subjects_seq:
        for q in questions_by_subject[s]:
            q_copy = {
                "id": len(final_questions) + 1,
                "subject": q["subject"],
                "question": q["question"],
                "options": q["options"],
                "correct": q.get("correct", 0),
                "explanation": q.get("explanation", "")
            }
            final_questions.append(q_copy)
            
    return final_questions

def find_block_range(js_content, start_marker, start_search_idx=0):
    idx = js_content.find(start_marker, start_search_idx)
    if idx == -1:
        return None
    brace_start = js_content.find('{', idx)
    if brace_start == -1:
        return None
    
    brace_count = 1
    i = brace_start + 1
    n = len(js_content)
    in_string = False
    escape = False
    string_char = None
    
    while i < n:
        char = js_content[i]
        if escape:
            escape = False
            i += 1
            continue
        if char == '\\':
            escape = True
            i += 1
            continue
        if in_string:
            if char == string_char:
                in_string = False
            i += 1
            continue
        if char in ('"', "'", '`'):
            in_string = True
            string_char = char
            i += 1
            continue
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                return idx, i + 1
        i += 1
    return None


def find_matching_questions(questions, topic_name, subject_name):
    matched = []
    for q in questions:
        if q["subject"] != subject_name:
            continue
        q_text_lower = q["question"].lower()
        topic_lower = topic_name.lower()
        
        if "sinónimos" in topic_lower or "sinónimo" in topic_lower:
            if "sinónimo" in q_text_lower:
                matched.append(q)
        elif "antónimos" in topic_lower or "antónimo" in topic_lower:
            if "antónimo" in q_text_lower:
                matched.append(q)
        elif "término excluido" in topic_lower:
            if "término excluido" in q_text_lower or "excluye" in q_text_lower:
                matched.append(q)
        elif "ordenar oraciones" in topic_lower:
            if "ordenar" in q_text_lower or "ordene" in q_text_lower or "organice" in q_text_lower:
                matched.append(q)
        elif "completamiento" in topic_lower:
            if "complete la" in q_text_lower or "completar" in q_text_lower:
                matched.append(q)
        elif "refranes" in topic_lower or "refrán" in topic_lower:
            if "refrán" in q_text_lower or "dicho" in q_text_lower:
                matched.append(q)
        elif "analogías" in topic_lower or "analogía" in topic_lower:
            if "analogía" in q_text_lower or "es a" in q_text_lower:
                matched.append(q)
        elif "selección lógica" in topic_lower:
            if "selección lógica" in q_text_lower or "requiere" in q_text_lower:
                matched.append(q)
        elif "comprensión lectora" in topic_lower:
            if "comprensión lectora" in q_text_lower or "según el texto" in q_text_lower or "del texto" in q_text_lower:
                matched.append(q)
        elif "concordancia" in topic_lower:
            if "concordancia" in q_text_lower or "coincidir" in q_text_lower:
                matched.append(q)
        elif "precisión semántica" in topic_lower or "precisión" in topic_lower:
            if "precisión" in q_text_lower or "precisa" in q_text_lower or "preciso" in q_text_lower:
                matched.append(q)
        elif "probabilidad" in topic_lower:
            if "probabilidad" in q_text_lower or "azar" in q_text_lower:
                matched.append(q)
        elif "proporcionalidad" in topic_lower or "compuesta" in topic_lower:
            if "proporcionalidad" in q_text_lower or "obreros" in q_text_lower or "máquinas" in q_text_lower or "tejedores" in q_text_lower or "viajes" in q_text_lower or "tanques" in q_text_lower:
                if "regla de tres" not in q_text_lower:
                    matched.append(q)
        elif "secuencias" in topic_lower or "secuencia" in topic_lower:
            if "secuencia" in q_text_lower or "serie" in q_text_lower or "continúa" in q_text_lower:
                matched.append(q)
        elif "ecuaciones" in topic_lower or "lineales" in topic_lower:
            if "ecuación" in q_text_lower or "edad" in q_text_lower or "número" in q_text_lower or "compró" in q_text_lower or "suma de" in q_text_lower:
                if "dado" not in q_text_lower and "monedas" not in q_text_lower and "bolas" not in q_text_lower and "porcentaje" not in q_text_lower and "por ciento" not in q_text_lower:
                    matched.append(q)
        elif "porcentajes" in topic_lower or "porcentaje" in topic_lower:
            if "porcentaje" in q_text_lower or "%" in q_text_lower or "descuento" in q_text_lower or "diezmo" in q_text_lower:
                matched.append(q)
        elif "reglas de tres" in topic_lower or "regla de tres" in topic_lower:
            if "regla de tres" in q_text_lower or "proporcionalidad" in q_text_lower or "mitayos" in q_text_lower or "obreros" in q_text_lower or "camisas" in q_text_lower or "lana" in q_text_lower or "caballos" in q_text_lower:
                matched.append(q)
        elif "conjuntos" in topic_lower or "conjunto" in topic_lower:
            if "conjunto" in q_text_lower or "intersección" in q_text_lower or "unión" in q_text_lower or "diferencia" in q_text_lower or "encuesta" in q_text_lower:
                matched.append(q)
        elif "fracciones" in topic_lower or "fracción" in topic_lower:
            if "fracción" in q_text_lower or "multiplicación de" in q_text_lower or "división de" in q_text_lower or "/" in q_text_lower:
                matched.append(q)
        elif "operaciones básicas" in topic_lower:
            if "operaciones básicas" in q_text_lower or "resuelve" in q_text_lower:
                matched.append(q)
    return matched

def format_js_block(week_data):
    # Format the dictionary to beautifully indented JavaScript
    json_str = json.dumps(week_data, indent=4, ensure_ascii=False)
    
    indented_lines = []
    lines = json_str.split('\n')
    indented_lines.append('    "Semana 4": {')
    for line in lines[1:-1]:
        indented_lines.append('    ' + line)
    indented_lines.append('    }')
    return '\n'.join(indented_lines)

def main():
    semana4_questions = {}
    semana4_study = {}
    
    for prefix, day_name in DAY_MAP.items():
        concepts_path = f"conceptos/semana 4/concepto-s4-{prefix}.md"
        questions_path = f"preguntas/semana 4/preguntas-s4-{prefix}.md"
        
        print(f"Parsing {day_name}...")
        
        day_questions = parse_questions_file(questions_path)
        day_concepts = parse_concepts_file(concepts_path)
        
        # Populate exercises for RV and RN concepts
        for concept in day_concepts:
            subj = concept["subject"]
            if subj in ["Razonamiento Verbal", "Razonamiento Numérico"]:
                matched_qs = find_matching_questions(day_questions, concept["topic"], subj)
                exercises = []
                for mq in matched_qs[:2]:
                    exercises.append({
                        "problem": mq["question"],
                        "solution": mq["explanation"]
                    })
                concept["exercises"] = exercises
                print(f"  Added {len(exercises)} exercises to {concept['topic']}")
                
        semana4_questions[day_name] = day_questions
        semana4_study[day_name] = day_concepts
        
    # Read questions.js
    print("Reading questions.js...")
    with open("questions.js", "r", encoding="utf-8") as f:
        js_content = f.read()
        
    # Find the "Semana 4" blocks
    res1 = find_block_range(js_content, '    "Semana 4": {')
    if not res1:
        # Fallback to the original target string if not found
        target = """    "Semana 4": {
        "Lunes": [],
        "Martes": [],
        "Miércoles": [],
        "Jueves": [],
        "Viernes": [],
        "Sábado": [],
        "Domingo": []
    }"""
        idx1 = js_content.find(target)
        if idx1 == -1:
            print("Error: Could not find Semana 4 block in questionsData")
            return
        idx1_end = idx1 + len(target)
        
        idx2 = js_content.find(target, idx1_end)
        if idx2 == -1:
            print("Error: Could not find Semana 4 block in studyData")
            return
        idx2_end = idx2 + len(target)
    else:
        idx1, idx1_end = res1
        res2 = find_block_range(js_content, '    "Semana 4": {', idx1_end)
        if not res2:
            print("Error: Could not find second Semana 4 block in studyData")
            return
        idx2, idx2_end = res2
        
    print("Formatting JS blocks...")
    questions_block = format_js_block(semana4_questions)
    study_block = format_js_block(semana4_study)
    
    print("Injecting into questions.js...")
    # Replace the second block (studyData) first so that the character indices of the first block remain valid
    new_content = js_content[:idx2] + study_block + js_content[idx2_end:]
    new_content = new_content[:idx1] + questions_block + new_content[idx1_end:]
    
    with open("questions.js", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Injection complete!")
    
    # 6. Verificaciones Finales:
    # Chequeo sintáctico con Node.js
    print("Running syntax check with Node.js...")
    res = subprocess.run(["node", "-e", "require('./questions.js')"], capture_output=True, text=True)
    if res.returncode == 0:
        print("Syntax check passed! questions.js compiled successfully.")
    else:
        print("Syntax check FAILED!")
        print("STDOUT:", res.stdout)
        print("STDERR:", res.stderr)
        return
        
    # Cross check verification
    print("Running cross-check verification...")
    # Verify that all years and historical names in the Historia and Lengua questions appear in concepts of the same day.
    # Let's extract words starting with a capital letter or numbers of 4 digits from questions and see if they are in the concepts
    all_passed = True
    for prefix, day_name in DAY_MAP.items():
        qs = semana4_questions[day_name]
        cs = semana4_study[day_name]
        
        # Combine all concept text of that day
        concept_text_blob = " ".join([c["concept"] for c in cs])
        
        # Find key names/years in Historia and Lengua questions
        for q in qs:
            if q["subject"] not in ["Lengua y Literatura", "Historia"]:
                continue
            
            # Find years (4 digits)
            years = re.findall(r'\b(1\d{3}|20\d{2})\b', q["question"])
            for yr in years:
                if yr not in concept_text_blob:
                    print(f"Warning: Year {yr} in Q{q['id']} ({day_name} - {q['subject']}) not found in concepts!")
                    all_passed = False
            
            # Find historical proper names (words of 4+ letters starting with capital letter, excluding first word)
            words = re.findall(r'\b([A-Z][a-z]{3,})\b', q["question"])
            for w in words:
                # ignore common Spanish question starts like ¿Cuál, ¿Qué, ¿Quién, En, La, El, Los, Las, etc.
                if w in ["Cuál", "Cómo", "Quién", "Qué", "Seleccione", "Identifique", "Complete", "Ecuador", "Ecuatoriana", "Hispanoamericano", "Hispanoamericana", "Real", "Audiencia", "Quito"]:
                    continue
                # Also ignore common words if they appear at the start of sentence, but let's check:
                if w not in concept_text_blob:
                    print(f"Warning: Name '{w}' in Q{q['id']} ({day_name} - {q['subject']}) not found in concepts!")
                    all_passed = False
                    
    if all_passed:
        print("Cross-check verification passed successfully!")
    else:
        print("Cross-check completed with some warnings.")

if __name__ == "__main__":
    main()
