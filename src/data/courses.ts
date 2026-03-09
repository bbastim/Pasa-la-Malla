import { Course } from '../types';

export const courses: Course[] = [
  // Malla Postulante
  {
    id: 'post-historia',
    malla: 'postulante',
    name: 'Introducción a la Historia y Funcionamiento de Bomberos de Chile',
    description: 'Conoce los orígenes, estructura y funcionamiento de la institución.',
    manualSummary: 'Resumen del Manual: Bomberos de Chile nace en 1851 en Valparaíso. Se organiza en Cuerpos de Bomberos, los cuales están formados por Compañías. La Junta Nacional de Cuerpos de Bomberos (JNCB) es el organismo rector. La Academia Nacional de Bomberos (ANB) es la encargada de la capacitación. Los valores fundamentales son la constancia, el servicio y la disciplina.'
  },
  {
    id: 'post-epp',
    malla: 'postulante',
    name: 'Introducción a Equipos de Protección Personal y Primera Respuesta',
    description: 'Conceptos básicos sobre el equipamiento y la respuesta inicial.',
    manualSummary: 'Resumen del Manual: El EPP (Equipo de Protección Personal) básico incluye casco, esclavina, cotona, pantalón, botas y guantes. Su propósito es proteger al bombero de los riesgos térmicos, físicos y químicos. La primera respuesta implica asegurar la escena, evaluar la situación y solicitar los recursos necesarios.'
  },

  // Malla Inicial
  {
    id: 'ini-bora',
    malla: 'inicial',
    name: 'BORA (Bomberos: Origen y Rol Actual)',
    description: 'Profundización en la historia y el rol del bombero en la sociedad actual.',
    manualSummary: 'Resumen del Manual: BORA abarca la evolución histórica de las Compañías y Cuerpos de Bomberos en Chile. Destaca el rol del bombero como un profesional de la emergencia, voluntario pero altamente capacitado. Se enfatiza la ética, la doctrina institucional y el compromiso con la comunidad.'
  },
  {
    id: 'ini-comunicaciones',
    malla: 'inicial',
    name: 'Comunicaciones para Bomberos',
    description: 'Uso de equipos radiales y protocolos de comunicación.',
    manualSummary: 'Resumen del Manual: Las comunicaciones efectivas son vitales. Se utiliza el alfabeto fonético internacional y claves radiales estandarizadas. Las radios portátiles y bases son las herramientas principales. La disciplina radial (mensajes cortos, claros y precisos) es obligatoria para mantener el orden en la frecuencia.'
  },
  {
    id: 'ini-riesgos',
    malla: 'inicial',
    name: 'Gestión de Riesgos Bomberiles',
    description: 'Identificación y mitigación de riesgos en el servicio.',
    manualSummary: 'Resumen del Manual: La seguridad es la prioridad número uno. Se debe realizar una evaluación de riesgos de 360 grados en cada emergencia. Identificar peligros eléctricos, estructurales, químicos y biológicos. El uso correcto del EPP y el trabajo en equipo (sistema de parejas) son fundamentales para minimizar accidentes.'
  },
  {
    id: 'ini-comportamiento',
    malla: 'inicial',
    name: 'Comportamiento Humano en Emergencias',
    description: 'Psicología de la emergencia y manejo de víctimas.',
    manualSummary: 'Resumen del Manual: Las personas reaccionan de manera impredecible bajo estrés (pánico, negación, shock). Los bomberos deben mantener la calma, dar instrucciones claras y asertivas, y brindar primeros auxilios psicológicos básicos. El autocuidado de la salud mental del bombero también es esencial.'
  },
  {
    id: 'ini-epp',
    malla: 'inicial',
    name: 'EPP (Equipos de Protección Personal)',
    description: 'Uso avanzado y mantenimiento del equipo de protección y ERA.',
    manualSummary: 'Resumen del Manual: Detalla las normativas (NFPA, EN) que rigen los EPP. Incluye el uso, inspección y mantenimiento del Equipo de Respiración Autónomo (ERA). El ERA proporciona aire respirable en atmósferas IDLH (Inmediatamente Peligrosas para la Vida o la Salud). Se debe calcular el tiempo de autonomía y conocer los procedimientos de emergencia.'
  },
  {
    id: 'ini-fuego',
    malla: 'inicial',
    name: 'Fuego y Tácticas',
    description: 'Comportamiento del fuego y tácticas básicas de extinción.',
    manualSummary: 'Resumen del Manual: El tetraedro del fuego (combustible, comburente, calor, reacción en cadena). Fases del incendio (incipiente, crecimiento, desarrollo completo, decaimiento). Fenómenos termodinámicos (Flashover, Backdraft). Tácticas ofensivas (ataque interior) y defensivas (ataque exterior). Uso de chorros de agua (directo, neblina, cono).'
  },
  {
    id: 'ini-rcp',
    malla: 'inicial',
    name: 'RCP (Reanimación Cardiopulmonar)',
    description: 'Soporte vital básico y uso del DEA.',
    manualSummary: 'Resumen del Manual: Cadena de supervivencia. RCP de alta calidad: compresiones fuertes y rápidas (100-120 por minuto, 5 cm de profundidad). Relación 30:2. Uso temprano del Desfibrilador Externo Automático (DEA). Manejo de la obstrucción de la vía aérea por cuerpo extraño (OVACE).'
  },
  {
    id: 'ini-forestales',
    malla: 'inicial',
    name: 'Control de Incendios Forestales',
    description: 'Tácticas y seguridad en incendios de vegetación.',
    manualSummary: 'Resumen del Manual: Triángulo del comportamiento del fuego forestal (topografía, tiempo atmosférico, combustible). Partes de un incendio forestal (cabeza, flancos, cola). Uso de herramientas manuales (rozón, mcleod, pulaski). Construcción de líneas de control. Normas de seguridad (LACES: Lookouts, Anchor points, Communications, Escape routes, Safety zones).'
  },

  // Malla Operativa
  {
    id: 'ope-ventilacion',
    malla: 'operativa',
    name: 'Ventilación Táctica',
    description: 'Técnicas de ventilación horizontal y vertical.',
    manualSummary: 'Resumen del Manual: La ventilación táctica es la remoción sistemática de humo, calor y gases. Tipos: natural, forzada (presión positiva VPP, presión negativa VPN), hidráulica. Ventilación vertical (en techos) y horizontal (ventanas/puertas). Mejora la visibilidad, reduce la temperatura y previene fenómenos termodinámicos extremos.'
  },
  {
    id: 'ope-entrada',
    malla: 'operativa',
    name: 'Entrada Forzada',
    description: 'Técnicas y herramientas para forzar accesos.',
    manualSummary: 'Resumen del Manual: Uso de herramientas de golpe (hacha), palanca (halligan), corte (sierras, esmeriles) y empuje. Técnicas para abrir puertas (abren hacia adentro/afuera), ventanas, candados y cortinas metálicas. La regla es "probar antes de forzar" para minimizar daños innecesarios.'
  },
  {
    id: 'ope-escalas',
    malla: 'operativa',
    name: 'Escalas y Cuerdas para el Control de Incendios',
    description: 'Manejo de escalas portátiles y nudos básicos.',
    manualSummary: 'Resumen del Manual: Tipos de escalas (simples, de extensión, de techo). Partes de una escala. Técnicas de transporte, izamiento y posicionamiento seguro (ángulo de 75 grados). Nudos bomberiles esenciales (as de guía, ballestrinque, ocho, nudo de agua) y su aplicación en el izamiento de herramientas.'
  },
  {
    id: 'ope-busqueda',
    malla: 'operativa',
    name: 'Búsqueda y Rescate en Incendios Estructurales',
    description: 'Técnicas de búsqueda primaria y secundaria.',
    manualSummary: 'Resumen del Manual: Búsqueda primaria (rápida y sistemática, enfocada en áreas de mayor riesgo y probabilidad de víctimas). Búsqueda secundaria (exhaustiva, una vez controlado el fuego). Técnicas de arrastre y transporte de víctimas. Uso de cuerdas de vida y cámaras termales.'
  },
  {
    id: 'ope-sobrevivencia',
    malla: 'operativa',
    name: 'Sobrevivencia en Incendios Estructurales',
    description: 'Técnicas de auto-rescate y supervivencia (Mayday).',
    manualSummary: 'Resumen del Manual: Procedimiento MAYDAY (LUNAR: Location, Unit, Name, Assignment, Resources needed). Técnicas de orientación en espacios confinados, escape por ventanas, paso por espacios reducidos (perfil bajo). Manejo de emergencias con el ERA (enredos, pérdida de aire).'
  },
  {
    id: 'ope-electricos',
    malla: 'operativa',
    name: 'Riesgos Eléctricos',
    description: 'Seguridad en emergencias con presencia de electricidad.',
    manualSummary: 'Resumen del Manual: Identificación de instalaciones de alta, media y baja tensión. Distancias de seguridad. Peligros del agua en contacto con electricidad. Procedimientos para incendios en subestaciones, postes y vehículos eléctricos. Coordinación con empresas eléctricas.'
  },
  {
    id: 'ope-svb',
    malla: 'operativa',
    name: 'Soporte Vital Básico (SVB)',
    description: 'Atención prehospitalaria básica para trauma y emergencias médicas.',
    manualSummary: 'Resumen del Manual: Evaluación primaria (XABCDE: Hemorragias exanguinantes, Vía Aérea, Ventilación, Circulación, Déficit Neurológico, Exposición). Manejo de trauma (inmovilización cervical, control de hemorragias con torniquetes y vendajes). Manejo de quemaduras y shock.'
  },
  {
    id: 'ope-crimap-intro',
    malla: 'operativa',
    name: 'Introductorio CRIMAP',
    description: 'Conceptos iniciales sobre Materiales Peligrosos.',
    manualSummary: 'Resumen del Manual: Reconocimiento e identificación de materiales peligrosos (MatPel). Uso de la Guía de Respuesta en Caso de Emergencia (GRE). Clases de riesgo (ONU). Zonas de trabajo (Caliente, Tibia, Fría). El rol del primer respondedor a nivel Advertencia es reconocer, aislar y notificar.'
  },
  {
    id: 'ope-sci',
    malla: 'operativa',
    name: 'Curso Básico Sistema de Comando de Incidentes (SCI)',
    description: 'Organización y gestión de emergencias.',
    manualSummary: 'Resumen del Manual: El SCI es un modelo de gestión estandarizado. Principios: Mando único/unificado, alcance de control (3 a 7 subordinados), comunicaciones integradas, plan de acción del incidente (PAI). Funciones: Mando, Seguridad, Información Pública, Enlace, Operaciones, Planificación, Logística, Administración/Finanzas.'
  },

  // Malla Profesional
  {
    id: 'prof-gases',
    malla: 'profesional',
    name: 'Control de Emergencias con Gases Combustibles',
    description: 'Manejo de fugas e incendios de GLP y GN.',
    manualSummary: 'Resumen del Manual: Propiedades del Gas Licuado de Petróleo (GLP) y Gas Natural (GN). Límites de inflamabilidad (LEL/UEL). Tácticas para fugas sin fuego (dispersión, cierre de válvulas) y con fuego (enfriamiento de cilindros/estanques, no apagar la llama hasta cortar el flujo). Riesgo de BLEVE.'
  },
  {
    id: 'prof-vehiculos',
    malla: 'profesional',
    name: 'Control de Fuego en Vehículos',
    description: 'Tácticas para incendios vehiculares.',
    manualSummary: 'Resumen del Manual: Riesgos específicos: combustibles, baterías, airbags, amortiguadores presurizados, metales combustibles (magnesio). Tácticas de aproximación (ángulo de 45 grados). Uso de herramientas para abrir capós atascados. Consideraciones especiales para vehículos híbridos y eléctricos.'
  },
  {
    id: 'prof-estructurales',
    malla: 'profesional',
    name: 'Control de Incendios Estructurales',
    description: 'Tácticas avanzadas y comando en incendios de estructuras.',
    manualSummary: 'Resumen del Manual: Lectura de humo (volumen, velocidad, densidad, color). Ataque transicional (ablandar el fuego desde el exterior antes de ingresar). Coordinación entre ataque y ventilación. Cálculo de caudales requeridos. Protección de exposiciones.'
  },
  {
    id: 'prof-seguridad',
    malla: 'profesional',
    name: 'Oficial de Seguridad del Incidente',
    description: 'Gestión de la seguridad en la escena de la emergencia.',
    manualSummary: 'Resumen del Manual: El Oficial de Seguridad tiene la autoridad para detener cualquier acción insegura. Evalúa riesgos estructurales, fatiga del personal, uso correcto de EPP y zonas de colapso. Implementa el sistema de contabilidad de personal (tarjetas/pasaportes).'
  },
  {
    id: 'prof-mandos',
    malla: 'profesional',
    name: 'Mandos Superiores',
    description: 'Liderazgo y gestión estratégica para Oficiales.',
    manualSummary: 'Resumen del Manual: Toma de decisiones bajo presión. Liderazgo transformacional. Gestión de recursos a gran escala. Relaciones públicas y manejo de crisis institucionales. Planificación estratégica y administración de un Cuerpo de Bomberos.'
  },
  {
    id: 'prof-crimap',
    malla: 'profesional',
    name: 'Curso de Primera Respuesta a Incidentes con Materiales Peligrosos (CRIMAP)',
    description: 'Nivel Operaciones en MatPel.',
    manualSummary: 'Resumen del Manual: Respuesta a nivel Operaciones. Acciones defensivas: contención, confinamiento, absorción, diques. Uso de EPP especializado (Nivel B y C). Descontaminación masiva y técnica. Monitoreo básico de atmósferas.'
  },

  // Malla Especialidades
  {
    id: 'esp-usar',
    malla: 'especialidades',
    name: 'Rescate Urbano (USAR)',
    description: 'Búsqueda y rescate en estructuras colapsadas.',
    manualSummary: 'Resumen del Manual: Operaciones USAR. Sistema de marcaje INSARAG. Tipos de colapso (V, Panqueque, Apoyado al piso). Técnicas de apuntalamiento (shoring). Levantamiento y movimiento de cargas pesadas. Síndrome de aplastamiento.'
  },
  {
    id: 'esp-desnivel',
    malla: 'especialidades',
    name: 'Rescate en Desnivel',
    description: 'Operaciones de rescate con cuerdas.',
    manualSummary: 'Resumen del Manual: Uso de cuerdas estáticas. Nudos bomberiles (ocho aplicado, pescador doble, ballestrinque). Sistemas de anclaje ecualizados. Ventaja mecánica (sistemas de poleas 3:1, Z-Rig). Factor de caída y síndrome del arnés.'
  },
  {
    id: 'esp-acuatico',
    malla: 'especialidades',
    name: 'Rescate Acuático',
    description: 'Operaciones en aguas abiertas y correntosas.',
    manualSummary: 'Resumen del Manual: Uso obligatorio del Chaleco Salvavidas (PFD). Secuencia de rescate: Alcanzar, Lanzar, Remar, Ir. Posición defensiva de nado. Lectura de ríos (rebufos, corrientes, remolinos). Manejo de hipotermia.'
  }
];
