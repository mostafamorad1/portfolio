export type Language = 'en' | 'ar';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  role: string;
  solution: string;
  tools: string[];
  result: string;
  image: string;
  link?: string;
  github?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  link?: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  badge: string;
  logo?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  iconImage?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface MilestoneItem {
  id: string;
  title: string;
  category: string;
  description: string;
  metric?: string;
  iconImage?: string;
}

export interface PortfolioContent {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    services: string;
    education: string;
    achievements: string;
    contact: string;
  };
  hero: {
    greeting: string;
    headline: string;
    name: string;
    role: string;
    usp: string;
    downloadCv: string;
    viewWork: string;
    contactMe: string;
    badgeText: string;
    techStack: string;
    stats: { label: string; value: string }[];
    pills: {
      engineering: { title: string; subtitle: string };
      solutions: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    hookTitle: string;
    hookText: string;
    expertiseTitle: string;
    expertiseList: { category: string; skills: string[] }[];
    uspTitle: string;
    uspText: string;
    uspPoints: string[];
    experienceTitle: string;
    experienceTimeline: { entity: string; role: string; desc: string }[];
  };
  skills: {
    title: string;
    subtitle: string;
    allLabel: string;
    categories: {
      id: string;
      name: string;
      icon: string;
      skills: { name: string; level: number; highlight?: boolean }[];
    }[];
  };
  experience: {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    labels: {
      problem: string;
      role: string;
      solution: string;
      tools: string;
      result: string;
      visitProject: string;
    };
    items: Project[];
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  education: {
    title: string;
    subtitle: string;
    degreesTitle: string;
    degrees: EducationItem[];
    certificatesTitle: string;
    certificates: CertificateItem[];
  };
  achievements: {
    title: string;
    subtitle: string;
    verifiedLabel: string;
    items: MilestoneItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    infoText: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    socialsLabel: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      sendButton: string;
      sendingButton: string;
      successMessage: string;
      errorMessage: string;
    };
  };
  footer: {
    rights: string;
    designedWith: string;
    backToTop: string;
  };
}

export const portfolioContent: Record<Language, PortfolioContent> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      services: "Services",
      education: "Education & Certs",
      achievements: "Achievements",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I am",
      headline: "I build data systems that keep working when the internet doesn't.",
      name: "Mostafa Morad Sayed",
      role: "Data Engineer & Software Developer",
      usp: "I build scalable data pipelines, high-performance web applications, and BI solutions that turn raw data into reliable business insights.",
      downloadCv: "Download CV ↓",
      viewWork: "View My Projects →",
      contactMe: "Get in Touch",
      badgeText: "Available for Projects & Engineering Roles",
      techStack: "Python · SQL · PostgreSQL · Next.js · ETL/ELT · Power BI",
      stats: [
        { label: "Pipeline Reliability", value: "99.8%" },
        { label: "Data Architecture & BI", value: "End-to-End" },
        { label: "Core Frameworks", value: "Next.js & Spark" },
        { label: "DEPI Trainee & Huawei", value: "Certified" },
      ],
      pills: {
        engineering: { title: "Data Engineering", subtitle: "ETL / Spark / SQL" },
        solutions: "Next.js & BI Solutions",
      },
    },
    about: {
      title: "About Me",
      subtitle: "Bridging the gap between raw data chaos and production-ready applications",
      hookTitle: "Who I Am",
      hookText:
        "I’m a results-driven Data Engineer focused on building scalable data systems, high-performance ETL/ELT pipelines, and modern web applications that turn complex data into actionable insights.",
      expertiseTitle: "Core Expertise",
      expertiseList: [
        { category: "Data Engineering", skills: ["ETL / ELT", "Data Warehousing", "SQL & Query Optimization", "Database Design"] },
        { category: "Development", skills: ["Next.js", "Full-Stack Development", "REST APIs"] },
        { category: "Data & BI", skills: ["Data Analytics", "Business Intelligence", "Data Pipelines"] }
      ],
      uspTitle: "Unique Selling Proposition",
      uspText:
        "I bridge Data Engineering and Web Development to build scalable systems that transform raw data into reliable, actionable solutions.",
      uspPoints: ["Scalable Architecture", "High-Performance Pipelines", "Data-Driven Applications"],
      experienceTitle: "Professional Background",
      experienceTimeline: [
        { entity: "DEPI — Data Engineering", role: "Training & Professional Development", desc: "" },
        { entity: "GEN Academy — Web Development", role: "Hands-on Production Projects", desc: "" },
        { entity: "Mindrift / OpenTrain AI — Freelance", role: "Data Workflow Engineering", desc: "" }
      ]
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Comprehensive toolset across data engineering, analytics, and software development",
      allLabel: "All Skills",
      categories: [
        {
          id: "data-engineering",
          name: "Data Engineering & Pipelines",
          icon: "Database",
          skills: [
            { name: "ETL / ELT Pipelines", level: 95, highlight: true },
            { name: "Python (Pandas, PySpark)", level: 90, highlight: true },
            { name: "SQL Query Optimization", level: 95, highlight: true },
            { name: "Apache Spark & Big Data", level: 85 },
            { name: "Data Warehousing (BigQuery, Snowflake)", level: 85 },
            { name: "Database Modeling (Relational & NoSQL)", level: 90 },
            { name: "Data Integrity & Verification", level: 92 },
          ],
        },
        {
          id: "bi-analytics",
          name: "BI & Analytics",
          icon: "BarChart3",
          skills: [
            { name: "Power BI & DAX", level: 92, highlight: true },
            { name: "Interactive KPI Dashboards", level: 95, highlight: true },
            { name: "Variance & Trend Analysis", level: 90 },
            { name: "Tableau & Visual Analytics", level: 82 },
            { name: "Business Logic Modeling", level: 88 },
            { name: "Advanced Excel Analytics", level: 88 },
          ],
        },
        {
          id: "web-dev",
          name: "Full-Stack Web Development",
          icon: "Code2",
          skills: [
            { name: "Next.js (App Router)", level: 92, highlight: true },
            { name: "React & TypeScript", level: 90, highlight: true },
            { name: "Tailwind CSS & Responsive UI", level: 95 },
            { name: "Node.js & RESTful APIs", level: 88 },
            { name: "Supabase & PostgreSQL BaaS", level: 85 },
            { name: "Framer Motion & Animations", level: 85 },
          ],
        },
        {
          id: "tools",
          name: "Tools, DevOps & Automation",
          icon: "Wrench",
          skills: [
            { name: "Workflow Automation (n8n)", level: 92, highlight: true },
            { name: "PostgreSQL & Supabase", level: 90 },
            { name: "Docker & Containerization", level: 82 },
            { name: "Git & GitHub Version Control", level: 92 },
            { name: "Linux Environments & CLI", level: 85 },
            { name: "Airflow Orchestration Basics", level: 80 },
          ],
        },
      ],
    },
    experience: {
      title: "Work Experience",
      subtitle: "A proven track record in engineering data pipelines and production web platforms",
      items: [
        {
          id: "gen-academy",
          role: "Full-Stack Web Developer & Solutions Specialist",
          company: "GEN Academy",
          link: "https://gen-academy.org",
          period: "2024 – Present",
          location: "Remote / Hybrid",
          description:
            "Led frontend and integration engineering for the GEN Academy web platform, delivering high-performance educational user portals and automated data flow integrations.",
          achievements: [
            "Architected responsive Next.js web application improving user navigation and page speed score.",
            "Integrated secure data workflows and API endpoints for student course enrollments.",
            "Collaborated with educational stakeholders to tailor UX and digital assets to institutional needs.",
          ],
          skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API Integration"],
        },
        {
          id: "depi",
          role: "Data Engineering Specialist Trainee",
          company: "Digital Egypt Pioneers Initiative (DEPI)",
          period: "2024 – Present",
          location: "Cairo, Egypt",
          description:
            "Selected for the Ministry of Communications and Information Technology (MCIT) prestigious scholarship program, specializing in enterprise Data Engineering.",
          achievements: [
            "Engineered scalable ETL/ELT pipelines using Python, SQL, and Apache Spark.",
            "Designed resilient relational database schemas and optimized indexing to accelerate heavy query throughput.",
            "Implemented data warehousing solutions with validation rules ensuring strict data integrity.",
          ],
          skills: ["Data Engineering", "SQL Optimization", "Python", "ETL/ELT", "Data Warehousing"],
        },
        {
          id: "mindrift",
          role: "Data & Technical Solutions Specialist",
          company: "Mindrift / Freelance",
          period: "2025 - Present",
          location: "Remote",
          description:
            "Delivered freelance data processing workflows, analytical pipelines, and database optimization consultancies for international clients.",
          achievements: [
            "Automated operational data extraction and validation reducing manual data entry by 80%.",
            "Built custom interactive BI dashboards to visualize key performance metrics for stakeholders.",
            "Integrated cross-platform APIs using n8n for real-time synchronization between CRM and data storage.",
          ],
          skills: ["Python", "SQL", "Power BI", "n8n", "Data Quality"],
        },
        {
          id: "opentrain",
          role: "AI Data Contributor & Dataset Evaluator",
          company: "OpenTrain AI",
          period: "2025 - Present",
          location: "Remote",
          description:
            "Contributed to specialized AI training datasets, performing high-fidelity data structuring and technical verification.",
          achievements: [
            "Validated and structured machine learning training data for code synthesis and computational workflows.",
            "Audited algorithmic outputs ensuring high factual accuracy and adherence to benchmark standards.",
          ],
          skills: ["Data Annotation", "Data Cleaning", "Python", "Dataset Validation"],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Case studies demonstrating real-world problem solving, architecture, and business ROI",
      labels: {
        problem: "Problem Statement",
        role: "My Role",
        solution: "Engineered Solution",
        tools: "Technologies Used",
        result: "Measurable Impact & Result",
        visitProject: "Visit Live Project",
      },
      items: [
        {
          id: "chocolate-dashboard",
          title: "Chocolate Sales & Operational BI Dashboard",
          tagline: "Interactive Power BI analytics uncovering revenue trends, product margins, and regional distribution",
          problem:
            "A multi-regional confectionery retail company suffered from siloed sales logs, sluggish reporting turnaround, and inability to pinpoint underperforming product categories or delayed shipment channels.",
          role: "BI Developer & Data Analyst (Team Project)",
          solution:
            "Engineered an automated data extraction and transformation pipeline loading clean transactional data into Power BI. Formulated advanced DAX measures, dynamic KPI summary cards, time-series forecasting, and geographical shipment heatmaps.",
          tools: ["Power BI", "DAX", "Advanced SQL", "Excel", "Data Modeling", "ETL"],
          result:
            "Cut reporting preparation latency from 3 days to real-time instant refresh; empowered leadership to identify 18% margin growth opportunities across key chocolate product lines.",
          image: "/projects/chocolate-dashboard.png",
        },
        {
          id: "gen-academy-web",
          title: "GEN Academy Educational Web Platform",
          tagline: "Co-Founded & built a scalable Next.js platform for modern learning and course management",
          problem:
            "GEN Academy needed an integrated, lightning-fast digital platform to showcase curriculum, manage student enrollments, and provide seamless access to educational resources without performance bottlenecks.",
          role: "Co-Founder & Full-Stack Web Developer",
          solution:
            "Co-founded GEN Academy and single-handedly architected, designed, and deployed the entire production web platform from scratch using Next.js, TypeScript, and Tailwind CSS. Built responsive UI components, dynamic routing, SEO optimization, fast asset loading, and frictionless enrollment user flows. Managed the full software lifecycle from requirements gathering to production deployment and ongoing maintenance.",
          tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
          result:
            "Successfully deployed live at gen-academy.org, boosting enrollment conversions, decreasing page load times by 40%, and elevating institutional digital presence. Platform serves hundreds of students with high reliability.",
          image: "/assets/gen-logo-only.png",
          link: "https://gen-academy.org",
        },
      ],
    },
    services: {
      title: "Services & Solutions",
      subtitle: "Tailored technical capabilities delivering robust data systems and modern web applications",
      items: [
        {
          id: "data-pipelines",
          title: "Scalable Data Pipelines & ETL/ELT",
          description:
            "Design, construct, and automate resilient data pipelines that ingest, clean, and transform messy raw data into structured, production-ready data warehouses.",
          deliverables: [
            "Custom Python & PySpark ETL/ELT workflows",
            "Automated data quality & integrity checks",
            "Batch and streaming pipeline architecture",
            "Scheduled orchestration with zero downtime",
          ],
          icon: "GitBranch",
        },
        {
          id: "bi-dashboards",
          title: "Interactive BI Analytics & Dashboards",
          description:
            "Turn complex database rows into visually compelling, executive-ready dashboards in Power BI and Tableau that highlight actionable business insights.",
          deliverables: [
            "Dynamic KPI tracking & variance reporting",
            "Advanced DAX calculations & data modeling",
            "Automated scheduled data refreshes",
            "Executive-level visual storytelling",
          ],
          icon: "PieChart",
        },
        {
          id: "web-development",
          title: "Full-Stack Web Applications (Next.js)",
          description:
            "Build modern, lightning-fast, and responsive web applications using Next.js, React, TypeScript, and Tailwind CSS tailored for user engagement and business growth.",
          deliverables: [
            "Single-page & multi-page Next.js applications",
            "Mobile-first responsive UI/UX design",
            "RESTful API & database integration (Supabase/PostgreSQL)",
            "SEO, performance, and accessibility optimization",
          ],
          icon: "Layout",
        },
        {
          id: "database-optimization",
          title: "Database Modeling & Query Optimization",
          description:
            "Architect clean relational & NoSQL schemas, eliminate database bottlenecks, tune execution plans, and write high-efficiency SQL queries.",
          deliverables: [
            "PostgreSQL & relational database schema design",
            "SQL query profiling, indexing & tuning",
            "Data migration & schema normalization",
            "ACID transaction integrity and reliability",
          ],
          icon: "Cpu",
        },
      ],
    },
    education: {
      title: "Education & Certifications",
      subtitle: "Academic foundation in Computer Science and globally accredited industry credentials",
      degreesTitle: "Academic Degrees & Programs",
      degrees: [
        {
          id: "fcai-cu",
          institution: "Faculty of Computers and Artificial Intelligence, Cairo University (FCAI-CU)",
          degree: "Bachelor of Science in Computer Science",
          period: "2024",
          description:
            "Rigorous coursework in Data Structures, Algorithms, Database Systems, Operating Systems, Software Engineering, and Distributed Computing.",
          badge: "FCAI-CU",
          logo: "/assets/fcai-logo.png",
        },
        {
          id: "depi-program",
          institution: "Digital Egypt Pioneers Initiative (DEPI) — MCIT Egypt",
          degree: "Data Engineering Professional Specialization",
          period: "2026 – Present",
          description:
            "Government-sponsored elite technical training focusing on enterprise Big Data pipelines, Cloud Data Warehousing, SQL query optimization, and production pipeline deployment.",
          badge: "DEPI Fellow",
          logo: "/assets/depi-logo.png",
        },
      ],
      certificatesTitle: "Industry Accreditations & Credentials",
      certificates: [
        {
          id: "hcia-bigdata",
          title: "HCIA - Big Data Certification",
          issuer: "Huawei ICT Academy",
          date: "Certified",
          credentialId: "HCIA-BD-EG",
          iconImage: "/assets/huawei-ict-logo.png",
        },
        {
          id: "hcia-security",
          title: "HCIA - Security Certification",
          issuer: "Huawei ICT Academy",
          date: "Certified",
          credentialId: "HCIA-SEC-EG",
          iconImage: "/assets/huawei-ict-logo.png",
        },
        {
          id: "hcib-security",
          title: "HCIB - Security Specialist",
          issuer: "Huawei ICT Academy",
          date: "Certified",
          credentialId: "HCIB-SEC",
          iconImage: "/assets/huawei-ict-logo.png",
        },
        {
          id: "gci-world",
          title: "Global Career Institute Technical Accreditation",
          issuer: "GCI World",
          date: "Accredited",
          credentialId: "GCI-TECH",
          iconImage: "/assets/gci-logo.png",
        },
        {
          id: "itida-gigs",
          title: "ITIDA Gigs & Freelance Excellence",
          issuer: "Information Technology Industry Development Agency (ITIDA)",
          date: "Completed",
          credentialId: "ITIDA-GIGS",
          iconImage: "/assets/itida-gigs-logo.png",
        },
        {
          id: "mahara-tech",
          title: "Mahara-Tech Advanced Software & Database Tracks",
          issuer: "Information Technology Institute (ITI)",
          date: "Completed",
          credentialId: "ITI-MT",
          iconImage: "/assets/mahara-tech-logo.png",
        },
      ],
    },
    achievements: {
      title: "Achievements & Milestones",
      subtitle: "Key highlights demonstrating technical excellence, leadership, and project execution",
      verifiedLabel: "Verified Milestone",
      items: [
        {
          id: "m1",
          title: "DEPI Data Engineering Performance",
          category: "Academic & Professional Training",
          description:
            "Recognized for top performance in scalable pipeline implementation, database design reviews, and automated data transformations within the DEPI initiative.",
          iconImage: "/assets/depi-logo.png",
        },
        {
          id: "m2",
          title: "Triple Huawei ICT Professional Credentials",
          category: "Industry Certifications",
          description:
            "Successfully cleared HCIA-Big Data, HCIA-Security, and HCIB-Security professional exams, proving proficiency in enterprise networks and data ecosystems.",
          metric: "3x Certifications",
          iconImage: "/assets/huawei-logo.png",
        },
        {
          id: "m3",
          title: "GEN Academy Platform Production Launch",
          category: "Software Delivery",
          description:
            "Engineered and deployed the production web application for gen-academy.org, facilitating seamless student access and course enrollments.",
          metric: "Live Production App",
          iconImage: "/assets/gen-logo-only.png",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to discuss your next data pipeline, BI dashboard, or web application? Let's connect.",
      getInTouch: "Contact Information",
      infoText:
        "Feel free to reach out directly via email, phone, or LinkedIn. I am always open to discussing new software development projects, data engineering consulting, or full-time opportunities.",
      emailLabel: "Email Address",
      phoneLabel: "Phone / WhatsApp",
      locationLabel: "Location",
      socialsLabel: "Connect Online",
      form: {
        name: "Your Full Name",
        namePlaceholder: "Mostafa Morad",
        email: "Your Email Address",
        emailPlaceholder: "you@example.com",
        subject: "Subject / Project Scope",
        subjectPlaceholder: "Data Pipeline or Web Project Inquiry",
        message: "Your Message",
        messagePlaceholder: "Describe your project requirements, goals, or schedule...",
        sendButton: "Send Message",
        sendingButton: "Sending...",
        successMessage: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
        errorMessage: "Something went wrong. Please try again or reach out directly via email.",
      },
    },
    footer: {
      rights: "All rights reserved.",
      designedWith: "Mostafa Morad Portfolio",
      backToTop: "Back to Top",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      experience: "الخبرات",
      projects: "المشاريع",
      services: "الخدمات",
      education: "التعليم والشهادات",
      achievements: "الإنجازات",
      contact: "تواصل معي",
    },
    hero: {
      greeting: "مرحباً، أنا",
      headline: "أبني أنظمة بيانات تستمر في العمل حتى عندما يتوقف الإنترنت.",
      name: "مصطفى مراد سيد",
      role: "مهندس بيانات ومطور برمجيات",
      usp: "أبني خطوط بيانات قابلة للتوسع، تطبيقات ويب عالية الأداء، وحلول ذكاء أعمال تحول البيانات المعقدة إلى رؤى يمكن الاعتماد عليها.",
      downloadCv: "تحميل السيرة الذاتية ↓",
      viewWork: "استعراض مشاريعي ←",
      contactMe: "تواصل معي الآن",
      badgeText: "متاح للمشاريع والفرص الهندسية",
      techStack: "Python · SQL · PostgreSQL · Next.js · ETL/ELT · Power BI",
      stats: [
        { label: "دقة خطوط البيانات", value: "99.8%" },
        { label: "معمارية البيانات و BI", value: "شاملة" },
        { label: "أبرز أطر العمل", value: "Next.js & Spark" },
        { label: "متدرب DEPI ومعتمد من Huawei", value: "معتمد دولياً" },
      ],
      pills: {
        engineering: { title: "هندسة البيانات", subtitle: "خطوط معالجة / سبارك / SQL" },
        solutions: "تطبيقات Next.js وحلول BI",
      },
    },
    about: {
      title: "نبذة عني",
      subtitle: "جسر يربط بين البيانات الأولية المعقدة والحلول والتطبيقات الإنتاجية الفعالة",
      hookTitle: "من أنا",
      hookText:
        "مهندس بيانات يركز على بناء أنظمة بيانات قابلة للتوسع، وخطوط معالجة عالية الأداء (ETL/ELT)، وتطبيقات ويب حديثة تحول البيانات المعقدة إلى رؤى قابلة للتنفيذ.",
      expertiseTitle: "الخبرات الأساسية",
      expertiseList: [
        { category: "هندسة البيانات", skills: ["ETL / ELT", "مستودعات البيانات", "SQL وتحسين الأداء", "تصميم قواعد البيانات"] },
        { category: "تطوير البرمجيات", skills: ["Next.js", "تطوير ويب متكامل", "واجهات REST APIs"] },
        { category: "البيانات و BI", skills: ["تحليل البيانات", "ذكاء الأعمال", "خطوط معالجة البيانات"] }
      ],
      uspTitle: "القيمة المضافة (USP)",
      uspText:
        "أدمج بين هندسة البيانات وتطوير الويب لبناء أنظمة قابلة للتوسع تحول البيانات الخام إلى حلول موثوقة.",
      uspPoints: ["هيكلة قابلة للتوسع", "خطوط بيانات عالية الأداء", "تطبيقات مدفوعة بالبيانات"],
      experienceTitle: "الخلفية المهنية",
      experienceTimeline: [
        { entity: "DEPI — هندسة البيانات", role: "تدريب مهني وتطوير احترافي", desc: "" },
        { entity: "GEN Academy — تطوير الويب", role: "مشاريع إنتاجية فعلية", desc: "" },
        { entity: "Mindrift / OpenTrain AI — عمل حر", role: "هندسة أتمتة وتدفق البيانات", desc: "" }
      ]
    },
    skills: {
      title: "المهارات التقنية",
      subtitle: "مجموعة شاملة من الأدوات والتقنيات في هندسة البيانات والتحليلات وتطوير البرمجيات",
      allLabel: "جميع المهارات",
      categories: [
        {
          id: "data-engineering",
          name: "هندسة ومعالجة البيانات",
          icon: "Database",
          skills: [
            { name: "خطوط معالجة البيانات (ETL / ELT)", level: 95, highlight: true },
            { name: "لغة بايثون (Pandas, PySpark)", level: 90, highlight: true },
            { name: "تحسين استعلامات SQL الفائقة", level: 95, highlight: true },
            { name: "أباتشي سبارك والبيانات الضخمة", level: 85 },
            { name: "مستودعات البيانات (BigQuery, Snowflake)", level: 85 },
            { name: "نمذجة قواعد البيانات (Relational & NoSQL)", level: 90 },
            { name: "التحقق من صحة ومطابقة البيانات", level: 92 },
          ],
        },
        {
          id: "bi-analytics",
          name: "ذكاء الأعمال والتحليلات",
          icon: "BarChart3",
          skills: [
            { name: "Power BI و دوال DAX", level: 92, highlight: true },
            { name: "لوحات التحكم التفاعلية ومؤشرات KPI", level: 95, highlight: true },
            { name: "تحليل الفروقات والاتجاهات", level: 90 },
            { name: "تابلوه (Tableau) والتصور البصري", level: 82 },
            { name: "نمذجة المنطق التجاري", level: 88 },
            { name: "تحليلات إكسيل المتقدمة", level: 88 },
          ],
        },
        {
          id: "web-dev",
          name: "تطوير الويب المتكامل",
          icon: "Code2",
          skills: [
            { name: "Next.js (App Router الحديث)", level: 92, highlight: true },
            { name: "React و TypeScript", level: 90, highlight: true },
            { name: "Tailwind CSS والواجهات المتجاوبة", level: 95 },
            { name: "Node.js وبناء واجهات البرمجة REST", level: 88 },
            { name: "Supabase وقواعد PostgreSQL", level: 85 },
            { name: "Framer Motion والمؤثرات الحركية", level: 85 },
          ],
        },
        {
          id: "tools",
          name: "الأدوات والأتمتة والأنظمة",
          icon: "Wrench",
          skills: [
            { name: "أتمتة المهام وسير العمل (n8n)", level: 92, highlight: true },
            { name: "قواعد بيانات PostgreSQL المتقدمة", level: 90 },
            { name: "الحاويات وبيئة Docker", level: 82 },
            { name: "أنظمة التحكم بالإصدارات Git و GitHub", level: 92 },
            { name: "أنظمة لينكس وسطور الأوامر", level: 85 },
            { name: "إدارة خطوط البيانات بواسطة Airflow", level: 80 },
          ],
        },
      ],
    },
    experience: {
      title: "الخبرات المهنية",
      subtitle: "سجل حافل في بناء خطوط البيانات وتطوير منصات الويب الحية",
      items: [
        {
          id: "gen-academy",
          role: "مطور ويب متكامل ومختص حلول تقنية",
          company: "أكاديمية جين (GEN Academy)",
          link: "https://gen-academy.org",
          period: "2024 – حتى الآن",
          location: "عن بُعد / هجين",
          description:
            "قيادة وتطوير الواجهات والأنظمة المتكاملة لمنصة GEN Academy الرقمية، وبناء تجارب مستخدم تعليمية متطورة وسريعة الاستجابة.",
          achievements: [
            "تطوير منصة تعليمية حديثة باستخدام Next.js مما عزز سرعة التصفح وتجربة الطالب.",
            "ربط واجهات برمجة التطبيقات وسير عمل التسجيل وإدارة الدورات بكفاءة وأمان.",
            "التعاون مع الفريق التعليمي لترجمة المتطلبات إلى حلول رقمية عملية ومبتكرة.",
          ],
          skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "تكامل الويب"],
        },
        {
          id: "depi",
          role: "متدرب متخصص في هندسة البيانات",
          company: "مبادرة رواد مصر الرقمية (DEPI)",
          period: "2024 – حتى الآن",
          location: "القاهرة، مصر",
          description:
            "الالتحاق بالمنحة المكثفة لوزارة الاتصالات وتكنولوجيا المعلومات المصرية، تخصص هندسة وهندسة معمارية البيانات الضخمة.",
          achievements: [
            "بناء خطوط معالجة بيانات موثوقة ETL/ELT باستخدام بايثون و SQL و Apache Spark.",
            "تصميم هياكل قواعد بيانات متقدمة وتحسين الفهارس لتسريع استعلامات التقارير المعقدة.",
            "تطبيق أفضل الممارسات في مستودعات البيانات السحابية وقواعد التحقق لضمان جودة البيانات.",
          ],
          skills: ["هندسة البيانات", "تحسين SQL", "بايثون", "ETL/ELT", "مستودعات البيانات"],
        },
        {
          id: "mindrift",
          role: "مختص حلول بيانات وعمل حر",
          company: "منصة Mindrift / عمل حر",
          period: "2025 – حتى الآن",
          location: "عن بُعد",
          description:
            "تنفيذ مشاريع مستقلة في هندسة البيانات وبناء لوحات التحكم التحليلية وأتمتة المهام لعملاء من مختلف الدول.",
          achievements: [
            "أتمتة عمليات استخراج وتدقيق البيانات وتقليص العمل اليدوي بنسبة 80%.",
            "بناء لوحات معلومات ذكاء أعمال حية تتابع المؤشرات التشغيلية والمالية بدقة.",
            "الحصول على تقييمات إيجابية مستمرة وإنجاز المشاريع في مواعيدها بدقة عالية.",
          ],
          skills: ["بايثون", "SQL", "Power BI", "n8n", "جودة البيانات"],
        },
        {
          id: "opentrain",
          role: "مساهم ومراجع بيانات الذكاء الاصطناعي",
          company: "OpenTrain AI",
          period: "2025 – حتى الآن",
          location: "عن بُعد",
          description:
            "المساهمة في تنقيح وهيكلة مجموعات البيانات التقنية لتدريب نماذج الذكاء الاصطناعي.",
          achievements: [
            "هيكلة وفحص جودة بيانات الأكواد والمهام البرمجية لضمان دقة تدريب النماذج.",
            "مراجعة النتائج والتحقق من التزام المخرجات بالمعايير الفنية والمنطقية الصارمة.",
          ],
          skills: ["تنظيف البيانات", "بايثون", "هيكلة البيانات", "تدقيق الذكاء الاصطناعي"],
        },
      ],
    },
    projects: {
      title: "أبرز المشاريع",
      subtitle: "دراسات حالة توضح حل المشكلات الواقعية والمعمارية الهندسية والعائد الفعلي للمؤسسات",
      labels: {
        problem: "المشكلة والتحدي",
        role: "دوري في المشروع",
        solution: "الحل الهندسي المنفذ",
        tools: "التقنيات المستخدمة",
        result: "النتائج والأثر المحقق",
        visitProject: "زيارة المشروع الحي",
      },
      items: [
        {
          id: "chocolate-dashboard",
          title: "لوحة تحليلات مبيعات الشوكولاتة وذكاء الأعمال",
          tagline: "لوحة تحكم تفاعلية عبر Power BI تكشف اتجاهات الإيرادات وهوامش الربح والتوزيع الجغرافي",
          problem:
            "واجهت إحدى شركات تجارة الحلويات متعددة الفروع مشكلة تشتت بيانات المبيعات وبطء إصدار التقارير وصعوبة تحديد المنتجات الأكثر ربحية أو مسارات الشحن المتأخرة.",
          role: "مطور ذكاء أعمال ومحلل بيانات (مشروع فريق عمل)",
          solution:
            "بناء خط استخراج وتحويل بيانات مؤتمت بالكامل، وتغذية نموذج بيانات احترافي في Power BI مع صياغة معادلات DAX متقدمة، وبطاقات مؤشرات أداء حية، وخرائط توزيع جغرافية.",
          tools: ["Power BI", "DAX", "SQL متقدم", "Excel", "نمذجة البيانات", "ETL"],
          result:
            "تقليص زمن إعداد التقارير من 3 أيام إلى تحديث فوري وتلقائي؛ ومساعدة الإدارة في اكتشاف فرص نمو بلغت 18% في هوامش ربح المنتجات الرئيسية.",
          image: "/projects/chocolate-dashboard.png",
        },
        {
          id: "gen-academy-web",
          title: "منصة أكاديمية جين التعليمية (GEN Academy)",
          tagline: "شريك مؤسس ومطور المنصة التعليمية المتكاملة باستخدام Next.js",
          problem:
            "كانت الأكاديمية بحاجة إلى منصة ويب رقمية تفاعلية وسريعة جداً لعرض البرامج التدريبية وإتاحة تسجيل الطلاب دون أي بطء أو تعقيدات في واجهة الاستخدام.",
          role: "شريك مؤسس ومطور ويب متكامل",
          solution:
            "شاركت في تأسيس أكاديمية جين وقمت بتصميم وتطوير ونشر المنصة الإلكترونية بالكامل من الصفر باستخدام Next.js و TypeScript و Tailwind CSS. بناء واجهات تفاعلية متجاوبة ومسارات ديناميكية وتحسين محركات البحث وتجربة تسجيل سلسة. إدارة دورة حياة البرمجيات كاملة من جمع المتطلبات حتى النشر والصيانة المستمرة.",
          tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "واجهات REST"],
          result:
            "إطلاق المنصة الحية رسمياً على gen-academy.org، وزيادة معدل التحويل للتسجيل، وتقليل وقت تحميل الصفحات بنسبة 40% مع خدمة مئات الطلاب بموثوقية عالية.",
          image: "/assets/gen-logo-only.png",
          link: "https://gen-academy.org",
        },
      ],
    },
    services: {
      title: "الخدمات والحلول",
      subtitle: "حلول هندسية مصممة خصيصاً لبناء أنظمة بيانات قوية وتطبيقات ويب سريعة وحديثة",
      items: [
        {
          id: "data-pipelines",
          title: "خطوط معالجة البيانات القابلة للتوسع (ETL/ELT)",
          description:
            "تصميم وبناء وأتمتة خطوط تدفق بيانات مرنة تقوم باستخراج وتنظيف وتحويل البيانات الضخمة ونقلها إلى مستودعات بيانات عالية الجاهزية.",
          deliverables: [
            "تدفقات ETL/ELT مخصصة بواسطة بايثون و PySpark",
            "قواعد فحص ومطابقة آلية لضمان سلامة ونزاهة البيانات",
            "معمارية معالجة دفعية (Batch) وتدفقية (Stream)",
            "جدولة وتنفيذ آلي مستمر دون أي توقف",
          ],
          icon: "GitBranch",
        },
        {
          id: "bi-dashboards",
          title: "لوحات تحكم ذكاء الأعمال والتحليلات التفاعلية",
          description:
            "تحويل الجداول والأرقام المعقدة إلى لوحات تحكم بصرية تفاعلية عبر Power BI تساعد صناع القرار على استشراف الفرص والحد من المخاطر.",
          deliverables: [
            "متابعة مؤشرات الأداء الرئيسية (KPIs) وتحليل التباين",
            "حسابات ونماذج متقدمة باستخدام دوال DAX",
            "تحديث دوري ومؤتمت للبيانات",
            "تصميم بصري جذاب يبرز القصة وراء الأرقام",
          ],
          icon: "PieChart",
        },
        {
          id: "web-development",
          title: "تطوير تطبيقات الويب الحديثة (Next.js)",
          description:
            "بناء مواقع وتطبيقات ويب فائقة السرعة، متجاوبة ومحسنة لمحركات البحث باستخدام أحدث تقنيات Next.js و React و Tailwind CSS.",
          deliverables: [
            "تطبيقات أحادية ومتعددة الصفحات بأعلى سرعة وأداء",
            "تصميم مخصص للهواتف المحمولة وتجربة مستخدم سلسة",
            "ربط واجهات البرمجة وقواعد البيانات (PostgreSQL/Supabase)",
            "توافق كامل مع المعايير الحديثة وإمكانية الوصول",
          ],
          icon: "Layout",
        },
        {
          id: "database-optimization",
          title: "نمذجة قواعد البيانات وتحسين سرعة الاستعلامات",
          description:
            "تصميم مخططات قواعد بيانات محكمة، وإزالة اختناقات الأداء، وضبط خطط التنفيذ وفهارس البحث لضمان استجابة لحظية.",
          deliverables: [
            "تصميم مخططات قواعد البيانات العلائقية (PostgreSQL)",
            "فحص الاستعلامات وبناء الفهارس لتسريع العمليات",
            "ترحيل وهيكلة البيانات وضمان سلامة المعاملات",
            "تطبيق شروط ACID للأمان والموثوقية القصوى",
          ],
          icon: "Cpu",
        },
      ],
    },
    education: {
      title: "التعليم والشهادات",
      subtitle: "خلفية أكاديمية متينة في علوم الحاسب واعتمادات مهنية معترف بها دولياً",
      degreesTitle: "الدرجات والبرامج الأكاديمية",
      degrees: [
        {
          id: "fcai-cu",
          institution: "كلية الحاسبات والذكاء الاصطناعي - جامعة القاهرة (FCAI-CU)",
          degree: "بكالوريوس علوم الحاسب (Computer Science)",
          period: "2024",
          description:
            "دراسة معمقة في هياكل البيانات، الخوارزميات، نظم قواعد البيانات، نظم التشغيل، هندسة البرمجيات، والحوسبة الموزعة.",
          badge: "FCAI-CU",
          logo: "/assets/fcai-logo.png",
        },
        {
          id: "depi-program",
          institution: "مبادرة رواد مصر الرقمية (DEPI) — وزارة الاتصالات المصرية",
          degree: "تخصص احترافي في هندسة البيانات (Data Engineering)",
          period: "2026 – حتى الآن",
          description:
            "منحة تقنية تخصصية مكثفة تركز على خطوط البيانات المؤسسية، مستودعات البيانات السحابية، تحسين استعلامات SQL، ونشر الأنظمة للإنتاج.",
          badge: "متدرب DEPI",
          logo: "/assets/depi-logo.png",
        },
      ],
      certificatesTitle: "الشهادات والاعتمادات الدولية",
      certificates: [
        {
          id: "hcia-bigdata",
          title: "شهادة معتمدة في البيانات الضخمة (HCIA - Big Data)",
          issuer: "أكاديمية هواوي (Huawei ICT Academy)",
          date: "معتمد",
          credentialId: "HCIA-BD-EG",
          iconImage: "/assets/huawei-ict-logo.png",
        },
        {
          id: "hcia-security",
          title: "شهادة معتمدة في أمن الشبكات والبيانات (HCIA - Security)",
          issuer: "أكاديمية هواوي (Huawei ICT Academy)",
          date: "معتمد",
          credentialId: "HCIA-SEC-EG",
          iconImage: "/assets/huawei-ict-logo.png",
        },
        {
          id: "hcib-security",
          title: "شهادة أخصائي أمان معتمد (HCIB - Security)",
          issuer: "أكاديمية هواوي (Huawei ICT Academy)",
          date: "معتمد",
          credentialId: "HCIB-SEC",
          iconImage: "/assets/huawei-ict-logo.png",
        },
        {
          id: "gci-world",
          title: "الاعتماد المهني التقني من المعهد العالمي للتطوير الوظيفي",
          issuer: "GCI World",
          date: "معتمد",
          credentialId: "GCI-TECH",
          iconImage: "/assets/gci-logo.png",
        },
        {
          id: "itida-gigs",
          title: "برنامج التميز في العمل الحر وتطوير البرمجيات (ITIDA Gigs)",
          issuer: "هيئة تنمية صناعة تكنولوجيا المعلومات (إيتيدا)",
          date: "مكتمل",
          credentialId: "ITIDA-GIGS",
          iconImage: "/assets/itida-gigs-logo.png",
        },
        {
          id: "mahara-tech",
          title: "مسارات البرمجيات المتقدمة وقواعد البيانات (Mahara-Tech)",
          issuer: "معهد تكنولوجيا المعلومات (ITI)",
          date: "مكتمل",
          credentialId: "ITI-MT",
          iconImage: "/assets/mahara-tech-logo.png",
        },
      ],
    },
    achievements: {
      title: "الإنجازات والمحطات البارزة",
      subtitle: "أبرز المحطات التي تبرهن على الكفاءة التقنية والتفوق في تنفيذ المشروعات",
      verifiedLabel: "إنجاز موثق ومؤكد",
      items: [
        {
          id: "m1",
          title: "أداء متميز في مسار هندسة البيانات بـ DEPI",
          category: "التدريب الأكاديمي والمهني",
          description:
            "الحصول على إشادات متميزة في مشاريع بناء خطوط البيانات القابلة للتوسع وتحسين أداء قواعد البيانات ضمن مبادرة رواد مصر الرقمية.",
          iconImage: "/assets/depi-logo.png",
        },
        {
          id: "m2",
          title: "الحصول على ثلاث شهادات مهنية دولية من Huawei",
          category: "الشهادات العالمية",
          description:
            "اجتياز الاختبارات المهنية المعتمدة في البيانات الضخمة (Big Data) والأمن السيبراني (Security) بمستوى عالي من التميز.",
          metric: "3 شهادات معتمدة",
          iconImage: "/assets/huawei-logo.png",
        },
        {
          id: "m3",
          title: "إطلاق منصة أكاديمية جين (GEN Academy) الحية",
          category: "تطوير المنتجات البرمجية",
          description:
            "بناء ونشر منصة ويب تفاعلية متكاملة تخدم مئات الطلاب بكفاءة وأداء متميز.",
          metric: "منصة إنتاجية حية",
          iconImage: "/assets/gen-logo-only.png",
        },
      ],
    },
    contact: {
      title: "تواصل معي",
      subtitle: "هل لديك مشروع، أو خط بيانات يحتاج إلى بناء، أو فكرة تطبيق ويب تريد إطلاقها؟ دعنا نتحدث.",
      getInTouch: "معلومات التواصل المباشر",
      infoText:
        "يسعدني تواصلك دائماً سواء لمناقشة فرص عمل جديدة، أو استشارات في هندسة البيانات وذكاء الأعمال، أو بناء وتطوير منصات الويب الحديثة.",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف / واتساب",
      locationLabel: "الموقع الجغرافي",
      socialsLabel: "روابط التواصل الاجتماعي",
      form: {
        name: "الاسم بالكامل",
        namePlaceholder: "مصطفى مراد",
        email: "البريد الإلكتروني",
        emailPlaceholder: "example@domain.com",
        subject: "موضوع الرسالة أو المشروع",
        subjectPlaceholder: "استشارة هندسة بيانات أو تطوير منصة ويب",
        message: "تفاصيل الرسالة",
        messagePlaceholder: "اكتب متطلبات مشروعك، أهدافك، أو موعدك المقترح...",
        sendButton: "إرسال الرسالة",
        sendingButton: "جاري الإرسال...",
        successMessage: "شكراً لك! تم إرسال رسالتك بنجاح، وسأقوم بالرد عليك في أقرب وقت ممكن.",
        errorMessage: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو مراسلتي عبر البريد مباشرة.",
      },
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      designedWith: "Mostafa Morad Portfolio",
      backToTop: "العودة للأعلى",
    },
  },
};

export const personalInfo = {
  name: {
    en: "Mostafa Morad Sayed",
    ar: "مصطفى مراد سيد",
  },
  email: "mostafamoradsayed@gmail.com",
  phone: "+20 101 234 5678",
  phoneClean: "+201012345678",
  whatsapp: "https://wa.me/201012345678",
  location: {
    en: "Cairo, Egypt",
    ar: "القاهرة، مصر",
  },
  linkedin: "https://www.linkedin.com/in/mostafa-morad-sayed",
  github: "https://github.com/MostafaMoradSayed",
  cvFile: "/Mostafa_Morad_CV.pdf",
};
