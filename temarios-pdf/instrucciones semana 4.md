# Instrucciones para la Creación e Inyección de la Semana 4

Este documento contiene la guía metodológica y el prompt estructurado para habilitar la Semana 4 en el simulador en la próxima sesión de desarrollo.

## Prompt para Copiar y Pegar

Copie y pegue el siguiente recuadro en el chat de la inteligencia artificial para automatizar todo el proceso:

```markdown
Hola. Necesito que completemos la Semana 4 del simulador siguiendo exactamente el mismo estándar de calidad y estructura académica que usamos en las Semanas 2 y 3. Por favor, realiza las siguientes tareas:

1. **Temario de la Semana 4:** Guiándote por los temas listados en el archivo [extracted.txt](file:///C:/Users/Joseph%20CM/.gemini/antigravity-cli/brain/5f73741f-3c5d-40ad-b77b-8a4463aaf0a6/scratch/extracted.txt) para la Semana 4 (Morfología, Encomienda, Obrajes, Mita, Generación del Treinta, Generación Decapitada, Arte Colonial, Sublevaciones, etc.), crea las dos nuevas carpetas correspondientes en el espacio de trabajo:
   - `conceptos/semana 4/` (con archivos de lunes a domingo: `concepto-s4-Lun.md` a `concepto-s4-Dom.md`)
   - `preguntas/semana 4/` (con archivos de lunes a domingo: `preguntas-s4-Lun.md` a `preguntas-s4-Dom.md`)

2. **Conceptos de Estudio (Estilo Prosa Académica):**
   - Redacta cada concepto de Lengua, Historia, Verbal y Numérico como un material didáctico de nivel de libro de texto.
   - Cada tema debe tener de 2 a 3 párrafos largos, densos y bien estructurados separados por saltos de línea dobles (`\n\n`).
   - CRÍTICO: No utilices viñetas ni guiones en las explicaciones. Todo debe estar redactado de corrido usando conectores lógicos de prosa.
   - Incluye fechas históricas precisas y nombres propios de autores o protagonistas para cada tema humanities/historia.

3. **Banco de Preguntas (40 por día):**
   - Diseña 40 preguntas por día (10 de Lengua y Literatura, 10 de Historia, 10 de Razonamiento Verbal y 10 de Razonamiento Numérico) con sus 4 opciones, clave de respuesta y una explicación teórica exhaustiva.
   - Asegúrate de que las fechas, nombres y datos históricos correctos de las preguntas coincidan exactamente con la teoría redactada en los conceptos de ese mismo día.

4. **Inyección en la Base de Datos (`questions.js`):**
   - Diseña un script en Python que lea y parsee todos los archivos Markdown de la Semana 4 (preguntas y conceptos) y los inyecte automáticamente en `questions.js` dentro de los bloques de `questionsData["Semana 4"]` y `studyData["Semana 4"]`.
   - Modifica el script de reemplazo para inyectar los conceptos en prosa sin duplicar barras invertidas en los saltos de línea (debe quedar como un limpio `\n` dentro del string de JS).

5. **Activación de Examen de la Semana 4:**
   - Asegúrate de que el examen semanal para la Semana 4 esté completamente habilitado en el simulador (`app.js` y `questions.js`).

6. **Verificaciones Finales:**
   - Realiza un chequeo sintáctico automático de `questions.js` con Node.js (`node -e "require('./questions.js')"`) para garantizar que compile sin errores.
   - Ejecuta un script de verificación cruzada para comprobar que todos los años y nombres históricos clave de las preguntas de Historia y Lengua de cada día estén presentes en los conceptos de ese mismo día.
```
