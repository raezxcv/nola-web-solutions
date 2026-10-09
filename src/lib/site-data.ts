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
  | "website"
  | "website-automation"
  | "website-automation-ai"
  | "website-automation-seo";

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
    id: "t1",
    headline: "NOLA Website Solutions was on top of everything",
    quote:
      "From the very beginning, NOLA Website Solutions was on top of everything—fair pricing, no surprises, and consistently high-quality work.",
    client: "Tobin Strickland",
    company: "Business Owner",
    rating: 5,
  },
  {
    id: "t2",
    headline: "He's someone I've always trusted with my online businesses",
    quote:
      "Norwin has worked with me for nearly a decade, and he's someone I've always trusted with my online businesses, even as I've done tens of millions of dollars online.",
    client: "Eric Louviere",
    company: "Digital Entrepreneur",
    rating: 5,
  },
  {
    id: "t3",
    headline: "If you need something done right, Norwin is the guy to do it.",
    quote:
      "Norwin has the rare ability to organize and execute, which is why I’ve trusted him for years—from WordPress to early Go High Level automation. He consistently delivers, and I fully recommend him.",
    client: "Jason Starbuck",
    company: "Automation & Agency Leader",
    rating: 5,
  },
  {
    id: "t4",
    headline: "Game-changing AI Chatbot solution",
    quote:
      "NOLA Web Solutions truly blew me away with their Ai Chatbot service. From the initial consultation to the final implementation, the team's dedication and expertise were evident, and the impact on my website's user experience was profound. I can't thank Norwin and the incredible team at NOLA Web Solutions enough for bringing such a game-changing solution to my business.",
    client: "Dr. Monica Gilbert",
    company: "Healthcare Practice Founder",
    rating: 5,
  },
  {
    id: "t5",
    headline: "Top-notch CRM solution",
    quote:
      "I highly recommend NOLA Web Solution to any business seeking a top-notch CRM solution. Their dedication to client success and the quality of their services make them stand out in the industry. Thank you, NOLA Web Solution, for helping us elevate our business to new heights!",
    client: "Simon Clayton",
    company: "Corporate Client",
    rating: 5,
  },
  {
    id: "t6",
    headline: "Exceeded my expectations!",
    quote:
      "I recently worked with NOLA WEB SOLUTIONS to create my website, and I couldn't be happier with the results! Their professionalism, attention to detail, and creativity truly exceeded my expectations. They listened carefully to my vision and brought it to life flawlessly, ensuring a user-friendly experience for my visitors. I highly recommend Norwin for anyone seeking a skilled and reliable website developer.",
    client: "Ashley Canlas",
    company: "Website Client",
    rating: 5,
  },
  {
    id: "t7",
    headline: "Highly recommended for technical support",
    quote:
      "Norwin has supported us for years with complex custom builds for diverse clients—handling automations, funnels, courses, pages, surveys, assessments, payments, and advanced layouts with CSS. He works independently, handles technical challenges well, and adapts to varied needs from healthcare to events and fundraising. Highly recommended for businesses needing technical support.",
    client: "Bethan Perel",
    company: "Technical Director",
    rating: 5,
  },
  {
    id: "t8",
    headline: "Best I've worked with online!",
    quote:
      "I've come across many experts online, but none have been as helpful as Norwin when it comes to automations, funnels, and solving any challenges I've faced. His response time is incredibly fast, and he completes tasks with efficiency and precision. By far, the best I've worked with online!",
    client: "Chris Tyson",
    company: "Funnel & Automation Specialist",
    rating: 5,
  },
  {
    id: "t9",
    headline: "Truly one of the best",
    quote:
      "Norwin has managed both my ClickFunnels and GoHighLevel agency accounts, supporting countless clients and coaching programs. I even sold an agency while he was on my team. He’s smart, kind, patient, and easy to work with. After 20+ years and tens of millions in online business—with hundreds of team members—he’s truly one of the best. I fully endorse him; you’re in good hands.",
    client: "Eric Louviere",
    company: "Agency Founder",
    rating: 5,
  },
];

export const PORTFOLIO = [
  {
    industry: "Custom Web Design & UX",
    components: ["Website", "Conversion UI", "Mobile Responsive"],
    image:
      "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67f6182e0a6217f736d34f54.png",
    description: "High-converting, responsive website design built for seamless user engagement.",
  },
  {
    industry: "AI Chatbot & Qualification",
    components: ["AI Agent", "24/7 Booking", "Lead Capture"],
    image:
      "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67f6182b67351309ade29d22.png",
    description: "Intelligent AI chatbot trained to respond to customer inquiries and qualify leads 24/7.",
  },
  {
    industry: "Google Business & Local SEO",
    components: ["GMB Profile", "Local Search", "Review Engine"],
    image:
      "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/SOslPv2WdLbXaOLLux7c/media/67f618266735131b64e29d1e.png",
    description: "Local search engine optimization and profile tuning to dominate regional search results.",
  },
  {
    industry: "NOLA Business CRM",
    components: ["Lead Pipeline", "Automated SMS", "Centralized Inbox"],
    image: ASSETS.crm,
    description: "All-in-one CRM managing leads, customer communications, pipelines, and automated campaigns.",
  },
  {
    industry: "Real Estate Platform",
    components: ["Website", "MLS Integration", "NOLA Realty CRM"],
    image: ASSETS.realtyCrm,
    description: "Comprehensive property listing showcase with automatic lead routing for agent teams.",
  },
  {
    industry: "Healthcare & Weight-Loss Clinic",
    components: ["Website", "HIPAA Automation", "NOLA HealthPro CRM"],
    image: ASSETS.healthproCrm,
    description: "Patient booking, medical intake forms, and specialized clinic pipeline automation.",
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
