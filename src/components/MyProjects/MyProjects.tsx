import { motion } from "motion/react";
import LinkIcon from "../../assets/link.svg?react";
import { useCursorHover } from "../../hooks/useCursorHover";
import OptimizedImage from "../UI/OptimizedImage";

// Import images
import quickquiz1 from "../../assets/Gem2.webp";
import ukrify from "../../assets/Gem1.webp";
import portfolio from "../../assets/Gem3.webp";
// Commented out unused imports
// import quickquiz2 from "../../assets/quickquiz2.png";
// import resumeLight from "../../assets/resumeLight.png";

interface MyProjectType {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  githubLinks?: string[];
  technologies?: string[];
  role?: string;
}

const myProjectsData: MyProjectType[] = [
  {
    id: "agentless-iot-security",
    number: "01",
    title: "Agent-less IoT Security: Network-Based Anomaly Detection",
    description: "Detecting anomalous behavior in IoT devices without installing endpoint agents. Traditional IoT security requires agents, which is infeasible for low-power or legacy hardware and creates a visibility gap. I built an agent-less IoT security pipeline that converts PCAP captures into engineered features, evaluates ML models (Random Forest chosen), and serves real-time attack classifications via a Flask dashboard. The system detects 4 attack types (DoS, SlowITe, Brute Force, Malformed) and achieved 93.55% F1-score — designed for practical deployability in legacy and regulated environments.",
    image: quickquiz1,
    link: "#",
    githubLinks: [
      "https://github.com/AsmaEman/Agentless-Iot-Security",
      "https://github.com/AsmaEman/iot-security-dashboard"
    ],
    technologies: ["Python", "Machine Learning", "Network Traffic Analysis", "Flask"],
    role: "Researcher & Developer"
  },
  {
    id: "ai-assisted-police-reporting",
    number: "02",
    title: "ML-Based Police Report Automation System",
    description: "Developed an AI-powered police report automation system using NLP and ML to streamline law enforcement workflows. Implemented 5 ML models (DistilBERT, BERT) achieving 95% entity recognition accuracy and 92% penal code matching accuracy. Built full-stack application reducing report generation time by 77%. Processed CALCRIM legal database with 1000+ pages for automated code extraction.",
    image: ukrify,
    link: "#",
    githubLinks: [
      "https://github.com/AsmaEman/Report-Project",
      "https://github.com/AsmaEman/ReportWebsite"
    ],
    technologies: ["Next.js", "React", "Python", "PyTorch", "Transformers", "Streamlit", "Tailwind CSS"],
    role: "AI/ML Engineer & Full-Stack Developer"
  },
  {
    id: "ai-skin-cancer-detection",
    number: "03",
    title: "Skin Cancer Detection Using Deep Learning and Computer Vision",
    description: "Developed AI-powered skin cancer detection system using deep learning to classify 7 types of skin lesions from dermatoscopic images. Trained CNN model on HAM10000 dataset (10,015 medical images) achieving 85.7% validation accuracy and 84.2% test accuracy. Implemented data augmentation pipeline to handle severe class imbalance, achieving 91.2% accuracy for melanocytic nevus detection. Built full-stack Flask web application with real-time prediction API. Reduced diagnosis time by 80% with sub-3-second inference.",
    image: portfolio,
    link: "#",
    githubLinks: [
      "https://github.com/AsmaEman/AI2018L_SkinCancerdetection_2021"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Flask", "NumPy", "Pandas", "OpenCV"],
    role: "AI/ML Engineer & Medical AI Researcher"
  }
  // Commented out additional projects as requested
  // {
  //   id: "large-scale-financial-dashboard",
  //   number: "04",
  //   title: "Large-Scale Financial Dashboard",
  //   description: "Designed a system to process and display large financial datasets in real-time. Applied caching strategies, query optimization, and data batching for high concurrency. Improved system stability and reduced response time by 25%.",
  //   image: quickquiz2,
  //   link: "#"
  // },
  // {
  //   id: "algorithmic-optimization-project",
  //   number: "05",
  //   title: "Algorithmic Optimization Project (Academic)",
  //   description: "Used graph algorithms, dynamic programming, and greedy strategies to optimize route planning and resource allocation. Implemented time-complexity analysis and performance tests using Python. Demonstrates foundation in algorithms.",
  //   image: resumeLight,
  //   link: "#"
  // }
];

export default function MyProjects() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();

  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-20 md:px-15 md:py-24 xl:px-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-normal text-white md:text-5xl lg:text-6xl"
        >
          Research and <span className="font-bold">Case Studies</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="space-y-20 md:space-y-32">
          {myProjectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid items-center gap-8 md:gap-12 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    onMouseEnter={() => handleMouseEnter(150)}
                    onMouseLeave={() => handleMouseLeave(40)}
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {/* Project Number */}
                <div className="text-6xl font-bold text-white/20 md:text-8xl">
                  {project.number}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  {project.title}
                </h3>

                {/* Role */}
                {project.role && (
                  <p className="text-gray-300 text-sm font-medium">
                    Role: {project.role}
                  </p>
                )}

                {/* Project Description */}
                <p
                  className="text-gray-400 leading-relaxed md:text-lg"
                  onMouseEnter={() => handleMouseEnter(150)}
                  onMouseLeave={() => handleMouseLeave(40)}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && (
                  <div className="space-y-2">
                    <p className="text-gray-300 text-sm font-medium">Tech:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {/* Details Button */}
                  <button
                    onClick={() => {
                      let url = "#";
                      if (project.id === "agentless-iot-security") {
                        url = "https://case-studies-site.vercel.app/iot-security";
                      } else if (project.id === "ai-assisted-police-reporting") {
                        url = "https://case-studies-site.vercel.app/police-report";
                      } else if (project.id === "ai-skin-cancer-detection") {
                        url = "https://case-studies-site.vercel.app/skin-cancer";
                      }

                      if (url !== "#") {
                        window.open(url, '_blank');
                      } else {
                        console.log('View details for:', project.id);
                      }
                    }}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-200 hover:scale-105"
                    onMouseEnter={() => handleMouseEnter(80)}
                    onMouseLeave={() => handleMouseLeave(40)}
                  >
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Thesis Button - Only for IoT Security */}
                  {project.id === "agentless-iot-security" && (
                    <button
                      onClick={() => {
                        window.open("https://drive.google.com/file/d/11DSIiJYkXl_m9NUUoQ_9o6q4VbbIWYgU/view?usp=drive_link", '_blank');
                      }}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105"
                      onMouseEnter={() => handleMouseEnter(80)}
                      onMouseLeave={() => handleMouseLeave(40)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Thesis</span>
                    </button>
                  )}

                  {/* Blog Post Button */}
                  <button
                    onClick={() => {
                      let blogUrl = "#";
                      if (project.id === "agentless-iot-security") {
                        blogUrl = "https://dev.to/asma_eman/securing-iot-devices-without-agents-using-network-based-machine-learning-2emf";
                      } else if (project.id === "ai-assisted-police-reporting") {
                        blogUrl = "https://dev.to/asma_eman/automating-police-report-writing-using-nlp-and-machine-learning-89n";
                      } else if (project.id === "ai-skin-cancer-detection") {
                        blogUrl = "https://asmaeman.github.io/Asma/";
                      }

                      if (blogUrl !== "#") {
                        window.open(blogUrl, '_blank');
                      }
                    }}
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                    onMouseEnter={() => handleMouseEnter(80)}
                    onMouseLeave={() => handleMouseLeave(40)}
                  >
                    <span>Blog Post</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>

                  {/* GitHub Links */}
                  {project.githubLinks && project.githubLinks.map((githubLink, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-700 hover:scale-105"
                      onMouseEnter={() => handleMouseEnter(80)}
                      onMouseLeave={() => handleMouseLeave(40)}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub {linkIndex === 0 ? 'Research' : 'Dashboard'}</span>
                    </a>
                  ))}

                  {/* Regular Project Link */}
                  {project.link && !project.githubLinks && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-white transition-colors hover:text-gray-300"
                      onMouseEnter={() => handleMouseEnter(80)}
                      onMouseLeave={() => handleMouseLeave(40)}
                    >
                      <LinkIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">View Project</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}