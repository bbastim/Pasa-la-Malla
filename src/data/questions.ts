import { Question } from '../types';

export const questions: Question[] = [
  // --- MALLA POSTULANTE ---
  {
    id: 'post1', malla: 'postulante', course: 'post-historia', difficulty: 'Fácil',
    text: '¿En qué año se fundó el primer Cuerpo de Bomberos en Chile (Valparaíso)?',
    options: ['1851', '1863', '1905', '1810'],
    correctAnswerIndex: 0,
    explanation: 'El Cuerpo de Bomberos de Valparaíso fue fundado en 1851, siendo el primero del país.'
  },
  {
    id: 'post2', malla: 'postulante', course: 'post-historia', difficulty: 'Fácil',
    text: '¿Cuál es el lema institucional de Bomberos?',
    options: ['Valor y Disciplina', 'Constancia y Disciplina', 'Salvar Vidas y Bienes', 'Voluntad y Sacrificio'],
    correctAnswerIndex: 2,
    explanation: 'Aunque cada Compañía tiene su lema, el propósito fundamental es "Salvar Vidas y Bienes".'
  },
  {
    id: 'post3', malla: 'postulante', course: 'post-historia', difficulty: 'Medio',
    text: '¿Qué motivó la creación del Cuerpo de Bomberos de Santiago en 1863?',
    options: ['El terremoto de 1860', 'El incendio de la Iglesia de la Compañía', 'Una ley del gobierno', 'La influencia de bomberos europeos'],
    correctAnswerIndex: 1,
    explanation: 'El trágico incendio de la Iglesia de la Compañía de Jesús en 1863 motivó la fundación del CBS.'
  },
  {
    id: 'post4', malla: 'postulante', course: 'post-epp', difficulty: 'Fácil',
    text: 'El casco estructural protege principalmente contra:',
    options: ['Gases tóxicos', 'Impactos, penetración y calor', 'Radiación nuclear', 'Infecciones biológicas'],
    correctAnswerIndex: 1,
    explanation: 'El casco está diseñado para proteger la cabeza de impactos físicos, objetos punzantes y altas temperaturas.'
  },
  {
    id: 'post5', malla: 'postulante', course: 'post-epp', difficulty: 'Fácil',
    text: '¿Cuál es el número telefónico de emergencia de Bomberos en Chile?',
    options: ['131', '132', '133', '134'],
    correctAnswerIndex: 1,
    explanation: 'El 132 es el número nacional de emergencias para Bomberos.'
  },

  // --- MALLA INICIAL ---
  {
    id: 'i1', malla: 'inicial', course: 'ini-bora', difficulty: 'Fácil',
    text: '¿Cuál es la principal característica del servicio de Bomberos en Chile?',
    options: ['Es un servicio militarizado', 'Es un servicio 100% voluntario y profesional', 'Es un servicio pagado por el Estado', 'Es una empresa privada'],
    correctAnswerIndex: 1,
    explanation: 'Bomberos de Chile se caracteriza por ser una institución voluntaria, gratuita y altamente profesionalizada.'
  },
  {
    id: 'i2', malla: 'inicial', course: 'ini-comunicaciones', difficulty: 'Fácil',
    text: 'Según las claves radiales estándar, ¿qué significa la clave 10-0?',
    options: ['Llamado a comandancia', 'Llamado estructural', 'Llamado de pastizales', 'Llamado a rescate vehicular'],
    correctAnswerIndex: 1,
    explanation: 'La clave 10-0 corresponde a un llamado por fuego estructural.'
  },
  {
    id: 'i3', malla: 'inicial', course: 'ini-comunicaciones', difficulty: 'Fácil',
    text: '¿Qué indica la clave 10-4?',
    options: ['Rescate vehicular', 'Fuego en vehículo', 'Llamado a rescate', 'Emergencia médica'],
    correctAnswerIndex: 0,
    explanation: 'La clave 10-4 se utiliza para despachar a un rescate vehicular.'
  },
  {
    id: 'i4', malla: 'inicial', course: 'ini-fuego', difficulty: 'Medio',
    text: '¿Cuáles son los componentes del tetraedro del fuego?',
    options: ['Calor, Combustible, Oxígeno, Reacción en cadena', 'Calor, Humo, Oxígeno, Fricción', 'Combustible, Comburente, Temperatura, Viento', 'Madera, Plástico, Líquido, Gas'],
    correctAnswerIndex: 0,
    explanation: 'El tetraedro del fuego incluye: Combustible, Oxígeno (comburente), Calor (energía de activación) y Reacción en cadena.'
  },
  {
    id: 'i5', malla: 'inicial', course: 'ini-fuego', difficulty: 'Fácil',
    text: '¿Qué clase de fuego involucra líquidos combustibles e inflamables?',
    options: ['Clase A', 'Clase B', 'Clase C', 'Clase D'],
    correctAnswerIndex: 1,
    explanation: 'Los fuegos Clase B son aquellos que involucran líquidos inflamables y combustibles, gases y grasas.'
  },
  {
    id: 'i6', malla: 'inicial', course: 'ini-fuego', difficulty: 'Medio',
    text: '¿Qué método de extinción actúa eliminando el oxígeno?',
    options: ['Enfriamiento', 'Sofocación', 'Segregación', 'Inhibición'],
    correctAnswerIndex: 1,
    explanation: 'La sofocación consiste en desplazar o eliminar el oxígeno del proceso de combustión.'
  },
  {
    id: 'i7', malla: 'inicial', course: 'ini-epp', difficulty: 'Fácil',
    text: '¿Qué significa la sigla ERA?',
    options: ['Equipo de Rescate Acuático', 'Equipo de Respiración Autónomo', 'Elemento de Riesgo Alto', 'Extintor de Rápida Acción'],
    correctAnswerIndex: 1,
    explanation: 'ERA significa Equipo de Respiración Autónomo, vital para la protección respiratoria.'
  },
  {
    id: 'i8', malla: 'inicial', course: 'ini-epp', difficulty: 'Medio',
    text: '¿Cuál es la función principal de la barrera de humedad en el uniforme estructural?',
    options: ['Evitar que el bombero transpire', 'Proteger contra cortes y desgarros', 'Evitar el paso de agua y fluidos hacia el cuerpo', 'Reflejar el calor radiante'],
    correctAnswerIndex: 2,
    explanation: 'La barrera de humedad impide que el agua, químicos y otros fluidos lleguen a la piel del bombero.'
  },
  {
    id: 'i9', malla: 'inicial', course: 'ini-rcp', difficulty: 'Fácil',
    text: 'En la evaluación primaria de un paciente (X-A-B-C-D-E), ¿qué evalúa la letra "A"?',
    options: ['Alerta', 'Vía Aérea (Airway)', 'Ambulancia', 'Alergias'],
    correctAnswerIndex: 1,
    explanation: 'La "A" corresponde a la evaluación y manejo de la Vía Aérea con control cervical.'
  },
  {
    id: 'i10', malla: 'inicial', course: 'ini-rcp', difficulty: 'Medio',
    text: '¿Cuál es la relación de compresiones y ventilaciones en RCP para un adulto con un solo rescatador?',
    options: ['15:2', '30:2', '30:1', '100:0'],
    correctAnswerIndex: 1,
    explanation: 'La relación estándar de RCP para adultos es de 30 compresiones por 2 ventilaciones.'
  },
  {
    id: 'i11', malla: 'inicial', course: 'ini-comportamiento', difficulty: 'Medio',
    text: 'En una emergencia, ¿cuál es una reacción psicológica común en las víctimas?',
    options: ['Alegría extrema', 'Negación o shock', 'Hambre', 'Sueño profundo'],
    correctAnswerIndex: 1,
    explanation: 'La negación y el shock son mecanismos de defensa comunes ante situaciones traumáticas o de alto estrés.'
  },
  {
    id: 'i12', malla: 'inicial', course: 'ini-comunicaciones', difficulty: 'Difícil',
    text: 'Si el operador indica "Clave 6-3", ¿qué está solicitando o informando?',
    options: ['Material mayor al lugar', 'Material menor', 'Personal al lugar', 'Presencia de Carabineros'],
    correctAnswerIndex: 1,
    explanation: 'La clave 6-3 indica solicitud de material menor al lugar de la emergencia.'
  },
  {
    id: 'i13', malla: 'inicial', course: 'ini-fuego', difficulty: 'Difícil',
    text: 'Un fuego de metales combustibles como magnesio o sodio corresponde a la clase:',
    options: ['Clase C', 'Clase D', 'Clase K', 'Clase B'],
    correctAnswerIndex: 1,
    explanation: 'Los fuegos Clase D involucran metales combustibles y requieren agentes extintores especiales.'
  },
  {
    id: 'i14', malla: 'inicial', course: 'ini-fuego', difficulty: 'Medio',
    text: '¿Qué fenómeno se describe como la ignición súbita y generalizada de los gases combustibles acumulados en una habitación?',
    options: ['Backdraft', 'Flashover', 'Rollover', 'Boilover'],
    correctAnswerIndex: 1,
    explanation: 'El Flashover (combustión súbita generalizada) ocurre cuando todo el material combustible en una habitación alcanza su temperatura de ignición simultáneamente.'
  },
  {
    id: 'i15', malla: 'inicial', course: 'ini-fuego', difficulty: 'Difícil',
    text: '¿Qué condición es indispensable para que ocurra un Backdraft?',
    options: ['Alta concentración de oxígeno', 'Fuego en fase de decaimiento por falta de oxígeno', 'Presencia de líquidos inflamables', 'Ventilación adecuada'],
    correctAnswerIndex: 1,
    explanation: 'El Backdraft ocurre cuando se introduce oxígeno repentinamente a un fuego confinado que estaba carente de él (fase latente).'
  },
  {
    id: 'i16', malla: 'inicial', course: 'ini-epp', difficulty: 'Medio',
    text: '¿A qué presión (en psi) típicamente se carga un cilindro de ERA de alta presión?',
    options: ['2216 psi', '3000 psi', '4500 psi', '1500 psi'],
    correctAnswerIndex: 2,
    explanation: 'Los cilindros de alta presión modernos se cargan a 4500 psi.'
  },
  {
    id: 'i17', malla: 'inicial', course: 'ini-riesgos', difficulty: 'Medio',
    text: '¿Qué es la evaluación 360° en una emergencia?',
    options: ['Dar una vuelta completa al carro bomba', 'Inspeccionar visualmente todos los lados de la estructura o escena', 'Revisar el equipo de respiración', 'Llamar a todas las compañías'],
    correctAnswerIndex: 1,
    explanation: 'La evaluación 360° permite al oficial a cargo identificar peligros, vías de acceso, víctimas y la extensión del incidente desde todos los ángulos.'
  },
  {
    id: 'i18', malla: 'inicial', course: 'ini-rcp', difficulty: 'Medio',
    text: '¿Qué maniobra se utiliza para desobstruir la vía aérea en un adulto consciente?',
    options: ['Maniobra de Heimlich', 'Maniobra de Valsalva', 'RCP', 'Posición de recuperación'],
    correctAnswerIndex: 0,
    explanation: 'La maniobra de Heimlich (compresiones abdominales) es el tratamiento estándar para la asfixia por atragantamiento.'
  },
  {
    id: 'i19', malla: 'inicial', course: 'ini-forestales', difficulty: 'Fácil',
    text: '¿Cuáles son las tres partes principales de un incendio forestal?',
    options: ['Cabeza, flancos y cola', 'Inicio, medio y fin', 'Raíz, tronco y hojas', 'Foco, humo y ceniza'],
    correctAnswerIndex: 0,
    explanation: 'La cabeza es la parte que avanza más rápido, los flancos son los lados, y la cola es la parte trasera del incendio.'
  },
  {
    id: 'i20', malla: 'inicial', course: 'ini-forestales', difficulty: 'Medio',
    text: 'En el combate de incendios forestales, ¿qué significa LACES?',
    options: ['Un tipo de herramienta', 'Normas de seguridad: Lookouts, Anchor points, Communications, Escape routes, Safety zones', 'Un químico retardante', 'Una clave radial'],
    correctAnswerIndex: 1,
    explanation: 'LACES es un acrónimo vital para la seguridad: Vigías, Puntos de anclaje, Comunicaciones, Rutas de escape y Zonas de seguridad.'
  },

  // --- MALLA OPERATIVA ---
  {
    id: 'o1', malla: 'operativa', course: 'ope-svb', difficulty: 'Fácil',
    text: 'En rescate vehicular, ¿cuál es el primer paso al llegar a la escena?',
    options: ['Cortar el techo del vehículo', 'Asegurar la escena y evaluar riesgos', 'Extraer a la víctima', 'Desconectar la batería'],
    correctAnswerIndex: 1,
    explanation: 'La seguridad de la escena es siempre la prioridad número uno antes de iniciar cualquier maniobra.'
  },
  {
    id: 'o2', malla: 'operativa', course: 'ope-svb', difficulty: 'Medio',
    text: '¿Qué es el "Círculo de Acción" (o Círculo Interno) en un rescate vehicular?',
    options: ['El área de espera de las ambulancias', 'El área de 3 a 5 metros alrededor del vehículo donde operan los rescatistas', 'El perímetro donde se ubica el público', 'La zona de aterrizaje de helicópteros'],
    correctAnswerIndex: 1,
    explanation: 'El círculo de acción es la zona inmediata al accidente donde trabaja el personal directamente involucrado en la extricación.'
  },
  {
    id: 'o3', malla: 'operativa', course: 'ope-svb', difficulty: 'Difícil',
    text: 'Al desconectar la batería de un vehículo accidentado, ¿qué borne se debe desconectar primero?',
    options: ['El positivo (+)', 'El negativo (-)', 'Ambos al mismo tiempo', 'No importa el orden'],
    correctAnswerIndex: 1,
    explanation: 'Se debe desconectar primero el borne negativo para evitar cortocircuitos si la herramienta toca el chasis.'
  },
  {
    id: 'o4', malla: 'operativa', course: 'ope-crimap-intro', difficulty: 'Fácil',
    text: '¿Qué significa la sigla HazMat?',
    options: ['Hazardous Materials (Materiales Peligrosos)', 'Hazard Management', 'Hazards and Materials', 'Helicopter Rescue'],
    correctAnswerIndex: 0,
    explanation: 'HazMat proviene del inglés Hazardous Materials, que se traduce como Materiales Peligrosos.'
  },
  {
    id: 'o5', malla: 'operativa', course: 'ope-crimap-intro', difficulty: 'Medio',
    text: 'Según la norma NFPA 704 (Rombo de seguridad), ¿qué indica el color azul?',
    options: ['Riesgo de inflamabilidad', 'Riesgo para la salud', 'Riesgo de inestabilidad/reactividad', 'Riesgo específico'],
    correctAnswerIndex: 1,
    explanation: 'En el rombo NFPA 704, el azul representa los riesgos para la salud.'
  },
  {
    id: 'o6', malla: 'operativa', course: 'ope-crimap-intro', difficulty: 'Difícil',
    text: 'En la Guía de Respuesta a Emergencias (GRE), ¿qué indican las páginas de color amarillo?',
    options: ['Listado de materiales por orden alfabético', 'Listado de materiales por número de Naciones Unidas (UN)', 'Guías de respuesta de emergencia', 'Distancias de aislamiento inicial'],
    correctAnswerIndex: 1,
    explanation: 'Las páginas amarillas listan los materiales peligrosos ordenados numéricamente por su número UN.'
  },
  {
    id: 'o7', malla: 'operativa', course: 'ope-ventilacion', difficulty: 'Medio',
    text: '¿Cuál es el objetivo principal de la ventilación táctica en un incendio estructural?',
    options: ['Apagar el fuego directamente', 'Remover humo, calor y gases tóxicos de manera controlada', 'Darle más oxígeno al fuego', 'Romper ventanas para entrar'],
    correctAnswerIndex: 1,
    explanation: 'La ventilación busca canalizar y extraer los productos de la combustión para mejorar la visibilidad y reducir la temperatura.'
  },
  {
    id: 'o8', malla: 'operativa', course: 'ope-ventilacion', difficulty: 'Difícil',
    text: '¿Qué es la ventilación por Presión Positiva (VPP)?',
    options: ['Usar extractores para sacar el humo', 'Usar ventiladores para inyectar aire fresco y presurizar la estructura', 'Hacer un hoyo en el techo', 'Romper todas las ventanas a la vez'],
    correctAnswerIndex: 1,
    explanation: 'La VPP utiliza ventiladores en la entrada para crear una presión mayor dentro de la estructura, forzando al humo a salir por una abertura de escape.'
  },
  {
    id: 'o9', malla: 'operativa', course: 'ope-entrada', difficulty: 'Medio',
    text: '¿Cuál es la regla de oro antes de forzar una puerta?',
    options: ['Romper el vidrio primero', 'Probar si está abierta (Try before you pry)', 'Llamar al dueño', 'Usar siempre la motosierra'],
    correctAnswerIndex: 1,
    explanation: 'Siempre se debe verificar si la puerta o ventana está sin seguro antes de causar daños innecesarios.'
  },
  {
    id: 'o10', malla: 'operativa', course: 'ope-escalas', difficulty: 'Medio',
    text: '¿Cuál es el ángulo óptimo para posicionar una escala portátil?',
    options: ['45 grados', '60 grados', '75 grados', '90 grados'],
    correctAnswerIndex: 2,
    explanation: 'El ángulo de 75 grados proporciona la mejor estabilidad y capacidad de carga para la escala.'
  },
  {
    id: 'o11', malla: 'operativa', course: 'ope-busqueda', difficulty: 'Medio',
    text: 'En búsqueda y rescate en incendios, ¿qué es la Búsqueda Primaria?',
    options: ['Una búsqueda lenta y detallada', 'Una búsqueda rápida y sistemática en áreas de mayor riesgo y probabilidad de encontrar víctimas', 'Buscar el foco del fuego', 'Revisar los escombros'],
    correctAnswerIndex: 1,
    explanation: 'La búsqueda primaria es rápida y se realiza bajo condiciones extremas para localizar víctimas rápidamente.'
  },
  {
    id: 'o12', malla: 'operativa', course: 'ope-sobrevivencia', difficulty: 'Difícil',
    text: '¿Qué acrónimo se utiliza para transmitir un mensaje de MAYDAY?',
    options: ['LACES', 'RECEO', 'LUNAR', 'PAS'],
    correctAnswerIndex: 2,
    explanation: 'LUNAR: Location (Ubicación), Unit (Unidad/Compañía), Name (Nombre), Assignment (Asignación), Resources needed (Recursos necesarios).'
  },
  {
    id: 'o13', malla: 'operativa', course: 'ope-electricos', difficulty: 'Medio',
    text: 'Al enfrentar un incendio en un poste del tendido eléctrico, ¿qué NO se debe hacer?',
    options: ['Aislar el área', 'Aplicar un chorro directo de agua', 'Llamar a la compañía eléctrica', 'Proteger las exposiciones'],
    correctAnswerIndex: 1,
    explanation: 'El agua conduce la electricidad. Aplicar un chorro directo a líneas energizadas puede electrocutar al bombero.'
  },
  {
    id: 'o14', malla: 'operativa', course: 'ope-sci', difficulty: 'Fácil',
    text: '¿Qué es el SCI (Sistema de Comando de Incidentes)?',
    options: ['Un tipo de camión de bomberos', 'Un modelo de gestión para el mando, control y coordinación de una emergencia', 'Un sistema de radio', 'Una técnica de rescate'],
    correctAnswerIndex: 1,
    explanation: 'El SCI es un sistema estandarizado de manejo de emergencias aplicable a incidentes de cualquier tamaño.'
  },
  {
    id: 'o15', malla: 'operativa', course: 'ope-sci', difficulty: 'Medio',
    text: 'En el SCI, ¿quién es el responsable de todas las operaciones en el incidente hasta que delega la autoridad?',
    options: ['El Oficial de Seguridad', 'El Comandante del Incidente (CI)', 'El Capitán', 'El Despachador'],
    correctAnswerIndex: 1,
    explanation: 'El Comandante del Incidente asume inicialmente todas las funciones de manejo hasta que designa a otros responsables.'
  },

  // --- MALLA PROFESIONAL ---
  {
    id: 'p1', malla: 'profesional', course: 'prof-gases', difficulty: 'Medio',
    text: '¿Qué es el "BLEVE"?',
    options: ['Un tipo de manguera', 'Expansión de Vapor por Explosión de Líquido en Ebullición', 'Un sistema de ventilación', 'Un nudo de rescate'],
    correctAnswerIndex: 1,
    explanation: 'BLEVE (Boiling Liquid Expanding Vapor Explosion) es una explosión catastrófica de un contenedor presurizado expuesto al calor.'
  },
  {
    id: 'p2', malla: 'profesional', course: 'prof-vehiculos', difficulty: 'Medio',
    text: '¿Cuál es el ángulo de aproximación más seguro hacia un vehículo en llamas?',
    options: ['De frente', 'Por detrás', 'En un ángulo de 45 grados desde las esquinas', 'Desde arriba'],
    correctAnswerIndex: 2,
    explanation: 'Aproximarse a 45 grados evita las zonas de mayor riesgo de explosión de amortiguadores y cilindros hidráulicos.'
  },
  {
    id: 'p3', malla: 'profesional', course: 'prof-estructurales', difficulty: 'Difícil',
    text: '¿Qué es el concepto de "Lectura de Humo" (Reading Smoke)?',
    options: ['Medir la toxicidad con instrumentos', 'Analizar el volumen, velocidad, densidad y color del humo para predecir el comportamiento del fuego', 'Ver hacia dónde va el viento', 'Saber qué se está quemando por el olor'],
    correctAnswerIndex: 1,
    explanation: 'La lectura de humo evalúa VVDC (Volumen, Velocidad, Densidad, Color) para entender la ubicación y etapa del incendio.'
  },
  {
    id: 'p4', malla: 'profesional', course: 'prof-seguridad', difficulty: 'Medio',
    text: '¿Qué función cumple el Oficial de Seguridad en el SCI?',
    options: ['Vigilar que no roben material', 'Monitorear las condiciones del incidente y detener acciones inseguras', 'Atender a la prensa', 'Comprar suministros'],
    correctAnswerIndex: 1,
    explanation: 'El Oficial de Seguridad evalúa riesgos y tiene la autoridad para detener cualquier operación que ponga en peligro inminente al personal.'
  },
  {
    id: 'p5', malla: 'profesional', course: 'prof-mandos', difficulty: 'Difícil',
    text: '¿Qué es el Plan de Acción del Incidente (PAI)?',
    options: ['Un mapa de la ciudad', 'Un documento oral o escrito que contiene los objetivos, estrategias y tácticas para un periodo operacional', 'El manual de la bomba', 'El reporte final del incendio'],
    correctAnswerIndex: 1,
    explanation: 'El PAI define qué se va a hacer, cómo y con qué recursos durante un periodo de tiempo específico en la emergencia.'
  },
  {
    id: 'p6', malla: 'profesional', course: 'prof-crimap', difficulty: 'Difícil',
    text: '¿Qué tipo de traje de protección química ofrece el nivel más alto de protección respiratoria y dérmica (encapsulado)?',
    options: ['Nivel A', 'Nivel B', 'Nivel C', 'Nivel D'],
    correctAnswerIndex: 0,
    explanation: 'El traje Nivel A es totalmente encapsulado y hermético a gases, usado con ERA.'
  },
  {
    id: 'p7', malla: 'profesional', course: 'prof-estructurales', difficulty: 'Medio',
    text: '¿Qué significa el acrónimo RECEO-VS en tácticas de bomberos?',
    options: ['Rescate, Exposiciones, Confinamiento, Extinción, Overhaul, Ventilación, Salvamento', 'Rápida Entrada, Control, Evacuación, Observación', 'Riesgo, Evaluación, Control, Extinción, Orden', 'Ninguna de las anteriores'],
    correctAnswerIndex: 0,
    explanation: 'RECEO-VS establece las prioridades tácticas: Rescue, Exposures, Confinement, Extinguishment, Overhaul, Ventilation, Salvage.'
  },
  {
    id: 'p8', malla: 'profesional', course: 'prof-estructurales', difficulty: 'Medio',
    text: '¿Qué es el "Overhaul" (Remoción/Desteche)?',
    options: ['Lavar el carro bomba', 'La búsqueda y extinción de focos ocultos de fuego después del control principal', 'Romper el techo antes de apagar', 'Rescatar víctimas'],
    correctAnswerIndex: 1,
    explanation: 'El overhaul asegura que el fuego esté completamente extinguido, revisando paredes, techos y escombros.'
  },

  // --- MALLA ESPECIALIDADES ---
  {
    id: 'e1', malla: 'especialidades', course: 'esp-usar', difficulty: 'Fácil',
    text: '¿Qué significa la sigla USAR?',
    options: ['Urban Search and Rescue (Búsqueda y Rescate Urbano)', 'United States Army Reserve', 'Unidad de Salvamento y Rescate', 'Unión Sudamericana de Rescate'],
    correctAnswerIndex: 0,
    explanation: 'USAR corresponde a las operaciones de búsqueda y rescate en estructuras colapsadas.'
  },
  {
    id: 'e2', malla: 'especialidades', course: 'esp-usar', difficulty: 'Medio',
    text: 'En el sistema de marcaje INSARAG, ¿qué significa una "V" pintada en una estructura?',
    options: ['Edificio vacío', 'Víctima potencial viva en el interior', 'Zona ventilada', 'Vehículo atrapado'],
    correctAnswerIndex: 1,
    explanation: 'La "V" indica que se ha detectado o se sospecha la presencia de una víctima viva.'
  },
  {
    id: 'e3', malla: 'especialidades', course: 'esp-desnivel', difficulty: 'Fácil',
    text: '¿Qué tipo de cuerda se utiliza principalmente para rescate con cuerdas?',
    options: ['Cuerda dinámica', 'Cuerda estática (o de baja elongación)', 'Cuerda de nylon trenzado común', 'Cuerda de cáñamo'],
    correctAnswerIndex: 1,
    explanation: 'Las cuerdas estáticas se usan en rescate porque no rebotan bajo carga, permitiendo un control preciso.'
  },
  {
    id: 'e4', malla: 'especialidades', course: 'esp-desnivel', difficulty: 'Medio',
    text: '¿Qué es un nudo "Ocho aplicado" (ocho tejido)?',
    options: ['Un nudo para unir dos cuerdas de distinto diámetro', 'Un nudo para anclarse a un punto fijo cerrado (como un anillo o arnés)', 'Un nudo para frenar', 'Un nudo decorativo'],
    correctAnswerIndex: 1,
    explanation: 'El ocho aplicado se usa para atar la cuerda directamente a un arnés o a un anclaje cerrado.'
  },
  {
    id: 'e5', malla: 'especialidades', course: 'esp-acuatico', difficulty: 'Fácil',
    text: 'En rescate acuático, ¿cuál es la secuencia de métodos de rescate de menor a mayor riesgo para el rescatista?',
    options: ['Ir, Remolcar, Lanzar, Alcanzar', 'Alcanzar, Lanzar, Remar, Ir', 'Nadar, Bucear, Saltar', 'Helicóptero, Bote, Nado'],
    correctAnswerIndex: 1,
    explanation: 'La secuencia segura es: Alcanzar (con un palo), Lanzar (cuerda/salvavidas), Remar (bote), e Ir (entrar al agua como último recurso).'
  }
  ,
  {
  "id": "bora1",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Qué grupo de funcionarios públicos solía enfrentar los incendios en Chile antes de la fundación de los cuerpos de bomberos, limitándose a evacuar y cortar la propagación?",
  "options": [
    "Los serenos.",
    "Los zapadores.",
    "Los vigilantes municipales.",
    "La guardia nacional."
  ],
  "correctAnswerIndex": 1,
  "explanation": "El manual indica que los zapadores eran funcionarios públicos que se limitaban a evacuar y cortar la propagación, sin preparación para enfrentar el fuego directamente."
},
  {
  "id": "bora2",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Medio",
  "text": "Tras el incendio del 15 de diciembre de 1850 en Calle del Cabo, Valparaíso, la comunidad formó dos comisiones. ¿Cuál era el objetivo de la segunda comisión?",
  "options": [
    "Dar recomendaciones para evitar incendios futuros.",
    "Organizar las futuras compañías de bomberos.",
    "Recaudar fondos para reconstruir la Calle del Cabo.",
    "Comprar la primera bomba hidráulica de la ciudad."
  ],
  "correctAnswerIndex": 1,
  "explanation": "Tras el incendio, se formó una comisión para recomendaciones preventivas y otra para dar inicio a la formación de la organización de extinción."
},
  {
  "id": "bora3",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Difícil",
  "text": "Si un voluntario ingresa a un cuerpo de bomberos fundado en 1856 en el sur de Chile, ¿a qué institución pertenece probablemente según los hitos históricos?",
  "options": [
    "Cuerpo de Bomberos de Valparaíso.",
    "Cuerpo de Bomberos de Santiago.",
    "Cuerpo de Bomberos de Ancud.",
    "Cuerpo de Bomberos de Puerto Montt."
  ],
  "correctAnswerIndex": 2,
  "explanation": "El texto establece que el Cuerpo de Bomberos de Ancud se fundó el 12 de febrero de 1856."
},
  {
    "id": "bora4",
    "malla": "inicial",
    "course": "ini-bora",
    "difficulty": "Fácil",
    "text": "¿Cuál fue la causa principal de la tragedia en la Iglesia de la Compañía de Jesús en 1863 que motivó la formación de bomberos en Santiago?",
    "options": [
      "La falta de agua en el sector.",
      "Las puertas del templo que solo abrían hacia adentro.",
      "La explosión de una bomba de vapor.",
      "El uso de materiales ligeros en la construcción del techo."
    ],
    "correctAnswerIndex": 1,
    "explanation": "El pánico desató una estampida y las puertas bloqueaban la salida al abrirse hacia adentro, impidiendo la evacuación."
  },
  {
    "id": "bora5",
    "malla": "inicial",
    "course": "ini-bora",
    "difficulty": "Medio",
    "text": "Un inmigrante liberal y masón a finales del siglo XIX decide unirse a una compañía en Valparaíso. Según la historia, ¿qué tipo de compañía buscaría probablemente para conservar su identidad?",
    "options": [
      "Compañía de ganchos y escaleras.",
      "Compañía de colonia.",
      "Compañía de guardias de la propiedad.",
      "Compañía de agua centralizada."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Los inmigrantes formaban compañías de colonia para compartir y conservar su identidad nacional y traer tradiciones de sus países."
  },
  {
  "id": "bora6",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "Durante el siglo XX, ¿qué factor obligó a Bomberos a depender cada vez más de aportes externos para su subsistencia?",
  "options": [
    "El aumento de los salarios de los conductores de carros.",
    "El ingreso de la clase media que carecía de los recursos de los aristócratas fundadores.",
    "La prohibición de donaciones privadas por parte del Estado.",
    "La baja cantidad de incendios que redujo el interés público."
  ],
  "correctAnswerIndex": 1,
  "explanation": "Al cambiar la composición social a clase media y trabajadores, los cuerpos ya no podían autofinanciarse con aportes de sus miembros."
},
  {
  "id": "bora7",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Difícil",
  "text": "Una zona periférica de una ciudad crece con viviendas de materiales ligeros y sin grifos. ¿Cómo afecta esto históricamente al servicio de bomberos?",
  "options": [
    "Reduce el riesgo de incendios al estar alejados del centro comercial.",
    "Obliga a reubicar compañías o fundar nuevas para proteger áreas más extensas.",
    "Facilita la extinción al haber más espacio libre entre casas.",
    "Elimina la necesidad de material mayor especializado."
  ],
  "correctAnswerIndex": 1,
  "explanation": "El crecimiento periférico con materiales ligeros e insuficiencia de agua exige nuevos cuarteles y material adecuado."
},
  {
  "id": "bora8",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Qué fecha se reconoce institucionalmente como la fundación de la Junta Nacional de Cuerpos de Bomberos de Chile?",
  "options": [
    "30 de junio de 1851.",
    "19 de junio de 1968.",
    "30 de junio de 1970.",
    "30 de julio de 1962."
  ],
  "correctAnswerIndex": 2,
  "explanation": "La denominada Junta Coordinadora (hoy Junta Nacional) reconoce esa fecha como su fundación."
},
  {
  "id": "bora9",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Cuál es la principal característica del bombero/a en Chile en comparación con otros países?",
  "options": [
    "Son parte de la policía nacional.",
    "Son funcionarios públicos remunerados.",
    "Son absolutamente voluntarios y provienen de todas las profesiones.",
    "Es obligatorio realizar una carrera militar previa."
  ],
  "correctAnswerIndex": 2,
  "explanation": "En Chile los bomberos son voluntarios y su condición socioeconómica o profesión es indiferente."
},
  {
  "id": "bora10",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Difícil",
  "text": "Ante un incendio forestal que amenaza viviendas, según la doctrina moderna: ¿Cuál es el rol exclusivo de Bomberos?",
  "options": [
    "Combatir el incendio en el corazón del bosque con medios aéreos.",
    "Limitarse a la protección de viviendas en la interfaz urbano-forestal.",
    "Dirigir todas las operaciones de la CONAF.",
    "Evacuar a la fauna silvestre del sector afectado."
  ],
  "correctAnswerIndex": 1,
  "explanation": "Bomberos no interviene en incendios forestales a menos que sea necesaria la protección de viviendas."
},
  {
  "id": "bora11",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Cuál es la célula organizacional básica que da vida a los Cuerpos de Bomberos?",
  "options": [
    "La Comandancia.",
    "La Compañía.",
    "El Directorio General.",
    "El Consejo Regional."
  ],
  "correctAnswerIndex": 1,
  "explanation": "Las compañías son la célula básica que entrega el servicio a la comunidad."
},
  {
  "id": "bora12",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Medio",
  "text": "En una compañía, el Director debe ausentarse por un mes. ¿Qué línea de mando debe encargarse de la gestión administrativa y representar a la compañía ante la institución?",
  "options": [
    "El Capitán.",
    "El Secretario.",
    "El Tesorero.",
    "El Oficial que corresponda según el reglamento (línea administrativa)."
  ],
  "correctAnswerIndex": 3,
  "explanation": "El Director tiene el mando administrativo; su subrogación debe seguir la misma línea administrativa."
},
  {
  "id": "bora13",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Cuál de estos oficiales pertenece al mando operativo de una compañía?",
  "options": [
    "Secretario.",
    "Tesorero.",
    "Teniente 1°.",
    "Intendente."
  ],
  "correctAnswerIndex": 2,
  "explanation": "El Capitán y los Tenientes componen el mando operativo."
},
  {
  "id": "bora14",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Medio",
  "text": "Un bombero comete una falta disciplinaria leve dentro de su cuartel. ¿Cuál es el tribunal de primera instancia encargado de juzgarlo?",
  "options": [
    "Consejo Superior de Disciplina.",
    "Directorio General.",
    "Consejo de Disciplina de su compañía.",
    "Asamblea Nacional."
  ],
  "correctAnswerIndex": 2,
  "explanation": "Es el tribunal de primera instancia que sanciona faltas cometidas por integrantes de la compañía."
},
  {
  "id": "bora15",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Qué diferencia al Superintendente del Comandante en la estructura de un Cuerpo de Bomberos?",
  "options": [
    "El Superintendente manda en los incendios y el Comandante en los desfiles.",
    "El Superintendente tiene la gestión administrativa y el Comandante la operatividad en emergencias.",
    "El Comandante es el representante legal y el Superintendente administra el material mayor.",
    "No hay diferencia; ambos cargos pueden ser ejercidos por la misma persona simultáneamente."
  ],
  "correctAnswerIndex": 1,
  "explanation": "El mando administrativo recae en el Superintendente y el operativo en el Comandante."
},
  {
    "id": "bora16",
    "malla": "inicial",
    "course": "ini-bora",
    "difficulty": "Difícil",
    "text": "Si se requiere nombrar a un Inspector para que se haga cargo del departamento de Material Menor del Cuerpo, ¿qué mando tiene la facultad de nombrarlo?",
    "options": [
      "La Superintendencia.",
      "La Comandancia.",
      "El Consejo de Disciplina.",
      "La Asamblea Nacional."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tanto la Superintendencia como la Comandancia pueden nombrar inspectores; sin embargo, Material Menor es un área operativa bajo el mando del Comandante."
  },
  {
    "id": "bora17",
    "malla": "inicial",
    "course": "ini-bora",
    "difficulty": "Medio",
    "text": "¿Quiénes integran el Directorio General de un Cuerpo de Bomberos?",
    "options": [
      "Solo el Superintendente y el Comandante.",
      "Todos los bomberos con más de 10 años de servicio.",
      "El Superintendente, Comandante, Oficiales Generales, Directores de Compañía y Directores Honorarios.",
      "Solo los Capitanes de todas las compañías."
    ],
    "correctAnswerIndex": 2,
    "explanation": "El Directorio General está compuesto por los Oficiales Generales, Directores de Compañía y Directores Honorarios, entre otros cargos reglamentarios."
  },
  {
  "id": "bora18",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Cuál es el principio fundamental que otorga autoridad a los cargos en Bomberos de Chile?",
  "options": [
    "La designación directa del Ministerio del Interior.",
    "La antigüedad absoluta en el servicio.",
    "La democracia (elección por pares).",
    "El aporte económico realizado a la compañía."
  ],
  "correctAnswerIndex": 2,
  "explanation": "La democracia es el origen de la autoridad; los cargos son elegidos por los propios pares."
},
  {
  "id": "bora19",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Qué organismo es el encargado de coordinar la acción de los Cuerpos de Bomberos a nivel de una región administrativa?",
  "options": [
    "La Junta Nacional.",
    "El Consejo Regional.",
    "El Sistema Nacional de Operaciones.",
    "La Comandancia Regional."
  ],
  "correctAnswerIndex": 1,
  "explanation": "En cada región administrativa hay un Consejo Regional conformado por los superintendentes de la zona."
},
  {
  "id": "bora20",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Cuál de estos NO es un objetivo de la Junta Nacional de Cuerpos de Bomberos (JNCB)?",
  "options": [
    "Servir de enlace entre los Cuerpos de Bomberos.",
    "Representar a la institución ante el Gobierno.",
    "Mandar operativamente en los incendios de cada comuna.",
    "Cooperar en la solución de problemas económicos de los Cuerpos."
  ],
  "correctAnswerIndex": 2,
  "explanation": "La JNCB coordina y sirve de enlace, pero no tiene mando operativo directo sobre incendios locales, el cual reside en cada Cuerpo."
},
  {
  "id": "bora21",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Cuál es la finalidad del Manual de operaciones multiinstitucional ante emergencias (Manual ABC)?",
  "options": [
    "Enseñar a los bomberos a conducir ambulancias.",
    "Coordinar el actuar de SAMU, Bomberos y Carabineros para atender a las víctimas.",
    "Establecer un registro nacional de incendios forestales.",
    "Definir los sueldos del personal de emergencia."
  ],
  "correctAnswerIndex": 1,
  "explanation": "El objetivo primordial es el resguardo y atención coordinada de los lesionados."
},
  {
  "id": "bora22",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Difícil",
  "text": "En un rescate vehicular, un bombero libera a una persona atrapada mediante el uso de herramientas hidráulicas. Según el manual, este conjunto de acciones se denomina:",
  "options": [
    "Atención prehospitalaria.",
    "Reanimación.",
    "Extricación o rescate.",
    "Traslado sanitario."
  ],
  "correctAnswerIndex": 2,
  "explanation": "Se define como el conjunto de acciones destinadas a liberar a personas atrapadas en un vehículo o estructura."
},
  {
  "id": "bora23",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Qué prioridad es la más alta para las tres instituciones (SAMU, Bomberos, Carabineros) en el escenario de un evento?",
  "options": [
    "La limpieza de la calzada.",
    "La atención de los lesionados.",
    "La investigación de las causas del siniestro.",
    "El resguardo del material mayor."
  ],
  "correctAnswerIndex": 1,
  "explanation": "La atención de lesionados es la primera prioridad y los esfuerzos deben sumarse para ello."
},
  {
  "id": "bora24",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Difícil",
  "text": "Si un bombero llega como primer respondedor a un derrame de un producto químico desconocido y su cuerpo no tiene la especialidad Hazmat, ¿qué debe hacer?",
  "options": [
    "Entrar inmediatamente a detener la fuga.",
    "Limitarse a la identificación y reconocimiento usando la Guía de Respuesta a Emergencias (GRE).",
    "Solicitar ayuda a la policía para que ellos sellen el contenedor.",
    "Ignorar el derrame y retirarse por seguridad personal."
  ],
  "correctAnswerIndex": 1,
  "explanation": "Los no especialistas deben limitar su actuación a identificar y reconocer con la GRE."
},
  {
  "id": "bora25",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "Según el Sistema de Gestión de Actos de Servicio (SGAS), ¿cuál es la emergencia de mayor ocurrencia para Bomberos en Chile?",
  "options": [
    "Incendios estructurales.",
    "Accidentes vehiculares.",
    "Incendios forestales.",
    "Rescate subacuático."
  ],
  "correctAnswerIndex": 1,
  "explanation": "El SGAS indica que los accidentes vehiculares son las emergencias de mayor ocurrencia."
},
  {
  "id": "bora26",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Medio",
  "text": "Al inspeccionar una edificación en construcción, ¿qué documento puede utilizar el inspector de bomberos para dejar constancia de sus observaciones?",
  "options": [
    "El acta de sesión de la compañía.",
    "El libro de obras de la construcción.",
    "El registro civil de la comuna.",
    "No puede dejar constancia oficial, solo avisar verbalmente."
  ],
  "correctAnswerIndex": 1,
  "explanation": "Los inspectores de bomberos deben dejar constancia de sus observaciones sobre seguridad contra incendio en el libro de obras."
},
  {
  "id": "bora27",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Puede un Cuerpo de Bomberos cobrar por la recepción o revisión de un plan de evacuación de un edificio con carga superior a 100 personas?",
  "options": [
    "Sí, es un servicio remunerado según la Ley Marco.",
    "No, esa labor debe ser ejercida en forma gratuita.",
    "Solo si el edificio es de una empresa multinacional.",
    "Solo si la inspección demora más de dos horas."
  ],
  "correctAnswerIndex": 1,
  "explanation": "La labor de inspección y recepción de planes es preventiva y debe ser gratuita."
},
  {
  "id": "bora28",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Difícil",
  "text": "Un comandante detecta que un edificio con recepción municipal no cumple con su plan de evacuación. ¿A qué autoridad debe dar cuenta por escrito?",
  "options": [
    "Al Director de la ANB.",
    "Al Director de Obras Municipales.",
    "Al Superintendente de Electricidad y Combustibles.",
    "Al Presidente de la Junta Nacional."
  ],
  "correctAnswerIndex": 1,
  "explanation": "Se debe dar cuenta al Director de Obras Municipales para que se adopten las medidas y multas correspondientes."
},
  {
  "id": "bora29",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Qué grupo de rescate acreditado internacionalmente posee Chile para actuar en colapsos estructurales graves?",
  "options": [
    "GERSA.",
    "USAR BOCH.",
    "Hazmat.",
    "Sistema Nacional de Serenos."
  ],
  "correctAnswerIndex": 1,
  "explanation": "Chile cuenta con el grupo de búsqueda y rescate USAR BOCH acreditado internacionalmente."
},
  {
  "id": "bora30",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Medio",
  "text": "En un incendio estructural moderno de una casa con muebles de madera prensada y plásticos, ¿qué característica del fuego debe esperar el bombero?",
  "options": [
    "Desarrollo muy lento y temperaturas bajas.",
    "Gran producción de brasas pero sin humo.",
    "Desarrollo mucho más rápido y temperaturas altas en cortos periodos de tiempo.",
    "Imposibilidad de propagación a casas colindantes."
  ],
  "correctAnswerIndex": 2,
  "explanation": "Los materiales modernos (plásticos, pinturas, prensados) hacen que los incendios actuales sean más veloces y calientes que en el pasado."
},
  {
  "id": "bora31",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Qué significa que Bomberos de Chile tenga una \"Autonomía responsable\"?",
  "options": [
    "Que puede ignorar las leyes del Estado si interfieren con el servicio.",
    "Que es independiente del Estado pero debe responder por sus decisiones y administración de recursos.",
    "Que el Estado no tiene derecho a supervisar sus cuentas bancarias.",
    "Que cada bombero es autónomo para decidir si asiste o no a un llamado."
  ],
  "correctAnswerIndex": 1,
  "explanation": "La autonomía obliga a hacerse cargo de la calidad de respuesta, formación y recursos."
},
  {
  "id": "bora32",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Medio",
  "text": "Un oficial electo termina su periodo de mando de un año. ¿Qué ocurre con su estatus jerárquico según la doctrina de \"Elección entre iguales\"?",
  "options": [
    "Mantiene el grado de por vida para ser respetado por los nuevos.",
    "Vuelve a su estado normal sin cargo alguno y retoma sus obligaciones tradicionales.",
    "Asciende automáticamente a Oficial General por su experiencia.",
    "Puede designar a su sucesor sin votación."
  ],
  "correctAnswerIndex": 1,
  "explanation": "La autoridad es temporal; al terminar el periodo, el bombero vuelve a ser un igual entre iguales."
},
  {
  "id": "bora33",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Qué es la \"lenidad\" en el contexto ético de un oficial?",
  "options": [
    "La excesiva rigidez al castigar faltas leves.",
    "La blandura en exigir el cumplimiento de los deberes o en castigar las faltas.",
    "La capacidad de delegar funciones administrativas en secretarios.",
    "La rapidez para responder a las alarmas de incendio."
  ],
  "correctAnswerIndex": 1,
  "explanation": "La lenidad es una falta ética del oficial que no hace cumplir los reglamentos por ser \"blando\"."
},
  {
  "id": "bora34",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Difícil",
  "text": "Un bombero recibe una reprimenda injusta por parte de un oficial. Según la disciplina, el bombero debe evitar la \"hiperestesia\". ¿Qué significa esto?",
  "options": [
    "Denunciar inmediatamente al oficial en redes sociales.",
    "No irritarse o amargarse por situaciones que se sobreestiman por herir el orgullo.",
    "Gritar más fuerte que el oficial para demostrar carácter.",
    "Ignorar la orden del oficial por ser injusta."
  ],
  "correctAnswerIndex": 1,
  "explanation": "La hiperestesia es una hipersensibilidad que hace que la persona se amargue ante situaciones menores; la disciplina obliga a ser resiliente."
},
  {
  "id": "bora35",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Cuál es la motivación básica y central que debe regir a todo bombero/a?",
  "options": [
    "La fama y el reconocimiento público.",
    "La obtención de beneficios monetarios.",
    "El servicio a la comunidad.",
    "El poder político dentro del Cuerpo."
  ],
  "correctAnswerIndex": 2,
  "explanation": "El servicio es el principio-valor que rige la voluntad de Bomberos por sobre intereses individuales."
},
  {
  "id": "bora36",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Medio",
  "text": "En la jerga bomberil, ¿cómo se debe tratar a un \"chupe\" o \"chiporro\" (bombero menos antiguo)?",
  "options": [
    "Como un mozo para que realice las tareas domésticas personales de los antiguos.",
    "Con respeto y afecto, como un hermano menor de la cofradía al que se le enseña.",
    "Ignorándolo hasta que cumpla un año de servicio.",
    "Obligándolo a pagar todas las cuotas sociales de la compañía."
  ],
  "correctAnswerIndex": 1,
  "explanation": "El chupe no es un mozo; se le cuida, se le transfieren tradiciones y se le respeta."
},
  {
  "id": "bora37",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Qué implica el principio de autoridad \"Colegiada\" en Bomberos?",
  "options": [
    "Que una sola persona toma todas las decisiones administrativas.",
    "Que las decisiones se adoptan por una pluralidad de personas (consensos o mayorías) en directorios o consejos.",
    "Que solo los bomberos con título universitario pueden mandar.",
    "Que todas las órdenes de incendio deben ser votadas antes de ejecutarse."
  ],
  "correctAnswerIndex": 1,
  "explanation": "La autoridad colegiada permite deliberar y adoptar decisiones para el interés general."
},
  {
  "id": "bora38",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Difícil",
  "text": "Al dirigirse a un oficial, un bombero antepone el adjetivo \"mi\" (ejemplo: \"Mi Capitán\"). ¿Qué significado tiene este gesto según el manual?",
  "options": [
    "Es una imposición reglamentaria obligatoria bajo pena de expulsión.",
    "Es una deferencia voluntaria que reconoce que se está bajo su mando.",
    "Indica que el capitán es propiedad personal del bombero.",
    "Es un término que solo pueden usar los bomberos honorarios."
  ],
  "correctAnswerIndex": 1,
  "explanation": "El uso de \"mi\" es una deferencia y reconocimiento de la jerarquía, pero debe ser un gesto voluntario y no impuesto."
},
  {
  "id": "bora39",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Cuál es el compromiso de disponibilidad que asume Bomberos con la sociedad?",
  "options": [
    "De lunes a viernes en horario de oficina.",
    "Solo durante los meses de verano por riesgo de incendios forestales.",
    "Las 24 horas del día, los 365 días del año.",
    "Solo cuando el Estado decreta Alerta Roja."
  ],
  "correctAnswerIndex": 2,
  "explanation": "El compromiso implica entregar un servicio adecuado en calidad y oportunidad permanentemente."
},
  {
  "id": "bora40",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Medio",
  "text": "Un bombero desea retirarse de la institución tras dos años de servicio. Según el manual, ¿es posible?",
  "options": [
    "No, una vez jurado debe quedarse de por vida o hasta los 65 años.",
    "Sí, el retiro de la institución es voluntario, al igual que el ingreso.",
    "Solo si paga una multa compensatoria al Cuerpo de Bomberos.",
    "Solo si encuentra a un reemplazo que asuma sus cuotas."
  ],
  "correctAnswerIndex": 1,
  "explanation": "El ingreso y el retiro son actos voluntarios de la persona."
},
  {
  "id": "bora41",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Cuál es la diferencia entre una formación y un desfile?",
  "options": [
    "En la formación se corre y en el desfile se camina.",
    "La formación es la distribución de los integrantes (línea, columna); el desfile es el acto de marchar ante autoridades.",
    "La formación es obligatoria y el desfile es solo para oficiales.",
    "No hay diferencia, son sinónimos."
  ],
  "correctAnswerIndex": 1,
  "explanation": "La formación es la distribución espacial y el desfile es el acto ceremonial de marcha."
},
  {
  "id": "bora42",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Difícil",
  "text": "El oficial a cargo dice: \"¡Giro... a la iz...!\". ¿Qué tipo de voz de mando es esta parte de la instrucción?",
  "options": [
    "Voz de atención.",
    "Voz preventiva.",
    "Voz ejecutiva.",
    "Voz de descanso."
  ],
  "correctAnswerIndex": 1,
  "explanation": "La voz preventiva antecede a la ejecución y se da en forma alargada para preparar al personal."
},
  {
  "id": "bora43",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "Al estar en la posición \"Firme\", ¿qué ángulo deben formar las puntas de los pies?",
  "options": [
    "10 grados.",
    "45 grados.",
    "90 grados.",
    "Deben estar paralelas."
  ],
  "correctAnswerIndex": 1,
  "explanation": "Se deben juntar los talones y separar las puntas formando un ángulo de 45°."
},
  {
  "id": "bora44",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Difícil",
  "text": "Se da la voz de mando \"¡A DISCRECIÓN!\". ¿Cuál es el movimiento correcto de los pies?",
  "options": [
    "Juntar los talones con fuerza.",
    "Sacar el pie izquierdo al frente y golpear el suelo con toda la planta.",
    "Separar ambos pies al mismo tiempo hacia los lados.",
    "Cruzar el pie derecho por detrás del izquierdo."
  ],
  "correctAnswerIndex": 1,
  "explanation": "Se saca el pie izquierdo al frente golpeando el suelo, dejando el talón izquierdo a la altura de la punta del derecho."
},
  {
  "id": "bora45",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Sobre qué parte del pie se deben realizar todos los giros en la formación?",
  "options": [
    "Sobre la punta del pie derecho.",
    "Sobre el taco (talón) del pie izquierdo.",
    "Sobre ambos talones simultáneamente.",
    "Sobre los metatarsos."
  ],
  "correctAnswerIndex": 1,
  "explanation": "Todos los giros se realizan sobre el taco del pie izquierdo, manteniendo la pierna estirada."
},
  {
  "id": "bora46",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Difícil",
  "text": "Al realizar una \"Media vuelta\", ¿cuántos grados debe girar el cuerpo y hacia qué lado?",
  "options": [
    "90 grados a la derecha.",
    "180 grados a la izquierda.",
    "180 grados a la derecha.",
    "360 grados sobre el eje."
  ],
  "correctAnswerIndex": 1,
  "explanation": "Se gira el cuerpo a la izquierda en 180° usando el talón izquierdo como eje."
},
  {
  "id": "bora47",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Quiénes son los únicos autorizados para realizar el saludo con la \"mano en visera\"?",
  "options": [
    "Todos los bomberos que tengan su uniforme completo.",
    "Solo los oficiales autorizados por su reglamentación.",
    "Solo el estandarte.",
    "El personal rentado."
  ],
  "correctAnswerIndex": 1,
  "explanation": "El saludo con mano en visera es exclusivo de oficiales autorizados; el resto saluda solo con la vista."
},
  {
  "id": "bora48",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Difícil",
  "text": "Se ordena \"¡ALINE... AR!\". ¿Hacia qué lado debe llevar la vista la unidad como norma general?",
  "options": [
    "Hacia la izquierda.",
    "Hacia la derecha.",
    "Al frente, mirando al oficial.",
    "Hacia arriba, saludando al pabellón."
  ],
  "correctAnswerIndex": 1,
  "explanation": "La alineación y el contacto se toman por la derecha, salvo orden contraria."
},
  {
  "id": "bora49",
  "malla": "inicial",
  "course": "ini-bora",
  "difficulty": "Fácil",
  "text": "¿Cuál es el objetivo principal de la \"numeración\" en una formación?",
  "options": [
    "Elegir quién irá en el primer carro de agua.",
    "Comprobar la cantidad total de integrantes en la formación.",
    "Definir el orden para el almuerzo en el cuartel.",
    "Saber quién es el más antiguo de la fila."
  ],
  "correctAnswerIndex": 1,
  "explanation": "La numeración se realiza para comprobar la cantidad total o para ejercicios específicos."
}

];
