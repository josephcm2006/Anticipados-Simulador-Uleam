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
        "Miércoles": [
            {
                "id": 1,
                "subject": "Lengua y Literatura",
                "question": "¿Qué es un metaplasmo?",
                "options": [
                    "Un tipo de poema de la Edad Media.",
                    "Un fenómeno lingüístico que consiste en alterar, añadir o quitar sonidos a las palabras.",
                    "Una técnica para ganar un debate formal.",
                    "La traducción literal de un texto a otro idioma."
                ],
                "correct": 1,
                "explanation": "Un metaplasmo es un fenómeno lingüístico que altera la estructura fonética o gráfica de una palabra mediante la adición, supresión o cambio de posición de sonidos o grafías."
            },
            {
                "id": 2,
                "subject": "Lengua y Literatura",
                "question": "Si una persona dice \"dijistes\" en lugar de \"dijiste\", está cometiendo un metaplasmo por:",
                "options": [
                    "Supresión (quitar letras).",
                    "Adición (agregar letras al final).",
                    "Traslación (cambiar el orden de las letras).",
                    "Metáfora."
                ],
                "correct": 1,
                "explanation": "Decir 'dijistes' añade una 's' al final de la palabra (paragoge), por lo que se trata de un metaplasmo por adición."
            },
            {
                "id": 3,
                "subject": "Lengua y Literatura",
                "question": "¿Qué característica fundamental define a la \"conversación\" frente a un monólogo?",
                "options": [
                    "Es siempre por escrito.",
                    "No permite que nadie más opine.",
                    "Existe una interacción y un intercambio de roles entre emisor y receptor.",
                    "Se utiliza exclusivamente lenguaje científico."
                ],
                "correct": 2,
                "explanation": "La conversación es esencialmente interactiva y bilateral, requiriendo que emisor y receptor alternen activamente sus roles."
            },
            {
                "id": 4,
                "subject": "Lengua y Literatura",
                "question": "Una conversación espontánea y sin un tema preestablecido en la que participas con tus amigos se clasifica como:",
                "options": [
                    "Debate parlamentario.",
                    "Conversación informal o coloquial.",
                    "Entrevista de trabajo.",
                    "Disertación académica."
                ],
                "correct": 1,
                "explanation": "Una conversación casual entre amigos es espontánea y sin un protocolo rígido, por lo que es de carácter informal o coloquial."
            },
            {
                "id": 5,
                "subject": "Lengua y Literatura",
                "question": "¿Qué son los vicios pragmáticos del lenguaje?",
                "options": [
                    "Palabras que se escriben exactamente igual pero significan cosas distintas.",
                    "Figuras literarias utilizadas por los poetas para embellecer un texto.",
                    "Errores o malos hábitos en el uso del lenguaje que ocurren en el momento de la comunicación y afectan la fluidez.",
                    "Las reglas oficiales dictadas por la Real Academia Española."
                ],
                "correct": 2,
                "explanation": "Los vicios pragmáticos son aquellas incorrecciones de carácter temporal o circunstancial que se producen en el acto del habla y dificultan la comunicación."
            },
            {
                "id": 6,
                "subject": "Lengua y Literatura",
                "question": "Decir repetidamente \"eh\", \"este...\", \"o sea\" mientras se habla, para rellenar silencios, es un vicio pragmático llamado:",
                "options": [
                    "Arcaísmo",
                    "Neologismo",
                    "Muletilla",
                    "Cacofonía"
                ],
                "correct": 2,
                "explanation": "Las muletillas son palabras o frases cortas que se repiten con frecuencia para apoyarse o rellenar pausas en la conversación."
            },
            {
                "id": 7,
                "subject": "Lengua y Literatura",
                "question": "El metaplasmo donde se quita un sonido al principio de la palabra (como decir \"ora\" en vez de \"ahora\") se llama:",
                "options": [
                    "Prótesis",
                    "Aféresis",
                    "Paragoge",
                    "Epéntesis"
                ],
                "correct": 1,
                "explanation": "La aféresis es el metaplasmo que consiste en la pérdida o eliminación de uno o varios sonidos al inicio de una palabra."
            },
            {
                "id": 8,
                "subject": "Lengua y Literatura",
                "question": "El uso de palabras muy antiguas que ya no son comunes en el habla actual (por ejemplo, decir \"vuestra merced\") es un vicio pragmático conocido como:",
                "options": [
                    "Extranjerismo",
                    "Arcaísmo",
                    "Barbarismo",
                    "Muletilla"
                ],
                "correct": 1,
                "explanation": "Un arcaísmo es un elemento lingüístico cuya forma o significado resultan anticuados en una época determinada."
            },
            {
                "id": 9,
                "subject": "Lengua y Literatura",
                "question": "Para que una conversación sea efectiva, es indispensable que exista:",
                "options": [
                    "Un micrófono para cada participante.",
                    "Un moderador estricto.",
                    "Un código (idioma) compartido y voluntad de escucha activa.",
                    "Un guion escrito previamente."
                ],
                "correct": 2,
                "explanation": "Para establecer comunicación real se requiere que los interlocutores compartan el mismo código e idioma, y estén dispuestos a escucharse activamente."
            },
            {
                "id": 10,
                "subject": "Lengua y Literatura",
                "question": "\"Apretar\" en lugar de \"apretar\" no es un metaplasmo, pero decir \"apreta\" en lugar de \"aprieta\" muestra una alteración verbal. Los metaplasmos en el habla coloquial suelen originarse por:",
                "options": [
                    "Reglas gramaticales estrictas.",
                    "Economía del lenguaje o falta de educación formal.",
                    "Exigencia de los profesores de literatura.",
                    "El uso de diccionarios electrónicos."
                ],
                "correct": 1,
                "explanation": "Los metaplasmos coloquiales ocurren comúnmente por comodidad (economía del lenguaje) o por un desconocimiento de la norma gramatical estándar."
            },
            {
                "id": 11,
                "subject": "Historia",
                "question": "En la Antigua Grecia, ¿qué se entendía por \"polis\"?",
                "options": [
                    "Un gran imperio gobernado por un solo rey.",
                    "Un templo dedicado exclusivamente a los dioses del Olimpo.",
                    "Una ciudad-estado independiente con su propio gobierno, leyes y ejército.",
                    "Una alianza militar entre romanos y griegos."
                ],
                "correct": 2,
                "explanation": "La polis era la estructura política y ciudadana fundamental de Grecia, constituida como una ciudad-estado soberana e independiente."
            },
            {
                "id": 12,
                "subject": "Historia",
                "question": "Una característica principal de las polis griegas era:",
                "options": [
                    "La dependencia política total de la ciudad de Atenas.",
                    "Su autonomía política y económica.",
                    "Su rechazo a tener un ejército.",
                    "Estar gobernadas por un faraón."
                ],
                "correct": 1,
                "explanation": "Cada polis poseía autarquía (autonomía económica) y soberanía jurídica y política (leyes y gobierno propios)."
            },
            {
                "id": 13,
                "subject": "Historia",
                "question": "¿Cómo se llamaba la parte alta y fortificada de una polis, donde se encontraban los templos principales (como el Partenón en Atenas)?",
                "options": [
                    "Ágora",
                    "Acrópolis",
                    "Foro",
                    "Coliseo"
                ],
                "correct": 1,
                "explanation": "La acrópolis era la zona más elevada de las polis, que servía como refugio defensivo y albergaba los santuarios religiosos primordiales."
            },
            {
                "id": 14,
                "subject": "Historia",
                "question": "La plaza pública central en la polis donde se desarrollaba la vida política, social y el mercado se llamaba:",
                "options": [
                    "Ágora",
                    "Acrópolis",
                    "Partenón",
                    "Zigurats"
                ],
                "correct": 0,
                "explanation": "El ágora era el espacio abierto neurálgico para las asambleas, el comercio y el debate público diario en las polis griegas."
            },
            {
                "id": 15,
                "subject": "Historia",
                "question": "A pesar de ser ciudades-estado independientes y a veces enemigas, ¿qué elemento cultural unía a todas las polis griegas?",
                "options": [
                    "El uso del mismo sistema monetario.",
                    "Un solo rey supremo que las gobernaba a todas.",
                    "El mismo idioma, la religión y tradiciones como los Juegos Olímpicos.",
                    "La prohibición de la esclavitud."
                ],
                "correct": 2,
                "explanation": "Los griegos compartían la Hélade como noción cultural común: un mismo idioma (griego antiguo), panteón religioso (dioses del Olimpo) y ritos panhelénicos."
            },
            {
                "id": 16,
                "subject": "Historia",
                "question": "¿Qué fue el proceso de \"colonización griega\"?",
                "options": [
                    "La conquista de Grecia por parte del Imperio Romano.",
                    "La migración masiva de griegos para fundar nuevas ciudades (colonias) por el Mediterráneo y el Mar Negro.",
                    "El sometimiento militar de Esparta sobre Atenas.",
                    "La invasión de los persas al territorio griego."
                ],
                "correct": 1,
                "explanation": "La colonización consistió en expediciones marítimas destinadas a fundar asentamientos permanentes con fines agrarios y mercantiles fuera de Grecia."
            },
            {
                "id": 17,
                "subject": "Historia",
                "question": "¿Cuál fue una de las causas principales que impulsó a los griegos a colonizar otros territorios?",
                "options": [
                    "El exceso de tierras fértiles en Grecia.",
                    "La escasez de tierras cultivables y el aumento de la población en sus polis originarias.",
                    "El deseo de conquistar América.",
                    "Un mandato directo de los dioses que prohibía vivir en Grecia."
                ],
                "correct": 1,
                "explanation": "La falta de tierras cultivables fértiles (stenochoria) y el crecimiento demográfico en el período arcaico forzaron la expiración ultramarina."
            },
            {
                "id": 18,
                "subject": "Historia",
                "question": "¿Cómo llamaban los griegos a la polis \"madre\" o ciudad de origen que fundaba una nueva colonia?",
                "options": [
                    "Metrópolis",
                    "Provincia",
                    "Feudo",
                    "Satrapía"
                ],
                "correct": 0,
                "explanation": "El término metrópolis proviene del griego y significa 'ciudad madre', denominación dada a la polis de origen de los colonos."
            },
            {
                "id": 19,
                "subject": "Historia",
                "question": "¿Qué relación solía existir entre la colonia recién fundada y su metrópolis?",
                "options": [
                    "De guerra constante y sometimiento.",
                    "La colonia era esclava de la metrópolis y le pagaba todos sus impuestos.",
                    "Eran políticamente independientes, pero mantenían lazos comerciales, religiosos y culturales.",
                    "No se volvían a hablar nunca más."
                ],
                "correct": 2,
                "explanation": "Las colonias eran ciudades políticamente independientes de su metrópolis de origen, pero mantenían lazos sagrados, tradicionales y comerciales."
            },
            {
                "id": 20,
                "subject": "Historia",
                "question": "Una gran consecuencia económica de las colonizaciones griegas fue:",
                "options": [
                    "El fin del uso de la moneda.",
                    "El aislamiento total de las polis griegas.",
                    "La expansión del comercio marítimo y la introducción de nuevos productos en Grecia.",
                    "El empobrecimiento total de los navegantes."
                ],
                "correct": 2,
                "explanation": "La fundación de colonias dinamizó el intercambio marítimo en todo el Mediterráneo, enriqueciendo a Grecia con nuevas materias primas y alimentos."
            },
            {
                "id": 21,
                "subject": "Razonamiento Verbal",
                "question": "Analogía: DEDO es a MANO como:",
                "options": [
                    "Hoja es a Rama",
                    "Zapato es a Pie",
                    "Pétalo es a Flor",
                    "Sombrero es a Cabeza"
                ],
                "correct": 2,
                "explanation": "Dedo es una parte constituyente de la mano (relación parte-todo). De manera idéntica, el pétalo es una parte constituyente de la flor."
            },
            {
                "id": 22,
                "subject": "Razonamiento Verbal",
                "question": "Analogía: CALIENTE es a FRÍO como:",
                "options": [
                    "Alto es a Gigante",
                    "Luz es a Oscuridad",
                    "Agua es a Hielo",
                    "Correr es a Caminar"
                ],
                "correct": 1,
                "explanation": "Caliente y frío son conceptos opuestos (antónimos). La misma relación de oposición se da entre luz y oscuridad."
            },
            {
                "id": 23,
                "subject": "Razonamiento Verbal",
                "question": "Analogía: ESCULTOR es a ESTATUA como:",
                "options": [
                    "Pintor es a Pincel",
                    "Músico es a Guitarra",
                    "Escritor es a Novela",
                    "Actor es a Teatro"
                ],
                "correct": 2,
                "explanation": "El sculptor es el creador directo de la estatua (relación agente-producto). De igual modo, el escritor crea una novela."
            },
            {
                "id": 24,
                "subject": "Razonamiento Verbal",
                "question": "Analogía: AVIÓN es a CIELO como:",
                "options": [
                    "Tren es a Estación",
                    "Barco es a Mar",
                    "Pájaro es a Nido",
                    "Coche es a Garaje"
                ],
                "correct": 1,
                "explanation": "El avión es un medio de transporte que se desplaza por el aire/cielo (objeto-medio de desplazamiento). El barco se desplaza por el agua/mar."
            },
            {
                "id": 25,
                "subject": "Razonamiento Verbal",
                "question": "Analogía: LIBRO es a BIBLIOTECA como:",
                "options": [
                    "Cuadro es a Museo",
                    "Profesor es a Escuela",
                    "Médico es a Hospital",
                    "Plato es a Cocina"
                ],
                "correct": 0,
                "explanation": "El libro se conserva, cataloga y exhibe en una biblioteca (objeto-lugar de depósito/exhibición). El cuadro se conserva y exhibe en un museo."
            },
            {
                "id": 26,
                "subject": "Razonamiento Verbal",
                "question": "Selección lógica: Si todos los mamíferos tienen pelo y el perro es un mamífero, entonces la conclusión lógica es:",
                "options": [
                    "El perro a veces tiene pelo.",
                    "El perro es el único mamífero con pelo.",
                    "El perro tiene pelo.",
                    "Algunos perros no tienen pelo."
                ],
                "correct": 2,
                "explanation": "Es un silogismo categórico simple: Premisa mayor (Todos los mamíferos tienen pelo) + Premisa menor (El perro es mamífero) = Conclusión (El perro tiene pelo)."
            },
            {
                "id": 27,
                "subject": "Razonamiento Verbal",
                "question": "Selección lógica: \"Todos los lunes tenemos clase de historia. Hoy es lunes.\" Por lo tanto:",
                "options": [
                    "Mañana tendremos historia.",
                    "Hoy no hay clases.",
                    "Hoy tenemos clase de historia.",
                    "La historia es la mejor materia."
                ],
                "correct": 2,
                "explanation": "Aplicando deducción lógica simple: si ocurre la condición de ser lunes, necesariamente se tiene clase de historia."
            },
            {
                "id": 28,
                "subject": "Razonamiento Verbal",
                "question": "Selección lógica: Juan es más alto que Pedro, y Pedro es más alto que Luis. Por lo tanto:",
                "options": [
                    "Luis es el más alto de los tres.",
                    "Juan es más alto que Luis.",
                    "Pedro es más bajo que Luis.",
                    "Juan y Luis miden lo mismo."
                ],
                "correct": 1,
                "explanation": "Por transitividad matemática de la relación de orden (Juan > Pedro y Pedro > Luis), se deduce directamente que Juan > Luis."
            },
            {
                "id": 29,
                "subject": "Razonamiento Verbal",
                "question": "Selección lógica: Ningún reptil tiene pelo. La iguana es un reptil. Entonces:",
                "options": [
                    "La iguana es un mamífero.",
                    "Algunas iguanas tienen pelo.",
                    "La iguana no tiene pelo.",
                    "Los reptiles prefieren el calor."
                ],
                "correct": 2,
                "explanation": "Puesto que las iguanas están contenidas en el grupo de los reptiles, y ningún miembro de dicho grupo posee pelo, la iguana carece de pelo."
            },
            {
                "id": 30,
                "subject": "Razonamiento Verbal",
                "question": "Selección lógica: Algunos músicos tocan el piano. Todos los que tocan el piano saben leer partituras. Por lo tanto:",
                "options": [
                    "Todos los músicos saben leer partituras.",
                    "Algunos músicos saben leer partituras.",
                    "Nadie que toque el piano es músico.",
                    "Leer partituras es fácil."
                ],
                "correct": 1,
                "explanation": "Puesto que hay músicos que tocan el piano, y todos los pianistas saben leer partituras, esos músicos específicos saben leer partituras."
            },
            {
                "id": 31,
                "subject": "Razonamiento Numérico",
                "question": "¿Cuál es el resultado de sumar las fracciones 1/4 + 2/4?",
                "options": [
                    "3/8",
                    "3/4",
                    "2/8",
                    "4/4"
                ],
                "correct": 1,
                "explanation": "Como las fracciones tienen el mismo denominador (4), sumamos directamente los numeradores: 1 + 2 = 3. Manteniendo el denominador común, resulta 3/4."
            },
            {
                "id": 32,
                "subject": "Razonamiento Numérico",
                "question": "Si comes 3 porciones de una pizza que fue dividida en 8 partes iguales, ¿qué fracción de la pizza queda intacta?",
                "options": [
                    "3/8",
                    "5/8",
                    "8/5",
                    "1/8"
                ],
                "correct": 1,
                "explanation": "La pizza completa equivale a la unidad 8/8. Si sustraemos las 3 partes comidas (3/8), nos quedan exactamente 5/8 de pizza."
            },
            {
                "id": 33,
                "subject": "Razonamiento Numérico",
                "question": "¿Cuál de las siguientes fracciones es equivalente (vale lo mismo) a 1/2?",
                "options": [
                    "2/3",
                    "3/4",
                    "4/8",
                    "5/12"
                ],
                "correct": 2,
                "explanation": "Si simplificamos la fracción 4/8 dividiendo numerador y denominador entre 4, obtenemos 1/2."
            },
            {
                "id": 34,
                "subject": "Razonamiento Numérico",
                "question": "Juan gasta 1/3 de su sueldo en comida y 1/3 en alquiler. ¿Qué fracción de su sueldo ha gastado en total?",
                "options": [
                    "2/6",
                    "2/3",
                    "1/9",
                    "3/3"
                ],
                "correct": 1,
                "explanation": "Sumamos los gastos homogéneos: 1/3 + 1/3 = 2/3 del sueldo total gastado."
            },
            {
                "id": 35,
                "subject": "Razonamiento Numérico",
                "question": "Operaciones básicas: Resuelve la siguiente operación respetando la jerarquía matemática: 15 + 5 × 2 =",
                "options": [
                    "40",
                    "20",
                    "25",
                    "100"
                ],
                "correct": 2,
                "explanation": "Por jerarquía de operaciones, realizamos la multiplicación antes que la suma: 5 × 2 = 10. Luego sumamos: 15 + 10 = 25."
            },
            {
                "id": 36,
                "subject": "Razonamiento Numérico",
                "question": "Si compras 4 cuadernos a $3 cada uno y pagas con un billete de $20, ¿cuánto recibes de vuelto?",
                "options": [
                    "$12",
                    "$8",
                    "$10",
                    "$6"
                ],
                "correct": 1,
                "explanation": "Calculamos el gasto total de los cuadernos: 4 × 3 = $12. Restamos este valor del billete entregado: $20 - $12 = $8 de vuelto."
            },
            {
                "id": 37,
                "subject": "Razonamiento Numérico",
                "question": "Operaciones básicas: Resuelve (10 + 2) / 3 =",
                "options": [
                    "4",
                    "6",
                    "10",
                    "12"
                ],
                "correct": 0,
                "explanation": "Los paréntesis indican que debemos resolver primero la suma interna: 10 + 2 = 12. Posteriormente efectuamos la división: 12 / 3 = 4."
            },
            {
                "id": 38,
                "subject": "Razonamiento Numérico",
                "question": "Un agricultor tiene 150 manzanas y las quiere empacar en cajas donde caben exactamente 10 manzanas. ¿Cuántas cajas necesita?",
                "options": [
                    "10 cajas",
                    "15 cajas",
                    "20 cajas",
                    "150 cajas"
                ],
                "correct": 1,
                "explanation": "Dividimos la cantidad total de manzanas entre la capacidad de cada caja: 150 / 10 = 15 cajas requeridas."
            },
            {
                "id": 39,
                "subject": "Razonamiento Numérico",
                "question": "Si a la mitad de 50 le sumo el doble de 10, ¿cuál es el resultado?",
                "options": [
                    "35",
                    "45",
                    "55",
                    "65"
                ],
                "correct": 1,
                "explanation": "Calculamos las partes por separado: la mitad de 50 es 25, y el doble de 10 es 20. Al sumarlos: 25 + 20 = 45."
            },
            {
                "id": 40,
                "subject": "Razonamiento Numérico",
                "question": "Al multiplicar fracciones (por ejemplo 1/2 × 3/4), el procedimiento correcto es:",
                "options": [
                    "Multiplicar en cruz.",
                    "Sumar los números de arriba.",
                    "Multiplicar el de arriba por el de arriba (numeradores) y el de abajo por el de abajo (denominadores).",
                    "Invertir la segunda fracción y restar."
                ],
                "correct": 2,
                "explanation": "La multiplicación de fracciones es directa: se multiplican numeradores entre sí para obtener el nuevo numerador, y denominadores entre sí para el deminador resultante."
            }
        ],
        "Jueves": [
            {
                "id": 1,
                "subject": "Lengua y Literatura",
                "question": "¿Qué es la declamación?",
                "options": [
                    "Leer un texto en silencio y rápidamente.",
                    "El arte de interpretar un poema frente a un público usando la voz, la entonación y los gestos.",
                    "Escribir un poema utilizando rimas asonantes.",
                    "Traducir una obra teatral antigua a un idioma moderno."
                ],
                "correct": 1,
                "explanation": "La declamación consiste en la interpretación artística de poemas ante un público, integrando el uso adecuado de la voz, el tono y la expresión corporal para transmitir el sentido estético del texto."
            },
            {
                "id": 2,
                "subject": "Lengua y Literatura",
                "question": "A diferencia de una simple lectura en voz alta, la declamación requiere:",
                "options": [
                    "Que el texto sea improvisado en el momento.",
                    "El uso del lenguaje corporal y la transmisión profunda de emociones.",
                    "Que el presentador esté sentado y sin mirar al público.",
                    "El uso exclusivo de textos expositivos."
                ],
                "correct": 1,
                "explanation": "Mientras que la lectura en voz alta solo busca oralizar el texto, la declamación busca conmover e interpretar, apoyándose decididamente en la gestualidad y la emotividad."
            },
            {
                "id": 3,
                "subject": "Lengua y Literatura",
                "question": "¿Qué son los \"vicios sintácticos\" en el lenguaje?",
                "options": [
                    "Palabras que suenan mal pero están bien escritas.",
                    "Errores en la pronunciación de las vocales.",
                    "Errores que afectan la estructura gramatical y el orden lógico de las palabras en una oración.",
                    "El uso excesivo de signos de exclamación."
                ],
                "correct": 2,
                "explanation": "Los vicios sintácticos corresponden a infracciones de las reglas de construcción o concordancia gramatical, afectando la correcta hilación y estructura de los enunciados."
            },
            {
                "id": 4,
                "subject": "Lengua y Literatura",
                "question": "¿Cuál de las siguientes oraciones presenta un vicio sintáctico conocido como \"solecismo\" (error de concordancia o construcción)?",
                "options": [
                    "Hubieron muchas personas en la fiesta.",
                    "Hubo muchas personas en la fiesta.",
                    "El niño juega en el parque.",
                    "Nosotros fuimos al cine ayer."
                ],
                "correct": 0,
                "explanation": "El verbo haber usado como impersonal ('hubo') debe conjugarse en tercera persona del singular. La forma 'hubieron' para indicar la presencia de varios elementos es un solecismo de concordancia."
            },
            {
                "id": 5,
                "subject": "Lengua y Literatura",
                "question": "Los vicios semánticos son errores que:",
                "options": [
                    "Solo ocurren en la poesía.",
                    "Alteran el orden de sujeto y predicado.",
                    "Oscurecen o alteran el significado real de las palabras, generando confusión.",
                    "Consisten en escribir sin tildes."
                ],
                "correct": 2,
                "explanation": "A diferencia de los sintácticos, los vicios semánticos son aquellos que inciden directamente sobre la significación o sentido de los vocablos, entorpeciendo la interpretación exacta de la idea."
            },
            {
                "id": 6,
                "subject": "Lengua y Literatura",
                "question": "La \"anfibología\" es un vicio semántico que consiste en:",
                "options": [
                    "Inventar palabras nuevas que no existen.",
                    "Construir frases con doble sentido o ambigüedad, dificultando saber qué se quiso decir.",
                    "Repetir la misma palabra muchas veces.",
                    "Usar palabras en inglés cuando se habla español."
                ],
                "correct": 1,
                "explanation": "La anfibología o ambigüedad ocurre cuando la redacción de un enunciado permite dos o más interpretaciones diferentes, lo cual confunde al receptor."
            },
            {
                "id": 7,
                "subject": "Lengua y Literatura",
                "question": "Lee esta oración: \"Se vende ropa de señora usada\". Este es un claro ejemplo de anfibología porque:",
                "options": [
                    "No tiene sujeto explícito.",
                    "Faltan comas en la oración.",
                    "No queda claro si lo que está usado es la ropa o la señora.",
                    "Contiene un error de ortografía."
                ],
                "correct": 2,
                "explanation": "Al colocar 'usada' después de 'señora', se genera la duda de si el adjetivo califica a la ropa o a la señora, constituyendo un caso típico de anfibología."
            },
            {
                "id": 8,
                "subject": "Lengua y Literatura",
                "question": "Si una persona dice: \"Me compré un ticket para el cine\" en lugar de \"boleto\", está cometiendo un vicio del lenguaje llamado:",
                "options": [
                    "Solecismo",
                    "Extranjerismo (préstamo innecesario)",
                    "Anfibología",
                    "Declamación"
                ],
                "correct": 1,
                "explanation": "Consiste en utilizar términos de otros idiomas (en este caso el inglés 'ticket') cuando en el propio español existen equivalentes perfectos como 'boleto' o 'entrada'."
            },
            {
                "id": 9,
                "subject": "Lengua y Literatura",
                "question": "En la declamación, el movimiento de las manos y las expresiones faciales son:",
                "options": [
                    "Completamente innecesarios.",
                    "Elementos no verbales fundamentales para acompañar el sentimiento del poema.",
                    "Prohibidos por las reglas del teatro clásico.",
                    "Solo útiles si el público no escucha bien."
                ],
                "correct": 1,
                "explanation": "Los recursos corporales y gestuales forman parte de la expresión no verbal, siendo indispensables para realzar y transmitir los matices emotivos inherentes al poema declamado."
            },
            {
                "id": 10,
                "subject": "Lengua y Literatura",
                "question": "¿Cuál de estos es un vicio sintáctico?",
                "options": [
                    "Decir \"subir para arriba\".",
                    "Decir \"Acuérdate que\" en lugar de \"Acuérdate de que\" (queísmo/dequeísmo).",
                    "Hablar con un tono de voz muy bajo.",
                    "Escribir un poema sin rima."
                ],
                "correct": 1,
                "explanation": "El queísmo ('acuérdate que') es un vicio sintáctico o gramatical porque suprime indebidamente la preposición 'de' exigida por el régimen verbal (acordarse de algo)."
            },
            {
                "id": 11,
                "subject": "Historia",
                "question": "En la Antigua Grecia, ¿cuál fue la principal diferencia política entre Atenas y Esparta?",
                "options": [
                    "Atenas era gobernada por faraones y Esparta por reyes persas.",
                    "Atenas fue la cuna de la democracia, mientras que Esparta tenía un sistema militarista y oligárquico.",
                    "Ambas tenían exactamente el mismo gobierno democrático.",
                    "Esparta no tenía ejército y Atenas era pacífica."
                ],
                "correct": 1,
                "explanation": "Atenas representó el surgimiento de la participación ciudadana y el gobierno democrático, mientras que Esparta basó su estructura en una oligarquía rígida dirigida por guerreros."
            },
            {
                "id": 12,
                "subject": "Historia",
                "question": "La sociedad espartana estaba enfocada principalmente en:",
                "options": [
                    "El comercio marítimo y las artes.",
                    "La filosofía y el teatro.",
                    "La disciplina militar y la guerra desde la niñez.",
                    "La agricultura pacífica."
                ],
                "correct": 2,
                "explanation": "Toda la estructura civil y educativa (la agogé) en Esparta estaba orientada a forjar soldados de élite disciplinados para defender los intereses del Estado."
            },
            {
                "id": 13,
                "subject": "Historia",
                "question": "¿Qué ciudad-estado (polis) griega es recordada por el gran desarrollo de la filosofía, el arte, la arquitectura y el debate político?",
                "options": [
                    "Troya",
                    "Esparta",
                    "Atenas",
                    "Macedonia"
                ],
                "correct": 2,
                "explanation": "Atenas floreció como el epicentro cultural e intelectual de la Hélade, legando enormes desarrollos en la filosofía clásica, las artes plásticas y los ideales democráticos."
            },
            {
                "id": 14,
                "subject": "Historia",
                "question": "¿Qué evento marca el inicio de la \"etapa helenística\"?",
                "options": [
                    "El inicio de las guerras médicas.",
                    "La caída del Imperio Romano.",
                    "La muerte de Alejandro Magno en el año 323 a.C.",
                    "La fundación de la ciudad de Atenas."
                ],
                "correct": 2,
                "explanation": "Tradicionalmente se toma la muerte prematura de Alejandro Magno (323 a.C.) y la posterior división de su imperio entre sus generales como el inicio del helenismo."
            },
            {
                "id": 15,
                "subject": "Historia",
                "question": "El concepto de \"helenismo\" o época helenística se refiere a:",
                "options": [
                    "La fusión de la cultura griega con las culturas orientales (Egipto, Persia) tras las conquistas de Alejandro Magno.",
                    "El período de mayor aislamiento de Grecia del resto del mundo.",
                    "El momento en que Esparta conquistó el mundo entero.",
                    "La adopción de la cultura romana por parte de los griegos."
                ],
                "correct": 0,
                "explanation": "El helenismo supuso una época de cosmopolitismo e intercambio cultural sin precedentes, donde las costumbres, el idioma (koiné) y la filosofía griega se amalgamaron con tradiciones del Medio Oriente y Egipto."
            },
            {
                "id": 16,
                "subject": "Historia",
                "question": "¿Quién fue el líder militar responsable de crear el vasto imperio que dio paso a la etapa helenística?",
                "options": [
                    "Julio César",
                    "Pericles",
                    "Leónidas",
                    "Alejandro Magno"
                ],
                "correct": 3,
                "explanation": "Alejandro Magno, rey de Macedonia, emprendió una gran campaña militar derrotando al Imperio Persa y uniendo bajo su mando un inmenso territorio que abarcaba desde Grecia hasta la India."
            },
            {
                "id": 17,
                "subject": "Historia",
                "question": "Durante la época helenística, una ciudad en Egipto se convirtió en el mayor centro cultural, científico y comercial del mundo, famosa por su gran biblioteca. ¿Cuál era?",
                "options": [
                    "Alejandría",
                    "Constantinopla",
                    "Babilonia",
                    "Esparta"
                ],
                "correct": 0,
                "explanation": "Alejandría de Egipto, fundada por Alejandro Magno, destacó como la gran metrópolis científica y cultural del helenismo, albergando intelectuales de diversas regiones y una vastísima biblioteca."
            },
            {
                "id": 18,
                "subject": "Historia",
                "question": "En Esparta, el gobierno estaba liderado por dos reyes simultáneamente. Este sistema se conoce como:",
                "options": [
                    "Democracia directa",
                    "Diarquía",
                    "Tiranía",
                    "Anarquía"
                ],
                "correct": 1,
                "explanation": "La diarquía es una forma de gobierno en la que el poder monárquico es compartido por dos reyes jefes que gobiernan de manera conjunta, como sucedía en la estructura espartana."
            },
            {
                "id": 19,
                "subject": "Historia",
                "question": "¿Cómo era la educación de los niños en Atenas en comparación con Esparta?",
                "options": [
                    "En Atenas los preparaban solo para la guerra; en Esparta para la filosofía.",
                    "En Atenas buscaban una formación integral (intelectual y física); en Esparta los separaban de su familia para un duro entrenamiento militar.",
                    "En ambas ciudades la educación estaba prohibida.",
                    "Solo las mujeres recibían educación en Atenas."
                ],
                "correct": 1,
                "explanation": "El ideal educativo ateniense promovía el cultivo de la mente (retórica, música, matemáticas) a la par del cuerpo, mientras que el modelo espartano priorizaba casi con exclusividad la obediencia ciega, el esfuerzo físico extremo y la preparación militar."
            },
            {
                "id": 20,
                "subject": "Historia",
                "question": "El fin de la etapa helenística se marca tradicionalmente con:",
                "options": [
                    "La conquista de Grecia y Egipto por parte del Imperio Romano (como la derrota de Cleopatra).",
                    "El descubrimiento de América.",
                    "La invasión de los hunos.",
                    "El inicio del Renacimiento."
                ],
                "correct": 0,
                "explanation": "Culmina de manera formal con la anexión definitiva del último gran reino helenístico (el Egipto de los Ptolomeos bajo Cleopatra) al Imperio Romano, tras la batalla de Actium."
            },
            {
                "id": 21,
                "subject": "Razonamiento Verbal",
                "question": "Identifica el término excluido:",
                "options": [
                    "Guitarra",
                    "Violín",
                    "Arpa",
                    "Trompeta"
                ],
                "correct": 3,
                "explanation": "Trompeta es un instrumento de viento; el resto son de cuerda."
            },
            {
                "id": 22,
                "subject": "Razonamiento Verbal",
                "question": "Identifica el término excluido en este grupo de profesiones:",
                "options": [
                    "Abogado",
                    "Juez",
                    "Fiscal",
                    "Arquitecto"
                ],
                "correct": 3,
                "explanation": "Arquitecto es de la construcción; los demás pertenecen al ámbito del derecho."
            },
            {
                "id": 23,
                "subject": "Razonamiento Verbal",
                "question": "Ordenar la siguiente oración: (1. parque / 2. Los / 3. juegan / 4. en / 5. niños / 6. el)",
                "options": [
                    "2, 5, 3, 4, 6, 1",
                    "2, 3, 5, 4, 1, 6",
                    "5, 2, 3, 4, 6, 1",
                    "4, 6, 1, 2, 5, 3"
                ],
                "correct": 0,
                "explanation": "Al ordenar las palabras en la secuencia 2 (Los), 5 (niños), 3 (juegan), 4 (en), 6 (el), 1 (parque), obtenemos 'Los niños juegan en el parque', que es la estructura sintácticamente correcta."
            },
            {
                "id": 24,
                "subject": "Razonamiento Verbal",
                "question": "Ordenar la siguiente oración: (1. examen / 2. difícil / 3. El / 4. muy / 5. estaba)",
                "options": [
                    "3, 2, 5, 4, 1",
                    "3, 1, 5, 4, 2",
                    "1, 3, 5, 4, 2",
                    "5, 4, 2, 3, 1"
                ],
                "correct": 1,
                "explanation": "Al seguir la secuencia 3 (El), 1 (examen), 5 (estaba), 4 (muy), 2 (difícil), formamos la oración coherente 'El examen estaba muy difícil'."
            },
            {
                "id": 25,
                "subject": "Razonamiento Verbal",
                "question": "Ordenar la siguiente oración: (1. mañana / 2. lloverá / 3. intensa / 4. de / 5. manera)",
                "options": [
                    "1, 2, 4, 5, 3",
                    "2, 1, 3, 4, 5",
                    "4, 5, 3, 1, 2",
                    "1, 3, 2, 5, 4"
                ],
                "correct": 0,
                "explanation": "La combinación lógica es 1 (Mañana), 2 (lloverá), 4 (de), 5 (manera), 3 (intensa), resultando en la oración coherente 'Mañana lloverá de manera intensa'."
            },
            {
                "id": 26,
                "subject": "Razonamiento Numérico",
                "question": "Si lanzas una moneda al aire, ¿cuál es la probabilidad de que caiga en \"cara\"?",
                "options": [
                    "1/4 (25%)",
                    "1/2 (50%)",
                    "1/3 (33.3%)",
                    "1/1 (100%)"
                ],
                "correct": 1,
                "explanation": "Para resolver esto, debes ver los casos favorables sobre los casos posibles. Solo hay 1 cara favorable, y 2 lados posibles en la moneda, así que es 1 dividido para 2 (1/2 o 50%)."
            },
            {
                "id": 27,
                "subject": "Razonamiento Numérico",
                "question": "Si lanzas un dado estándar de 6 caras, ¿cuál es la probabilidad de sacar exactamente un 4?",
                "options": [
                    "1/2",
                    "4/6",
                    "1/6",
                    "1/4"
                ],
                "correct": 2,
                "explanation": "Para resolver esto, en un dado solo hay un número 4, ese es tu caso favorable. Como hay 6 caras en total, la probabilidad es 1 de 6 (1/6)."
            },
            {
                "id": 28,
                "subject": "Razonamiento Numérico",
                "question": "Al lanzar un dado de 6 caras, ¿cuál es la probabilidad de sacar un número par?",
                "options": [
                    "1/6",
                    "2/6",
                    "3/6 (o 1/2)",
                    "4/6"
                ],
                "correct": 2,
                "explanation": "Para resolver esto, cuentas cuántos números pares hay en el dado: el 2, el 4 y el 6. Son 3 casos favorables de 6 posibles. Al simplificar 3/6 te da 1/2."
            },
            {
                "id": 29,
                "subject": "Razonamiento Numérico",
                "question": "En una bolsa hay 3 canicas rojas y 2 canicas azules. Si sacas una canica al azar, ¿cuál es la probabilidad de que sea roja?",
                "options": [
                    "3/5",
                    "2/5",
                    "1/3",
                    "1/5"
                ],
                "correct": 0,
                "explanation": "Para resolver esto, primero sumas todas las canicas: 3 rojas + 2 azules = 5 canicas en total. Como quieres sacar una roja, y hay 3, tu probabilidad es 3 de 5, es decir 3/5."
            },
            {
                "id": 30,
                "subject": "Razonamiento Numérico",
                "question": "¿Cuál es la probabilidad de un evento imposible (por ejemplo, sacar un 7 en un dado normal de 6 caras)?",
                "options": [
                    "1",
                    "0",
                    "-1",
                    "1/2"
                ],
                "correct": 1,
                "explanation": "Para resolver esto, por regla general en matemáticas, si un evento jamás va a suceder, su probabilidad siempre será cero."
            },
            {
                "id": 31,
                "subject": "Razonamiento Numérico",
                "question": "Si 2 trabajadores pintan 1 pared en 3 días, ¿cuántos días tardarán 4 trabajadores en pintar 2 paredes iguales? (Asumiendo el mismo ritmo)",
                "options": [
                    "2 días",
                    "3 días",
                    "4 días",
                    "6 días"
                ],
                "correct": 1,
                "explanation": "Para resolver esto, fíjate en la lógica: si duplicas los trabajadores de 2 a 4, trabajarán el doble de rápido, pero como también duplicas las paredes de 1 a 2, el tiempo extra se compensa. Por eso, tardarán los mismos 3 días."
            },
            {
                "id": 32,
                "subject": "Razonamiento Numérico",
                "question": "Si 3 impresoras imprimen 100 páginas en 2 horas, ¿cuántas horas tardarán 6 impresoras en imprimir 200 páginas?",
                "options": [
                    "1 hora",
                    "2 horas",
                    "4 horas",
                    "6 horas"
                ],
                "correct": 1,
                "explanation": "Para resolver esto aplicamos la misma lógica anterior: tienes el doble de impresoras (de 3 a 6), pero también el doble de trabajo (de 100 a 200). Se compensa, así que tardan las mismas 2 horas."
            },
            {
                "id": 33,
                "subject": "Razonamiento Numérico",
                "question": "Si 5 hornos consumen 2 tanques de gas en 4 horas. ¿Cuántas horas durará 1 tanque de gas si encendemos 10 hornos?",
                "options": [
                    "1 hora",
                    "2 horas",
                    "4 horas",
                    "8 horas"
                ],
                "correct": 0,
                "explanation": "Para resolver esto, nota que pasaste de 5 a 10 hornos (el doble de consumo), y bajaste de 2 tanques a 1 (la mitad de combustible). Si con 5 hornos 1 tanque duraba 2 horas, con 10 hornos (el doble) durará la mitad del tiempo: 1 hora."
            },
            {
                "id": 34,
                "subject": "Razonamiento Numérico",
                "question": "Un establo con 4 vacas consume 10 fardos de pasto en 6 días. ¿Cuántos días durarán 20 fardos si ahora hay 8 vacas?",
                "options": [
                    "3 días",
                    "6 días",
                    "12 días",
                    "8 días"
                ],
                "correct": 1,
                "explanation": "Para resolver esto: duplicaste la cantidad de vacas de 4 a 8, pero también duplicaste la cantidad de pasto de 10 a 20. El alimento extra compensa a las vacas extra, durando los mismos 6 días."
            },
            {
                "id": 35,
                "subject": "Razonamiento Numérico",
                "question": "Si 10 máquinas fabrican 50 juguetes en 5 días. ¿Cuántos días tardarán 5 máquinas en fabricar los mismos 50 juguetes?",
                "options": [
                    "2.5 días",
                    "5 días",
                    "10 días",
                    "15 días"
                ],
                "correct": 2,
                "explanation": "Para resolver esto, la cantidad de juguetes (50) no cambia. Si reduces las máquinas a la mitad (de 10 a 5), lógicamente se van a demorar el doble de tiempo. Por eso pasas de 5 a 10 días."
            }
        ],
        "Viernes": [
            {
                "id": 1,
                "subject": "Lengua y Literatura",
                "question": "¿Qué es una dramatización?",
                "options": [
                    "La lectura silenciosa de una novela clásica.",
                    "La representación teatral de una situación o texto mediante actores, diálogos y gestos.",
                    "Escribir un poema triste.",
                    "El análisis gramatical de una oración."
                ],
                "correct": 1,
                "explanation": "La dramatización consiste en la representación teatral de una historia o situación donde los actores interpretan personajes mediante el uso de diálogos, gestos y movimientos corporales."
            },
            {
                "id": 2,
                "subject": "Lengua y Literatura",
                "question": "En un texto dramático o guion teatral, las indicaciones del autor sobre los movimientos, gestos o escenarios (que no se leen en voz alta) se llaman:",
                "options": [
                    "Acotaciones",
                    "Metáforas",
                    "Párrafos",
                    "Diálogos"
                ],
                "correct": 0,
                "explanation": "Las acotaciones son indicaciones del dramaturgo escritas entre paréntesis o en cursiva, destinadas a guiar a los actores y al director sobre la puesta en escena, gestos y movimientos."
            },
            {
                "id": 3,
                "subject": "Lengua y Literatura",
                "question": "¿Cuál es el propósito principal de un conversatorio?",
                "options": [
                    "Que un panel debata violentamente hasta que alguien gane.",
                    "Intercambiar ideas y reflexiones de forma oral y dialogada sobre un tema específico.",
                    "Escribir un libro de historia.",
                    "Convencer a la gente de comprar un producto comercial."
                ],
                "correct": 1,
                "explanation": "El conversatorio es un espacio para entablar un diálogo abierto, informal pero estructurado, donde varios participantes comparten opiniones y reflexiones sobre una temática definida."
            },
            {
                "id": 4,
                "subject": "Lengua y Literatura",
                "question": "A diferencia de un debate formal, en el conversatorio predomina:",
                "options": [
                    "El uso de falacias lógicas.",
                    "El ataque a los argumentos del oponente.",
                    "El diálogo constructivo y el intercambio pacífico de opiniones.",
                    "El uso exclusivo de textos escritos, nadie habla."
                ],
                "correct": 2,
                "explanation": "En el conversatorio no se busca confrontar o ganar una disputa ideológica, sino construir conocimiento y compartir reflexiones mediante el diálogo respetuoso y la escucha activa."
            },
            {
                "id": 5,
                "subject": "Lengua y Literatura",
                "question": "El ensayo argumentativo es un tipo de texto cuyo objetivo principal es:",
                "options": [
                    "Narrar una historia de ciencia ficción.",
                    "Describir un paisaje con mucho detalle.",
                    "Persuadir o convencer al lector sobre una postura utilizando argumentos lógicos.",
                    "Hacer reír al público con chistes."
                ],
                "correct": 2,
                "explanation": "El ensayo argumentativo es un texto reflexivo y crítico en prosa donde el autor expone una tesis y trata de persuadir al lector utilizando razonamientos y argumentos válidos."
            },
            {
                "id": 6,
                "subject": "Lengua y Literatura",
                "question": "En la estructura de un ensayo argumentativo, la \"tesis\" corresponde a:",
                "options": [
                    "La portada del documento.",
                    "La bibliografía final.",
                    "La postura, opinión o idea principal que el autor va a defender a lo largo del texto.",
                    "El título del ensayo."
                ],
                "correct": 2,
                "explanation": "La tesis es el núcleo o eje de un ensayo argumentativo; representa la postura personal e hipótesis del autor, la cual defenderá con argumentos en el desarrollo."
            },
            {
                "id": 7,
                "subject": "Lengua y Literatura",
                "question": "La sección del ensayo donde se exponen las pruebas, datos, ejemplos y razones para defender la tesis se llama:",
                "options": [
                    "Introducción",
                    "Cuerpo argumentativo o desarrollo",
                    "Conclusión",
                    "Prólogo"
                ],
                "correct": 1,
                "explanation": "El cuerpo argumentativo o desarrollo contiene la sustentación de la tesis mediante argumentos de autoridad, lógicos, de causa-efecto, ejemplos, entre otros."
            },
            {
                "id": 8,
                "subject": "Lengua y Literatura",
                "question": "En un conversatorio, el rol de la persona que guía la charla, da los turnos de palabra y mantiene el enfoque del tema recibe el nombre de:",
                "options": [
                    "Juez",
                    "Moderador",
                    "Protagonista",
                    "Espectador"
                ],
                "correct": 1,
                "explanation": "El moderador se encarga de dar la bienvenida, introducir el tema, asignar los turnos y tiempos de palabra a los participantes, y guiar el rumbo de la conversación."
            },
            {
                "id": 9,
                "subject": "Lengua y Literatura",
                "question": "Al final de un ensayo argumentativo, el autor suele incluir:",
                "options": [
                    "Una conclusión que resume los puntos clave y reafirma la tesis.",
                    "El inicio de una nueva novela.",
                    "Un índice de capítulos.",
                    "Una encuesta para el lector."
                ],
                "correct": 0,
                "explanation": "La conclusión de un ensayo argumentativo tiene como finalidad sintetizar los argumentos expuestos y reiterar la validez de la tesis a la luz de los argumentos discutidos."
            },
            {
                "id": 10,
                "subject": "Lengua y Literatura",
                "question": "¿Cuál de los siguientes elementos es fundamental para realizar una buena dramatización?",
                "options": [
                    "Usar diapositivas de PowerPoint.",
                    "La expresión corporal, el tono de voz y la interpretación de roles.",
                    "No mirar nunca al público.",
                    "Leer todo directamente de una enciclopedia."
                ],
                "correct": 1,
                "explanation": "En una dramatización, el lenguaje no verbal (gestos, movimientos, postura) y paralingüístico (tono de voz, volumen), junto con la personificación adecuada, son vitales para dar vida al personaje y transmitir el mensaje dramático."
            },
            {
                "id": 11,
                "subject": "Historia",
                "question": "La religión en la Antigua Grecia se caracterizaba por ser:",
                "options": [
                    "Monoteísta (creían en un solo dios).",
                    "Politeísta y antropomorfa (muchos dioses con forma y pasiones humanas).",
                    "Atea (no tenían creencias religiosas).",
                    "Budista."
                ],
                "correct": 1,
                "explanation": "La religión de la Grecia Antigua era politeísta porque adoraban a múltiples deidades, y antropomorfa porque creían que los dioses tenían formas físicas, emociones, virtudes y vicios similares a los humanos."
            },
            {
                "id": 12,
                "subject": "Historia",
                "question": "En el ámbito de la filosofía, ¿quiénes son considerados los tres grandes pensadores clásicos de Grecia?",
                "options": [
                    "Homero, Pericles y Leónidas.",
                    "Sófocles, Eurípides y Esquilo.",
                    "Sócrates, Platón y Aristóteles.",
                    "Julio César, Augusto y Nerón."
                ],
                "correct": 2,
                "explanation": "Sócrates, Platón y Aristóteles representan la cumbre del pensamiento filosófico clásico de la Antigua Grecia, cuyas ideas sobre ética, política y metafísica formaron la base intelectual de Occidente."
            },
            {
                "id": 13,
                "subject": "Historia",
                "question": "¿Qué gran sistema político moderno tiene sus raíces e invención en la antigua polis de Atenas?",
                "options": [
                    "La dictadura militar",
                    "El feudalismo",
                    "La democracia",
                    "El comunismo"
                ],
                "correct": 2,
                "explanation": "Atenas es reconocida históricamente como la cuna de la democracia (demos = pueblo, kratos = poder), un sistema político que permitía a los ciudadanos participar directamente en la toma de decisiones públicas."
            },
            {
                "id": 14,
                "subject": "Historia",
                "question": "El principal evento deportivo de la Antigüedad que unía a todas las ciudades-estado griegas, celebrado en honor al dios Zeus, era:",
                "options": [
                    "El Mundial de Fútbol",
                    "Las Cruzadas",
                    "Los Juegos Olímpicos",
                    "El Coliseo Romano"
                ],
                "correct": 2,
                "explanation": "Los Juegos Olímpicos se celebraban cada cuatro años en Olimpia en honor a Zeus, promoviendo una tregua sagrada que unía temporalmente a todas las polis en paz a través de competencias atléticas."
            },
            {
                "id": 15,
                "subject": "Historia",
                "question": "¿Qué otra gran civilización europea posterior copió e imitó en gran medida la cultura griega (incluyendo sus dioses, aunque cambiándoles el nombre)?",
                "options": [
                    "La civilización romana",
                    "El Imperio Chino",
                    "La cultura Maya",
                    "Los Vikingos"
                ],
                "correct": 0,
                "explanation": "La civilización romana conquistó militarmente a Grecia, pero fue conquistada culturalmente por ella. Adoptaron la mitología griega, asimilando sus deidades (por ejemplo, Zeus pasó a ser Júpiter) y su estilo artístico."
            },
            {
                "id": 16,
                "subject": "Historia",
                "question": "Las grandes epopeyas griegas, la Ilíada y la Odisea, son atribuidas tradicionalmente al poeta:",
                "options": [
                    "Aristóteles",
                    "Homero",
                    "Alejandro Magno",
                    "Pitágoras"
                ],
                "correct": 1,
                "explanation": "Homero es el célebre aedo (poeta lírico) griego a quien se le atribuye la creación de la Ilíada (sobre la Guerra de Troya) y la Odisea (sobre el retorno de Odiseo a Ítaca)."
            },
            {
                "id": 17,
                "subject": "Historia",
                "question": "¿Qué disciplina artística literaria e interpretativa nació en Grecia durante los festivales dedicados a Dioniso, desarrollándose en géneros como la tragedia y la comedia?",
                "options": [
                    "El cine",
                    "La radio",
                    "El teatro",
                    "La novela negra"
                ],
                "correct": 2,
                "explanation": "El teatro nació en Atenas, Grecia, a partir de celebraciones rituales en honor a Dioniso, dios del vino y la fertilidad, dando origen a la tragedia (obras solemnes) y a la comedia (obras humorísticas)."
            },
            {
                "id": 18,
                "subject": "Historia",
                "question": "El arte clásico griego, particularmente en sus esculturas, buscaba principalmente:",
                "options": [
                    "Generar miedo y terror en el espectador.",
                    "Representar figuras abstractas e incomprensibles.",
                    "Representar la belleza ideal, la perfección y la proporción del cuerpo humano.",
                    "Mostrar animales míticos de otras culturas."
                ],
                "correct": 2,
                "explanation": "El arte de la Grecia clásica estuvo dominado por el ideal estético de la proporción armónica, el canon de belleza del cuerpo humano, la simetría y el equilibrio natural."
            },
            {
                "id": 19,
                "subject": "Historia",
                "question": "El juramento que hoy en día hacen los médicos al graduarse tiene un origen griego y lleva el nombre del \"padre de la medicina\". ¿Cómo se llama este juramento?",
                "options": [
                    "Juramento Socrático",
                    "Juramento Hipocrático (por Hipócrates)",
                    "Juramento Olímpico",
                    "Juramento Ateniense"
                ],
                "correct": 1,
                "explanation": "El juramento Hipocrático, atribuido a Hipócrates de Cos (médico griego del siglo V a.C.), es una declaración de principios éticos que rige la conducta profesional de los médicos hasta nuestros días."
            },
            {
                "id": 20,
                "subject": "Historia",
                "question": "Gran parte del vocabulario científico y técnico del español actual proviene del griego (ej: biología, geometría, filosofía). A estas palabras heredadas se les conoce como:",
                "options": [
                    "Anglicismos",
                    "Galicismos",
                    "Helenismos",
                    "Arabismos"
                ],
                "correct": 2,
                "explanation": "Los helenismos son vocablos o giros lingüísticos procedentes del idioma griego que se han incorporado a otra lengua, y abundan en el vocabulario científico, médico y académico del español."
            },
            {
                "id": 21,
                "subject": "Razonamiento Verbal",
                "question": "Selecciona la oración que tiene una correcta concordancia verbal:",
                "options": [
                    "El grupo de personas llegaron tarde al evento.",
                    "La manada de lobos aulló durante toda la noche.",
                    "Los niños que estaba jugando se cansaron.",
                    "Tú y yo irá al cine mañana."
                ],
                "correct": 1,
                "explanation": "La manada de lobos aulló durante toda la noche es correcta. En sujetos colectivos seguidos de un complemento plural, el verbo concuerda en singular con el núcleo sustantivo colectivo (manada aulló)."
            },
            {
                "id": 22,
                "subject": "Razonamiento Verbal",
                "question": "¿Qué oración presenta un error evidente de concordancia?",
                "options": [
                    "Hubo muchos problemas durante la reunión.",
                    "La mitad de los estudiantes aprobaron el examen.",
                    "Habían muchas personas esperando en la fila.",
                    "Mi familia viajará a la playa el domingo."
                ],
                "correct": 2,
                "explanation": "El verbo haber en su uso impersonal (para indicar existencia) se debe conjugar únicamente en tercera persona del singular: 'había muchas personas', no 'habían'."
            },
            {
                "id": 23,
                "subject": "Razonamiento Verbal",
                "question": "Completa la oración manteniendo la concordancia correcta: \"Ni la profesora ni los alumnos _______ de acuerdo con la nueva regla\".",
                "options": [
                    "estaba",
                    "estuvo",
                    "estuvieron",
                    "estando"
                ],
                "correct": 2,
                "explanation": "Cuando un sujeto coordinado por la conjunción disyuntiva 'ni' precede al verbo, y alguno o todos los elementos están en plural, el verbo debe concordar obligatoriamente en plural: 'estuvieron'."
            },
            {
                "id": 24,
                "subject": "Razonamiento Verbal",
                "question": "Lee la siguiente frase: \"El ocaso tiñó de rojo el infinito horizonte marino\". ¿A qué se refiere el autor?",
                "options": [
                    "A un atardecer en la playa.",
                    "A un amanecer en la montaña.",
                    "A una tormenta de nieve.",
                    "A un incendio en un bosque."
                ],
                "correct": 0,
                "explanation": "El término 'ocaso' hace referencia a la puesta del sol o el atardecer, y al mencionar el 'horizonte marino' se establece una escena en la playa o costa."
            },
            {
                "id": 25,
                "subject": "Razonamiento Verbal",
                "question": "Comprensión lectora: \"A pesar del intenso frío y la tormenta de nieve, los rescatistas no detuvieron su marcha hasta encontrar a los excursionistas perdidos\". ¿Cuál es la idea principal de esta oración?",
                "options": [
                    "Que hacer excursiones es una mala idea.",
                    "El clima frío de las montañas.",
                    "El compromiso, la perseverancia y valentía de los rescatistas.",
                    "Que los excursionistas no sabían abrigarse."
                ],
                "correct": 2,
                "explanation": "El texto resalta el compromiso y la perseverancia de los rescatistas, quienes a pesar de las condiciones meteorológicas hostiles continuaron hasta cumplir su objetivo de rescate."
            },
            {
                "id": 26,
                "subject": "Razonamiento Numérico",
                "question": "Secuencias: ¿Qué número continúa lógicamente en la serie? 2, 4, 8, 16, ___",
                "options": [
                    "24",
                    "32",
                    "20",
                    "64"
                ],
                "correct": 1,
                "explanation": "Cada término de la secuencia se obtiene multiplicando el término anterior por 2: 2 * 2 = 4; 4 * 2 = 8; 8 * 2 = 16. Por tanto, el término siguiente es 16 * 2 = 32."
            },
            {
                "id": 27,
                "subject": "Razonamiento Numérico",
                "question": "Secuencias: Encuentra el número que falta en la serie: 3, 6, 11, 18, ___",
                "options": [
                    "25",
                    "27",
                    "29",
                    "36"
                ],
                "correct": 1,
                "explanation": "La diferencia entre los números aumenta progresivamente en números impares: de 3 a 6 hay +3; de 6 a 11 hay +5; de 11 a 18 hay +7. El siguiente incremento debe ser +9, entonces 18 + 9 = 27."
            },
            {
                "id": 28,
                "subject": "Razonamiento Numérico",
                "question": "Secuencias alfanuméricas: ¿Qué elemento sigue en esta serie? 1A, 2C, 3E, 4G, ___",
                "options": [
                    "5H",
                    "6J",
                    "5I",
                    "4H"
                ],
                "correct": 2,
                "explanation": "Los números aumentan de 1 en 1 (sigue el 5). Las letras se saltan una letra en el abecedario: A -> (B) -> C -> (D) -> E -> (F) -> G -> (H) -> I (sigue la I). Por ende, el elemento es 5I."
            },
            {
                "id": 29,
                "subject": "Razonamiento Numérico",
                "question": "Secuencias lógicas: Si el patrón es restar 5 y luego sumar 2, ¿qué número sigue después del 12 en esta secuencia: 15, 10, 12, 7, 9, 4, ___?",
                "options": [
                    "2",
                    "6",
                    "-1",
                    "11"
                ],
                "correct": 1,
                "explanation": "Siguiendo el patrón: 15 (-5)= 10 (+2)= 12 (-5)= 7 (+2)= 9 (-5)= 4. El siguiente paso requiere sumar 2 al último valor: 4 + 2 = 6."
            },
            {
                "id": 30,
                "subject": "Razonamiento Numérico",
                "question": "Ecuaciones: Resuelve la siguiente ecuación de primer grado: 2x − 4 = 10",
                "options": [
                    "x = 3",
                    "x = 7",
                    "x = 14",
                    "x = 6"
                ],
                "correct": 1,
                "explanation": "Para resolver 2x - 4 = 10, sumamos 4 a ambos lados: 2x = 14. Luego dividimos entre 2: x = 14 / 2 = 7."
            },
            {
                "id": 31,
                "subject": "Razonamiento Numérico",
                "question": "Ecuaciones: Si el triple de un número menos 5 es igual a 16, ¿cuál es ese número?",
                "options": [
                    "5",
                    "7",
                    "9",
                    "21"
                ],
                "correct": 1,
                "explanation": "Planteamos la ecuación: 3x - 5 = 16. Sumamos 5 en ambos miembros: 3x = 21. Dividiendo para 3, obtenemos x = 7."
            },
            {
                "id": 32,
                "subject": "Razonamiento Numérico",
                "question": "Resuelve para x: 5x = 3x + 12",
                "options": [
                    "x = 2",
                    "x = 4",
                    "x = 6",
                    "x = 8"
                ],
                "correct": 2,
                "explanation": "Transponemos los términos con x al lado izquierdo restando 3x: 5x - 3x = 12. Obtenemos 2x = 12. Dividimos entre 2: x = 6."
            },
            {
                "id": 33,
                "subject": "Razonamiento Numérico",
                "question": "Problema de ecuaciones: Juan tiene el doble de dinero que Pedro. Si entre los dos suman $60, ¿cuánto dinero tiene Pedro?",
                "options": [
                    "$10",
                    "$20",
                    "$30",
                    "$40"
                ],
                "correct": 1,
                "explanation": "Si representamos a Pedro como 'x', Juan tiene '2x'. La ecuación es x + 2x = 60, de donde 3x = 60, lo cual da x = 20. Por lo tanto, Pedro tiene $20."
            },
            {
                "id": 34,
                "subject": "Razonamiento Numérico",
                "question": "Problema de ecuaciones: La suma de dos números enteros y consecutivos es 21. ¿Cuáles son esos números?",
                "options": [
                    "9 y 12",
                    "10 y 11",
                    "8 y 13",
                    "11 y 12"
                ],
                "correct": 1,
                "explanation": "Sean los números x y x+1. Su suma es x + x + 1 = 21, o sea 2x + 1 = 21. Despejas: 2x = 20, dando x = 10. Los números son 10 y 11."
            },
            {
                "id": 35,
                "subject": "Razonamiento Numérico",
                "question": "Ecuaciones: Resuelve: x + (x + 2) = 18",
                "options": [
                    "x = 6",
                    "x = 10",
                    "x = 8",
                    "x = 16"
                ],
                "correct": 2,
                "explanation": "Sumando los términos semejantes: 2x + 2 = 18. Restando 2 de ambos lados: 2x = 16. Dividiendo entre 2 obtenemos x = 8."
            }
        ],
        "Sábado": [
            {
                "id": 1,
                "subject": "Lengua y Literatura",
                "question": "¿Cuál es el objetivo principal de una \"investigación monográfica\"?",
                "options": [
                    "Escribir un poema sobre un tema libre.",
                    "Recopilar información breve sobre muchos temas a la vez.",
                    "Investigar, analizar y profundizar de manera detallada y sistemática sobre un tema específico y delimitado.",
                    "Publicar una noticia rápida en un periódico."
                ],
                "correct": 2,
                "explanation": "La investigación monográfica busca estudiar en profundidad un tema determinado de forma sistemática y rigurosa."
            },
            {
                "id": 2,
                "subject": "Lengua y Literatura",
                "question": "Los textos académicos se caracterizan principalmente por:",
                "options": [
                    "Utilizar lenguaje informal y coloquial.",
                    "Su rigor, objetividad, estructura formal y uso de un lenguaje técnico o especializado.",
                    "Estar escritos siempre en verso.",
                    "Basarse exclusivamente en las emociones del autor sin necesitar pruebas."
                ],
                "correct": 1,
                "explanation": "Los textos académicos requieren formalidad, rigor conceptual, objetividad y una estructura bien definida para transmitir conocimiento de forma confiable."
            },
            {
                "id": 3,
                "subject": "Lengua y Literatura",
                "question": "¿Cuál de los siguientes ejemplos NO es un texto académico?",
                "options": [
                    "Un artículo científico.",
                    "Una tesis de grado.",
                    "Un cuento de fantasía.",
                    "Un ensayo argumentativo universitario."
                ],
                "correct": 2,
                "explanation": "Un cuento de fantasía es una obra de ficción literaria y creativa, a diferencia de los otros documentos que pertenecen al ámbito académico y de investigación."
            },
            {
                "id": 4,
                "subject": "Lengua y Literatura",
                "question": "En la estructura básica de un informe académico o monografía, la \"Introducción\" sirve para:",
                "options": [
                    "Detallar todos los libros que se leyeron.",
                    "Presentar el tema, los objetivos del trabajo y la justificación de la investigación.",
                    "Agradecer a los familiares del autor.",
                    "Escribir el resumen final de los resultados."
                ],
                "correct": 1,
                "explanation": "La introducción tiene como finalidad contextualizar al lector sobre el tema a tratar, delimitar los objetivos y justificar la relevancia de la investigación."
            },
            {
                "id": 5,
                "subject": "Lengua y Literatura",
                "question": "Todo texto académico debe respaldar sus afirmaciones y datos para no caer en el plagio. ¿Cómo se logra esto?",
                "options": [
                    "Poniendo el nombre del autor en la portada.",
                    "Utilizando citas y referencias bibliográficas confiables.",
                    "Escribiendo en mayúsculas las partes importantes.",
                    "Usando muchas imágenes en el texto."
                ],
                "correct": 1,
                "explanation": "Las citas y referencias bibliográficas otorgan validez al trabajo y dan crédito a las fuentes originales, evitando así el plagio."
            },
            {
                "id": 6,
                "subject": "Lengua y Literatura",
                "question": "El estilo de redacción en un informe académico debe ser:",
                "options": [
                    "Subjetivo y lleno de opiniones personales sin fundamento.",
                    "Humorístico y entretenido.",
                    "Claro, objetivo, preciso y en tercera persona (o primera del plural).",
                    "Literario y poético."
                ],
                "correct": 2,
                "explanation": "La redacción académica se caracteriza por ser formal, clara, precisa y evitar juicios subjetivos o emociones personales del autor."
            },
            {
                "id": 7,
                "subject": "Lengua y Literatura",
                "question": "¿Qué sección de un informe académico presenta los hallazgos y el análisis de la información recopilada?",
                "options": [
                    "El prólogo.",
                    "El cuerpo o desarrollo.",
                    "El índice.",
                    "La dedicatoria."
                ],
                "correct": 1,
                "explanation": "En el cuerpo o desarrollo se expone en detalle la información recopilada, los argumentos y el análisis de la investigación."
            },
            {
                "id": 8,
                "subject": "Lengua y Literatura",
                "question": "En una investigación monográfica, la \"bibliografía\" corresponde a:",
                "options": [
                    "La biografía del autor que escribió la monografía.",
                    "La lista ordenada alfabéticamente de todas las fuentes, libros y documentos consultados.",
                    "El lugar físico donde se guardan los libros.",
                    "Las conclusiones finales del estudio."
                ],
                "correct": 1,
                "explanation": "La bibliografía o sección de referencias es la lista de todas las fuentes bibliográficas y digitales utilizadas a lo largo del trabajo."
            },
            {
                "id": 9,
                "subject": "Lengua y Literatura",
                "question": "Para que un texto sea considerado \"académico\", generalmente se produce en un entorno:",
                "options": [
                    "Estudiantil, universitario o científico.",
                    "Exclusivamente deportivo.",
                    "Familiar o de amigos.",
                    "De entretenimiento televisivo."
                ],
                "correct": 0,
                "explanation": "Los textos académicos son aquellos elaborados dentro de comunidades escolares, universitarias o de investigación científica."
            },
            {
                "id": 10,
                "subject": "Lengua y Literatura",
                "question": "La parte final de un informe académico, donde se sintetizan las ideas principales y se responde a los objetivos planteados al inicio, se llama:",
                "options": [
                    "Anexos",
                    "Conclusión",
                    "Glosario",
                    "Índice"
                ],
                "correct": 1,
                "explanation": "La conclusión resume los puntos clave, el resultado de la investigación y las deducciones finales de acuerdo a los objetivos propuestos."
            },
            {
                "id": 11,
                "subject": "Historia",
                "question": "Según la leyenda mitológica, la ciudad de Roma fue fundada por los hermanos:",
                "options": [
                    "Caín y Abel",
                    "Rómulo y Remo",
                    "Zeus y Hades",
                    "Julio y Augusto"
                ],
                "correct": 1,
                "explanation": "Según la tradición mitológica romana, Rómulo y Remo fundaron Roma en el año 753 a.C., siendo criados por una loba."
            },
            {
                "id": 12,
                "subject": "Historia",
                "question": "¿Cuál fue el primer sistema de gobierno que tuvo la antigua Roma desde su fundación?",
                "options": [
                    "Imperio",
                    "República",
                    "Monarquía",
                    "Tiranía"
                ],
                "correct": 2,
                "explanation": "La primera etapa política de Roma fue la Monarquía, que abarcó desde su fundación en el 753 a.C. hasta la caída del último rey en el 509 a.C."
            },
            {
                "id": 13,
                "subject": "Historia",
                "question": "El fin de la monarquía romana y el inicio de la República se produjo tras la expulsión del último rey (que era de origen etrusco). ¿Cómo se llamaba?",
                "options": [
                    "Tarquinio el Soberbio",
                    "Julio César",
                    "Octavio Augusto",
                    "Nerón"
                ],
                "correct": 0,
                "explanation": "Tarquinio el Soberbio fue el séptimo y último rey de Roma, cuyo gobierno tiránico provocó una rebelión que instauró la República en el 509 a.C."
            },
            {
                "id": 14,
                "subject": "Historia",
                "question": "Durante la República romana, ¿cuál era la institución política más poderosa, formada originalmente por patricios ancianos y sabios?",
                "options": [
                    "La Asamblea de la Plebe",
                    "El Senado",
                    "El Foro",
                    "La Iglesia"
                ],
                "correct": 1,
                "explanation": "El Senado romano era la institución central de la República, encargada de la política exterior, finanzas y asesoramiento general del Estado."
            },
            {
                "id": 15,
                "subject": "Historia",
                "question": "En la República, en lugar de un rey, el gobierno y el ejército eran dirigidos por dos magistrados elegidos cada año, llamados:",
                "options": [
                    "Faraones",
                    "Cónsules",
                    "Emperadores",
                    "Dictadores"
                ],
                "correct": 1,
                "explanation": "Los cónsules eran los magistrados supremos de la República romana, ejerciendo el poder ejecutivo y el mando militar durante un mandato anual."
            },
            {
                "id": 16,
                "subject": "Historia",
                "question": "¿Qué clase social en Roma luchó durante siglos en la época de la República para lograr igualdad de derechos políticos frente a los patricios?",
                "options": [
                    "Los esclavos",
                    "Los gladiadores",
                    "Los plebeyos",
                    "Los extranjeros"
                ],
                "correct": 2,
                "explanation": "Los plebeyos constituían la clase mayoritaria de ciudadanos libres sin linaje noble, quienes lucharon por equiparar sus derechos políticos y sociales a los de los patricios."
            },
            {
                "id": 17,
                "subject": "Historia",
                "question": "Durante su expansión por el Mar Mediterráneo, la República romana se enfrentó a su mayor rival comercial y militar en las \"Guerras Púnicas\". ¿Cuál era esa ciudad rival?",
                "options": [
                    "Atenas",
                    "Cartago",
                    "Esparta",
                    "Troya"
                ],
                "correct": 1,
                "explanation": "Las Guerras Púnicas fueron una serie de tres conflictos bélicos entre Roma y la ciudad de origen fenicio Cartago por la hegemonía en el Mediterráneo."
            },
            {
                "id": 18,
                "subject": "Historia",
                "question": "¿Cómo se llamaba a los grandes territorios que Roma conquistó fuera de Italia durante la expansión de la República?",
                "options": [
                    "Colonias",
                    "Feudos",
                    "Provincias",
                    "Metrópolis"
                ],
                "correct": 2,
                "explanation": "Las provincias eran las divisiones administrativas y territoriales que Roma establecía en los territorios conquistados fuera de la península itálica."
            },
            {
                "id": 19,
                "subject": "Historia",
                "question": "La expansión de la República trajo muchas riquezas, pero también causó una grave crisis social porque:",
                "options": [
                    "Los patricios se empobrecieron y los esclavos se hicieron ricos.",
                    "Las tierras y riquezas se concentraron en pocas manos, arruinando a los pequeños campesinos.",
                    "Roma prohibió el uso del dinero.",
                    "Se quedaron sin barcos para navegar."
                ],
                "correct": 1,
                "explanation": "La afluencia masiva de riquezas y esclavos favoreció la creación de grandes latifundios de los nobles (patricios), arruinando a la clase campesina plebeya."
            },
            {
                "id": 20,
                "subject": "Historia",
                "question": "¿Qué famoso y exitoso general militar romano cruzó el río Rubicón, ganó una guerra civil y se hizo nombrar \"dictador perpetuo\", lo que llevó a su asesinato y marcó el declive final de la República?",
                "options": [
                    "Julio César",
                    "Alejandro Magno",
                    "Leónidas",
                    "Marco Antonio"
                ],
                "correct": 0,
                "explanation": "Julio César concentró el poder absoluto tras vencer en la guerra civil, asumiendo la dictadura perpetua, lo que desencadenó su conspiración y asesinato, allanando el camino al Imperio."
            },
            {
                "id": 21,
                "subject": "Razonamiento Verbal",
                "question": "Precisión semántica: Completa la oración con la palabra más exacta según el contexto médico: \"El cirujano realizó una _______ muy delicada a corazón abierto\".",
                "options": [
                    "tarea",
                    "intervención",
                    "aventura",
                    "charla"
                ],
                "correct": 1,
                "explanation": "En el ámbito médico y de cirugías, el término técnico y más preciso es 'intervención' (o intervención quirúrgica)."
            },
            {
                "id": 22,
                "subject": "Razonamiento Verbal",
                "question": "Precisión semántica: \"Debido a la tormenta, el barco no pudo _______ en el puerto y tuvo que volver a alta mar\".",
                "options": [
                    "estacionarse",
                    "parquear",
                    "atracar",
                    "frenar"
                ],
                "correct": 2,
                "explanation": "Atracar es el término náutico preciso que designa la acción de arrimar una embarcación a un muelle."
            },
            {
                "id": 23,
                "subject": "Razonamiento Verbal",
                "question": "Sinónimos: Identifica el sinónimo de la palabra \"EFÍMERO\".",
                "options": [
                    "Duradero",
                    "Eterno",
                    "Pasajero",
                    "Antiguo"
                ],
                "correct": 2,
                "explanation": "Algo efímero es aquello que dura muy poco tiempo, por lo que su sinónimo exacto es 'pasajero'."
            },
            {
                "id": 24,
                "subject": "Razonamiento Verbal",
                "question": "Sinónimos: Encuentra el sinónimo de la palabra \"OBSOLETO\".",
                "options": [
                    "Moderno",
                    "Anticuado",
                    "Brillante",
                    "Novedoso"
                ],
                "correct": 1,
                "explanation": "Algo obsoleto es aquello que ha caído en desuso, resultando inadecuado o anticuado."
            },
            {
                "id": 25,
                "subject": "Razonamiento Verbal",
                "question": "Sinónimos: ¿Cuál es el sinónimo de \"ALTRUISTA\"?",
                "options": [
                    "Egoísta",
                    "Tacaño",
                    "Solidario",
                    "Ambicioso"
                ],
                "correct": 2,
                "explanation": "Una persona altruista es aquella que procura el bien ajeno de manera desinteresada, equivalente a ser solidario."
            },
            {
                "id": 26,
                "subject": "Razonamiento Numérico",
                "question": "Porcentajes: ¿Cuál es el 20% de 150?",
                "options": [
                    "15",
                    "20",
                    "30",
                    "45"
                ],
                "correct": 2,
                "explanation": "Para resolver esto, primero multiplicas 150 por 20, lo que da 3000. Luego divides ese 3000 entre 100, y te da los 30 exactos."
            },
            {
                "id": 27,
                "subject": "Razonamiento Numérico",
                "question": "Porcentajes: Un videojuego cuesta $80, pero tiene un descuento del 25%. ¿Cuánto pagarás finalmente?",
                "options": [
                    "$60",
                    "$55",
                    "$65",
                    "$70"
                ],
                "correct": 0,
                "explanation": "Para resolver esto, primero calculas el descuento multiplicando 80 por 0.25, lo que da 20 dólares de rebaja. Luego restas esos 20 al precio original de 80, y pagarás 60."
            },
            {
                "id": 28,
                "subject": "Razonamiento Numérico",
                "question": "Porcentajes: En una clase de 40 estudiantes, el día de hoy faltaron 10. ¿Qué porcentaje de la clase faltó?",
                "options": [
                    "10%",
                    "20%",
                    "25%",
                    "40%"
                ],
                "correct": 2,
                "explanation": "Para resolver esto, divides los 10 estudiantes que faltaron entre el total de 40 estudiantes, lo que te da 0.25. Al multiplicar eso por 100 para sacar el porcentaje, te da 25%."
            },
            {
                "id": 29,
                "subject": "Razonamiento Numérico",
                "question": "Porcentajes: Si el 15% de un número desconocido es 30, ¿cuál es ese número total?",
                "options": [
                    "150",
                    "200",
                    "300",
                    "450"
                ],
                "correct": 1,
                "explanation": "Para resolver esto con una regla de tres, si el 15% es 30, multiplicas 30 por el 100% total que buscas y lo divides entre el 15%. 3000 dividido para 15 te da 200."
            },
            {
                "id": 30,
                "subject": "Razonamiento Numérico",
                "question": "Porcentajes: El sueldo mensual de Carlos es de $500. Si le dan un aumento del 10%, ¿cuál será su nuevo sueldo?",
                "options": [
                    "$510",
                    "$550",
                    "$600",
                    "$505"
                ],
                "correct": 1,
                "explanation": "Para resolver esto, calculas el aumento sacando el 10% de 500, que es 50 dólares. Luego sumas esos 50 al sueldo original, dándote 550."
            },
            {
                "id": 31,
                "subject": "Razonamiento Numérico",
                "question": "Regla de tres directa: Si 3 kilos de manzanas cuestan $6, ¿cuánto costarán 5 kilos?",
                "options": [
                    "$8",
                    "$10",
                    "$12",
                    "$15"
                ],
                "correct": 1,
                "explanation": "Para resolver esto, como es regla directa, multiplicas cruzado 5 por 6 que da 30, y luego divides entre los 3 kilos iniciales, dándote 10 dólares."
            },
            {
                "id": 32,
                "subject": "Razonamiento Numérico",
                "question": "Regla de tres inversa: Si 4 obreros construyen una pared en 6 días, ¿cuánto tardarán 8 obreros trabajando al mismo ritmo?",
                "options": [
                    "3 días",
                    "6 días",
                    "12 días",
                    "2 días"
                ],
                "correct": 0,
                "explanation": "Para resolver esto, al ser inversa, multiplicas en línea recta: 4 obreros por 6 días da 24. Luego divides ese 24 entre los 8 nuevos obreros, y te da 3 días."
            },
            {
                "id": 33,
                "subject": "Razonamiento Numérico",
                "question": "Regla de tres directa: Un automóvil viajando a velocidad constante recorre 120 kilómetros en 2 horas. ¿Cuántos kilómetros recorrerá en 5 horas?",
                "options": [
                    "240 km",
                    "250 km",
                    "300 km",
                    "350 km"
                ],
                "correct": 2,
                "explanation": "Para resolver esto, como es directa, multiplicas los 5 horas por los 120 km, dando 600. Luego divides esos 600 entre las 2 horas iniciales y te da 300 kilómetros."
            },
            {
                "id": 34,
                "subject": "Razonamiento Numérico",
                "question": "Regla de tres inversa: Una manguera arroja 10 litros de agua por minuto y llena una piscina en 60 minutos. Si usamos una manguera más grande que arroja 20 litros por minuto, ¿en cuánto tiempo se llenará la piscina?",
                "options": [
                    "120 minutos",
                    "45 minutos",
                    "20 minutos",
                    "30 minutos"
                ],
                "correct": 3,
                "explanation": "Para resolver esto, al ser inversa, multiplicas los 10 litros por los 60 minutos, lo que da 600. Luego lo divides entre la nueva capacidad de 20 litros, obteniendo 30 minutos."
            },
            {
                "id": 35,
                "subject": "Razonamiento Numérico",
                "question": "Regla de tres directa: Para preparar un postre para 4 personas se necesitan 200 gramos de harina. ¿Cuántos gramos se necesitarán para 10 personas?",
                "options": [
                    "400 g",
                    "500 g",
                    "600 g",
                    "800 g"
                ],
                "correct": 1,
                "explanation": "Para resolver esto, al ser directa, multiplicas las 10 personas por los 200 gramos, lo que da 2000. Al dividir eso entre las 4 personas originales, te quedan los 500 gramos necesarios."
            }
        ],
        "Domingo": [
            {
                "id": 1,
                "subject": "Lengua y Literatura",
                "question": "¿Cuál es la función principal de la referenciación bibliográfica en un texto académico?",
                "options": [
                    "Ocupar más páginas en el documento.",
                    "Dar crédito a los autores originales de la información y evitar el plagio.",
                    "Hacer el texto más difícil de leer.",
                    "Ahorrar tinta al imprimir."
                ],
                "correct": 1,
                "explanation": "La referenciación bibliográfica sirve para otorgar reconocimiento a los autores citados y permitir al lector contrastar las fuentes originales, previniendo el plagio."
            },
            {
                "id": 2,
                "subject": "Lengua y Literatura",
                "question": "El formato o estilo internacional más utilizado actualmente para citar fuentes y crear referencias en ciencias sociales y educación es el de las normas:",
                "options": [
                    "APA",
                    "ISO",
                    "RAE",
                    "ONU"
                ],
                "correct": 0,
                "explanation": "Las normas APA (American Psychological Association) constituyen el estándar más extendido en el ámbito académico y científico internacional."
            },
            {
                "id": 3,
                "subject": "Lengua y Literatura",
                "question": "Si copias un párrafo de internet y lo incluyes en tu trabajo monográfico sin citar la fuente, estás cometiendo:",
                "options": [
                    "Un ensayo.",
                    "Una paráfrasis.",
                    "Un plagio.",
                    "Una cita directa."
                ],
                "correct": 2,
                "explanation": "Utilizar obras o textos ajenos haciéndolos pasar por propios al omitir la referencia se considera plagio académico."
            },
            {
                "id": 4,
                "subject": "Lengua y Literatura",
                "question": "¿Qué es una \"contradicción\" dentro de un texto?",
                "options": [
                    "Cuando una afirmación se opone o niega por completo a otra afirmación dentro del mismo texto.",
                    "Cuando el texto tiene mala ortografía.",
                    "Cuando el texto es muy extenso y aburrido.",
                    "Cuando faltan las tildes en los verbos."
                ],
                "correct": 0,
                "explanation": "Una contradicción se produce cuando dos proposiciones contenidas en un escrito se excluyen mutuamente, anulando la coherencia."
            },
            {
                "id": 5,
                "subject": "Lengua y Literatura",
                "question": "Lee la siguiente frase: \"Vi al perro de tu hermano\". Esta frase presenta una \"ambigüedad\" porque:",
                "options": [
                    "Tiene faltas de ortografía graves.",
                    "No se entiende claramente si el perro le pertenece al hermano, o si es un insulto llamando \"perro\" al hermano.",
                    "Usa palabras muy antiguas que ya no se entienden.",
                    "Es una mentira comprobada."
                ],
                "correct": 1,
                "explanation": "La ambigüedad o anfibología se presenta cuando la estructura sintáctica de un enunciado permite dos o más interpretaciones totalmente válidas."
            },
            {
                "id": 6,
                "subject": "Lengua y Literatura",
                "question": "Para evitar ambigüedades en un informe académico, el autor debe:",
                "options": [
                    "Usar la mayor cantidad de palabras extranjeras posible.",
                    "Elegir palabras precisas y redactar las oraciones con extrema claridad.",
                    "Escribir siempre en formato de poema.",
                    "Eliminar los signos de puntuación."
                ],
                "correct": 1,
                "explanation": "La claridad y precisión semántica en la redacción son los mejores recursos para asegurar que la transmisión del mensaje sea unívoca."
            },
            {
                "id": 7,
                "subject": "Lengua y Literatura",
                "question": "Las palabras \"vela\" (tela de un barco) y \"vela\" (cilindro de cera para iluminar) que se escriben y suenan exactamente igual pero tienen distinto origen y significado, son un ejemplo de:",
                "options": [
                    "Sinónimas.",
                    "Homónimas (específicamente homógrafas).",
                    "Antónimas.",
                    "Parónimas."
                ],
                "correct": 1,
                "explanation": "Las palabras homógrafas se escriben igual pero tienen etimologías y definiciones completamente diferentes."
            },
            {
                "id": 8,
                "subject": "Lengua y Literatura",
                "question": "Las palabras \"bello\" (hermoso) y \"vello\" (pelo corto) que suenan igual pero se escriben distinto y significan cosas diferentes, son un ejemplo de homonimia del tipo:",
                "options": [
                    "Homófonas.",
                    "Sinónimas.",
                    "Polisémicas.",
                    "Antónimas."
                ],
                "correct": 0,
                "explanation": "Las palabras homófonas tienen idéntica pronunciación pero diferente ortografía y significado."
            },
            {
                "id": 9,
                "subject": "Lengua y Literatura",
                "question": "Las palabras \"actitud\" (comportamiento) y \"aptitud\" (capacidad) suenan muy parecido, pero se escriben distinto y tienen significados diferentes. Este es un caso de:",
                "options": [
                    "Sinonimia.",
                    "Antonimia.",
                    "Paronimia.",
                    "Monosemia."
                ],
                "correct": 2,
                "explanation": "La paronimia agrupa palabras con gran semejanza fonética y escrita pero con distinta semántica."
            },
            {
                "id": 10,
                "subject": "Lengua y Literatura",
                "question": "El fenómeno semántico de la \"polisemia\" ocurre cuando:",
                "options": [
                    "Una misma palabra tiene múltiples significados que guardan alguna relación entre sí (ej. \"hoja\" de árbol y \"hoja\" de papel).",
                    "Dos palabras distintas significan exactamente lo mismo.",
                    "Una palabra se pronuncia diferente dependiendo del país.",
                    "Se escribe una palabra al revés."
                ],
                "correct": 0,
                "explanation": "A diferencia de la homonimia, en la polisemia una misma raíz léxica adquiere diversas acepciones conectadas conceptualmente."
            },
            {
                "id": 11,
                "subject": "Historia",
                "question": "¿Qué líder romano se convirtió en el primer emperador, marcando el fin de la República y el inicio formal del Imperio Romano?",
                "options": [
                    "Julio César",
                    "Octavio Augusto",
                    "Nerón",
                    "Constantino el Grande"
                ],
                "correct": 1,
                "explanation": "César Augusto (Octavio) asumió el título de emperador en el 27 a.C., instaurando el régimen del Principado."
            },
            {
                "id": 12,
                "subject": "Historia",
                "question": "Durante los primeros siglos del Imperio Romano, se vivió un largo período de estabilidad, orden y relativa paz dentro de sus extensas fronteras. ¿Cómo se conoce históricamente a esta etapa?",
                "options": [
                    "Las Guerras Púnicas",
                    "La Pax Romana",
                    "Las Cruzadas",
                    "La Revolución Industrial"
                ],
                "correct": 1,
                "explanation": "La Pax Romana fue la era de pacificación y apogeo interno que abarcó los siglos I y II d.C. bajo el mandato de la dinastía Julio-Claudia y Antonina."
            },
            {
                "id": 13,
                "subject": "Historia",
                "question": "¿Qué suceso histórico marca convencionalmente el fin y la \"caída\" del Imperio Romano de Occidente en el año 476 d.C.?",
                "options": [
                    "El descubrimiento de América.",
                    "La Revolución Francesa.",
                    "La invasión de los pueblos germánicos (bárbaros) y la destitución del último emperador.",
                    "La invención de la imprenta de Gutenberg."
                ],
                "correct": 2,
                "explanation": "La deposición del emperador Rómulo Augústulo por parte del líder bárbaro Odoacro cierra la edad antigua en el 476 d.C."
            },
            {
                "id": 14,
                "subject": "Historia",
                "question": "¿Cuál es uno de los legados culturales y jurídicos más importantes de Roma, que sirve como base para las leyes y códigos civiles de la mayoría de los países occidentales modernos?",
                "options": [
                    "El sistema de castas hindú.",
                    "El Derecho Romano.",
                    "La democracia directa.",
                    "El código de Hammurabi."
                ],
                "correct": 1,
                "explanation": "El corpus legal desarrollado por Roma constituye la base conceptual de gran parte del derecho continental actual."
            },
            {
                "id": 15,
                "subject": "Historia",
                "question": "El idioma hablado en el Imperio Romano, que con el tiempo evolucionó y dio origen a las \"lenguas romances\" (como el español, el francés, el italiano y el portugués), fue:",
                "options": [
                    "El griego antiguo",
                    "El inglés",
                    "El latín",
                    "El arameo"
                ],
                "correct": 2,
                "explanation": "El latín vulgar hablado por los soldados y comerciantes romanos es el tronco directo del que provienen las lenguas neolatinas."
            },
            {
                "id": 16,
                "subject": "Historia",
                "question": "En cuanto a su gran legado de arquitectura e ingeniería civil, los romanos destacaron a nivel mundial por la construcción de:",
                "options": [
                    "Pirámides escalonadas gigantes.",
                    "Acueductos, calzadas (carreteras), baños públicos y enormes anfiteatros (como el Coliseo).",
                    "Pagodas de madera y papel.",
                    "Zigurats de barro."
                ],
                "correct": 1,
                "explanation": "La ingeniería romana revolucionó las infraestructuras mediante el uso generalizado del arco de medio punto, hormigón y el trazado de vías terrestres."
            },
            {
                "id": 17,
                "subject": "Historia",
                "question": "Durante los primeros tres siglos de existencia del Imperio Romano, la relación del gobierno con los cristianos fue de:",
                "options": [
                    "Apoyo total y financiamiento de sus iglesias.",
                    "Persecución constante y martirio, obligándolos a esconderse en catacumbas.",
                    "Indiferencia absoluta, nadie sabía que existían.",
                    "Someter a los emperadores al poder del Papa."
                ],
                "correct": 1,
                "explanation": "Al negar el culto imperial y los dioses tradicionales, el cristianismo fue proscrito e ilegalizado, enfrentando persecuciones intermitentes."
            },
            {
                "id": 18,
                "subject": "Historia",
                "question": "¿Qué emperador romano promulgó el famoso Edicto de Milán en el año 313 d.C., mediante el cual se permitía la libertad de culto y se detenía oficialmente la persecución a los cristianos?",
                "options": [
                    "Constantino I (el Grande)",
                    "Calígula",
                    "Tiberio",
                    "Rómulo"
                ],
                "correct": 0,
                "explanation": "Con el Edicto de Milán en 313, el emperador Constantino I proclamó la tolerancia religiosa del cristianismo dentro de los territorios imperiales."
            },
            {
                "id": 19,
                "subject": "Historia",
                "question": "A finales del siglo IV (año 380 d.C.), mediante el Edicto de Tesalónica del emperador Teodosio, el cristianismo pasó a ser:",
                "options": [
                    "Una religión prohibida para siempre.",
                    "La religión oficial, exclusiva y obligatoria de todo el Imperio Romano.",
                    "Una religión olvidada y reemplazada por la mitología nórdica.",
                    "Una moda pasajera exclusiva de los esclavos."
                ],
                "correct": 1,
                "explanation": "Teodosio I oficializó el cristianismo niceno, convirtiendo el paganismo antiguo en una práctica proscrita."
            },
            {
                "id": 20,
                "subject": "Historia",
                "question": "¿En qué región oriental dominada por el Imperio Romano se originó históricamente el cristianismo en el siglo I d.C. con las enseñanzas de Jesús de Nazaret?",
                "options": [
                    "En Egipto.",
                    "En la península ibérica (Hispania).",
                    "En Judea (actual Israel/Palestina).",
                    "En el norte de Europa (Germania)."
                ],
                "correct": 2,
                "explanation": "El movimiento cristiano nació en la provincia romana de Judea en Oriente Medio bajo el mandato imperial de Augusto y Tiberio."
            },
            {
                "id": 21,
                "subject": "Razonamiento Verbal",
                "question": "Antónimos: Identifica el antónimo (opuesto) exacto de la palabra \"ARROGANTE\".",
                "options": [
                    "Humilde",
                    "Orgulloso",
                    "Valiente",
                    "Inteligente"
                ],
                "correct": 0,
                "explanation": "Lo contrario de arrogante (alguien altivo y soberbio) es humilde (que no hace alarde de sus virtudes)."
            },
            {
                "id": 22,
                "subject": "Razonamiento Verbal",
                "question": "Antónimos: ¿Cuál es el antónimo de la palabra \"PACÍFICO\"?",
                "options": [
                    "Tranquilo",
                    "Violento",
                    "Sereno",
                    "Amable"
                ],
                "correct": 1,
                "explanation": "Alguien pacífico busca la paz y sosiego; su antónimo es violento (que tiende a usar la fuerza o agresión)."
            },
            {
                "id": 23,
                "subject": "Razonamiento Verbal",
                "question": "Completamiento: \"El investigador fue muy _______ en su trabajo, no dejó ningún detalle al _______.\"",
                "options": [
                    "flojo / estudio",
                    "riguroso / azar",
                    "triste / momento",
                    "rápido / caso"
                ],
                "correct": 1,
                "explanation": "El completamiento lógico exige que si el investigador no deja detalles libres, es porque su trabajo fue meticuloso y 'riguroso', descartando el 'azar'."
            },
            {
                "id": 24,
                "subject": "Razonamiento Verbal",
                "question": "Completamiento: \"A pesar de su _______ edad, demostró una _______ sorprendente para resolver el problema matemático.\"",
                "options": [
                    "avanzada / ignorancia",
                    "corta / madurez",
                    "mala / torpeza",
                    "adulta / lentitud"
                ],
                "correct": 1,
                "explanation": "El conector de contraste 'A pesar de' requiere elementos opuestos: una edad 'corta' (juventud) contrasta con una capacidad alta o 'madurez' para solucionar problemas complejos."
            },
            {
                "id": 25,
                "subject": "Razonamiento Verbal",
                "question": "Completamiento: \"La lectura constante no solo _______ nuestra imaginación, sino que también _______ nuestro vocabulario diario.\"",
                "options": [
                    "destruye / olvida",
                    "frena / reduce",
                    "estimula / enriquece",
                    "pausa / limita"
                ],
                "correct": 2,
                "explanation": "Tanto 'estimula' como 'enriquece' son efectos positivos coherentes con la práctica constructiva de la lectura habitual."
            },
            {
                "id": 26,
                "subject": "Razonamiento Numérico",
                "question": "Conjuntos (Unión): Si el conjunto A = {2, 4, 6, 8} and el conjunto B = {1, 2, 3, 4}, ¿cuál es el resultado de la unión A ∪ B?",
                "options": [
                    "{2, 4}",
                    "{1, 2, 3, 4, 6, 8}",
                    "{6, 8}",
                    "{1, 3}"
                ],
                "correct": 1,
                "explanation": "La unión agrupa todos los elementos que pertenecen a A o a B, sin duplicar los repetidos (2 y 4): {1, 2, 3, 4, 6, 8}."
            },
            {
                "id": 27,
                "subject": "Razonamiento Numérico",
                "question": "Conjuntos (Intersección): Dados M = {a, e, i, o, u} y N = {a, b, c, d, e}, ¿qué elementos conforman la intersección M ∩ N?",
                "options": [
                    "{a, e, i, o, u, b, c, d}",
                    "{a, e}",
                    "{i, o, u}",
                    "{b, c, d}"
                ],
                "correct": 1,
                "explanation": "La intersección solo agrupa aquellos elementos comunes presentes simultáneamente en M y en N, en este caso las letras 'a' y 'e'."
            },
            {
                "id": 28,
                "subject": "Razonamiento Numérico",
                "question": "Conjuntos (Problema): En una fiesta de 50 invitados, 30 personas comen pastel y 25 personas toman refresco. Si es obligatorio consumir al menos una de las dos cosas, ¿cuántas personas hacen AMBAS cosas (comen pastel y toman refresco)?",
                "options": [
                    "5 personas",
                    "10 personas",
                    "15 personas",
                    "25 personas"
                ],
                "correct": 0,
                "explanation": "La suma total es 30 + 25 = 55 consumos. Restando el total real de personas (50), concluimos que 5 personas consumieron ambas cosas."
            },
            {
                "id": 29,
                "subject": "Razonamiento Numérico",
                "question": "Conjuntos (Diferencia): Si el conjunto P = {10, 20} y el conjunto Q = {20, 30}, ¿cuál es la diferencia P - Q (elementos que están en P pero NO en Q)?",
                "options": [
                    "{10}",
                    "{20}",
                    "{30}",
                    "{10, 20, 30}"
                ],
                "correct": 0,
                "explanation": "La diferencia P - Q remueve de P todo elemento que esté también en Q, en este caso eliminando el 20, quedando únicamente {10}."
            },
            {
                "id": 30,
                "subject": "Razonamiento Numérico",
                "question": "Conjuntos: Si absolutamente todos los elementos de un conjunto C se encuentran también dentro de un conjunto más grande D, se dice que el conjunto C es:",
                "options": [
                    "Un superconjunto de D",
                    "Un subconjunto de D",
                    "Una intersección",
                    "Un conjunto nulo"
                ],
                "correct": 1,
                "explanation": "Por definición teórica, si un conjunto está completamente contenido dentro de otro de mayor jerarquía, se le considera subconjunto de este."
            },
            {
                "id": 31,
                "subject": "Razonamiento Numérico",
                "question": "Fracciones: ¿Cuál es el resultado simplificado de sumar las fracciones 1/3 + 1/6?",
                "options": [
                    "1/9",
                    "2/9",
                    "1/2",
                    "1/4"
                ],
                "correct": 2,
                "explanation": "Homogeneizamos: 1/3 = 2/6. Sumamos: 2/6 + 1/6 = 3/6. Simplificando la fracción dividiendo para 3, obtenemos 1/2."
            },
            {
                "id": 32,
                "subject": "Razonamiento Numérico",
                "question": "Fracciones: Juan se come 2/5 de una pizza y María se come 1/5 de la misma pizza. ¿Qué fracción de la pizza sobra?",
                "options": [
                    "1/5",
                    "2/5",
                    "3/5",
                    "4/5"
                ],
                "correct": 1,
                "explanation": "Sumamos lo comido: 2/5 + 1/5 = 3/5. La fracción sobrante de la pizza completa (5/5) es: 5/5 - 3/5 = 2/5."
            },
            {
                "id": 33,
                "subject": "Razonamiento Numérico",
                "question": "Fracciones: ¿Cuál es el resultado de la multiplicación de fracciones: 3/4 × 1/2?",
                "options": [
                    "3/8",
                    "4/6",
                    "3/6",
                    "4/8"
                ],
                "correct": 0,
                "explanation": "Multiplicamos los numeradores directamente (3 * 1 = 3) y los denominadores (4 * 2 = 8), lo que da 3/8."
            },
            {
                "id": 34,
                "subject": "Razonamiento Numérico",
                "question": "Fracciones: En un salón de 40 estudiantes, 3/4 partes aprobaron el examen de matemáticas. ¿Cuántos estudiantes aprobaron exactamente?",
                "options": [
                    "10",
                    "20",
                    "30",
                    "40"
                ],
                "correct": 2,
                "explanation": "Calculamos la fracción del total: (40 * 3) / 4 = 120 / 4 = 30 estudiantes aprobados."
            },
            {
                "id": 35,
                "subject": "Razonamiento Numérico",
                "question": "Fracciones: ¿Cuál de las siguientes fracciones es equivalente (tiene exactamente el mismo valor) a 4/8?",
                "options": [
                    "1/2",
                    "1/3",
                    "1/4",
                    "2/3"
                ],
                "correct": 0,
                "explanation": "Al simplificar la fracción 4/8 dividiendo numerador y denominador entre su máximo común divisor (4), resulta 1/2."
            }
        ]
    },
    "Semana 2": {
    "Lunes": [
        {
            "id": 1,
            "subject": "Lengua y Literatura",
            "question": "¿Para qué se utiliza principalmente el punto y seguido en un texto?",
            "options": [
                "Para finalizar por completo un documento.",
                "Para separar oraciones que desarrollan la misma idea dentro de un mismo párrafo.",
                "Para hacer una pregunta.",
                "Para introducir una cita textual."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Para separar oraciones que desarrollan la misma idea dentro de un mismo párrafo."
        },
        {
            "id": 2,
            "subject": "Lengua y Literatura",
            "question": "¿Qué signo de puntuación se utiliza para separar los elementos de una enumeración o lista (por ejemplo: manzanas, peras, uvas)?",
            "options": [
                "El punto.",
                "Los dos puntos.",
                "La coma.",
                "Las comillas."
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque La coma."
        },
        {
            "id": 3,
            "subject": "Lengua y Literatura",
            "question": "¿Cuál es el objetivo principal de elaborar un resumen?",
            "options": [
                "Escribir un texto mucho más largo que el original para explicarlo mejor.",
                "Dar la opinión personal y criticar duramente al autor del texto original.",
                "Redactar una exposición breve y objetiva que contenga solo las ideas principales de un texto más extenso.",
                "Cambiar por completo el significado de lo que el autor quiso decir."
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Redactar una exposición breve y objetiva que contenga solo las ideas principales de un texto más extenso."
        },
        {
            "id": 4,
            "subject": "Lengua y Literatura",
            "question": "Una característica fundamental que todo buen resumen debe tener es:",
            "options": [
                "La objetividad (no incluir opiniones personales).",
                "El uso de rimas en todos sus párrafos.",
                "La inclusión de todos los ejemplos y detalles secundarios del texto original.",
                "Estar escrito obligatoriamente en otro idioma."
            ],
            "correct": 0,
            "explanation": "La respuesta correcta es la a) porque La objetividad (no incluir opiniones personales)."
        },
        {
            "id": 5,
            "subject": "Lengua y Literatura",
            "question": "Estructuralmente, ¿qué es un párrafo?",
            "options": [
                "Una sola palabra que resume todo un libro.",
                "Un conjunto de oraciones que desarrollan una misma idea principal.",
                "El título grande que va al inicio de una noticia.",
                "Un conjunto de rimas y versos musicales."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Un conjunto de oraciones que desarrollan una misma idea principal."
        },
        {
            "id": 6,
            "subject": "Lengua y Literatura",
            "question": "Visualmente, ¿cómo puedes identificar rápidamente dónde termina un párrafo en un texto?",
            "options": [
                "Porque siempre termina con una coma.",
                "Porque termina con un signo de interrogación.",
                "Porque termina con un punto y aparte, pasando a una nueva línea.",
                "Porque la última palabra siempre va en mayúsculas."
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Porque termina con un punto y aparte, pasando a una nueva línea."
        },
        {
            "id": 7,
            "subject": "Lengua y Literatura",
            "question": "¿Qué es una entrevista?",
            "options": [
                "Un monólogo donde una persona habla sola frente a un espejo.",
                "Un diálogo estructurado donde una persona formula preguntas a otra para conocer sus ideas, saberes o experiencias.",
                "Una pelea a gritos entre dos políticos.",
                "Un texto donde se describe detalladamente un paisaje."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Un diálogo estructurado donde una persona formula preguntas a otra para conocer sus ideas, saberes o experiencias."
        },
        {
            "id": 8,
            "subject": "Lengua y Literatura",
            "question": "En el formato de una entrevista, ¿quién tiene el rol de dirigir la conversación y formular las preguntas?",
            "options": [
                "El entrevistador.",
                "El entrevistado.",
                "El camarógrafo.",
                "El público."
            ],
            "correct": 0,
            "explanation": "La respuesta correcta es la a) porque El entrevistador."
        },
        {
            "id": 9,
            "subject": "Lengua y Literatura",
            "question": "Si a un periodista le asignan hacer una \"entrevista estructurada\", ¿qué debe hacer?",
            "options": [
                "Improvisar todo en el momento sin pensar.",
                "Llevar un guion con preguntas preestablecidas y seguir ese orden.",
                "Hablar él todo el tiempo sin dejar hablar al invitado.",
                "Pedirle al invitado que haga las preguntas."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Llevar un guion con preguntas preestablecidas y seguir ese orden."
        },
        {
            "id": 10,
            "subject": "Lengua y Literatura",
            "question": "¿Qué signo de puntuación es indispensable para escribir un texto en forma de diálogo o para hacer aclaraciones directas de quién está hablando?",
            "options": [
                "La raya (o guion largo).",
                "El punto final.",
                "La arroba.",
                "El asterisco."
            ],
            "correct": 0,
            "explanation": "La respuesta correcta es la a) porque La raya (o guion largo)."
        },
        {
            "id": 11,
            "subject": "Historia",
            "question": "Históricamente, ¿a qué región del mundo se le conoce como el \"Viejo Continente\"?",
            "options": [
                "A América.",
                "A la Antártida.",
                "A Europa.",
                "A Oceanía."
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque A Europa."
        },
        {
            "id": 12,
            "subject": "Historia",
            "question": "¿Por qué se empezó a utilizar el término \"Viejo Continente\" o \"Viejo Mundo\"?",
            "options": [
                "Porque allí viven solo personas mayores.",
                "Para diferenciarlo del \"Nuevo Mundo\" (América), que fue descubierto más tarde por los europeos.",
                "Porque sus continentes se hunden rápidamente en el mar.",
                "Porque allí se inventaron los relojes antiguos."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Para diferenciarlo del \"Nuevo Mundo\" (América), que fue descubierto más tarde por los europeos."
        },
        {
            "id": 13,
            "subject": "Historia",
            "question": "El largo proceso evolutivo y biológico mediante el cual los primeros primates fueron cambiando hasta convertirse en el ser humano actual se conoce como:",
            "options": [
                "Colonización.",
                "Feudalismo.",
                "Hominización.",
                "Fotosíntesis."
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Hominización."
        },
        {
            "id": 14,
            "subject": "Historia",
            "question": "¿Cuál fue uno de los logros más importantes del Homo erectus que cambió radicalmente la forma en que los primeros humanos se alimentaban y se protegían del frío?",
            "options": [
                "La invención de la rueda.",
                "El dominio y uso del fuego.",
                "La creación de la moneda de oro.",
                "La invención de la imprenta."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El dominio y uso del fuego."
        },
        {
            "id": 15,
            "subject": "Historia",
            "question": "Biológicamente, todos los seres humanos que habitamos hoy en día el planeta Tierra pertenecemos a la especie:",
            "options": [
                "Homo neanderthalensis",
                "Australopithecus",
                "Homo erectus",
                "Homo sapiens"
            ],
            "correct": 3,
            "explanation": "La respuesta correcta es la d) porque Homo sapiens"
        },
        {
            "id": 16,
            "subject": "Historia",
            "question": "Durante millones de años, en la etapa del Paleolítico, los primeros humanos eran \"nómadas\". ¿Qué significa este término?",
            "options": [
                "Que construían enormes castillos de piedra y nunca salían de ellos.",
                "Que se trasladaban constantemente de un lugar a otro en busca de alimento, siguiendo a los animales y recolectando frutos.",
                "Que se dedicaban exclusivamente a escribir leyes.",
                "Que navegaban en grandes barcos de vapor por los océanos."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Que se trasladaban constantemente de un lugar a otro en busca de alimento, siguiendo a los animales y recolectando frutos."
        },
        {
            "id": 17,
            "subject": "Historia",
            "question": "¿Qué gran revolución permitió al ser humano dejar de ser nómada para volverse sedentario y construir las primeras aldeas?",
            "options": [
                "La invención de la agricultura y la domesticación de animales (ganadería).",
                "La caída de los dinosaurios.",
                "El descubrimiento de la electricidad.",
                "La construcción de las pirámides de Egipto."
            ],
            "correct": 0,
            "explanation": "La respuesta correcta es la a) porque La invención de la agricultura y la domesticación de animales (ganadería)."
        },
        {
            "id": 18,
            "subject": "Historia",
            "question": "Este importante cambio tecnológico y social, marcado por la agricultura y el sedentarismo, dio inicio a un nuevo período prehistórico llamado:",
            "options": [
                "Edad Contemporánea.",
                "Neolítico.",
                "Edad de los Metales.",
                "Imperio Romano."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Neolítico."
        },
        {
            "id": 19,
            "subject": "Historia",
            "question": "Al establecerse de forma sedentaria gracias a la agricultura, las aldeas crecieron hasta convertirse en las primeras:",
            "options": [
                "Agencias espaciales.",
                "Civilizaciones y ciudades complejas.",
                "Fábricas de autos.",
                "Repúblicas democráticas modernas."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Civilizaciones y ciudades complejas."
        },
        {
            "id": 20,
            "subject": "Razonamiento Verbal",
            "question": "Interpretación de refranes: ¿Qué significa el dicho popular \"A palabras necias, oídos sordos\"?",
            "options": [
                "Que las personas sordas no pueden escuchar palabras feas.",
                "Que debemos ignorar los insultos, críticas sin fundamento o comentarios malintencionados.",
                "Que hay que gritar para que nos entiendan.",
                "Que debemos taparnos las orejas cuando alguien cuenta un secreto."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Que debemos ignorar los insultos, críticas sin fundamento o comentarios malintencionados."
        },
        {
            "id": 21,
            "subject": "Razonamiento Verbal",
            "question": "Interpretación de refranes: ¿Cuál es la moraleja de \"No por mucho madrugar amanece más temprano\"?",
            "options": [
                "Que hay que dormir hasta el mediodía para tener buena salud.",
                "Que despertarse temprano es malo para la vista.",
                "Que algunos procesos llevan su tiempo natural y apresurarse o desesperarse no hará que las cosas sucedan antes.",
                "Que el sol sale a distintas horas todos los días."
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Que algunos procesos llevan su tiempo natural y apresurarse o desesperarse no hará que las cosas sucedan antes."
        },
        {
            "id": 22,
            "subject": "Razonamiento Verbal",
            "question": "Analogías: PROFESOR es a ESCUELA como:",
            "options": [
                "Pescador es a Río.",
                "Médico es a Hospital.",
                "Piloto es a Coche.",
                "Actor es a Cine."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Médico es a Hospital."
        },
        {
            "id": 23,
            "subject": "Razonamiento Verbal",
            "question": "Analogías: MARTILLO es a CLAVAR como:",
            "options": [
                "Escoba es a Barrer.",
                "Cuchara es a Tenedor.",
                "Zapato es a Caminar.",
                "Libro es a Estudiar."
            ],
            "correct": 0,
            "explanation": "La respuesta correcta es la a) porque Escoba es a Barrer."
        },
        {
            "id": 24,
            "subject": "Razonamiento Verbal",
            "question": "Analogías: LLANTO es a TRISTEZA como:",
            "options": [
                "Grito es a Silencio.",
                "Sonrisa es a Alegría.",
                "Sudor es a Agua.",
                "Noche es a Día."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Sonrisa es a Alegría."
        },
        {
            "id": 25,
            "subject": "Razonamiento Numérico",
            "question": "Operaciones básicas: Resuelve respetando la jerarquía matemática: 12+8×2=",
            "options": [
                "40",
                "28",
                "20",
                "36"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, primero hacemos la multiplicación porque tiene prioridad sobre la suma. Multiplicamos 8 x 2 = 16. Luego le sumamos los 12 iniciales, dándonos 28"
        },
        {
            "id": 26,
            "subject": "Razonamiento Numérico",
            "question": "Operaciones básicas: Resuelve: (15−5)/2+4=",
            "options": [
                "9",
                "7",
                "14",
                "5"
            ],
            "correct": 0,
            "explanation": "Para resolver esto, los paréntesis mandan. Primero restamos 15 - 5 = 10. A ese 10 lo dividimos entre 2, lo que da 5. Finalmente, le sumamos los 4, y tenemos 9"
        },
        {
            "id": 27,
            "subject": "Razonamiento Numérico",
            "question": "Problema básico: Si compras un pantalón que cuesta $25 y una camisa que cuesta $15, y pagas con un billete de $50, ¿cuánto recibes de vuelto?",
            "options": [
                "$5",
                "$10",
                "$15",
                "$20"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, sumamos lo que gastamos: 25 del pantalón + 15 de la camisa = 40. Si pagaste con un billete de 50, restas 50 - 40, y te sobran 10 dólares de vuelto"
        },
        {
            "id": 28,
            "subject": "Razonamiento Numérico",
            "question": "Operaciones básicas: Resuelve: 5×4−10/2=",
            "options": [
                "15",
                "5",
                "20",
                "10"
            ],
            "correct": 0,
            "explanation": "Para resolver esto, primero hacemos las multiplicaciones y divisiones al mismo tiempo: 5 x 4 = 20, y 10 / 2 = 5. Luego restamos los resultados: 20 - 5 = 15"
        },
        {
            "id": 29,
            "subject": "Razonamiento Numérico",
            "question": "Problema básico: Tienes una bolsa con 30 caramelos y quieres repartirlos en partes iguales entre 5 niños. ¿Cuántos caramelos le tocan a cada niño?",
            "options": [
                "5",
                "6",
                "7",
                "8"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, es una división muy sencilla. Tomas el total de caramelos que es 30, y lo divides entre los 5 niños. 30 / 5 = 6"
        },
        {
            "id": 30,
            "subject": "Razonamiento Numérico",
            "question": "Probabilidad: Si lanzas un dado estándar (de 6 caras), ¿cuál es la probabilidad de sacar un número impar (1, 3 o 5)?",
            "options": [
                "1/6",
                "2/6",
                "3/6 (o 1/2)",
                "4/6"
            ],
            "correct": 2,
            "explanation": "Para resolver esto, contamos los casos que nos sirven: los impares son el 1, el 3 y el 5 (son 3 casos a favor). Como el dado tiene 6 casos totales, la fracción es 3/6, que simplificando es 1/2"
        },
        {
            "id": 31,
            "subject": "Razonamiento Numérico",
            "question": "Probabilidad: En una caja hay 4 pelotas rojas y 6 pelotas azules. Si sacas una pelota sin mirar, ¿cuál es la probabilidad de que sea roja?",
            "options": [
                "4/10 (o 2/5)",
                "6/10",
                "1/4",
                "1/10"
            ],
            "correct": 0,
            "explanation": "Para resolver esto, sumamos todas las pelotas de la caja: 4 rojas + 6 azules = 10 pelotas en total. Como queremos sacar una roja, y hay 4, la probabilidad es 4 de 10, es decir 4/10"
        },
        {
            "id": 32,
            "subject": "Razonamiento Numérico",
            "question": "Probabilidad: Si lanzas dos monedas al aire al mismo tiempo, ¿cuál es la probabilidad de que AMBAS caigan en \"cara\"?",
            "options": [
                "1/2",
                "1/4",
                "3/4",
                "1/1"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, mira las posibles combinaciones de 2 monedas: Cara-Cara, Cara-Cruz, Cruz-Cara, Cruz-Cruz. Hay 4 escenarios posibles, y solo 1 es Cara-Cara, así que la probabilidad es 1/4"
        },
        {
            "id": 33,
            "subject": "Razonamiento Numérico",
            "question": "Probabilidad: Una ruleta tiene los números del 1 al 10. Si la giras, ¿cuál es la probabilidad de que caiga en un número MAYOR que 7?",
            "options": [
                "2/10",
                "3/10",
                "4/10",
                "7/10"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, los números mayores que 7 en esa ruleta son el 8, el 9 y el 10. Son 3 casos que te sirven. Como la ruleta tiene 10 números posibles, la probabilidad es 3/10"
        },
        {
            "id": 34,
            "subject": "Razonamiento Numérico",
            "question": "Probabilidad: En una baraja normal de póker de 52 cartas, ¿cuál es la probabilidad de sacar exactamente el \"As de corazones\" en el primer intento?",
            "options": [
                "1/4",
                "1/13",
                "1/52",
                "4/52"
            ],
            "correct": 2,
            "explanation": "Para resolver esto, piensa cuántos Ases de corazones hay en una baraja. Solo hay 1. Como hay 52 cartas en total, tu probabilidad directa es de 1 entre 52"
        }
    ],
    "Martes": [
        {
            "id": 1,
            "subject": "Lengua y Literatura",
            "question": "Al realizar una búsqueda de información académica, ¿cuál de las siguientes fuentes se considera la más confiable y segura?",
            "options": [
                "Un foro de discusión anónimo en internet.",
                "Una publicación en una red social personal.",
                "Un artículo científico publicado en una revista con revisión por pares.",
                "Un blog de opinión sin referencias."
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Un artículo científico publicado en una revista con revisión por pares."
        },
        {
            "id": 2,
            "subject": "Lengua y Literatura",
            "question": "¿Qué herramienta de búsqueda es de gran utilidad para filtrar y delimitar información en bases de datos mediante palabras clave unidas por operadores lógicos (AND, OR, NOT)?",
            "options": [
                "Operadores booleanos.",
                "Hipervínculos rotos.",
                "Eslóganes publicitarios.",
                "Tipos de letra."
            ],
            "correct": 0,
            "explanation": "La respuesta correcta es la a) porque Operadores booleanos."
        },
        {
            "id": 3,
            "subject": "Lengua y Literatura",
            "question": "En la búsqueda de información, el proceso de evaluar la \"actualidad\" de una fuente se refiere a:",
            "options": [
                "Verificar que el autor sea una persona famosa.",
                "Comprobar la fecha de publicación o actualización del documento para garantizar su vigencia.",
                "Medir la cantidad de imágenes que tiene la página web.",
                "Revisar si el texto está escrito en prosa o en verso."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Comprobar la fecha de publicación o actualización del documento para garantizar su vigencia."
        },
        {
            "id": 4,
            "subject": "Lengua y Literatura",
            "question": "Para realizar una búsqueda de información sistemática y eficiente sobre un tema de estudio, el primer paso recomendado es:",
            "options": [
                "Escribir el primer párrafo de nuestro informe.",
                "Definir con claridad el tema y seleccionar las palabras clave o términos de búsqueda.",
                "Diseñar un folleto publicitario sobre el tema.",
                "Imprimir los primeros cien artículos que aparezcan en el buscador."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Definir con claridad el tema y seleccionar las palabras clave o términos de búsqueda."
        },
        {
            "id": 5,
            "subject": "Lengua y Literatura",
            "question": "¿Cuál es el objetivo principal de los textos publicitarios?",
            "options": [
                "Narrar de forma cronológica la vida de una persona célebre.",
                "Persuadir o convencer al público para que consuma un producto, use un servicio o adopte una conducta.",
                "Presentar argumentos lógicos y objetivos en un debate de corte científico.",
                "Describir de forma neutral y científica el funcionamiento de una máquina."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Persuadir o convencer al público para que consuma un producto, use un servicio o adopte una conducta."
        },
        {
            "id": 6,
            "subject": "Lengua y Literatura",
            "question": "En un anuncio publicitario, el \"eslogan\" se define como:",
            "options": [
                "El nombre científico de la marca o empresa.",
                "Una frase breve, atractiva y fácil de recordar que resume los valores o beneficios de un producto.",
                "La lista detallada de ingredientes o componentes técnicos en letras pequeñas.",
                "El contrato legal que firma la agencia con el cliente."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Una frase breve, atractiva y fácil de recordar que resume los valores o beneficios de un producto."
        },
        {
            "id": 7,
            "subject": "Lengua y Literatura",
            "question": "¿Qué tipo de lenguaje se utiliza predominantemente en los textos publicitarios para conectar con el público objetivo?",
            "options": [
                "Lenguaje excesivamente formal y técnico, comprensible solo por científicos.",
                "Lenguaje persuasivo, apelativo y visual, que conecta con las emociones e intereses de las personas.",
                "Lenguaje puramente poético del Siglo de Oro español.",
                "Lenguaje coloquial grosero y desordenado."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Lenguaje persuasivo, apelativo y visual, que conecta con las emociones e intereses de las personas."
        },
        {
            "id": 8,
            "subject": "Lengua y Literatura",
            "question": "¿Qué es una crónica periodística?",
            "options": [
                "Un informe de laboratorio con datos numéricos únicamente.",
                "Un género que narra hechos reales de manera detallada y cronológica, combinando información objetiva con recursos literarios.",
                "Una obra de ficción sobre viajes en el tiempo en un futuro lejano.",
                "Una lista desordenada de opiniones personales sin justificación alguna."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Un género que narra hechos reales de manera detallada y cronológica, combinando información objetiva con recursos literarios."
        },
        {
            "id": 9,
            "subject": "Lengua y Literatura",
            "question": "¿Cuál es una diferencia clave entre la noticia y la crónica?",
            "options": [
                "La noticia es ficticia y la crónica es real.",
                "La noticia narra los hechos de forma inmediata y objetiva, mientras que la crónica es más detallada y permite la valoración subjetiva del autor.",
                "La noticia siempre se escribe en verso y la crónica en prosa.",
                "La noticia solo se publica en internet y la crónica solo en libros."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque La noticia narra los hechos de forma inmediata y objetiva, mientras que la crónica es más detallada y permite la valoración subjetiva del autor."
        },
        {
            "id": 10,
            "subject": "Lengua y Literatura",
            "question": "El cronista es principalmente un:",
            "options": [
                "Actor de teatro que representa personajes históricos.",
                "Testigo o investigador de los hechos que los relata con una visión personal y estética del suceso.",
                "Diseñador gráfico que crea los folletos publicitarios.",
                "Matemático especializado en medir el tiempo exacto."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Testigo o investigador de los hechos que los relata con una visión personal y estética del suceso."
        },
        {
            "id": 11,
            "subject": "Historia",
            "question": "¿En qué período histórico se sitúa convencionalmente el desarrollo del Renacimiento en Europa Occidental?",
            "options": [
                "Entre los siglos V y X (Alta Edad Media).",
                "Durante los siglos XV y XVI, marcando la transición de la Edad Media a la Edad Moderna.",
                "Durante el siglo XX (Edad Contemporánea).",
                "En el período clásico de la Antigua Grecia (siglo V a.C.)."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Durante los siglos XV y XVI, marcando la transición de la Edad Media a la Edad Moderna."
        },
        {
            "id": 12,
            "subject": "Historia",
            "question": "¿Qué invención revolucionaria del año 1440, atribuida a Johannes Gutenberg, permitió la rápida difusión del conocimiento y de las ideas renacentistas?",
            "options": [
                "La máquina de vapor.",
                "El telescopio.",
                "La imprenta de tipos móviles.",
                "La brújula magnética."
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque La imprenta de tipos móviles."
        },
        {
            "id": 13,
            "subject": "Historia",
            "question": "¿Cuál es la principal característica del \"Humanismo\", la corriente de pensamiento que guio al Renacimiento?",
            "options": [
                "El teocentrismo absoluto, donde Dios es el único foco de atención científica y social.",
                "El antropocentrismo, que sitúa al ser humano como centro del universo y valora sus capacidades.",
                "El rechazo total a la educación y a las artes plásticas.",
                "La prohibición del estudio de las lenguas clásicas como el latín y el griego."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El antropocentrismo, que sitúa al ser humano como centro del universo y valora sus capacidades."
        },
        {
            "id": 14,
            "subject": "Historia",
            "question": "En el ámbito del arte renacentista, ¿qué gran obra maestra fue pintada por Leonardo da Vinci entre los años 1503 y 1506 (aunque siguió retocándola posteriormente)?",
            "options": [
                "La Capilla Sixtina.",
                "El nacimiento de Venus.",
                "La Gioconda (o Mona Lisa).",
                "Las meninas."
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque La Gioconda (o Mona Lisa)."
        },
        {
            "id": 15,
            "subject": "Historia",
            "question": "¿Qué hito astronómico del año 1543 marcó el inicio de la Revolución Científica al proponer la teoría heliocéntrica en el libro de Nicolás Copérnico?",
            "options": [
                "El descubrimiento de la gravedad por Isaac Newton.",
                "La publicación de la teoría de que el Sol es el centro del sistema y la Tierra gira a su alrededor.",
                "La primera llegada del ser humano al planeta Marte.",
                "El descubrimiento de la redondez de la Tierra por Colón en 1492."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque La publicación de la teoría de que el Sol es el centro del sistema y la Tierra gira a su alrededor."
        },
        {
            "id": 16,
            "subject": "Historia",
            "question": "¿Qué astrónomo italiano, en el año 1609, perfeccionó el telescopio permitiéndole observar las lunas de Júpiter y apoyar la teoría heliocéntrica?",
            "options": [
                "Galileo Galilei.",
                "Johannes Kepler.",
                "René Descartes.",
                "Albert Einstein."
            ],
            "correct": 0,
            "explanation": "La respuesta correcta es la a) porque Galileo Galilei."
        },
        {
            "id": 17,
            "subject": "Historia",
            "question": "Durante la era de los grandes descubrimientos geográficos (siglos XV y XVI), ¿qué instrumento técnico adaptado por los europeos facilitaba la orientación y la navegación marítima?",
            "options": [
                "La calculadora de engranajes.",
                "El telescopio reflector.",
                "La brújula.",
                "La imprenta de tipos móviles."
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque La brújula."
        },
        {
            "id": 18,
            "subject": "Historia",
            "question": "¿Qué célebre pintor y escultor renacentista esculpió la icónica estatua de mármol de \"David\" entre los años 1501 y 1504?",
            "options": [
                "Donatello.",
                "Miguel Ángel Buonarroti.",
                "Rafael Sanzio.",
                "Leonardo da Vinci."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Miguel Ángel Buonarroti."
        },
        {
            "id": 19,
            "subject": "Historia",
            "question": "¿En qué año llegó Cristóbal Colón a tierras americanas, un hito que impulsó enormes avances de cartografía y navegación técnica en Europa?",
            "options": [
                "En 1453.",
                "En 1492.",
                "En 1517.",
                "En 1588."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque En 1492."
        },
        {
            "id": 20,
            "subject": "Historia",
            "question": "El método científico experimental moderno, fundamentado en la observación y experimentación sistemática, comenzó a consolidarse principalmente a partir de la publicación de obras de Francis Bacon y René Descartes a principios del siglo:",
            "options": [
                "Siglo XII.",
                "Siglo XVII (años 1600 en adelante).",
                "Siglo XX.",
                "Siglo VIII."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Siglo XVII (años 1600 en adelante)."
        },
        {
            "id": 21,
            "subject": "Razonamiento Verbal",
            "question": "Selección lógica: Identifique el elemento indispensable para el concepto **LIBRO**.",
            "options": [
                "Imágenes",
                "Capítulos",
                "Páginas",
                "Prólogo"
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Páginas"
        },
        {
            "id": 22,
            "subject": "Razonamiento Verbal",
            "question": "Selección lógica: Indique el componente esencial e indispensable para la existencia de un **BOSQUE**.",
            "options": [
                "Animales",
                "Senderos",
                "Árboles",
                "Guardabosques"
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Árboles"
        },
        {
            "id": 23,
            "subject": "Razonamiento Verbal",
            "question": "Selección lógica: Determine cuál de los siguientes elementos es biológica y constitutivamente indispensable para que exista la **FOTOSÍNTESIS**.",
            "options": [
                "Tierra fértil",
                "Oxígeno",
                "Luz solar",
                "Insectos"
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Luz solar"
        },
        {
            "id": 24,
            "subject": "Razonamiento Verbal",
            "question": "Selección lógica: Señale el elemento que resulta indispensable para que se produzca una **CONVERSACIÓN**.",
            "options": [
                "Teléfono",
                "Interlocutores",
                "Computadora",
                "Grabadora"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Interlocutores"
        },
        {
            "id": 25,
            "subject": "Razonamiento Verbal",
            "question": "Selección lógica: Seleccione la condición indispensable para que un hecho sea considerado **HISTORIA**.",
            "options": [
                "Fotografías",
                "Personajes célebres",
                "Tiempo transcurrido (pasado)",
                "Libros impresos"
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Tiempo transcurrido (pasado)"
        },
        {
            "id": 26,
            "subject": "Razonamiento Verbal",
            "question": "Término excluido: Identifique el término que no pertenece al campo semántico de **NOBLEZA**.",
            "options": [
                "Altruismo",
                "Generosidad",
                "Egoísmo",
                "Magnanimidad"
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Egoísmo"
        },
        {
            "id": 27,
            "subject": "Razonamiento Verbal",
            "question": "Término excluido: Señale la palabra que se aparta del grupo de **INSTRUMENTOS MUSICALES DE CUERDA**.",
            "options": [
                "Guitarra",
                "Violín",
                "Flauta",
                "Arpa"
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Flauta"
        },
        {
            "id": 28,
            "subject": "Razonamiento Verbal",
            "question": "Término excluido: Encuentre el término excluido para el concepto **RENACIMIENTO**.",
            "options": [
                "Humanismo",
                "Antropocentrismo",
                "Feudalismo",
                "Ciencia"
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Feudalismo"
        },
        {
            "id": 29,
            "subject": "Razonamiento Verbal",
            "question": "Término excluido: Identifique el elemento que no comparte la relación semántica con los demás en el grupo de **VÍAS DE TRANSPORTE**.",
            "options": [
                "Autopista",
                "Carretera",
                "Sendero",
                "Semáforo"
            ],
            "correct": 3,
            "explanation": "La respuesta correcta es la d) porque Semáforo"
        },
        {
            "id": 30,
            "subject": "Razonamiento Verbal",
            "question": "Término excluido: Señale la palabra que no pertenece a la misma categoría de **ESTRUCTURAS DE UN TEXTO ESCRITO**.",
            "options": [
                "Introducción",
                "Conclusión",
                "Desarrollo",
                "Impresión"
            ],
            "correct": 3,
            "explanation": "La respuesta correcta es la d) porque Impresión"
        },
        {
            "id": 31,
            "subject": "Razonamiento Numérico",
            "question": "Proporcionalidad compuesta: Si 6 tejedores fabrican 30 suéteres en 10 días, ¿cuántos días tardarán 3 tejedores en fabricar 15 suéteres?",
            "options": [
                "5 días",
                "10 días",
                "15 días",
                "20 días"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, planteamos la relación de proporcionalidad compuesta: a menos tejedores, más días (inversa), y a menos suéteres, menos días (directa). Al operar (10 * 6/3 * 15/30) obtenemos 10 días"
        },
        {
            "id": 32,
            "subject": "Razonamiento Numérico",
            "question": "Proporcionalidad compuesta: Si 8 grifos tardan 12 horas en llenar 4 depósitos de agua, ¿cuántas horas tardarán 4 grifos iguales en llenar 2 depósitos?",
            "options": [
                "6 horas",
                "12 horas",
                "18 horas",
                "24 horas"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, analizamos que a menos grifos, más horas (inversa), y a menos depósitos, menos horas (directa). Al calcular (12 * 8/4 * 2/4) resulta en 12 horas"
        },
        {
            "id": 33,
            "subject": "Razonamiento Numérico",
            "question": "Proporcionalidad compuesta: Si 5 obreros trabajando 6 horas diarias construyen una zanja de 100 metros en 4 días, ¿cuántos días tardarán 10 obreros trabajando 3 horas diarias en hacer la misma zanja de 100 metros?",
            "options": [
                "2 días",
                "4 días",
                "6 días",
                "8 días"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, como la zanja es del mismo tamaño, vemos que a más obreros, menos días (inversa), y a menos horas diarias, más días (inversa). Operando (4 * 5/10 * 6/3) obtenemos 4 días"
        },
        {
            "id": 34,
            "subject": "Razonamiento Numérico",
            "question": "Proporcionalidad compuesta: En una fábrica, 4 máquinas envasan 2000 botellas trabajando durante 5 horas. ¿Cuántas botellas envasarán 6 máquinas similares trabajando durante 10 horas?",
            "options": [
                "4000 botellas",
                "6000 botellas",
                "8000 botellas",
                "3000 botellas"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, planteamos la proporcionalidad directa en ambas magnitudes: a más máquinas, más botellas, y a más horas, más botellas. Multiplicamos (2000 * 6/4 * 10/5) y obtenemos 6000 botellas"
        },
        {
            "id": 35,
            "subject": "Razonamiento Numérico",
            "question": "Proporcionalidad compuesta: Si 3 camiones transportan 120 toneladas de mercadería en 4 viajes, ¿cuántos viajes necesitarán 2 camiones de igual capacidad para transportar 80 toneladas?",
            "options": [
                "3 viajes",
                "4 viajes",
                "5 viajes",
                "6 viajes"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, a menos camiones, más viajes (inversa), y a menos toneladas, menos viajes (directa). Calculando (4 * 3/2 * 80/120) nos da 4 viajes"
        },
        {
            "id": 36,
            "subject": "Razonamiento Numérico",
            "question": "Secuencias lógicas: Determine qué número continúa en la siguiente serie numérica: **3, 6, 12, 24, 48, ...**",
            "options": [
                "60",
                "96",
                "72",
                "80"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, observamos la secuencia: cada número se multiplica por 2 (3*2=6, 6*2=12, 12*2=24, 24*2=48). El siguiente número es 48*2 = 96"
        },
        {
            "id": 37,
            "subject": "Razonamiento Numérico",
            "question": "Secuencias lógicas: ¿Cuál es el valor que completa la secuencia: **5, 8, 12, 17, 23, ...**",
            "options": [
                "28",
                "30",
                "32",
                "35"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, calculamos el incremento entre términos: +3, +4, +5, +6. El siguiente término sumará +7 a 23, dando como resultado 30"
        },
        {
            "id": 38,
            "subject": "Razonamiento Numérico",
            "question": "Secuencias lógicas: Encuentre el término que continúa la serie de letras: **A, C, F, J, Ñ, ...**",
            "options": [
                "P",
                "U",
                "T",
                "S"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, analizamos la distancia entre letras en el alfabeto: A (+1) C (+2) F (+3) J (+4) Ñ (+5) U. Se salta un número creciente de letras cada vez, dando la letra U"
        },
        {
            "id": 39,
            "subject": "Razonamiento Numérico",
            "question": "Secuencias lógicas: ¿Qué número continúa la secuencia alternada: **2, 10, 4, 8, 6, 6, ...**",
            "options": [
                "4",
                "8",
                "6",
                "10"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, identificamos las dos secuencias alternadas: los impares aumentan de 2 en 2 (2, 4, 6, 8...) y los pares disminuyen de 2 en 2 (10, 8, 6, 4...). El siguiente término es el séptimo de la serie, es decir, 6 + 2 = 8"
        },
        {
            "id": 40,
            "subject": "Razonamiento Numérico",
            "question": "Secuencias lógicas: Indique el número que sigue en la serie: **1, 4, 9, 16, 25, ...**",
            "options": [
                "30",
                "36",
                "49",
                "40"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, reconocemos que la secuencia corresponde a los cuadrados perfectos de los números naturales: 1^2=1, 2^2=4, 3^2=9, 4^2=16, 5^2=25. El siguiente término es 6^2 = 36"
        }
    ],
    "Miércoles": [
        {
            "id": 1,
            "subject": "Lengua y Literatura",
            "question": "¿Qué recurso del cómic se utiliza para representar de forma gráfica los sonidos de la realidad (como un golpe o una explosión)?",
            "options": [
                "Globos de diálogo.",
                "Onomatopeyas.",
                "Cartelas o cartuchos.",
                "Viñetas."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Onomatopeyas."
        },
        {
            "id": 2,
            "subject": "Lengua y Literatura",
            "question": "En el cómic, el espacio delimitado por líneas donde se dibuja cada escena y se organiza el tiempo de la narración se denomina:",
            "options": [
                "Tipografía.",
                "Viñeta.",
                "Bocadillo.",
                "Código icónico."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Viñeta."
        },
        {
            "id": 3,
            "subject": "Lengua y Literatura",
            "question": "Los textos escritos dentro de una viñeta que expresan la voz del narrador (y no la de los personajes) suelen colocarse en:",
            "options": [
                "Globos de diálogo.",
                "Cartelas o cartuchos (generalmente rectangulares en la parte superior).",
                "Globos de pensamiento en forma de nube.",
                "El margen de la página."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Cartelas o cartuchos (generalmente rectangulares en la parte superior)."
        },
        {
            "id": 4,
            "subject": "Lengua y Literatura",
            "question": "La parte externa de un libro que une las tapas anterior y posterior, y donde suele imprimirse el título de la obra y el autor, se llama:",
            "options": [
                "Portada.",
                "Lomo.",
                "Prólogo.",
                "Glosario."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Lomo."
        },
        {
            "id": 5,
            "subject": "Lengua y Literatura",
            "question": "¿Qué parte del libro contiene una introducción o comentario previo escrito por el propio autor o por un experto para presentar la obra al lector?",
            "options": [
                "El índice.",
                "El prólogo.",
                "La bibliografía.",
                "El colofón."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El prólogo."
        },
        {
            "id": 6,
            "subject": "Lengua y Literatura",
            "question": "Para que un texto sea comprensible y cumpla su función comunicativa en una situación concreta, debe ajustarse al receptor, al canal y al registro de habla. Esta propiedad se conoce como:",
            "options": [
                "Cohesión.",
                "Adecuación.",
                "Coherencia.",
                "Ambigüedad."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Adecuación."
        },
        {
            "id": 7,
            "subject": "Lengua y Literatura",
            "question": "La propiedad textual que garantiza la conexión lógica, la unidad temática y la progresión clara de las ideas a lo largo del texto es:",
            "options": [
                "Cohesión.",
                "Coherencia.",
                "Adecuación.",
                "Polisemia."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Coherencia."
        },
        {
            "id": 8,
            "subject": "Lengua y Literatura",
            "question": "La propiedad textual de la \"cohesión\" se logra principalmente mediante el uso correcto de:",
            "options": [
                "Reglas matemáticas de lógica formal.",
                "Conectores textuales, pronombres, sinónimos y signos de puntuación que enlazan las oraciones.",
                "Dibujos, viñetas y onomatopeyas explicativas.",
                "Eslóganes de tipo publicitario y marcas."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Conectores textuales, pronombres, sinónimos y signos de puntuación que enlazan las oraciones."
        },
        {
            "id": 9,
            "subject": "Lengua y Literatura",
            "question": "¿Cuál de los siguientes enunciados carece de **coherencia** textual?",
            "options": [
                "El libro estaba interesante, así que lo leí completo en una sola tarde.",
                "Tenía un calor insoportable, por lo tanto me puse el abrigo más grueso que encontré.",
                "El cómic utiliza viñetas para ordenar cronológicamente las escenas de la historia.",
                "La adecuada búsqueda de información académica exige recurrir a fuentes confiables."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Tenía un calor insoportable, por lo tanto me puse el abrigo más grueso que encontré."
        },
        {
            "id": 10,
            "subject": "Lengua y Literatura",
            "question": "¿Cuál es el soporte digital del libro que ha cobrado gran popularidad en el siglo XXI, permitiendo almacenar miles de obras en un solo dispositivo?",
            "options": [
                "El libro de pergamino.",
                "El libro electrónico (e-book).",
                "La cartela periodística.",
                "El cómic de tipo fanzine."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El libro electrónico (e-book)."
        },
        {
            "id": 11,
            "subject": "Historia",
            "question": "¿En qué año estalló formalmente la Revolución francesa con la autoproclamación del Tercer Estado como Asamblea Nacional y la toma de la Bastilla?",
            "options": [
                "En 1776.",
                "En 1789.",
                "En 1815.",
                "En 1793."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque En 1789."
        },
        {
            "id": 12,
            "subject": "Historia",
            "question": "¿Cuál era la principal causa de carácter social que alimentaba el descontento popular antes de la Revolución francesa?",
            "options": [
                "El derecho a voto universal de todos los ciudadanos.",
                "La división desigual de la sociedad en tres estamentos, donde los dos privilegiados (nobleza y clero) no pagaban impuestos directos.",
                "La excesiva libertad de prensa otorgada por la corona.",
                "La abundancia económica de los campesinos frente a los nobles."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque La división desigual de la sociedad en tres estamentos, donde los dos privilegiados (nobleza y clero) no pagaban impuestos directos."
        },
        {
            "id": 13,
            "subject": "Historia",
            "question": "¿Qué movimiento intelectual y cultural del siglo XVIII sentó las bases ideológicas de la Revolución francesa defendiendo la razón, la igualdad y la división de poderes?",
            "options": [
                "El Renacimiento.",
                "La Ilustración.",
                "El Feudalismo.",
                "El Romanticismo."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque La Ilustración."
        },
        {
            "id": 14,
            "subject": "Historia",
            "question": "En la sociedad estamental del Antiguo Régimen en Francia, el llamado \"Tercer Estado\" o Estado Llano representaba aproximadamente a qué porcentaje de la población total:",
            "options": [
                "Menos del 10%.",
                "Alrededor del 97%.",
                "Exactamente el 50%.",
                "Menos del 5%."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Alrededor del 97%."
        },
        {
            "id": 15,
            "subject": "Historia",
            "question": "¿Qué rey gobernaba Francia bajo un régimen de monarquía absoluta cuando estalló la Revolución en 1789?",
            "options": [
                "Luis XIV.",
                "Luis XVI.",
                "Napoleón Bonaparte.",
                "Carlos V."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Luis XVI."
        },
        {
            "id": 16,
            "subject": "Historia",
            "question": "Durante el proceso revolucionario, ¿en qué fecha histórica se aprobó la Declaración de los Derechos del Hombre y del Ciudadano por parte de la Asamblea Constituyente?",
            "options": [
                "El 14 de julio de 1789.",
                "El 26 de agosto de 1789.",
                "El 21 de enero de 1793.",
                "El 9 de noviembre de 1799."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El 26 de agosto de 1789."
        },
        {
            "id": 17,
            "subject": "Historia",
            "question": "¿Qué símbolo de la opresión monárquica fue tomado por el pueblo de París el 14 de julio de 1789, marcando el inicio popular de la Revolución?",
            "options": [
                "El Palacio de Versalles.",
                "La fortaleza de la Bastilla.",
                "El Arco del Triunfo.",
                "La Catedral de Notre Dame."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque La fortaleza de la Bastilla."
        },
        {
            "id": 18,
            "subject": "Historia",
            "question": "En el año 1793, durante la fase más radical de la Revolución (el Terror), ¿qué trágico destino sufrieron el rey Luis XVI y su esposa María Antonieta?",
            "options": [
                "Fueron desterrados de por vida a Inglaterra.",
                "Fueron ejecutados en la guillotina.",
                "Se les restituyó como monarcas con plenos poderes.",
                "Huyeron con éxito a Austria."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Fueron ejecutados en la guillotina."
        },
        {
            "id": 19,
            "subject": "Historia",
            "question": "¿Qué líder jacobino encabezó el Comité de Salvación Pública durante el período más radical y sangriento de la Revolución conocido como \"El Terror\" (1793-1794)?",
            "options": [
                "Jean-Paul Marat.",
                "Maximilien Robespierre.",
                "Georges Danton.",
                "Napoleón Bonaparte."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Maximilien Robespierre."
        },
        {
            "id": 20,
            "subject": "Historia",
            "question": "¿Qué acontecimiento militar e histórico del 9 de noviembre de 1799 (18 de brumario) puso fin al Directorio y al proceso revolucionario francés, abriendo paso a la era napoleónica?",
            "options": [
                "La batalla de Waterloo.",
                "El golpe de Estado de Napoleón Bonaparte.",
                "La coronación de Luis XVIII.",
                "La firma del Tratado de Versalles."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El golpe de Estado de Napoleón Bonaparte."
        },
        {
            "id": 21,
            "subject": "Razonamiento Verbal",
            "question": "Ordenar oraciones: Ordene los siguientes enunciados para formar un texto coherente. I. Sin embargo, su consolidación definitiva se dio con la invención de la imprenta en el siglo XV. II. El libro ha sido el soporte más importante para conservar y transmitir la cultura humana. III. En la antigüedad, los primeros libros se escribían a mano sobre papiro o pergamino.",
            "options": [
                "II - I - III",
                "II - III - I",
                "III - II - I",
                "I - III - II"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque II - III - I"
        },
        {
            "id": 22,
            "subject": "Razonamiento Verbal",
            "question": "Ordenar oraciones: Ordene las frases de forma lógica. I. Por último, redacta el nuevo texto con objetividad. II. Para hacer un buen resumen, primero lee con atención el documento original. III. A continuación, subraya las ideas principales descartando los detalles secundarios.",
            "options": [
                "II - I - III",
                "II - III - I",
                "I - III - II",
                "III - II - I"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque II - III - I"
        },
        {
            "id": 23,
            "subject": "Razonamiento Verbal",
            "question": "Ordenar oraciones: Ordene cronológica y lógicamente. I. En el siglo XV, el Renacimiento revolucionó las artes y las ciencias. II. La Edad Media estuvo dominada por una visión teocéntrica del mundo. III. Finalmente, la Revolución francesa de 1789 dio inicio a la época contemporánea.",
            "options": [
                "I - II - III",
                "II - I - III",
                "II - III - I",
                "III - I - II"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque II - I - III"
        },
        {
            "id": 24,
            "subject": "Razonamiento Verbal",
            "question": "Ordenar oraciones: Reorganice lógicamente. I. De este modo, el lector comprende la trama sin dificultad. II. El cómic narra historias mediante una secuencia ordenada de viñetas. III. En ellas se combinan ilustraciones y globos de texto para dar sentido a la acción.",
            "options": [
                "II - I - III",
                "II - III - I",
                "I - III - II",
                "III - II - I"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque II - III - I"
        },
        {
            "id": 25,
            "subject": "Razonamiento Verbal",
            "question": "Ordenar oraciones: Reorganice. I. Este descontento desembocó en el estallido revolucionario de 1789. II. La Francia del Antiguo Régimen sufría una grave crisis económica. III. Además, el Tercer Estado soportaba una carga fiscal sumamente injusta.",
            "options": [
                "II - I - III",
                "II - III - I",
                "III - II - I",
                "I - III - II"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque II - III - I"
        },
        {
            "id": 26,
            "subject": "Razonamiento Verbal",
            "question": "Comprensión lectora: Lea el texto y responda. *Texto:* \"La Revolución francesa no solo transformó las estructuras de poder en Francia, sino que propagó por toda Europa las ideas de soberanía popular y libertad civil, desafiando el derecho divino de los reyes.\" ¿Cuál es la idea principal del texto?",
            "options": [
                "Francia era el único país que tenía reyes absolutistas en el siglo XVIII.",
                "El impacto de la Revolución francesa trascendió sus fronteras difundiendo ideales de soberanía popular.",
                "La religión cristiana perdió todo el poder en Europa después del año 1789.",
                "Los reyes europeos apoyaron con agrado las reformas civiles francesas."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El impacto de la Revolución francesa trascendió sus fronteras difundiendo ideales de soberanía popular."
        },
        {
            "id": 27,
            "subject": "Razonamiento Verbal",
            "question": "Comprensión lectora: Del texto anterior, se puede **inferir** que:",
            "options": [
                "Antes de la Revolución francesa, el absolutismo justificaba su poder en motivos religiosos (derecho divino).",
                "Europa occidental ya era democrática antes del estallido de 1789.",
                "La soberanía popular era un concepto ampliamente practicado por los reyes.",
                "Francia cerró sus fronteras para evitar que sus ideales se conocieran fuera del país."
            ],
            "correct": 0,
            "explanation": "La respuesta correcta es la a) porque Antes de la Revolución francesa, el absolutismo justificaba su poder en motivos religiosos (derecho divino)."
        },
        {
            "id": 28,
            "subject": "Razonamiento Verbal",
            "question": "Comprensión lectora: Lea el texto y responda. *Texto:* \"El cómic combina de manera inseparable dos lenguajes: el icónico (las imágenes) y el verbal (los textos). Aunque a veces se le ha considerado erróneamente un género puramente infantil, su riqueza narrativa y capacidad de crítica social demuestran su valor como arte contemporáneo.\" Según el texto, el cómic:",
            "options": [
                "Debe ser leído exclusivamente por niños pequeños para su entretenimiento.",
                "Combina de forma indisociable las imágenes con las palabras y posee valor artístico y crítico.",
                "Tiene menos valor que la literatura tradicional porque carece de lomo e índice.",
                "Utiliza la imprenta de tipos móviles creada en 1440 para su distribución exclusiva."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Combina de forma indisociable las imágenes con las palabras y posee valor artístico y crítico."
        },
        {
            "id": 29,
            "subject": "Razonamiento Verbal",
            "question": "Comprensión lectora: Del texto del cómic anterior, ¿qué error de juicio social se menciona sobre este medio?",
            "options": [
                "Pensar que las onomatopeyas no se deben escribir en los globos de diálogo.",
                "Catalogarlo únicamente como un entretenimiento de tipo infantil.",
                "Creer que los dibujos no aportan nada a la trama de las viñetas.",
                "Afirmar que es un invento derivado directamente de la Revolución francesa."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Catalogarlo únicamente como un entretenimiento de tipo infantil."
        },
        {
            "id": 30,
            "subject": "Razonamiento Verbal",
            "question": "Comprensión lectora: Lea el texto y responda. *Texto:* \"La adecuación es la propiedad que ajusta el texto a su contexto de emisión. Un científico que use tecnicismos frente a niños pequeños fracasa en la adecuación, pues el mensaje no se adapta al receptor.\" ¿Qué elemento es central para cumplir con la adecuación según el ejemplo presentado?",
            "options": [
                "La longitud del texto.",
                "Adaptar el vocabulario y registro al tipo de receptor que escucha.",
                "Imprimir el texto con una tipografía atractiva.",
                "Organizar el texto en al menos diez párrafos con sangría."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Adaptar el vocabulario y registro al tipo de receptor que escucha."
        },
        {
            "id": 31,
            "subject": "Razonamiento Numérico",
            "question": "Ecuaciones lineales: Si al doble de un número le sumamos 15, obtenemos 35. ¿Cuál es dicho número?",
            "options": [
                "5",
                "10",
                "15",
                "20"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, planteamos la ecuación 2x + 15 = 35. Restamos 15 en ambos lados para obtener 2x = 20, y al dividir entre 2, concluimos que x = 10"
        },
        {
            "id": 32,
            "subject": "Razonamiento Numérico",
            "question": "Ecuaciones lineales: El triple de la edad de Juan aumentado en 8 años es igual a 38 años. ¿Qué edad tiene Juan?",
            "options": [
                "8 años",
                "10 años",
                "12 años",
                "15 años"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, planteamos la ecuación 3x + 8 = 38. Despejamos restando 8, resultando en 3x = 30, y luego dividiendo entre 3, el resultado es 10"
        },
        {
            "id": 33,
            "subject": "Razonamiento Numérico",
            "question": "Ecuaciones lineales: Ana tiene el doble de dinero que Carlos. Si entre los dos suman $45, ¿cuánto dinero tiene Carlos?",
            "options": [
                "$10",
                "$15",
                "$20",
                "$30"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, si Carlos tiene x, Ana tiene 2x. Planteamos x + 2x = 45, lo que da 3x = 45, y dividiendo por 3, Carlos tiene $15"
        },
        {
            "id": 34,
            "subject": "Razonamiento Numérico",
            "question": "Ecuaciones lineales: La suma de tres números enteros consecutivos es igual a 24. ¿Cuál es el número intermedio de la serie?",
            "options": [
                "7",
                "8",
                "9",
                "10"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, sean los tres números x-1, x, y x+1. Sumándolos: 3x = 24. Dividimos entre 3 para hallar el número del medio, que es 8"
        },
        {
            "id": 35,
            "subject": "Razonamiento Numérico",
            "question": "Ecuaciones lineales: Si compro 4 cuadernos del mismo precio y pago con un billete de $20, recibiendo $4 de vuelto, ¿cuál es el precio de cada cuaderno?",
            "options": [
                "$3",
                "$4",
                "$5",
                "$2"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, si los cuadernos costaron 20 - 4 = $16, planteamos 4x = 16. Dividiendo 16 entre 4 cuadernos, el precio de cada uno es $4"
        },
        {
            "id": 36,
            "subject": "Razonamiento Numérico",
            "question": "Porcentajes: Un abrigo que originalmente costaba $80 tiene un descuento de fin de temporada del 25%. ¿Cuánto se ahorrará el comprador?",
            "options": [
                "$15",
                "$20",
                "$25",
                "$60"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, multiplicamos el valor original del abrigo por el porcentaje en decimal: 80 * 0.25, lo que equivale a ahorrar una cuarta parte, es decir, $20"
        },
        {
            "id": 37,
            "subject": "Razonamiento Numérico",
            "question": "Porcentajes: Si una camisa de $40 tiene un descuento del 15%, ¿cuánto pagará el cliente en total tras aplicarse la rebaja?",
            "options": [
                "$6",
                "$34",
                "$30",
                "$36"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, calculamos el 15% de 40: 40 * 0.15 = $6 de descuento. Al restar del precio original de la camisa, el cliente pagará $34"
        },
        {
            "id": 38,
            "subject": "Razonamiento Numérico",
            "question": "Porcentajes: En una tienda de tecnología, un televisor cuesta $500 sin impuestos. Si se le debe agregar un 12% de IVA, ¿cuál será el precio final de venta?",
            "options": [
                "$512",
                "$560",
                "$600",
                "$550"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, calculamos el 12% de 500: 500 * 0.12 = $60 de IVA. Sumando el valor sin impuestos, el precio total es $560"
        },
        {
            "id": 39,
            "subject": "Razonamiento Numérico",
            "question": "Porcentajes: En una clase de 40 estudiantes, el 60% son mujeres. ¿Cuántos hombres hay en dicha clase?",
            "options": [
                "24 hombres",
                "16 hombres",
                "20 hombres",
                "12 hombres"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, si el 60% son mujeres, el 40% restante son hombres. Calculamos el 40% de 40: 40 * 0.40 = 16 hombres en la clase"
        },
        {
            "id": 40,
            "subject": "Razonamiento Numérico",
            "question": "Porcentajes: Si el 20% de un número es igual a 8, ¿cuál es el valor del número completo (100%)?",
            "options": [
                "16",
                "40",
                "32",
                "80"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, planteamos que 0.20 * x = 8. Despejamos dividiendo 8 entre 0.20, lo cual nos da como resultado final que el número completo es 40"
        }
    ],
    "Jueves": [
        {
            "id": 1,
            "subject": "Lengua y Literatura",
            "question": "¿Qué organizador gráfico es ideal para representar de manera jerárquica conceptos unidos por palabras de enlace para formar proposiciones?",
            "options": [
                "Línea de tiempo.",
                "Mapa conceptual.",
                "Diagrama de flujo.",
                "Cuadro sinóptico."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Mapa conceptual."
        },
        {
            "id": 2,
            "subject": "Lengua y Literatura",
            "question": "Si deseamos mostrar visualmente la secuencia cronológica y sucesión temporal de hechos históricos, el organizador gráfico más adecuado es:",
            "options": [
                "Un mapa mental.",
                "Una línea de tiempo.",
                "Un diagrama de Venn.",
                "Un mapa conceptual."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Una línea de tiempo."
        },
        {
            "id": 3,
            "subject": "Lengua y Literatura",
            "question": "En la técnica del subrayado, ¿qué tipo de información se debe destacar principalmente?",
            "options": [
                "Todos los adjetivos y conectores textuales de relleno.",
                "Las ideas principales, conceptos clave y datos fundamentales del texto.",
                "Las opiniones subjetivas que el lector tenga sobre la obra.",
                "Únicamente las palabras que tengan más de cinco sílabas."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Las ideas principales, conceptos clave y datos fundamentales del texto."
        },
        {
            "id": 4,
            "subject": "Lengua y Literatura",
            "question": "¿Cuál es la principal ventaja de realizar un correcto subrayado durante la lectura activa de un texto?",
            "options": [
                "Que el libro se verá más colorido y decorado.",
                "Facilita la retención y ahorra tiempo en los posteriores repasos y síntesis de la información.",
                "Convierte automáticamente el texto en una crónica de opinión.",
                "Reemplaza por completo la necesidad de leer el libro por primera vez."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Facilita la retención y ahorra tiempo en los posteriores repasos y síntesis de la información."
        },
        {
            "id": 5,
            "subject": "Lengua y Literatura",
            "question": "¿Qué género periodístico se caracteriza por expresar la opinión formal, institucional y colectiva de un diario o medio de comunicación sobre un hecho relevante?",
            "options": [
                "La crónica literaria.",
                "El editorial.",
                "La noticia de sucesos.",
                "El reportaje gráfico."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El editorial."
        },
        {
            "id": 6,
            "subject": "Lengua y Literatura",
            "question": "El \"editorial\" de un periódico tradicionalmente posee la característica de ser:",
            "options": [
                "Firmado con el seudónimo del cronista del día.",
                "Un texto no firmado (o anónimo) que representa la voz del medio en su conjunto.",
                "Escrito en forma de verso con rimas asonantes.",
                "Exclusivamente publicitario para vender un producto de la marca."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Un texto no firmado (o anónimo) que representa la voz del medio en su conjunto."
        },
        {
            "id": 7,
            "subject": "Lengua y Literatura",
            "question": "Un \"comentario periodístico\" se diferencia del editorial principalmente en que:",
            "options": [
                "El comentario es ficticio y el editorial es completamente real.",
                "El comentario expresa la opinión y juicio personal de un autor individual firmado, mientras que el editorial es la postura de la institución.",
                "El comentario solo se transmite por radio y el editorial en papel.",
                "El comentario carece de adecuación gramatical y coherencia."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El comentario expresa la opinión y juicio personal de un autor individual firmado, mientras que el editorial es la postura de la institución."
        },
        {
            "id": 8,
            "subject": "Lengua y Literatura",
            "question": "¿Qué organizador gráfico utiliza llaves ({) para agrupar y clasificar la información de lo general a lo particular?",
            "options": [
                "Diagrama de flujo.",
                "Cuadro sinóptico.",
                "Mapa mental.",
                "Línea de tiempo."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Cuadro sinóptico."
        },
        {
            "id": 9,
            "subject": "Lengua y Literatura",
            "question": "Al subrayar, se recomienda evitar:",
            "options": [
                "Subrayar con colores contrastantes.",
                "Destacar textos completos o párrafos enteros de forma indiscriminada sin analizar qué es lo principal.",
                "Anotar comentarios cortos al margen del texto.",
                "Leer el texto antes de proceder a marcar los conceptos."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Destacar textos completos o párrafos enteros de forma indiscriminada sin analizar qué es lo principal."
        },
        {
            "id": 10,
            "subject": "Lengua y Literatura",
            "question": "¿Cuál de los siguientes textos es un ejemplo de texto periodístico de opinión de carácter personal?",
            "options": [
                "Una noticia objetiva sobre un accidente vial.",
                "Un comentario firmado que analiza la nueva ley de educación.",
                "Un manual de instrucciones para instalar un electrodoméstico.",
                "El prólogo de una novela de misterio."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Un comentario firmado que analiza la nueva ley de educación."
        },
        {
            "id": 11,
            "subject": "Historia",
            "question": "¿En qué año fue derrotado definitivamente Napoleón Bonaparte en la batalla de Waterloo, poniendo fin a la era napoleónica en Europa?",
            "options": [
                "En 1789.",
                "En 1815.",
                "En 1804.",
                "En 1848."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque En 1815."
        },
        {
            "id": 12,
            "subject": "Historia",
            "question": "¿Cuál de las siguientes es una consecuencia directa de la Revolución francesa que transformó la estructura política europea?",
            "options": [
                "La expansión del sistema feudal y de los privilegios señoriales.",
                "La abolición de la monarquía absoluta y la proclamación de los derechos humanos y la soberanía popular.",
                "La prohibición de los sistemas de escritura moderna.",
                "El fortalecimiento definitivo de la Iglesia católica como poder supremo del Estado."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque La abolición de la monarquía absoluta y la proclamación de los derechos humanos y la soberanía popular."
        },
        {
            "id": 13,
            "subject": "Historia",
            "question": "¿En qué año se autoproclamó Napoleón Bonaparte como \"Emperador de los franceses\", consolidando su poder en Francia e iniciando el Imperio napoleónico?",
            "options": [
                "En 1799.",
                "En 1804.",
                "En 1812.",
                "En 1815."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque En 1804."
        },
        {
            "id": 14,
            "subject": "Historia",
            "question": "¿Qué código legal, promulgado en 1804 por Napoleón, unificó las leyes e impuso la igualdad civil, la libertad de cultos y el fin de los privilegios feudales?",
            "options": [
                "El Código de Hammurabi.",
                "El Código Napoleónico (o Código Civil de los franceses).",
                "Las Doce Tablas de Roma.",
                "La Carta Magna británica."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El Código Napoleónico (o Código Civil de los franceses)."
        },
        {
            "id": 15,
            "subject": "Historia",
            "question": "Se considera que la Revolución francesa de 1789 es el acontecimiento que delimita el fin de la Edad Moderna y el comienzo de qué período histórico?",
            "options": [
                "Edad Media.",
                "Época Contemporánea.",
                "Edad de Piedra.",
                "Renacimiento."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Época Contemporánea."
        },
        {
            "id": 16,
            "subject": "Historia",
            "question": "¿Qué principio político, derivado de la Revolución francesa, sostiene que el poder reside en el pueblo y se ejerce a través de sus representantes electos?",
            "options": [
                "Absolutismo real.",
                "Soberanía nacional o popular.",
                "Teocracia estatal.",
                "Feudalismo terrateniente."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Soberanía nacional o popular."
        },
        {
            "id": 17,
            "subject": "Historia",
            "question": "A raíz de la Revolución francesa, se separaron de forma progresiva las funciones de dos instituciones fundamentales en la vida civil, que antes estaban unidas. Estas fueron:",
            "options": [
                "El Ejército y la Marina de guerra.",
                "El Estado y la Iglesia.",
                "La Nobleza y la Monarquía.",
                "El Comercio y la Agricultura."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El Estado y la Iglesia."
        },
        {
            "id": 18,
            "subject": "Historia",
            "question": "¿Qué trágico proceso bélico en el invierno del año 1812 significó el principio del fin para la supremacía militar de Napoleón Bonaparte, al perder gran parte de su Grande Armée?",
            "options": [
                "La invasión de España.",
                "La desastrosa campaña e invasión de Rusia.",
                "La batalla de Trafalgar.",
                "La invasión del continente americano."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque La desastrosa campaña e invasión de Rusia."
        },
        {
            "id": 19,
            "subject": "Historia",
            "question": "Tras la derrota definitiva de Napoleón en 1815, las potencias europeas vencedoras se reunieron con el objetivo de restaurar el absolutismo en el mapa político en el llamado:",
            "options": [
                "Tratado de Tordesillas.",
                "Congreso de Viena.",
                "Pacto de Varsovia.",
                "Tratado de Versalles."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Congreso de Viena."
        },
        {
            "id": 20,
            "subject": "Historia",
            "question": "¿Qué importante documento de carácter humanitario y civil fue redactado y aprobado en París en 1789, sirviendo como base universal para los derechos individuales modernos?",
            "options": [
                "La Constitución de los Estados Unidos.",
                "La Declaración de los Derechos del Hombre y del Ciudadano.",
                "El Manifiesto Comunista.",
                "El Edicto de Milán."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque La Declaración de los Derechos del Hombre y del Ciudadano."
        },
        {
            "id": 21,
            "subject": "Razonamiento Verbal",
            "question": "Concordancia verbal: Identifique la oración que presenta un uso **correcto** de la concordancia gramatical.",
            "options": [
                "La mayoría de los estudiantes aprobó el examen sin problemas.",
                "El grupo de profesores decidieron suspender la reunión del martes.",
                "Haban muchos libros antiguos sobre el Renacimiento en la biblioteca.",
                "La jauría de perros corrieron detrás del automóvil del vecino."
            ],
            "correct": 0,
            "explanation": "La respuesta correcta es la a) porque La mayoría de los estudiantes aprobó el examen sin problemas."
        },
        {
            "id": 22,
            "subject": "Razonamiento Verbal",
            "question": "Concordancia verbal: Señale la oración que presenta un error de concordancia.",
            "options": [
                "Cada uno de los participantes recibirá un diploma firmado por el moderador.",
                "La entrada y la salida de los alumnos deben realizarse por puertas separadas.",
                "El equipo de investigadores descubrieron una nueva fuente de información.",
                "Se venden libros usados a muy bajo precio."
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque El equipo de investigadores descubrieron una nueva fuente de información."
        },
        {
            "id": 23,
            "subject": "Razonamiento Verbal",
            "question": "Concordancia verbal: Complete la frase respetando las reglas de concordancia: \"La gente _______ alegremente en la fiesta mientras el grupo de músicos _______ sus mejores temas\".",
            "options": [
                "bailaban / tocaban",
                "bailaba / tocaba",
                "bailaban / tocaba",
                "bailaba / tocaban"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque bailaba / tocaba"
        },
        {
            "id": 24,
            "subject": "Razonamiento Verbal",
            "question": "Concordancia verbal: ¿Cuál de las siguientes construcciones gramaticales es la correcta?",
            "options": [
                "Hubieron muchos reclamos tras el discurso del editorialista.",
                "Hubo muchos reclamos tras el discurso del editorialista.",
                "Habían bastantes personas leyendo los cómics en la sala.",
                "Hacen varios meses que se fundó la biblioteca del pueblo."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Hubo muchos reclamos tras el discurso del editorialista."
        },
        {
            "id": 25,
            "subject": "Razonamiento Verbal",
            "question": "Concordancia verbal: Señale la oración correcta.",
            "options": [
                "Tú y yo haremos el mapa conceptual del capítulo.",
                "Tú y yo harán el mapa conceptual del capítulo.",
                "La mitad de los obreros terminaron la zanja a tiempo.",
                "El maestro junto a sus alumnos organizaron un debate interesante."
            ],
            "correct": 0,
            "explanation": "La respuesta correcta es la a) porque Tú y yo haremos el mapa conceptual del capítulo."
        },
        {
            "id": 26,
            "subject": "Razonamiento Verbal",
            "question": "Precisión Semántica: Seleccione la palabra adecuada para completar la oración de forma exacta: \"El científico logró _______ la veracidad de su hipótesis tras realizar múltiples experimentos de laboratorio\".",
            "options": [
                "opinar",
                "corroborar",
                "adivinar",
                "suponer"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque corroborar"
        },
        {
            "id": 27,
            "subject": "Razonamiento Verbal",
            "question": "Precisión Semántica: El historiador hizo un análisis muy _______ sobre las causas socioeconómicas que desencadenaron la Revolución francesa, sin omitir ningún detalle relevante.",
            "options": [
                "superfluo",
                "exhaustivo",
                "somero",
                "rápido"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque exhaustivo"
        },
        {
            "id": 28,
            "subject": "Razonamiento Verbal",
            "question": "Precisión Semántica: El editorialista debe expresarse con suma _______ para evitar malentendidos sobre la postura del diario.",
            "options": [
                "vaguedad",
                "claridad",
                "retórica",
                "prisa"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque claridad"
        },
        {
            "id": 29,
            "subject": "Razonamiento Verbal",
            "question": "Precisión Semántica: El uso discriminado e indiscriminado de información falsa en internet puede _______ la reputación de los investigadores.",
            "options": [
                "mejorar",
                "menoscabar",
                "promover",
                "olvidar"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque menoscabar"
        },
        {
            "id": 30,
            "subject": "Razonamiento Verbal",
            "question": "Precisión Semántica: El subrayado de ideas principales debe ser _______ para que sirva de apoyo real en los posteriores repasos del estudiante.",
            "options": [
                "selectivo",
                "aleatorio",
                "desordenado",
                "completo"
            ],
            "correct": 0,
            "explanation": "La respuesta correcta es la a) porque selectivo"
        },
        {
            "id": 31,
            "subject": "Razonamiento Numérico",
            "question": "Regla de tres simple: Si 6 grifos de agua tardan 10 horas en llenar un depósito de agua, ¿cuántas horas tardarán 12 grifos iguales en llenar el mismo depósito?",
            "options": [
                "20 horas",
                "5 horas",
                "15 horas",
                "8 horas"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, multiplicamos los grifos iniciales por las horas originales: 6 * 10 = 60. Luego, dividimos este resultado entre el número de nuevos grifos: 60 / 12 = 5 horas, ya que es inversa"
        },
        {
            "id": 32,
            "subject": "Razonamiento Numérico",
            "question": "Regla de tres simple: Un automóvil recorre 240 kilómetros en 3 horas a una velocidad constante. ¿Cuántos kilómetros recorrerá en 5 horas si mantiene la misma velocidad?",
            "options": [
                "300 kilómetros",
                "400 kilómetros",
                "480 kilómetros",
                "500 kilómetros"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, multiplicamos cruzado la distancia por las nuevas horas: 240 * 5 = 1200. Después, dividimos entre el tiempo inicial de 3 horas para obtener 400 kilómetros"
        },
        {
            "id": 33,
            "subject": "Razonamiento Numérico",
            "question": "Regla de tres simple: Para alimentar a 8 mascotas se necesitan 24 kg de alimento al mes. ¿Cuántos kilogramos de alimento se requerirán para alimentar a 12 mascotas de la misma especie durante un mes?",
            "options": [
                "30 kg",
                "36 kg",
                "40 kg",
                "48 kg"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, multiplicamos en cruz los kilogramos de alimento por el número nuevo de mascotas: 24 * 12 = 288. Al final dividimos entre las 8 mascotas iniciales, dándonos 36 kg"
        },
        {
            "id": 34,
            "subject": "Razonamiento Numérico",
            "question": "Regla de tres simple: Si 3 obreros construyen una cerca de madera en 12 horas, ¿cuántos obreros se necesitarán para terminar el mismo trabajo en solo 4 horas?",
            "options": [
                "6 obreros",
                "9 obreros",
                "12 obreros",
                "15 obreros"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, multiplicamos en línea recta el número inicial de obreros por sus horas: 3 * 12 = 36. Dividimos el resultado entre las 4 horas deseadas y nos da 9 obreros necesarios"
        },
        {
            "id": 35,
            "subject": "Razonamiento Numérico",
            "question": "Regla de tres simple: Si una fotocopiadora tarda 2 minutos en realizar 120 copias de un folleto, ¿cuántas copias realizará en 5 minutos si trabaja al mismo ritmo?",
            "options": [
                "240 copias",
                "300 copias",
                "360 copias",
                "400 copias"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, multiplicamos las copias iniciales por los nuevos minutos: 120 * 5 = 600. Seguidamente dividimos entre los 2 minutos originales, arrojando 300 copias"
        },
        {
            "id": 36,
            "subject": "Razonamiento Numérico",
            "question": "Conjuntos: Sean los conjuntos A = {1, 3, 5, 7, 9} y B = {3, 6, 9, 12}. Determine el resultado de la intersección A ∩ B.",
            "options": [
                "{1, 5, 7}",
                "{3, 9}",
                "{1, 3, 5, 6, 7, 9, 12}",
                "{6, 12}"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, buscamos los números que forman parte de ambos conjuntos a la misma vez. Al observar los dos grupos vemos que los números que se repiten son el 3 y el 9"
        },
        {
            "id": 37,
            "subject": "Razonamiento Numérico",
            "question": "Conjuntos: Si el conjunto M = {a, b, c} y el conjunto N = {b, c, d, e}, determine la unión M ∪ N.",
            "options": [
                "{b, c}",
                "{a, b, c, d, e}",
                "{a, d, e}",
                "{b, c, d, e}"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, reunimos todos los elementos pertenecientes a ambos conjuntos de manera ordenada y sin repetir ninguno, obteniendo la lista {a, b, c, d, e}"
        },
        {
            "id": 38,
            "subject": "Razonamiento Numérico",
            "question": "Conjuntos: En un salón de clases de 50 alumnos, 30 de ellos prefieren leer cómics y 25 prefieren leer libros tradicionales. Si a todos los alumnos les gusta al menos una de las dos opciones, ¿a cuántos de ellos les gustan ambas opciones?",
            "options": [
                "10 alumnos",
                "5 alumnos",
                "15 alumnos",
                "20 alumnos"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, sumamos las preferencias de ambas opciones: 30 + 25 = 55. Al comparar con los 50 alumnos reales de la clase, restamos 55 - 50, dándonos 5 alumnos en la intersección"
        },
        {
            "id": 39,
            "subject": "Razonamiento Numérico",
            "question": "Conjuntos: Dados los conjuntos P = {2, 4, 6} y Q = {4, 6, 8, 10}, halle la diferencia P − Q (elementos que pertenecen a P pero no a Q).",
            "options": [
                "{4, 6}",
                "{2}",
                "{8, 10}",
                "{2, 8, 10}"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, seleccionamos los elementos que están en P pero no se encuentran en Q. El único número que cumple con esta condición de exclusividad es el 2"
        },
        {
            "id": 40,
            "subject": "Razonamiento Numérico",
            "question": "Conjuntos: El conjunto universal U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} y el subconjunto A = {2, 4, 6, 8, 10}. Halle el complemento de A (A').",
            "options": [
                "{2, 4, 6, 8, 10}",
                "{1, 3, 5, 7, 9}",
                "{1, 2, 3, 4, 5}",
                "{6, 7, 8, 9, 10}"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, identificamos los elementos que le hacen falta al conjunto A para ser igual al conjunto universal U. Los números faltantes son los impares: {1, 3, 5, 7, 9}"
        }
    ],
    "Viernes": [
        {
            "id": 1,
            "subject": "Lengua y Literatura",
            "question": "¿Qué es la lectura inferencial?",
            "options": [
                "Buscar el significado de palabras difíciles en el diccionario.",
                "Deducir o extraer información e ideas implícitas que no aparecen de forma literal en el texto.",
                "Leer en voz alta dándole la entonación y paralingüística correcta.",
                "Contar las palabras y párrafos del escrito de forma exacta."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Deducir o extraer información e ideas implícitas que no aparecen de forma literal en el texto."
        },
        {
            "id": 2,
            "subject": "Lengua y Literatura",
            "question": "Si un texto dice: \"La calle estaba mojada y las personas caminaban con paraguas abiertos\", ¿qué se puede inferir con seguridad?",
            "options": [
                "Que es un día soleado de verano.",
                "Que ha estado lloviendo o está lloviendo en ese momento.",
                "Que se ha roto una tubería principal de agua.",
                "Que las personas están modelando paraguas nuevos."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Que ha estado lloviendo o está lloviendo en ese momento."
        },
        {
            "id": 3,
            "subject": "Lengua y Literatura",
            "question": "En lógica, el razonamiento que parte de premisas o leyes generales para llegar a una conclusión particular e indudable se conoce como:",
            "options": [
                "Inducción.",
                "Deducción.",
                "Contradicción.",
                "Hipérbole."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Deducción."
        },
        {
            "id": 4,
            "subject": "Lengua y Literatura",
            "question": "Si observo que el metal cobre se dilata con el calor, el hierro se dilata con el calor y el aluminio se dilata con el calor, y por tanto concluyo que \"todos los metales se dilatan con el calor\", ¿qué tipo de razonamiento he aplicado?",
            "options": [
                "Razonamiento deductivo.",
                "Razonamiento inductivo.",
                "Razonamiento ambiguo.",
                "Razonamiento analógico."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Razonamiento inductivo."
        },
        {
            "id": 5,
            "subject": "Lengua y Literatura",
            "question": "¿Cuál es el objetivo principal del proceso de revisión de un borrador de texto?",
            "options": [
                "Cambiar por completo las ideas originales del autor por otras de moda.",
                "Detectar y corregir errores ortográficos, gramaticales, de estilo y de cohesión antes de publicar.",
                "Traducir el documento a varios idiomas mediante un software automático.",
                "Añadir la mayor cantidad posible de imágenes de internet."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Detectar y corregir errores ortográficos, gramaticales, de estilo y de cohesión antes de publicar."
        },
        {
            "id": 6,
            "subject": "Lengua y Literatura",
            "question": "Al revisar la concordancia de un texto, se debe verificar que:",
            "options": [
                "Cada párrafo tenga exactamente diez líneas escritas en mayúscula.",
                "Coincidan el sujeto y el verbo en número y persona, y el sustantivo y adjetivo en género y número.",
                "Se hayan utilizado al menos tres tipos de tipografía distintos.",
                "El texto carezca de adecuación lingüística."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Coincidan el sujeto y el verbo en número y persona, y el sustantivo y adjetivo en género y número."
        },
        {
            "id": 7,
            "subject": "Lengua y Literatura",
            "question": "En una lectura inferencial de un texto, es fundamental relacionar los datos del texto con:",
            "options": [
                "La cantidad de páginas que tiene el libro.",
                "Los conocimientos previos y experiencias del propio lector.",
                "El costo económico de la publicación.",
                "El eslogan comercial de la portada del libro."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Los conocimientos previos y experiencias del propio lector."
        },
        {
            "id": 8,
            "subject": "Lengua y Literatura",
            "question": "¿Qué método de razonamiento se utiliza cuando un detective analiza pistas particulares en la escena del crimen para formular una hipótesis general de lo ocurrido?",
            "options": [
                "Deducción pura.",
                "Inducción.",
                "Descontextualización.",
                "Comparación silábica."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Inducción."
        },
        {
            "id": 9,
            "subject": "Lengua y Literatura",
            "question": "Durante la fase de revisión del texto, si identificamos la oración: \"Los estudiantes de la universidad asiste a la biblioteca\", ¿qué tipo de error debemos corregir?",
            "options": [
                "Un error de concordancia de género.",
                "Un error de concordancia verbal de número (sujeto plural y verbo en singular).",
                "Un error semántico de descontextualización.",
                "Un error ortográfico de acentuación."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Un error de concordancia verbal de número (sujeto plural y verbo en singular)."
        },
        {
            "id": 10,
            "subject": "Lengua y Literatura",
            "question": "¿Cuál de las siguientes acciones NO forma parte de las técnicas básicas de revisión textual?",
            "options": [
                "Comprobar la ortografía de palabras difíciles y la acentuación.",
                "Revisar que las oraciones estén conectadas lógicamente con conectores adecuados.",
                "Escribir un nuevo artículo de opinión sobre un tema completamente diferente al borrador.",
                "Verificar que no existan contradicciones o ideas repetidas innecesariamente."
            ],
            "correct": 2,
            "explanation": "La respuesta correcta es la c) porque Escribir un nuevo artículo de opinión sobre un tema completamente diferente al borrador."
        },
        {
            "id": 11,
            "subject": "Historia",
            "question": "¿En qué período histórico europeo se desarrolló e implementó con mayor fuerza la teoría y práctica del mercantilismo?",
            "options": [
                "Durante el Imperio romano clásico.",
                "En la Edad Moderna, entre los siglos XVI y XVIII.",
                "A finales del siglo XX con la globalización digital.",
                "En la época del Paleolítico prehistórico."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque En la Edad Moderna, entre los siglos XVI y XVIII."
        },
        {
            "id": 12,
            "subject": "Historia",
            "question": "Según la doctrina del mercantilismo, la riqueza y el poder económico de una nación se medían principalmente por:",
            "options": [
                "La cantidad de tierras dedicadas al cultivo de trigo.",
                "La acumulación de metales preciosos (oro y plata) y una balanza comercial favorable.",
                "El bienestar social y la educación gratuita de su población.",
                "El número de industrias tecnológicas en sus ciudades."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque La acumulación de metales preciosos (oro y plata) y una balanza comercial favorable."
        },
        {
            "id": 13,
            "subject": "Historia",
            "question": "¿Qué significaba mantener una \"balanza comercial favorable\" en la era del mercantilismo?",
            "options": [
                "Importar más mercancías extranjeras de las que se exportaban.",
                "Exportar más productos al exterior de los que se importaban (vender más de lo que se compra).",
                "Mantener una igualdad exacta de precios entre metales preciosos y productos agrícolas.",
                "Prohibir por completo cualquier intercambio comercial marítimo."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Exportar más productos al exterior de los que se importaban (vender más de lo que se compra)."
        },
        {
            "id": 14,
            "subject": "Historia",
            "question": "¿Qué sistema socioeconómico moderno, basado en el mercado libre y la propiedad privada, comenzó a consolidarse a partir de la Revolución Industrial a finales del siglo XVIII?",
            "options": [
                "El Feudalismo.",
                "El Capitalismo.",
                "El Mercantilismo imperial.",
                "El Socialismo científico."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El Capitalismo."
        },
        {
            "id": 15,
            "subject": "Historia",
            "question": "¿Qué célebre economista escocés publicó en el año 1776 la obra \"La riqueza de las naciones\", sentando las bases teóricas del liberalismo económico y del capitalismo moderno?",
            "options": [
                "Karl Marx.",
                "Adam Smith.",
                "John Maynard Keynes.",
                "Jean-Baptiste Colbert."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Adam Smith."
        },
        {
            "id": 16,
            "subject": "Historia",
            "question": "Bajo el sistema mercantilista, los monarcas absolutos europeos promovieron fuertemente el colonialismo principalmente para:",
            "options": [
                "Garantizar la igualdad social en todo el planeta.",
                "Obtener materias primas baratas y metales preciosos, y asegurar mercados exclusivos para sus productos.",
                "Permitir la emigración libre de los campesinos descontentos.",
                "Difundir los ideales democráticos de la Revolución francesa."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Obtener materias primas baratas y metales preciosos, y asegurar mercados exclusivos para sus productos."
        },
        {
            "id": 17,
            "subject": "Historia",
            "question": "En el capitalismo, el precio de los bienes, servicios y salarios se regula y establece principalmente a través de:",
            "options": [
                "Decretos reales dictados por el monarca absoluto.",
                "La ley de la oferta y la demanda en un mercado libre.",
                "La cantidad de oro acumulada en las bóvedas de la Iglesia.",
                "Acuerdos internacionales firmados por el Congreso de Viena."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque La ley de la oferta y la demanda en un mercado libre."
        },
        {
            "id": 18,
            "subject": "Historia",
            "question": "¿Qué hito histórico e industrial de mediados del siglo XVIII (alrededor de 1760 en Inglaterra) aceleró la transición del mercantilismo al capitalismo industrial?",
            "options": [
                "La caída del Imperio Romano.",
                "La invención de la máquina de vapor y el inicio de la Revolución Industrial.",
                "La llegada de Colón a tierras americanas en 1492.",
                "El estallido de la Revolución Francesa de 1789."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque La invención de la máquina de vapor y el inicio de la Revolución Industrial."
        },
        {
            "id": 19,
            "subject": "Historia",
            "question": "¿Cuál es la principal diferencia entre el mercantilismo y el capitalismo liberal?",
            "options": [
                "El mercantilismo promueve el libre mercado y el capitalismo la intervención estatal absoluta.",
                "El mercantilismo defiende la fuerte intervención del Estado y la acumulación de metales, mientras que el capitalismo liberal aboga por el libre mercado y la propiedad privada con mínima intervención del Estado.",
                "El mercantilismo abolió el feudalismo en el siglo V d.C. y el capitalismo lo reinstauró.",
                "El mercantilismo prohíbe el comercio internacional y el capitalismo lo limita a las colonias."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque El mercantilismo defiende la fuerte intervención del Estado y la acumulación de metales, mientras que el capitalismo liberal aboga por el libre mercado y la propiedad privada con mínima intervención del Estado."
        },
        {
            "id": 20,
            "subject": "Historia",
            "question": "¿Qué ministro de finanzas del rey Luis XIV de Francia implementó a mediados del siglo XVII un modelo mercantilista tan estricto basado en manufacturas estatales que llevó su nombre (colbertismo)?",
            "options": [
                "Adam Smith.",
                "Jean-Baptiste Colbert.",
                "Maximilien Robespierre.",
                "Napoleón Bonaparte."
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Jean-Baptiste Colbert."
        },
        {
            "id": 21,
            "subject": "Razonamiento Verbal",
            "question": "Sinónimos: Identifique el sinónimo de la palabra **EXHAUSTIVO**.",
            "options": [
                "Somero",
                "Completo",
                "Rápido",
                "Superficial"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Completo"
        },
        {
            "id": 22,
            "subject": "Razonamiento Verbal",
            "question": "Sinónimos: Señale el sinónimo de **PERSUADIR**.",
            "options": [
                "Disuadir",
                "Convencer",
                "Engañar",
                "Obligar"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Convencer"
        },
        {
            "id": 23,
            "subject": "Razonamiento Verbal",
            "question": "Sinónimos: Seleccione el sinónimo contextual de **CORROBORAR**.",
            "options": [
                "Cuestionar",
                "Confirmar",
                "Suponer",
                "Criticar"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Confirmar"
        },
        {
            "id": 24,
            "subject": "Razonamiento Verbal",
            "question": "Sinónimos: Halle la palabra con significado similar a **INDISPENSABLE**.",
            "options": [
                "Opcional",
                "Esencial",
                "Accesorio",
                "Útil"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Esencial"
        },
        {
            "id": 25,
            "subject": "Razonamiento Verbal",
            "question": "Sinónimos: Identifique el sinónimo de **CONCISO**.",
            "options": [
                "Extenso",
                "Breve",
                "Detallado",
                "Confuso"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Breve"
        },
        {
            "id": 26,
            "subject": "Razonamiento Verbal",
            "question": "Antónimos: Identifique el antónimo directo de **SUBJETIVO**.",
            "options": [
                "Personal",
                "Objetivo",
                "Subalterno",
                "Teórico"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Objetivo"
        },
        {
            "id": 27,
            "subject": "Razonamiento Verbal",
            "question": "Antónimos: Señale el antónimo de la palabra **NÓMADA**.",
            "options": [
                "Viajero",
                "Sedentario",
                "Peregrino",
                "Errante"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Sedentario"
        },
        {
            "id": 28,
            "subject": "Razonamiento Verbal",
            "question": "Antónimos: Halle el antónimo de **DEDUCCIÓN**.",
            "options": [
                "Inducción",
                "Inferencia",
                "Conclusión",
                "Silogismo"
            ],
            "correct": 0,
            "explanation": "La respuesta correcta es la a) porque Inducción"
        },
        {
            "id": 29,
            "subject": "Razonamiento Verbal",
            "question": "Antónimos: Determine la palabra opuesta a **COHERENCIA**.",
            "options": [
                "Conexión",
                "Incongruencia",
                "Lógica",
                "Claridad"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Incongruencia"
        },
        {
            "id": 30,
            "subject": "Razonamiento Verbal",
            "question": "Antónimos: Seleccione el antónimo de **MERCANTILISMO** en el contexto de políticas económicas de control del mercado frente a la libertad de comercio.",
            "options": [
                "Proteccionismo",
                "Liberalismo",
                "Monopolio",
                "Intervencionismo"
            ],
            "correct": 1,
            "explanation": "La respuesta correcta es la b) porque Liberalismo"
        },
        {
            "id": 31,
            "subject": "Razonamiento Numérico",
            "question": "Fracciones: Si reparto 3/4 de una pizza equitativamente entre 3 amigos, ¿qué fracción de la pizza entera recibe cada uno?",
            "options": [
                "1/3",
                "1/4",
                "3/12",
                "1/2"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, dividimos la fracción original por el número de personas: (3/4) / 3 = (3/4) * (1/3) = 3/12. Al simplificar dividiendo entre 3 arriba y abajo, obtenemos 1/4"
        },
        {
            "id": 32,
            "subject": "Razonamiento Numérico",
            "question": "Fracciones: Resuelva la suma de fracciones: 1/2 + 1/4 =",
            "options": [
                "2/6",
                "3/4",
                "2/4",
                "1/6"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, convertimos 1/2 a cuartos multiplicando por 2 arriba y abajo, dando 2/4. Luego sumamos: 2/4 + 1/4 = 3/4"
        },
        {
            "id": 33,
            "subject": "Razonamiento Numérico",
            "question": "Fracciones: Un estudiante dedica 1/3 del día a estudiar y 1/6 del día a hacer deportes. ¿Qué fracción del día total le queda libre si el resto del día lo dedica a dormir y otras actividades?",
            "options": [
                "1/2",
                "1/2 (o 3/6)",
                "1/3",
                "5/6"
            ],
            "correct": 0,
            "explanation": "Para resolver esto, sumamos las fracciones empleadas: 1/3 + 1/6. Común denominador 6: 2/6 + 1/6 = 3/6 = 1/2. Restamos del total 1 - 1/2 = 1/2 libre"
        },
        {
            "id": 34,
            "subject": "Razonamiento Numérico",
            "question": "Fracciones: Resuelva la multiplicación de fracciones: (2/3) × (5/4) =",
            "options": [
                "8/15",
                "5/6",
                "7/12",
                "10/12"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, multiplicamos numeradores entre sí y denominadores entre sí: 2*5 = 10 y 3*4 = 12, dando 10/12. Al simplificar entre 2, resulta 5/6"
        },
        {
            "id": 35,
            "subject": "Razonamiento Numérico",
            "question": "Fracciones: ¿Cuál es el resultado de dividir 3/5 entre 2/3?",
            "options": [
                "6/15",
                "9/10",
                "2/5",
                "5/9"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, multiplicamos la primera fracción por la inversa de la segunda: (3/5) * (3/2) = (3*3) / (5*2) = 9/10"
        },
        {
            "id": 36,
            "subject": "Razonamiento Numérico",
            "question": "Operaciones básicas: Resuelva respetando la jerarquía de las operaciones: 20 − 4 × (3 + 1) =",
            "options": [
                "64",
                "4",
                "16",
                "12"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, resolvemos primero lo que está dentro del paréntesis: 3 + 1 = 4. Luego multiplicamos 4 * 4 = 16. Por último restamos: 20 - 16 = 4"
        },
        {
            "id": 37,
            "subject": "Razonamiento Numérico",
            "question": "Operaciones básicas: Resuelve: 8 + 12 / 2 × 3 =",
            "options": [
                "30",
                "26",
                "14",
                "10"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, de acuerdo con la jerarquía, primero hacemos la división de izquierda a derecha: 12 / 2 = 6. Luego multiplicamos 6 * 3 = 18. Al final sumamos 8 + 18 = 26"
        },
        {
            "id": 38,
            "subject": "Razonamiento Numérico",
            "question": "Operaciones básicas: Resuelve: (18 − 6) / 3 + 2 × 5 =",
            "options": [
                "20",
                "14",
                "12",
                "30"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, operamos el paréntesis primero: 18 - 6 = 12. Luego la división 12 / 3 = 4, y la multiplicación 2 * 5 = 10. Sumamos los resultados 4 + 10 = 14"
        },
        {
            "id": 39,
            "subject": "Razonamiento Numérico",
            "question": "Operaciones básicas: Si compro 3 libretas de $2.50 cada una y 2 bolígrafos de $1.25 cada uno, y pago con un billete de $20, ¿cuánto recibiré de vuelto?",
            "options": [
                "$8.00",
                "$10.00",
                "$12.00",
                "$15.00"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, sumamos el gasto: 3 * 2.50 = 7.50, y 2 * 1.25 = 2.50. Total gasto: 7.50 + 2.50 = 10.00. El vuelto de un billete de 20 es 20 - 10 = $10.00"
        },
        {
            "id": 40,
            "subject": "Razonamiento Numérico",
            "question": "Operaciones básicas: Resuelve: 100 / (5 × 2) − 3 =",
            "options": [
                "17",
                "7",
                "97",
                "10"
            ],
            "correct": 1,
            "explanation": "Para resolver esto, operamos el paréntesis en el denominador: 5 * 2 = 10. Luego hacemos la división: 100 / 10 = 10. Al final restamos: 10 - 3 = 7"
        }
    ],
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
        "Miércoles": [
            {
                "topic": "Metaplasmos",
                "subject": "Lengua y Literatura",
                "concept": "Son fenómenos lingüísticos que consisten en cambiar, añadir o quitar sonidos o letras a las palabras, alterando su estructura original, ya sea por razones literarias o por un uso coloquial incorrecto, como decir \"dijistes\" en lugar de \"dijiste\".",
                "image": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=metaplasmos+lenguaje",
                "exercises": []
            },
            {
                "topic": "La Conversación",
                "subject": "Lengua y Literatura",
                "concept": "Es una forma de comunicación interactiva y espontánea entre dos o más personas que intercambian ideas, información o sentimientos, caracterizada por alternar turnos de palabra.",
                "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=la+conversacion+comunicacion",
                "exercises": []
            },
            {
                "topic": "Vicios Pragmáticos en el Lenguaje",
                "subject": "Lengua y Literatura",
                "concept": "Son errores o malos hábitos en el uso del lenguaje que ocurren directamente en el momento de la comunicación, los cuales entorpecen la fluidez o afectan la claridad del mensaje, como por ejemplo abusar de muletillas o usar arcaísmos.",
                "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=vicios+pragmaticos+del+lenguaje",
                "exercises": []
            },
            {
                "topic": "El origen de las polis",
                "subject": "Historia",
                "concept": "Se refiere al surgimiento en la Antigua Grecia de las ciudades-estado independientes conocidas como \"polis\", las cuales funcionaban como pequeños países autónomos, cada una con su propio gobierno, leyes, territorio, ejército y moneda.",
                "image": "https://images.unsplash.com/photo-1503152394-c571994fd383?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=el+origen+de+las+polis+griegas",
                "exercises": []
            },
            {
                "topic": "Las colonizaciones griegas",
                "subject": "Historia",
                "concept": "Fue el proceso de gran expansión migratoria y territorial impulsado por los griegos entre los siglos VIII y VI a.C., mediante el cual fundaron nuevas colonias a lo largo de las costas del mar Mediterráneo y el mar Negro para buscar tierras cultivables y expandir sus rutas comerciales.",
                "image": "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=las+colonizaciones+griegas",
                "exercises": []
            },
            {
                "topic": "Analogías verbales",
                "subject": "Razonamiento Verbal",
                "concept": "Son ejercicios que consisten en identificar la relación lógica o de semejanza que existe entre dos pares de palabras, evaluando la capacidad de entender cómo se conectan los conceptos, por ejemplo: \"Aleta es a pez como ala es a ave\".",
                "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=analogias+verbales+ejercicios",
                "exercises": [
                    {
                        "problem": "Analogía: DEDO es a MANO como:\n\na) Hoja es a Rama\nb) Zapato es a Pie\nc) Pétalo es a Flor\nd) Sombrero es a Cabeza",
                        "solution": "1. Analizamos la relación entre el primer par de palabras: 'dedo' y 'mano'. Un dedo es una parte constituyente de la mano (relación de parte a todo).\n2. Evaluamos las opciones para encontrar una relación equivalente:\n   - 'Hoja' y 'Rama': Una hoja es parte de una rama, pero la rama a su vez es parte de un árbol, y la relación no es tan directa como miembro y extremidad.\n   - 'Zapato' y 'Pie': El zapato cubre al pie (relación de objeto de uso a órgano corporal).\n   - 'Pétalo' y 'Flor': Un pétalo es una parte constituyente e indispensable de la estructura de una flor (relación de parte a todo exacta).\n   - 'Sombrero' y 'Cabeza': El sombrero cubre a la cabeza.\n3. Por lo tanto, la opción correcta es la c) Pétalo es a Flor."
                    },
                    {
                        "problem": "Analogía: CALIENTE es a FRÍO como:\n\na) Alto es a Gigante\nb) Luz es a Oscuridad\nc) Agua es a Hielo\nd) Correr es a Caminar",
                        "solution": "1. Analizamos la relación entre 'caliente' y 'frío'. Son antónimos o conceptos opuestos extremos en una escala térmica.\n2. Buscamos el par con la misma relación de oposición:\n   - 'Alto' y 'Gigante': Relación de intensidad (un gigante es extremadamente alto).\n   - 'Luz' y 'Oscuridad': Son antónimos directos y excluyentes (donde hay luz no hay oscuridad).\n   - 'Agua' y 'Hielo': Diferentes estados físicos de la misma sustancia.\n   - 'Correr' y 'Caminar': Diferentes intensidades o velocidades del mismo tipo de locomoción.\n3. La opción b) presenta la relación de antonimia perfecta. La opción correcta es la b)."
                    }
                ]
            },
            {
                "topic": "Selección lógica",
                "subject": "Razonamiento Verbal",
                "concept": "Es la habilidad para analizar un conjunto de datos o afirmaciones y deducir la respuesta correcta o la conclusión válida, aplicando principios de sentido común y descartando opciones ilógicas o inconsistentes.",
                "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=seleccion+logica+razonamiento+verbal",
                "exercises": [
                    {
                        "problem": "Selección lógica: Si todos los mamíferos tienen pelo y el perro es un mamífero, entonces la conclusión lógica es:\n\na) El perro a veces tiene pelo.\nb) El perro es el único mamífero con pelo.\nc) El perro tiene pelo.\nd) Algunos perros no tienen pelo.",
                        "solution": "1. Identificamos las premisas del silogismo:\n   - Premisa 1 (Universal): Todos los mamíferos tienen pelo.\n   - Premisa 2 (Particular): El perro es un mamífero.\n2. Si el conjunto de 'perros' pertenece enteramente al conjunto de 'mamíferos', y todos los miembros del conjunto 'mamíferos' tienen la propiedad de tener pelo, se deduce necesariamente que el perro posee dicha propiedad.\n3. Por lo tanto, la conclusión lógica y certera es 'El perro tiene pelo'. La opción correcta es la c)."
                    },
                    {
                        "problem": "Selección lógica: Juan es más alto que Pedro, y Pedro es más alto que Luis. Por lo tanto:\n\na) Luis es el más alto de los tres.\nb) Juan es más alto que Luis.\nc) Pedro es más bajo que Luis.\nd) Juan y Luis miden lo mismo.",
                        "solution": "1. Traducimos las afirmaciones de comparación a símbolos matemáticos de desigualdad:\n   - Juan > Pedro\n   - Pedro > Luis\n2. Aplicamos la propiedad transitiva de la relación de orden mayor que: Si A > B y B > C, entonces A > C.\n3. Reemplazando con los nombres: Juan > Luis (Juan es más alto que Luis).\n4. La opción correcta es la b)."
                    }
                ]
            },
            {
                "topic": "Fracciones",
                "subject": "Razonamiento Numérico",
                "concept": "Representan matemáticamente una parte de un todo, expresando una cantidad dividida entre otra; se componen de un numerador que indica las partes que se toman, y un denominador que indica en cuántas partes iguales se dividió el entero.",
                "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=fracciones+matematicas+desde+cero",
                "exercises": [
                    {
                        "problem": "¿Cuál es el resultado de sumar las fracciones 1/4 + 2/4?\n\na) 3/8\nb) 3/4\nc) 2/8\nd) 4/4",
                        "solution": "1. Identificamos que ambas fracciones tienen el mismo denominador (4), lo que significa que son fracciones homogéneas.\n2. En la suma de fracciones homogéneas, se mantiene el denominador y se suman los numeradores directamente:\n   1/4 + 2/4 = (1 + 2) / 4 = 3/4.\n3. Por lo tanto, el resultado es 3/4. La opción correcta es la b)."
                    },
                    {
                        "problem": "Si comes 3 porciones de una pizza que fue dividida en 8 partes iguales, ¿qué fracción de la pizza queda intacta?\n\na) 3/8\nb) 5/8\nc) 8/5\nd) 1/8",
                        "solution": "1. Representamos la pizza entera como una fracción: como fue dividida en 8 partes, la pizza completa es 8/8.\n2. Representamos la cantidad de pizza comida: 3 de las 8 partes equivale a 3/8.\n3. Restamos la cantidad consumida del total para obtener la fracción restante:\n   Pizza restante = 8/8 - 3/8 = (8 - 3) / 8 = 5/8.\n4. La opción correcta es la b) 5/8."
                    }
                ]
            },
            {
                "topic": "Operaciones básicas",
                "subject": "Razonamiento Numérico",
                "concept": "Comprenden los cálculos aritméticos fundamentales, es decir, la suma, la resta, la multiplicación y la división, los cuales son la base indispensable para resolver cualquier problema matemático.",
                "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=operaciones+basicas+jerarquia+de+operaciones",
                "exercises": [
                    {
                        "problem": "Resuelve la siguiente operación respetando la jerarquía matemática: 15 + 5 × 2 =\n\na) 40\nb) 20\nc) 25\nd) 100",
                        "solution": "1. Recordamos la regla de jerarquía de operaciones (PEMDAS / GMDAS): Las multiplicaciones y divisiones se deben realizar antes que las sumas y restas.\n2. Aplicamos la multiplicación primero:\n   5 × 2 = 10.\n3. Realizamos la suma con el resultado obtenido:\n   15 + 10 = 25.\n4. El resultado correcto es 25. La opción correcta es la c)."
                    },
                    {
                        "problem": "Si compras 4 cuadernos a $3 cada uno y pagas con un billete de $20, ¿cuánto recibes de vuelto?\n\na) $12\nb) $8\nc) $10\nd) $6",
                        "solution": "1. Calculamos primero el costo total de la compra multiplicando la cantidad de cuadernos por el precio unitario:\n   Costo Total = 4 × $3 = $12.\n2. Restamos el costo total del monto pagado para obtener el vuelto:\n   Vuelto = $20 - $12 = $8.\n3. Por tanto, recibes de vuelto $8. La opción correcta es la b)."
                    }
                ]
            }
        ],
        "Jueves": [
            {
                "topic": "La Declamación",
                "subject": "Lengua y Literatura",
                "concept": "La declamación es el arte escénico y literario que consiste en interpretar un poema frente a un público, empleando de manera armónica la voz, la modulación, la entonación y la expresión corporal. A diferencia de la simple lectura en voz alta, que busca transmitir palabras de forma lineal, la declamación persigue revivir la obra en su dimensión emocional profunda, de modo que el intérprete se convierte en un puente que conecta el sentimiento original del autor con la sensibilidad de los oyentes.\n\nPara lograr este propósito, el declamador debe dominar diversos recursos no verbales y paralingüísticos, tales como los gestos faciales, la postura corporal, los movimientos de las manos y el manejo estratégico del ritmo y los silencios. Estos elementos no verbales son fundamentales para subrayar la intensidad de los versos, evitando tanto la monotonía como la gesticulación exagerada o artificial, logrando así una puesta en escena elegante e impactante.",
                "image": "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=la+declamacion+poetica",
                "exercises": []
            },
            {
                "topic": "Vicios Sintácticos en el Lenguaje",
                "subject": "Lengua y Literatura",
                "concept": "Los vicios sintácticos son aquellos errores o incorrecciones que se cometen al estructurar gramaticalmente las oraciones o al ordenar las palabras dentro de un enunciado. Estas fallas atentan directamente contra las reglas de concordancia, cohesión y sintaxis establecidas por la lengua, dificultando la claridad del mensaje y la fluidez comunicativa. Entre los vicios sintácticos más recurrentes se encuentran el solecismo (errores de concordancia o régimen), el queísmo y dequeísmo, y la redundancia viciosa.\n\nEl estudio de estas incorrecciones es vital para mejorar la producción de textos y el habla formal, ya que permite identificar y corregir estructuras anómalas muy comunes como el uso pluralizado incorrecto del verbo impersonal haber (por ejemplo, decir \"hubieron muchos problemas\" en lugar de \"hubo muchos problemas\"). Al erradicar estos vicios, se garantiza una comunicación mucho más precisa, coherente y respetuosa de las normas gramaticales.",
                "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=vicios+sintacticos+en+el+lenguaje",
                "exercises": []
            },
            {
                "topic": "Vicios Semánticos en el Lenguaje",
                "subject": "Lengua y Literatura",
                "concept": "Los vicios semánticos son fallas en el uso del idioma que afectan de manera directa la significación o el sentido de las palabras y enunciados, generando confusión, vaguedad o interpretaciones erróneas en el receptor. A diferencia de los errores gramaticales, en este caso las palabras pueden estar bien ordenadas, pero su significado real se ve distorsionado o enmascarado por un empleo inadecuado del vocabulario o por construcciones ambiguas de doble sentido.\n\nUno de los ejemplos más notables de vicios semánticos es la anfibología o ambigüedad, la cual ocurre cuando una frase se presta a más de una interpretación lógica debido a una mala redacción (como en \"Se vende ropa de señora usada\"). Asimismo, el uso indiscriminado e innecesario de extranjerismos o préstamos lingüísticos que ya tienen un equivalente exacto en español (como decir \"ticket\" por \"boleto\") constituye otra manifestación común de estos vicios que empobrecen la riqueza de nuestro lenguaje.",
                "image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=vicios+semanticos+en+el+lenguaje+anfibologia",
                "exercises": []
            },
            {
                "topic": "Dos tipos de polis: Atenas y Esparta",
                "subject": "Historia",
                "concept": "Atenas y Esparta representan los dos modelos políticos, sociales y culturales más influyentes e irreconciliables de las ciudades-estado (polis) de la Antigua Grecia. Atenas destacó históricamente por ser la cuna de la democracia directa, promoviendo la participación de sus ciudadanos en el debate de la asamblea, el desarrollo del libre pensamiento, la filosofía clásica, las artes plásticas, la literatura y el comercio marítimo floreciente.\n\nPor el contrario, Esparta se consolidó como una sociedad estrictamente militarizada, oligárquica e inflexible. Gobernada por una diarquía (dos reyes simultáneos) y un consejo de ancianos, centró todos sus esfuerzos estatales en el entrenamiento bélico riguroso de sus ciudadanos desde la niñez (la agogé) y en la disciplina militar extrema, relegando las artes y la filosofía con el fin de mantener un ejército invencible en tierra.",
                "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=atenas+y+esparta+diferencias",
                "exercises": []
            },
            {
                "topic": "La etapa helenística",
                "subject": "Historia",
                "concept": "La etapa helenística es el período histórico de la antigüedad clásica que se extiende tradicionalmente desde la muerte de Alejandro Magno en el año 323 a.C. hasta la definitiva conquista de Egipto por parte del Imperio Romano en el año 30 a.C. Tras la muerte de Alejandro, su inmenso imperio se fragmentó en diversos reinos independientes gobernados por sus generales, lo que dio inicio a una era caracterizada por un intenso intercambio y sincretismo cultural.\n\nDurante este período, la lengua y las costumbres griegas se expandieron de forma masiva por el Medio Oriente y el norte de África, fusionándose con las ricas tradiciones locales de Egipto, Persia y Mesopotamia. Esta mezcla de mundos favoreció el florecimiento científico y cultural en grandes metrópolis de carácter cosmopolita, siendo la ciudad egipcia de Alejandría el epicentro indiscutible del conocimiento de la época gracias a su legendaria biblioteca y museo.",
                "image": "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=etapa+helenistica+alejandro+magno",
                "exercises": []
            },
            {
                "topic": "Término excluido",
                "subject": "Razonamiento Verbal",
                "concept": "El ejercicio de término excluido es una prueba de razonamiento verbal que evalúa la capacidad de análisis y síntesis semántica de los estudiantes. Consiste en identificar y descartar, dentro de un listado de vocablos propuestos, aquella palabra que no comparte el campo semántico, la categoría gramatical o la relación de semejanza lógica que sí une a todas las demás. Esto requiere que el alumno examine detenidamente los rasgos significativos de cada opción para definir la regla de asociación del grupo.\n\nEste tipo de reactivos no solo mide la amplitud del vocabulario del estudiante, sino también su habilidad para clasificar información de manera lógica y coherente. Por ejemplo, en un conjunto que contiene nombres de instrumentos musicales como guitarra, violín y arpa, la palabra trompeta debe ser excluida debido a que pertenece a la familia de viento metal, mientras que los demás pertenecen al grupo de cuerdas, demostrando así la capacidad del estudiante para establecer categorías precisas.",
                "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=termino+excluido+razonamiento+verbal",
                "exercises": [
                    {
                        "problem": "Identifica el término excluido:\n\na) Guitarra\nb) Violín\nc) Arpa\nd) Trompeta",
                        "solution": "1. Analizamos la categoría común de los elementos dados: Guitarra, Violín y Arpa son instrumentos de cuerda.\n2. Comparamos con la trompeta, la cual es un instrumento de viento metal.\n3. Al no pertenecer a la familia de instrumentos de cuerda, la trompeta (opción d) es el término excluido."
                    },
                    {
                        "problem": "Identifica el término excluido en este grupo de profesiones:\n\na) Abogado\nb) Juez\nc) Fiscal\nd) Arquitecto",
                        "solution": "1. Analizamos el campo de desempeño de cada profesión: Abogado, Juez y Fiscal son profesionales vinculados de forma directa con el ámbito de las leyes, el derecho y el sistema judicial.\n2. Por otro lado, la arquitectura pertenece al sector del diseño, construcción e ingeniería civil.\n3. Por tanto, Arquitecto es la profesión que no pertenece al grupo del derecho. La opción correcta es la d)."
                    }
                ]
            },
            {
                "topic": "Ordenar oraciones",
                "subject": "Razonamiento Verbal",
                "concept": "Ordenar oraciones es un ejercicio de razonamiento verbal orientado a medir la competencia sintáctica y la lógica gramatical del alumno. Consiste en recibir un conjunto de palabras o sintagmas que han sido desorganizados y secuenciados con números, para luego reestructurarlos de tal manera que vuelvan a formar un enunciado con sentido completo, coherente y gramaticalmente correcto, siguiendo las normas sintácticas fundamentales.\n\nPara resolver exitosamente estos ejercicios, se debe identificar en primer lugar el sujeto de la acción (compuesto usualmente por un sustantivo y determinantes), luego localizar el verbo o núcleo del predicado, y finalmente situar los complementos circunstanciales y directos de forma natural. Este tipo de práctica refuerza la comprensión de las jerarquías y funciones sintácticas de la lengua, facilitando el desarrollo de destrezas de redacción y lectura analítica.",
                "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=ordenar+oraciones+razonamiento+verbal",
                "exercises": [
                    {
                        "problem": "Ordenar la siguiente oración: (1. parque / 2. Los / 3. juegan / 4. en / 5. niños / 6. el)\n\na) 2, 5, 3, 4, 6, 1\nb) 2, 3, 5, 4, 1, 6\nc) 5, 2, 3, 4, 6, 1\nd) 4, 6, 1, 2, 5, 3",
                        "solution": "1. Buscamos el sujeto o agente de la acción, el cual está compuesto por un artículo y un sustantivo: 'Los niños' (2, 5).\n2. Identificamos el verbo o acción principal que realiza el sujeto: 'juegan' (3).\n3. Buscamos el complemento circunstancial de lugar que detalla dónde juegan: 'en el parque' (4, 6, 1).\n4. Al unir estas partes, la estructura sintáctica correcta es 'Los niños juegan en el parque', lo que corresponde a la secuencia 2, 5, 3, 4, 6, 1.\n5. Por lo tanto, la opción correcta es la a)."
                    },
                    {
                        "problem": "Ordenar la siguiente oración: (1. examen / 2. difícil / 3. El / 4. muy / 5. estaba)\n\na) 3, 2, 5, 4, 1\nb) 3, 1, 5, 4, 2\nc) 1, 3, 5, 4, 2\nd) 5, 4, 2, 3, 1",
                        "solution": "1. Ubicamos el sustantivo que funciona como sujeto de la oración: 'El examen' (3, 1).\n2. Identificamos el verbo copulativo que describe el estado del sujeto: 'estaba' (5).\n3. Colocamos el adverbio de intensidad y el adjetivo que componen el atributo del sujeto: 'muy difícil' (4, 2).\n4. La estructura sintácticamente coherente es 'El examen estaba muy difícil', equivalente al orden 3, 1, 5, 4, 2.\n5. La opción correcta es la b)."
                    }
                ]
            },
            {
                "topic": "Probabilidad",
                "subject": "Razonamiento Numérico",
                "concept": "La probabilidad es la disciplina matemática que se encarga del estudio y cálculo cuantitativo de la posibilidad de que ocurra un evento o suceso determinado en un experimento de carácter aleatorio. Se expresa numéricamente en una escala que va desde el valor 0 (que indica la absoluta imposibilidad de ocurrencia de un fenómeno) hasta el valor 1 o 100% (que denota la certeza absoluta de que el evento va a suceder).\n\nPara determinar esta medida en situaciones cotidianas o teóricas simples, se recurre a la célebre Regla de Laplace, la cual establece que la probabilidad de un suceso es igual al cociente entre la cantidad de casos favorables de dicho suceso y el número total de casos posibles e igualmente probables de suceder. Este concepto es indispensable para comprender fenómenos cotidianos que involucran el azar, tales como el lanzamiento de dados, monedas, sorteos y predicciones de tendencias estadísticas.",
                "image": "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=probabilidad+desde+cero",
                "exercises": [
                    {
                        "problem": "En una bolsa hay 3 canicas rojas y 2 canicas azules. Si sacas una canica al azar, ¿cuál es la probabilidad de que sea roja?\n\na) 3/5\nb) 2/5\nc) 1/3\nd) 1/5",
                        "solution": "1. Identificamos el total de eventos o casos posibles sumando todas las canicas que hay dentro de la bolsa: 3 rojas + 2 azules = 5 canicas en total.\n2. Definimos los casos favorables que cumplen con nuestra condición (sacar una roja): como hay 3 canicas rojas, tenemos 3 casos favorables.\n3. Aplicamos la regla de Laplace (probabilidad = casos favorables / casos posibles): P = 3 / 5.\n4. La respuesta correcta es la opción a) 3/5."
                    },
                    {
                        "problem": "Si lanzas un dado estándar de 6 caras, ¿cuál es la probabilidad de sacar exactamente un 4?\n\na) 1/2\nb) 4/6\nc) 1/6\nd) 1/4",
                        "solution": "1. Identificamos los casos posibles: un dado estándar tiene 6 caras numeradas del 1 al 6 (6 casos posibles).\n2. Determinamos los casos favorables: solo una de esas caras tiene impreso el número 4 (1 caso favorable).\n3. Dividimos casos favorables para casos posibles: P = 1 / 6.\n4. La respuesta correcta es la c) 1/6."
                    }
                ]
            },
            {
                "topic": "Proporcionalidad compuesta",
                "subject": "Razonamiento Numérico",
                "concept": "La proporcionalidad compuesta es una extensión avanzada del concepto de regla de tres simple que se emplea para resolver problemas matemáticos complejos en los cuales intervienen e interactúan tres o más magnitudes proporcionales de forma simultánea. A diferencia de las proporciones simples, aquí la variable desconocida debe compararse con cada una de las otras magnitudes para determinar si mantienen una relación de proporcionalidad directa o inversa.\n\nSe dice que la relación es directa si al aumentar una magnitud, la otra también aumenta proporcionalmente, y es inversa si al incrementarse una, la otra disminuye. Al ordenar estas variables mediante multiplicaciones y divisiones concatenadas, es posible aislar y despejar la incógnita de forma rigurosa, siendo una herramienta sumamente práctica en ámbitos como la optimización de recursos, la distribución del trabajo industrial y la planificación logística.",
                "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=proporcionalidad+compuesta+regla+de+tres+compuesta",
                "exercises": [
                    {
                        "problem": "Si 2 trabajadores pintan 1 pared en 3 días, ¿cuántos días tardarán 4 trabajadores en pintar 2 paredes iguales? (Asumiendo el mismo ritmo)\n\na) 2 días\nb) 3 días\nc) 4 días\nd) 6 días",
                        "solution": "1. Analizamos las relaciones de proporcionalidad con respecto al número de días:\n   - A más trabajadores, menos días se demorarán (Relación Inversa).\n   - A más paredes a pintar, más días se demorarán (Relación Directa).\n2. Razonamos lógicamente:\n   - Duplicamos los trabajadores (de 2 a 4), por lo que el tiempo de ejecución para pintar 1 pared se reduce a la mitad (3 días / 2 = 1.5 días).\n   - Duplicamos la cantidad de trabajo (de 1 a 2 paredes), por lo que el tiempo necesario se duplica nuevamente (1.5 días * 2 = 3 días).\n3. Ambas variaciones de escala se neutralizan mutuamente, por ende, el tiempo requerido sigue siendo de 3 días.\n4. La opción correcta es la b)."
                    },
                    {
                        "problem": "Si 3 impresoras imprimen 100 páginas en 2 horas, ¿cuántas horas tardarán 6 impresoras en imprimir 200 páginas?\n\na) 1 hora\nb) 2 horas\nc) 4 horas\nd) 6 horas",
                        "solution": "1. Analizamos la proporcionalidad:\n   - A más impresoras funcionando, menos horas requeridas (Inversa).\n   - A más páginas impresas, más horas requeridas (Directa).\n2. Observamos la progresión de los datos:\n   - La cantidad de impresoras se duplica (de 3 a 6), reduciendo a la mitad el tiempo para la misma cantidad de páginas (2 horas / 2 = 1 hora).\n   - La cantidad de páginas a imprimir también se duplica (de 100 a 200), lo que duplica el tiempo de impresión (1 hora * 2 = 2 horas).\n3. La mayor velocidad de trabajo se compensa exactamente con la mayor carga de impresión, de modo que tardarán las mismas 2 horas.\n4. La respuesta correcta es la b)."
                    }
                ]
            }
        ],
        "Viernes": [
            {
                "topic": "La Dramatización",
                "subject": "Lengua y Literatura",
                "concept": "La dramatización es la representación escénica o teatral de una situación, historia, conflicto o texto literario, en la cual los participantes asumen roles de personajes específicos. A través de este proceso creativo, se da vida a un relato mediante el uso combinado de diálogos, monólogos, expresiones corporales, gestos y desplazamientos en el espacio físico. Este ejercicio no solo permite explorar la narrativa desde una perspectiva vivencial, sino que también estimula la empatía, la improvisación y la comprensión profunda de las motivaciones humanas.\n\nPara llevar a cabo una dramatización efectiva, es fundamental que los actores logren conectar emocionalmente con sus personajes y dominen los elementos verbales y no verbales de la comunicación. La modulación de la voz, el lenguaje de las manos, el ritmo corporal y la caracterización o escenografía complementan el guion teatral, logrando capturar la atención del espectador y transmitir con claridad el conflicto central de la obra representada.",
                "image": "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=la+dramatizacion+teatral+elementos",
                "exercises": []
            },
            {
                "topic": "El conversatorio",
                "subject": "Lengua y Literatura",
                "concept": "El conversatorio es una herramienta de comunicación oral estructurada como un diálogo informal y fluido, en el cual un grupo de invitados o expertos comparte sus conocimientos, experiencias y puntos de vista sobre un tema de interés común. A diferencia de las conferencias tradicionales o los debates académicos rígidos, el conversatorio prescinde de discursos extensos y unilaterales, priorizando en su lugar la interacción espontánea y la conversación natural dirigida por un moderador.\n\nEste formato es altamente participativo, ya que suele abrir un espacio directo para que el público plantee interrogantes, exponga dudas y dialogue directamente con los expositores. El rol fundamental del moderador es plantear preguntas desencadenadoras, regular los tiempos de manera sutil y asegurar que la charla mantenga un clima respetuoso y constructivo, promoviendo el enriquecimiento mutuo de todos los asistentes.",
                "image": "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=el+conversatorio+estructura+y+caracteristicas",
                "exercises": []
            },
            {
                "topic": "El ensayo argumentativo",
                "subject": "Lengua y Literatura",
                "concept": "El ensayo argumentativo es un texto escrito en prosa que tiene como propósito central persuadir o convencer al lector de adoptar la postura, hipótesis o tesis personal del autor con respecto a un tema específico. A diferencia de un texto informativo puro, el ensayo argumentativo exige una toma de posición crítica y analítica, la cual se sustenta rigurosamente mediante el planteamiento de razonamientos lógicos, datos duros, ejemplos ilustrativos y citas de autoridad.\n\nEstructuralmente, consta de tres partes esenciales: la introducción, donde se presenta el tema contextualizado y se enuncia la tesis de forma clara; el desarrollo o cuerpo argumentativo, donde se despliegan y debaten las razones que defienden dicha postura y se rebaten posibles contraargumentos; y la conclusión, que sintetiza los puntos clave and reafirma la tesis inicial con una reflexión final que invita a la acción o análisis continuo.",
                "image": "https://images.unsplash.com/photo-1496115965489-21be7e6e994e?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=el+ensayo+argumentativo+estructura",
                "exercises": []
            },
            {
                "topic": "La cultura griega",
                "subject": "Historia",
                "concept": "La cultura griega, florecida en la antigüedad clásica, representa uno de los pilares más sólidos e influyentes sobre los que se edificó la civilización occidental. Su cosmovisión se distinguió por un profundo humanismo y racionalismo, situando al ser humano, sus facultades intelectuales y su desarrollo físico en el centro del arte, la política y el pensamiento. A nivel artístico, los griegos desarrollaron una búsqueda incansable de la belleza ideal, manifestada en su equilibrada arquitectura de templos como el Partenón y en esculturas que retrataban la perfecta proporción corporal.\n\nAsimismo, su compleja mitología politeísta no solo explicaba los fenómenos naturales, sino que humanizaba a los dioses, dotándolos de pasiones y virtudes con las que el pueblo interactuaba cotidianamente. A través de disciplinas como el teatro (tragedia y comedia), la poesía épica atribuida a Homero y el desarrollo de eventos panhelénicos como los Juegos Olímpicos, los antiguos griegos consolidaron una identidad cultural fuerte que trascendía las fronteras y rivalidades de sus respectivas polis.",
                "image": "https://images.unsplash.com/photo-1555992336-03a23c7b20eb?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=la+cultura+griega+antigua+resumen",
                "exercises": []
            },
            {
                "topic": "Influencia griega en el mundo",
                "subject": "Historia",
                "concept": "La influencia de la civilización griega en el mundo moderno es inconmensurable, sentando las bases en áreas tan diversas como la política, la ciencia, el lenguaje, el arte y la filosofía. El legado más revolucionario de la polis de Atenas es, sin duda, la invención de la democracia directa, modelo de soberanía ciudadana que inspiró los sistemas democráticos actuales. De igual manera, las reflexiones filosóficas de Sócrates, Platón y Aristóteles estructuraron el razonamiento analítico y el método científico que hoy rigen la investigación y el saber.\n\nEn otras ramas del conocimiento, los griegos heredaron el juramento Hipocrático en medicina, las bases de la geometría euclidiana, el desarrollo del teatro clásico y la creación de los Juegos Olímpicos. Por último, nuestra propia lengua española está repleta de helenismos (palabras originadas en el griego, como 'democracia', 'psicología' o 'antropología'), demostrando que la forma en que pensamos, nos gobernamos y nos expresamos sigue íntimamente vinculada a la herencia helénica.",
                "image": "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=legado+y+influencia+griega+en+el+mundo+occidental",
                "exercises": []
            },
            {
                "topic": "Comprensión lectora",
                "subject": "Razonamiento Verbal",
                "concept": "La comprensión lectora es la capacidad cognitiva que posee un individuo para entender, analizar, interpretar y valorar críticamente un texto escrito. Lejos de ser un proceso pasivo de simple decodificación de letras y palabras, la comprensión lectora implica una interacción activa en la cual el lector relaciona la nueva información con sus conocimientos previos, identifica el tema central, extrae las ideas principales y secundarias, e infiere intenciones o significados implícitos que no se encuentran explícitos en el texto.\n\nPara desarrollar un óptimo razonamiento verbal en comprensión lectora, es fundamental aprender a distinguir entre el sentido literal del escrito y el sentido figurado o metafórico (como ocurre con los refranes o textos literarios). Asimismo, la práctica constante permite al estudiante deducir el significado de palabras desconocidas a partir del contexto lingüístico, facilitando la síntesis de información densa y la resolución acertada de cuestionamientos analíticos sobre cualquier lectura.",
                "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=comprension+lectora+razonamiento+verbal",
                "exercises": [
                    {
                        "problem": "Lea el siguiente texto e identifique la idea principal:\n\n'La educación tradicional se centró por siglos en la memorización y la obediencia. Sin embargo, el mundo moderno exige un cambio radical hacia el pensamiento crítico y el aprendizaje autónomo, preparando al estudiante no para repetir datos, sino para resolver problemas inéditos'.\n\na) La memorización es el método de estudio más antiguo.\nb) La educación debe transformarse para fomentar la autonomía y el pensamiento crítico frente a los desafíos modernos.\nc) Los estudiantes de antes eran más obedientes que los de ahora.\nd) La repetición de datos es innecesaria en cualquier nivel educativo.",
                        "solution": "1. Analizamos el texto: expone un contraste ('Sin embargo') entre la educación tradicional (memorización) y las exigencias del mundo moderno (pensamiento crítico, autonomía).\n2. Evaluamos la opción b: condensa la idea central al señalar que la educación debe evolucionar hacia estos nuevos enfoques para que los alumnos resuelvan problemas modernos.\n3. Las demás opciones se enfocan en detalles secundarios (como la antigüedad de la memoria) o interpretaciones extremas no apoyadas directamente por el texto.\n4. La respuesta correcta es la b)."
                    },
                    {
                        "problem": "A partir del enunciado: 'Aunque la tecnología facilita la conexión instantánea, el abuso de las pantallas puede generar un distanciamiento emocional en las familias si se descuidan las interacciones cara a cara'. ¿Cuál es una conclusión lógica?\n\na) La tecnología destruye por completo los lazos afectivos familiares.\nb) La conexión instantánea es perjudicial para la salud de las personas.\nc) Es necesario balancear el uso de pantallas con la comunicación presencial para cuidar los vínculos familiares.\nd) Las familias de hoy no tienen ningún tipo de distanciamiento emocional.",
                        "solution": "1. El texto indica que la tecnología tiene una ventaja (conexión instantánea) pero plantea un riesgo condicionado ('puede generar un distanciamiento... si se descuidan las interacciones cara a cara').\n2. Para evitar ese riesgo, se infiere lógicamente que debe existir un equilibrio o balance entre el uso digital y las interacciones presenciales.\n3. La opción c sintetiza esta recomendación de equilibrio de manera de cuidar los vínculos familiares.\n4. La respuesta correcta es la c)."
                    }
                ]
            },
            {
                "topic": "Concordancia verbal",
                "subject": "Razonamiento Verbal",
                "concept": "La concordancia verbal es la regla gramatical básica y obligatoria que establece que el verbo principal de una oración debe coincidir en número (singular o plural) y persona (primera, segunda o tercera) con el núcleo del sujeto. Esta relación formal garantiza la cohesión interna del enunciado y la claridad del mensaje, evitando distorsiones o ambigüedades en la interpretación de quién realiza la acción enunciada.\n\nExisten casos especiales que suelen causar confusión y errores frecuentes en el habla y la escritura, tales como los sujetos colectivos (por ejemplo, 'la manada', 'el grupo', donde el verbo concuerda formalmente en singular), el uso del verbo impersonal 'haber' (el cual carece de sujeto y debe conjugarse siempre en singular: 'había problemas', no 'habían problemas'), o sujetos compuestos unidos por la disyuntiva 'ni' u 'o'. Conocer estas excepciones es crucial para evitar solecismos y asegurar una redacción sintácticamente intachable.",
                "image": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=concordancia+verbal+reglas+y+ejemplos",
                "exercises": [
                    {
                        "problem": "Elija la opción que presente una correcta concordancia verbal:\n\na) El enjambre de abejas atacaron al intruso.\nb) Hubieron muchos asistentes en el concierto de ayer.\nc) La mayoría de los postulantes rindió el examen con éxito.\nd) Tú y él irás a la biblioteca por la tarde.",
                        "solution": "1. Analicemos cada opción:\n   - a) Presenta error porque 'el enjambre' es un sustantivo colectivo singular, por lo que el verbo debe ir en singular ('atacó').\n   - b) Presenta error porque el verbo impersonal 'haber' que denota existencia solo se usa en singular ('Hubo').\n   - d) Presenta error porque 'Tú y él' equivale a 'ustedes' (plural) o 'vosotros', por lo que debe concordar en plural ('irán' o 'iréis'), no en singular ('irás').\n   - c) Es correcta, ya que con cuantificadores partitivos ('la mayoría de') seguidos de un sustantivo plural, se acepta la concordancia en singular ('rindió') concordando con el núcleo singular 'mayoría'.\n2. Por lo tanto, la opción correcta es la c)."
                    },
                    {
                        "problem": "Complete la oración manteniendo la concordancia gramatical correcta:\n\n'La junta directiva de la empresa, junto con los asesores externos, _______ la propuesta de fusión'.\n\na) aprobaron\nb) aprobó\nc) aprobando\nd) aprobarían",
                        "solution": "1. El núcleo del sujeto es 'La junta directiva' (singular).\n2. El elemento 'junto con los asesores externos' funciona como un complemento de compañía o adición introducido por preposición, pero no convierte al sujeto en compuesto gramaticalmente.\n3. Por lo tanto, el verbo principal debe concordar en singular con el núcleo 'junta directiva': 'aprobó'.\n4. La opción correcta es la b)."
                    }
                ]
            },
            {
                "topic": "Secuencias lógicas",
                "subject": "Razonamiento Numérico",
                "concept": "Las secuencias lógicas son sucesiones ordenadas de elementos (números, letras, figuras geométricas o combinaciones de estos) que se estructuran siguiendo una regla de formación, patrón o ley lógica específica. Resolver una secuencia consiste en analizar de manera inductiva los términos iniciales de la serie para descubrir el patrón subyacente y, a partir de él, deducir con exactitud cuál es el elemento que continúa o completa el conjunto establecido.\n\nEn las secuencias puramente numéricas, los patrones más habituales implican operaciones aritméticas básicas de adición o multiplicación constantes (progresiones aritméticas o geométricas), o bien incrementos variables que siguen una serie secundaria (por ejemplo, sumas de números impares consecutivos). En el caso de las secuencias alfanuméricas, se debe realizar un doble análisis: por un lado, se identifica la regla matemática que gobierna a los números y, por el otro, se determina el patrón de saltos en el abecedario para las letras, integrando ambos resultados.",
                "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=secuencias+logicas+y+numericas+ejercicios",
                "exercises": [
                    {
                        "problem": "Determine qué número continúa la siguiente secuencia lógica:\n\n4, 9, 19, 39, 79, ___\n\na) 119\nb) 159\nc) 139\nd) 169",
                        "solution": "1. Analizamos la relación entre cada término sucesivo:\n   - De 4 a 9: podemos ver que 4 * 2 + 1 = 9.\n   - De 9 a 19: vemos que 9 * 2 + 1 = 19.\n   - De 19 a 39: vemos que 19 * 2 + 1 = 39.\n   - De 39 a 79: vemos que 39 * 2 + 1 = 79.\n2. El patrón es multiplicar por 2 y luego sumar 1 (2n + 1).\n3. Aplicamos el mismo patrón al último término para hallar el número siguiente: 79 * 2 + 1 = 158 + 1 = 159.\n4. Por lo tanto, la respuesta correcta es la b) 159."
                    },
                    {
                        "problem": "Encuentre el elemento que continúa la serie: 2B, 6E, 18H, 54K, ___\n\na) 108N\nb) 162N\nc) 162M\nd) 108M",
                        "solution": "1. Analizamos de forma separada la parte numérica y la parte alfabética:\n   - Números: 2, 6, 18, 54. Cada número es el triple del anterior (multiplicación por 3: 2*3=6, 6*3=18, 18*3=54). El siguiente número debe ser 54 * 3 = 162.\n   - Letras: B, E, H, K. Observamos la distancia entre las letras del abecedario: B -> (C, D) -> E -> (F, G) -> H -> (I, J) -> K. Se saltan dos letras consecutivas cada vez. El siguiente salto desde K saltará L y M, llegando a la letra N.\n2. Combinando los dos resultados, el elemento que continúa es 162N.\n3. La opción correcta es la b)."
                    }
                ]
            },
            {
                "topic": "Solución de problemas de ecuaciones lineales",
                "subject": "Razonamiento Numérico",
                "concept": "La solución de problemas de ecuaciones lineales consiste en traducir enunciados o situaciones de la vida real (expresadas en lenguaje natural) al lenguaje algebraico o formal de las matemáticas, estructurando una o más igualdades de primer grado para despejar una incógnita desconocida. Este proceso requiere habilidades de lectura comprensiva y abstracción, ya que es necesario identificar claramente cuál es el dato desconocido (la variable, típicamente 'x'), cuáles son los valores constantes y qué relaciones lógicas o equivalencias ligan a estos elementos.\n\nUna vez planteada la ecuación matemática (donde la variable solo aparece con exponente 1), se aplica el método sistemático de transposición de términos. Esto consiste en operar a ambos lados del signo de igualdad de manera equilibrada empleando las operaciones inversas correspondientes: los términos que están sumando pasan a restar al otro miembro, los que restan pasan a sumar, los que multiplican pasan a dividir y los que dividen a multiplicar. Al despejar y aislar la incógnita 'x', se halla su valor numérico específico, el cual debe sustituirse en el planteamiento original para comprobar la veracidad de la igualdad obtenida.",
                "image": "https://images.unsplash.com/photo-1518133835104-39f43532f951?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=como+plantear+y+resolver+problemas+de+ecuaciones+lineales",
                "exercises": [
                    {
                        "problem": "El doble del dinero de Luisa, aumentado en $15, equivale a la mitad de su dinero más $75. ¿Cuánto dinero tiene Luisa?\n\na) $30\nb) $40\nc) $50\nd) $60",
                        "solution": "1. Traducimos el enunciado al lenguaje matemático. Sea 'x' el dinero de Luisa:\n   - 'El doble de su dinero': 2x\n   - 'aumentado en 15': 2x + 15\n   - 'equivale a': =\n   - 'la mitad de su dinero más 75': x/2 + 75\n2. Planteamos la ecuación: 2x + 15 = x/2 + 75.\n3. Para eliminar el denominador, multiplicamos toda la ecuación por 2:\n   4x + 30 = x + 150.\n4. Agrupamos los términos con 'x' a la izquierda y constantes a la derecha:\n   4x - x = 150 - 30\n   3x = 120.\n5. Despejamos 'x':\n   x = 120 / 3\n   x = 40.\n6. Luisa tiene $40. La opción correcta es la b)."
                    },
                    {
                        "problem": "La suma de tres números enteros y consecutivos es igual a 72. Halle el valor del número mayor del grupo.\n\na) 23\nb) 24\nc) 25\nd) 26",
                        "solution": "1. Planteamos las variables de los tres números consecutivos:\n   - Primer número (menor): x\n   - Segundo número: x + 1\n   - Tercer número (mayor): x + 2\n2. Escribimos la ecuación de su suma:\n   x + (x + 1) + (x + 2) = 72.\n3. Simplificamos los términos semejantes:\n   3x + 3 = 72.\n4. Restamos 3 a ambos miembros de la ecuación:\n   3x = 69.\n5. Despejamos 'x' dividiendo por 3:\n   x = 69 / 3 = 23.\n6. El número menor es 23. Como nos piden el número mayor (x + 2):\n   Mayor = 23 + 2 = 25.\n7. La opción correcta es la c) 25."
                    }
                ]
            }
        ],
        "Sábado": [
            {
                "topic": "La investigación monográfica",
                "subject": "Lengua y Literatura",
                "concept": "La investigación monográfica es un trabajo académico escrito, sistemático y sumamente metódico que tiene como finalidad primordial profundizar en un tema de estudio específico, delimitado y claramente definido. A través de este proceso de indagación, el investigador recopila, contrasta y analiza de manera crítica y rigurosa una variedad de fuentes bibliográficas o empíricas confiables para estructurar una explicación coherente y dar respuesta a preguntas de investigación específicas, culminando en una serie de conclusiones analíticas basadas en la evidencia recolectada.\n\nLa estructura de una monografía formal exige orden y rigor metodológico, incluyendo típicamente una portada institucional, un índice, una introducción (donde se delimita el tema, se justifican los objetivos del trabajo y se plantea el problema), el desarrollo o cuerpo argumentativo organizado en capítulos o secciones específicas, las conclusiones y la bibliografía detallada. Este tipo de documento fomenta el desarrollo del pensamiento crítico y es la base de la formación investigadora en entornos educativos de nivel superior.",
                "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=la+investigacion+monografica",
                "exercises": []
            },
            {
                "topic": "Los textos Académicos",
                "subject": "Lengua y Literatura",
                "concept": "Los textos académicos son aquellos documentos formales de comunicación que se elaboran y difunden dentro del ámbito estudiantil, escolar, universitario y de la investigación científica. La principal característica que los define es su alto rigor intelectual, el cual se apoya en una argumentación coherente sustentada en datos, metodologías claras y referencias válidas que evitan el plagio. Además de difundir conocimiento y nuevos hallazgos, estos escritos buscan persuadir o informar al lector basándose en la objetividad y neutralidad.\n\nEn cuanto a su estilo de redacción, los textos académicos utilizan un lenguaje formal, claro y denotativo, incorporando terminología técnica o vocabulario especializado adecuado al área del conocimiento. La redacción se realiza preferentemente en tercera persona gramatical o utilizando la primera persona del plural (plural de modestia). Ejemplos típicos de estos textos incluyen artículos científicos (papers), tesis de grado, monografías, ensayos universitarios e informes de laboratorio.",
                "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=los+textos+academicos",
                "exercises": []
            },
            {
                "topic": "El informe Académico",
                "subject": "Lengua y Literatura",
                "concept": "El informe académico es un texto de carácter predominantemente expositivo e informativo que describe de manera sumamente clara, estructurada y objetiva los resultados de una investigación previa, un proyecto práctico o una actividad de aprendizaje realizada. A diferencia de un artículo de opinión, el informe no busca el lucimiento literario ni expresar emociones subjetivas, sino presentar hechos concretos y datos empíricos de forma ordenada para que otros miembros de la comunidad educativa o científica puedan comprender y evaluar los hallazgos.\n\nSu estructura clásica consta de cuatro partes esenciales: la introducción (que plantea los antecedentes y objetivos del estudio), el desarrollo o cuerpo (donde se explica detalladamente la metodología aplicada y se exponen los resultados mediante tablas o gráficas), las conclusiones (que sintetizan las deducciones clave y sugieren recomendaciones) y la bibliografía o anexos (que reúnen las referencias utilizadas y soportes documentales). El lenguaje empleado debe ser preciso, evitando ambigüedades e interpretaciones vagas.",
                "image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=el+informe+academico",
                "exercises": []
            },
            {
                "topic": "Los orígenes y la monarquía",
                "subject": "Historia",
                "concept": "Este tema aborda la etapa fundacional e inicial de la civilización romana, que se extiende convencionalmente desde su mítica fundación en el año 753 a.C. por los hermanos Rómulo y Remo hasta el establecimiento de la República en el 509 a.C. Durante este primer período, Roma estuvo gobernada por un sistema político de monarquía no hereditaria, donde el rey ejercía el poder militar, religioso y judicial, auxiliado por el Senado (una asamblea de ancianos patricios) y los comicios curiados.\n\nLa tradición histórica menciona la existencia de siete reyes (cuatro de origen latino-sabino y los tres últimos de origen etrusco, como Tarquinio el Soberbio), quienes consolidaron las bases del trazado urbano de la ciudad, construyeron defensas, introdujeron el calendario y establecieron las primeras jerarquías sociales de patricios y plebeyos. El abuso de poder de los últimos monarcas de influencia etrusca generó una gran rebelión social encabezada por los patricios, provocando la expulsión de Tarquinio el Soberbio y el fin definitivo del gobierno monárquico.",
                "image": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=roma+monarquia+origenes",
                "exercises": []
            },
            {
                "topic": "La República",
                "subject": "Historia",
                "concept": "La República romana es el gran período histórico de la antigua Roma que abarca desde el año 509 a.C., tras la caída de la monarquía, hasta el 27 a.C., momento en que se inicia el Imperio bajo César Augusto. Bajo el lema SPQR (Senatus Populusque Romanus), el poder político se reestructuró para evitar que se concentrara en un solo hombre, creando un sistema basado en la división de funciones del Estado entre tres instituciones clave: las asambleas populares o comicios (donde los ciudadanos votaban), las magistraturas anuales colegiadas (siendo los dos cónsules los gobernantes máximos) y el influyente Senado.\n\nEste período estuvo caracterizado por una continua lucha interna de clases entre los patricios (nobles terratenientes que ostentaban el poder inicial) y los plebeyos (la clase trabajadora mayoritaria), quienes progresivamente consiguieron el reconocimiento de sus derechos políticos, como la creación de los Tribunos de la Plebe y la redacción de las Leyes de las Doce Tablas. A su vez, la estabilidad interna y el eficiente ejército de ciudadanos permitieron a la República iniciar su gran expansión territorial sobre Italia y todo el Mediterráneo Occidental.",
                "image": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=roma+republica",
                "exercises": []
            },
            {
                "topic": "La expansión y la crisis de la República",
                "subject": "Historia",
                "concept": "Esta etapa de la historia romana describe el apogeo militar de la República y el surgimiento de las tensiones internas que terminaron colapsando su propio sistema político. A través de conflictos internacionales como las Guerras Púnicas contra Cartago, Roma se adueñó del control del mar Mediterráneo y conquistó vastas regiones de Europa occidental y Oriente Próximo, convirtiéndose en una superpotencia militar y comercial que administraba sus conquistas a través de provincias.\n\nSin embargo, la inmensa afluencia de riquezas, botines y millones de esclavos generó una profunda brecha socioeconómica: los nobles patricios acumularon inmensos latifundios agrícolas trabajados por mano de obra esclava barata, mientras que los pequeños campesinos plebeyos se arruinaron y migraron a Roma en busca de pan y circo. Esta gran crisis social desató violentas revueltas agrarias (como la de los hermanos Graco), rebeliones de esclavos (lideradas por Espartaco) y sangrientas guerras civiles entre caudillos militares aliados a facciones políticas, culminando en la asunción de dictaduras perpetuas como la de Julio César y el ocaso de las instituciones republicanas.",
                "image": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=expansion+y+crisis+de+la+republica+romana",
                "exercises": []
            },
            {
                "topic": "Precisión Semántica",
                "subject": "Razonamiento Verbal",
                "concept": "La precisión semántica es la aptitud o habilidad lingüística que consiste en elegir y emplear el término más exacto, riguroso y adecuado según el contexto específico de una oración o texto. Su propósito fundamental es garantizar la máxima claridad y fidelidad en la transmisión de una idea, evitando que el receptor caiga en malentendidos, ambigüedades o dobles interpretaciones provocadas por el uso de palabras vagas, genéricas o incorrectas.\n\nDesarrollar una buena precisión semántica implica ir más allá de los términos comunes (palabras 'baúl' como 'cosa', 'hacer' o 'poner') y utilizar el vocabulario especializado que requiere cada campo. Por ejemplo, en el ámbito jurídico o médico, no es lo mismo 'hacer una operación' que 'realizar una intervención quirúrgica' o 'ejecutar un procedimiento quirúrgico'. Seleccionar la palabra idónea enriquece el discurso y otorga rigor técnico al lenguaje hablado o escrito.",
                "image": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=precision+semantica",
                "exercises": [
                    {
                        "problem": "Complete la oración con el término más preciso:\n\n'El tribunal dictó una _______ histórica que absolvió al acusado'.\n\na) opinión\nb) sentencia\nc) idea\nd) carta",
                        "solution": "1. Analizamos el contexto jurídico: un tribunal emite una decisión oficial que pone fin a un juicio.\n2. La palabra precisa y formal para este acto legal es 'sentencia'.\n3. La opción correcta es la b)."
                    },
                    {
                        "problem": "Complete con precisión semántica:\n\n'El médico procedió a _______ la herida para detener el sangrado'.\n\na) tapar\nb) curar\nc) cauterizar\nd) amarrar",
                        "solution": "1. El contexto habla de detener el sangrado de una herida mediante un procedimiento médico específico.\n2. Cauterizar (quemar una herida con calor o agentes químicos) es la palabra técnica y más precisa para esta acción médica.\n3. La opción correcta es la c)."
                    }
                ]
            },
            {
                "topic": "Sinónimos",
                "subject": "Razonamiento Verbal",
                "concept": "Los sinónimos son palabras o expresiones que pertenecen a la misma categoría gramatical y presentan formas de escritura y pronunciación diferentes, pero poseen significados iguales, equivalentes o sumamente similares entre sí. Su uso es un recurso fundamental en la redacción de textos de cualquier tipo, ya que permite evitar la repetición monótona de vocablos, facilitando una mayor riqueza expresiva y fluidez de lectura sin alterar el mensaje original del escrito.\n\nEs importante diferenciar entre la sinonimia absoluta (cuando dos términos significan exactamente lo mismo en cualquier circunstancia, como 'abecedario' y 'alfabeto') y la sinonimia conceptual o de contexto (donde la equivalencia depende de la situación, como 'quebrar' y 'romper', ya que se puede romper un vidrio o quebrar una pierna, pero no siempre son intercambiables). Comprender estas sutiles variaciones semánticas ayuda a elegir la palabra adecuada para cada propósito comunicativo.",
                "image": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=sinonimos",
                "exercises": [
                    {
                        "problem": "Determine el sinónimo de la palabra 'BENEVOLENTE':\n\na) Cruel\nb) Indiferente\nc) Bondadoso\nd) Egoísta",
                        "solution": "1. El término 'benevolente' se refiere a alguien que tiene buena voluntad, afecto o simpatía hacia los demás.\n2. Por lo tanto, su sinónimo directo es 'bondadoso'.\n3. La respuesta correcta es la c)."
                    },
                    {
                        "problem": "Identifique el sinónimo de la palabra 'CONCISO':\n\na) Extenso\nb) Breve\nc) Detallado\nd) Confuso",
                        "solution": "1. Algo 'conciso' es aquello que expresa las ideas con pocas palabras, de manera directa y resumida.\n2. Su sinónimo es 'breve'.\n3. La respuesta correcta es la b)."
                    }
                ]
            },
            {
                "topic": "Porcentajes",
                "subject": "Razonamiento Numérico",
                "concept": "El porcentaje o tanto por ciento es una medida y una herramienta matemática de proporcionalidad que expresa una cantidad determinada como una fracción cuyo denominador es 100. Se representa visualmente con el símbolo '%' y permite realizar comparaciones estandarizadas de datos de diferente magnitud, indicando qué proporción del total (representado siempre por el número 100) corresponde al valor analizado en un contexto específico.\n\nCalcular porcentajes es fundamental en la resolución de problemas cotidianos de razonamiento numérico, financieros y de estadística, tales como la aplicación de descuentos comerciales, el cálculo de recargos e impuestos (como el IVA), o el análisis de tasas de crecimiento demográfico y variaciones porcentuales. Su manejo requiere soltura al convertir porcentajes a su forma decimal (por ejemplo, 10% equivale a 0.10) o de fracción (1/10) para agilizar las operaciones aritméticas de multiplicación y división.",
                "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=porcentajes+matematicas",
                "exercises": [
                    {
                        "problem": "¿Cuál es el 15% de 200?\n\na) 15\nb) 20\nc) 30\nd) 40",
                        "solution": "1. Para calcular el 15% de 200, multiplicamos el número por la fracción del porcentaje: 200 * (15/100).\n2. Simplificamos: 200 * 0.15 = 30.\n3. La opción correcta es la c)."
                    },
                    {
                        "problem": "Un abrigo cuesta $120 y tiene un descuento del 20%. ¿Cuánto costará con la rebaja?\n\na) $96\nb) $100\nc) $80\nd) $104",
                        "solution": "1. Calculamos el monto del descuento: 20% de 120 = 120 * 0.20 = $24.\n2. Restamos el descuento al valor original: 120 - 24 = $96.\n3. La opción correcta es la a)."
                    }
                ]
            },
            {
                "topic": "Reglas de tres simples",
                "subject": "Razonamiento Numérico",
                "concept": "La regla de tres simple es un procedimiento matemático e intuitivo de resolución de problemas que permite encontrar el valor de un cuarto elemento desconocido a partir del análisis y la comparación de tres valores o magnitudes que guardan una relación de proporcionalidad conocida. Es una de las herramientas de cálculo práctico más antiguas y universales en el razonamiento matemático, siendo sumamente útil tanto en el aula como en situaciones cotidianas de escalas, recetas o presupuestos.\n\nDependiendo del tipo de proporcionalidad que compartan las variables, la regla de tres puede clasificarse en: regla de tres directa (cuando las magnitudes se mueven en la misma dirección; por ejemplo, si compro más manzanas, el precio total a pagar aumentará proporcionalmente) y regla de tres inversa (cuando las magnitudes varían de forma opuesta; por ejemplo, a mayor cantidad de pintores realizando un trabajo, menos horas se requerirán para completarlo). Plantear correctamente la ecuación de igualdad es clave para resolver con éxito.",
                "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=regla+de+tres+simple",
                "exercises": [
                    {
                        "problem": "Si 4 libretas cuestan $8, ¿cuánto costarán 10 libretas del mismo tipo?\n\na) $15\nb) $20\nc) $12\nd) $18",
                        "solution": "1. Como es proporcionalidad directa (a más libretas, mayor costo), planteamos la regla de tres: 4 -> 8 y 10 -> x.\n2. Multiplicamos cruzado: x = (10 * 8) / 4 = 80 / 4 = 20.\n3. La respuesta correcta es la b)."
                    },
                    {
                        "problem": "Si 3 pintores tardan 12 horas en pintar una casa, ¿cuánto tiempo tardarán 9 pintores en hacer el mismo trabajo al mismo ritmo?\n\na) 4 horas\nb) 6 horas\nc) 8 horas\nd) 3 horas",
                        "solution": "1. Es una regla de tres inversa porque a más pintores, menos horas tardarán.\n2. Planteamos la relación: 3 pintores -> 12 horas; 9 pintores -> x horas.\n3. Multiplicamos en línea: x = (3 * 12) / 9 = 36 / 9 = 4 horas.\n4. La respuesta correcta es la a)."
                    }
                ]
            }
        ],
        "Domingo": [
            {
                "topic": "La referenciación bibliográfica",
                "subject": "Lengua y Literatura",
                "concept": "La referenciación bibliográfica es el proceso académico normado mediante el cual se registra y detalla de manera estructurada y formal la procedencia de la información, citas o ideas de otros autores que han sido incorporadas a lo largo de un trabajo escrito. Al proporcionar los datos exactos del documento original (como autor, año, título, editorial o enlace digital), se facilita al lector la verificación de la veracidad del contenido redactado y se otorga reconocimiento formal a la propiedad intelectual, constituyendo un pilar fundamental de la honestidad académica.\n\nExisten múltiples estilos estandarizados de referenciación a nivel internacional, entre los cuales destacan el formato de las normas APA (muy común en ciencias sociales y educación), el formato Chicago y el formato MLA para humanidades. Omitir este proceso o realizarlo de manera incorrecta en trabajos académicos de investigación o monográficos constituye una falta grave conocida como plagio, lo cual puede acarrear sanciones de índole legal o académica debido a la apropiación no autorizada de ideas.",
                "image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=la+referenciacion+bibliografica+normas+apa",
                "exercises": []
            },
            {
                "topic": "Contradicciones y ambigüedades",
                "subject": "Lengua y Literatura",
                "concept": "Las contradicciones y las ambigüedades son vicios de redacción y problemas de coherencia semántica que afectan gravemente la claridad, precisión y legibilidad de cualquier tipo de texto. Una contradicción textual surge cuando el autor plantea dos o más afirmaciones o argumentos que se oponen lógicamente y se niegan de manera absoluta entre sí dentro del mismo escrito, lo que anula la validez del razonamiento y desorienta por completo al lector sobre el verdadero mensaje o postura defendida.\n\nPor otro lado, la ambigüedad (también conocida como anfibología) se produce cuando una palabra, frase u oración completa presenta una estructura defectuosa o un significado vago que permite comprender o interpretar la información de dos o más formas totalmente diferentes. Esto suele ocurrir por una colocación incorrecta de los signos de puntuación, el uso de pronombres confusos o la mala ordenación de las palabras (por ejemplo, 'Se venden cunas para bebés de madera'). Evitar ambos problemas es crucial para redactar informes y documentos científicos fiables.",
                "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=contradicciones+y+ambiguedades+en+un+texto",
                "exercises": []
            },
            {
                "topic": "La homonimia, polisemia y paronimia",
                "subject": "Lengua y Literatura",
                "concept": "La homonimia, la polisemia y la paronimia son fenómenos y relaciones semánticas fundamentales de la lingüística que describen las coincidencias de pronunciación, escritura o significado entre diferentes vocablos de nuestro idioma. La homonimia agrupa palabras que tienen un origen histórico diferente pero que por evolución fonética se escriben o suenan igual, clasificándose en homógrafas (se escriben igual, como 'banco' de sentarse y de dinero) y homófonas (suenan igual pero se escriben diferente, como 'tubo' y 'tuvo').\n\nEn cambio, la polisemia ocurre cuando un único vocablo de origen común posee múltiples acepciones o significados distintos, los cuales mantienen alguna relación de semejanza o conexión conceptual entre sí (como la 'hoja' de una planta y la 'hoja' de un cuaderno de papel). Por último, la paronimia se presenta entre palabras que tienen una ortografía y sonido muy parecido pero significan cosas totalmente diferentes (como 'actitud' y 'aptitud' o 'afecto' y 'efecto'), lo cual suele generar constantes errores y confusiones en la comunicación escrita.",
                "image": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=homonimia+polisemia+paronimia",
                "exercises": []
            },
            {
                "topic": "El Imperio romano",
                "subject": "Historia",
                "concept": "El Imperio romano representa la tercera y definitiva fase histórica de la antigua Roma, abarcando desde el nombramiento de Octavio Augusto como primer emperador en el año 27 a.C. hasta la caída definitiva de su mitad occidental en el 476 d.C. (la mitad oriental perduraría como el Imperio Bizantino hasta 1453). A diferencia del período republicano anterior, caracterizado por el reparto institucional del poder, el Imperio centralizó toda la autoridad civil, militar y religiosa en la figura autocrática del emperador, quien gobernaba por encima de las antiguas magistraturas y del propio Senado.\n\nDurante los siglos I y II d.C., el Imperio experimentó la Pax Romana, una etapa de estabilidad interna, desarrollo comercial, florecimiento de grandes obras de ingeniería civil y máxima expansión territorial, controlando las tierras que rodeaban al mar Mediterráneo al que llamaban Mare Nostrum. Sin embargo, a partir del siglo III d.C., el Imperio enfrentó graves crisis políticas, presiones de invasores bárbaros germánicos en sus fronteras y problemas económicos que obligaron a dividir el territorio en dos partes independientes antes del colapso del lado occidental.",
                "image": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=el+imperio+romano+resumen",
                "exercises": []
            },
            {
                "topic": "El legado cultural de Roma",
                "subject": "Historia",
                "concept": "El legado cultural de Roma representa el inmenso y duradero conjunto de aportaciones de la civilización romana que sentaron las bases de la cultura, la organización jurídica y el desarrollo social de la civilización occidental actual. El aporte más trascendental es, sin duda, el Derecho Romano, un cuerpo de leyes y jurisprudencia que estableció principios fundamentales de justicia civil e igualdad ciudadana que continúan siendo la base de los sistemas legales y códigos civiles de la gran mayoría de los países modernos.\n\nAsimismo, el idioma latín vulgar, hablado a lo largo de las provincias imperiales, evolucionó con el paso de los siglos para dar origen a las lenguas romances que hoy hablan millones de personas, como el español, el portugués, el francés y el italiano. Este rico legado se complementa con el alfabeto latino, los números romanos, y espectaculares obras de arquitectura e ingeniería civil como la invención del hormigón, el uso de arcos y bóvedas en anfiteatros, acueductos, termas públicas y calzadas que facilitaron la comunicación en todo el continente.",
                "image": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=el+legado+cultural+de+roma",
                "exercises": []
            },
            {
                "topic": "El cristianismo",
                "subject": "Historia",
                "concept": "El cristianismo es una religión monoteísta surgida históricamente durante el siglo I d.C. en la provincia romana de Judea (Oriente Próximo), fundamentada en la vida, enseñanzas y resurrección de Jesús de Nazaret. Durante sus primeros tres siglos, la doctrina cristiana fue declarada ilegal por los emperadores debido a su rechazo a adorar al soberano del Imperio y a los dioses paganos tradicionales, lo que obligó a sus seguidores a practicar su fe clandestinamente en catacumbas y enfrentar sangrientas persecuciones y martirios.\n\nEste panorama cambió radicalmente en el año 313 d.C. con la proclamación del Edicto de Milán por parte del emperador Constantino I el Grande, el cual garantizó la tolerancia y libertad de culto religiosa para los cristianos. Posteriormente, en el 380 d.C., mediante el Edicto de Tesalónica promulgado por el emperador Teodosio, el cristianismo niceno se convirtió en la religión oficial, obligatoria y exclusiva de todo el Imperio Romano, transformando el desarrollo cultural y espiritual de Europa.",
                "image": "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=el+cristianismo+en+el+imperio+romano",
                "exercises": []
            },
            {
                "topic": "Antónimos",
                "subject": "Razonamiento Verbal",
                "concept": "Los antónimos son palabras que pertenecen a la misma categoría gramatical y presentan significados opuestos, contrarios o inversos entre sí, tales como 'luz' y 'oscuridad' o 'subir' y 'bajar'. Su estudio y uso habitual en la lengua escrita es fundamental para contrastar ideas de manera contundente, enriquecer el léxico y aportar precisión descriptiva a las redacciones sin caer en repeticiones.\n\nSe pueden clasificar los antónimos en diferentes tipos de acuerdo a su naturaleza semántica: antónimos graduales (existe una escala intermedia entre ellos, como 'caliente' y 'frío', con temperaturas templadas en medio), antónimos complementarios (la presencia de uno elimina absolutamente la posibilidad del otro, como 'vivo' y 'muerto' o 'aprobado' y 'reprobado'), y antónimos recíprocos (donde un término implica necesariamente la existencia del otro, como 'comprar' y 'vender' o 'dar' y 'recibir').",
                "image": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=antonimos+ejemplos",
                "exercises": [
                    {
                        "problem": "Determine el antónimo de la palabra 'EFÍMERO':\n\na) Pasajero\nb) Transitorio\nc) Duradero\nd) Corto",
                        "solution": "1. El término 'efímero' se refiere a algo pasajero, que tiene una duración muy breve.\n2. Por lo tanto, lo opuesto de efímero es algo que permanece en el tiempo, es decir, 'duradero'.\n3. La respuesta correcta es la c)."
                    },
                    {
                        "problem": "Identifique el antónimo de 'GÉLIDO':\n\na) Frío\nb) Caluroso\nc) Helado\nd) Húmedo",
                        "solution": "1. 'Gélido' describe algo extremadamente frío o helado.\n2. El antónimo o significado opuesto exacto es 'caluroso'.\n3. La respuesta correcta es la b)."
                    }
                ]
            },
            {
                "topic": "Completamiento de oraciones",
                "subject": "Razonamiento Verbal",
                "concept": "El completamiento de oraciones es un tipo de ejercicio de razonamiento verbal y lógica lingüística que evalúa la capacidad de comprender el sentido global de una frase y determinar la palabra o conjunto de palabras adecuadas que le otorgan coherencia y concordancia gramatical. Para resolver estos problemas con éxito, no basta con identificar que los términos suenen bien o encajen de forma individual, sino que se debe analizar el contexto lógico y sintáctico de todo el enunciado.\n\nAl abordar estos cuestionamientos, es vital aplicar tres criterios de resolución indispensables: la concordancia gramatical (coincidencia de género, número, persona o tiempo verbal), la coherencia lógica (que la relación causa-efecto o de oposición marcada por los conectores tenga sentido real) y la precisión semántica (elegir el término más formal y exacto acorde al registro lingüístico de la oración). Estos ejercicios fortalecen la fluidez de lectura y la precisión expresiva del estudiante.",
                "image": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=completamiento+de+oraciones+ejercicios",
                "exercises": [
                    {
                        "problem": "Complete la oración:\n\n'El director mostró un tono _______ que _______ a todo el personal de la oficina.'\n\na) alegre / entristeció\nb) enérgico / motivó\nc) bajo / asustó\nd) confuso / aclaró",
                        "solution": "1. Analizamos la coherencia y relación lógica de causa-efecto en la oración.\n2. La opción b) 'enérgico / motivó' mantiene la armonía lógica: un tono con energía produce motivación en el personal.\n3. Las demás alternativas presentan contradicciones de sentido (como alegre/entristeció).\n4. La respuesta correcta es la b)."
                    },
                    {
                        "problem": "Complete la oración:\n\n'A pesar del _______ tráfico, el conductor logró llegar _______ a la conferencia.'\n\na) poco / tarde\nb) nulo / rápido\nc) pesado / a tiempo\nd) veloz / temprano",
                        "solution": "1. El conector 'A pesar de' introduce una condición adversativa (contraste entre dificultad y logro).\n2. El tráfico pesado suele causar retrasos, pero el conductor logró lo contrario: llegar 'a tiempo'.\n3. Por lo tanto, la opción c) 'pesado / a tiempo' completa coherentemente la idea.\n4. La respuesta correcta es la c)."
                    }
                ]
            },
            {
                "topic": "Conjuntos",
                "subject": "Razonamiento Numérico",
                "concept": "Un conjunto es una colección y agrupación abstracta de elementos u objetos bien definidos (que pueden ser números, letras, personas o figuras geométricas) que comparten una o más características matemáticas, propiedades o criterios comunes. La teoría de conjuntos es una rama fundacional del razonamiento numérico y algebraico, permitiendo estructurar los diferentes sistemas numéricos y modelar una infinidad de problemas matemáticos del mundo real.\n\nLas operaciones principales con conjuntos incluyen la unión (A ∪ B, que junta todos los elementos de ambos grupos), la intersección (A ∩ B, que extrae únicamente los elementos compartidos que se repiten en ambos), la diferencia (A - B, que identifica los elementos de A que no pertenecen a B) y el complemento (elementos fuera del conjunto dentro de un universo). Además, es fundamental diferenciar entre un subconjunto (cuando un conjunto pequeño está completamente contenido dentro de otro más grande) y un superconjunto.",
                "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=teoria+de+conjuntos+matematicas",
                "exercises": [
                    {
                        "problem": "Si A = {1, 3, 5} y B = {3, 5, 7}, halle la intersección A ∩ B:\n\na) {1, 7}\nb) {3, 5}\nc) {1, 3, 5, 7}\nd) {3}",
                        "solution": "1. La intersección consiste en identificar los elementos que están en ambos conjuntos simultáneamente.\n2. Al comparar A y B, vemos que los números 3 y 5 se repiten en ambos.\n3. Por lo tanto, A ∩ B = {3, 5}.\n4. La opción correcta es la b)."
                    },
                    {
                        "problem": "En un grupo de 20 personas, 12 practican fútbol y 10 practican baloncesto. Si todos practican al menos un deporte, ¿cuántos practican ambos?\n\na) 2\nb) 4\nc) 6\nd) 8",
                        "solution": "1. Sumamos las personas de fútbol y baloncesto: 12 + 10 = 22.\n2. Restamos el total de personas en el grupo: 22 - 20 = 2.\n3. Esas 2 personas representan la intersección (los que practican ambos deportes).\n4. La opción correcta es la a)."
                    }
                ]
            },
            {
                "topic": "Fracciones",
                "subject": "Razonamiento Numérico",
                "concept": "Las fracciones son expresiones y representaciones matemáticas que indican una cantidad dividida o particionada entre otra, simbolizando la división de una unidad o un todo en partes exactamente iguales. Se escriben de forma numérica utilizando dos partes separadas por una línea horizontal o diagonal: el numerador (el número superior que indica cuántas partes iguales se han tomado de la unidad) y el denominador (el número inferior que define en cuántas partes iguales se dividió dicha unidad).\n\nEn el ámbito de la aritmética y el razonamiento lógico, el manejo fluido de las fracciones es indispensable para efectuar operaciones de suma, resta, multiplicación y división de números racionales. Es clave dominar conceptos asociados como el mínimo común múltiplo (m.c.m.) para homogeneizar fracciones de denominadores distintos, la simplificación de fracciones dividiendo sus términos por divisores comunes para trabajar con números más sencillos, y el cálculo de fracciones de una cantidad entera.",
                "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=60",
                "videoUrl": "https://www.youtube.com/results?search_query=fracciones+matematicas+desde+cero",
                "exercises": [
                    {
                        "problem": "Calcule y simplifique el resultado de: 2/3 - 1/4\n\na) 1/12\nb) 5/12\nc) 3/7\nd) 1/7",
                        "solution": "1. Hallamos el mínimo común múltiplo (m.c.m.) de los denominadores 3 y 4, el cual es 12.\n2. Convertimos las fracciones: 2/3 = 8/12 y 1/4 = 3/12.\n3. Restamos los numeradores: 8/12 - 3/12 = 5/12.\n4. La opción correcta es la b)."
                    },
                    {
                        "problem": "Si reparto 3/4 de un pastel entre 3 personas en partes iguales, ¿qué fracción del pastel recibe cada una?\n\na) 1/4\nb) 1/3\nc) 1/2\nd) 3/12",
                        "solution": "1. Dividimos la fracción original por el número de personas: (3/4) / 3.\n2. Esto equivale a multiplicar (3/4) * (1/3) = 3/12.\n3. Al simplificar dividiendo entre 3 arriba y abajo, obtenemos 1/4.\n4. La respuesta correcta es la a)."
                    }
                ]
            }
        ]
    },
    "Semana 2": {
    "Lunes": [
        {
            "topic": "Signos de puntuación",
            "subject": "Lengua y Literatura",
            "concept": "Los signos de puntuación son herramientas gráficas indispensables en la escritura que permiten estructurar y dar sentido a los textos. Facilitan la lectura y la comprensión al marcar las pausas y la entonación necesarias al hablar. Entre los más comunes están la coma (para pausas breves y enumeraciones), el punto (seguido, aparte y final, para delimitar oraciones y párrafos), el punto y coma (para pausas intermedias), los dos puntos (para introducir explicaciones o citas) y los signos de interrogación y exclamación (que otorgan una entonación especial). Sin ellos, los textos perderían coherencia y darían pie a malentendidos en la interpretación del mensaje.",
            "image": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=signos+de+puntuación",
            "exercises": []
        },
        {
            "topic": "El resumen",
            "subject": "Lengua y Literatura",
            "concept": "El resumen es un documento breve y conciso en el que se sintetizan las ideas principales de un texto más extenso, manteniendo el sentido y la objetividad del autor original. Su propósito principal es facilitar la comprensión rápida del contenido esencial sin necesidad de leer la obra completa. Para elaborar un buen resumen, es fundamental realizar una lectura atenta, subrayar o identificar las ideas clave, descartar información secundaria o redundante y redactar el nuevo texto con palabras propias (evitando opiniones personales). La objetividad, brevedad, claridad y precisión son sus características esenciales.",
            "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=el+resumen",
            "exercises": []
        },
        {
            "topic": "El párrafo",
            "subject": "Lengua y Literatura",
            "concept": "El párrafo es la unidad organizativa y visual de un texto escrito que desarrolla una idea principal o un aspecto particular del tema general. Comienza siempre con mayúscula y sangría opcional, y finaliza obligatoriamente con un punto y aparte para dar paso al siguiente bloque de texto. Estructuralmente, se compone de una oración principal (que contiene la idea central) y varias oraciones secundarias (que explican, ejemplifican o amplían la idea principal). Un párrafo bien construido posee coherencia (conexión lógica de las ideas) y cohesión (uso adecuado de conectores), lo que guía al lector a través de una progresión fluida de la lectura.",
            "image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=el+párrafo",
            "exercises": []
        },
        {
            "topic": "La entrevista",
            "subject": "Lengua y Literatura",
            "concept": "La entrevista es una técnica de comunicación orientada a obtener información de un interlocutor mediante un diálogo planificado y estructurado. En este proceso participan el entrevistador (quien diseña el guion, formula las preguntas y conduce el ritmo de la conversación) y el entrevistado (quien responde y comparte sus conocimientos, experiencias o posturas). Las entrevistas pueden ser estructuradas (basadas en un guion cerrado preestablecido), semiestructuradas (permiten flexibilidad e improvisación controlada) o libres. Es una herramienta clave en el periodismo, la investigación científica, los procesos de selección laboral y la psicología clínica.",
            "image": "https://images.unsplash.com/photo-1521791136064-7986c2959443?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=la+entrevista",
            "exercises": []
        },
        {
            "topic": "El viejo Continente",
            "subject": "Historia",
            "concept": "El término 'Viejo Continente' (o Viejo Mundo) es una denominación histórica y geográfica utilizada para referirse a Europa, y por extensión a la masa terrestre compartida con Asia y África. Esta etiqueta surgió en el contexto europeo tras la llegada de Cristóbal Colón a tierras americanas a finales del siglo XV, las cuales pasaron a llamarse 'Nuevo Mundo'. Históricamente, Europa se considera la cuna del pensamiento occidental, el derecho moderno, el renacimiento y las revoluciones industrial y científica, ejerciendo una influencia determinante sobre el desarrollo de las civilizaciones globales a lo largo de los últimos siglos.",
            "image": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=el+viejo+continente",
            "exercises": []
        },
        {
            "topic": "Evolución y civilización del hombre",
            "subject": "Historia",
            "concept": "La evolución y civilización del hombre abarca el fascinante proceso biológico e histórico mediante el cual los homínidos se transformaron y agruparon en sociedades complejas. Este camino inicia con el proceso de hominización, donde especies como el Australopithecus y el Homo erectus (clave por el control del fuego) se adaptaron al medio ambiente, culminando en la aparición del Homo sapiens. Durante el Paleolítico, los humanos vivían de forma nómada como cazadores y recolectores. Posteriormente, la gran Revolución Neolítica introdujo la agricultura y la domesticación de animales, promoviendo el sedentarismo, el crecimiento de aldeas, la división del trabajo y el surgimiento de las primeras civilizaciones con escritura y complejas estructuras de organización social.",
            "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=evolución+y+civilización+del+hombre",
            "exercises": []
        },
        {
            "topic": "Interpretación de refranes",
            "subject": "Razonamiento Verbal",
            "concept": "La interpretación de refranes consiste en descifrar el mensaje moral, didáctico o figurado oculto en estas sentencias populares de transmisión oral. Los refranes son parte de la sabiduría colectiva de un pueblo y reflejan experiencias y valores culturales acumulados a lo largo de generaciones. Comprenderlos requiere ir más allá de la lectura literal de sus palabras para conectar su metáfora con situaciones reales de la vida cotidiana. Por ejemplo, refranes como 'A palabras necias, oídos sordos' nos invitan a ignorar las críticas destructivas, mientras que 'No por mucho madrugar amanece más temprano' enseña sobre la paciencia y el respeto al curso natural de las cosas.",
            "image": "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=interpretación+de+refranes",
            "exercises": [
                {
                    "problem": "¿Qué significa el dicho popular \"A palabras necias, oídos sordos\"?\n\na) Que las personas sordas no pueden escuchar palabras feas.\nb) Que debemos ignorar los insultos, críticas sin fundamento o comentarios malintencionados.\nc) Que hay que gritar para que nos entiendan.\nd) Que debemos taparnos las orejas cuando alguien cuenta un secreto.",
                    "solution": "La respuesta correcta es la b) porque Que debemos ignorar los insultos, críticas sin fundamento o comentarios malintencionados."
                },
                {
                    "problem": "¿Cuál es la moraleja de \"No por mucho madrugar amanece más temprano\"?\n\na) Que hay que dormir hasta el mediodía para tener buena salud.\nb) Que despertarse temprano es malo para la vista.\nc) Que algunos procesos llevan su tiempo natural y apresurarse o desesperarse no hará que las cosas sucedan antes.\nd) Que el sol sale a distintas horas todos los días.",
                    "solution": "La respuesta correcta es la c) porque Que algunos procesos llevan su tiempo natural y apresurarse o desesperarse no hará que las cosas sucedan antes."
                }
            ]
        },
        {
            "topic": "Analogías verbales",
            "subject": "Razonamiento Verbal",
            "concept": "Las analogías verbales son ejercicios lógicos que evalúan la capacidad de identificar relaciones de semejanza o equivalencia entre dos pares de conceptos. Resolver una analogía requiere analizar detenidamente los términos propuestos (el par base), determinar el tipo de vínculo que los une (como causa-efecto, parte-todo, sinonimia, objeto-función o sujeto-lugar) y aplicar esa misma lógica para encontrar el par equivalente entre las opciones disponibles. Son sumamente valoradas en las pruebas de aptitud académica porque miden el razonamiento inductivo, la agilidad mental y la precisión semántica del estudiante.",
            "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=analogías+verbales",
            "exercises": []
        },
        {
            "topic": "Operaciones básicas",
            "subject": "Razonamiento Numérico",
            "concept": "Las operaciones aritméticas básicas (suma, resta, multiplicación y división) constituyen los cimientos de la matemática y son fundamentales para resolver cualquier problema numérico de la vida diaria y escolar. La suma combina cantidades; la resta determina la diferencia entre ellas; la multiplicación abrevia sumas del mismo número; y la división reparte un todo en partes equivalentes. Al realizar problemas que combinen varias de estas operaciones, es indispensable aplicar la jerarquía matemática o prioridad de operaciones (PEMDAS: resolver primero paréntesis, luego multiplicaciones y divisiones de izquierda a derecha, y por último sumas y restas), evitando errores de cálculo.",
            "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=operaciones+básicas",
            "exercises": [
                {
                    "problem": "Resuelve respetando la jerarquía matemática: 12+8×2=\n\na) 40\nb) 28\nc) 20\nd) 36",
                    "solution": "Para resolver esto, primero hacemos la multiplicación porque tiene prioridad sobre la suma. Multiplicamos 8 x 2 = 16. Luego le sumamos los 12 iniciales, dándonos 28"
                },
                {
                    "problem": "Resuelve: (15−5)/2+4=\n\na) 9\nb) 7\nc) 14\nd) 5",
                    "solution": "Para resolver esto, los paréntesis mandan. Primero restamos 15 - 5 = 10. A ese 10 lo dividimos entre 2, lo que da 5. Finalmente, le sumamos los 4, y tenemos 9"
                }
            ]
        },
        {
            "topic": "Probabilidad",
            "subject": "Razonamiento Numérico",
            "concept": "La probabilidad es la rama de las matemáticas que mide cuantitativamente la posibilidad de que ocurra un suceso aleatorio (bajo la influencia del azar). Su cálculo básico se expresa mediante la Regla de Laplace, que define la probabilidad como la fracción entre el número de casos favorables y el número total de casos posibles. Este resultado se puede representar como una fracción, un número decimal entre 0 y 1, o un porcentaje del 0% (evento imposible) al 100% (evento seguro). Su estudio es fundamental para la toma de decisiones, la estadística y el análisis de juegos de azar clásicos como el lanzamiento de monedas, dados o la extracción de cartas.",
            "image": "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=probabilidad",
            "exercises": [
                {
                    "problem": "Si lanzas un dado estándar (de 6 caras), ¿cuál es la probabilidad de sacar un número impar (1, 3 o 5)?\n\na) 1/6\nb) 2/6\nc) 3/6 (o 1/2)\nd) 4/6",
                    "solution": "Para resolver esto, contamos los casos que nos sirven: los impares son el 1, el 3 y el 5 (son 3 casos a favor). Como el dado tiene 6 casos totales, la fracción es 3/6, que simplificando es 1/2"
                },
                {
                    "problem": "En una caja hay 4 pelotas rojas y 6 pelotas azules. Si sacas una pelota sin mirar, ¿cuál es la probabilidad de que sea roja?\n\na) 4/10 (o 2/5)\nb) 6/10\nc) 1/4\nd) 1/10",
                    "solution": "Para resolver esto, sumamos todas las pelotas de la caja: 4 rojas + 6 azules = 10 pelotas en total. Como queremos sacar una roja, y hay 4, la probabilidad es 4 de 10, es decir 4/10"
                }
            ]
        }
    ],
    "Martes": [
        {
            "topic": "La búsqueda de información",
            "subject": "Lengua y Literatura",
            "concept": "Es el proceso sistemático de localizar, seleccionar y organizar datos relevantes provenientes de fuentes confiables (libros, artículos, bases de datos académicas o páginas web verificadas) para resolver una duda o profundizar en un tema de estudio. Exige definir con precisión las palabras clave de la investigación, emplear operadores lógicos o booleanos (como AND, OR y NOT) para delimitar los resultados de manera efectiva y evaluar críticamente la veracidad, el rigor metodológico y la actualidad de cada fuente encontrada. Este análisis de fuentes confiables ayuda a descartar información sesgada o falsa en internet.",
            "image": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=la+búsqueda+de+información",
            "exercises": []
        },
        {
            "topic": "Los textos publicitarios",
            "subject": "Lengua y Literatura",
            "concept": "Son escritos orientados a persuadir, convencer o influir en el receptor para que adquiera un producto, contrate un servicio o adopte una conducta determinada. Para lograr su objetivo, combinan estratégicamente el lenguaje verbal y el no verbal (como tipografías dinámicas, colores contrastantes y recursos icónicos). Además, recurren al uso de eslóganes cortos y memorables que apelan a las emociones, necesidades o aspiraciones profundas del público objetivo, destacando las ventajas y beneficios de lo ofrecido para asegurar que el mensaje perdure en la memoria colectiva.",
            "image": "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=los+textos+publicitarios",
            "exercises": []
        },
        {
            "topic": "La crónica",
            "subject": "Lengua y Literatura",
            "concept": "Es un género híbrido que une el periodismo y la literatura. Consiste en la narración detallada y rigurosamente cronológica de un hecho real o de interés general, relatada por un testigo directo o por un investigador que reconstruye la escena. Su rasgo fundamental es que combina la objetividad informativa propia de la noticia con la subjetividad, el estilo personal y los recursos expresivos del autor. De este modo, la crónica no solo informa sobre lo que ocurrió, sino que recrea la atmósfera del suceso aportando descripciones vívidas, diálogos y comentarios valorativos de la realidad.",
            "image": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=la+crónica",
            "exercises": []
        },
        {
            "topic": "El Renacimiento",
            "subject": "Historia",
            "concept": "Fue un amplio movimiento cultural, artístico y científico que se desarrolló en Europa Occidental (especialmente en ciudades-estado italianas como Florencia) durante los siglos XV y XVI, marcando la transición entre la Edad Media y los inicios de la Edad Moderna. Se caracterizó por el renacer del interés por la cultura, la filosofía y el arte clásico grecorromana, impulsando la corriente del Humanismo (que situaba al ser humano como centro de reflexión, antropocentrismo, rompiendo con el teocentrismo medieval) y promoviendo un esplendor sin precedentes en la pintura, la escultura y la arquitectura.",
            "image": "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=el+renacimiento",
            "exercises": []
        },
        {
            "topic": "Avances científicos y técnicos",
            "subject": "Historia",
            "concept": "Comprenden el conjunto de inventos y descubrimientos desarrollados durante la transición a la Modernidad (siglos XV-XVII) que transformaron radicalmente la sociedad global. Entre los logros más destacados sobresalen la imprenta de tipos móviles de Gutenberg (que permitió la masificación de los libros y el conocimiento), la brújula y el astrolabio (indispensables para los viajes transoceánicos de descubrimiento), el telescopio que reformuló la astronomía y las bases del método científico experimental, lo que sentó los cimientos del progreso tecnológico industrial de los siglos posteriores.",
            "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=avances+científicos+y+técnicos",
            "exercises": []
        },
        {
            "topic": "Selección lógica",
            "subject": "Razonamiento Verbal",
            "concept": "Son ejercicios de aptitud verbal y razonamiento lógico orientados a identificar la característica o el elemento que resulta estrictamente indispensable para la validez de un concepto u oración. A diferencia de otros ejercicios verbales, evalúa la habilidad del estudiante para diferenciar entre propiedades accesorias (secundarias) y propiedades constitutivas u obligatorias para la existencia del término de referencia. Por ejemplo, en el caso del concepto 'libro', las páginas son un elemento esencial, mientras que el prólogo o la portada dura son elementos opcionales.",
            "image": "https://images.unsplash.com/photo-1516087596041-3d75c87e85c1?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=selección+lógica",
            "exercises": [
                {
                    "problem": "Identifique el elemento indispensable para el concepto **LIBRO**.\n\na) Imágenes\nb) Capítulos\nc) Páginas\nd) Prólogo",
                    "solution": "La respuesta correcta es la c) porque Páginas"
                },
                {
                    "problem": "Indique el componente esencial e indispensable para la existencia de un **BOSQUE**.\n\na) Animales\nb) Senderos\nc) Árboles\nd) Guardabosques",
                    "solution": "La respuesta correcta es la c) porque Árboles"
                }
            ]
        },
        {
            "topic": "Término excluido",
            "subject": "Razonamiento Verbal",
            "concept": "Consiste en identificar, dentro de un grupo de vocablos proporcionados, aquella palabra que no guarda relación de significado, afinidad lógica o asociación con las demás. Resolver de manera correcta un de término excluido demanda definir con precisión el campo semántico de cada una de las palabras de la lista para hallar el nexo o la característica común que une a la mayoría de los términos, permitiendo aislar y excluir con total seguridad el elemento discordante que no comparte dicha lógica.",
            "image": "https://images.unsplash.com/photo-1518133680790-398535021118?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=término+excluido",
            "exercises": [
                {
                    "problem": "Identifique el término que no pertenece al campo semántico de **NOBLEZA**.\n\na) Altruismo\nb) Generosidad\nc) Egoísmo\nd) Magnanimidad",
                    "solution": "La respuesta correcta es la c) porque Egoísmo"
                },
                {
                    "problem": "Señale la palabra que se aparta del grupo de **INSTRUMENTOS MUSICALES DE CUERDA**.\n\na) Guitarra\nb) Violín\nc) Flauta\nd) Arpa",
                    "solution": "La respuesta correcta es la c) porque Flauta"
                }
            ]
        },
        {
            "topic": "Proporcionalidad compuesta",
            "subject": "Razonamiento Numérico",
            "concept": "Es una herramienta matemática y aritmética que permite resolver problemas donde intervienen tres o más magnitudes proporcionales (las cuales pueden relacionarse de forma directa o inversa). Su procedimiento básico consiste en comparar de forma individual la magnitud donde se encuentra la incógnita con cada una de las otras magnitudes del problema para establecer si guardan una relación directa o inversa. A partir de este análisis, se plantea una ecuación de razones y proporciones cruzadas que posibilita hallar de manera precisa el valor de la variable incógnita.",
            "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=proporcionalidad+compuesta",
            "exercises": [
                {
                    "problem": "Si 6 tejedores fabrican 30 suéteres en 10 días, ¿cuántos días tardarán 3 tejedores en fabricar 15 suéteres?\n\na) 5 días\nb) 10 días\nc) 15 días\nd) 20 días",
                    "solution": "Para resolver esto, planteamos la relación de proporcionalidad compuesta: a menos tejedores, más días (inversa), y a menos suéteres, menos días (directa). Al operar (10 * 6/3 * 15/30) obtenemos 10 días"
                },
                {
                    "problem": "Si 8 grifos tardan 12 horas en llenar 4 depósitos de agua, ¿cuántas horas tardarán 4 grifos iguales en llenar 2 depósitos?\n\na) 6 horas\nb) 12 horas\nc) 18 horas\nd) 24 horas",
                    "solution": "Para resolver esto, analizamos que a menos grifos, más horas (inversa), y a menos depósitos, menos horas (directa). Al calcular (12 * 8/4 * 2/4) resulta en 12 horas"
                }
            ]
        },
        {
            "topic": "Secuencias lógicas",
            "subject": "Razonamiento Numérico",
            "concept": "Son sucesiones ordenadas de elementos (que pueden ser números, letras, figuras geométricas o representaciones espaciales) que siguen una ley de formación o patrón lógico constante. Para resolverlas de forma exitosa, se requiere realizar un análisis minucioso de la relación entre los elementos consecutivos de la serie para descubrir el patrón subyacente. Dicho patrón puede implicar operaciones matemáticas básicas sucesivas, combinaciones de sumas y multiplicaciones, progresiones complejas, alternancias o giros de orientación en el espacio.",
            "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=secuencias+lógicas",
            "exercises": [
                {
                    "problem": "Determine qué número continúa en la siguiente serie numérica: **3, 6, 12, 24, 48, ...**\n\na) 60\nb) 96\nc) 72\nd) 80",
                    "solution": "Para resolver esto, observamos la secuencia: cada número se multiplica por 2 (3*2=6, 6*2=12, 12*2=24, 24*2=48). El siguiente número es 48*2 = 96"
                },
                {
                    "problem": "¿Cuál es el valor que completa la secuencia: **5, 8, 12, 17, 23, ...**\n\na) 28\nb) 30\nc) 32\nd) 35",
                    "solution": "Para resolver esto, calculamos el incremento entre términos: +3, +4, +5, +6. El siguiente término sumará +7 a 23, dando como resultado 30"
                }
            ]
        }
    ],
    "Miércoles": [
        {
            "topic": "El cómic",
            "subject": "Lengua y Literatura",
            "concept": "Es un medio de comunicación y género narrativo eminentemente visual que relata una historia mediante una secuencia de dibujos e ilustraciones ordenadas (viñetas). Combina de manera inseparable el lenguaje icónico (imágenes y colores) con el lenguaje verbal (los textos colocados en bocadillos, cartelas informativas u onomatopeyas). Se lee siguiendo un orden secuencial lógico (de izquierda a derecha y de arriba a abajo) y destaca por su enorme capacidad para dinamizar la acción narrativa y conectar emocionalmente con el lector a través del dinamismo gráfico.",
            "image": "https://images.unsplash.com/photo-1618519764620-7403abdbfee9?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=el+cómic",
            "exercises": []
        },
        {
            "topic": "El libro",
            "subject": "Lengua y Literatura",
            "concept": "Es una obra impresa, manuscrita o digital, de extensión considerable, que recopila información, textos o imágenes organizados bajo una estructura temática unificada. Ha constituido históricamente el soporte primordial para la transmisión de las artes y el desarrollo del conocimiento científico global. Estructuralmente, se compone de partes internas y externas tradicionales como la portada, el lomo, las solapas, el prólogo, el índice, el cuerpo de la obra y la bibliografía de referencia.",
            "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=el+libro",
            "exercises": []
        },
        {
            "topic": "El texto y sus características",
            "subject": "Lengua y Literatura",
            "concept": "Es cualquier unidad comunicativa coherente y completa de carácter verbal o escrito que se emite con una intención determinada en una situación específica. Para que un conjunto de enunciados sea considerado un texto formal, debe cumplir con tres propiedades básicas esenciales: adecuación (ajustarse al contexto, al canal y al registro lingüístico del receptor), coherencia (unidad temática y ordenación lógica de las ideas) y cohesión (uso adecuado de enlaces, conectores gramaticales y puntuación.",
            "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=el+texto+y+sus+características",
            "exercises": []
        },
        {
            "topic": "Causas de la Revolución francesa",
            "subject": "Historia",
            "concept": "Comprende el conjunto de tensiones económicas, sociales, políticas e ideológicas que desencadenaron la caída de la monarquía absolutista en 1789. Entre las causas principales destacan la quiebra fiscal del Estado francés debido a las guerras y el derroche de la corte, la injusta división de la sociedad estamental (donde la nobleza y el clero evadían impuestos y gozaban de privilegios feudales mientras el Tercer Estado cargaba con todos los tributos) y la influencia crítica de las ideas ilustradas sobre la igualdad.",
            "image": "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=causas+de+la+revolución+francesa",
            "exercises": []
        },
        {
            "topic": "El proceso revolucionario",
            "subject": "Historia",
            "concept": "Abarca el dinámico y convulso transcurso de etapas políticas y sociales de la Revolución Francesa entre los años 1789 y 1799. Este acontecimiento histórico se inició con la autoproclamación de la Asamblea Nacional y la toma de la Bastilla. Posteriormente, transitó por una monarquía constitucional, una fase republicana marcada por la radicalización jacobina y el régimen del Terror bajo Robespierre, el periodo del Directorio y concluyó finalmente con el golpe de Estado del 18 de brumario de Napoleón Bonaparte.",
            "image": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=el+proceso+revolucionario",
            "exercises": []
        },
        {
            "topic": "Ordenar oraciones",
            "subject": "Razonamiento Verbal",
            "concept": "Son ejercicios de razonamiento lingüístico que consisten en reorganizar una serie de enunciados sueltos y desordenados para constituir un texto o párrafo que posea sentido lógico y fluidez gramatical. Su resolución requiere identificar el tema central, reconocer la secuencia temporal y lógica (inicio, nudo y desenlace), y apoyarse de forma crítica en los conectores textuales, la concordancia gramatical y los referentes pronominales que cohesionan la estructura.",
            "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=ordenar+oraciones",
            "exercises": [
                {
                    "problem": "Ordene los siguientes enunciados para formar un texto coherente. I. Sin embargo, su consolidación definitiva se dio con la invención de la imprenta en el siglo XV. II. El libro ha sido el soporte más importante para conservar y transmitir la cultura humana. III. En la antigüedad, los primeros libros se escribían a mano sobre papiro o pergamino.\n\na) II - I - III\nb) II - III - I\nc) III - II - I\nd) I - III - II",
                    "solution": "La respuesta correcta es la b) porque II - III - I"
                },
                {
                    "problem": "Ordene las frases de forma lógica. I. Por último, redacta el nuevo texto con objetividad. II. Para hacer un buen resumen, primero lee con atención el documento original. III. A continuación, subraya las ideas principales descartando los detalles secundarios.\n\na) II - I - III\nb) II - III - I\nc) I - III - II\nd) III - II - I",
                    "solution": "La respuesta correcta es la b) porque II - III - I"
                }
            ]
        },
        {
            "topic": "Comprensión lectora",
            "subject": "Razonamiento Verbal",
            "concept": "Es una competencia cognitiva fundamental que consiste en procesar y entender la información de un texto escrito, captando tanto sus ideas explícitas como sus mensajes implícitos para valorarlos críticamente. Requiere abordar la lectura a tres niveles de profundidad: nivel literal (identificación de datos explícitos del texto), nivel inferencial (deducción y construcción de significados no escritos) y nivel crítico (análisis de la intención, validez de argumentos y postura del autor).",
            "image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=comprensión+lectora",
            "exercises": [
                {
                    "problem": "Lea el texto y responda. *Texto:* \"La Revolución francesa no solo transformó las estructuras de poder en Francia, sino que propagó por toda Europa las ideas de soberanía popular y libertad civil, desafiando el derecho divino de los reyes.\" ¿Cuál es la idea principal del texto?\n\na) Francia era el único país que tenía reyes absolutistas en el siglo XVIII.\nb) El impacto de la Revolución francesa trascendió sus fronteras difundiendo ideales de soberanía popular.\nc) La religión cristiana perdió todo el poder en Europa después del año 1789.\nd) Los reyes europeos apoyaron con agrado las reformas civiles francesas.",
                    "solution": "La respuesta correcta es la b) porque El impacto de la Revolución francesa trascendió sus fronteras difundiendo ideales de soberanía popular."
                },
                {
                    "problem": "Del texto anterior, se puede **inferir** que:\n\na) Antes de la Revolución francesa, el absolutismo justificaba su poder en motivos religiosos (derecho divino).\nb) Europa occidental ya era democrática antes del estallido de 1789.\nc) La soberanía popular era un concepto ampliamente practicado por los reyes.\nd) Francia cerró sus fronteras para evitar que sus ideales se conocieran fuera del país.",
                    "solution": "La respuesta correcta es la a) porque Antes de la Revolución francesa, el absolutismo justificaba su poder en motivos religiosos (derecho divino)."
                }
            ]
        },
        {
            "topic": "Solución de problemas de ecuaciones lineales",
            "subject": "Razonamiento Numérico",
            "concept": "Consiste en la formulación y resolución de problemas prácticos de la vida cotidiana o científica mediante el planteamiento de igualdades algebraicas de primer grado (donde las incógnitas están elevadas a la potencia 1). El proceso demanda definir y asignar variables a los datos desconocidos, traducir las relaciones descritas en el enunciado al lenguaje de las matemáticas y despejar de forma ordenada las incógnitas usando operaciones aritméticas inversas.",
            "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=solución+de+problemas+de+ecuaciones+lineales",
            "exercises": []
        },
        {
            "topic": "Porcentajes",
            "subject": "Razonamiento Numérico",
            "concept": "Es una forma matemática de expresar una cantidad o proporción tomando como base una unidad de 100 partes iguales. Su cálculo se representa con el símbolo '%' y es de vital importancia en el razonamiento numérico para efectuar comparaciones directas, calcular de forma rápida descuentos en el comercio, recargos de impuestos (como el IVA), tasas de interés en operaciones financieras y variaciones de proporciones en estadísticas.",
            "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=porcentajes",
            "exercises": [
                {
                    "problem": "Un abrigo que originalmente costaba $80 tiene un descuento de fin de temporada del 25%. ¿Cuánto se ahorrará el comprador?\n\na) $15\nb) $20\nc) $25\nd) $60",
                    "solution": "Para resolver esto, multiplicamos el valor original del abrigo por el porcentaje en decimal: 80 * 0.25, lo que equivale a ahorrar una cuarta parte, es decir, $20"
                },
                {
                    "problem": "Si una camisa de $40 tiene un descuento del 15%, ¿cuánto pagará el cliente en total tras aplicarse la rebaja?\n\na) $6\nb) $34\nc) $30\nd) $36",
                    "solution": "Para resolver esto, calculamos el 15% de 40: 40 * 0.15 = $6 de descuento. Al restar del precio original de la camisa, el cliente pagará $34"
                }
            ]
        }
    ],
    "Jueves": [
        {
            "topic": "Los organizadores gráficos",
            "subject": "Lengua y Literatura",
            "concept": "Son herramientas de aprendizaje visual que permiten estructurar, resumir e interpretar de manera esquemática la información sustancial de un texto o tema de estudio. Facilitan la comprensión inmediata al organizar las ideas jerárquica y lógicamente en un diagrama gráfico. Entre los tipos más comunes y eficaces se encuentran los mapas conceptuales, los mapas mentales, los cuadros sinópticos con llaves, los diagramas de Venn y las líneas de tiempo cronológicas.",
            "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=los+organizadores+gráficos",
            "exercises": []
        },
        {
            "topic": "El subrayado",
            "subject": "Lengua y Literatura",
            "concept": "Es una técnica activa de lectura y estudio que consiste en trazar líneas o destacar visualmente mediante marcadores de color los vocablos clave, conceptos fundamentales e ideas principales de un texto. Su práctica correcta ayuda a enfocar la concentración durante la lectura y reduce considerablemente el tiempo posterior de repaso y estudio, sirviendo además como el insumo primordial para construir resúmenes o esquemas visuales sintéticos.",
            "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=el+subrayado",
            "exercises": []
        },
        {
            "topic": "El comentario y el editorial",
            "subject": "Lengua y Literatura",
            "concept": "Son géneros periodísticos de opinión muy valorados en la comunicación social. El comentario es un texto analítico firmado por un autor particular que juzga de forma subjetiva y estilizada un suceso de actualidad. El editorial, en cambio, representa la postura e ideología oficial e institucional del medio de comunicación en su conjunto, por lo que suele publicarse sin firma individual y analiza temas de gran relevancia política y social nacional.",
            "image": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=el+comentario+y+el+editorial",
            "exercises": []
        },
        {
            "topic": "Consecuencias de la Revolución francesa",
            "subject": "Historia",
            "concept": "Abarcan los profundos e irreversibles cambios que transformaron las estructuras políticas y sociales en el mundo a partir del estallido de 1789. Entre las principales consecuencias destacan la destrucción final del feudalismo y la monarquía absoluta en Francia, el nacimiento de regímenes constitucionales basados en la soberanía popular, la separación oficial entre la Iglesia y el Estado, la redacción de los derechos del ciudadano y el impulso global de la democracia.",
            "image": "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=consecuencias+de+la+revolución+francesa",
            "exercises": []
        },
        {
            "topic": "La Europa napoleónica",
            "subject": "Historia",
            "concept": "Fue el período histórico (1799-1815) marcado por el liderazgo político y militar de Napoleón Bonaparte en Francia y su expansión territorial mediante campañas militares por toda Europa Continental. A través de su imperio, Napoleón propagó las reformas revolucionarias francesas, suprimió el régimen feudal en los países ocupados y promulgó el Código Civil Napoleónico en 1804, el cual sentó las bases de la legislación moderna mundial.",
            "image": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=la+europa+napoleónica",
            "exercises": []
        },
        {
            "topic": "Concordancia verbal",
            "subject": "Razonamiento Verbal",
            "concept": "Es la regla sintáctica de la gramática que impone la coincidencia obligatoria en número (singular o plural) y persona (primera, segunda o tercera) entre el verbo principal y el núcleo del sujeto en una oración. Respetar la concordancia verbal es de gran importancia para asegurar la claridad lógica del mensaje y la cohesión textual, previniendo errores sintácticos habituales que entorpecen la lectura de un documento escrito.",
            "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=concordancia+verbal",
            "exercises": [
                {
                    "problem": "Identifique la oración que presenta un uso **correcto** de la concordancia gramatical.\n\na) La mayoría de los estudiantes aprobó el examen sin problemas.\nb) El grupo de profesores decidieron suspender la reunión del martes.\nc) Haban muchos libros antiguos sobre el Renacimiento en la biblioteca.\nd) La jauría de perros corrieron detrás del automóvil del vecino.",
                    "solution": "La respuesta correcta es la a) porque La mayoría de los estudiantes aprobó el examen sin problemas."
                },
                {
                    "problem": "Señale la oración que presenta un error de concordancia.\n\na) Cada uno de los participantes recibirá un diploma firmado por el moderador.\nb) La entrada y la salida de los alumnos deben realizarse por puertas separadas.\nc) El equipo de investigadores descubrieron una nueva fuente de información.\nd) Se venden libros usados a muy bajo precio.",
                    "solution": "La respuesta correcta es la c) porque El equipo de investigadores descubrieron una nueva fuente de información."
                }
            ]
        },
        {
            "topic": "Precisión Semántica",
            "subject": "Razonamiento Verbal",
            "concept": "Consiste en el empleo riguroso, adecuado y exacto de los vocablos de acuerdo con su significado preciso dentro de un contexto comunicativo determinado. Esta aptitud evalúa la habilidad del redactor para seleccionar, de un grupo de palabras sinónimas o semánticamente cercanas, aquella que represente con mayor fidelidad la idea que se desea expresar, eliminando ambigüedades, vaguedades y el uso inapropiado de términos.",
            "image": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=precisión+semántica",
            "exercises": [
                {
                    "problem": "Seleccione la palabra adecuada para completar la oración de forma exacta: \"El científico logró _______ la veracidad de su hipótesis tras realizar múltiples experimentos de laboratorio\".\n\na) opinar\nb) corroborar\nc) adivinar\nd) suponer",
                    "solution": "La respuesta correcta es la b) porque corroborar"
                },
                {
                    "problem": "El historiador hizo un análisis muy _______ sobre las causas socioeconómicas que desencadenaron la Revolución francesa, sin omitir ningún detalle relevante.\n\na) superfluo\nb) exhaustivo\nc) somero\nd) rápido",
                    "solution": "La respuesta correcta es la b) porque exhaustivo"
                }
            ]
        },
        {
            "topic": "Reglas de tres simples",
            "subject": "Razonamiento Numérico",
            "concept": "Es un procedimiento matemático fundamental que sirve para calcular de manera ágil el valor de una magnitud desconocida relacionando tres valores conocidos que son proporcionales entre sí. Puede ser de tipo directa (si las magnitudes varían en la misma dirección) o de tipo inversa (si varían en direcciones opuestas), y se resuelve planteando relaciones aritméticas de multiplicación y división entre las magnitudes asociadas.",
            "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=reglas+de+tres+simples",
            "exercises": []
        },
        {
            "topic": "Conjuntos",
            "subject": "Razonamiento Numérico",
            "concept": "Son agrupaciones lógicas de elementos bien definidos que comparten una propiedad o característica matemática en común. Se pueden definir por extensión (listando todos sus elementos) o por comprensión (estableciendo la propiedad común) y se representan gráficamente en diagramas de Venn. Su estudio abarca el análisis de pertenencia, inclusión y operaciones básicas como la unión, la intersección, la diferencia y el complemento.",
            "image": "https://images.unsplash.com/photo-1518133680790-398535021118?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=conjuntos",
            "exercises": [
                {
                    "problem": "Sean los conjuntos A = {1, 3, 5, 7, 9} y B = {3, 6, 9, 12}. Determine el resultado de la intersección A ∩ B.\n\na) {1, 5, 7}\nb) {3, 9}\nc) {1, 3, 5, 6, 7, 9, 12}\nd) {6, 12}",
                    "solution": "Para resolver esto, buscamos los números que forman parte de ambos conjuntos a la misma vez. Al observar los dos grupos vemos que los números que se repiten son el 3 y el 9"
                },
                {
                    "problem": "Si el conjunto M = {a, b, c} y el conjunto N = {b, c, d, e}, determine la unión M ∪ N.\n\na) {b, c}\nb) {a, b, c, d, e}\nc) {a, d, e}\nd) {b, c, d, e}",
                    "solution": "Para resolver esto, reunimos todos los elementos pertenecientes a ambos conjuntos de manera ordenada y sin repetir ninguno, obteniendo la lista {a, b, c, d, e}"
                }
            ]
        }
    ],
    "Viernes": [
        {
            "topic": "La lectura Inferencial",
            "subject": "Lengua y Literatura",
            "concept": "Es el proceso cognitivo avanzado mediante el cual el lector va más allá del nivel de información explícita del texto para deducir e interpretar mensajes implícitos, intenciones del autor o conclusiones lógicas no escritas de forma literal. Requiere que el lector asocie de forma activa los datos explícitos que le brinda el texto con sus conocimientos previos y vivencias personales para formular hipótesis lógicas fundamentadas.",
            "image": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=la+lectura+inferencial",
            "exercises": []
        },
        {
            "topic": "Inducción y Deducción",
            "subject": "Lengua y Literatura",
            "concept": "Son los dos caminos o métodos principales del razonamiento lógico aplicados a la adquisición del conocimiento y al análisis textual. La inducción es el razonamiento que parte de observaciones particulares y datos repetidos para formular una regla o conclusión de carácter general. Por el contrario, la deducción parte de leyes, premisas o axiomas generales para aplicarlos a un caso particular y extraer conclusiones lógicas e indudables.",
            "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=inducción+y+deducción",
            "exercises": []
        },
        {
            "topic": "Técnicas de revisión",
            "subject": "Lengua y Literatura",
            "concept": "Comprenden el conjunto sistemático de estrategias y lecturas analíticas dirigidas a evaluar, corregir y perfeccionar un borrador de texto antes de su publicación definitiva. Su aplicación se enfoca en auditar la ortografía y acentuación de las palabras, corregir fallos en la concordancia gramatical, verificar el uso lógico de conectores para asegurar la cohesión y pulir la coherencia temática del texto completo.",
            "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=técnicas+de+revisión",
            "exercises": []
        },
        {
            "topic": "El mercantilismo",
            "subject": "Historia",
            "concept": "Fue la teoría y práctica económica predominante en los imperios europeos durante los siglos XVI al XVIII (Edad Moderna), caracterizada por un fuerte intervencionismo del Estado absolutista en el comercio. Sostenía que la riqueza y prosperidad de una nación dependían de la acumulación de metales preciosos (oro y plata), de incentivar la producción nacional y de mantener una balanza comercial favorable mediante la restricción de importaciones.",
            "image": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=el+mercantilismo",
            "exercises": []
        },
        {
            "topic": "El capitalismo",
            "subject": "Historia",
            "concept": "Es el sistema económico y social fundado en la propiedad privada de los medios de producción, en la importancia del capital como generador de riqueza y en la libre asignación de recursos a través de la ley de oferta y demanda en un mercado libre. Se consolidó tras la abolición del mercantilismo en los siglos XVIII y XIX impulsado por el progreso industrial, limitando en gran medida la intervención económica directa por parte de los estados.",
            "image": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=el+capitalismo",
            "exercises": []
        },
        {
            "topic": "Sinónimos",
            "subject": "Razonamiento Verbal",
            "concept": "Son palabras con una ortografía y pronunciación distintas pero que comparten un significado equivalente, idéntico o muy cercano dentro de un determinado contexto. Son recursos fundamentales para la riqueza léxica de la redacción, dividiéndose en sinónimos absolutos (intercambiables en toda situación, como 'alfabeto' y 'abecedario') y sinónimos relativos (cuyo intercambio de términos depende del sentido particular del contexto).",
            "image": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=sinónimos",
            "exercises": [
                {
                    "problem": "Identifique el sinónimo de la palabra **EXHAUSTIVO**.\n\na) Somero\nb) Completo\nc) Rápido\nd) Superficial",
                    "solution": "La respuesta correcta es la b) porque Completo"
                },
                {
                    "problem": "Señale el sinónimo de **PERSUADIR**.\n\na) Disuadir\nb) Convencer\nc) Engañar\nd) Obligar",
                    "solution": "La respuesta correcta es la b) porque Convencer"
                }
            ]
        },
        {
            "topic": "Antónimos",
            "subject": "Razonamiento Verbal",
            "concept": "Son vocablos que pertenecen a la misma categoría gramatical pero cuyos significados expresan ideas contrapuestas, opuestas o contrarias entre sí. Son de gran utilidad para el razonamiento verbal y el contraste de conceptos, clasificándose principalmente en antónimos graduales (existe una escala intermedia), complementarios (un término excluye al otro de forma total) y recíprocos (la existencia de uno presupone la del otro).",
            "image": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=antónimos",
            "exercises": [
                {
                    "problem": "Identifique el antónimo directo de **SUBJETIVO**.\n\na) Personal\nb) Objetivo\nc) Subalterno\nd) Teórico",
                    "solution": "La respuesta correcta es la b) porque Objetivo"
                },
                {
                    "problem": "Señale el antónimo de la palabra **NÓMADA**.\n\na) Viajero\nb) Sedentario\nc) Peregrino\nd) Errante",
                    "solution": "La respuesta correcta es la b) porque Sedentario"
                }
            ]
        },
        {
            "topic": "Fracciones",
            "subject": "Razonamiento Numérico",
            "concept": "Representan la división de una cantidad entera o unidad en partes equivalentes, conformada aritméticamente por un numerador (indica las porciones que se toman) y un denominador (indica el total de porciones iguales en las que se dividió el todo). Su comprensión es clave para efectuar operaciones de suma, resta, multiplicación y división de proporciones y para resolver problemas complejos de distribución de partes.",
            "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=fracciones",
            "exercises": [
                {
                    "problem": "Si reparto 3/4 de una pizza equitativamente entre 3 amigos, ¿qué fracción de la pizza entera recibe cada uno?\n\na) 1/3\nb) 1/4\nc) 3/12\nd) 1/2",
                    "solution": "Para resolver esto, dividimos la fracción original por el número de personas: (3/4) / 3 = (3/4) * (1/3) = 3/12. Al simplificar dividiendo entre 3 arriba y abajo, obtenemos 1/4"
                },
                {
                    "problem": "Resuelva la suma de fracciones: 1/2 + 1/4 =\n\na) 2/6\nb) 3/4\nc) 2/4\nd) 1/6",
                    "solution": "Para resolver esto, convertimos 1/2 a cuartos multiplicando por 2 arriba y abajo, dando 2/4. Luego sumamos: 2/4 + 1/4 = 3/4"
                }
            ]
        },
        {
            "topic": "Operaciones básicas",
            "subject": "Razonamiento Numérico",
            "concept": "Son los cálculos aritméticos primordiales de adición, sustracción, multiplicación y división de números enteros, decimales y fraccionarios. Resolver con acierto problemas aritméticos combinados exige respetar rigurosamente la jerarquía de operadores (efectuar primero paréntesis y agrupaciones, después multiplicaciones y divisiones de izquierda a derecha, y al final sumas y restas).",
            "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=60",
            "videoUrl": "https://www.youtube.com/results?search_query=operaciones+básicas",
            "exercises": [
                {
                    "problem": "Resuelva respetando la jerarquía de las operaciones: 20 − 4 × (3 + 1) =\n\na) 64\nb) 4\nc) 16\nd) 12",
                    "solution": "Para resolver esto, resolvemos primero lo que está dentro del paréntesis: 3 + 1 = 4. Luego multiplicamos 4 * 4 = 16. Por último restamos: 20 - 16 = 4"
                },
                {
                    "problem": "Resuelve: 8 + 12 / 2 × 3 =\n\na) 30\nb) 26\nc) 14\nd) 10",
                    "solution": "Para resolver esto, de acuerdo con la jerarquía, primero hacemos la división de izquierda a derecha: 12 / 2 = 6. Luego multiplicamos 6 * 3 = 18. Al final sumamos 8 + 18 = 26"
                }
            ]
        }
    ],
    "Sábado": [],
    "Domingo": []
},
"Semana 3": {
        "Lunes": [], "Martes": [], "Miércoles": [], "Jueves": [], "Viernes": [], "Sábado": [], "Domingo": []
    },
    "Semana 4": {
        "Lunes": [], "Martes": [], "Miércoles": [], "Jueves": [], "Viernes": [], "Sábado": [], "Domingo": []
    }
};
