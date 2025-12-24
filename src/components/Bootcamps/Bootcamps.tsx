import { motion } from "motion/react";
import { useCursorHover } from "../../hooks/useCursorHover";

interface BootcampType {
  id: string;
  title: string;
  provider: string;
  duration: string;
  year: string;
  description: string;
  skills: string[];
  certificate?: string;
  icon: string;
  color: string;
}

const bootcampsData: BootcampType[] = [
  {
    id: "data-engineering-bootcamp",
    title: "Data Engineering Bootcamp",
    provider: "Atomcamp & DataExpert.io",
    duration: "6 Months",
    year: "2023",
    description: "Comprehensive data engineering program covering ETL pipelines, Kafka, Hadoop, Spark, and real-time data processing. Built scalable data systems and learned advanced data engineering practices.",
    skills: ["ETL Pipelines", "Kafka", "Hadoop", "Spark", "Data Processing", "Python"],
    certificate: "#",
    icon: "🔧",
    color: "#3B82F6"
  },
  {
    id: "ibm-data-engineering",
    title: "IBM Data Engineering Certificate",
    provider: "Coursera - IBM",
    duration: "4 Months",
    year: "2023",
    description: "Professional certificate covering data engineering fundamentals, database design, ETL processes, and cloud data platforms. Gained hands-on experience with IBM Cloud and data engineering tools.",
    skills: ["Data Engineering", "ETL", "Cloud Platforms", "Database Design", "IBM Cloud"],
    certificate: "#",
    icon: "📊",
    color: "#06B6D4"
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    provider: "Coursera - Google",
    duration: "3 Months",
    year: "2022",
    description: "Comprehensive data analytics program covering data collection, cleaning, analysis, and visualization. Learned to use tools like SQL, R, and Tableau for data-driven decision making.",
    skills: ["Data Analytics", "SQL", "R", "Tableau", "Data Visualization", "Statistics"],
    certificate: "#",
    icon: "📈",
    color: "#F59E0B"
  },
  {
    id: "meta-frontend",
    title: "Meta Front-End Developer Certificate",
    provider: "Coursera - Meta",
    duration: "5 Months",
    year: "2022",
    description: "Professional certificate covering modern front-end development with React, responsive design, and user experience principles. Built multiple projects demonstrating proficiency in modern web development.",
    skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design", "UX/UI", "Version Control"],
    certificate: "#",
    icon: "⚛️",
    color: "#8B5CF6"
  },
  {
    id: "azure-fundamentals",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    provider: "Microsoft Learn",
    duration: "2 Months",
    year: "2022",
    description: "Cloud computing fundamentals covering Azure services, architecture patterns, security, and cost optimization. Gained foundational knowledge of Microsoft Azure cloud platform.",
    skills: ["Azure", "Cloud Computing", "Cloud Architecture", "Security", "Cost Management"],
    certificate: "#",
    icon: "☁️",
    color: "#0078D4"
  },
  {
    id: "machine-learning-python",
    title: "Machine Learning with Python",
    provider: "IBM - Coursera",
    duration: "3 Months",
    year: "2021",
    description: "Comprehensive machine learning course covering algorithms, model training, evaluation, and deployment using Python. Implemented various ML algorithms and worked on real-world datasets.",
    skills: ["Machine Learning", "Python", "Scikit-learn", "Data Science", "Model Training"],
    certificate: "#",
    icon: "🤖",
    color: "#10B981"
  },
  {
    id: "algorithms-specialization",
    title: "Algorithms Specialization",
    provider: "Stanford - Coursera",
    duration: "4 Months",
    year: "2021",
    description: "Advanced algorithms course covering graph algorithms, dynamic programming, greedy strategies, and complexity analysis. Developed strong foundation in algorithmic thinking and optimization.",
    skills: ["Algorithms", "Data Structures", "Graph Theory", "Dynamic Programming", "Optimization"],
    certificate: "#",
    icon: "🧮",
    color: "#EF4444"
  },
  {
    id: "freecodecamp-fullstack",
    title: "FreeCodeCamp Full Stack Developer",
    provider: "FreeCodeCamp",
    duration: "8 Months",
    year: "2020-2021",
    description: "Comprehensive full-stack development curriculum covering front-end and back-end technologies. Built multiple projects demonstrating proficiency in modern web development stack.",
    skills: ["Full Stack", "JavaScript", "Node.js", "React", "MongoDB", "Express"],
    certificate: "#",
    icon: "🔥",
    color: "#F97316"
  },
  {
    id: "angular-architecture",
    title: "Advanced Angular Architecture",
    provider: "Udemy",
    duration: "2 Months",
    year: "2022",
    description: "Advanced Angular course covering architecture patterns, performance optimization, state management, and enterprise-level application development. Learned best practices for scalable Angular applications.",
    skills: ["Angular", "Architecture Patterns", "State Management", "Performance", "Enterprise Development"],
    certificate: "#",
    icon: "🅰️",
    color: "#DD0031"
  }
];

export default function Bootcamps() {
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
          Bootcamps & <span className="font-bold">Trainings</span>
        </motion.h2>

        {/* Bootcamps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {bootcampsData.map((bootcamp, index) => (
            <motion.div
              key={bootcamp.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-3xl bg-gray-900/50 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-gray-900/70"
              onMouseEnter={() => handleMouseEnter(150)}
              onMouseLeave={() => handleMouseLeave(40)}
            >
              {/* Background Gradient */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${bootcamp.color}40, transparent 70%)`
                }}
              />

              {/* Floating Icon */}
              <motion.div
                className="absolute -right-4 -top-4 text-6xl opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {bootcamp.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <motion.span
                      className="text-3xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {bootcamp.icon}
                    </motion.span>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>{bootcamp.duration}</span>
                      <span>•</span>
                      <span>{bootcamp.year}</span>
                    </div>
                  </div>

                  <motion.h3
                    className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-gray-100 md:text-2xl"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {bootcamp.title}
                  </motion.h3>

                  <p
                    className="font-medium transition-colors duration-300"
                    style={{ color: bootcamp.color }}
                  >
                    {bootcamp.provider}
                  </p>
                </div>

                {/* Description */}
                <motion.p
                  className="leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {bootcamp.description}
                </motion.p>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Skills Learned
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {bootcamp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: bootcamp.color + "20"
                        }}
                        className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300 transition-all duration-200 hover:text-white"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Certificate Link */}
                {bootcamp.certificate && (
                  <motion.div
                    className="pt-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={bootcamp.certificate}
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-white"
                      style={{ color: bootcamp.color }}
                    >
                      <span>View Certificate</span>
                      <motion.span
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </a>
                  </motion.div>
                )}
              </div>

              {/* Hover Border */}
              <div
                className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-300 group-hover:border-opacity-30"
                style={{ borderColor: bootcamp.color }}
              />

              {/* Corner Accent */}
              <motion.div
                className="absolute bottom-6 right-6 h-3 w-3 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                style={{ backgroundColor: bootcamp.color }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-20 top-32 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute right-20 bottom-32 h-40 w-40 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute left-1/2 top-20 h-24 w-24 rounded-full bg-cyan-500/5 blur-2xl" />
      </div>
    </section>
  );
}