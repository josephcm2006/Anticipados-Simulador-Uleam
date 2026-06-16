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
                "explanation": "Efímero es algo que dura poco tiempo"
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
                "explanation": "Perspicaz es alguien con agudeza mental"
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
                "explanation": "Lo opuesto a abundante es escaso o poco"
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
                "explanation": "Un erudito es alguien instruido, su opuesto es ignorante"
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
                "explanation": "Lo contrario de mantener algo oculto es revelarlo o mostrarlo"
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
                "explanation": "Se resta 5 de ambos lados: 3x=15. Luego se divide entre 3: x=5"
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
                "explanation": "Se multiplica 150×0.20=30"
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
                "explanation": "Juan = x, Ana = 2x. Entonces x+2x=36→3x=36→x=12"
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
                "explanation": "El 25% de 40 es 10. Se resta el descuento al precio original: 40−10=30"
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
                "explanation": "La ecuación es 0.15x=45. Al despejar x dividiendo 45/0.15, obtenemos 300"
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
