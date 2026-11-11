import { info } from "@data";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

const ui = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.techStack": "Tech Stack",
    "nav.contact": "Contact",
    "nav.switch": "Español",
    "hero.greeting": "Hey, I’m",
    "home.title": "Portfolio",
    "home.experience": "EXPERIENCE",
    "home.featured": "FEATURED PROJECTS",
    "projects.title": "Projects",
    "projects.description": "All projects are available in this page.",
    "project.techStack": "Tech Stack",
    "project.source": "Source code",
    "project.live": "Live site",
    "stack.title": "TECH STACK",
    "stack.frameworks": "Frameworks & Languages",
    "stack.css": "CSS",
    "stack.other": "Others",
    "stack.databases": "Databases",
    "stack.cloud": "Cloud",
    "stack.testing": "Testing",
    "contact.title": "CONTACT ME",
    "contact.email": "You can email me here",
    "contact.call": "You can call me here",
    "contact.whatsapp": "You can WhatsApp me here",
    "contact.social": "My social profiles",
    "form.firstName": "First name",
    "form.lastName": "Last name",
    "form.email": "Email",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.send": "Send message",
    "form.sent": "Thanks! Your message was sent.",
    "form.invalid": "Please fill in every field with a valid email address.",
    "form.error": "Your message couldn't be sent. Please try again or email me directly.",
  },
  es: {
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.techStack": "Tecnologías",
    "nav.contact": "Contacto",
    "nav.switch": "English",
    "hero.greeting": "Hola, soy",
    "home.title": "Portafolio",
    "home.experience": "EXPERIENCIA",
    "home.featured": "PROYECTOS DESTACADOS",
    "projects.title": "Proyectos",
    "projects.description": "Todos mis proyectos están disponibles en esta página.",
    "project.techStack": "Tecnologías",
    "project.source": "Código fuente",
    "project.live": "Sitio en vivo",
    "stack.title": "TECNOLOGÍAS",
    "stack.frameworks": "Frameworks y lenguajes",
    "stack.css": "CSS",
    "stack.other": "Otras",
    "stack.databases": "Bases de datos",
    "stack.cloud": "Nube",
    "stack.testing": "Pruebas",
    "contact.title": "CONTÁCTAME",
    "contact.email": "Escríbeme por correo",
    "contact.call": "Llámame",
    "contact.whatsapp": "Escríbeme por WhatsApp",
    "contact.social": "Mis redes",
    "form.firstName": "Nombre",
    "form.lastName": "Apellido",
    "form.email": "Correo electrónico",
    "form.subject": "Asunto",
    "form.message": "Mensaje",
    "form.send": "Enviar mensaje",
    "form.sent": "¡Gracias! Tu mensaje fue enviado.",
    "form.invalid": "Por favor llena todos los campos con un correo válido.",
    "form.error": "No se pudo enviar tu mensaje. Intenta de nuevo o escríbeme directamente.",
  },
} satisfies Record<Locale, Record<string, string>>;

const toLocale = (locale?: string): Locale => (locale === "es" ? "es" : "en");

export const useTranslations = (locale?: string) => {
  const dict = ui[toLocale(locale)];
  return (key: keyof (typeof ui)["en"]) => dict[key];
};

// Path of the same page in the other language (English has no prefix)
export const alternatePath = (pathname: string, locale?: string) =>
  toLocale(locale) === "es" ? pathname.replace(/^\/es(?=\/|$)/, "") || "/" : `/es${pathname}`;

const es = {
  about: `Soy ingeniero de software en Toluca, México, especializado en desarrollo front-end, con más de seis años de experiencia creando aplicaciones web.
   Actualmente soy Staff Software Engineer en Contrast Security, donde construyo la interfaz de la plataforma Northstar: micro frontends para gestión de agentes, control de acceso, políticas y CVE Shield, además del design system compartido sobre el que se construyen.
   Trabajo principalmente con TypeScript, React, Next.js, GraphQL y Tailwind CSS, y me importan la accesibilidad, las pruebas y la documentación clara.
   Sigo aprendiendo y explorando nuevas tecnologías, como Node.js, NestJS, Astro, Svelte y React Native.
  `,
  // Same order as info.experience
  experience: [
    {
      endDate: "Actualidad",
      startDate: "Jun 2024",
      description: [
        "- Northstar UI: contribuí al rediseño de toda la plataforma, reconstruyendo módulos clave de la interfaz para centralizar el acceso a los flujos de seguridad más importantes.",
        "- Agent Management y Agent Wizard: construí el panel para monitorear y administrar los agentes de Contrast en distintos entornos, y el asistente guiado que acompaña a los equipos en la instalación de agentes Flex, por lenguaje y del Kubernetes Operator.",
        "- Access Control: lideré los micro frontends de control de acceso basado en roles (usuarios, grupos, roles y permisos de vista) que definen quién puede ver y modificar qué en la plataforma.",
        "- CVE Shield: contribuí a la interfaz de la protección en tiempo de ejecución de Contrast, que bloquea la explotación de CVEs conocidos, como Log4Shell y Spring4Shell, en aplicaciones en producción.",
        "- Policies: trabajé en las pantallas donde los equipos de seguridad definen y administran las reglas y políticas aplicadas a sus aplicaciones.",
        "- Design system: aporté componentes compartidos, implementaciones de referencia y documentación para que los equipos construyeran micro frontends consistentes rápidamente.",
        "- Herramientas y calidad: actualicé el toolchain front-end (Yarn 1.22 → 4.9, ESLint 8 → 9) manteniendo compatibilidad, y optimicé los flujos E2E, reduciendo el tiempo de ejecución ~20% y aumentando la cobertura de pruebas ~15%.",
        "- Habilidades: React, TypeScript, GraphQL, TanStack Query, Webpack Module Federation, Playwright",
      ],
    },
    {
      startDate: "Nov 2023",
      endDate: "Jun 2024",
      description: [
        "- Reconstruí la app Tuboplus con React Native como PWA y app web responsiva, ampliando el soporte a dispositivos antiguos.",
        "- Desarrollé un chatbot tipo preguntas frecuentes que guía a los usuarios a la información que necesitan.",
        "- Apliqué diseño responsivo para mejorar la experiencia en distintas plataformas y dispositivos.",
        "- Habilidades: React Native, React, PWA, TypeScript",
      ],
    },
    {
      name: "Ingeniero de Software y de Pruebas",
      location: "Iwaconsolti (para Contrast Security)",
      startDate: "Nov 2022",
      endDate: "Oct 2023",
      description: [
        "- Trabajé en el dashboard de Contrast Security: accesibilidad, pruebas, internacionalización y proceso de UX.",
        "- Integré un nuevo micro frontend para el sistema de control de acceso basado en roles (RBAC).",
        "- Alcancé el 100% de cobertura de traducciones y aumenté el cumplimiento de WCAG en un 30%.",
        "- Mantuve la cobertura de pruebas de UI en 95% y reduje los defectos en 15% mediante code reviews.",
        "- Habilidades: React, GraphQL, Webpack Module Federation, Playwright, Jest, Testing Library",
      ],
    },
    {
      name: "Desarrollador Fullstack",
      startDate: "Ago 2021",
      endDate: "Nov 2022",
      description: [
        "- Contribuí a múltiples proyectos en distintas industrias.",
        "- Optimicé el renderizado y las respuestas de API, mejorando la experiencia de usuario en 20%.",
        "- Construí visualizaciones de datos, ingesta de archivos CSV/XLSX y pipelines conectados a modelos de machine learning.",
        "- Apoyé al equipo como referente y mantuve altos estándares de código y documentación.",
        "- Habilidades: React, Next.js, Apollo GraphQL, Node.js, TypeORM, Ant Design, Firebase, AWS",
      ],
    },
    {
      name: "Ingeniero de Software y Arquitecto Frontend",
      startDate: "May 2020",
      endDate: "Ago 2021",
      description: [
        "- Desarrollé aplicaciones de back-office y dashboards para pequeñas empresas.",
        "- Lideré y guié a desarrolladores trainee, asegurando estándares de código y buenas prácticas de arquitectura.",
        "- Optimicé pipelines de CI/CD y mejoré el rendimiento de renderizado y APIs en 20%.",
        "- Habilidades: React, NestJS, Svelte, SvelteKit, Ionic, GraphQL, Prisma, Firebase, Ant Design, Tailwind, Vue, Nuxt, Jest, Testing Library",
      ],
    },
  ],
  projects: {
    1: "Es una aplicación demo creada por el equipo de Next.js para mostrar las novedades de Next.js 14. Sirve como referencia práctica para desarrolladores, mostrando cómo aplicar estas funcionalidades en proyectos reales. El dashboard incluye autenticación de usuarios, gestión de clientes, asignación de facturas y un resumen general. Está basado en el tutorial oficial de Next.js 14 creado por Vercel, y su código sirve para aprender a construir aplicaciones similares con Next.js.",
    2: "Es una recopilación de ejemplos prácticos de distintas tecnologías de búsqueda indexada. Actualmente incluye un ejemplo con Algolia, que muestra su búsqueda ultrarrápida y sus APIs fáciles de usar. Próximamente se agregarán OpenSearch (un motor de búsqueda open source y autoalojado basado en Elasticsearch) y el propio Elasticsearch. Los ejemplos destacan la precisión, escalabilidad, personalización y rendimiento de los motores de búsqueda indexada.",
  } as Record<number, string>,
};

if (es.experience.length !== info.experience.length) {
  throw new Error("i18n: es.experience must have one entry per info.experience job, in the same order");
}

// Site data in the requested language; English is the source, Spanish overrides the text fields
export const getInfo = (locale?: string): typeof info =>
  toLocale(locale) === "en"
    ? info
    : {
        ...info,
        about: es.about,
        experience: info.experience.map((job, i) => ({ ...job, ...es.experience[i] })),
        projects: info.projects.map((p) => ({ ...p, description: es.projects[p.id] ?? p.description })),
      };
