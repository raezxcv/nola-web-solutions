// Central content + asset references for NOLA Web Solutions.
// Assets are served from the NOLA CDN (downloaded into repo storage at build
// time via download_to_repo, but the CDN URLs are stable and used directly).

export const ASSETS = {
  favicon:
    "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/66160ba8041ea7403d544ed3.png",
  logoPrimary:
    "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67ea34f01870f4c5df49c20c.png",
  logoWhite:
    "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/4c8aebd0-f70d-4779-a593-c1bd6eb25281.png",
  webDesign:
    "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/6819c1161c6f395c13f68c5d.png",
  aiChatbot:
    "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/6819c1161c6f395d52af68c5f.png",
  automation:
    "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/6819c116b614b14d543410cc.png",
  crm: "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67f618e8cafd9f473bfd9d97.png",
  realtyCrm:
    "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67f75b5d6dd5a56c693d4343.png",
  healthproCrm:
    "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67f75b60a39324bad8da8b2b.png",
  crmLaptop:
    "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67e9ea7ae519ed6a772b032e.png",
  crmDesktop:
    "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/6806e32a773e165d37f8a25c.png",
  founder:
    "https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67eca42613c4b62d541d2ab8.png",
} as const;

export type PackageSlug =
  "website" | "website-automation" | "website-automation-ai" | "website-automation-seo";

export interface PackageInfo {
  slug: PackageSlug;
  technicalName: string;
  marketingLabel: string;
  shortName: string;
  promise: string;
  headline: string;
  description: string;
  bestFor: string;
  featured?: boolean;
  includes: string[];
  services: { name: string; icon: string; blurb: string }[];
  cta: string;
}

export const PACKAGES: PackageInfo[] = [
  {
    slug: "website",
    technicalName: "Website",
    marketingLabel: "The Foundation",
    shortName: "Website",
    promise: "Establish your digital presence",
    headline: "A professional website built to convert.",
    description:
      "A modern, responsive website designed around your brand, customers, and business goals.",
    bestFor: "Businesses that need a credible, professional online presence.",
    includes: [
      "Custom Website Design",
      "Responsive Mobile Design",
      "Conversion-Focused Layout",
      "Contact / Lead Forms",
      "Business Information Setup",
      "Basic On-Page Optimization",
      "Analytics / Tracking Setup",
      "Hosting / Launch Support where applicable",
    ],
    services: [
      {
        name: "Website Design",
        icon: "Monitor",
        blurb: "A modern site designed around your brand and goals.",
      },
      {
        name: "UI / UX",
        icon: "PenTool",
        blurb: "Clean, intuitive interfaces that guide visitors.",
      },
      {
        name: "Responsive Development",
        icon: "Smartphone",
        blurb: "Looks sharp on every screen size.",
      },
      {
        name: "Conversion Optimization",
        icon: "Target",
        blurb: "Layouts built to turn visitors into leads.",
      },
    ],
    cta: "Explore Website Package",
  },
  {
    slug: "website-automation",
    technicalName: "Website + Automation",
    marketingLabel: "The Growth Starter",
    shortName: "Website + Automation",
    promise: "Turn leads into an organized process",
    headline: "Turn your website into a working system.",
    description:
      "Everything in the Website package, plus automation that helps capture, organize, and follow up with leads.",
    bestFor: "Businesses ready to stop losing leads to manual follow-up.",
    includes: [
      "Everything in Website",
      "Lead Capture Automation",
      "CRM Integration",
      "Automated Follow-Ups",
      "Forms & Workflows",
      "Appointment / Booking Automation",
      "Lead Notifications",
      "Customer Communication",
      "SMS / Email Automation where applicable",
    ],
    services: [
      {
        name: "Lead Capture Automation",
        icon: "Workflow",
        blurb: "Capture every lead the moment it arrives.",
      },
      {
        name: "CRM Integration",
        icon: "UsersRound",
        blurb: "Every contact organized in one place.",
      },
      { name: "Automated Follow-Ups", icon: "Send", blurb: "Reach out instantly, every time." },
      {
        name: "Booking Automation",
        icon: "CalendarClock",
        blurb: "Let customers book without the back-and-forth.",
      },
    ],
    cta: "Explore Automation Package",
  },
  {
    slug: "website-automation-ai",
    technicalName: "Website + Automation + AI",
    marketingLabel: "The Smart Growth",
    shortName: "Website + Automation + AI",
    promise: "Automate customer interactions",
    headline: "Add AI to your digital business.",
    description:
      "Everything you need to launch a professional website, automate your workflow, and use AI to handle more customer conversations.",
    bestFor: "Businesses that want AI to qualify and respond to customers around the clock.",
    featured: true,
    includes: [
      "Everything in Website + Automation",
      "AI Chatbot",
      "AI Lead Qualification",
      "Automated Customer Responses",
      "FAQ / Knowledge Base",
      "AI Conversation Routing",
      "Lead Handoff",
      "Customer Support Automation",
      "AI-assisted workflows where applicable",
    ],
    services: [
      { name: "AI Chatbot", icon: "Bot", blurb: "Answers questions and engages visitors 24/7." },
      {
        name: "AI Lead Qualification",
        icon: "Filter",
        blurb: "Sorts serious leads from browsers automatically.",
      },
      {
        name: "Automated Responses",
        icon: "MessagesSquare",
        blurb: "Instant, accurate replies to common questions.",
      },
      {
        name: "Lead Handoff",
        icon: "ArrowRightLeft",
        blurb: "Seamless handoff from AI to your team.",
      },
    ],
    cta: "Explore AI Package",
  },
  {
    slug: "website-automation-seo",
    technicalName: "Website + Automation + SEO",
    marketingLabel: "The Local Growth",
    shortName: "Website + Automation + SEO",
    promise: "Get discovered and generate more opportunities",
    headline: "Get found. Get contacted. Get more customers.",
    description:
      "Everything in Website + Automation, plus SEO and local optimization designed to help your business become more visible online.",
    bestFor: "Local businesses that need to show up when customers search.",
    includes: [
      "Everything in Website + Automation",
      "SEO Strategy",
      "On-Page SEO",
      "Website Optimization",
      "Keyword Optimization",
      "Technical SEO Improvements",
      "Google Business Profile Optimization",
      "Local SEO",
      "Google Business Profile Management where applicable",
      "Search Visibility Improvements",
      "Local Business Optimization",
    ],
    services: [
      {
        name: "SEO Strategy",
        icon: "Search",
        blurb: "A plan built around how your customers search.",
      },
      { name: "On-Page SEO", icon: "FileText", blurb: "Content and structure tuned for search." },
      {
        name: "Google Business Profile",
        icon: "MapPin",
        blurb: "Optimized local presence that gets you found.",
      },
      {
        name: "Local SEO",
        icon: "LocateFixed",
        blurb: "Rank where it matters — your neighborhood.",
      },
    ],
    cta: "Explore SEO Package",
  },
];

export const PACKAGE_PATHS: Record<PackageSlug, string> = {
  website: "/packages/website",
  "website-automation": "/packages/website-automation",
  "website-automation-ai": "/packages/website-automation-ai",
  "website-automation-seo": "/packages/website-automation-seo",
};

export const COMPARISON_FEATURES: {
  label: string;
  website: boolean;
  auto: boolean;
  ai: boolean;
  seo: boolean;
}[] = [
  { label: "Website", website: true, auto: true, ai: true, seo: true },
  { label: "Responsive Design", website: true, auto: true, ai: true, seo: true },
  { label: "Lead Forms", website: true, auto: true, ai: true, seo: true },
  { label: "CRM Integration", website: false, auto: true, ai: true, seo: true },
  { label: "Automation", website: false, auto: true, ai: true, seo: true },
  { label: "AI Chatbot", website: false, auto: false, ai: true, seo: false },
  { label: "AI Lead Qualification", website: false, auto: false, ai: true, seo: false },
  { label: "SEO", website: false, auto: false, ai: false, seo: true },
  { label: "Google Business Profile", website: false, auto: false, ai: false, seo: true },
  { label: "Website Optimization", website: true, auto: true, ai: true, seo: true },
];

export const SERVICES = [
  {
    name: "Website Design",
    slug: "web-design",
    icon: "Monitor",
    blurb: "Build a modern website designed around your brand and business goals.",
  },
  {
    name: "Automation",
    slug: "automation",
    icon: "Workflow",
    blurb: "Connect forms, CRM, follow-ups, bookings, notifications, and other workflows.",
  },
  {
    name: "AI",
    slug: "ai",
    icon: "Bot",
    blurb: "Use AI to help answer questions, qualify leads, and support customer communication.",
  },
  {
    name: "SEO",
    slug: "seo",
    icon: "Search",
    blurb: "Improve website structure, content, visibility, and search performance.",
  },
  {
    name: "Google Business Profile",
    slug: "google-business-profile",
    icon: "MapPin",
    blurb:
      "Optimize the business profile and local presence to help customers discover the business.",
  },
  {
    name: "CRM",
    slug: "crm",
    icon: "UsersRound",
    blurb: "Centralize customer information and manage leads and interactions.",
  },
  {
    name: "SMS Marketing",
    slug: "sms",
    icon: "MessageSquareText",
    blurb: "Connect customers through direct and automated messaging where applicable.",
  },
  {
    name: "Payments",
    slug: "payments",
    icon: "CreditCard",
    blurb: "Support digital payment experiences where included or offered.",
  },
] as const;

export const SOLUTIONS = [
  {
    name: "NOLA CRM",
    href: "https://nolacrm.io/",
    image: ASSETS.crm,
    tag: "For general businesses",
    blurb: "The central hub that powers leads, contacts, and automation across every NOLA package.",
  },
  {
    name: "NOLA Realty CRM",
    href: "https://nolacrm.io/",
    image: ASSETS.realtyCrm,
    tag: "For real estate businesses",
    blurb: "A CRM tailored to real estate workflows, listings, and client pipelines.",
  },
  {
    name: "NOLA HealthPro CRM",
    href: "https://nolacrm.io/",
    image: ASSETS.healthproCrm,
    tag: "For healthcare / weight-loss businesses",
    blurb: "Built for clinics and weight-loss practices managing patients and programs.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "NOLA rebuilt our website and set up the automation we'd been missing for years. Leads now come in organized and we follow up instantly. It completely changed how we work.",
    client: "Dr. Angela R.",
    company: "Weight-Loss Clinic",
  },
  {
    quote:
      "We went from an outdated site to a full system. The AI chatbot handles the questions that used to eat our day, and our team only steps in when it matters.",
    client: "Marcus T.",
    company: "Home Services",
  },
  {
    quote:
      "The SEO and Google Business work put us in front of local customers we never reached before. The phone started ringing within weeks of launch.",
    client: "Priya S.",
    company: "Dental Practice",
  },
];

export const PORTFOLIO = [
  {
    industry: "Healthcare / Weight-Loss",
    components: ["Website", "Automation", "NOLA HealthPro CRM"],
    image: ASSETS.healthproCrm,
    description: "A patient-focused site with booking automation and a CRM built for clinics.",
  },
  {
    industry: "Real Estate",
    components: ["Website", "Automation", "NOLA Realty CRM"],
    image: ASSETS.realtyCrm,
    description: "Listings, lead capture, and follow-up automation wired into a real-estate CRM.",
  },
  {
    industry: "Home Services",
    components: ["Website", "AI Chatbot", "Automation"],
    image: ASSETS.aiChatbot,
    description: "An AI chatbot that qualifies service requests and routes them to the team.",
  },
  {
    industry: "Professional Services",
    components: ["Website", "SEO", "Google Business Profile"],
    image: ASSETS.webDesign,
    description: "A conversion-focused site with local SEO that drives steady inbound leads.",
  },
];

export const WHY_NOLA = [
  {
    title: "Built around your business",
    icon: "Building2",
    blurb: "Every package is shaped around your goals, customers, and stage of growth.",
  },
  {
    title: "Practical automation",
    icon: "Workflow",
    blurb: "We automate the work that slows you down — not work for its own sake.",
  },
  {
    title: "Modern technology",
    icon: "Cpu",
    blurb: "Current, maintainable tech that keeps your business ahead.",
  },
  {
    title: "AI when it makes sense",
    icon: "Bot",
    blurb: "AI applied where it actually helps — qualifying leads and answering customers.",
  },
  {
    title: "SEO + digital visibility",
    icon: "Search",
    blurb: "Get found by the customers already looking for you.",
  },
  {
    title: "One partner for the system",
    icon: "Layers",
    blurb: "Website, automation, AI, SEO, and CRM — one team, one system.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    icon: "Compass",
    blurb: "We understand your business, goals, and current digital setup.",
  },
  {
    step: "02",
    title: "Choose",
    icon: "MousePointerClick",
    blurb: "Select the package that best fits your needs.",
  },
  {
    step: "03",
    title: "Build",
    icon: "Hammer",
    blurb: "We design and implement your website and included systems.",
  },
  { step: "04", title: "Launch", icon: "Rocket", blurb: "Deploy, connect, test, and launch." },
  {
    step: "05",
    title: "Grow",
    icon: "TrendingUp",
    blurb: "Optimize, automate, and expand as your business evolves.",
  },
];

export const PROBLEM_SOLUTION = [
  {
    problem: "Outdated website",
    package: "Website",
    slug: "website" as PackageSlug,
    icon: "MonitorOff",
  },
  {
    problem: "Missed leads",
    package: "Website + Automation",
    slug: "website-automation" as PackageSlug,
    icon: "MailWarning",
  },
  {
    problem: "Too many customer questions",
    package: "Website + Automation + AI",
    slug: "website-automation-ai" as PackageSlug,
    icon: "MessagesSquare",
  },
  {
    problem: "Not getting found online",
    package: "Website + Automation + SEO",
    slug: "website-automation-seo" as PackageSlug,
    icon: "SearchX",
  },
];

export const TRUST_METRICS = [
  { label: "Projects Completed", value: "120+" },
  { label: "Businesses Served", value: "90+" },
  { label: "Client Testimonials", value: "5★" },
];

export const NAV_PACKAGES = [
  { label: "Website", to: "/packages/website" },
  { label: "Website + Automation", to: "/packages/website-automation" },
  { label: "Website + Automation + AI", to: "/packages/website-automation-ai" },
  { label: "Website + Automation + SEO", to: "/packages/website-automation-seo" },
];

export const NAV_SERVICES = [
  { label: "Website Design", to: "/services/web-design" },
  { label: "Automation", to: "/services/automation" },
  { label: "AI Chatbot", to: "/services/ai" },
  { label: "SEO", to: "/services/seo" },
  { label: "Google Business Profile", to: "/services/google-business-profile" },
  { label: "Website Optimization", to: "/services/web-design" },
  { label: "SMS Marketing", to: "/services/sms" },
  { label: "CRM", to: "/services/crm" },
  { label: "Payments", to: "/services/payments" },
];

export const NAV_SOLUTIONS = [
  { label: "NOLA CRM", to: "/solutions" },
  { label: "NOLA Realty CRM", to: "/solutions" },
  { label: "NOLA HealthPro CRM", to: "/solutions" },
];
