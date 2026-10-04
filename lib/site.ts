export const profile = {
  name: "Nagina Azhar",
  title: "Python Developer | AI & Web Developer | AI Automation",
  roles: [
    "Python Developer",
    "AI & Web Developer",
    "AI Automation",
  ],
  intro:
    "I build modern websites and practical AI-powered solutions that turn ideas into simple, useful digital experiences.",
  email: "syntaxsoul341@gmail.com",
  emailHref: "mailto:syntaxsoul341@gmail.com",
  linkedin: "https://www.linkedin.com/in/nagina-azhar",
  github: "https://github.com/nagina56",
  photo: "/nagina-azhar.jpg",
  photoAlt: "Nagina Azhar, Python Developer and AI & Web Developer",
  location: "Available for freelance and project work",
  availability: "Open to new projects",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export type Skill = {
  name: string;
  blurb: string;
  points: string[];
  icon: "code" | "layout" | "brain" | "workflow" | "plug" | "palette" | "branch" | "target";
};

export const skills: Skill[] = [
  {
    name: "Python",
    blurb:
      "Clean, readable Python for scripts, services, data work and the logic that runs behind the scenes.",
    points: ["Core & OOP", "Data handling", "Scripting & tooling"],
    icon: "code",
  },
  {
    name: "Web Development",
    blurb:
      "Responsive, fast-loading front ends built with modern component frameworks and tidy structure.",
    points: ["Component UI", "Responsive layout", "Performance"],
    icon: "layout",
  },
  {
    name: "AI & Machine Learning",
    blurb:
      "Practical AI features — language models, classification and smart features that earn their place in a product.",
    points: ["LLM integration", "Prompt design", "Model evaluation"],
    icon: "brain",
  },
  {
    name: "AI Automation",
    blurb:
      "Automating repetitive steps with scripts, APIs and AI so manual work stops eating your week.",
    points: ["Task pipelines", "Scheduled jobs", "Error handling"],
    icon: "workflow",
  },
  {
    name: "API Integration",
    blurb:
      "Connecting third-party services and AI providers so data moves between tools without copy-paste.",
    points: ["REST APIs", "Auth & keys", "Webhooks"],
    icon: "plug",
  },
  {
    name: "HTML / CSS / JavaScript",
    blurb:
      "The fundamentals, done properly — semantic structure, considered layout and interactive detail.",
    points: ["Semantic HTML", "Responsive CSS", "Vanilla JS"],
    icon: "palette",
  },
  {
    name: "Git & GitHub",
    blurb:
      "Version control as a habit: clean commits, readable history and projects that are easy to hand over.",
    points: ["Branching", "Pull requests", "Project setup"],
    icon: "branch",
  },
  {
    name: "Problem Solving",
    blurb:
      "Breaking an unclear requirement into small, solvable steps and shipping the working version first.",
    points: ["Requirements", "Debugging", "Iterative delivery"],
    icon: "target",
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl: string;
  image: string;
  imageAlt: string;
  accent: string;
  accentSoft: string;
};

export const projects: Project[] = [
  {
    slug: "elar-fashion-boutique",
    name: "Elare Fashion Boutique",
    category: "E-commerce Fashion Website",
    year: "2026",
    summary:
      "A multi-page boutique storefront for a clothing label, built around editorial collections and product detail pages.",
    description:
      "Elare is a full storefront experience rather than a single landing page. Collections are browsable, every product has its own detail route, and the editorial chapters give the brand a considered voice alongside the shop.",
    highlights: [
      "Dynamic collection and product routes",
      "Editorial campaign sections",
      "Shop, lookbook, about and contact pages",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Dynamic Routing", "Responsive UI"],
    liveUrl: "https://elar-fashion-boutique.vercel.app/",
    image: "/projects/elar-fashion-boutique.png",
    imageAlt: "Preview of the Elare Fashion Boutique website",
    accent: "#C9A227",
    accentSoft: "#F3D9A4",
  },
  {
    slug: "soreva-modern-dining",
    name: "Soreva — Modern Dining",
    category: "Restaurant Website",
    year: "2026",
    summary:
      "A dark, editorial restaurant site with a full menu, reservations and private dining enquiry flow.",
    description:
      "Soreva leans into a moody dining-room aesthetic: warm copper accents against deep espresso tones, with sections for the experience, signature dishes and the chef's philosophy. Reservations and private dining are first-class pages, not afterthoughts.",
    highlights: [
      "Menu, reservations and private dining pages",
      "Signature dishes and gallery sections",
      "Dark editorial design system",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "Booking Flow", "Gallery"],
    liveUrl: "https://soreva-modern-dining.vercel.app/",
    image: "/projects/soreva-modern-dining.png",
    imageAlt: "Preview of the Soreva Modern Dining website",
    accent: "#C08457",
    accentSoft: "#E8C4A0",
  },
  {
    slug: "lumiere-beauty-studio",
    name: "Lumiere Beauty Studio",
    category: "Beauty & Bridal Website",
    year: "2026",
    summary:
      "A single-page beauty studio site with services, packages, bridal offerings, gallery and booking.",
    description:
      "Lumiere uses a soft ivory and gold palette with reveal-on-scroll motion to keep a long, content-rich page feeling light. Services, packages, bridal, gallery, reviews, FAQ and booking all live on one smooth-scrolling page.",
    highlights: [
      "Reveal-on-scroll section animations",
      "Services, packages and bridal sections",
      "Gallery, reviews, FAQ and booking flow",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "Scroll Animation", "Booking Flow"],
    liveUrl: "https://lumiere-beauty-studio-ruddy.vercel.app/",
    image: "/projects/lumiere-beauty-studio.png",
    imageAlt: "Preview of the Lumiere Beauty Studio website",
    accent: "#B99872",
    accentSoft: "#EBD9C4",
  },
  {
    slug: "aurelia-dental-clinic",
    name: "Aurelia Dental Clinic",
    category: "Professional Services Website",
    year: "2026",
    summary:
      "A calm, trustworthy clinic website with services, appointment booking, gallery and patient information pages.",
    description:
      "Aurelia is built to put a nervous patient at ease. A forest-green and gold palette, a clear services breakdown and a dedicated appointment page do the reassuring work, with separate pages for FAQ, gallery and contact.",
    highlights: [
      "Appointment booking page",
      "Services, gallery, FAQ and testimonials pages",
      "Calm, accessible colour system",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Appointment Flow"],
    liveUrl: "https://aurelia-dental-studio-gilt.vercel.app/",
    image: "/projects/aurelia-dental-clinic.png",
    imageAlt: "Preview of the Aurelia Dental Clinic website",
    accent: "#4E9C8F",
    accentSoft: "#A9D6CB",
  },
  {
    slug: "flowai",
    name: "FlowAI",
    category: "AI Web Application",
    year: "2026",
    summary:
      "An AI-focused web application built around prompt-driven workflows and clean, focused interaction.",
    description:
      "FlowAI is the AI side of the work: a web app where prompts drive real tasks rather than sitting in a demo. The interface stays quiet so the AI output and the flow itself are the focus.",
    highlights: [
      "Prompt-driven interface",
      "AI response handling and states",
      "Clean, minimal UI system",
    ],
    tags: ["AI", "Prompt Engineering", "JavaScript", "Web App", "API Integration"],
    liveUrl: "https://flowai-chi-woad.vercel.app/",
    image: "/projects/flowai.svg",
    imageAlt: "Stylised preview illustration of the FlowAI application",
    accent: "#6D8BFF",
    accentSoft: "#B9C6FF",
  },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: Skill["icon"];
};

export const services: Service[] = [
  {
    slug: "modern-website-development",
    title: "Modern Website Development",
    summary:
      "Fast, modern websites built on current front-end tooling — clean components, sensible structure and a design that holds up on every screen size.",
    deliverables: [
      "Component-based build",
      "Responsive across mobile, tablet and desktop",
      "Optimised load times and accessibility basics",
    ],
    icon: "layout",
  },
  {
    slug: "responsive-business-websites",
    title: "Responsive Business Websites",
    summary:
      "Practical business sites that explain what you do, look credible and make it easy for a visitor to get in touch or book.",
    deliverables: [
      "Clear page structure and content flow",
      "Mobile-first responsive layout",
      "Contact, enquiry or booking sections",
    ],
    icon: "target",
  },
  {
    slug: "ai-powered-web-solutions",
    title: "AI-Powered Web Solutions",
    summary:
      "AI features that solve a real problem for your users — assistants, smart search, content tools or extraction — scoped honestly and built to be genuinely useful.",
    deliverables: [
      "Use-case scoping before building",
      "Integration with current AI model providers",
      "Prompt design, output handling and fallbacks",
    ],
    icon: "brain",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    summary:
      "Automate the repetitive parts of your workflow with Python scripts, scheduled jobs and AI steps, so the manual work stops being manual.",
    deliverables: [
      "Workflow mapping and automation plan",
      "Python scripts and scheduled tasks",
      "Logging, error handling and retries",
    ],
    icon: "workflow",
  },
  {
    slug: "api-integration",
    title: "API Integration",
    summary:
      "Connect your existing tools together — third-party APIs, webhooks and AI services — so information moves between systems without manual copying.",
    deliverables: [
      "REST API and webhook integration",
      "Authentication and key management",
      "Data sync, validation and rate-limit handling",
    ],
    icon: "plug",
  },
  {
    slug: "website-ui-ux-implementation",
    title: "Website UI/UX Implementation",
    summary:
      "Turning a design, wireframe or reference into a faithful, working interface — spacing, type scale, states and responsiveness all matched properly.",
    deliverables: [
      "Faithful implementation from design or reference",
      "Interactive states: hover, focus, loading, error",
      "Handover-ready, documented code",
    ],
    icon: "palette",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    body: "A short conversation about what you actually need, who it is for, and what success looks like.",
  },
  {
    step: "02",
    title: "Scope",
    body: "A clear plan of pages, features and realistic timelines — with anything out of scope named up front.",
  },
  {
    step: "03",
    title: "Build",
    body: "Clean, readable code built in small reviewable stages so you can see progress early.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "Testing across devices, launch support, and handover with everything documented and ready to run.",
  },
];