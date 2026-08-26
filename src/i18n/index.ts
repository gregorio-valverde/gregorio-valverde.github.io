export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      decisions: 'Decisions',
      publications: 'Publications',
      journey: 'Journey',
      writing: 'Writing',
      speaking: 'Speaking',
      uses: 'Uses',
      contact: 'Contact',
    },
    home: {
      eyebrow: 'Data Engineering · BI · Analytics',
      title: 'I build practical data systems for business operations.',
      subtitle: 'Data pipelines, analytical models, and dashboards designed to turn operational data into useful business insights.',
      viewProjects: 'View Projects',
      contact: 'Contact',
      intro1: "I'm {name}, a {title} based in Murcia, Spain.",
      intro2: 'My background in Physics helps me approach business problems with analytical thinking, structure, and technical depth.',
      journeyLink: 'Read more about my journey',
      selectedWork: 'Selected work',
      featuredProjects: 'Featured Projects',
      viewAll: 'View all',
      fallbackDataEngineering: 'Data Engineering',
      fallbackProject1: 'Corporate Data Warehouse',
      fallbackProject1Description: 'Designing a data platform to centralize, transform, and analyze HR information.',
      fallbackBI: 'Business Intelligence',
      fallbackProject2: 'Power BI Dashboards',
      fallbackProject2Description: 'Building dashboards to transform operational data into business indicators.',
      ctaTitle: "Interested? Let's Talk",
      viewMyWork: 'View My Work',
      getInTouch: 'Get in Touch',
    },
    projects: {
      title: 'Projects - Data & Analytics Case Studies',
      description: 'Case studies about Business Intelligence, Data Engineering, analytics, automation, and practical data solutions for business operations.',
      heading: 'Projects',
      intro: 'A selection of projects where I document business problems, data architecture decisions, technical implementation, and the value delivered through data pipelines, analytical models, and dashboards.',
      stats: (total: number, featured: number) => `${total} projects · ${featured} featured`,
      empty: 'No projects available yet.',
      viewCaseStudy: 'View case study',
      featured: 'Featured',
      completed: 'Completed',
      ongoing: 'Ongoing',
      archived: 'Archived',
    },
    projectDetail: {
      caseStudy: 'Case Study',
      person: 'person',
      people: 'people',
      minRead: 'min read',
      overview: 'Overview',
      problem: 'Problem',
      constraints: 'Constraints',
      approach: 'Approach',
      keyDecisions: 'Key Decisions',
      reasoning: 'Reasoning:',
      alternatives: 'Alternatives considered:',
      techStack: 'Tech Stack',
      resultImpact: 'Result & Impact',
      learnings: 'Learnings',
      related: 'Related',
      allProjects: 'All projects',
    },
    decisions: {
      title: 'Technical Decisions - Data Engineering & BI',
      description: 'Technical decisions about data architecture, ETL pipelines, analytical modeling, dashboards, and maintainable data solutions.',
      heading: 'Technical Decisions',
      intro: 'A log of technical decisions made while building data and analytics solutions. Each entry explains the context, alternatives considered, reasoning, and trade-offs behind the decision.',
      stats: (total: number) => `${total} decisions`,
      empty: 'No decisions documented yet.',
      readDecision: 'Read decision',
      detailTitleSuffix: 'Decision Record',
      context: 'Context',
      decision: 'Decision',
      alternatives: 'Alternatives Considered',
      pros: 'Pros',
      cons: 'Cons',
      reasoning: 'Reasoning',
      allDecisions: 'All decisions',
    },
    publications: {
      title: 'Publications - Data Engineering & Analytics',
      description: 'Technical decisions, articles and reflections about data engineering, analytics and architecture.',
      heading: 'Publications',
      intro: 'Technical decisions, deeper articles and reflections. Filter the content depending on what you want to explore.',
      all: 'All',
      decision: 'Decisions',
      article: 'Articles',
      reflection: 'Reflections',
      read: 'Read publication',
      empty: 'No publications match this filter.',
      demo: 'Sample content',
      types: { decision: 'Decision', article: 'Article', reflection: 'Reflection' },
    },
    journey: {
      title: 'Journey - Career Growth in Data & Analytics',
      description: 'A timeline of my professional development in Business Intelligence, Data Engineering, Analytics, and Digital Transformation.',
      heading: 'Journey',
      intro: 'A timeline of my professional growth, from Physics and data analysis to real business projects involving BI, data engineering, automation, and digital transformation.',
      empty: 'No journey entries yet.',
      milestone: 'Milestone',
      learning: 'Learning',
      experience: 'Experience',
      skills: 'Skills:',
      readMore: 'Read more',
    },
    contact: {
      title: 'Contact - Get in Touch',
      description: 'Get in touch if you want to discuss data, technology, business, projects, or ideas.',
      heading: "Let's Talk",
      context: 'I read every email. Expect a reply within a few days.',
      elsewhere: 'Elsewhere',
    },
    related: {
      title: 'Related',
      caseStudies: 'Case Studies',
      decisions: 'Decisions',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      decisions: 'Decisiones',
      publications: 'Publicaciones',
      journey: 'Trayectoria',
      writing: 'Artículos',
      speaking: 'Charlas',
      uses: 'Stack',
      contact: 'Contacto',
    },
    home: {
      eyebrow: 'Data Engineering · BI · Analytics',
      title: 'Construyo sistemas de datos prácticos para operaciones de negocio.',
      subtitle: 'Pipelines de datos, modelos analíticos y cuadros de mando diseñados para convertir datos operativos en información útil para el negocio.',
      viewProjects: 'Ver proyectos',
      contact: 'Contacto',
      intro1: 'Soy {name}, {title}, y trabajo desde Murcia, España.',
      intro2: 'Mi formación en Física me ayuda a abordar problemas de negocio con pensamiento analítico, estructura y profundidad técnica.',
      journeyLink: 'Conoce mi trayectoria',
      selectedWork: 'Trabajo seleccionado',
      featuredProjects: 'Proyectos destacados',
      viewAll: 'Ver todos',
      fallbackDataEngineering: 'Data Engineering',
      fallbackProject1: 'Data Warehouse corporativo',
      fallbackProject1Description: 'Diseño de una plataforma de datos para centralizar, transformar y analizar información de RR. HH.',
      fallbackBI: 'Business Intelligence',
      fallbackProject2: 'Cuadros de mando Power BI',
      fallbackProject2Description: 'Construcción de cuadros de mando para transformar datos operativos en indicadores de negocio.',
      ctaTitle: '¿Te interesa? Hablemos',
      viewMyWork: 'Ver mi trabajo',
      getInTouch: 'Contactar',
    },
    projects: {
      title: 'Proyectos - Casos de Data & Analytics',
      description: 'Casos prácticos sobre Business Intelligence, Data Engineering, analítica, automatización y soluciones de datos aplicadas al negocio.',
      heading: 'Proyectos',
      intro: 'Una selección de proyectos donde documento el problema de negocio, las decisiones de arquitectura de datos, la implementación técnica y el valor aportado mediante pipelines, modelos analíticos y cuadros de mando.',
      stats: (total: number, featured: number) => `${total} proyectos · ${featured} destacados`,
      empty: 'Todavía no hay proyectos disponibles en español.',
      viewCaseStudy: 'Ver caso de estudio',
      featured: 'Destacado',
      completed: 'Completado',
      ongoing: 'En curso',
      archived: 'Archivado',
    },
    projectDetail: {
      caseStudy: 'Caso de estudio',
      person: 'persona',
      people: 'personas',
      minRead: 'min de lectura',
      overview: 'Resumen',
      problem: 'Problema',
      constraints: 'Restricciones',
      approach: 'Enfoque',
      keyDecisions: 'Decisiones clave',
      reasoning: 'Motivo:',
      alternatives: 'Alternativas consideradas:',
      techStack: 'Stack tecnológico',
      resultImpact: 'Resultado e impacto',
      learnings: 'Aprendizajes',
      related: 'Relacionado',
      allProjects: 'Todos los proyectos',
    },
    decisions: {
      title: 'Decisiones técnicas - Data Engineering & BI',
      description: 'Decisiones técnicas sobre arquitectura de datos, pipelines ETL, modelado analítico, cuadros de mando y soluciones de datos mantenibles.',
      heading: 'Decisiones técnicas',
      intro: 'Un registro de decisiones técnicas tomadas al construir soluciones de datos y analítica. Cada entrada explica el contexto, las alternativas, el razonamiento y los compromisos de la decisión.',
      stats: (total: number) => `${total} decisiones`,
      empty: 'Todavía no hay decisiones documentadas en español.',
      readDecision: 'Leer decisión',
      detailTitleSuffix: 'Registro de decisión',
      context: 'Contexto',
      decision: 'Decisión',
      alternatives: 'Alternativas consideradas',
      pros: 'Ventajas',
      cons: 'Inconvenientes',
      reasoning: 'Razonamiento',
      allDecisions: 'Todas las decisiones',
    },
    publications: {
      title: 'Publicaciones - Data Engineering & Analytics',
      description: 'Decisiones técnicas, artículos y reflexiones sobre ingeniería de datos, analítica y arquitectura.',
      heading: 'Publicaciones',
      intro: 'Decisiones técnicas, artículos más desarrollados y reflexiones. Puedes filtrar el contenido según lo que quieras explorar.',
      all: 'Todas',
      decision: 'Decisiones',
      article: 'Artículos',
      reflection: 'Reflexiones',
      read: 'Leer publicación',
      empty: 'No hay publicaciones para este filtro.',
      demo: 'Contenido de ejemplo',
      types: { decision: 'Decisión', article: 'Artículo', reflection: 'Reflexión' },
    },
    journey: {
      title: 'Trayectoria - Evolución profesional en Data & Analytics',
      description: 'Una línea temporal de mi desarrollo profesional en Business Intelligence, Data Engineering, Analytics y Transformación Digital.',
      heading: 'Trayectoria',
      intro: 'Una línea temporal de mi evolución profesional, desde Física y el análisis de datos hasta proyectos reales de BI, ingeniería de datos, automatización y transformación digital.',
      empty: 'Todavía no hay entradas de trayectoria en español.',
      milestone: 'Hito',
      learning: 'Aprendizaje',
      experience: 'Experiencia',
      skills: 'Competencias:',
      readMore: 'Leer más',
    },
    contact: {
      title: 'Contacto',
      description: 'Contacta conmigo si quieres hablar sobre datos, tecnología, negocio, proyectos o ideas.',
      heading: 'Hablemos',
      context: 'Leo todos los correos. Normalmente respondo en pocos días.',
      elsewhere: 'También puedes encontrarme en',
    },
    related: {
      title: 'Relacionado',
      caseStudies: 'Casos de estudio',
      decisions: 'Decisiones',
    },
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'es';
}

export function stripLocale(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/' || pathname === '/es' || pathname === '/es/') return '/';
  if (pathname.startsWith('/en/') || pathname.startsWith('/es/')) return pathname.slice(3) || '/';
  return pathname || '/';
}

export function localizePath(pathname: string, lang: Lang): string {
  const clean = stripLocale(pathname);
  if (lang === 'es') return clean;
  return clean === '/' ? '/en/' : `/en${clean.startsWith('/') ? clean : `/${clean}`}`;
}

export function switchLanguagePath(pathname: string, targetLang: Lang): string {
  return localizePath(pathname, targetLang);
}

export function contentLang(id: string): Lang | null {
  const first = id.split('/')[0];
  return first === 'en' || first === 'es' ? first : null;
}

export function contentSlug(id: string): string {
  return id
    .replace(/^(en|es)\//, '')
    .replace(/\.(md|mdx)$/i, '');
}

export function localeCode(lang: Lang): string {
  return lang === 'es' ? 'es-ES' : 'en-US';
}

export function translateTemplate(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template,
  );
}
