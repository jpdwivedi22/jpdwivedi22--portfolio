export const personalInfo = {
  name: "Jyoti Prakash Dwivedi",
  firstName: "Jyoti",
  initials: "JP",
  title: "Sr. Conversational AI Developer",
  roles: [
    "Sr. Conversational AI Developer",
    "AI Engineer",
    "Chatbot Architect",
    "Voice Bot Specialist",
  ],
  email: "jpdwivedi26@gmail.com",
  phone: "+91-9584585815",
  location: "New Delhi, India",
  linkedin: "https://www.linkedin.com/in/jyoti-prakash-dwivedi-6a5096175/",
  github: "https://github.com/jpdwivedi22/",
  hackerrank: "https://www.hackerrank.com/profile/jpdwivedi26",
  about: `AI Engineer with hands-on experience leading enterprise conversational AI and agentic delivery, including a 25+ agent Agent Factory initiative on Microsoft Copilot Studio, AI-powered process automation, and public-sector AI adoption programs. Proficient in Microsoft Copilot Studio, Power Automate, Cognigy.AI, Kore.ai and Dialogflow, with strong backend development skills using Node.js. Skilled in leveraging cloud platforms like Microsoft Azure and Google Cloud, along with data visualization tools like Power BI. Currently contributing to agentic AI delivery, presales/RFP support, and multi-channel (WhatsApp/MCP) integrations at TeKnowledge, India.`,
};

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "AI Projects Delivered" },
  { value: "5+", label: "AI Platforms Mastered" },
  { value: "GCP", label: "Certified Engineer" },
];

export const skillCategories = [
  {
    title: "Conversational & Agentic AI",
    icon: "🤖",
    skills: [
      "Microsoft Copilot Studio",
      "Kore.ai (XO & Agent Platform)",
      "Cognigy.AI",
      "Dialogflow CX/ES",
      "Generative AI & RAG",
      "Vertex AI (Search & Conversation)",
      "Google CCAI",
    ],
  },
  {
    title: "Automation & Integration",
    icon: "⚙️",
    skills: [
      "Power Automate",
      "Power Apps",
      "MCP Servers",
      "SharePoint",
      "CM.com WhatsApp",
      "Twilio",
      "Adaptive Cards",
      "xApps",
    ],
  },
  {
    title: "Voice & Telephony",
    icon: "🎙️",
    skills: [
      "Avaya (AEP/AXP)",
      "Genesys",
      "Cisco",
      "Azure Speech Service",
      "Google Speech",
      "Elevenlabs",
      "Soniox",
    ],
  },
  {
    title: "Cloud & AI Services",
    icon: "☁️",
    skills: [
      "Google Cloud Platform",
      "Microsoft Azure",
      "OpenAI",
      "Gemini",
      "BigQuery",
      "Firestore",
      "Azure Functions",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      "Power BI",
      "Node.js",
      "Python",
      "Git/GitHub",
      "Jira",
      "VS Code",
      "PyCharm",
    ],
  },
];

export const experiences = [
  {
    role: "AI Engineer - Conversational AI & CX",
    company: "TeKnowledge",
    location: "Gurugram, India",
    period: "April 2025 – Present",
    highlights: [
      "Agent Factory Leadership: Led an internal Agent Factory initiative on Microsoft Copilot Studio and the broader Microsoft stack, delivering 25+ production-ready AI agents.",
      "AI Delivery & Presales: Owned project scoping, timelines, and effort estimation; built Power BI dashboards to track agent performance, and contributed to RFPs and presales demos.",
      "Channel Integrations: Engineered integration patterns connecting Copilot Studio with CM.com WhatsApp and MCP servers for secure, scalable multi-channel conversational experiences.",
    ],
    techStack: [
      "Copilot Studio",
      "Power Automate",
      "Cognigy.AI",
      "Kore.ai",
      "Power BI",
      "RAG",
      "MCP Servers",
    ],
  },
  {
    role: "Sr. Conversation AI Specialist",
    company: "Avaya (via Bravishma)",
    location: "Pune, Maharashtra",
    period: "May 2024 – April 2025",
    highlights: [
      "Client Engagement: Managed technical discussions with clients, providing strategic direction for AI chatbot implementations, requirement gathering, and technical design.",
      "GenAI Chatbot Development: Delivered multiple POCs and demos using Cognigy AI chatbot and voicebot solutions incorporating WhatsApp and xApps capabilities.",
      "Agentic AI Chatbot: Developed a GenAI-based POC chatbot using Dialogflow CX with a custom RAG model, enhancing it into an Agentic AI chatbot.",
      "Automation & Testing: Contributed to building a GenAI-powered automation testing tool to streamline bot development and QA processes.",
    ],
    techStack: [
      "Cognigy.AI",
      "Dialogflow CX",
      "OpenAI",
      "Node.js",
      "GCP Cloud Functions",
      "Adaptive Cards",
    ],
  },
  {
    role: "Sr. Conversation Bot Engineer",
    company: "Quantiphi",
    location: "Mumbai, Maharashtra",
    period: "Feb 2022 – April 2024",
    highlights: [
      "Leadership & Strategy: Led a team of Conversation Bot Engineers to develop production-grade virtual agents while guiding solution architecture and technical design.",
      "Virtual Agent Development: Designed and developed virtual agents using Google Dialogflow across elections, healthcare, and insurance domains.",
      "Integration & Custom Solutions: Created custom integrations with Avaya, Genesys, Cisco, and phone gateways. Integrated Dialogflow Phone Gateway with Firestore DB.",
      "Managed client meetings focused on conversation design, technical discussions, and discovery sessions.",
    ],
    techStack: [
      "Dialogflow CX/ES",
      "Firebase",
      "BigQuery",
      "Genesys",
      "JavaScript",
      "SOAP APIs",
      "Avaya",
    ],
  },
];

export const projects = [
  {
    title: "TeKnowledge AI Agents Library",
    description:
      "Led the Agent Factory initiative at TeKnowledge, architecting and delivering 25+ production-ready AI agents across Procurement, Finance, HR, Marketing, Telecom, BFSI & Healthcare — now a live enterprise product serving global clients.",
    impact: "Live enterprise product • 25+ AI agents shipped",
    techStack: ["Copilot Studio", "Power Automate", "RAG", "Azure", "MCP Servers", "SharePoint"],
    icon: "🏭",
    color: "#FF835D",
    featured: true,
    liveUrl: "https://teknowledge.com/services/agentic-ai-adoption/ai-agents-library/",
  },
  {
    title: "Travel & Expense Claim Agent",
    description:
      "Led a Copilot Studio and Power Automate agent that ingests invoices and trip itineraries, extracts line items, and auto-prepares expense claims for user review and submission.",
    impact: "Automated expense reporting workflows",
    techStack: ["Copilot Studio", "Power Automate", "AI Extraction", "SharePoint"],
    icon: "✈️",
    color: "#6C5CE7",
  },
  {
    title: "Payment Reconciliation Agent",
    description:
      "Led an AI reconciliation agent on Copilot Studio and Power Automate – email receipt extraction, SharePoint storage, and matching against bank statements with manual-approval paths for multi-match cases.",
    impact: "Streamlined microfinance reconciliation",
    techStack: ["Copilot Studio", "Power Automate", "Data Extraction", "SharePoint"],
    icon: "💰",
    color: "#10B981",
  },
  {
    title: "Service Desk AI Assistant",
    description:
      "Built a service desk chatbot on Copilot Studio with RAG/Search AI via Azure Functions, plus Power Apps and SQL for dynamic workflows and backend data handling.",
    impact: "Improved IT support efficiency",
    techStack: ["Copilot Studio", "RAG", "Azure Functions", "Power Apps", "SQL"],
    icon: "🎫",
    color: "#4F46E5",
  },
  {
    title: "Public-Sector AI Adoption Program",
    description:
      "Delivered public-facing, multilingual AI agents for citizen services under a national AI adoption initiative, with a focus on government-grade security and scalable rollout.",
    impact: "Scaled secure citizen services",
    techStack: ["Multilingual NLP", "Security Compliance", "Government AI"],
    icon: "🏛️",
    color: "#D97706",
  },
  {
    title: "Idea Management AI Assistant",
    description:
      "Built a virtual assistant to collect, summarize, and visualize employee suggestions. Delivered POCs across marketing, finance, internal learning, and multilingual traffic mobility.",
    impact: "Streamlined innovation pipeline",
    techStack: ["Chatbot", "Power BI", "Data Aggregation", "NLP"],
    icon: "💡",
    color: "#F59E0B",
  },
  {
    title: "AI Assistant for Police",
    description:
      "Developed and deployed a multilingual AI assistant using Cognigy AI to enhance citizen engagement and service delivery. Integrated secure APIs and optimized conversational flows.",
    impact: "Enhanced citizen engagement",
    techStack: ["Cognigy.AI", "Multilingual NLP", "Secure APIs"],
    icon: "🛡️",
    color: "#7C3AED",
  },
  {
    title: "Electoral Chat & Voice Bot",
    description:
      "Developed a Dialogflow CX chatbot and voice bot solution for a US county, integrated with Google Maps, and provided real-time Agent Assist features to reduce customer care costs.",
    impact: "Reduced customer care costs",
    techStack: ["Dialogflow CX", "Google Maps", "Agent Assist", "Voice Bot"],
    icon: "🗳️",
    color: "#2563EB",
  },
  {
    title: "Healthcare Multilingual Voice Bot",
    description:
      "Built and deployed a Dialogflow CX virtual agent integrated with Genesys telephony for a healthcare organization, supporting English and Spanish. Implemented BigQuery and SOAP APIs.",
    impact: "Served patients multilingually",
    techStack: ["Dialogflow CX", "Genesys", "BigQuery", "SOAP API"],
    icon: "🏥",
    color: "#059669",
  },
  {
    title: "Healthcare Voice Bot (IVR)",
    description:
      "Developed and optimized a Dialogflow ES-based solution for a healthcare organization, automating IVR queues and enhancing the customer experience through Avaya telephone integration.",
    impact: "Automated IVR queues",
    techStack: ["Dialogflow ES", "Avaya", "Voice Bot", "IVR"],
    icon: "📞",
    color: "#EC4899",
  },
];

export const certifications = [
  {
    name: "GCP Associate Cloud Engineer",
    issuer: "Google Cloud",
    period: "03/2023 - 02/2026",
    icon: "☁️",
    color: "#4285F4",
    images: ["/Certificates/GCP ACE.png"],
  },
  {
    name: "Kore.ai XO Platform & Agent Platform",
    issuer: "Kore.ai",
    icon: "🤖",
    color: "#7C3AED",
    images: [
      "/Certificates/Kore AI Certificates/Jyoti Praksh Dwivedi - Agent Platform.jpg",
      "/Certificates/Kore AI Certificates/Jyoti Prakash Dwivedi - Agent AI.jpg",
      "/Certificates/Kore AI Certificates/Jyoti Prakash Dwivedi - Automation AI Advance.jpg",
      "/Certificates/Kore AI Certificates/Jyoti Prakash Dwivedi - Automation AI Basic.jpg",
      "/Certificates/Kore AI Certificates/Jyoti Prakash Dwivedi - Contact Centre AI.jpg",
      "/Certificates/Kore AI Certificates/Jyoti Prakash Dwivedi - Search AI Advacned.jpg",
      "/Certificates/Kore AI Certificates/Jyoti Prakash Dwivedi - Search AI Basic.jpg"
    ],
  },
  {
    name: "Cognigy.AI Developer & Foundation Course",
    issuer: "Cognigy",
    icon: "🧠",
    color: "#EC4899",
    images: [
      "/Certificates/Cognigy.AI Developer Course.png",
      "/Certificates/Cognigy.AI Foundation Course.png"
    ],
  },
  {
    name: "CCAI - Contact Center AI",
    issuer: "Google Cloud",
    icon: "📞",
    color: "#34A853",
    images: ["/Certificates/CCAI.png"],
  },
  {
    name: "Dialogflow ES & CX",
    issuer: "Google Cloud",
    icon: "💬",
    color: "#FBBC05",
    images: [
      "/Certificates/Dialogflow CX main.png",
      "/Certificates/Dialogflow CX.png",
      "/Certificates/Dialogflow ES.png"
    ],
  },
  {
    name: "Python Beginner to Advanced",
    issuer: "Udemy",
    icon: "🐍",
    color: "#3776AB",
    images: ["/Certificates/Python Beginner to Advanced.png"],
  },
  {
    name: "JavaScript",
    issuer: "Udemy",
    icon: "📜",
    color: "#F7DF1E",
    images: ["/Certificates/JavaScript.jpg"],
  },
  {
    name: "SQL",
    issuer: "Udemy",
    icon: "🗄️",
    color: "#336791",
    images: ["/Certificates/SQL.jpg"],
  },
];

export const education = {
  degree: "Bachelor of Engineering, Civil Engineering",
  institution: "Institute of Engineering and Technology, DAVV, Indore",
  year: "May 2022",
  cgpa: "8.97/10",
};

export const achievements = [
  {
    title: "Global R&R Award - Kaizen Award",
    org: "Quantiphi",
    date: "August 2023",
    description: "Received the Global R&R Kaizen Award for outstanding performance.",
    image: "/Certificates/Jyoti Prakash Dwivedi - Q05711 - Kaizen Award.jpg",
  },
];
