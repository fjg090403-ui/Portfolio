import {
  BrainCircuit,
  Database,
  Download,
  GitBranch,
  Layers3,
  Mail,
  Network,
  Terminal,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export type TechGroup = {
  title: string
  accent: string
  Icon: LucideIcon
  items: string[]
}

export type Project = {
  slug: string
  title: string
  tag: string
  description: string
  detail: string
  stack: string[]
  accent: string
  signal: string
  visual: 'orders' | 'rural' | 'saas' | 'pose' | 'knime' | 'income' | 'powerbi' | 'evex'
  images?: string[]
  captions?: string[]
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/fjg090403-ui', Icon: GitBranch },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fran-requena-282ab133b/', Icon: Network },
  { label: 'Email', href: 'mailto:fjg090403@gmail.com', Icon: Mail },
  { label: 'CV', href: '/Francisco_Javier_Requena_Garcia_CV.pdf', Icon: Download },
]

export const routes = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre mí', path: '/sobre-mi' },
  { label: 'Stack', path: '/stack' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Lab', path: '/lab' },
  { label: 'Contacto', path: '/contacto' },
]

export const techGroups: TechGroup[] = [
  { title: 'Frontend', accent: '#7c8cff', Icon: Layers3, items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Flutter'] },
  { title: 'Backend', accent: '#b16cff', Icon: Terminal, items: ['Symfony', 'Spring Boot', 'Java', 'PHP', 'Node.js'] },
  { title: 'Datos', accent: '#28d8ff', Icon: Database, items: ['PostgreSQL', 'MySQL', 'Modelado', 'APIs', 'Queries'] },
  { title: 'Herramientas', accent: '#6fffd2', Icon: Workflow, items: ['Docker', 'Git', 'GitHub', 'Linux', 'Postman'] },
  { title: 'IA', accent: '#ff70cf', Icon: BrainCircuit, items: ['Python', 'MediaPipe', 'IA', 'Big Data', 'Visión'] },
]

export const projects: Project[] = [
  {
    slug: 'saas-project-manager',
    title: 'SaaS Project Manager',
    tag: 'Producto',
    description: 'Plataforma SaaS para planificar proyectos, coordinar equipos y seguir el progreso en tiempo real.',
    detail: 'Sistema de gestión de proyectos con tableros Kanban, tareas, roles de usuario, control de progreso, paneles administrativos y colaboración en tiempo real. La propuesta combina una experiencia de producto clara con una arquitectura backend preparada para equipos y permisos.',
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker', 'Angular/React'],
    accent: '#b16cff',
    signal: 'Tableros, usuarios, tareas, analítica',
    visual: 'saas',
    images: [
      '/projects/saas-project-manager/6.png',
      '/projects/saas-project-manager/2.png',
      '/projects/saas-project-manager/Sin título.png',
      '/projects/saas-project-manager/3.png',
      '/projects/saas-project-manager/4.png',
      '/projects/saas-project-manager/7.png',
      '/projects/saas-project-manager/9.png',
    ],
    captions: ['Kanban', 'Dashboard admin', 'Usuarios admin', 'Login', 'Dashboard usuarios', 'Perfil tema claro', 'Perfil tema oscuro'],
  },
  {
    slug: 'app-pedidos-restaurante',
    title: 'App Pedidos Restaurante',
    tag: 'Operaciones',
    description: 'Sistema integral para gestionar comandas, mesas, productos, caja y comunicación entre cocina y sala.',
    detail: 'Aplicación orientada a digitalizar la operativa de un restaurante completo. Permite gestionar mesas y sectores, productos, ingredientes, extras, estados de pedidos, comanda manual, caja y comunicación en tiempo real entre sala y cocina.',
    stack: ['Symfony 6', 'Next.js', 'PostgreSQL', 'Docker', 'Mercure'],
    accent: '#6fffd2',
    signal: 'Pedidos, roles, estados, panel operativo',
    visual: 'orders',
    images: [
      '/projects/app-pedidos-restaurante/1.png',
      '/projects/app-pedidos-restaurante/2.png',
      '/projects/app-pedidos-restaurante/3.png',
      '/projects/app-pedidos-restaurante/4.png',
      '/projects/app-pedidos-restaurante/5.png',
      '/projects/app-pedidos-restaurante/6.png',
      '/projects/app-pedidos-restaurante/7.png',
      '/projects/app-pedidos-restaurante/8.png',
      '/projects/app-pedidos-restaurante/9.png',
      '/projects/app-pedidos-restaurante/10.png',
    ],
    captions: ['Login', 'Dashboard', 'Comandas', 'Comandas cocina', 'Comanda manual', 'Caja', 'Editor carta', 'Mesas y sectores', 'Equipo', 'Interfaz móvil'],
  },
  {
    slug: 'reconocimiento-corporal-ia',
    title: 'Sistema de Reconocimiento Corporal Inteligente',
    tag: 'Computer vision',
    description: 'Aplicación de visión artificial para detectar y analizar movimientos corporales en tiempo real.',
    detail: 'Sistema capaz de detectar posturas y gestos mediante la cámara del dispositivo, visualizando puntos corporales, trayectorias y mapas de calor. Está pensado para monitorizar movimiento, interpretar patrones corporales y convertir la captura visual en señales comprensibles.',
    stack: ['Python', 'MediaPipe', 'PySide6', 'OpenCV', 'NumPy'],
    accent: '#ff70cf',
    signal: 'Pose tracking, vision, datos, prototipo',
    visual: 'pose',
    images: [
      '/projects/reconocimiento-corporal-ia/Sin título.png',
      '/projects/reconocimiento-corporal-ia/as.png',
      '/projects/reconocimiento-corporal-ia/ss.png',
      '/projects/reconocimiento-corporal-ia/ww.png',
    ],
    captions: ['Evidencia reconocimiento 1', 'Evidencia reconocimiento 2', 'Evidencia reconocimiento 3', 'Mapa de calor y trayectoria'],
  },
  {
    slug: 'evex',
    title: 'EVEX',
    tag: 'Gestión de eventos',
    description: 'Plataforma web para gestionar eventos, usuarios, inscripciones y paneles administrativos.',
    detail: 'Aplicación centrada en la gestión de eventos y el registro de usuarios a eventos. Incluye listado y detalle de eventos, inscripción, gestión de perfiles, panel de administración, control de roles y una base API preparada para operar con datos persistentes.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    accent: '#fb7185',
    signal: 'Eventos, asistentes, roles, correo, PDF',
    visual: 'evex',
    images: [
      '/projects/evex/01-overview.png',
      '/projects/evex/ev.png',
      '/projects/evex/02-detail.png',
      '/projects/evex/03-events.png',
      '/projects/evex/04-admin.png',
      '/projects/evex/05-form.png',
      '/projects/evex/06-flow.png',
    ],
    captions: ['Inicio', 'Listado de eventos', 'Evento', 'Mis eventos', 'Perfil', 'Dashboard admin', 'Eventos admin'],
  },
  {
    slug: 'la-mocha-casa-rural',
    title: 'La Mocha Casa Rural',
    tag: 'Web y app móvil',
    description: 'Web WordPress con información de La Mocha, reservas para dos casas rurales y tour virtual.',
    detail: 'Proyecto compuesto por una web en WordPress orientada a presentar La Mocha, mostrar información útil del alojamiento y gestionar reservas para dos casas rurales. Además incorpora un tour virtual y una aplicación móvil para usar dentro de la casa, con fichaje, firma de documentos y minijuegos para mejorar la experiencia del huésped.',
    stack: ['WordPress', 'Flutter', 'Dart', 'Reservas', 'Tour 3D'],
    accent: '#7c8cff',
    signal: 'Identidad, conversión, responsive, rendimiento',
    visual: 'rural',
    images: [
      '/projects/la-mocha-casa-rural/1.png',
      '/projects/la-mocha-casa-rural/2.png',
      '/projects/la-mocha-casa-rural/3.png',
    ],
    captions: ['Home', 'Reservas', 'Tour virtual 3D'],
  },
  {
    slug: 'adult-income-dataset',
    title: 'Adult Income Prediction',
    tag: 'Machine learning',
    description: 'Análisis de datos y aprendizaje automático para predecir niveles de ingresos.',
    detail: 'Proyecto orientado a predecir el nivel de ingresos de una persona a partir de variables demográficas y laborales. Incluye limpieza, exploración, visualización de patrones, clasificación y evaluación de modelos para interpretar qué factores influyen en la predicción.',
    stack: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Jupyter'],
    accent: '#38bdf8',
    signal: 'EDA, distribuciones, correlaciones, variables categóricas',
    visual: 'income',
    images: [
      '/projects/adult-income-dataset/portada.png',
      '/projects/adult-income-dataset/descarga.png',
      '/projects/adult-income-dataset/2.png',
      '/projects/adult-income-dataset/3.png',
      '/projects/adult-income-dataset/4.png',
      '/projects/adult-income-dataset/5.png',
      '/projects/adult-income-dataset/6.png',
      '/projects/adult-income-dataset/7.png',
    ],
    captions: ['Código', 'Heatmap', 'Capital ganado por horas trabajadas', 'Capital perdido por horas trabajadas', 'Distribución racial', 'Ingresos por género', 'Histograma', 'Comparativa de variables'],
  },
  {
    slug: 'dashboard-power-bi',
    title: 'Dashboard Power BI - Industria del Videojuego',
    tag: 'Business intelligence',
    description: 'Dashboard interactivo para analizar ventas, géneros, regiones y evolución del mercado del videojuego.',
    detail: 'Cuadro de mando enfocado en el análisis de la industria del videojuego. Permite visualizar tendencias de ventas, géneros más populares, distribución geográfica y evolución temporal mediante KPIs, filtros y visualizaciones orientadas a decisión.',
    stack: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Modelado'],
    accent: '#facc15',
    signal: 'KPIs, filtros, series temporales, insight ejecutivo',
    visual: 'powerbi',
    images: [
      '/projects/dashboard-power-bi/POWERbI.png',
    ],
    captions: ['Dashboard'],
  },
  {
    slug: 'workflow-knime',
    title: 'Análisis de Datos con KNIME',
    tag: 'Data workflow',
    description: 'Flujo visual para automatizar preparación, transformación y explotación de datos.',
    detail: 'Proyecto centrado en la automatización de procesos de análisis mediante KNIME. El flujo permite preparar datos, transformar variables, explotar resultados y obtener información relevante para apoyar la toma de decisiones.',
    stack: ['KNIME Analytics', 'ETL', 'Data Mining', 'Visual Analytics'],
    accent: '#f59e0b',
    signal: 'Nodos, limpieza, transformaciones, validación',
    visual: 'knime',
    images: [
      '/projects/workflow-knime/knime.png',
    ],
    captions: ['Workflow'],
  },

]

export const labItems = ['IA aplicada', 'Automatización', 'APIs', 'Dashboards', 'Apps móviles', 'Experimentos']
