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
    id: "genai-bootcamp-exampro",
    title: "GenAI Bootcamp",
    provider: "ExamPro",
    duration: "3 Months",
    year: "2025",
    description: "Comprehensive 65-hour Generative AI bootcamp covering foundational concepts, LLMs, prompt engineering, and AI application development. Created by Andrew Brown from ExamPro with 30+ guest instructors, this immersive program provides hands-on experience with cutting-edge GenAI technologies and practical implementation strategies.",
    skills: ["Generative AI", "Large Language Models", "Prompt Engineering", "AI Applications", "Machine Learning", "Deep Learning"],
    certificate: "https://www.linkedin.com/in/asmaeman/details/certifications/1745517519945/single-media-viewer/?profileId=ACoAAC511yIBm2ppk18FO2n0FUGymkOo0A8P8Y8",
    icon: "🤖",
    color: "#3B82F6"
  },
  {
    id: "data-engineering-dataexpert",
    title: "Data Engineering Certification",
    provider: "DataExpert.io",
    duration: "3 Months",
    year: "2025",
    description: "Intensive data engineering bootcamp covering Spark, Flink, advanced data modeling, and modern data engineering practices. Focused on transitioning from junior to senior data engineer with hands-on projects and real-world applications. Covers cumulative table design, data pipeline architecture, and high-trust data systems.",
    skills: ["Apache Spark", "Apache Flink", "Data Modeling", "Data Pipelines", "ETL", "Data Engineering"],
    certificate: "https://www.dataexpert.io/certification/asmaeman9253939/yt-bootcamp-completion",
    icon: "🔧",
    color: "#06B6D4"
  },
  {
    id: "certified-professional-data-engineer",
    title: "Certified Professional Data Engineer",
    provider: "atomcamp",
    duration: "6 Months",
    year: "2024",
    description: "Project-based data engineering bootcamp with hands-on exercises in enterprise-grade tools. Comprehensive training in big data technologies, cloud platforms, and data governance. Focused on building scalable data systems and implementing best practices for data engineering in production environments.",
    skills: ["Hadoop", "Big Data", "PySpark", "Machine Learning Data Pipelines", "Apache Kafka", "Data Governance"],
    certificate: "https://www.linkedin.com/in/asmaeman/details/certifications/1708712517476/single-media-viewer/?profileId=ACoAAC511yIBm2ppk18FO2n0FUGymkOo0A8P8Y8",
    icon: "📊",
    color: "#F59E0B"
  },
  {
    id: "cybersecurity-tools-coursera",
    title: "Introduction to Cybersecurity Tools & Cyber Attacks",
    provider: "Coursera",
    duration: "4 Weeks",
    year: "2021",
    description: "Foundational cybersecurity course covering fundamental concepts, threat analysis, and defensive measures. Provides comprehensive understanding of cyber attack vectors, security tools, and preventive strategies. Includes hands-on experience with cybersecurity tools and real-world threat scenarios.",
    skills: ["Cybersecurity Fundamentals", "Threat Analysis", "Security Tools", "Risk Assessment", "Incident Response", "Network Security"],
    certificate: "https://www.credly.com/badges/af2b4c1d-0e8b-4050-bef1-92fb14e35450?source=linked_in_profile",
    icon: "🔒",
    color: "#EF4444"
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