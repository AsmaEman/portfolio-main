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
    imgAlt: "Carpools Community Carpooling Platform banner",
    number: 1,
    title: "Carpools - Community Carpooling Platform",
    description: "A comprehensive community-focused carpooling platform built with React + Capacitor for native iOS/Android packaging. Unlike traditional ride-sharing apps, this platform emphasizes building reliable, long-term commuting communities with features like driver rotation, flexible cost-sharing, and enterprise-grade security. Includes admin dashboard, route planning system, and advanced matching algorithms.",
    demo: "https://carpool-community-share.vercel.app/",
    github: "https://github.com/AsmaEman/carpool-community-share",
    technologies: [
      "React",
      "TypeScript",
      "Capacitor",
      "Supabase",
      "Tailwind CSS",
      "iOS/Android"
    ],
    ariaLabel: {
      demo: "View Carpools Community Platform live demo",
      github: "View Carpools Community Platform project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/quickquiz1.png",
    imgAlt: "Mufradat Arabic Learning Platform screenshot",
    number: 2,
    title: "Mufradat - Arabic Vocabulary Learning Platform",
    description: "An innovative, interactive platform for mastering Arabic vocabulary and conversation skills. Features comprehensive vocabulary management, interactive learning modules, progress tracking, and gamified learning experience. Built with modern React architecture, state management, and responsive UI components to provide an engaging educational experience for Arabic language learners.",
    demo: "https://vocabulary-learner-red.vercel.app/",
    github: "https://github.com/AsmaEman/Mufradat",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "State Management",
      "Educational Tech"
    ],
    ariaLabel: {
      demo: "View Mufradat Arabic Learning Platform live demo",
      github: "View Mufradat Arabic Learning Platform project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/resumeLight.png",
    imgAlt: "Quantum Intelligence Console screenshot",
    number: 3,
    title: "Quantum Intelligence Console (QIC)",
    description: "Advanced Next.js frontend dashboard application for AI/ML intelligence & analytics. Enterprise-grade platform featuring real-time data visualization, text-to-speech capabilities, OCR processing, and intelligent data grid management. Integrates Material-UI, Redux Toolkit, ApexCharts, TensorFlow.js, and Auth0 for comprehensive AI/ML data management and monitoring.",
    demo: "https://qic-frontend-main.vercel.app",
    github: "https://github.com/AsmaEman/Quantum-Intelligence-Console",
    technologies: ["Next.js", "Material-UI", "Redux Toolkit", "TensorFlow.js", "ApexCharts", "AI/ML"],
    ariaLabel: {
      demo: "View Quantum Intelligence Console live demo",
      github: "View Quantum Intelligence Console project source code on GitHub"
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
