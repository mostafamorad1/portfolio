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
  pricingCategoryId?: string;
  startingPrice?: string;
}

export interface MilestoneItem {
  id: string;
  title: string;
  category: string;
  description: string;
  metric?: string;
  iconImage?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  attribution: string;
}

export interface SkillItem {
  name: string;
  level?: number;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: SkillItem[];
}

export interface PortfolioContent {
  nav: {
    home: string;
    about: string;
    education: string;
    credentials: string;
    skills: string;
    experience: string;
    services: string;
    projects: string;
    achievements: string;
    testimonials: string;
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
    tabs: {
      technical: string;
      tools: string;
      soft: string;
    };
    technical: SkillCategory[];
    tools: SkillCategory[];
    soft: SkillCategory[];
    categories: SkillCategory[];
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
    viewPricing?: string;
    pricingBadge?: string;
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
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialItem[];
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
    connectTitle: string;
    connectText: string;
    whoTitle: string;
    whoText: string;
    tagline: string;
    platformsTitle: string;
  };
}

export const portfolioContent: Record<Language, PortfolioContent> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      credentials: "Credentials",
      skills: "Skills",
      experience: "Experience",
      services: "Services",
      projects: "Projects",
      achievements: "Achievements",
      testimonials: "Testimonials",
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
        "I’m a results-driven Data Engineer and an Operations Research & Decision Support (OR & DS) student at Cairo University (FCAI-CU). I specialize in building scalable data systems, high-performance ETL/ELT pipelines, and data-driven web applications that turn complex data into optimized, actionable insights.",
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
      title: "Skills & Expertise",
      subtitle: "A balanced blend of engineering rigor, analytical tooling, and professional execution",
      allLabel: "All Skills",
      tabs: {
        technical: "Technical Skills",
        tools: "Tools & Platforms",
        soft: "Soft Skills",
      },
      technical: [
        {
          id: "data-engineering",
          name: "Data Engineering & Architecture",
          icon: "Database",
          skills: [
            { name: "ETL / ELT Pipelines", highlight: true },
            { name: "SQL Query Optimization", highlight: true },
            { name: "Python (Pandas, PySpark)", highlight: true },
            { name: "Data Warehousing (BigQuery, Snowflake)", highlight: true },
            { name: "Dimensional & Star Schema Modeling" },
            { name: "Relational & NoSQL Databases" },
            { name: "Data Integrity & Verification", highlight: true },
            { name: "Big Data Processing" },
          ],
        },
        {
          id: "bi-analytics",
          name: "Operations Research & Decision Science",
          icon: "LineChart",
          skills: [
            { name: "Operations Research & Optimization", highlight: true },
            { name: "Decision Support Systems (DSS)", highlight: true },
            { name: "Mathematical Modeling & Linear Programming" },
            { name: "Statistical & Predictive Analytics" },
            { name: "KPI Hierarchy & Business Logic Modeling", highlight: true },
            { name: "Variance & Trend Forecasting" },
            { name: "Quantitative Decision Analysis" },
          ],
        },
        {
          id: "web-dev",
          name: "Full-Stack Web Development",
          icon: "Code2",
          skills: [
            { name: "Next.js (App Router)", highlight: true },
            { name: "React & TypeScript", highlight: true },
            { name: "Tailwind CSS & Responsive UI", highlight: true },
            { name: "Node.js & RESTful APIs", highlight: true },
            { name: "Supabase & PostgreSQL BaaS" },
            { name: "Performance & SEO Optimization" },
          ],
        },
      ],
      tools: [
        {
          id: "bi-tools",
          name: "Data & BI Analytics Tools",
          icon: "BarChart3",
          skills: [
            { name: "Power BI & DAX", highlight: true },
            { name: "Interactive KPI Dashboards", highlight: true },
            { name: "Tableau Desktop" },
            { name: "Advanced Excel (Power Query, DAX)", highlight: true },
            { name: "Apache Spark" },
            { name: "Jupyter Notebook & Google Colab" },
          ],
        },
        {
          id: "db-cloud",
          name: "Databases & Cloud Platforms",
          icon: "Cloud",
          skills: [
            { name: "PostgreSQL", highlight: true },
            { name: "Google BigQuery", highlight: true },
            { name: "Supabase BaaS", highlight: true },
            { name: "Snowflake" },
            { name: "MySQL / SQLite" },
            { name: "Firebase Basics" },
          ],
        },
        {
          id: "dev-ops",
          name: "DevOps, Automation & Dev Tools",
          icon: "Wrench",
          skills: [
            { name: "Workflow Automation (n8n)", highlight: true },
            { name: "Git & GitHub Version Control", highlight: true },
            { name: "Docker & Containerization" },
            { name: "Linux Environments & CLI", highlight: true },
            { name: "Airflow Orchestration Basics" },
            { name: "VS Code & Postman" },
          ],
        },
      ],
      soft: [
        {
          id: "problem-solving",
          name: "Analytical & Problem Solving",
          icon: "Brain",
          skills: [
            { name: "Analytical Problem Solving", highlight: true },
            { name: "Data-Driven Decision Making", highlight: true },
            { name: "Optimization Mindset", highlight: true },
            { name: "Root Cause Analysis" },
            { name: "Systematic Troubleshooting" },
            { name: "Critical Thinking" },
          ],
        },
        {
          id: "communication",
          name: "Communication & Leadership",
          icon: "Users",
          skills: [
            { name: "Stakeholder Communication", highlight: true },
            { name: "Technical Concept Simplification", highlight: true },
            { name: "Cross-Functional Collaboration" },
            { name: "Active Listening & Feedback" },
            { name: "Project Presentation & Reporting" },
            { name: "Knowledge Sharing" },
          ],
        },
        {
          id: "execution",
          name: "Execution & Professional Excellence",
          icon: "Sparkles",
          skills: [
            { name: "Agile Delivery & Prioritization", highlight: true },
            { name: "Rapid Tech Adoption & Continuous Learning", highlight: true },
            { name: "High Attention to Detail", highlight: true },
            { name: "Ownership & Accountability" },
            { name: "Time Management" },
            { name: "Resilience Under Pressure" },
          ],
        },
      ],
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
            { name: "Operations Research & Optimization", level: 88, highlight: true },
            { name: "Decision Support Systems (DSS)", level: 86 },
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
      subtitle: "Tailored engineering, document styling, presentation design, and data processing solutions",
      viewPricing: "View Pricing Plans",
      pricingBadge: "Clear & Competitive USD Pricing",
      items: [
        {
          id: "portfolio-dev",
          title: "Portfolio Development & Web Apps",
          description:
            "Design and develop modern, responsive, and blazing-fast personal websites and portfolio showcases using Next.js, React, and Tailwind CSS to attract high-value opportunities.",
          deliverables: [
            "Custom responsive UI/UX for all screen sizes",
            "Smooth Framer Motion interactions & rich modern aesthetics",
            "SEO optimization, Dark/Light modes & lightning-fast deployment",
            "Direct WhatsApp contact & portfolio booking integration",
          ],
          icon: "Layout",
          pricingCategoryId: "portfolio",
        },
        {
          id: "doc-formatting",
          title: "Word & PDF Documents Formatting",
          description:
            "Format academic papers, business reports, and multi-page manuals into elegant, executive-ready documents with strict typographical consistency.",
          deliverables: [
            "Consistent typography, custom margins, headers & footers",
            "Custom cover page design & automated Table of Contents",
            "Complex table formatting & bilingual Arabic/English styling",
            "Delivered as editable .docx + print-ready PDF",
          ],
          icon: "FileText",
          pricingCategoryId: "documents",
        },
        {
          id: "presentation-design",
          title: "PowerPoint Presentations Design",
          description:
            "Create visually captivating slide decks for startup pitches, executive meetings, and graduation defenses with cohesive visual style and impactful diagrams.",
          deliverables: [
            "Custom brand alignment, harmonious palettes & clear typography",
            "Infographics, structured charts & data-driven visual storytelling",
            "Engaging slide transitions and clean animations",
            "Delivered as editable .pptx + presentation-ready PDF",
          ],
          icon: "Presentation",
          pricingCategoryId: "presentations",
        },
        {
          id: "data-engineering",
          title: "Data Engineering & ETL Pipelines",
          description:
            "Build automated data processing pipelines, cleaning routines, and validation workflows using Python, SQL, and Pandas to transform raw records into structured datasets.",
          deliverables: [
            "Automated data cleaning & deduplication workflows",
            "Python (Pandas) scripts & optimized SQL database queries",
            "Multi-step ETL pipelines & CSV/Excel processing",
            "Database integration, integrity testing & clear documentation",
          ],
          icon: "Database",
          pricingCategoryId: "data-engineering",
        },
      ],
    },
    education: {
      title: "Education",
      subtitle: "Academic foundation in Operations Research, Decision Support (OR & DS) & Computer Science",
      degreesTitle: "Academic Degrees & Programs",
      degrees: [
        {
          id: "fcai-cu",
          institution: "Faculty of Computers and Artificial Intelligence, Cairo University (FCAI-CU)",
          degree: "B.Sc. Student in Operations Research & Decision Support (OR & DS)",
          period: "Undergraduate (2022 – Present)",
          description:
            "Newly specialized undergraduate student in the Operations Research and Decision Support (OR & DS) department. Coursework focuses on Mathematical Modeling, Optimization Algorithms (Linear/Non-Linear Programming), Decision Support Systems (DSS), Simulation, and Statistical Modeling, integrated with core Computer Science and Data Engineering principles.",
          badge: "FCAI-CU · OR & DS",
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
    testimonials: {
      title: "Testimonials",
      subtitle: "What others say about my work, data engineering delivery, and collaboration",
      items: [],
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
      connectTitle: "Let's Connect",
      connectText:
        "I'm always open to discussing new data engineering projects, BI dashboards, and web development collaborations to build reliable, scalable systems.",
      whoTitle: "Who Am I?",
      whoText:
        "a Data Engineer & Software Developer passionate about building scalable data pipelines, insightful BI solutions, and high-performance web applications.",
      tagline: "Data Engineer · Cairo, Egypt",
      platformsTitle: "Freelance Platforms",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      education: "التعليم",
      credentials: "الشهادات",
      skills: "المهارات",
      experience: "الخبرات",
      services: "الخدمات",
      projects: "المشاريع",
      achievements: "الإنجازات",
      testimonials: "التوصيات",
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
        "مهندس بيانات وطالب بقسم بحوث العمليات ودعم اتخاذ القرار (OR & DS) بكلية الحاسبات والذكاء الاصطناعي - جامعة القاهرة. أركز على بناء أنظمة بيانات قابلة للتوسع، وخطوط معالجة عالية الأداء (ETL/ELT)، وتطبيقات ويب حديثة تحوّل البيانات المعقدة إلى نماذج وقرارات دقيقة ورؤى قابلة للتنفيذ.",
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
      title: "المهارات والخبرات",
      subtitle: "مزيج متوازن بين الدقة الهندسية، وأدوات التحليل، والقدرة الفائقة على حل المشكلات المعقدة",
      allLabel: "جميع المهارات",
      tabs: {
        technical: "المهارات التقنية",
        tools: "الأدوات والأنظمة",
        soft: "المهارات الشخصية",
      },
      technical: [
        {
          id: "data-engineering",
          name: "هندسة وبنية البيانات",
          icon: "Database",
          skills: [
            { name: "خطوط معالجة وتدفق البيانات (ETL / ELT)", highlight: true },
            { name: "تحسين استعلامات SQL الفائقة", highlight: true },
            { name: "بايثون للبيانات (Pandas, PySpark)", highlight: true },
            { name: "مستودعات البيانات (BigQuery, Snowflake)", highlight: true },
            { name: "نمذجة البيانات والمخططات النجمية (Star Schema)" },
            { name: "قواعد البيانات العلائقية و NoSQL" },
            { name: "اختبار ومطابقة جودة وسلامة البيانات", highlight: true },
            { name: "معالجة البيانات الضخمة (Big Data)" },
          ],
        },
        {
          id: "bi-analytics",
          name: "بحوث العمليات ودعم اتخاذ القرار",
          icon: "LineChart",
          skills: [
            { name: "بحوث العمليات والاستمثال الرياضي", highlight: true },
            { name: "نظم دعم اتخاذ القرار (DSS)", highlight: true },
            { name: "البرمجة الخطية والخوارزميات الرياضية" },
            { name: "التحليلات الإحصائية والتنبؤية" },
            { name: "هيكلة مؤشرات الأداء ومنطق الأعمال", highlight: true },
            { name: "تحليل الانحرافات والتنبؤ بالاتجاهات" },
            { name: "التحليل الكمي لدعم القرار" },
          ],
        },
        {
          id: "web-dev",
          name: "تطوير الويب المتكامل",
          icon: "Code2",
          skills: [
            { name: "Next.js (App Router الحديث)", highlight: true },
            { name: "React و Modern TypeScript", highlight: true },
            { name: "Tailwind CSS وتصميم الواجهات المتجاوبة", highlight: true },
            { name: "Node.js وبناء واجهات البرمجة REST", highlight: true },
            { name: "قواعد بيانات PostgreSQL والاستعلامات" },
            { name: "تحسين الأداء وسرعة الاستجابة و SEO" },
          ],
        },
      ],
      tools: [
        {
          id: "bi-tools",
          name: "أدوات التحليل وذكاء الأعمال",
          icon: "BarChart3",
          skills: [
            { name: "Power BI ودوال DAX المتقدمة", highlight: true },
            { name: "لوحات التحكم التفاعلية ومؤشرات KPI", highlight: true },
            { name: "برنامج تابلوه (Tableau Desktop)" },
            { name: "إكسيل المتقدم (Power Query, DAX, Pivots)", highlight: true },
            { name: "منظومة Apache Spark" },
            { name: "بيئات Jupyter Notebook و Google Colab" },
          ],
        },
        {
          id: "db-cloud",
          name: "قواعد البيانات والمنصات السحابية",
          icon: "Cloud",
          skills: [
            { name: "قواعد بيانات PostgreSQL", highlight: true },
            { name: "Google BigQuery", highlight: true },
            { name: "Supabase BaaS", highlight: true },
            { name: "منصة Snowflake" },
            { name: "MySQL / SQLite" },
            { name: "أساسيات Firebase" },
          ],
        },
        {
          id: "dev-ops",
          name: "أدوات التطوير والأتمتة والـ DevOps",
          icon: "Wrench",
          skills: [
            { name: "أتمتة سير العمل وسلاسل المهام (n8n)", highlight: true },
            { name: "التحكم بالإصدارات Git و GitHub", highlight: true },
            { name: "بيئات الحاويات Docker" },
            { name: "أنظمة لينكس وسطور الأوامر (CLI)", highlight: true },
            { name: "إدارة خطوط البيانات (Apache Airflow)" },
            { name: "بيئات التطوير VS Code و Postman" },
          ],
        },
      ],
      soft: [
        {
          id: "problem-solving",
          name: "التفكير التحليلي وحل المشكلات",
          icon: "Brain",
          skills: [
            { name: "التفكير التحليلي وحل المشكلات المعقدة", highlight: true },
            { name: "اتخاذ القرارات المبنية على البيانات", highlight: true },
            { name: "عقلية الاستمثال والتطوير المستمر", highlight: true },
            { name: "تحليل الأسباب الجذرية للمشاكل" },
            { name: "استكشاف الأخطاء المنهجي (Troubleshooting)" },
            { name: "الاستنتاج والربط المنطقي" },
          ],
        },
        {
          id: "communication",
          name: "التواصل والعمل الجماعي",
          icon: "Users",
          skills: [
            { name: "التواصل الفعّال مع مختلف الفرق وأصحاب المصلحة", highlight: true },
            { name: "تبسيط المفاهيم التقنية المعقدة", highlight: true },
            { name: "العمل بروح الفريق الواحد" },
            { name: "الاستماع الفعّال وتقبل الملاحظات البنّاءة" },
            { name: "تقديم العروض التقديمية ومناقشة الحلول" },
            { name: "مشاركة المعرفة والخبرات" },
          ],
        },
        {
          id: "execution",
          name: "التنفيذ وسرعة التكيف",
          icon: "Sparkles",
          skills: [
            { name: "إدارة الأولويات والتسليم المرن (Agile)", highlight: true },
            { name: "سرعة التعلم ومواكبة أحدث التقنيات", highlight: true },
            { name: "الدقة الفائقة والاهتمام بأدق التفاصيل", highlight: true },
            { name: "تحمل المسؤولية وروح المبادرة (Ownership)" },
            { name: "إدارة الوقت والالتزام بالمواعيد" },
            { name: "المرونة والعمل تحت ضغط" },
          ],
        },
      ],
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
            { name: "بحوث العمليات والاستمثال (Operations Research)", level: 88, highlight: true },
            { name: "نظم دعم اتخاذ القرار (Decision Support Systems)", level: 86 },
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
      subtitle: "حلول تقنية وتصميمية مخصصة تشمل تطوير المواقع، تنسيق المستندات، العروض التقديمية، وهندسة البيانات",
      viewPricing: "عرض باقات وخطط الأسعار",
      pricingBadge: "باقات واضحة ومناسبة",
      items: [
        {
          id: "portfolio-dev",
          title: "تطوير مواقع البورتفوليو والويب",
          description:
            "تصميم وبرمجة مواقع شخصية وبورتفوليو احترافية وسريعة باستخدام Next.js و React لعرض أعمالك ومهاراتك وجذب العملاء والفرص.",
          deliverables: [
            "تصميم مخصص ومتجاوب بالكامل مع كافة الشاشات والموبايل",
            "تفاعلات بصرية سلسة ومؤثرات أنيميشن راقية وجماليات حديثة",
            "تهيئة محركات البحث SEO، والوضع الليلي، ونشر فوري أونلاين",
            "ربط مباشر مع الواتساب للتواصل والطلب السريع",
          ],
          icon: "Layout",
          pricingCategoryId: "portfolio",
        },
        {
          id: "doc-formatting",
          title: "تنسيق مستندات Word & PDF",
          description:
            "تحويل المسودات والنصوص إلى تقارير وأبحاث ومستندات رسمية منسقة بأعلى معايير الدقة والترتيب والطباعة الاحترافية.",
          deliverables: [
            "تنسيق احترافي شامل للخطوط، العناوين، الهوامش، والترويسات",
            "تصميم صفحة غلاف مخصصة وفهرس محتويات آلي التحديث",
            "تنسيق الجداول وتنسيق ثنائي باللغتين العربية والإنجليزية",
            "تسليم ملف Word قابل للتعديل بالإضافة لنسخة PDF جاهزة للطباعة",
          ],
          icon: "FileText",
          pricingCategoryId: "documents",
        },
        {
          id: "presentation-design",
          title: "تصميم عروض PowerPoint التقديمية",
          description:
            "تصميم سلايدات وعروض تقديمية بصرية جذابة للمشاريع، الشركات، الاجتماعات، ومناقشات التخرج بأسلوب بصري منظم ومقنع.",
          deliverables: [
            "هوية بصرية متناسقة وألوان وخطوط مريحة للعين ومناسبة للموضوع",
            "رسوم بيانية، إنفوجرافيك، ومخططات توضيحية لتبسيط المعلومات",
            "حركات وانتقالات احترافية تضيف حيوية وتفاعلية للعرض",
            "تسليم ملف PowerPoint أصلي مفتوح المصدر + نسخة PDF للعرض السريع",
          ],
          icon: "Presentation",
          pricingCategoryId: "presentations",
        },
        {
          id: "data-engineering",
          title: "هندسة ومعالجة البيانات (Data Engineering)",
          description:
            "أتمتة تنظيف وهيكلة البيانات، وبناء خطوط معالجة وتدفق ETL باستخدام بايثون و SQL لتحويل البيانات الفوضوية إلى جداول منظمة.",
          deliverables: [
            "تنظيف واستخراج البيانات وفحص الجودة تلقائياً (Data Quality)",
            "معالجة متقدمة بـ Python و Pandas واستعلامات SQL محكمة",
            "بناء خطوط تدفق ومعالجة ملفات CSV وإكسيل وقواعد البيانات",
            "توثيق واضح للكود والخطوات وسهولة إعادة التشغيل",
          ],
          icon: "Database",
          pricingCategoryId: "data-engineering",
        },
      ],
    },
    education: {
      title: "التعليم",
      subtitle: "أساس أكاديمي متين في بحوث العمليات ودعم اتخاذ القرار (OR & DS) وعلوم الحاسب",
      degreesTitle: "الدرجات والبرامج الأكاديمية",
      degrees: [
        {
          id: "fcai-cu",
          institution: "كلية الحاسبات والذكاء الاصطناعي - جامعة القاهرة (FCAI-CU)",
          degree: "طالب بكالوريوس — قسم بحوث العمليات ودعم اتخاذ القرار (OR & DS)",
          period: "طالب جامعي (2022 – حتى الآن)",
          description:
            "طالب متخصص حديثاً في قسم بحوث العمليات ودعم اتخاذ القرار (Operations Research & Decision Support - OR & DS). تشمل الدراسة الأكاديمية النمذجة الرياضية، خوارزميات الاستمثال والبرمجة الخطية (Optimization)، نظم دعم القرار (DSS)، المحاكاة، والنماذج العشوائية، بالتكامل مع أسس علوم الحاسب وهندسة البيانات.",
          badge: "FCAI-CU · OR & DS",
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
    testimonials: {
      title: "التوصيات والآراء",
      subtitle: "ما يقوله الآخرون عن العمل معي والمشاريع المشتركة ودقة التنفيذ",
      items: [],
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
      connectTitle: "لنتواصل",
      connectText:
        "يسعدني دائماً مناقشة مشاريع هندسة البيانات الجديدة، ولوحات ذكاء الأعمال، والتعاون في تطوير الويب لبناء أنظمة موثوقة وقابلة للتوسع.",
      whoTitle: "من أنا؟",
      whoText:
        "مهندس بيانات ومطور برمجيات شغوف ببناء خطوط بيانات قابلة للتوسع، وحلول ذكاء أعمال دقيقة، وتطبيقات ويب عالية الأداء.",
      tagline: "مهندس بيانات · القاهرة، مصر",
      platformsTitle: "منصات العمل الحر",
    },
  },
};

export const personalInfo = {
  name: {
    en: "Mostafa Morad Sayed",
    ar: "مصطفى مراد سيد",
  },
  email: "moradahmed854@gmail.com",
  phone: "+20 101 590 5993",
  phoneClean: "+201015905993",
  whatsapp: "https://wa.me/201015905993",
  location: {
    en: "Cairo, Egypt",
    ar: "القاهرة، مصر",
  },
  linkedin: "https://www.linkedin.com/in/mostafa-morad-sayed",
  github: "https://github.com/mostafamorad1",
  cvFile: "/Mostafa_Morad_CV.pdf",
  freelancePlatforms: [
    { id: "upwork", name: "Upwork", url: "https://www.upwork.com/freelancers/~01cf535b92c8102dfb", icon: "/platforms/upwork.png" },
    { id: "freelancer", name: "Freelancer", url: "https://www.freelancer.com/u/mostafamorad7?frm=mostafamorad7&sb=t", icon: "/platforms/freelancer.png" },
    { id: "khamsat", name: "Khamsat", url: "https://khamsat.com/user/mostafa_morad12", icon: "/platforms/khamsat.png" },
    { id: "nafezly", name: "Nafezly", url: "https://nafezly.com/u/Mostafa_Morad", icon: "/platforms/nafezly.png" },
    { id: "mostaql", name: "Mostaql", url: "https://mostaql.com/u/Mostafa_Morad12", icon: "/platforms/mostaql.png" },
    { id: "freelanceyard", name: "FreelanceYard", url: "https://www.freelanceyard.com/en/freelancers/mostafa-mostafa-2", icon: "/platforms/freelanceyard.png" },
  ],
};

export const whatsappWelcomeMessage: Record<Language, string> = {
  en: "Hello Mostafa, I'm contacting you from your portfolio website. I'd like to discuss a project / opportunity with you.",
  ar: "مرحباً مصطفى، أتواصل معك من خلال موقع البورتفوليو الخاص بك. أرغب في مناقشة مشروع / فرصة عمل معك.",
};

export function getWhatsAppLink(lang: Language): string {
  return `${personalInfo.whatsapp}?text=${encodeURIComponent(whatsappWelcomeMessage[lang])}`;
}

