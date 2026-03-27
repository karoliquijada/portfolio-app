export type Locale = 'en' | 'es'

export const translations = {
  en: {
    nav: {
      services: 'Services',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      getInTouch: 'Get in touch',
    },
    hero: {
      available: 'Available for new projects',
      headline: 'I help businesses fix, improve, and build web features',
      headlineAccent: 'quickly.',
      description:
        'Full-stack developer specialized in checkout optimization, UI/UX improvements, and SaaS platforms. Laravel + Vue expert with a focus on delivering real business impact.',
      primaryCta: 'Get help with your project',
      secondaryCta: 'View my work',
      fast: 'Fast turnaround',
      async: 'Async-friendly',
      reliable: 'Reliable results',
      yearsLabel: 'Years of experience',
      projectsLabel: 'Projects completed',
      hoursLabel: 'Hours/week available',
      responseLabel: 'Response time',
    },
    services: {
      label: 'Services',
      heading: 'How I can help you',
      subheading:
        'Whether you need a quick fix or a full feature build, I focus on delivering quality work that makes a measurable difference to your business.',
      items: [
        {
          title: 'Bug Fixing & Feature Improvements',
          description:
            'Quick diagnosis and resolution of bugs, performance issues, and feature enhancements. Clean, tested code that integrates seamlessly with your existing codebase.',
        },
        {
          title: 'Checkout & Payment Flow Optimization',
          description:
            'Streamline your checkout process to reduce cart abandonment and increase conversions. Payment gateway integrations, validation improvements, and UX optimization.',
        },
        {
          title: 'UI/UX Improvements',
          description:
            'Transform clunky interfaces into clean, intuitive experiences. Responsive design, accessibility improvements, and modern component libraries.',
        },
        {
          title: 'API Integrations',
          description:
            'Connect your application with third-party services. REST APIs, webhooks, payment processors, email services, and custom integrations.',
        },
      ],
      ctaTitle: 'Have a different project in mind?',
      ctaDesc: "Let's discuss your specific requirements.",
      ctaLink: 'Get in touch',
    },
    portfolio: {
      label: 'Portfolio',
      heading: 'Selected work',
      subheading:
        "Real projects with real results. Here's a selection of work that showcases my approach to solving problems.",
      theProblem: 'The Problem',
      theSolution: 'The Solution',
      bottomCta: 'Want to discuss a similar project?',
      projects: [
        {
          title: 'Checkout Flow Optimization',
          category: 'E-commerce',
          description:
            'Redesigned a multi-step checkout process for an e-commerce platform, reducing cart abandonment by 35% and improving conversion rates.',
          problem:
            'Complex checkout with too many steps, confusing validation, and poor mobile experience leading to high abandonment rates.',
          solution:
            'Simplified to a streamlined 2-step process, added real-time validation, optimized for mobile, and integrated address autocomplete.',
          metrics: [
            { label: 'Cart abandonment', value: '-35%' },
            { label: 'Conversion rate', value: '+22%' },
            { label: 'Mobile orders', value: '+40%' },
          ],
        },
        {
          title: 'Online Course Platform',
          category: 'SaaS',
          description:
            'Built a full-featured learning management system with role-based access, payment integration, and interactive course management.',
          problem:
            'Client needed a scalable platform for selling and managing online courses with different user roles and payment processing.',
          solution:
            'Developed a complete SaaS solution with student, instructor, and admin dashboards, Stripe subscriptions, and progress tracking.',
          metrics: [
            { label: 'User roles', value: '3' },
            { label: 'Course modules', value: '100+' },
            { label: 'Active users', value: '2k+' },
          ],
        },
        {
          title: 'Dashboard & Checkout UI Template',
          category: 'UI Components',
          description:
            'Created a reusable component library and dashboard template focused on checkout flows and admin interfaces.',
          problem:
            'Development teams spending too much time building common UI patterns from scratch for each new project.',
          solution:
            'Built a comprehensive component library with pre-built checkout flows, data tables, charts, and responsive layouts.',
          metrics: [
            { label: 'Components', value: '50+' },
            { label: 'Dev time saved', value: '40%' },
            { label: 'Projects using it', value: '8' },
          ],
        },
      ],
    },
    about: {
      label: 'About',
      heading: 'Building software that makes a difference',
      p1: "I'm Karoli, a full-stack developer with years of experience helping startups, SaaS companies, and product teams ship better software faster.",
      p2Prefix: 'My focus is on',
      p2Highlight: 'checkout optimization, UI/UX improvements, and SaaS features',
      p2Suffix: '— the areas where small changes often create the biggest business impact.',
      p3: 'I understand that you need someone who can jump in, understand your codebase quickly, and deliver quality work without endless back-and-forth. That\'s exactly how I operate.',
      howIWork: 'How I work',
      workingStyle: [
        'Clear, responsive communication',
        'Understanding your business goals',
        'Clean, maintainable code',
        'Fast turnaround without cutting corners',
        'Flexible scheduling for your timezone',
      ],
      yearsLabel: 'Years Experience',
      projectsLabel: 'Projects Delivered',
    },
    techStack: {
      label: 'Tech Stack',
      heading: 'Technologies I work with',
      subheading:
        'Focused on the Laravel and Vue ecosystem, with expertise in payment integrations and responsive design.',
      backend: 'Backend',
      backendDesc: 'Laravel, PHP, REST APIs, Database design',
      frontend: 'Frontend',
      frontendDesc: 'Vue.js, JavaScript, Tailwind CSS, Responsive UI',
      integration: 'Integration',
      integrationDesc: 'Payment gateways, Third-party APIs, Webhooks',
    },
    contact: {
      label: 'Contact',
      heading: 'Need something fixed or improved quickly?',
      description:
        "Whether it's a bug that needs squashing, a checkout flow that needs optimizing, or a new feature that needs building — I'm here to help. Let's talk about your project.",
      emailLabel: 'Email me directly',
      responseTimeLabel: 'Typical response time:',
      responseTimeValue: 'Within 24 hours',
      formTitle: 'Send a message',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailFieldLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Project details',
      messagePlaceholder: 'Tell me about your project...',
      submitBtn: 'Send message',
      bottomCtaTitle: 'Ready to improve your product?',
      bottomCtaDesc:
        'I work with startups, SaaS companies, and product teams who need reliable development help without the overhead.',
      bottomCtaBtn: "Let's talk",
    },
    footer: {
      subtitle: 'Full-Stack Developer · Laravel + Vue',
      allRights: 'All rights reserved.',
      services: 'Services',
      work: 'Work',
      contact: 'Contact',
    },
  },

  es: {
    nav: {
      services: 'Servicios',
      work: 'Trabajos',
      about: 'Acerca',
      contact: 'Contacto',
      getInTouch: 'Contáctame',
    },
    hero: {
      available: 'Disponible para nuevos proyectos',
      headline: 'Ayudo a negocios a corregir, mejorar y construir funcionalidades web',
      headlineAccent: 'rápido.',
      description:
        'Desarrolladora full-stack especializada en optimización de checkout, mejoras de UI/UX y plataformas SaaS. Experta en Laravel + Vue con enfoque en generar impacto real para tu negocio.',
      primaryCta: 'Obtén ayuda con tu proyecto',
      secondaryCta: 'Ver mi trabajo',
      fast: 'Entrega rápida',
      async: 'Trabajo asíncrono',
      reliable: 'Resultados confiables',
      yearsLabel: 'Años de experiencia',
      projectsLabel: 'Proyectos completados',
      hoursLabel: 'Horas/semana disponibles',
      responseLabel: 'Tiempo de respuesta',
    },
    services: {
      label: 'Servicios',
      heading: 'Cómo puedo ayudarte',
      subheading:
        'Ya sea que necesites una corrección rápida o una funcionalidad completa, me enfoco en entregar trabajo de calidad que genere una diferencia medible para tu negocio.',
      items: [
        {
          title: 'Corrección de Errores y Mejoras',
          description:
            'Diagnóstico y resolución rápida de bugs, problemas de rendimiento y mejoras de funcionalidades. Código limpio y probado que se integra perfectamente con tu código existente.',
        },
        {
          title: 'Optimización de Checkout y Pagos',
          description:
            'Optimiza tu proceso de pago para reducir el abandono del carrito y aumentar las conversiones. Integraciones de pasarelas de pago, mejoras de validación y optimización de UX.',
        },
        {
          title: 'Mejoras de UI/UX',
          description:
            'Transforma interfaces torpes en experiencias limpias e intuitivas. Diseño responsivo, mejoras de accesibilidad y bibliotecas de componentes modernos.',
        },
        {
          title: 'Integraciones de API',
          description:
            'Conecta tu aplicación con servicios de terceros. APIs REST, webhooks, procesadores de pago, servicios de email e integraciones personalizadas.',
        },
      ],
      ctaTitle: '¿Tienes un proyecto diferente en mente?',
      ctaDesc: 'Hablemos de tus requisitos específicos.',
      ctaLink: 'Contáctame',
    },
    portfolio: {
      label: 'Portafolio',
      heading: 'Trabajos seleccionados',
      subheading:
        'Proyectos reales con resultados reales. Aquí hay una selección de trabajos que muestra mi enfoque para resolver problemas.',
      theProblem: 'El Problema',
      theSolution: 'La Solución',
      bottomCta: '¿Quieres discutir un proyecto similar?',
      projects: [
        {
          title: 'Optimización de Checkout',
          category: 'E-commerce',
          description:
            'Rediseñé un proceso de checkout de múltiples pasos para una plataforma e-commerce, reduciendo el abandono del carrito en un 35% y mejorando las tasas de conversión.',
          problem:
            'Checkout complejo con demasiados pasos, validación confusa y mala experiencia móvil que generaba altas tasas de abandono.',
          solution:
            'Simplifiqué a un proceso de 2 pasos, agregué validación en tiempo real, optimicé para móvil e integré autocompletado de dirección.',
          metrics: [
            { label: 'Abandono de carrito', value: '-35%' },
            { label: 'Tasa de conversión', value: '+22%' },
            { label: 'Pedidos móviles', value: '+40%' },
          ],
        },
        {
          title: 'Plataforma de Cursos Online',
          category: 'SaaS',
          description:
            'Construí un sistema de gestión de aprendizaje completo con acceso basado en roles, integración de pagos y gestión interactiva de cursos.',
          problem:
            'El cliente necesitaba una plataforma escalable para vender y gestionar cursos online con diferentes roles de usuario y procesamiento de pagos.',
          solution:
            'Desarrollé una solución SaaS completa con dashboards para estudiantes, instructores y administradores, suscripciones con Stripe y seguimiento de progreso.',
          metrics: [
            { label: 'Roles de usuario', value: '3' },
            { label: 'Módulos de curso', value: '100+' },
            { label: 'Usuarios activos', value: '2k+' },
          ],
        },
        {
          title: 'Template de Dashboard y Checkout',
          category: 'Componentes UI',
          description:
            'Creé una biblioteca de componentes reutilizables y template de dashboard enfocados en flujos de checkout e interfaces de administración.',
          problem:
            'Los equipos de desarrollo perdían demasiado tiempo construyendo patrones UI comunes desde cero para cada nuevo proyecto.',
          solution:
            'Construí una biblioteca de componentes completa con flujos de checkout, tablas de datos, gráficos y layouts responsivos preconstruidos.',
          metrics: [
            { label: 'Componentes', value: '50+' },
            { label: 'Tiempo de dev ahorrado', value: '40%' },
            { label: 'Proyectos que lo usan', value: '8' },
          ],
        },
      ],
    },
    about: {
      label: 'Acerca',
      heading: 'Construyendo software que marca la diferencia',
      p1: 'Soy Karoli, desarrolladora full-stack con años de experiencia ayudando a startups, empresas SaaS y equipos de producto a lanzar mejor software más rápido.',
      p2Prefix: 'Mi enfoque está en',
      p2Highlight: 'optimización de checkout, mejoras de UI/UX y funcionalidades SaaS',
      p2Suffix: '— las áreas donde los pequeños cambios suelen crear el mayor impacto en el negocio.',
      p3: 'Entiendo que necesitas a alguien que pueda integrarse, entender tu código base rápidamente y entregar trabajo de calidad sin interminables idas y venidas. Así es exactamente como trabajo.',
      howIWork: 'Cómo trabajo',
      workingStyle: [
        'Comunicación clara y oportuna',
        'Comprensión de tus objetivos de negocio',
        'Código limpio y mantenible',
        'Entrega rápida sin sacrificar calidad',
        'Horario flexible según tu zona horaria',
      ],
      yearsLabel: 'Años de Experiencia',
      projectsLabel: 'Proyectos Entregados',
    },
    techStack: {
      label: 'Stack Tecnológico',
      heading: 'Tecnologías con las que trabajo',
      subheading:
        'Enfocada en el ecosistema de Laravel y Vue, con experiencia en integraciones de pago y diseño responsivo.',
      backend: 'Backend',
      backendDesc: 'Laravel, PHP, APIs REST, Diseño de bases de datos',
      frontend: 'Frontend',
      frontendDesc: 'Vue.js, JavaScript, Tailwind CSS, UI Responsiva',
      integration: 'Integración',
      integrationDesc: 'Pasarelas de pago, APIs de terceros, Webhooks',
    },
    contact: {
      label: 'Contacto',
      heading: '¿Necesitas algo corregido o mejorado rápidamente?',
      description:
        'Ya sea un bug que necesita corrección, un checkout que necesita optimización, o una nueva funcionalidad que necesita construcción — estoy aquí para ayudar. Hablemos sobre tu proyecto.',
      emailLabel: 'Escríbeme directamente',
      responseTimeLabel: 'Tiempo de respuesta típico:',
      responseTimeValue: 'En 24 horas',
      formTitle: 'Enviar un mensaje',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailFieldLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@correo.com',
      messageLabel: 'Detalles del proyecto',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      submitBtn: 'Enviar mensaje',
      bottomCtaTitle: '¿Listo para mejorar tu producto?',
      bottomCtaDesc:
        'Trabajo con startups, empresas SaaS y equipos de producto que necesitan ayuda de desarrollo confiable sin la burocracia.',
      bottomCtaBtn: 'Hablemos',
    },
    footer: {
      subtitle: 'Desarrolladora Full-Stack · Laravel + Vue',
      allRights: 'Todos los derechos reservados.',
      services: 'Servicios',
      work: 'Trabajos',
      contact: 'Contacto',
    },
  },
}

export type Translations = typeof translations['en']
