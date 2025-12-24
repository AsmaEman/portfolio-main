import { ProjectType } from "./types/project";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const linksInfo = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" }
];

export const projectsData: ProjectType[] = [
  {
    imgSrc: "src/assets/ukrify.png",
    imgAlt: "Intelligent Inspection System banner",
    number: 1,
    title: "Intelligent Inspection System (Fintech + IoT)",
    description: "Led a 4-member engineering team to build a real-time inspection dashboard for field operations. Implemented 95% unit test coverage and automated E2E workflows with Cypress. Designed micro front-end patterns to scale modules independently. Used Angular, .NET Core, SQL, Jest, and Cypress to create a robust system that improved operational efficiency.",
    demo: "#",
    github: "#",
    technologies: [
      "Angular",
      ".NET Core",
      "SQL",
      "Jest",
      "Cypress",
      "Microservices"
    ],
    ariaLabel: {
      demo: "View Intelligent Inspection System live demo",
      github: "View Intelligent Inspection System project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/quickquiz1.png",
    imgAlt: "AI Police Reporting Platform screenshot",
    number: 2,
    title: "AI-Assisted Police Reporting Platform",
    description: "Built a modular reporting system with dynamic workflows reducing data-entry errors by 40%. Integrated custom GPT pipelines to auto-extract legal sections & penal codes, saving 20+ hours/month. Demonstrated application of intelligent systems in public-sector automation using Next.js, Python APIs, and ChatGPT Integration.",
    demo: "#",
    github: "#",
    technologies: [
      "Next.js",
      "Python APIs",
      "ChatGPT Integration",
      "GPT Pipelines",
      "Automation"
    ],
    ariaLabel: {
      demo: "View AI Police Reporting Platform live demo",
      github: "View AI Police Reporting Platform project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/resumeLight.png",
    imgAlt: "Distributed Data Pipeline screenshot",
    number: 3,
    title: "Distributed Data Pipeline for Real-Time Analytics",
    description: "Implemented a mini data pipeline using Kafka + Python + PostgreSQL. Streamed synthetic sensor data, applied transformations, and built a monitoring dashboard. Explored event-driven architecture, consumer groups, and fault tolerance. This project demonstrates expertise in real-time data processing and distributed systems architecture.",
    demo: "#",
    github: "#",
    technologies: ["Kafka", "Python", "PostgreSQL", "Real-time Processing", "Event-driven Architecture"],
    ariaLabel: {
      demo: "View Distributed Data Pipeline live demo",
      github: "View Distributed Data Pipeline project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/portfolio.png",
    imgAlt: "Large-Scale Financial Dashboard screenshot",
    number: 4,
    title: "Large-Scale Financial Dashboard",
    description: "Designed a system to process and display large financial datasets in real-time. Applied caching strategies, query optimization, and data batching for high concurrency. Improved system stability and reduced response time by 25%. Built using modern web technologies with focus on performance and scalability.",
    demo: "#",
    github: "#",
    technologies: ["Real-time Processing", "Caching", "Query Optimization", "Performance Tuning", "Financial Data"],
    ariaLabel: {
      demo: "View Financial Dashboard live demo",
      github: "View Financial Dashboard project source code on GitHub"
    }
  }
];
