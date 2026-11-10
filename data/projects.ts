export interface Project {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  timeline: string;
  overview: string;
  problem: string;
  solution: string;
  features: {
    title: string;
    description: string;
  }[];
  techStack: {
    category: string;
    items: string[];
  }[];
  highlights: string[];
  challenges: {
    title: string;
    description: string;
  }[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  previewGradient: string;
  accentColor: string;
}

export const projects: Project[] = [
  {
    slug: "traceback",
    number: "01",
    title: "TraceBack",
    tagline: "Production Error Tracking and Bug Investigation Platform.",
    category: "Developer Tool / Monitoring",
    year: "2024",
    role: "Full-Stack Developer",
    timeline: "8 weeks",
    overview:
      "TraceBack is an end-to-end telemetry and error investigation platform engineered for high-velocity software teams. It intercepts uncaught exceptions, groups runtime errors into correlated incidents, and provides interactive stack trace forensics to pinpoint root causes in seconds.",
    problem:
      "Production distributed applications frequently throw silent runtime errors, uncaught promise rejections, and anomalous edge-case crashes. Traditional server logs are cluttered, unindexed, and disjointed from client-side user sessions, resulting in delayed incident responses and extended MTTR (Mean Time to Resolution).",
    solution:
      "TraceBack provides a streamlined lightweight client SDK that intercepts errors before they propagate, sanitizes sensitive data, and delivers grouped incident reports to a centralized dashboard with detailed breadcrumbs, execution environments, and affected user metrics.",
    features: [
      {
        title: "Real-time Exception Ingestion",
        description:
          "High-throughput WebSocket and HTTP ingestion pipeline capturing error payloads, browser metadata, and OS specifications.",
      },
      {
        title: "Intelligent Incident Grouping",
        description:
          "Fingerprinting algorithm clustering similar stack traces into distinct incidents to prevent alert fatigue.",
      },
      {
        title: "Interactive Stack Trace Visualizer",
        description:
          "Collapsible source-mapped call stacks with highlighted frame markers indicating the exact file and line of failure.",
      },
      {
        title: "User Action Breadcrumbs",
        description:
          "Chronological timeline of user events leading up to the crash, including DOM clicks, network requests, and route changes.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "WebSockets"] },
      { category: "Database & Cache", items: ["PostgreSQL", "Prisma ORM", "Redis"] },
      { category: "DevOps & Tools", items: ["Docker", "Git", "Postman", "Render"] },
    ],
    highlights: [
      "Sub-50ms ingestion latency for production telemetry streams.",
      "Custom fingerprinting logic reducing duplicate notifications by over 80%.",
      "Interactive session breadcrumb viewer with source map de-obfuscation.",
    ],
    challenges: [
      {
        title: "High-Throughput Stream Ingestion",
        description:
          "Buffering rapid error spikes during production outages without dropping logs or overwhelming the primary relational database.",
      },
      {
        title: "Client-Side Overhead",
        description:
          "Minimizing the footprint of the telemetry capture script to under 12KB with zero noticeable impact on browser runtime performance.",
      },
    ],
    githubUrl: "https://github.com/Aaryan85/traceback",
    liveUrl: "https://traceback-djs9.onrender.com",
    image: "/projects/traceback.png",
    previewGradient: "from-sky-500/20 via-blue-600/10 to-indigo-900/30",
    accentColor: "#38bdf8",
  },
  {
    slug: "formflow",
    number: "02",
    title: "FormFlow",
    tagline: "No-Code Dynamic Form Builder with Real-time Previews.",
    category: "No-Code Platform",
    year: "2024",
    role: "Full-Stack Developer",
    timeline: "6 weeks",
    overview:
      "FormFlow empowers teams to construct sophisticated multi-step forms, surveys, and feedback workflows through an intuitive drag-and-drop canvas. With customizable branding, conditional visibility branching, and instant webhook dispatches, FormFlow eliminates manual form coding.",
    problem:
      "Writing responsive forms with intricate validation schemas, multi-step pagination, conditional field dependencies, and third-party CRM hooks requires tedious boilerplate development for every new business workflow.",
    solution:
      "FormFlow abstracts forms into a modular JSON schema engine. Users compose forms via drag-and-drop, configure real-time conditional logic, apply custom brand tokens, and publish shareable endpoints with built-in response analytics.",
    features: [
      {
        title: "Drag-and-Drop Canvas",
        description:
          "Fluid reordering of 15+ input types including text, multi-select, star ratings, file uploads, and date pickers.",
      },
      {
        title: "Conditional Logic Engine",
        description:
          "Dynamic show/hide rules and branching steps based on previous question inputs without writing a single line of code.",
      },
      {
        title: "Real-time Live Preview",
        description:
          "Side-by-side builder view offering instant responsive preview across mobile, tablet, and desktop breakpoints.",
      },
      {
        title: "Submission Analytics & Webhooks",
        description:
          "Comprehensive submission table with CSV exports, completion rate analytics, and outgoing webhook triggers.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"] },
      { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs"] },
      { category: "Database", items: ["MongoDB", "Mongoose"] },
      { category: "Tools", items: ["Git", "GitHub", "Vercel", "Postman"] },
    ],
    highlights: [
      "Zero-latency drag-and-drop builder with instantaneous schema re-renders.",
      "Support for multi-branch conditional routing and validation rules.",
      "Exportable JSON schema compatible with custom enterprise backends.",
    ],
    challenges: [
      {
        title: "Complex State Synchronization",
        description:
          "Keeping canvas state, live preview state, and underlying schema model tightly synchronized without unnecessary DOM repaints.",
      },
      {
        title: "Dynamic Schema Validation",
        description:
          "Validating heterogeneous form submissions dynamically against arbitrary user-defined validation rules on the server.",
      },
    ],
    githubUrl: "https://github.com/Aaryan85/formflow",
    liveUrl: "https://formflow-builder.vercel.app",
    image: "/projects/formflow.png",
    previewGradient: "from-blue-600/20 via-cyan-500/10 to-teal-900/30",
    accentColor: "#0284c7",
  },
  {
    slug: "infrachat",
    number: "03",
    title: "InfraChat",
    tagline: "Internal Messaging Platform with RBAC and Socket.io.",
    category: "Real-time Collaboration",
    year: "2024",
    role: "Full-Stack Developer (Hackathon)",
    timeline: "Hackathon Project",
    overview:
      "InfraChat is a full-stack real-time internal communications application featuring Role-Based Access Control (RBAC) across three distinct privilege tiers, cryptographically verified JWT authentication, and sub-100ms Socket.io messaging. Created with Team 'HyperScript Surge'.",
    problem:
      "Enterprise teams handling sensitive infrastructure alerts and internal operations require strict segregation between administrative, engineering, and observer communication channels to prevent unauthorized configuration discussions and data leaks.",
    solution:
      "Engineered an access-controlled communications hub with granular permissions, real-time message broadcasting, room-level access checks, and encrypted session verification for enterprise and dev teams.",
    features: [
      {
        title: "3-Tier Role-Based Access Control",
        description:
          "Granular permission matrix partitioning Admins, Engineers, and Observers into authorized channels and read/write privileges.",
      },
      {
        title: "Sub-100ms Real-Time Chat",
        description:
          "Bi-directional WebSocket connection via Socket.io with typing indicators, presence awareness, and read receipts.",
      },
      {
        title: "Secure JWT Authentication",
        description:
          "Stateless token-based authentication with bcrypt password hashing and automatic session renewal.",
      },
      {
        title: "Organized Channel Architecture",
        description:
          "Topic-based public rooms, private team channels, and direct peer-to-peer messaging.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React.js", "Tailwind CSS", "Lucide React"] },
      { category: "Backend", items: ["Node.js", "Express.js", "Socket.io", "JWT"] },
      { category: "Database", items: ["MongoDB", "Mongoose"] },
      { category: "Tools", items: ["Git", "GitHub", "Vercel"] },
    ],
    highlights: [
      "Award-winning hackathon build with Team 'HyperScript Surge'.",
      "Seamless bi-directional message synchronization across concurrent client sessions.",
      "Strict role enforcement on both client routing and server WebSocket handlers.",
    ],
    challenges: [
      {
        title: "Socket State Reconciliation",
        description:
          "Handling transient network drops and gracefully re-authenticating socket sessions without dropping active channel subscriptions.",
      },
      {
        title: "Real-Time RBAC Revocation",
        description:
          "Immediately kicking unauthorized sockets out of elevated channels when an administrator updates their permission role.",
      },
    ],
    githubUrl: "https://github.com/arjunrhetoric/InfraChat",
    liveUrl: "https://infra-chat-six.vercel.app",
    image: "/projects/infrachat.png",
    previewGradient: "from-teal-500/20 via-emerald-600/10 to-zinc-900/40",
    accentColor: "#14b8a6",
  },
  {
    slug: "tech-hunt",
    number: "04",
    title: "Tech-Hunt Game",
    tagline: "Interactive Mind-Bending Technology and Logic Quiz Game.",
    category: "Interactive Web Game",
    year: "2024",
    role: "Frontend Developer",
    timeline: "3 weeks",
    overview:
      "Tech-Hunt is an interactive quiz and puzzle game built to challenge logic, computer science fundamentals, and lateral thinking through cryptic clues, time-attack challenges, and progressive stages.",
    problem:
      "Most technical quiz portals consist of dry, static multiple-choice questions that do not test genuine problem-solving or foster engaging competitive spirit among engineering students.",
    solution:
      "A fast, responsive web application delivering dynamic clue progression, interactive keyboard interactions, time pressure mechanics, and intuitive feedback loops that make learning tech concepts fun and addictive.",
    features: [
      {
        title: "Cryptic Puzzle Progression",
        description:
          "Curated riddle and logic problems requiring code decoding, binary decryption, and technical trivia.",
      },
      {
        title: "Time-Attack Mechanics",
        description:
          "Dynamic score multipliers rewarding rapid accurate deductions under strict timer constraints.",
      },
      {
        title: "Immersive Audio-Visual Feedback",
        description:
          "Haptic CSS animations, retro sound cues, and dramatic visual responses for correct and incorrect deductions.",
      },
      {
        title: "Zero-Dependency Speed",
        description:
          "Built with pure web technologies ensuring instantaneous first-load times and smooth 60fps animations.",
      },
    ],
    techStack: [
      { category: "Languages", items: ["JavaScript (ES6+)", "HTML5", "CSS3"] },
      { category: "Styling", items: ["Tailwind CSS", "Custom Animations"] },
      { category: "Deployment", items: ["Git", "GitHub", "Vercel"] },
    ],
    highlights: [
      "100% lightweight client-side execution with instantaneous responsiveness.",
      "Played by hundreds of collegiate engineering participants during tech events.",
      "Zero bundle bloat with snappy transitions.",
    ],
    challenges: [
      {
        title: "Input Normalization",
        description:
          "Sanitizing and fuzzy-matching user text inputs to account for varying capitalization, whitespace, and minor typos without revealing answers.",
      },
      {
        title: "Cheat Mitigation",
        description:
          "Obfuscating answer validation hashes in client code to prevent participants from simply inspecting the browser DOM.",
      },
    ],
    githubUrl: "https://github.com/Aaryan85/techHunt",
    liveUrl: "https://tech-hunt-tau.vercel.app",
    image: "/projects/tech-hunt.png",
    previewGradient: "from-amber-500/20 via-orange-600/10 to-zinc-900/40",
    accentColor: "#f59e0b",
  },
  {
    slug: "birthday-wall",
    number: "05",
    title: "Birthday Wall",
    tagline: "Interactive Celebration Wall with Real-Time Confetti and Memories.",
    category: "Interactive Web Experience",
    year: "2024",
    role: "Frontend Developer",
    timeline: "2 weeks",
    overview:
      "Birthday Wall is a delightful digital celebration platform where friends and classmates leave personalized message notes, animated reactions, and memory pins on an interactive canvas.",
    problem:
      "Generic messaging groups and static social media posts lack personal touch and festive warmth when celebrating milestone events with remote friends.",
    solution:
      "Created an animated celebration board featuring physical-style draggable sticky notes, vibrant confetti physics, photo polaroids, and joyful micro-interactions.",
    features: [
      {
        title: "Interactive Message Canvas",
        description:
          "Post notes with customizable pastel backgrounds, hand-picked stickers, and customized typography.",
      },
      {
        title: "Physics-Based Confetti",
        description:
          "Interactive particle cannons firing colorful confetti bursts upon message posts and reactions.",
      },
      {
        title: "Photo Memory Board",
        description:
          "Polaroid-styled photo cards with tilted angles and subtle drop-shadows recreating a physical memory wall.",
      },
      {
        title: "Mobile Touch Optimization",
        description:
          "Fluid touch gestures allowing users to tap, swipe, and scroll effortlessly on mobile devices.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Utilities", items: ["Canvas Confetti", "Lucide React"] },
      { category: "Deployment", items: ["Git", "GitHub", "Vercel"] },
    ],
    highlights: [
      "Vibrant micro-interactions and tactile feedback on every click.",
      "Responsive layout maintaining layout aesthetics from mobile phones to 4K displays.",
      "Delivered memorable celebration experiences for friends and community members.",
    ],
    challenges: [
      {
        title: "Confetti Particle Optimization",
        description:
          "Balancing realistic physics and particle counts to avoid mobile frame drops during multi-cannon bursts.",
      },
      {
        title: "Responsive Canvas Scaling",
        description:
          "Ensuring sticky note coordinates scale proportionally across drastically different device aspect ratios.",
      },
    ],
    githubUrl: "https://github.com/Aaryan85/birthday-wall",
    liveUrl: "https://birthday.aaryanbuilds.in",
    image: "/projects/birthday-wall.png",
    previewGradient: "from-pink-500/20 via-purple-600/10 to-indigo-950/40",
    accentColor: "#ec4899",
  },
];
