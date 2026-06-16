// Banco de preguntas organizadas por Semana y Día
const questionsData = {
    "Semana 1": {
        "Lunes": [
            {
                "id": 1,
                "subject": "Lengua y Literatura",
                "question": "¿Cuál es el objetivo principal de un texto expositivo?",
                "options": [
                    "Persuadir al lector sobre una ideología",
                    "Expresar los sentimientos del autor",
                    "Informar y explicar un tema de manera objetiva",
                    "Narrar una historia de ficción"
                ],
                "correct": 2,
                "explanation": "El texto expositivo tiene como propósito principal informar, transmitir y explicar datos o ideas de forma puramente objetiva, estructurada y sin valoraciones del autor."
            },
            {
                "id": 2,
                "subject": "Lengua y Literatura",
                "question": "¿Cuál es la estructura clásica en la que se organiza un texto expositivo?",
                "options": [
                    "Inicio, nudo y desenlace",
                    "Introducción, desarrollo y conclusión",
                    "Tesis, argumentos y síntesis",
                    "Estrofas y versos"
                ],
                "correct": 1,
                "explanation": "La estructura clásica de un texto expositivo consta de introducción (presentación del tema), desarrollo (explicación de las ideas) y conclusión (síntesis de lo expuesto)."
            },
            {
                "id": 3,
                "subject": "Lengua y Literatura",
                "question": "En un texto expositivo, el lenguaje utilizado debe ser principalmente:",
                "options": [
                    "Subjetivo y poético",
                    "Ambiguo y coloquial",
                    "Claro, preciso y directo",
                    "Metafórico y emotivo"
                ],
                "correct": 2,
                "explanation": "Para mantener la objetividad y precisión, los textos expositivos utilizan un lenguaje claro, denotativo y directo."
            },
            {
                "id": 4,
                "subject": "Lengua y Literatura",
                "question": "¿Qué característica define mejor a un artículo de opinión?",
                "options": [
                    "Presenta los hechos sin ninguna valoración personal.",
                    "Refleja la postura, juicio o valoración subjetiva del autor sobre un tema.",
                    "Utiliza exclusivamente datos estadísticos comprobables.",
                    "Es un texto escrito obligatoriamente en verso."
                ],
                "correct": 1,
                "explanation": "El artículo de opinión es un texto periodístico de carácter argumentativo en el que un autor firma y expone sus opiniones e interpretaciones sobre un tema relevante."
            },
            {
                "id": 5,
                "subject": "Lengua y Literatura",
                "question": "El artículo de opinión pertenece principalmente al tipo de texto:",
                "options": [
                    "Informativo puro",
                    "Descriptivo",
                    "Argumentativo",
                    "Narrativo"
                ],
                "correct": 2,
                "explanation": "El artículo de opinión busca argumentar y persuadir, por lo que pertenece a los textos de tipo argumentativo."
            },
            {
                "id": 6,
                "subject": "Lengua y Literatura",
                "question": "A diferencia del texto expositivo, el artículo de opinión busca:",
                "options": [
                    "Describir un proceso biológico paso a paso",
                    "Convencer, persuadir o influir en el pensamiento del lector",
                    "Definir un concepto científico de manera neutral",
                    "Relatar un suceso histórico sin emitir juicios"
                ],
                "correct": 1,
                "explanation": "El objetivo principal del artículo de opinión es influir en el pensamiento del lector y persuadirlo mediante argumentos."
            },
            {
                "id": 7,
                "subject": "Lengua y Literatura",
                "question": "La poesía, como expresión literaria, se caracteriza fundamentalmente por:",
                "options": [
                    "Su rigor científico y método comprobable",
                    "La expresión de sentimientos, emociones y visiones con fines estéticos",
                    "La presentación de noticias diarias de forma resumida",
                    "Su estructura en prosa técnica"
                ],
                "correct": 1,
                "explanation": "La poesía es un género literario caracterizado por expresar la emotividad, los sentimientos y las visiones estéticas a través de un lenguaje rítmico y armónico."
            },
            {
                "id": 8,
                "subject": "Lengua y Literatura",
                "question": "¿Cuál de estos es un recurso muy utilizado en la poesía para embellecer el lenguaje y expresar emociones?",
                "options": [
                    "Las referencias bibliográficas en formato APA",
                    "Las citas textuales de expertos",
                    "Las figuras literarias (como la metáfora o el símil)",
                    "Los gráficos de barras y tablas"
                ],
                "correct": 2,
                "explanation": "Las figuras literarias (como la metáfora, el símil y la hipérbole) son los recursos por excelencia de la poesía para embellecer y dar expresividad al lenguaje."
            },
            {
                "id": 9,
                "subject": "Lengua y Literatura",
                "question": "El conjunto de versos que se agrupan en un poema recibe el nombre de:",
                "options": [
                    "Párrafo",
                    "Capítulo",
                    "Estrofa",
                    "Oración"
                ],
                "correct": 2,
                "explanation": "Una estrofa es un conjunto de versos agrupados bajo una estructura métrica o rítmica específica en un poema."
            },
            {
                "id": 10,
                "subject": "Lengua y Literatura",
                "question": "La paralingüística es la disciplina que estudia:",
                "options": [
                    "La ortografía correcta de las palabras",
                    "Los elementos no verbales de la voz (tono, ritmo, volumen, entonación)",
                    "La estructura lógica de las oraciones",
                    "El significado literal del vocabulario en el diccionario"
                ],
                "correct": 1,
                "explanation": "La paralingüística estudia los aspectos no verbales del habla, tales como el volumen, el tono, el ritmo y la entonación."
            },
            {
                "id": 11,
                "subject": "Historia",
                "question": "¿Qué evento histórico marca tradicionalmente el inicio de la Edad Media?",
                "options": [
                    "La Revolución Francesa",
                    "La caída del Imperio Romano de Occidente",
                    "El descubrimiento de América",
                    "La invención de la escritura cuneiforme"
                ],
                "correct": 1,
                "explanation": "La caída de Roma en el 476 d.C. puso fin al Imperio Romano de Occidente y marca el inicio de la Edad Media."
            },
            {
                "id": 12,
                "subject": "Historia",
                "question": "¿En qué año exacto se sitúa convencionalmente el comienzo de la Edad Media?",
                "options": [
                    "476 d.C.",
                    "1492 d.C.",
                    "1453 d.C.",
                    "33 d.C."
                ],
                "correct": 0,
                "explanation": "El año 476 d.C. se toma convencionalmente como el inicio de la Edad Media en Occidente."
            },
            {
                "id": 13,
                "subject": "Historia",
                "question": "¿Cuál fue el sistema de organización política, social y económica que predominó en Europa durante la Edad Media?",
                "options": [
                    "Capitalismo mercantil",
                    "Esclavismo clásico",
                    "Feudalismo",
                    "Socialismo utópico"
                ],
                "correct": 2,
                "explanation": "El feudalismo fue el sistema político, social y económico basado en el feudo que prevaleció durante la Edad Media europea."
            },
            {
                "id": 14,
                "subject": "Historia",
                "question": "Durante la Edad Media, la institución que concentró el mayor poder político, cultural y espiritual en Europa fue:",
                "options": [
                    "El Imperio Otomano",
                    "La Iglesia Católica",
                    "La monarquía parlamentaria",
                    "El gremio de comerciantes"
                ],
                "correct": 1,
                "explanation": "La Iglesia Católica fue la institución central y con mayor influencia cultural, espiritual y política durante el medioevo europeo."
            },
            {
                "id": 15,
                "subject": "Historia",
                "question": "Historiográficamente, la Edad Media suele dividirse en dos grandes periodos conocidos como:",
                "options": [
                    "Edad Antigua y Edad Nueva",
                    "Alta Edad Media y Baja Edad Media",
                    "Renacimiento y Barroco",
                    "Época Clásica y Época Helenística"
                ],
                "correct": 1,
                "explanation": "La Edad Media se divide tradicionalmente en Alta Edad Media (siglos V al X) y Baja Edad Media (siglos XI al XV)."
            },
            {
                "id": 16,
                "subject": "Historia",
                "question": "Al inicio de la Edad Media, el territorio que pertenecía a Roma sufrió una serie de invasiones por parte de pueblos que los romanos llamaban:",
                "options": [
                    "Hunos y Mongoles",
                    "Bárbaros (como los pueblos germanos)",
                    "Otomanos",
                    "Vikingos y Celtas"
                ],
                "correct": 1,
                "explanation": "Los romanos llamaban bárbaros a los pueblos que vivían fuera de las fronteras de su imperio y no compartían su cultura, en especial los pueblos germanos."
            },
            {
                "id": 17,
                "subject": "Historia",
                "question": "¿Qué gran evento de 1453 es considerado por muchos historiadores como el punto de inicio de la Edad Moderna?",
                "options": [
                    "La caída de Constantinopla (fin del Imperio Bizantino)",
                    "El fin de la Guerra de los Cien Años",
                    "La firma de la Carta Magna",
                    "La Revolución Industrial"
                ],
                "correct": 0,
                "explanation": "La caída de Constantinopla en 1453 marcó el fin del Imperio Bizantino y es un hito de cambio hacia la Edad Moderna."
            },
            {
                "id": 18,
                "subject": "Historia",
                "question": "Además de 1453, ¿qué otro acontecimiento trascendental del año 1492 se utiliza comúnmente para marcar el inicio de la Edad Moderna?",
                "options": [
                    "La invención de la pólvora",
                    "La llegada de Cristóbal Colón a América",
                    "La caída del Imperio Carolingio",
                    "La redacción de las 95 tesis de Lutero"
                ],
                "correct": 1,
                "explanation": "La llegada de Cristóbal Colón a América en 1492 es el hito geográfico clave que marca el inicio de la Edad Moderna."
            },
            {
                "id": 19,
                "subject": "Historia",
                "question": "El movimiento intelectual y filosófico clave que marcó el paso a la Edad Moderna, centrado en el estudio y valor del ser humano, se conoce como:",
                "options": [
                    "Teocentrismo",
                    "Humanismo",
                    "Oscurantismo",
                    "Ilustración"
                ],
                "correct": 1,
                "explanation": "El Humanismo fue el movimiento intelectual del Renacimiento que valoró la dignidad, libertad y capacidad del ser humano."
            },
            {
                "id": 20,
                "subject": "Historia",
                "question": "En la transición a la Edad Moderna, la mentalidad cambió de explicar todo a través de Dios (Teocentrismo) a poner al ser humano como medida de todas las cosas. A esto se le llama:",
                "options": [
                    "Antropocentrismo",
                    "Heliocentrismo",
                    "Geocentrismo",
                    "Politeísmo"
                ],
                "correct": 0,
                "explanation": "El Antropocentrismo es la mentalidad que sitúa al ser humano como centro de todas las cosas, en contraste con el Teocentrismo medieval."
            },
            {
                "id": 21,
                "subject": "Razonamiento Verbal",
                "question": "Selecciona el sinónimo correcto para la palabra \"EFÍMERO\":",
                "options": [
                    "Eterno",
                    "Pasajero",
                    "Constante",
                    "Duradero"
                ],
                "correct": 1,
                "explanation": "Efímero es algo que dura poco tiempo)."
            },
            {
                "id": 22,
                "subject": "Razonamiento Verbal",
                "question": "¿Cuál de las siguientes palabras es un sinónimo de \"PERSPICAZ\"?",
                "options": [
                    "Astuto",
                    "Torpe",
                    "Ingenuo",
                    "Lento"
                ],
                "correct": 0,
                "explanation": "Perspicaz es alguien con agudeza mental)."
            },
            {
                "id": 23,
                "subject": "Razonamiento Verbal",
                "question": "Identifica el antónimo de la palabra \"ABUNDANTE\":",
                "options": [
                    "Copioso",
                    "Excesivo",
                    "Escaso",
                    "Lleno"
                ],
                "correct": 2,
                "explanation": "Lo opuesto a abundante es escaso o poco)."
            },
            {
                "id": 24,
                "subject": "Razonamiento Verbal",
                "question": "Elige el antónimo correcto para \"ERUDITO\":",
                "options": [
                    "Sabio",
                    "Ignorante",
                    "Culto",
                    "Inteligente"
                ],
                "correct": 1,
                "explanation": "Un erudito es alguien instruido, su opuesto es ignorante)."
            },
            {
                "id": 25,
                "subject": "Razonamiento Verbal",
                "question": "Si \"Ocultar\" es sinónimo de \"Esconder\", ¿cuál es el antónimo de \"OCULTAR\"?",
                "options": [
                    "Tapar",
                    "Disimular",
                    "Revelar",
                    "Proteger"
                ],
                "correct": 2,
                "explanation": "Lo contrario de mantener algo oculto es revelarlo o mostrarlo)."
            },
            {
                "id": 26,
                "subject": "Razonamiento Numérico",
                "question": "Resuelve la siguiente ecuación lineal: Si 3x+5=20, ¿cuál es el valor de x?",
                "options": [
                    "3",
                    "5",
                    "10",
                    "15"
                ],
                "correct": 1,
                "explanation": "Se resta 5 de ambos lados: 3x=15. Luego se divide entre 3: x=5)."
            },
            {
                "id": 27,
                "subject": "Razonamiento Numérico",
                "question": "Calcula el porcentaje: ¿Cuál es el 20% de 150?",
                "options": [
                    "20",
                    "30",
                    "15",
                    "50"
                ],
                "correct": 1,
                "explanation": "Se multiplica 150×0.20=30)."
            },
            {
                "id": 28,
                "subject": "Razonamiento Numérico",
                "question": "Problema de ecuación: Ana tiene el doble de la edad de Juan. Si ambas edades suman 36 años, ¿cuántos años tiene Juan?",
                "options": [
                    "12 años",
                    "18 años",
                    "24 años",
                    "10 años"
                ],
                "correct": 0,
                "explanation": "Juan = x, Ana = 2x. Entonces x+2x=36→3x=36→x=12)."
            },
            {
                "id": 29,
                "subject": "Razonamiento Numérico",
                "question": "Problema de porcentaje: Una camisa cuesta $40, pero la tienda ofrece un descuento del 25%. ¿Cuánto se pagará finalmente por la camisa?",
                "options": [
                    "$10",
                    "$25",
                    "$30",
                    "$35"
                ],
                "correct": 2,
                "explanation": "El 25% de 40 es 10. Se resta el descuento al precio original: 40−10=30)."
            },
            {
                "id": 30,
                "subject": "Razonamiento Numérico",
                "question": "Problema mixto: Si el 15% de un número desconocido es 45, ¿cuál es ese número?",
                "options": [
                    "150",
                    "200",
                    "300",
                    "400"
                ],
                "correct": 2,
                "explanation": "La ecuación es 0.15x=45. Al despejar x dividiendo 45/0.15, obtenemos 300)."
            }
        ],
        "Martes": [
            {
                "id": 1,
                "subject": "Lengua y Literatura",
                "question": "¿Qué es la \"descontextualización\" de un texto o discurso?",
                "options": [
                    "Resumir las ideas principales de un texto larguísimo.",
                    "Extraer una frase o idea de su entorno original, alterando o cambiando su significado inicial.",
                    "Traducir un documento a un idioma diferente al original.",
                    "Leer un poema dándole la entonación equivocada."
                ],
                "correct": 1,
                "explanation": "El texto expositivo tiene como propósito principal informar, transmitir y explicar datos o ideas de forma puramente objetiva, estructurada y sin valoraciones del autor."
            },
            {
                "id": 2,
                "subject": "Lengua y Literatura",
                "question": "¿Cuál es el principal riesgo o consecuencia de descontextualizar la declaración de una persona en los medios de comunicación?",
                "options": [
                    "Que la noticia se vuelva aburrida.",
                    "Que se mejore la ortografía del mensaje original.",
                    "Que se tergiverse o manipule lo que la persona realmente quiso decir.",
                    "Que el discurso se convierta en poesía."
                ],
                "correct": 2,
                "explanation": "La estructura clásica de un texto expositivo consta de introducción (presentación del tema), desarrollo (explicación de las ideas) y conclusión (síntesis de lo expuesto)."
            },
            {
                "id": 3,
                "subject": "Lengua y Literatura",
                "question": "¿Qué es una \"falacia\" en el ámbito de la lógica y la argumentación?",
                "options": [
                    "Un argumento válido y comprobado científicamente.",
                    "Un error de ortografía en un texto académico.",
                    "Un argumento que parece válido o lógico, pero que en realidad es engañoso o incorrecto.",
                    "Un recurso poético para expresar emociones profundas."
                ],
                "correct": 2,
                "explanation": "Para mantener la objetividad y precisión, los textos expositivos utilizan un lenguaje claro, denotativo y directo."
            },
            {
                "id": 4,
                "subject": "Lengua y Literatura",
                "question": "Si alguien dice: \"No debes hacer caso a la teoría económica del profesor porque él viste muy mal\", ¿qué tipo de falacia está cometiendo?",
                "options": [
                    "Falacia ad hominem (atacar a la persona y no al argumento).",
                    "Falacia de autoridad.",
                    "Falacia de generalización apresurada.",
                    "Falacia de falso dilema."
                ],
                "correct": 0,
                "explanation": "El artículo de opinión es un texto periodístico de carácter argumentativo en el que un autor firma y expone sus opiniones e interpretaciones sobre un tema relevante."
            },
            {
                "id": 5,
                "subject": "Lengua y Literatura",
                "question": "¿Qué diferencia a una falacia argumentativa de una simple mentira?",
                "options": [
                    "La mentira tiene estructura lógica, la falacia no.",
                    "La falacia intenta usar una estructura de razonamiento para parecer verdad, la mentira es solo una falsedad directa.",
                    "Las falacias solo se usan por escrito y las mentiras solo de forma oral.",
                    "No hay diferencia, son exactamente el mismo concepto."
                ],
                "correct": 1,
                "explanation": "El artículo de opinión busca argumentar y persuadir, por lo que pertenece a los textos de tipo argumentativo."
            },
            {
                "id": 6,
                "subject": "Lengua y Literatura",
                "question": "¿Qué es un debate?",
                "options": [
                    "Una charla informal entre amigos sobre el clima.",
                    "Una exposición de un solo experto que no admite preguntas.",
                    "Una discusión formal y estructurada en la que dos o más partes exponen y defienden posturas contrarias sobre un tema.",
                    "Un texto escrito que resume una novela."
                ],
                "correct": 2,
                "explanation": "El objetivo principal del artículo de opinión es influir en el pensamiento del lector y persuadirlo mediante argumentos."
            },
            {
                "id": 7,
                "subject": "Lengua y Literatura",
                "question": "En la estructura de un debate formal, ¿cuál es el rol principal del moderador?",
                "options": [
                    "Opinar a favor del equipo que le parezca más inteligente.",
                    "Introducir el tema, dar los turnos de palabra, controlar el tiempo y mantener el orden.",
                    "Interrumpir constantemente a los debatientes para dar sus propios argumentos.",
                    "Escribir el guion exacto de lo que dirá cada participante."
                ],
                "correct": 1,
                "explanation": "La poesía es un género literario caracterizado por expresar la emotividad, los sentimientos y las visiones estéticas a través de un lenguaje rítmico y armónico."
            },
            {
                "id": 8,
                "subject": "Lengua y Literatura",
                "question": "En un debate, ¿qué nombre reciben las pruebas o razonamientos que utiliza un participante para sostener su postura?",
                "options": [
                    "Metáforas",
                    "Antónimos",
                    "Argumentos",
                    "Falacias"
                ],
                "correct": 2,
                "explanation": "Las figuras literarias (como la metáfora, el símil y la hipérbole) son los recursos por excelencia de la poesía para embellecer y dar expresividad al lenguaje."
            },
            {
                "id": 9,
                "subject": "Lengua y Literatura",
                "question": "Para refutar en un debate, un participante debe:",
                "options": [
                    "Atacar personalmente a su oponente.",
                    "Evitar el tema y hablar de otra cosa.",
                    "Exponer los fallos o debilidades en el argumento del equipo contrario.",
                    "Gritar más fuerte que los demás."
                ],
                "correct": 2,
                "explanation": "Una estrofa es un conjunto de versos agrupados bajo una estructura métrica o rítmica específica en un poema."
            },
            {
                "id": 10,
                "subject": "Lengua y Literatura",
                "question": "¿Por qué es perjudicial el uso de falacias en un debate serio?",
                "options": [
                    "Porque hacen que el debate dure menos tiempo.",
                    "Porque son razonamientos engañosos que invalidan la argumentación lógica.",
                    "Porque obliga a los debatientes a usar diccionarios.",
                    "Porque le dan todo el poder al moderador."
                ],
                "correct": 1,
                "explanation": "La paralingüística estudia los aspectos no verbales del habla, tales como el volumen, el tono, el ritmo y la entonación."
            },
            {
                "id": 11,
                "subject": "Historia",
                "question": "¿Qué gran acontecimiento político y social de 1789 marca convencionalmente el inicio de la Época Contemporánea?",
                "options": [
                    "El descubrimiento de América",
                    "La caída del Imperio Romano",
                    "La Revolución Francesa",
                    "La Revolución Rusa"
                ],
                "correct": 2,
                "explanation": "La caída de Roma en el 476 d.C. puso fin al Imperio Romano de Occidente y marca el inicio de la Edad Media."
            },
            {
                "id": 12,
                "subject": "Historia",
                "question": "¿Cuál de estos procesos transformó radicalmente la economía, la sociedad y el trabajo durante la Época Contemporánea?",
                "options": [
                    "La consolidación del Feudalismo",
                    "La Revolución Industrial",
                    "Las Cruzadas religiosas",
                    "El fin de la escritura"
                ],
                "correct": 1,
                "explanation": "El año 476 d.C. se toma convencionalmente como el inicio de la Edad Media en Occidente."
            },
            {
                "id": 13,
                "subject": "Historia",
                "question": "Cronológicamente, la Época Contemporánea abarca:",
                "options": [
                    "Desde finales del siglo XVIII hasta la actualidad.",
                    "Todo el siglo V y siglo VI.",
                    "Exclusivamente desde el año 2000 en adelante.",
                    "Desde el inicio de la agricultura hasta la invención de la rueda."
                ],
                "correct": 0,
                "explanation": "El feudalismo fue el sistema político, social y económico basado en el feudo que prevaleció durante la Edad Media europea."
            },
            {
                "id": 14,
                "subject": "Historia",
                "question": "¿Cuál de los siguientes eventos históricos clave NO pertenece a la Época Contemporánea?",
                "options": [
                    "La Primera Guerra Mundial",
                    "La Guerra Fría",
                    "La llegada del hombre a la Luna",
                    "El Renacimiento europeo"
                ],
                "correct": 3,
                "explanation": "La Iglesia Católica fue la institución central y con mayor influencia cultural, espiritual y política durante el medioevo europeo."
            },
            {
                "id": 15,
                "subject": "Historia",
                "question": "En términos demográficos y sociales, la Época Contemporánea se ha caracterizado por:",
                "options": [
                    "El abandono total de las ciudades y el regreso al campo.",
                    "Una reducción drástica de la población mundial.",
                    "El crecimiento explosivo de la población y el avance de la globalización.",
                    "El aislamiento total entre continentes."
                ],
                "correct": 2,
                "explanation": "La Edad Media se divide tradicionalmente en Alta Edad Media (siglos V al X) y Baja Edad Media (siglos XI al XV)."
            },
            {
                "id": 16,
                "subject": "Historia",
                "question": "Hablando del \"Origen de Grecia\", ¿en qué espacio geográfico se desarrolló principalmente esta civilización en la Antigüedad?",
                "options": [
                    "En la cuenca del Río Amazonas.",
                    "En la Península de los Balcanes y las islas del Mar Egeo.",
                    "En el norte de Europa, cerca de los glaciares.",
                    "En el desierto del Sahara."
                ],
                "correct": 1,
                "explanation": "Los romanos llamaban bárbaros a los pueblos que vivían fuera de las fronteras de su imperio y no compartían su cultura, en especial los pueblos germanos."
            },
            {
                "id": 17,
                "subject": "Historia",
                "question": "¿Qué civilización precursora, desarrollada en la isla de Creta, sentó bases importantes para la futura cultura griega?",
                "options": [
                    "La civilización minoica",
                    "La civilización egipcia antigua",
                    "La civilización azteca",
                    "El imperio mongol"
                ],
                "correct": 0,
                "explanation": "La caída de Constantinopla en 1453 marcó el fin del Imperio Bizantino y es un hito de cambio hacia la Edad Moderna."
            },
            {
                "id": 18,
                "subject": "Historia",
                "question": "Las primeras formas de organización territorial y política que desarrollaron los griegos en la antigüedad recibieron el nombre de:",
                "options": [
                    "Feudos",
                    "Imperios absolutos",
                    "Polis (ciudades-estado)",
                    "Provincias"
                ],
                "correct": 2,
                "explanation": "La llegada de Cristóbal Colón a América en 1492 es el hito geográfico clave que marca el inicio de la Edad Moderna."
            },
            {
                "id": 19,
                "subject": "Historia",
                "question": "¿Cuál era un elemento cultural fundamental que unía a todos los griegos antiguos, a pesar de estar divididos en distintas ciudades independientes?",
                "options": [
                    "El uso de una moneda única de papel.",
                    "El idioma (el griego) y su religión mitológica compartida.",
                    "El sometimiento a un único rey supremo.",
                    "La prohibición de realizar actividades deportivas."
                ],
                "correct": 1,
                "explanation": "El Humanismo fue el movimiento intelectual del Renacimiento que valoró la dignidad, libertad y capacidad del ser humano."
            },
            {
                "id": 20,
                "subject": "Historia",
                "question": "La otra gran civilización precursora de la Grecia Clásica, que sucedió a los minoicos y que se caracterizó por su perfil guerrero en el Peloponeso, fue la civilización:",
                "options": [
                    "Cartaginesa",
                    "Sumeria",
                    "Micénica",
                    "Celta"
                ],
                "correct": 2,
                "explanation": "El Antropocentrismo es la mentalidad que sitúa al ser humano como centro de todas las cosas, en contraste con el Teocentrismo medieval."
            },
            {
                "id": 21,
                "subject": "Razonamiento Verbal",
                "question": "La música es un lenguaje _______ que trasciende las _______ culturales.",
                "options": [
                    "universal / barreras",
                    "local / costumbres",
                    "antiguo / historias",
                    "ruidoso / notas"
                ],
                "correct": 0,
                "explanation": "Explicación del tema: Razonamiento Verbal."
            },
            {
                "id": 22,
                "subject": "Razonamiento Verbal",
                "question": "A pesar de su _______, el anciano caminaba con una _______ sorprendente.",
                "options": [
                    "juventud / lentitud",
                    "debilidad / fuerza",
                    "riqueza / pobreza",
                    "alegría / tristeza"
                ],
                "correct": 1,
                "explanation": "Explicación del tema: Razonamiento Verbal."
            },
            {
                "id": 23,
                "subject": "Razonamiento Verbal",
                "question": "El científico observó los resultados con _______, ya que refutaban su _______ principal.",
                "options": [
                    "alegría / experimento",
                    "asombro / hipótesis",
                    "indiferencia / teoría",
                    "enojo / vida"
                ],
                "correct": 1,
                "explanation": "Explicación del tema: Razonamiento Verbal."
            },
            {
                "id": 24,
                "subject": "Razonamiento Verbal",
                "question": "La lectura constante _______ el vocabulario y _______ la capacidad de comprensión.",
                "options": [
                    "disminuye / mejora",
                    "enriquece / aumenta",
                    "limita / frena",
                    "olvida / reduce"
                ],
                "correct": 1,
                "explanation": "Explicación del tema: Razonamiento Verbal."
            },
            {
                "id": 25,
                "subject": "Razonamiento Verbal",
                "question": "Su actitud _______ durante la reunión generó un ambiente de _______ entre los asistentes.",
                "options": [
                    "hostil / tensión",
                    "amigable / pánico",
                    "pasiva / euforia",
                    "misteriosa / sueño"
                ],
                "correct": 0,
                "explanation": "Explicación del tema: Razonamiento Verbal."
            },
            {
                "id": 26,
                "subject": "Razonamiento Verbal",
                "question": "¿Qué significa el refrán \"A caballo regalado no se le mira el diente\"?",
                "options": [
                    "Los caballos son regalos muy costosos.",
                    "No se debe criticar o buscar defectos a algo que se ha recibido gratis.",
                    "Hay que llevar a los animales al veterinario constantemente.",
                    "Es de mala educación regalar animales de granja."
                ],
                "correct": 1,
                "explanation": "Explicación del tema: Razonamiento Verbal."
            },
            {
                "id": 27,
                "subject": "Razonamiento Verbal",
                "question": "¿Qué expresa el refrán \"Más vale tarde que nunca\"?",
                "options": [
                    "Es mejor llegar siempre tarde a todos los lugares.",
                    "Es preferible hacer algo después de lo esperado que no hacerlo en absoluto.",
                    "Las personas puntuales suelen estresarse menos.",
                    "El tiempo pasa muy rápido y no se puede recuperar."
                ],
                "correct": 1,
                "explanation": "Explicación del tema: Razonamiento Verbal."
            },
            {
                "id": 28,
                "subject": "Razonamiento Verbal",
                "question": "¿Cuál es el significado de \"Camarón que se duerme se lo lleva la corriente\"?",
                "options": [
                    "A los animales marinos les gusta nadar a favor de la corriente.",
                    "Las personas perezosas o distraídas pierden grandes oportunidades.",
                    "Hay que dormir bien para tener la energía necesaria en el trabajo.",
                    "Los ríos profundos son peligrosos para nadar de noche."
                ],
                "correct": 1,
                "explanation": "Explicación del tema: Razonamiento Verbal."
            },
            {
                "id": 29,
                "subject": "Razonamiento Verbal",
                "question": "El refrán \"Dime con quién andas y te diré quién eres\" sugiere que:",
                "options": [
                    "Las amistades influyen directamente en el comportamiento y la reputación de una persona.",
                    "Es fácil adivinar el nombre de alguien simplemente conociendo a sus amigos.",
                    "Las personas solitarias carecen de una identidad propia.",
                    "Caminar acompañado por la calle es mucho más seguro."
                ],
                "correct": 0,
                "explanation": "Explicación del tema: Razonamiento Verbal."
            },
            {
                "id": 30,
                "subject": "Razonamiento Verbal",
                "question": "¿Qué enseñanza deja \"Aunque la mona se vista de seda, mona se queda\"?",
                "options": [
                    "La ropa elegante está diseñada exclusivamente para seres humanos.",
                    "La apariencia externa y la ropa no cambian la verdadera esencia o naturaleza de alguien.",
                    "Los animales en cautiverio no deben ser disfrazados con ropa humana.",
                    "La seda es una tela de muy mala calidad que se daña rápido."
                ],
                "correct": 1,
                "explanation": "Explicación del tema: Razonamiento Verbal."
            },
            {
                "id": 31,
                "subject": "Razonamiento Numérico",
                "question": "Si 5 manzanas cuestan $15, ¿cuánto costarán 8 manzanas?",
                "options": [
                    "$20",
                    "$24",
                    "$30",
                    "$40"
                ],
                "correct": 1,
                "explanation": "Para resolver esto, primero identificamos que es regla de tres directa, así que multiplicamos cruzado las 8 manzanas por los 15 dólares, lo que da 120. Finalmente, dividimos ese 120 entre las 5 manzanas originales y nos da 24"
            },
            {
                "id": 32,
                "subject": "Razonamiento Numérico",
                "question": "Si 4 pintores tardan 6 días en pintar una casa, ¿cuántos días tardarán 8 pintores en pintar la misma casa trabajando al mismo ritmo?",
                "options": [
                    "3 días",
                    "4 días",
                    "8 días",
                    "12 días"
                ],
                "correct": 0,
                "explanation": "Para resolver esto, primero notamos que es regla de tres inversa porque a más pintores, menos días. Luego multiplicamos en línea recta los 4 pintores por los 6 días, que da 24, y dividimos eso entre los 8 nuevos pintores, obteniendo 3 días"
            },
            {
                "id": 33,
                "subject": "Razonamiento Numérico",
                "question": "Un vehículo recorre 200 kilómetros utilizando 4 galones de gasolina. ¿Cuántos galones necesitará exactamente para recorrer 500 kilómetros?",
                "options": [
                    "8 galones",
                    "10 galones",
                    "12 galones",
                    "15 galones"
                ],
                "correct": 1,
                "explanation": "Para resolver esto, primero vemos que es directa, así que multiplicamos cruzado los 500 kilómetros por los 4 galones, dando 2000. Al final, dividimos esos 2000 entre los 200 kilómetros iniciales, dándonos 10 galones"
            },
            {
                "id": 34,
                "subject": "Razonamiento Numérico",
                "question": "Dados los conjuntos A = {2, 4, 6, 8} y B = {4, 8, 12}, ¿cuál es el resultado de la intersección A ∩ B?",
                "options": [
                    "{2, 4, 6, 8, 12}",
                    "{4}",
                    "{4, 8}",
                    "{2, 6}"
                ],
                "correct": 2,
                "explanation": "Para resolver esto, primero recordamos que \"intersección\" significa buscar lo que tienen en común. Luego, revisamos los dos grupos y extraemos solo los números que se repiten en ambos, que son el 4 y el 8"
            },
            {
                "id": 35,
                "subject": "Razonamiento Numérico",
                "question": "En una clase de 40 alumnos, 25 practican fútbol y 20 practican natación. Si se sabe que todos los alumnos practican al menos uno de estos deportes, ¿cuántos alumnos practican AMBOS deportes?",
                "options": [
                    "5 alumnos",
                    "10 alumnos",
                    "15 alumnos",
                    "20 alumnos"
                ],
                "correct": 0,
                "explanation": "Para resolver esto, primero sumamos todos los alumnos de ambos deportes: 25 + 20 = 45. Luego, como sabemos que en la clase solo hay 40 alumnos reales, restamos 45 menos 40, y esos 5 que \"sobran\" son los que hacen ambas actividades"
            }
        ],
        "Miércoles": [],
        "Jueves": [],
        "Viernes": [],
        "Sábado": [],
        "Domingo": []
    },
    "Semana 2": {
        "Lunes": [],
        "Martes": [],
        "Miércoles": [],
        "Jueves": [],
        "Viernes": [],
        "Sábado": [],
        "Domingo": []
    },
    "Semana 3": {
        "Lunes": [],
        "Martes": [],
        "Miércoles": [],
        "Jueves": [],
        "Viernes": [],
        "Sábado": [],
        "Domingo": []
    },
    "Semana 4": {
        "Lunes": [],
        "Martes": [],
        "Miércoles": [],
        "Jueves": [],
        "Viernes": [],
        "Sábado": [],
        "Domingo": []
    }
};

// Banco de contenidos de estudio organizados por Semana y Día
const studyData = {
    "Semana 1": {
        "Lunes": [
            {
                "topic": "El texto expositivo",
                "subject": "Lengua y Literatura",
                "concept": "El texto expositivo es aquel que aborda de manera objetiva un asunto o tema determinado, con la finalidad de dar a conocer e informar una serie de hechos, datos o conceptos específicos. Su estructura suele ser muy clara, dividiéndose por lo general en una introducción (que presenta el tema), un desarrollo (donde se exponen y explican las ideas detalladamente) y una conclusión (que sintetiza los aspectos más importantes tratados).\n\nEste tipo de texto se caracteriza por el uso de un lenguaje formal, denotativo y preciso, evitando tecnicismos innecesarios o, en caso de utilizarlos, explicándolos de forma sencilla. La objetividad es primordial, por lo que se redacta preferentemente en tercera persona gramatical y se descarta cualquier tipo de opinión personal, juicio de valor o emoción por parte del autor, garantizando así la neutralidad de la información.",
                "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=el+texto+expositivo",
                "exercises": []
            },
            {
                "topic": "El artículo de opinión",
                "subject": "Lengua y Literatura",
                "concept": "El artículo de opinión es un texto de carácter periodístico y argumentativo en el que un autor (frecuentemente un analista o personalidad destacada) expresa su punto de vista, postura o valoración subjetiva acerca de un tema de relevancia pública o interés general. A diferencia de las noticias informativas puras, su objetivo principal no es solo narrar hechos, sino convencer, persuadir o hacer reflexionar al lector sobre una temática particular mediante argumentos lógicos y retóricos.\n\nLa estructura de este género suele constar de una tesis o planteamiento inicial, un cuerpo argumentativo consolidado con datos, ejemplos o analogías, y una conclusión que refuerza la postura defendida. Al llevar la firma de su autor, el artículo de opinión goza de una gran libertad estilística, permitiendo un lenguaje más personal, expresivo y persuasivo que otros géneros periodísticos tradicionales.",
                "image": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=el+articulo+de+opinion",
                "exercises": []
            },
            {
                "topic": "La expresión del sentimiento a través de palabras (poesía)",
                "subject": "Lengua y Literatura",
                "concept": "La poesía es un género literario sumamente expresivo a través del cual el ser humano manifiesta sus emociones más íntimas, sentimientos profundos, reflexiones y visiones estéticas del mundo utilizando la palabra escrita o hablada. A nivel formal, la poesía tradicional se ha estructurado en versos (líneas individuales) que a su vez se agrupan en estrofas, siguiendo patrones rítmicos y métricos determinados, aunque la poesía contemporánea también acoge el verso libre y el poema en prosa.\n\nLo que define fundamentalmente a la poesía es el uso de un lenguaje figurado y poético enriquecido por figuras literarias como la metáfora, el símil, la personificación y la hipérbole. Estos recursos permiten embellecer el discurso, transmitir sensaciones complejas y crear imágenes mentales memorables en el lector, yendo más allá del significado literal de las palabras para evocar una respuesta emocional única.",
                "image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=la+poesia+expresion+del+sentimiento",
                "exercises": []
            },
            {
                "topic": "Elementos paralingüísticos: La entonación",
                "subject": "Lengua y Literatura",
                "concept": "La entonación es un elemento paralingüístico fundamental en la comunicación verbal, consistente en la modulación y variación del tono de la voz a lo largo de un enunciado. Esta melodía del habla cumple una función primordial en la transmisión de significados y en la estructura gramatical, ya que permite distinguir visual y auditivamente si una frase es una afirmación, una pregunta o una exclamación, facilitando al receptor la decodificación correcta del mensaje.\n\nMás allá de su función sintáctica, la entonación refleja de manera directa el estado emocional y la actitud del hablante, expresando sorpresa, ironía, enojo, duda o cordialidad. Al acompañar y matizar al lenguaje verbal, el tono, junto con el ritmo y la velocidad, constituye el canal no verbal a través del cual se añade valor subjetivo y contexto al significado literal de las palabras que pronunciamos.",
                "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=elementos+paralinguisticos+la+entonacion",
                "exercises": []
            },
            {
                "topic": "El inicio de la Edad media",
                "subject": "Historia",
                "concept": "El inicio de la Edad Media se sitúa tradicionalmente en el año 476 d.C., momento histórico en el que se produce la caída del Imperio Romano de Occidente tras la deposición del último emperador, Rómulo Augústulo, por el caudillo bárbaro Odoacro. Este trascendental acontecimiento marcó el colapso del poder político unificado en Europa y abrió paso a una época de gran fragmentación territorial, donde surgieron múltiples reinos germánicos en las antiguas provincias imperiales.\n\nEste periodo inicial de transición se caracterizó por la ruralización de la sociedad europea debido a la inseguridad en las ciudades y al cese del comercio internacional a gran escala. Las poblaciones buscaron protección bajo el cobijo de terratenientes locales, lo que sentó las bases del feudalismo, un sistema socioeconómico basado en relaciones de vasallaje y fidelidad, acompañado por el surgimiento de la Iglesia Católica como la principal fuerza unificadora espiritual y política de Europa occidental.",
                "image": "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=el+inicio+de+la+edad+media",
                "exercises": []
            },
            {
                "topic": "El inicio de la Edad moderna",
                "subject": "Historia",
                "concept": "El inicio de la Edad Moderna se asocia convencionalmente a dos hitos históricos de gran trascendencia global: la caída de Constantinopla en manos del Imperio Otomano en 1453 (que puso fin definitivo al Imperio Romano de Oriente o Bizantino) y la llegada de Cristóbal Colón a tierras americanas en 1492. Estos acontecimientos quebraron el relativo aislamiento geográfico de Europa medieval y propiciaron la expansión marítima, comercial e intelectual a escala transcontinental.\n\nEsta nueva era se definió por un profundo cambio cultural y filosófico conocido como el Humanismo, el cual desplazó el pensamiento teocéntrico de la Edad Media para situar al ser humano en el centro del conocimiento y del universo (antropocentrismo). Apoyado por el Renacimiento en las artes, la invención de la imprenta por Gutenberg y la posterior Reforma Protestante, el periodo moderno impulsó el auge de las ciencias experimentales, los estados nacionales y el nacimiento de las primeras economías globales de carácter mercantilista.",
                "image": "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=el+inicio+de+la+edad+moderna",
                "exercises": []
            },
            {
                "topic": "Sinónimos",
                "subject": "Razonamiento Verbal",
                "concept": "Los sinónimos son términos o palabras que pertenecen a la misma categoría gramatical y comparten un significado idéntico o muy similar, a pesar de tener una escritura y pronunciación diferentes. Su uso es esencial para enriquecer el vocabulario, dotar de fluidez a la redacción y evitar la repetición monótona de vocablos en los textos. Se dividen en sinónimos absolutos (intercambiables en cualquier contexto, como 'abecedario' y 'alfabeto') y sinónimos relativos (cuyo intercambio depende del contexto, como 'cálido' y 'afectuoso').",
                "image": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=sinonimos+razonamiento+verbal",
                "exercises": [
                    {
                        "problem": "Identifique cuál de las opciones representa el sinónimo más adecuado para la palabra 'Furtivo' en la siguiente frase:\n\n'El sospechoso realizó un movimiento furtivo antes de cruzar la calle'.\n\na) Rápido\nb) Disimulado\nc) Torpe\nd) Evidente",
                        "solution": "1. Analizamos el contexto de la palabra 'furtivo', que hace referencia a algo que se hace a escondidas, de manera oculta o secreta para no ser visto.\n2. Evaluamos las opciones:\n   - 'Rápido' alude a velocidad.\n   - 'Disimulado' o 'sigiloso' indica que se hace ocultando la intención, es decir, de manera oculta o furtiva.\n   - 'Torpe' se refiere a falta de habilidad.\n   - 'Evidente' es lo opuesto (antónimo).\n3. Por tanto, la opción correcta es la b) Disimulado."
                    },
                    {
                        "problem": "Encuentre el sinónimo de la palabra 'Enigmático':\n\na) Claro\nb) Misterioso\nc) Ruidoso\nd) Pasajero",
                        "solution": "1. El término 'enigmático' deriva de enigma, que representa algo difícil de comprender, oculto o misterioso.\n2. Revisando las opciones:\n   - 'Claro' es antónimo.\n   - 'Misterioso' representa exactamente la condición de encerrar un misterio o enigma.\n   - 'Ruidoso' y 'Pasajero' no tienen relación semántica con la palabra.\n3. La opción correcta es la b) Misterioso."
                    }
                ]
            },
            {
                "topic": "Antónimos",
                "subject": "Razonamiento Verbal",
                "concept": "Los antónimos son palabras que pertenecen a la misma categoría gramatical pero expresan significados opuestos, contrarios o inversos entre sí. Al igual que los sinónimos, son fundamentales para la precisión léxica y el razonamiento analítico. Existen diferentes clases de antónimos: graduales (hay términos intermedios, como 'frío' y 'caliente', donde existe 'templado'), complementarios (la existencia de uno descarta al otro, como 'vivo' y 'muerto') y recíprocos (uno no puede existir sin el otro, como 'comprar' y 'vender').",
                "image": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=antonimos+razonamiento+verbal",
                "exercises": [
                    {
                        "problem": "Determine el antónimo correspondiente para la palabra 'Apatía' en el contexto de la educación:\n\na) Desinterés\nb) Entusiasmo\nc) Cansancio\nd) Indiferencia",
                        "solution": "1. La palabra 'apatía' significa estado de desinterés, falta de motivación, energía o emoción ante las cosas.\n2. Buscamos el significado opuesto (antónimo):\n   - 'Desinterés' e 'Indiferencia' son sinónimos de apatía.\n   - 'Cansancio' es un estado físico.\n   - 'Entusiasmo' significa exaltación del ánimo, gran interés y motivación, lo cual es el opuesto directo a la falta de interés (apatía).\n3. La respuesta correcta es la b) Entusiasmo."
                    },
                    {
                        "problem": "Señale el antónimo de la palabra 'Efímero':\n\na) Pasajero\nb) Fugaz\nc) Duradero\nd) Breve",
                        "solution": "1. 'Efímero' describe algo que dura un periodo de tiempo muy corto, pasajero o fugaz.\n2. Analizamos las opciones para hallar la opuesta:\n   - 'Pasajero', 'Fugaz' y 'Breve' son sinónimos directos de efímero.\n   - 'Duradero' describe algo que permanece en el tiempo, es decir, lo contrario de durar poco.\n3. Por lo tanto, la opción correcta es la c) Duradero."
                    }
                ]
            },
            {
                "topic": "Solución de problemas de ecuaciones lineales",
                "subject": "Razonamiento Numérico",
                "concept": "Las ecuaciones lineales (o de primer grado) son igualdades matemáticas que relacionan una o más variables elevadas a la primera potencia (sin exponentes). Resolver una ecuación de este tipo consiste en hallar el valor numérico de la incógnita (usualmente representada por la letra 'x') que satisfaga la igualdad. El procedimiento estándar se basa en la transposición de términos empleando operaciones aritméticas inversas (sumas pasan a restas, multiplicaciones a divisiones y viceversa) a ambos lados del signo de igualdad de manera balanceada.",
                "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=ecuaciones+lineales+razonamiento+numerico",
                "exercises": [
                    {
                        "problem": "Resuelva la ecuación lineal: 5(x - 3) = 2x + 6 y encuentre el valor de x.\n\na) x = 3\nb) x = 5\nc) x = 7\nd) x = 10",
                        "solution": "1. Primero, eliminamos los paréntesis aplicando la propiedad distributiva en el lado izquierdo:\n   5*x - 5*3 = 2x + 6\n   5x - 15 = 2x + 6\n2. Transponemos los términos que contienen la incógnita 'x' al lado izquierdo y los valores constantes al lado derecho. Para esto, restamos 2x de ambos lados y sumamos 15 a ambos lados:\n   5x - 2x = 6 + 15\n3. Reducimos los términos semejantes:\n   3x = 21\n4. Despejamos 'x' dividiendo ambos lados de la ecuación entre 3:\n   x = 21 / 3\n   x = 7\n5. Por lo tanto, el valor correcto es c) x = 7."
                    },
                    {
                        "problem": "La edad de Pedro es el triple de la edad de Ana. Si la suma de sus edades es de 40 años, ¿cuántos años tiene Ana?\n\na) 10 años\nb) 12 años\nc) 15 años\nd) 30 años",
                        "solution": "1. Planteamos la variable. Sea 'x' la edad de Ana.\n2. Planteamos la edad de Pedro en función de la de Ana: Pedro = 3x.\n3. Planteamos la ecuación sumando ambas edades e igualando al total:\n   x + 3x = 40\n4. Simplificamos los términos semejantes:\n   4x = 40\n5. Despejamos la incógnita 'x':\n   x = 40 / 4\n   x = 10\n6. Como 'x' representa la edad de Ana, Ana tiene 10 años.\n7. La opción correcta es la a) 10 años."
                    }
                ]
            },
            {
                "topic": "Porcentajes",
                "subject": "Razonamiento Numérico",
                "concept": "El porcentaje es un símbolo matemático (%) que representa una cantidad dada como una fracción de 100 partes iguales. Es decir, expresa una relación de proporcionalidad respecto a un todo fijado en 100. En el ámbito cotidiano y académico, se utiliza continuamente para representar tasas de interés, aumentos salariales, proporciones estadísticas y descuentos comerciales. Para calcular el P% de un valor V, se utiliza la fórmula fundamental: Resultado = V * (P / 100).",
                "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=porcentajes+razonamiento+numerico",
                "exercises": [
                    {
                        "problem": "Un artículo tecnológico que originalmente cuesta 350 dólares tiene un descuento del 15% por fin de semana. ¿Cuánto se ahorrará el cliente y cuánto pagará en total por el producto?\n\na) Ahorra 52.50 y paga 297.50\nb) Ahorra 35.00 y paga 315.00\nc) Ahorra 15.00 y paga 335.00\nd) Ahorra 50.00 y paga 300.00",
                        "solution": "1. Calculamos primero el valor del descuento multiplicando el precio original por el porcentaje de descuento dividido entre 100:\n   Descuento = 350 * (15 / 100) = 350 * 0.15 = 52.50 dólares.\n2. Calculamos el precio final restando el descuento obtenido al precio de venta inicial:\n   Precio Final = 350 - 52.50 = 297.50 dólares.\n3. Por lo tanto, el cliente se ahorra 52.50 dólares y pagará un precio total de 297.50 dólares.\n4. La respuesta correcta es la opción a)."
                    },
                    {
                        "problem": "Si el 25% de un número es igual a 80, ¿cuál es el valor del número completo (el 100%)?\n\na) 200\nb) 240\nc) 320\nd) 400",
                        "solution": "1. Planteamos el problema matemáticamente como una ecuación, donde 'x' es el número desconocido:\n   0.25 * x = 80\n2. Despejamos 'x' dividiendo 80 entre 0.25:\n   x = 80 / 0.25\n3. Resolver esta división equivale a multiplicar por 4, ya que 0.25 = 1/4:\n   x = 80 * 4 = 320\n4. El número buscado es 320.\n5. La opción correcta es la c) 320."
                    }
                ]
            }
        ],
        "Martes": [
            {
                "topic": "Descontextualización",
                "subject": "Lengua y Literatura",
                "concept": "La descontextualización es el acto de extraer o aislar una frase, palabra, fragmento o hecho de su entorno comunicativo u original. Al realizar esta acción y privar a la información de su marco de referencia, se suele alterar, tergiversar o distorsionar por completo el significado, la intención y el mensaje original del emisor, dando lugar a malentendidos, desinformación o manipulación de la opinión pública.\n\nEste fenómeno es muy común en los medios de comunicación y las redes sociales, donde declaraciones se recortan de forma tendenciosa para generar titulares llamativos o atacar la reputación de una persona. Para evitar caer en la trampa de la descontextualización, es fundamental analizar la totalidad del discurso, investigar las circunstancias en las que se emitió y verificar las fuentes originales de información.",
                "image": "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=descontextualizacion+de+un+texto",
                "exercises": []
            },
            {
                "topic": "Las falacias",
                "subject": "Lengua y Literatura",
                "concept": "Las falacias son argumentos o razonamientos que presentan una apariencia de validez, lógica o verdad a simple vista, pero que al ser analizados rigurosamente resultan ser falsos, engañosos o metodológicamente incorrectos. A menudo se utilizan deliberadamente en discursos políticos, debates y publicidad con el propósito de persuadir, manipular o influir en la audiencia sin sustentar la postura con hechos o lógica sólida.\n\nExisten numerosas clasificaciones de falacias, dividiéndose principalmente en formales (con fallas en su estructura lógica) e informales (donde el error radica en el contenido o contexto). Entre las más recurrentes se encuentran la falacia ad hominem (que busca desacreditar a la persona en lugar del argumento), la de autoridad (que valida algo solo por el prestigio de quien lo dice) y la de generalización apresurada, todas las cuales debilitan el pensamiento crítico y la argumentación racional.",
                "image": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=las+falacias+argumentativas",
                "exercises": []
            },
            {
                "topic": "El Debate",
                "subject": "Lengua y Literatura",
                "concept": "El debate es una técnica de comunicación y discusión de carácter formal y estructurado en el que dos o más personas o equipos confrontan y defienden posturas contrapuestas acerca de un tema específico. Su objetivo principal no es necesariamente llegar a un consenso, sino permitir que la audiencia evalúe los argumentos, evidencias y razonamientos presentados por cada parte para formarse su propio criterio sobre la materia en discusión.\n\nEl desarrollo de un debate suele estar regido por reglas claras, tiempos de intervención específicos para la exposición y la refutación, y la guía neutral de un moderador que vela por mantener el orden y el respeto. A través de este ejercicio se fomenta el desarrollo de habilidades esenciales como la oratoria, el pensamiento crítico, la escucha activa y la tolerancia hacia las opiniones e ideas divergentes.",
                "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=el+debate+estructura",
                "exercises": []
            },
            {
                "topic": "Época contemporánea",
                "subject": "Historia",
                "concept": "La Época Contemporánea es el periodo histórico que se extiende desde la Revolución Francesa en 1789 hasta la actualidad. Este periodo está marcado por transformaciones radicales a nivel político, social y económico, incluyendo la consolidación de los sistemas democráticos y republicanos, el auge de los derechos humanos y civiles, y el declive del absolutismo monárquico en la mayor parte de las naciones occidentales.\n\nA nivel socioeconómico, la época se ha caracterizado por la Revolución Industrial y las posteriores revoluciones tecnológicas que automatizaron la producción e inauguraron la era digital. La globalización, el crecimiento exponencial de la población urbana y las tensiones sociopolíticas de orden mundial (como las Guerras Mundiales y la Guerra Fría) representan los ejes centrales que definen la acelerada y compleja dinámica de la sociedad del presente.",
                "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=epoca+contemporanea+resumen",
                "exercises": []
            },
            {
                "topic": "Origen de Grecia",
                "subject": "Historia",
                "concept": "El origen de la civilización griega en la Antigüedad se sitúa en la cuenca del mar Egeo y la península de los Balcanes, donde florecieron culturas precursoras de gran importancia como la minoica (desarrollada en la isla de Creta) y la micénica (de perfil guerrero en el Peloponeso). Estas sociedades iniciales establecieron las bases de la navegación, la metalurgia, la escritura primitiva y los primeros mitos que moldearían el espíritu helénico posterior.\n\nTras un periodo de transición denominado la Edad Oscura, la civilización griega renació con la creación de las polis o ciudades-estado independientes, como Atenas y Esparta. A pesar de su autonomía política y frecuentes rivalidades, los habitantes de estas polis compartían una sólida identidad cultural unificada por la misma lengua, la religión politeísta, los juegos panhelénicos (como las Olimpiadas) y una cosmovisión que sentaría las bases de la filosofía, la democracia y la ciencia en el mundo occidental.",
                "image": "https://images.unsplash.com/photo-1503152394-c571994fd383?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=origen+de+grecia+civilizacion+minoica+micenica",
                "exercises": []
            },
            {
                "topic": "Completamiento de oraciones",
                "subject": "Razonamiento Verbal",
                "concept": "El completamiento de oraciones es un tipo de ejercicio de razonamiento verbal diseñado para medir la capacidad de un estudiante para identificar la coherencia semántica, lógica y sintáctica dentro de un texto. Consiste en rellenar uno o más espacios en blanco con las palabras más adecuadas del listado de opciones, de forma que el enunciado final conserve su coherencia gramatical (concordancia de género y número) y su cohesión de significado original.",
                "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=completamiento+de+oraciones+ejercicios",
                "exercises": [
                    {
                        "problem": "Complete la siguiente oración con las palabras adecuadas:\n\n'A pesar de la _______ de los recursos, el equipo logró terminar la investigación gracias a su _______.'\n\na) abundancia / pereza\nb) escasez / perseverancia\nc) pérdida / descuido\nd) variedad / apatía",
                        "solution": "1. Analizamos el conector 'A pesar de', que indica una relación de oposición o contraste entre la primera parte de la frase y la segunda.\n2. Si hay un factor negativo en la primera parte, en la segunda parte debe haber una característica positiva del equipo que contrarreste dicha dificultad.\n3. Evaluamos la opción b) 'escasez / perseverancia':\n   - 'A pesar de la escasez de los recursos' (factor adverso o negativo).\n   - 'el equipo logró terminar gracias a su perseverancia' (actitud positiva que supera la escasez).\n4. Esta combinación le da un sentido lógico y coherente a la frase.\n5. Por tanto, la respuesta correcta es la b)."
                    },
                    {
                        "problem": "Rellene los espacios en blanco:\n\n'El clima templado de la zona _______ el cultivo de flores, lo que generó un _______ desarrollo comercial.'\n\na) impidió / escaso\nb) favoreció / notable\nc) retrasó / nulo\nd) destruyó / lento",
                        "solution": "1. Evaluamos la relación causa-efecto de la oración. El clima 'templado' es generalmente positivo para la agricultura.\n2. Si el cultivo de flores se vio afectado de forma positiva, el desarrollo comercial consiguiente también debe ser positivo.\n3. Analizamos las parejas:\n   - 'favoreció / notable' encaja perfectamente porque un clima propicio favorece la agricultura y esto a su vez genera un desarrollo notable.\n   - Las demás opciones presentan contradicciones o relaciones de causa-efecto negativas que no encajan con un clima templado habitual.\n4. La respuesta correcta es la b)."
                    }
                ]
            },
            {
                "topic": "Interpretación de refranes",
                "subject": "Razonamiento Verbal",
                "concept": "La interpretación de refranes es un ejercicio lingüístico que evalúa la habilidad de comprender el lenguaje figurado, metafórico o implícito que encierran los dichos populares de la sabiduría colectiva. Consiste en descifrar el mensaje indirecto de una frase y traducirla a su enseñanza moral, consejo práctico o moraleja aplicable a situaciones reales de la vida cotidiana.",
                "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=interpretacion+de+refranes+ejemplos",
                "exercises": [
                    {
                        "problem": "Interprete el refrán: 'Más vale pájaro en mano que ciento volando'.\n\na) Es mejor capturar muchas aves a la vez.\nb) Es preferible asegurar algo que ya tenemos en nuestro poder que ambicionar cosas dudosas o inciertas que podríamos perder.\nc) Los animales en libertad son difíciles de cuidar.\nd) Las oportunidades perdidas siempre regresan tarde o temprano.",
                        "solution": "1. Analizamos la metáfora del refrán: 'pájaro en mano' representa una posesión segura y real, mientras que 'ciento volando' representa opciones que parecen abundantes pero que no nos pertenecen ni están aseguradas.\n2. Comparamos las opciones de respuesta:\n   - La opción b) explica perfectamente esta metáfora, indicando que es mejor conformarse y asegurar lo que se tiene que arriesgarlo por promesas vacías o difíciles de conseguir.\n3. La opción b) es la respuesta correcta."
                    },
                    {
                        "problem": "¿Cuál es la interpretación adecuada del refrán 'No por mucho madrugar amanece más temprano'?\n\na) Levantarse temprano es perjudicial para la salud.\nb) Las cosas tienen su curso natural de tiempo y no se van a acelerar por mucha impaciencia que tengamos.\nc) El reloj solar controla los tiempos de las cosechas.\nd) Hay que planificar las tareas de forma apresurada.",
                        "solution": "1. La metáfora 'madrugar' (despertar temprano) y 'amanecer' (salida del sol) nos dice que por mucho que nos esforcemos o nos anticipemos a levantarnos, el sol saldrá a su hora exacta.\n2. Esto significa que las cosas llevan su tiempo natural de maduración y no ocurrirán antes por el hecho de desesperarnos o impacientarnos.\n3. Por lo tanto, la opción correcta es la b)."
                    }
                ]
            },
            {
                "topic": "Reglas de tres simples",
                "subject": "Razonamiento Numérico",
                "concept": "La regla de tres simple es una herramienta aritmética utilizada para resolver problemas de proporcionalidad entre tres valores conocidos y una incógnita (incógnita 'x'). Puede ser directa (si al aumentar una magnitud, la otra aumenta en la misma proporción) o inversa (si al aumentar una magnitud, la otra disminuye de forma proporcional).",
                "image": "images/regla_de_tres.jpg",
                "videoUrl": "https://www.youtube.com/results?search_query=reglas+de+tres+simple+directa+inversa",
                "exercises": [
                    {
                        "problem": "Si 3 obreros construyen una cerca en 12 horas, ¿cuánto tiempo tardarán 6 obreros en construir la misma cerca trabajando al mismo ritmo?\n\na) 4 horas\nb) 6 horas\nc) 8 horas\nd) 24 horas",
                        "solution": "1. Analizamos el tipo de proporcionalidad. A mayor número de obreros, se requerirá menor tiempo para acabar el trabajo. Por lo tanto, es una proporcionalidad inversa.\n2. Planteamos la relación:\n   3 obreros ----> 12 horas\n   6 obreros ----> x horas\n3. Al ser inversa, multiplicamos de forma lineal (los valores de la primera fila) y dividimos entre el valor restante:\n   x = (3 * 12) / 6\n4. Realizamos la multiplicación:\n   3 * 12 = 36\n5. Dividimos entre 6:\n   x = 36 / 6 = 6 horas\n6. Tardarán 6 horas. La opción correcta es la b)."
                    },
                    {
                        "problem": "En una receta, se necesitan 150 gramos de harina para preparar 6 galletas. ¿Cuántos gramos de harina se necesitarán exactamente para hornear 15 galletas?\n\na) 300 gramos\nb) 375 gramos\nc) 400 gramos\nd) 500 gramos",
                        "solution": "1. Analizamos la proporcionalidad. A mayor cantidad de galletas que deseamos hornear, se requerirá una mayor cantidad de gramos de harina. Por lo tanto, es una proporcionalidad directa.\n2. Planteamos la relación:\n   150 gramos ----> 6 galletas\n   x gramos   ----> 15 galletas\n3. Al ser directa, multiplicamos en cruz y dividimos entre el valor opuesto a la incógnita:\n   x = (150 * 15) / 6\n4. Realizamos la multiplicación del numerador:\n   150 * 15 = 2250\n5. Dividimos el resultado entre 6:\n   x = 2250 / 6 = 375 gramos\n6. Se necesitarán 375 gramos. La respuesta correcta es la b)."
                    }
                ]
            },
            {
                "topic": "Conjuntos",
                "subject": "Razonamiento Numérico",
                "concept": "Un conjunto es la agrupación de elementos bien definidos que comparten una propiedad o característica en común. En la teoría de conjuntos se estudian relaciones como la pertenencia e inclusión, y operaciones matemáticas fundamentales tales como la unión (∪, agrupar todos los elementos de ambos conjuntos sin repetir) y la intersección (∩, seleccionar únicamente los elementos comunes que se encuentran en ambos conjuntos al mismo tiempo).",
                "image": "images/diagrama_de_conjuntos.jpg",
                "videoUrl": "https://www.youtube.com/results?search_query=operaciones+con+conjuntos+interseccion+union",
                "exercises": [
                    {
                        "problem": "Sean los conjuntos: P = {1, 3, 5, 7, 9} y Q = {3, 6, 9, 12}. Halle el conjunto de la unión P ∪ Q.\n\na) {3, 9}\nb) {1, 3, 5, 6, 7, 9, 12}\nc) {1, 5, 7, 12}\nd) {1, 3, 5, 7, 9, 12}",
                        "solution": "1. Recordamos el concepto de Unión (∪), el cual consiste en agrupar todos los elementos del conjunto P y del conjunto Q en un solo conjunto, eliminando los valores duplicados.\n2. Escribimos los elementos de P: {1, 3, 5, 7, 9}\n3. Agregamos los elementos de Q que no se repiten: el 6 y el 12 (el 3 y el 9 ya están incluidos porque pertenecen a P).\n4. El conjunto unión ordenado es: {1, 3, 5, 6, 7, 9, 12}.\n5. La respuesta correcta es la opción b)."
                    },
                    {
                        "problem": "De un grupo de 50 personas, 30 toman café en el desayuno y 25 toman té. Si 10 personas no toman ninguna de las dos bebidas, ¿cuántas personas toman ambas bebidas (café y té)?\n\na) 5 personas\nb) 15 personas\nc) 20 personas\nd) 25 personas",
                        "solution": "1. Determinamos el total de personas que toman al menos una bebida. Para ello, restamos del total de personas (50) las que no consumen ninguna (10):\n   Personas que beben café o té = 50 - 10 = 40 personas.\n2. Sumamos las personas que toman café y las que toman té de manera independiente:\n   Suma individual = 30 (café) + 25 (té) = 55 personas.\n3. La diferencia entre esta suma individual y las personas reales que beben alguna infusión (40) representa a las personas que están contadas dos veces porque consumen ambas cosas (la intersección):\n   Ambas bebidas (intersección) = 55 - 40 = 15 personas.\n4. Por lo tanto, 15 personas toman ambas bebidas.\n5. La opción correcta es la b)."
                    }
                ]
            }
        ],
        "Miércoles": [], "Jueves": [], "Viernes": [], "Sábado": [], "Domingo": []
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
