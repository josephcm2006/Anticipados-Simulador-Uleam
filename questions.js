// Banco de preguntas organizadas por Semana y Día
const questionsData = {
    "Semana 1": {
        "Lunes": [
            {
                "id": 1,
                "subject": "Lengua y Literatura",
                "question": "¿Cuál de las siguientes opciones describe de mejor manera la característica primordial del texto expositivo?",
                "options": [
                    "Relatar acontecimientos ficticios utilizando recursos líricos y estéticos.",
                    "Presentar y explicar un tema específico de manera clara, lógica y objetiva.",
                    "Intentar convencer al lector mediante argumentos emocionales y retóricos.",
                    "Guiar paso a paso al usuario para que logre operar un equipo técnico."
                ],
                "correct": 1, // B (0-indexed: 1)
                "explanation": "El texto expositivo tiene como propósito principal informar, transmitir y explicar datos o ideas de forma puramente objetiva, estructurada y sin valoraciones del autor."
            },
            {
                "id": 2,
                "subject": "Lengua y Literatura",
                "question": "A diferencia del texto expositivo, ¿cuál es el rasgo definitorio de un artículo de opinión?",
                "options": [
                    "Aportar datos puramente científicos y neutrales de una investigación.",
                    "Escribir una crónica detallada en tercera persona de un evento del pasado.",
                    "Exponer valoraciones subjetivas y juicios de un autor sobre un tema relevante.",
                    "Estar redactado en lenguaje poético para apelar a los sentimientos."
                ],
                "correct": 2, // C
                "explanation": "El artículo de opinión es un texto periodístico de carácter argumentativo en el que un autor firma y expone sus análisis, interpretaciones y puntos de vista particulares sobre una noticia o tema de actualidad."
            },
            {
                "id": 3,
                "subject": "Historia",
                "question": "¿Qué acontecimiento histórico europeo se toma comúnmente como referencia para marcar el inicio de la Edad Media en el año 476 d.C.?",
                "options": [
                    "La disolución y caída del Imperio Romano de Occidente.",
                    "El descubrimiento del continente americano por Cristóbal Colón.",
                    "La llegada al poder de los reyes católicos en la península ibérica.",
                    "La coronación imperial del líder germánico Carlomagno."
                ],
                "correct": 0, // A
                "explanation": "La caída de Roma en el 476 d.C., provocada por invasiones bárbaras y problemas internos, puso fin al Imperio Romano de Occidente y se considera el hito que da inicio a la Edad Media."
            },
            {
                "id": 4,
                "subject": "Historia",
                "question": "¿Qué movimiento intelectual y sociocultural jugó un rol determinante en la transición y el inicio de la Edad Moderna en Europa?",
                "options": [
                    "La implantación y afianzamiento del sistema feudal agrario.",
                    "El surgimiento y difusión del Humanismo junto al Renacimiento.",
                    "La primera ola de la Revolución Industrial y las fábricas.",
                    "La invasión árabe a la península ibérica en el siglo VIII."
                ],
                "correct": 1, // B
                "explanation": "El Renacimiento y el Humanismo promovieron una visión antropocéntrica, revivieron la cultura clásica grecorromana y fomentaron el pensamiento científico, abriendo camino a la Edad Moderna."
            },
            {
                "id": 5,
                "subject": "Razonamiento Verbal",
                "question": "Identifique el sinónimo más adecuado para la palabra destacada en mayúsculas: 'Su intervención en la reunión fue tan EFÍMERA que pocos notaron su presencia'.",
                "options": [
                    "Prolongada",
                    "Pasajera",
                    "Trascendental",
                    "Polémica"
                ],
                "correct": 1, // B
                "explanation": "El adjetivo 'efímero' designa algo de corta duración, por ende, su sinónimo directo es 'pasajera' o 'fugaz'."
            },
            {
                "id": 6,
                "subject": "Razonamiento Verbal",
                "question": "¿Cuál de los siguientes términos corresponde al antónimo directo de la palabra 'APATÍA'?",
                "options": [
                    "Indiferencia",
                    "Negligencia",
                    "Entusiasmo",
                    "Frialdad"
                ],
                "correct": 2, // C
                "explanation": "La apatía es la falta de interés, motivación o vigor. Su opuesto directo es el entusiasmo, que representa el fervor y el ánimo de participar o actuar."
            },
            {
                "id": 7,
                "subject": "Razonamiento Numérico",
                "question": "Resuelva la siguiente situación: El triple de un número aumentado en su mitad es igual a 21. ¿De qué número se trata?",
                "options": [
                    "4",
                    "5",
                    "6",
                    "8"
                ],
                "correct": 2, // C
                "explanation": "Formulamos la ecuación matemática: 3x + x/2 = 21. Multiplicamos todo por 2 para eliminar la fracción: 6x + x = 42 -> 7x = 42. Dividimos para 7: x = 6."
            },
            {
                "id": 8,
                "subject": "Razonamiento Numérico",
                "question": "En un aula de estudio con 120 alumnos, el 35% prefiere Historia y el resto prefiere Lengua. ¿Cuántos alumnos prefieren Lengua?",
                "options": [
                    "42 alumnos",
                    "78 alumnos",
                    "80 alumnos",
                    "85 alumnos"
                ],
                "correct": 1, // B
                "explanation": "Si el 35% prefiere Historia, el porcentaje restante que prefiere Lengua es del 65% (100% - 35%). Calculamos el 65% de 120: 120 * 0.65 = 78 alumnos."
            }
        ],
        "Martes": [],
        "Miércoles": [],
        "Jueves": [],
        "Viernes": [],
        "Sábado": [],
        "Domingo": []
    },
    "Semana 2": {
        "Lunes": [], "Martes": [], "Miércoles": [], "Jueves": [], "Viernes": [], "Sábado": [], "Domingo": []
    },
    "Semana 3": {
        "Lunes": [], "Martes": [], "Miércoles": [], "Jueves": [], "Viernes": [], "Sábado": [], "Domingo": []
    },
    "Semana 4": {
        "Lunes": [], "Martes": [], "Miércoles": [], "Jueves": [], "Viernes": [], "Sábado": [], "Domingo": []
    }
};

// Banco de contenidos de estudio organizados por Semana y Día
const studyData = {
    "Semana 1": {
        "Lunes": [
            {
                "topic": "El texto expositivo",
                "subject": "Lengua y Literatura",
                "concept": "El texto expositivo tiene como objetivo principal informar y difundir conocimientos sobre un tema específico de manera objetiva, clara y precisa. Su intención comunicativa es puramente cognitiva (explicar para que el receptor comprenda). Se caracteriza por el uso de la tercera persona gramatical, un registro formal, vocabulario denotativo y la ausencia de opiniones o juicios de valor del emisor.",
                "image": "", // Aquí puedes colocar una ruta de imagen real en el futuro, ej: "imagenes/expositivo.png"
                "exercises": [
                    {
                        "problem": "Identifique cuál de los siguientes fragmentos corresponde a un texto expositivo y analice su objetivo.",
                        "solution": "Fragmento A: 'El agua (H2O) es un compuesto químico que contiene dos átomos de hidrógeno y uno de oxígeno. Cubre el 71% de la corteza terrestre.' Este fragmento es expositivo porque explica un hecho químico real con datos científicos, vocabulario objetivo y sin adjetivación expresiva."
                    }
                ]
            },
            {
                "topic": "El inicio de la Edad Media",
                "subject": "Historia",
                "concept": "La Edad Media es el período histórico de la civilización occidental comprendido entre los siglos V y XV. Su inicio se sitúa convencionalmente en el año 476 con la caída del Imperio Romano de Occidente y su fin en 1492 con el descubrimiento de América (o 1453 con la caída de Constantinopla). El inicio de este período está marcado por la fragmentación del poder político en reinos germánicos, la ruralización de la sociedad y el posterior desarrollo del feudalismo.",
                "image": "",
                "exercises": [
                    {
                        "problem": "Explique brevemente por qué la caída de Roma en el año 476 d.C. desencadenó el inicio de una nueva época en Europa.",
                        "solution": "La caída del poder central romano provocó que las antiguas provincias quedaran fragmentadas y desprotegidas. Esto obligó a la población a abandonar las ciudades hacia el campo (ruralización) y a buscar protección con señores locales, sentando las bases feudales."
                    }
                ]
            },
            {
                "topic": "Sinónimos y Antónimos",
                "subject": "Razonamiento Verbal",
                "concept": "Los sinónimos son vocablos que comparten el mismo significado o uno extremadamente similar, pero se escriben de manera diferente (ej. efímero y fugaz). Los antónimos son palabras que presentan significados opuestos o contrarios entre sí (ej. apatía y entusiasmo). El dominio de ambos tipos de relaciones semánticas permite enriquecer la expresión oral y escrita y evitar la redundancia.",
                "image": "",
                "exercises": [
                    {
                        "problem": "Encuentre el sinónimo idóneo de 'Abúlico' y el antónimo de 'Genuino' para la siguiente oración: 'Su comportamiento abúlico demostraba que su supuesto interés no era genuino'.",
                        "solution": "Sinónimo de abúlico: 'apático' o 'indiferente'. Antónimo de genuino: 'falso', 'artificioso' o 'apócrifo'."
                    }
                ]
            },
            {
                "topic": "Solución de problemas de ecuaciones lineales",
                "subject": "Razonamiento Numérico",
                "concept": "Una ecuación lineal (o de primer grado) es una igualdad matemática que involucra una o más variables elevadas a la primera potencia. Resolverla consiste en encontrar el valor numérico de la incógnita que hace verdadera la igualdad. Para lograrlo, se realiza la transposición de términos utilizando operaciones inversas (lo que suma pasa a restar, lo que multiplica pasa a dividir, etc.) de forma balanceada a ambos lados de la igualdad.",
                "image": "",
                "exercises": [
                    {
                        "problem": "Resuelva detalladamente la siguiente ecuación y determine el valor de la incógnita: 4(x - 2) + 6 = 2(x + 5)",
                        "solution": "1. Aplicamos propiedad distributiva: 4x - 8 + 6 = 2x + 10 \n2. Simplificamos términos semejantes: 4x - 2 = 2x + 10 \n3. Transponemos las x a la izquierda y números a la derecha: 4x - 2x = 10 + 2 \n4. Reducimos: 2x = 12 \n5. Despejamos: x = 12 / 2 = 6."
                    }
                ]
            }
        ],
        "Martes": [], "Miércoles": [], "Jueves": [], "Viernes": [], "Sábado": [], "Domingo": []
    },
    "Semana 2": {
        "Lunes": [], "Martes": [], "Miércoles": [], "Jueves": [], "Viernes": [], "Sábado": [], "Domingo": []
    },
    "Semana 3": {
        "Lunes": [], "Martes": [], "Miércoles": [], "Jueves": [], "Viernes": [], "Sábado": [], "Domingo": []
    },
    "Semana 4": {
        "Lunes": [], "Martes": [], "Miércoles": [], "Jueves": [], "Viernes": [], "Sábado": [], "Domingo": []
    }
};

