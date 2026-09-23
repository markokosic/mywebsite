// src/data/portfolio.ts

export type Locale = 'en' | 'de';

export interface LinkItem {
  label: string;
  url: string;
}

export interface ContactInfo {
  email: string;
  github: {
    handle: string;
    url: string;
  };
  linkedin: {
    handle: string;
    url: string;
  };
  resumeUrl: string;
  location: string;
  availability: string;
}

export interface SkillsOverview {
  backend: string[];
  frontend: string[];
  databaseAndDevops: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  crunchbase: string | null;
  highlights: string[];
  technologies: string[];
}

export interface FeaturedProject {
  title: string;
  subtitle: string;
  highlights: string[];
  technologies: string[];
  links: LinkItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  specializations: string[];
}

export interface PortfolioData {
  contact: ContactInfo;
  hero: {
    location: string;
    greeting: string;
    headline: string;
    bio: string;
    about: string[];
  };
  skills: SkillsOverview;
  experience: ExperienceItem[];
  featuredProjects: FeaturedProject[];
  education: EducationItem[];
  principles: string[];
  beyondCode: string[];
  labels: {
    contact: string;
    email: string;
    github: string;
    linkedin: string;
    resume: string;
    location: string;
    about: string;
    skills: string;
    backend: string;
    frontend: string;
    databaseAndDevops: string;
    experience: string;
    projects: string;
    tech: string;
    education: string;
    principles: string;
    beyondCode: string;
    impressumTitle: string;
    impressumText: string;
    privacyText: string;
  };
}

export const portfolioData: Record<Locale, PortfolioData> = {
  en: {
    contact: {
      email: 'marko@kosic.dev',
      github: {
        handle: 'markokosic',
        url: 'https://github.com/markokosic',
      },
      linkedin: {
        handle: 'kosicmarko',
        url: 'https://linkedin.com/in/kosicmarko',
      },
      resumeUrl: '/Marko_Kosic_Resume.pdf',
      location: 'Vienna / Austria (CET)',
      availability: 'Available for selected engineering roles',
    },
    hero: {
      location: 'Vienna, AT (CET)',
      greeting: "Hey, I'm Marko.",
      headline: 'I build fullstack applications that scale.',
      bio: 'Economist turned Software Engineer. I build scalable web applications with Java, Spring Boot, React, and TypeScript — from database to UI.',
      about: [
        "With a background in business consulting, I realized early on that I didn't just want to analyze workflows on slides — I wanted to build the software that powers them. That drive led me into fullstack engineering.",
        'My sweet spot lies at the intersection of product and code: grasping complex business requirements, cutting through operational edge cases, and engineering clean, resilient technical solutions that deliver real value.',
      ],
    },
    skills: {
      backend: ['Java 21', 'Spring Boot', 'REST APIs', 'Hibernate / JPA'],
      frontend: [
        'React 19',
        'TypeScript',
        'Next.js',
        'TanStack Query',
        'Mantine UI',
      ],
      databaseAndDevops: [
        'PostgreSQL',
        'Docker',
        'GitHub Actions CI/CD',
        'Linux & Windows',
        'Prometheus & Grafana',
      ],
    },
    experience: [
      {
        role: 'Software Engineer',
        company: 'Optima Apps GmbH',
        location: 'Vienna, Austria / Remote',
        period: '03.2024 – present',
        crunchbase: 'https://www.crunchbase.com/organization/optima-apps',
        highlights: [
          'Built an asynchronous reporting feature in Spring Boot for an insurance client, generating Excel exports in the background and dispatching automated emails with the generated files attached to prevent blocking UI requests.',
          'Developed a real-time fleet monitoring dashboard for trucking software, streaming live sensor data and interactive graphs over WebSockets onto dynamic map views.',
          'Contributed to an internal HR portal from initial concept to frontend implementation, building responsive views and state management in React and TypeScript.',
          'Implemented foundational CRUD workflows and reusable UI components for an automotive platform, establishing consistent state and form handling patterns.',
          'Expanded scope from frontend development into Java and Spring Boot backend services, collaborating directly on client-facing features across the stack.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'React',
          'TypeScript',
          'WebSockets',
          'REST APIs',
        ],
      },
      {
        role: 'Freelance Software Engineer',
        company: 'Freelance',
        location: 'Vienna, Austria',
        period: '07.2023 – 02.2024',
        crunchbase: null,
        highlights: [
          'Built and launched production websites for local businesses using Next.js (SSG), achieving 90+ Lighthouse mobile performance scores and high UX responsiveness.',
          'Architected a programmatic Local-SEO strategy with 20+ dedicated location and service landing pages, securing sustained Top-3 Google rankings for core regional keywords.',
          'Generated 2,000–6,000 monthly organic search impressions at a ~2% CTR through structured metadata, semantic HTML, and technical on-page optimization.',
          'Implemented end-to-end conversion funnels including streamlined order/contact flows, automated email notifications, and lead tracking.',
          'Ensured strict GDPR (DSGVO) compliance by integrating a granular cookie consent management system that conditionally loads Google Tag Manager and analytics scripts.',
        ],
        technologies: [
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'Technical SEO',
          'Google Tag Manager',
          'Analytics',
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'TaxiOS',
        subtitle:
          'Multi-tenant fleet management & automated payroll platform actively running in production.',
        highlights: [
          'Digitized daily fleet operations for an active company with 15+ drivers, automating shift logging, revenue reconciliation, and reporting.',
          'Architected a shared-database multi-tenant system using Hibernate @TenantId for transparent, row-level data isolation across independent companies.',
          'Built a dynamic payroll engine using the Strategy Pattern to compute cent-accurate driver remunerations (percentage, flat rate, weekly rent) with time-bound contract versioning.',
          'Enforced end-to-end type safety via contract-driven design, generating React Query hooks and Zod schemas directly from OpenAPI specs using Orval.',
          'Engineered production infrastructure featuring Dockerized environments (staging/prod), GitHub Actions CI/CD, and live telemetry via Prometheus & Grafana.',
        ],
        technologies: [
          'Java 21',
          'Spring Boot 3.5',
          'PostgreSQL',
          'Hibernate',
          'React 19',
          'TypeScript',
          'Mantine UI',
          'TanStack Query',
          'Docker',
          'Prometheus & Grafana',
        ],
        links: [
          {
            label: 'Live Staging App',
            url: 'https://taxi-stage.mk0.me',
          },
          {
            label: 'Swagger API Docs',
            url: 'https://taxi-stage.mk0.me/api/swagger-ui',
          },
          {
            label: 'Frontend on GitHub',
            url: 'https://github.com/markokosic/taxios-frontend-web',
          },
          {
            label: 'Backend on GitHub',
            url: 'https://github.com/markokosic/taxios-backend',
          },
        ],
      },
    ],
    education: [
      {
        degree: 'Bachelor of Arts (BA) in Business Consulting',
        institution: 'FH Wiener Neustadt',
        period: '09.2019 – 06.2022',
        location: 'Wr. Neustadt, Austria',
        specializations: ['Finance', 'Marketing & Sales'],
      },
      {
        degree: 'Diploma in Business Administration',
        institution: 'BHAK Baden',
        period: '09.2013 – 06.2018',
        location: 'Baden, Austria',
        specializations: ['Information Management & Information Technology'],
      },
    ],
    principles: [
      'Consistency beats talent.',
      'Learning how to learn is the real skill.',
      'Everything is possible — you just have to go after it.',
      'Teamwork makes the dream work.',
      'Hypothesis, validate, iterate.',
    ],
    beyondCode: ['BJJ', 'Running', 'Mountain hiking', 'Gym', 'Reading'],
    labels: {
      contact: 'Contact',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      resume: 'Resume',
      location: 'Location',
      about: 'About Me',
      skills: 'Skills',
      backend: 'Backend',
      frontend: 'Frontend',
      databaseAndDevops: 'Database & DevOps',
      experience: 'Experience',
      projects: 'Featured Projects',
      tech: 'Tech',
      education: 'Education',
      principles: 'Principles',
      beyondCode: 'Beyond Code',
      impressumTitle: 'Legal & Privacy',
      impressumText: 'Marko Kosić, Vienna, Austria. Contact: ',
      privacyText:
        'This is a static HTML website. It does not use cookies, trackers, or analytics, and does not collect or store personal data.',
    },
  },
  de: {
    contact: {
      email: 'marko@kosic.dev',
      github: {
        handle: 'markokosic',
        url: 'https://github.com/markokosic',
      },
      linkedin: {
        handle: 'kosicmarko',
        url: 'https://linkedin.com/in/kosicmarko',
      },
      resumeUrl: '/Marko_Kosic_Lebenslauf.pdf',
      location: 'Wien / Österreich (MEZ)',
      availability: 'Offen für spannende Software-Engineering-Rollen',
    },
    hero: {
      location: 'Wien, AT (MEZ)',
      greeting: 'Hi, ich bin Marko.',
      headline: 'Ich entwickle skalierbare Fullstack-Applikationen.',
      bio: 'Vom Ökonomen zum Software Engineer. Ich baue skalierbare Webanwendungen mit Java, Spring Boot, React und TypeScript — von der Datenbank bis zum UI.',
      about: [
        'Durch meinen Hintergrund in der Wirtschaftsberatung wurde mir schnell klar, dass ich Geschäfts- und Arbeitsprozesse nicht nur auf Folien analysieren, sondern die funktionierende Software dahinter selbst erschaffen will. Aus dieser Motivation heraus führte mein Weg in die Softwareentwicklung.',
        'Meine größte Stärke liegt heute an der Schnittstelle zwischen Business und Code: Komplexe Geschäftsanforderungen tiefgreifend zu verstehen, reale Pain Points zu erfassen und daraus saubere, robuste technische Lösungen zu entwickeln.',
      ],
    },
    skills: {
      backend: ['Java 21', 'Spring Boot', 'REST APIs', 'Hibernate / JPA'],
      frontend: [
        'React 19',
        'TypeScript',
        'Next.js',
        'TanStack Query',
        'Mantine UI',
      ],
      databaseAndDevops: [
        'PostgreSQL',
        'Docker',
        'GitHub Actions CI/CD',
        'Linux & Windows',
        'Prometheus & Grafana',
      ],
    },
    experience: [
      {
        role: 'Software Engineer',
        company: 'Optima Apps GmbH',
        location: 'Wien, Österreich / Remote',
        period: '03.2024 – heute',
        crunchbase: 'https://www.crunchbase.com/organization/optima-apps',
        highlights: [
          'Entwicklung einer asynchronen Reporting-Pipeline in Spring Boot für einen Versicherungskunden: Hintergrund-Generierung umfangreicher Excel-Exporte mit automatischem E-Mail-Anhangversand.',
          'Realisierung eines Echtzeit-Flottenmonitoring-Dashboards für Telematik-Software inklusive Live-Sensor-Telemetrie und Graphen via WebSockets auf dynamischen Kartenansichten.',
          'Begleitung eines internen HR-Portals von der Konzeption bis zur Umsetzung von UI und State-Management in React und TypeScript.',
          'Implementierung modularer CRUD-Workflows und wiederverwendbarer UI-Komponenten auf einer Automobilplattform.',
          'Erweiterung des Verantwortungsbereichs von Frontend-Architektur hin zu Java- und Spring-Boot-Backend-Services in Kundenprojekten.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'React',
          'TypeScript',
          'WebSockets',
          'REST APIs',
        ],
      },
      {
        role: 'Freelance Software Engineer',
        company: 'Freelance',
        location: 'Wien, Österreich',
        period: '07.2023 – 02.2024',
        crunchbase: null,
        highlights: [
          'Konzeption und Launch von performanten Unternehmens-Websites mit Next.js (SSG) bei durchgängigen Google Lighthouse Mobile Scores von 90+.',
          'Entwicklung einer skalierbaren Local-SEO-Architektur mit 20+ Zielseiten für dauerhafte Top-3-Rankings in Google für regionale Schlüsselbegriffe.',
          'Generierung von 2.000–6.000 monatlichen Impressionen in der Google-Suche (~2% CTR) durch semantisches HTML und On-Page-Optimierung.',
          'Umsetzung vollständiger Conversion-Funnels samt Anfrage-Flows, automatisierter E-Mail-Benachrichtigungen und Lead-Tracking.',
          'Strikte DSGVO-Konformität durch ein modulares Cookie-Consent-Management mit bedingtem Laden von Google Tag Manager und Analyse-Skripten.',
        ],
        technologies: [
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'Technical SEO',
          'Google Tag Manager',
          'Analytics',
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'TaxiOS',
        subtitle:
          'Multi-Tenant Plattform für Flottenverwaltung und automatisierte Abrechnung im Produktiveinsatz.',
        highlights: [
          'Digitalisierung des täglichen Flottenbetriebs für ein Taxiunternehmen mit 15+ Fahrern (Schichterfassung, Umsatzabgleich, Abrechnung).',
          'Mandantenfähige Architektur mit transparenter Row-Level-Datenisolation via Hibernate @TenantId auf einer geteilten PostgreSQL-Datenbank.',
          'Entwicklung einer dynamischen Abrechnungs-Engine (Strategy Pattern) für centgenaue Provisions- und Festpauschalenberechnungen mit zeitabhängiger Vertragsversionierung.',
          'Garantierte End-to-End-Typsicherheit durch Orval-Codegen: Generierung von React-Query-Hooks direkt aus OpenAPI-3.0-Spezifikationen.',
          'Produktionsreife Docker-Infrastruktur (Staging/Prod) mit GitHub Actions CI/CD und aktiver Telemetrie über Prometheus & Grafana.',
        ],
        technologies: [
          'Java 21',
          'Spring Boot 3.5',
          'PostgreSQL',
          'Hibernate',
          'React 19',
          'TypeScript',
          'Mantine UI',
          'TanStack Query',
          'Docker',
          'Prometheus & Grafana',
        ],
        links: [
          {
            label: 'Live Staging App',
            url: 'https://taxi-stage.mk0.me',
          },
          {
            label: 'Swagger API Docs',
            url: 'https://taxi-stage.mk0.me/api/swagger-ui',
          },
          {
            label: 'Frontend auf GitHub',
            url: 'https://github.com/markokosic/taxios-frontend-web',
          },
          {
            label: 'Backend auf GitHub',
            url: 'https://github.com/markokosic/taxios-backend',
          },
        ],
      },
    ],
    education: [
      {
        degree: 'Bachelor of Arts (BA) in Wirtschaftsberatung',
        institution: 'FH Wiener Neustadt',
        period: '09.2019 – 06.2022',
        location: 'Wr. Neustadt',
        specializations: ['Finanzwirtschaft', 'Marktkommunikation & Vertrieb'],
      },
      {
        degree: 'Reife- und Diplomprüfungszeugnis',
        institution: 'BHAK Baden',
        period: '09.2013 – 06.2018',
        location: 'Baden bei Wien',
        specializations: ['Informationsmanagement & Informationstechnologie'],
      },
    ],
    principles: [
      'Konsistenz schlägt Talent.',
      'Lernen zu lernen ist die wichtigste Fähigkeit.',
      'Alles ist machbar — man muss es nur angehen.',
      'Teamwork makes the dream work.',
      'Hypothese aufstellen, validieren, iterieren.',
    ],
    beyondCode: ['BJJ', 'Laufen', 'Bergwandern', 'Gym', 'Lesen'],
    labels: {
      contact: 'Kontakt',
      email: 'E-Mail',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      resume: 'Lebenslauf',
      location: 'Wohnort',
      about: 'Über mich',
      skills: 'Skills',
      backend: 'Backend',
      frontend: 'Frontend',
      databaseAndDevops: 'Datenbank & DevOps',
      experience: 'Berufserfahrung',
      projects: 'Projekte',
      tech: 'Technologien',
      education: 'Ausbildung',
      principles: 'Prinzipien',
      beyondCode: 'Beyond Code',
      impressumTitle: 'Impressum & Datenschutz',
      impressumText: 'Marko Kosić, Wien, Österreich. Kontakt: ',
      privacyText:
        'Diese Website ist eine rein statische HTML-Seite. Es werden keine Cookies gesetzt, keine Analyse-Tools (Tracker) verwendet und keine personenbezogenen Daten gespeichert.',
    },
  },
};
