// src/data/portfolio.ts

export type Locale = 'en' | 'de';

export interface CredentialItem {
  role: string;
  user: string;
  pass: string;
}

export interface LinkItem {
  label: string;
  url: string;
  credentials?: CredentialItem[];
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
  tools?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
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
    tools: string;
    experience: string;
    projects: string;
    tech: string;
    education: string;
    principles: string;
    beyondCode: string;
    impressumTitle: string;
    impressumText: string;
    privacyText: string;
    copied: string;
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
      resumeUrl: '/Marko_Kosic_Lebenslauf.pdf',
      location: 'Vienna / Austria (CET)',
      availability: 'Available for selected engineering roles',
    },
    hero: {
      location: 'Vienna, AT (CET)',
      greeting: 'Hi, I’m Marko.',
      headline: 'Software Engineer – Fullstack.',
      bio: '',
      about: [
        'I became a software engineer because I realized: good software doesn’t happen by accident. It comes from clean architecture, deliberate decisions, and the ambition to build systems that scale and stay maintainable.',
        'Tech focus: Java, Spring Boot, React, and TypeScript.',
        'My standard: Not just code that runs — software that lasts.',
      ],
    },
    skills: {
      backend: [
        'Java',
        'Spring Boot',
        'Maven',
        'OpenAPI / Swagger',
        'Hibernate / JPA',
        'REST APIs',
        'JUnit',
        'Node.js',
      ],
      frontend: [
        'React',
        'Vite',
        'Next.js',
        'TypeScript',
        'TanStack Query',
        'Orval',
        'Zod',
        'Vitest',
        'Mantine UI',
        'Tailwind CSS',
      ],
      databaseAndDevops: [
        'PostgreSQL',
        'Docker',
        'GitHub Actions CI/CD',
        'Prometheus & Grafana',
        'Jenkins',
      ],
      tools: [
        'Git',
        'Linux & Windows',
        'Jira & Confluence',
        'Figma',
        'Scrum',
        'Agile',
      ],
    },
    experience: [
      {
        role: 'Software Engineer',
        company: 'Optima Apps GmbH',
        location: 'Remote / Vienna, Austria',
        period: '03.2024 – present',
        highlights: [
          'Fullstack Development: Assumed responsibility from frontend to backend – developing React frontends as well as RESTful APIs and Spring Boot services in client projects.',
          'Asynchronous Reporting Pipeline, Insurance: Developed a service that generates reports daily or on-demand via link, creates them as Excel files, and automatically sends them via email. The asynchronous processing prevented thread-blocking in the existing legacy system.',
          'Internal HR Portal: Autonomously conceptualized and implemented the frontend of a greenfield solution in React and TypeScript – vacation management, master data, and role-based access control in the frontend.',
          'Chat Module: Developed a chat with infinite scroll and real-time updates via WebSocket, whose content and visibility are based on user role and region – initially for 10 regions and around 50 users.',
          'Automotive Platform: Implemented modular CRUD workflows for vehicle and contract data based on REST APIs and OpenAPI, including unit and integration tests.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'React',
          'TypeScript',
          'SQL',
          'WebSockets',
          'REST APIs',
        ],
      },
      {
        role: 'Freelance Web Developer',
        company: 'Freelance',
        location: 'Vienna, Austria',
        period: '06.2023 – 02.2024',
        highlights: [
          'Designed and launched four corporate websites for trades, taxi, gastronomy, and construction using Next.js and TypeScript; consistently achieved Google Lighthouse Mobile Scores of 90+ and load times under 2 seconds.',
          'Developed an SEO-optimized page structure with 20+ regional landing pages for sustained top-5 rankings for regional keywords.',
          'Implemented online forms for ride reservations and orders including automated email notifications and lead tracking; generated over 50 leads per month.',
          'Ensured GDPR (DSGVO) compliance through modular cookie consent with conditional loading of Google Tag Manager and Google Analytics.',
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
          'Production-ready multi-tenant platform for driver and vehicle master data, shift logging, and automated payroll.',
        highlights: [
          'Digitized daily operations for a taxi company with 15+ drivers – driver and vehicle master data, shift logging, revenue reconciliation, and payroll.',
          'Developed a dynamic payroll engine based on the Strategy Pattern for commission and flat-rate calculations with time-bound contract versioning.',
          'Architected a multi-tenant system with row-level data isolation via Hibernate @TenantId on a shared PostgreSQL database.',
          'Ensured end-to-end type safety via Orval codegen: Generating React Query hooks directly from the OpenAPI 3.0 specification.',
          'Operated Docker-based staging and prod environments with GitHub Actions CI/CD and active telemetry via Prometheus and Grafana.',
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
            credentials: [
              {
                role: 'Admin',
                user: 'test-account@example.com',
                pass: 'TestAccount246#',
              },
              {
                role: 'Driver',
                user: 'lukas.gruber@example.com',
                pass: '12341234',
              },
            ],
          },
          {
            label: 'Swagger API Docs',
            url: 'https://taxi-stage.mk0.me/api/swagger-ui/index.html#/',
          },
          {
            label: 'Grafana Dashboard',
            url: 'https://taxi-monitoring.mk0.me',
            credentials: [
              { role: 'Grafana', user: 'taxiosstageuser', pass: '12341234' },
            ],
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
      /*
      {
        degree: 'Diploma in Business Administration',
        institution: 'BHAK Baden',
        period: '09.2013 – 06.2018',
        location: 'Baden, Austria',
        specializations: ['Information Management & Information Technology'],
      },
      */
    ],
    principles: [
      '<strong>Software solves problems, not tickets.</strong> I want to understand what a feature is meant to achieve — not just what needs to be built.',
      '<strong>I build for the next person who reads the code.</strong> Not for the moment it is written.',
      '<strong>Effort is not a result.</strong> I measure my work by what actually runs in the end — not by how much I put in.',
      '<strong>Better to ask than guess.</strong> A quick question costs minutes, a misunderstanding costs days.',
      "<strong>I don't have to know everything.</strong> But I must know how to figure out new things.",
      '<strong>Show up consistently.</strong> Better a little bit often than a lot rarely.',
    ],
    beyondCode: [
      'Brazilian Jiu Jitsu',
      'Mountain hiking',
      'Gym',
      'Reading — currently: Thinking, Fast and Slow',
    ],
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
      tools: 'Tools',
      experience: 'Experience',
      projects: 'Featured Projects',
      tech: 'Tech',
      education: 'Education',
      principles: 'Principles',
      beyondCode: 'Beyond Code',
      impressumTitle: 'Legal & Privacy',
      impressumText: 'Marko Kosić, Vienna, Austria. Contact: ',
      copied: 'Copied!',
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
      headline: 'Software Engineer – Fullstack.',
      bio: '',
      about: [
        'Ich bin Software Engineer geworden, weil ich verstanden habe: Gute Software entsteht nicht durch Zufall. Sie entsteht durch saubere Architektur, durchdachte Entscheidungen und den Anspruch, Systeme zu bauen, die skalieren und wartbar bleiben.',
        'Tech-Fokus: Java, Spring Boot, React und TypeScript.',
        'Mein Anspruch: Nicht nur Code, der läuft – sondern Software, die hält.',
      ],
    },
    skills: {
      backend: [
        'Java',
        'Spring Boot',
        'Maven',
        'OpenAPI / Swagger',
        'Hibernate / JPA',
        'REST APIs',
        'JUnit',
        'Node.js',
      ],
      frontend: [
        'React',
        'Vite',
        'Next.js',
        'TypeScript',
        'TanStack Query',
        'Orval',
        'Zod',
        'Vitest',
        'Mantine UI',
        'Tailwind CSS',
      ],
      databaseAndDevops: [
        'PostgreSQL',
        'Docker',
        'GitHub Actions CI/CD',
        'Prometheus & Grafana',
        'Jenkins',
      ],
      tools: [
        'Git',
        'Linux & Windows',
        'Jira & Confluence',
        'Figma',
        'Scrum',
        'Agile',
      ],
    },
    experience: [
      {
        role: 'Software Engineer',
        company: 'Optima Apps GmbH',
        location: 'Remote / Wien, Österreich',
        period: '03.2024 – heute',
        highlights: [
          'Fullstack-Entwicklung: Übernahm Verantwortung von Frontend bis Backend – Entwicklung von React-Frontends sowie RESTful APIs und Spring-Boot-Services in Kundenprojekten.',
          'Asynchrone Reporting-Pipeline, Versicherung: Entwickelte einen Service, der täglich oder on-demand per Link Reports erstellt, als Excel generiert und automatisiert per E-Mail versendet. Die asynchrone Verarbeitung verhinderte Thread-Blocking im bestehenden Legacy-System.',
          'Internes HR-Portal: Konzipierte und implementierte das Frontend einer Greenfield-Lösung in React und TypeScript eigenverantwortlich – Urlaubsverwaltung, Stammdaten und rollenbasierte Zugriffskontrolle im Frontend.',
          'Chat-Modul: Entwickelte einen Chat mit Infinite Scroll und Echtzeit-Updates via WebSocket, dessen Inhalte und Sichtbarkeit sich nach Nutzerrolle und Region richten – in der Startphase 10 Regionen und rund 50 Nutzer.',
          'Automobilplattform: Implementierte modulare CRUD-Workflows für Fahrzeug- und Vertragsdaten auf Basis von REST-APIs und OpenAPI inkl. Unit- und Integrationstests.',
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'React',
          'TypeScript',
          'SQL',
          'WebSockets',
          'REST APIs',
        ],
      },
      {
        role: 'Freelance Web Developer',
        company: 'Freelance',
        location: 'Wien, Österreich',
        period: '06.2023 – 02.2024',
        highlights: [
          'Konzipierte und launchte vier Unternehmens-Websites für Handwerk, Taxi, Gastro und Bau mit Next.js und TypeScript; erreichte durchgängig Google Lighthouse Mobile Scores von 90+ und Ladezeiten unter 2 Sekunden.',
          'Entwickelte eine SEO-optimierte Seitenstruktur mit 20+ regionalen Zielseiten für dauerhafte Top-5-Rankings bei regionalen Schlüsselbegriffen.',
          'Implementierte Online-Formulare für Fahrtreservierungen und Bestellungen inkl. automatisierter E-Mail-Benachrichtigungen und Lead-Tracking; generierte über 50 Leads pro Monat.',
          'Stellte DSGVO-Konformität durch modulares Cookie-Consent mit bedingtem Laden von Google Tag Manager und Google Analytics sicher.',
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
          'Produktive Multi-Tenant-Plattform für Fahrer- und Fahrzeugstammdaten, Schichterfassung und automatisierte Abrechnung.',
        highlights: [
          'Digitalisierte den täglichen Taxibetrieb für ein Taxiunternehmen mit 15+ Fahrern – Fahrer- und Fahrzeugstammdaten, Schichterfassung, Umsatzabgleich und Abrechnung.',
          'Entwickelte eine dynamische Abrechnungs-Engine auf Basis des Strategy Pattern für Provisions- und Festpauschalenberechnungen mit zeitabhängiger Vertragsversionierung.',
          'Konzipierte eine mandantenfähige Architektur mit Row-Level-Datenisolation via Hibernate @TenantId auf einer geteilten PostgreSQL-Datenbank.',
          'Sicherte durchgängige End-to-End-Typsicherheit durch Orval-Codegen: Generierung von React-Query-Hooks direkt aus der OpenAPI-3.0-Spezifikation.',
          'Betrieb Docker-basierte Staging- und Prod-Umgebungen mit GitHub Actions CI/CD und aktiver Telemetrie über Prometheus und Grafana.',
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
            credentials: [
              {
                role: 'Admin',
                user: 'test-account@example.com',
                pass: 'TestAccount246#',
              },
              {
                role: 'Driver',
                user: 'lukas.gruber@example.com',
                pass: '12341234',
              },
            ],
          },
          {
            label: 'Swagger API Docs',
            url: 'https://taxi-stage.mk0.me/api/swagger-ui/index.html#/',
          },
          {
            label: 'Grafana Dashboard',
            url: 'https://taxi-monitoring.mk0.me',
            credentials: [
              { role: 'Grafana', user: 'taxiosstageuser', pass: '12341234' },
            ],
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
      /*
      {
        degree: 'Reife- und Diplomprüfungszeugnis',
        institution: 'BHAK Baden',
        period: '09.2013 – 06.2018',
        location: 'Baden bei Wien',
        specializations: ['Informationsmanagement & Informationstechnologie'],
      },
      */
    ],
    principles: [
      '<strong>Software löst Probleme, keine Tickets.</strong> Ich will verstehen, was ein Feature bewirken soll – nicht nur, was gebaut werden soll.',
      '<strong>Ich baue für den nächsten, der den Code liest.</strong> Nicht für den Moment, in dem er entsteht.',
      '<strong>Aufwand ist kein Ergebnis.</strong> Ich messe meine Arbeit daran, was am Ende läuft – nicht daran, wie viel ich getan habe.',
      '<strong>Lieber fragen als raten.</strong> Eine Rückfrage kostet Minuten, ein Missverständnis kostet Tage.',
      '<strong>Ich muss nicht alles können.</strong> Aber ich muss wissen, wie ich mir Neues erschließe.',
      '<strong>Regelmäßig dranbleiben.</strong> Lieber oft ein bisschen als selten ganz viel.',
    ],
    beyondCode: [
      'Brazilian Jiu Jitsu',
      'Bergwandern',
      'Gym',
      'Lesen – aktuell: Thinking, Fast and Slow',
    ],
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
      tools: 'Tools',
      experience: 'Berufserfahrung',
      projects: 'Projekte',
      tech: 'Technologien',
      education: 'Ausbildung',
      principles: 'Prinzipien',
      beyondCode: 'Beyond Code',
      impressumTitle: 'Impressum & Datenschutz',
      impressumText: 'Marko Kosić, Wien, Österreich. Kontakt: ',
      copied: 'Kopiert!',
      privacyText:
        'Diese Website ist eine rein statische HTML-Seite. Es werden keine Cookies gesetzt, keine Analyse-Tools (Tracker) verwendet und keine personenbezogenen Daten gespeichert.',
    },
  },
};
