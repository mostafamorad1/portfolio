import { Language } from "./portfolioData";

export interface PlanFeature {
  name: Record<Language, string>;
  value: string | boolean;
}

export interface PricingPlan {
  id: string;
  name: Record<Language, string>;
  price: number;
  popular?: boolean;
  tagline: Record<Language, string>;
  revisions: number;
  extraRevisionPrice?: number;
  features: PlanFeature[];
}

export interface PricingCategory {
  id: string;
  name: Record<Language, string>;
  icon: string;
  tagline: Record<Language, string>;
  note?: Record<Language, string>;
  plans: PricingPlan[];
}

export interface AddOnItem {
  title: Record<Language, string>;
  price: string;
}

export const pricingCategories: PricingCategory[] = [
  {
    id: "portfolio",
    name: {
      en: "Portfolio Development",
      ar: "تطوير مواقع البورتفوليو",
    },
    icon: "Code",
    tagline: {
      en: "Modern, high-performance personal websites to showcase your work and land opportunities.",
      ar: "مواقع شخصية وبورتفوليو حديثة وسريعة لعرض مشاريعك وجذب العملاء والفرص.",
    },
    note: {
      en: "Prices are for personal portfolio websites and do not include domain or paid hosting costs.",
      ar: "الأسعار لمواقع البورتفوليو الشخصية، ولا تشمل تكاليف الدومين أو الخدمات المدفوعة.",
    },
    plans: [
      {
        id: "portfolio-starter",
        name: { en: "Starter", ar: "باقة البداية" },
        price: 10,
        popular: false,
        revisions: 2,
        extraRevisionPrice: 5,
        tagline: {
          en: "Simple, elegant portfolio for beginners, graduates, and students.",
          ar: "بورتفوليو بسيط وأنيق للمبتدئين والطلاب والخريجين الجدد.",
        },
        features: [
          { name: { en: "Custom Design", ar: "تصميم مخصص" }, value: true },
          { name: { en: "Responsive Layout", ar: "متجاوب مع الموبايل والشاشات" }, value: true },
          { name: { en: "Number of Pages", ar: "عدد الصفحات" }, value: "1 Page" },
          { name: { en: "About & Skills", ar: "نبذة عنك وقسم المهارات" }, value: true },
          { name: { en: "Projects Showcase", ar: "معرض المشاريع" }, value: "3 Projects" },
          { name: { en: "Animations", ar: "الحركات والمؤثرات" }, value: "Basic" },
          { name: { en: "Dark / Light Mode", ar: "الوضع الليلي والنهاري" }, value: false },
          { name: { en: "SEO Optimization", ar: "تهيئة محركات البحث SEO" }, value: "Basic" },
          { name: { en: "Live Deployment", ar: "نشر الموقع أونلاين" }, value: true },
        ],
      },
      {
        id: "portfolio-pro",
        name: { en: "Professional", ar: "المحترفين" },
        price: 25,
        popular: true,
        revisions: 3,
        extraRevisionPrice: 5,
        tagline: {
          en: "Tailored design with rich interactive effects to showcase your work and skills.",
          ar: "تصميم مخصص وتفاعلات احترافية لعرض المشاريع والمهارات بشكل بارز.",
        },
        features: [
          { name: { en: "Custom Design", ar: "تصميم مخصص" }, value: true },
          { name: { en: "Responsive Layout", ar: "متجاوب مع الموبايل والشاشات" }, value: true },
          { name: { en: "Number of Pages", ar: "عدد الصفحات" }, value: "Up to 3 Pages" },
          { name: { en: "About & Skills", ar: "نبذة عنك وقسم المهارات" }, value: true },
          { name: { en: "Projects Showcase", ar: "معرض المشاريع" }, value: "6 Projects" },
          { name: { en: "Animations", ar: "الحركات والمؤثرات" }, value: "Advanced" },
          { name: { en: "Dark / Light Mode", ar: "الوضع الليلي والنهاري" }, value: "Optional" },
          { name: { en: "SEO Optimization", ar: "تهيئة محركات البحث SEO" }, value: true },
          { name: { en: "Live Deployment", ar: "نشر الموقع أونلاين" }, value: true },
        ],
      },
      {
        id: "portfolio-premium",
        name: { en: "Premium", ar: "المتقدمة" },
        price: 45,
        popular: false,
        revisions: 4,
        extraRevisionPrice: 5,
        tagline: {
          en: "Complete multi-page experience with custom visuals and advanced polish.",
          ar: "تجربة متكاملة بتصميم مميز وصفحات متعددة وتفاصيل بصرية متقدمة.",
        },
        features: [
          { name: { en: "Custom Design", ar: "تصميم مخصص" }, value: true },
          { name: { en: "Responsive Layout", ar: "متجاوب مع الموبايل والشاشات" }, value: true },
          { name: { en: "Number of Pages", ar: "عدد الصفحات" }, value: "Up to 5 Pages" },
          { name: { en: "About & Skills", ar: "نبذة عنك وقسم المهارات" }, value: true },
          { name: { en: "Projects Showcase", ar: "معرض المشاريع" }, value: "10 Projects" },
          { name: { en: "Animations", ar: "الحركات والمؤثرات" }, value: "Custom 3D" },
          { name: { en: "Dark / Light Mode", ar: "الوضع الليلي والنهاري" }, value: true },
          { name: { en: "SEO Optimization", ar: "تهيئة محركات البحث SEO" }, value: true },
          { name: { en: "Live Deployment", ar: "نشر الموقع أونلاين" }, value: true },
        ],
      },
    ],
  },
  {
    id: "documents",
    name: {
      en: "Word & PDF Documents",
      ar: "تنسيق مستندات Word & PDF",
    },
    icon: "FileText",
    tagline: {
      en: "Polished formatting, structured layouts, and executive-ready documents.",
      ar: "تنسيق احترافي وهيكلة منسقة للمستندات والتقارير الأكاديمية والمهنية.",
    },
    note: {
      en: "Pricing covers layout design & formatting; writing original content from scratch is quoted separately.",
      ar: "الأسعار للتنسيق والتصميم، وليست لكتابة محتوى المستند من الصفر.",
    },
    plans: [
      {
        id: "doc-basic",
        name: { en: "Basic", ar: "البداية" },
        price: 5,
        popular: false,
        revisions: 1,
        extraRevisionPrice: 2,
        tagline: {
          en: "Clean layout, tidy typography, and standardized fonts.",
          ar: "تنسيق مستندات بسيطة وترتيب النصوص والعناوين والخطوط.",
        },
        features: [
          { name: { en: "Number of Pages", ar: "عدد الصفحات" }, value: "Up to 5 Pages" },
          { name: { en: "Professional Formatting", ar: "تنسيق احترافي للنصوص" }, value: true },
          { name: { en: "Headers & Footers", ar: "الترويسة والتذييل" }, value: "Basic" },
          { name: { en: "Page Numbering", ar: "ترقيم الصفحات" }, value: true },
          { name: { en: "Tables Formatting", ar: "تنسيق الجداول" }, value: "Basic" },
          { name: { en: "Custom Cover Page", ar: "صفحة غلاف مخصصة" }, value: false },
          { name: { en: "Automatic Table of Contents", ar: "فهرس محتويات تلقائي" }, value: false },
          { name: { en: "Arabic & English", ar: "دعم العربية والإنجليزية" }, value: true },
          { name: { en: "Editable Word File", ar: "تسليم ملف Word قابل للتعديل" }, value: true },
          { name: { en: "PDF Export", ar: "تصدير نسخة PDF جاهزة" }, value: true },
        ],
      },
      {
        id: "doc-pro",
        name: { en: "Professional", ar: "المحترفين" },
        price: 10,
        popular: true,
        revisions: 2,
        extraRevisionPrice: 2,
        tagline: {
          en: "Complete document formatting with custom cover and automated TOC.",
          ar: "تنسيق متكامل مع صفحة غلاف احترافية وفهرس آلي منظم.",
        },
        features: [
          { name: { en: "Number of Pages", ar: "عدد الصفحات" }, value: "Up to 15 Pages" },
          { name: { en: "Professional Formatting", ar: "تنسيق احترافي للنصوص" }, value: true },
          { name: { en: "Headers & Footers", ar: "الترويسة والتذييل" }, value: true },
          { name: { en: "Page Numbering", ar: "ترقيم الصفحات" }, value: true },
          { name: { en: "Tables Formatting", ar: "تنسيق الجداول" }, value: "Advanced" },
          { name: { en: "Custom Cover Page", ar: "صفحة غلاف مخصصة" }, value: true },
          { name: { en: "Automatic Table of Contents", ar: "فهرس محتويات تلقائي" }, value: true },
          { name: { en: "Arabic & English", ar: "دعم العربية والإنجليزية" }, value: true },
          { name: { en: "Editable Word File", ar: "تسليم ملف Word قابل للتعديل" }, value: true },
          { name: { en: "PDF Export", ar: "تصدير نسخة PDF جاهزة" }, value: true },
        ],
      },
      {
        id: "doc-premium",
        name: { en: "Premium", ar: "المتقدمة" },
        price: 25,
        popular: false,
        revisions: 3,
        extraRevisionPrice: 2,
        tagline: {
          en: "Long-form documents, thesis & manuals ready for digital distribution or print.",
          ar: "مستندات طويلة ومتقدمة وجاهزة تماماً للطباعة أو المشاركة الرقمية.",
        },
        features: [
          { name: { en: "Number of Pages", ar: "عدد الصفحات" }, value: "Up to 30 Pages" },
          { name: { en: "Professional Formatting", ar: "تنسيق احترافي للنصوص" }, value: true },
          { name: { en: "Headers & Footers", ar: "الترويسة والتذييل" }, value: true },
          { name: { en: "Page Numbering", ar: "ترقيم الصفحات" }, value: true },
          { name: { en: "Tables Formatting", ar: "تنسيق الجداول" }, value: "Advanced" },
          { name: { en: "Custom Cover Page", ar: "صفحة غلاف مخصصة" }, value: true },
          { name: { en: "Automatic Table of Contents", ar: "فهرس محتويات تلقائي" }, value: true },
          { name: { en: "Arabic & English", ar: "دعم العربية والإنجليزية" }, value: true },
          { name: { en: "Editable Word File", ar: "تسليم ملف Word قابل للتعديل" }, value: true },
          { name: { en: "PDF Export", ar: "تصدير نسخة PDF جاهزة" }, value: true },
        ],
      },
    ],
  },
  {
    id: "presentations",
    name: {
      en: "PowerPoint Presentations",
      ar: "عروض PowerPoint التقديمية",
    },
    icon: "Presentation",
    tagline: {
      en: "Visually captivating slide decks for pitches, business reports, and academic defenses.",
      ar: "سلايدات وعروض تقديمية جذابة للشركات والاجتماعات ومناقشات التخرج والمشاريع.",
    },
    note: {
      en: "Custom illustrations, advanced infographics, or content creation from scratch may require custom scope.",
      ar: "إنشاء المحتوى من الصفر والرسوم المعقدة والأنيميشن المتقدم قد يتطلب تكلفة إضافية.",
    },
    plans: [
      {
        id: "ppt-basic",
        name: { en: "Basic", ar: "البداية" },
        price: 7,
        popular: false,
        revisions: 1,
        extraRevisionPrice: 2,
        tagline: {
          en: "Simple, clean presentation layout with consistent typography.",
          ar: "عرض تقديمي بسيط ومنظم بخطوط وعناصر متناسقة.",
        },
        features: [
          { name: { en: "Number of Slides", ar: "عدد الشرائح" }, value: "Up to 5 Slides" },
          { name: { en: "Professional Layout", ar: "تنسيق احترافي" }, value: true },
          { name: { en: "Consistent Typography", ar: "خطوط وعناوين متناسقة" }, value: true },
          { name: { en: "Custom Visual Style", ar: "أسلوب بصري مخصص" }, value: "Basic" },
          { name: { en: "Icons & Illustrations", ar: "أيقونات ورسومات" }, value: "Basic" },
          { name: { en: "Charts & Diagrams", ar: "مخططات ورسوم بيانية" }, value: false },
          { name: { en: "Slide Animations", ar: "حركات وانتقالات الشرائح" }, value: false },
          { name: { en: "Editable PPTX", ar: "ملف PowerPoint أصلي قابل للتعديل" }, value: true },
          { name: { en: "PDF Version", ar: "نسخة PDF للعرض السريع" }, value: true },
        ],
      },
      {
        id: "ppt-pro",
        name: { en: "Professional", ar: "المحترفين" },
        price: 15,
        popular: true,
        revisions: 2,
        extraRevisionPrice: 2,
        tagline: {
          en: "Consistent branding, custom visual theme, infographics, and chart integrations.",
          ar: "عرض بتصميم متناسق وهوية بصرية واضحة ورسوم بيانية ومؤثرات احترافية.",
        },
        features: [
          { name: { en: "Number of Slides", ar: "عدد الشرائح" }, value: "Up to 10 Slides" },
          { name: { en: "Professional Layout", ar: "تنسيق احترافي" }, value: true },
          { name: { en: "Consistent Typography", ar: "خطوط وعناوين متناسقة" }, value: true },
          { name: { en: "Custom Visual Style", ar: "أسلوب بصري مخصص" }, value: "Advanced" },
          { name: { en: "Icons & Illustrations", ar: "أيقونات ورسومات" }, value: true },
          { name: { en: "Charts & Diagrams", ar: "مخططات ورسوم بيانية" }, value: "Basic" },
          { name: { en: "Slide Animations", ar: "حركات وانتقالات الشرائح" }, value: "Basic" },
          { name: { en: "Editable PPTX", ar: "ملف PowerPoint أصلي قابل للتعديل" }, value: true },
          { name: { en: "PDF Version", ar: "نسخة PDF للعرض السريع" }, value: true },
        ],
      },
      {
        id: "ppt-premium",
        name: { en: "Premium", ar: "المتقدمة" },
        price: 30,
        popular: false,
        revisions: 3,
        extraRevisionPrice: 2,
        tagline: {
          en: "Executive pitch deck with high-impact diagrams, custom visuals, and motion.",
          ar: "عرض متكامل وفاخر بتصميم مخصص بالكامل ومخططات متقدمة ورسوم توضيحية.",
        },
        features: [
          { name: { en: "Number of Slides", ar: "عدد الشرائح" }, value: "Up to 20 Slides" },
          { name: { en: "Professional Layout", ar: "تنسيق احترافي" }, value: true },
          { name: { en: "Consistent Typography", ar: "خطوط وعناوين متناسقة" }, value: true },
          { name: { en: "Custom Visual Style", ar: "أسلوب بصري مخصص" }, value: "Custom" },
          { name: { en: "Icons & Illustrations", ar: "أيقونات ورسومات" }, value: true },
          { name: { en: "Charts & Diagrams", ar: "مخططات ورسوم بيانية" }, value: "Advanced" },
          { name: { en: "Slide Animations", ar: "حركات وانتقالات الشرائح" }, value: "Advanced" },
          { name: { en: "Editable PPTX", ar: "ملف PowerPoint أصلي قابل للتعديل" }, value: true },
          { name: { en: "PDF Version", ar: "نسخة PDF للعرض السريع" }, value: true },
        ],
      },
    ],
  },
  {
    id: "data-engineering",
    name: {
      en: "Data Engineering",
      ar: "هندسة ومعالجة البيانات",
    },
    icon: "Database",
    tagline: {
      en: "Focused data workflows, cleaning, automated ETL pipelines, and validation scripts.",
      ar: "تنظيف وهيكلة البيانات، بناء خطوط معالجة ETL آلية، وربط وتنسيق قواعد البيانات.",
    },
    note: {
      en: "Estimates are for scoped small-to-medium tasks; enterprise production infrastructure is scoped separately.",
      ar: "أسعار Data Engineering تقديرية لمهام ومشاريع محددة، ولا تشمل بنية سحابية مدفوعة.",
    },
    plans: [
      {
        id: "de-starter",
        name: { en: "Starter", ar: "البداية" },
        price: 10,
        popular: false,
        revisions: 1,
        extraRevisionPrice: 5,
        tagline: {
          en: "Data cleaning, deduplication, and file transformations using Python & SQL.",
          ar: "تنظيف ملفات البيانات ومعالجتها بمهام سريعة باستخدام بايثون أو SQL.",
        },
        features: [
          { name: { en: "Data Cleaning", ar: "تنظيف واستخراج البيانات" }, value: true },
          { name: { en: "Python & Pandas", ar: "معالجة ببايثون و Pandas" }, value: true },
          { name: { en: "SQL Queries", ar: "استعلامات SQL" }, value: "Basic" },
          { name: { en: "CSV / Excel Processing", ar: "معالجة ملفات CSV وإكسيل" }, value: true },
          { name: { en: "Data Transformation", ar: "تحويل وهيكلة البيانات" }, value: "Basic" },
          { name: { en: "ETL Pipeline", ar: "خط تدفق بيانات ETL" }, value: false },
          { name: { en: "Database Integration", ar: "ربط قواعد البيانات" }, value: false },
          { name: { en: "Data Validation", ar: "التحقق من صحة البيانات" }, value: "Basic" },
          { name: { en: "Error Handling", ar: "معالجة استثناءات الأخطاء" }, value: false },
          { name: { en: "Documentation", ar: "توثيق الكود والخطوات" }, value: "Basic" },
        ],
      },
      {
        id: "de-pro",
        name: { en: "Professional", ar: "المحترفين" },
        price: 25,
        popular: true,
        revisions: 2,
        extraRevisionPrice: 5,
        tagline: {
          en: "Automated ETL pipeline with multi-step transformation, database loading, and integrity checks.",
          ar: "تنفيذ ETL Pipeline متكاملة مع تحويل متعدد الخطوات والتحقق من صحة البيانات.",
        },
        features: [
          { name: { en: "Data Cleaning", ar: "تنظيف واستخراج البيانات" }, value: true },
          { name: { en: "Python & Pandas", ar: "معالجة ببايثون و Pandas" }, value: true },
          { name: { en: "SQL Queries", ar: "استعلامات SQL" }, value: "Advanced" },
          { name: { en: "CSV / Excel Processing", ar: "معالجة ملفات CSV وإكسيل" }, value: true },
          { name: { en: "Data Transformation", ar: "تحويل وهيكلة البيانات" }, value: "Multi-step" },
          { name: { en: "ETL Pipeline", ar: "خط تدفق بيانات ETL" }, value: "Basic" },
          { name: { en: "Database Integration", ar: "ربط قواعد البيانات" }, value: "One Source" },
          { name: { en: "Data Validation", ar: "التحقق من صحة البيانات" }, value: true },
          { name: { en: "Error Handling", ar: "معالجة استثناءات الأخطاء" }, value: true },
          { name: { en: "Documentation", ar: "توثيق الكود والخطوات" }, value: true },
        ],
      },
      {
        id: "de-advanced",
        name: { en: "Advanced", ar: "المتقدمة" },
        price: 50,
        popular: false,
        revisions: 3,
        extraRevisionPrice: 5,
        tagline: {
          en: "Multi-source data pipeline with advanced transformations, error resilience, and full reporting.",
          ar: "مشروع معالجة بيانات متعدد الخطوات والمصادر وفق متطلبات ومعايير دقيقة.",
        },
        features: [
          { name: { en: "Data Cleaning", ar: "تنظيف واستخراج البيانات" }, value: true },
          { name: { en: "Python & Pandas", ar: "معالجة ببايثون و Pandas" }, value: true },
          { name: { en: "SQL Queries", ar: "استعلامات SQL" }, value: "Advanced" },
          { name: { en: "CSV / Excel Processing", ar: "معالجة ملفات CSV وإكسيل" }, value: true },
          { name: { en: "Data Transformation", ar: "تحويل وهيكلة البيانات" }, value: "Advanced" },
          { name: { en: "ETL Pipeline", ar: "خط تدفق بيانات ETL" }, value: "Advanced" },
          { name: { en: "Database Integration", ar: "ربط قواعد البيانات" }, value: "Multiple Sources" },
          { name: { en: "Data Validation", ar: "التحقق من صحة البيانات" }, value: true },
          { name: { en: "Error Handling", ar: "معالجة استثناءات الأخطاء" }, value: true },
          { name: { en: "Documentation", ar: "توثيق الكود والخطوات" }, value: true },
        ],
      },
    ],
  },
];

export const pricingAddOns: AddOnItem[] = [
  {
    title: { en: "Extra Revision (Word & PPT)", ar: "تعديل إضافي (مستندات وعروض)" },
    price: "$2",
  },
  {
    title: { en: "Extra Revision (Web & Data)", ar: "تعديل إضافي (مواقع وبيانات)" },
    price: "$5",
  },
  {
    title: { en: "Additional Portfolio Page", ar: "صفحة بورتفوليو إضافية" },
    price: "$5",
  },
  {
    title: { en: "Additional 5 Word Pages", ar: "إضافة 5 صفحات Word" },
    price: "$3",
  },
  {
    title: { en: "Additional 5 PowerPoint Slides", ar: "إضافة 5 شرائح PowerPoint" },
    price: "$5",
  },
  {
    title: { en: "Professional Document Cover", ar: "تصميم غلاف مستند احترافي" },
    price: "$2",
  },
  {
    title: { en: "Reusable Word Template", ar: "قالب Word مخصص وقابل لإعادة الاستخدام" },
    price: "From $5",
  },
  {
    title: { en: "Reusable PowerPoint Template", ar: "قالب PowerPoint قابل للتكرار" },
    price: "From $7",
  },
  {
    title: { en: "Rush / Express Delivery", ar: "تسليم سريع عاجل (Express)" },
    price: "+25% – 40%",
  },
];
