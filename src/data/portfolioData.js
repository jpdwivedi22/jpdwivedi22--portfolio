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
  hackerrank: "https://www.hackerrank.com/profile/jpdwivedi26",
  about: `AI Engineer with 3+ years of hands-on experience in designing and developing conversational AI solutions — including chatbots and voice bots — for automating customer communication across text and voice channels. Proficient in platforms such as Cognigy.AI, Kore.ai, Microsoft Copilot Studio, and Dialogflow, with strong backend development skills using Node.js. Skilled in leveraging cloud platforms like Microsoft Azure and Google Cloud, along with data visualization tools like Power BI. Currently contributing to innovative AI-driven automation and customer service solutions at TeKnowledge, India.`,
};

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "AI Projects Delivered" },
  { value: "5+", label: "AI Platforms Mastered" },
  { value: "GCP", label: "Certified Engineer" },
];

export const skillCategories = [
  {
    title: "Conversational AI",
    icon: "🤖",
    skills: [
      "Kore.ai (XO & Agent Platform)",
      "Cognigy.AI",
      "Microsoft Copilot Studio",
      "Dialogflow CX/ES",
      "Generative AI & RAG",
      "Vertex AI Search & Conversation",
      "Google CCAI",
      "Agentic AI",
    ],
  },
  {
    title: "Voice & Integrations",
    icon: "🎙️",
    skills: [
      "Avaya (AEP/AXP)",
      "Twilio",
      "WhatsApp Integration",
      "Phone/Voice Gateway",
      "CCAIP",
      "Azure Speech Service",
      "Google Speech",
      "ElevenLabs",
      "Soniox",
      "xApps",
      "Chat SDK",
    ],
  },
  {
    title: "Programming",
    icon: "💻",
    skills: ["JavaScript", "Node.js", "Python", "SQL", "HTML/CSS"],
  },
  {
    title: "Cloud & AI Services",
    icon: "☁️",
    skills: [
      "Google Cloud Platform",
      "Microsoft Azure",
      "OpenAI APIs",
      "Gemini",
      "BigQuery",
      "Firestore",
      "DLP API",
      "STT/TTS APIs",
      "Azure Functions",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      "Power BI",
      "Azure Data Studio",
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      "Gerrit",
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
      "Contributing to the AI delivery team designing, developing, and deploying enterprise-grade conversational AI solutions with project scoping and timeline planning.",
      "Collaborating with the presales team to design conversational AI POCs/demos across multiple platforms, showcasing product capabilities to customers.",
      "Designing and building automated agentic chatbots leveraging RAG and LLM technologies using Cognigy.AI, Microsoft Copilot Studio, and Kore.ai XO Platform.",
      "Defined KPIs and designed interactive Power BI dashboards to monitor chatbot performance and user engagement.",
    ],
    techStack: [
      "Cognigy.AI",
      "Copilot Studio",
      "Kore.ai",
      "Azure Functions",
      "Power BI",
      "RAG",
      "Search AI",
    ],
  },
  {
    role: "Sr. Conversation AI Specialist",
    company: "Avaya (via Bravishma)",
    location: "Pune, Maharashtra",
    period: "May 2024 – April 2025",
    highlights: [
      "Managed technical discussions with clients, providing strategic direction for AI chatbot implementations and leading requirement gathering.",
      "Delivered multiple POCs and demos using Cognigy AI chatbot and voicebot solutions for global organizations with WhatsApp and voicebot integration.",
      "Developed a GenAI-based Agentic AI chatbot using Dialogflow CX with a custom RAG model.",
      "Contributed to building a GenAI-powered automation testing tool to streamline bot development and QA processes.",
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
      "Led a team of Conversation Bot Engineers to develop production-grade virtual agents while guiding solution architecture and technical design.",
      "Designed and developed virtual agents using Google Dialogflow across elections, healthcare, and insurance domains.",
      "Created custom integrations with Avaya, Genesys, Cisco, and phone gateways.",
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
    title: "Service Desk AI Assistant",
    description:
      "Designed and developed a service desk automation chatbot using Microsoft Copilot Studio. Implemented RAG and advanced Search AI capabilities with Azure Functions for intelligent knowledge retrieval. Integrated Power Apps and SQL databases for dynamic workflows.",
    impact: "Improved support speed and accuracy",
    techStack: ["Copilot Studio", "RAG", "Azure Functions", "Power Apps", "SQL", "Search AI"],
    icon: "🎫",
    color: "#4F46E5",
  },
  {
    title: "AI Assistant for Police",
    description:
      "Developed and deployed a multilingual AI assistant using Cognigy AI to enhance citizen engagement and service delivery. Integrated secure APIs and optimized conversational flows for a seamless user experience.",
    impact: "Enhanced citizen engagement across languages",
    techStack: ["Cognigy.AI", "Multilingual NLP", "Secure APIs", "Conversational Design"],
    icon: "🛡️",
    color: "#7C3AED",
  },
  {
    title: "Electoral Chat & Voice Bot",
    description:
      "Developed a Dialogflow CX chatbot and voice bot solution for a US county, integrated with Google Maps, providing real-time Agent Assist features to reduce customer care costs.",
    impact: "Reduced customer care costs significantly",
    techStack: ["Dialogflow CX", "Google Maps", "Agent Assist", "Voice Bot", "Real-time"],
    icon: "🗳️",
    color: "#2563EB",
  },
  {
    title: "Healthcare Multilingual Voice Bot",
    description:
      "Built and deployed a Dialogflow CX virtual agent integrated with Genesys telephony for a healthcare organization, supporting English and Spanish. Implemented BigQuery and SOAP API integration for authentication.",
    impact: "Served patients in multiple languages",
    techStack: ["Dialogflow CX", "Genesys", "BigQuery", "SOAP API", "Multilingual"],
    icon: "🏥",
    color: "#059669",
  },
  {
    title: "Idea Management AI Assistant",
    description:
      "Developed a virtual assistant to collect and summarize employee suggestions. Aggregated and visualized ideas using Power BI dashboards to support stakeholder review, prioritization, and implementation planning.",
    impact: "Streamlined organizational innovation pipeline",
    techStack: ["Chatbot", "Power BI", "Data Aggregation", "NLP"],
    icon: "💡",
    color: "#D97706",
  },
  {
    title: "AI Assistant for Airways",
    description:
      "Created a POC integrating Dialogflow CX and Cognigy to assist passengers during their journeys. Implemented API calls through GCP Cloud Functions and utilized OpenAI models for smarter responses.",
    impact: "Enhanced passenger journey experience",
    techStack: ["Dialogflow CX", "Cognigy", "OpenAI", "GCP Cloud Functions"],
    icon: "✈️",
    color: "#DC2626",
  },
];

export const certifications = [
  {
    name: "GCP Associate Cloud Engineer",
    issuer: "Google Cloud",
    period: "03/2023 - 02/2026",
    icon: "☁️",
    color: "#4285F4",
  },
  {
    name: "Kore.ai XO Platform & Agent Platform",
    issuer: "Kore.ai",
    icon: "🤖",
    color: "#7C3AED",
  },
  {
    name: "Cognigy.AI Developer & Foundation Course",
    issuer: "Cognigy",
    icon: "🧠",
    color: "#EC4899",
  },
  {
    name: "CCAI - Contact Center AI",
    issuer: "Google Cloud",
    icon: "📞",
    color: "#34A853",
  },
  {
    name: "Dialogflow ES & CX",
    issuer: "Google Cloud",
    icon: "💬",
    color: "#FBBC05",
  },
  {
    name: "Conversational AI on Vertex AI",
    issuer: "Google Cloud",
    icon: "🔮",
    color: "#EA4335",
  },
  {
    name: "JavaScript & SQL",
    issuer: "Udemy",
    icon: "📜",
    color: "#A855F7",
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
  },
];
