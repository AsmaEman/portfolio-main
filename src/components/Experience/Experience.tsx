import { motion } from "motion/react";
import { useCursorHover } from "../../hooks/useCursorHover";

interface ExperienceType {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  logoAlt: string;
  companyColor: string;
}

const experienceData: ExperienceType[] = [
  {
    id: "netsol",
    company: "NETSOL Technologies",
    role: "Software Developer",
    period: "Jun 2022 - Mar 2025",
    description: "Frontend Architecture (Angular): Designed scalable architecture for a fintech SaaS platform, reducing UI load times 30% through lazy loading, caching & optimization. Data-Driven Dashboards: Built real-time visualization systems improving reporting accuracy 25% and used by 10,000+ global users. API Engineering: Collaborated with backend teams to define efficient REST API contracts for large financial datasets. Code Quality & Mentorship: Conducted code reviews and mentored 3 junior developers, decreasing post-release defects by 40%. Agile Delivery: Planned and delivered over 15+ features across 2-week sprints ahead of deadlines.",
    logo: "N",
    logoAlt: "NETSOL Technologies logo",
    companyColor: "#0066CC"
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Tech Consultant (Full-Stack + Mentoring)",
    period: "Feb 2021 - Present",
    description: "Delivered 100+ structured tutoring sessions on Angular, .NET, React, Python, and software architecture with a 4.9/5 rating. Built full-stack React + .NET Core analytics dashboards for Polix Analytics that reduced reporting time by 30%. Provided consulting on system design, architectural decisions, and performance optimization.",
    logo: "F",
    logoAlt: "Freelance logo",
    companyColor: "#28A745"
  },
  {
    id: "pepsico",
    company: "PepsiCo",
    role: "Software Developer",
    period: "May 2021 - Oct 2021",
    description: "Automated internal supply chain workflows using React, reducing manual processes 15%. Converted business domain logic into technical requirements ensuring smooth UAT and stakeholder approval. Built tools for finance teams improving accuracy and speed of budget calculations.",
    logo: "P",
    logoAlt: "PepsiCo logo",
    companyColor: "#E32934"
  }
];

export default function Experience() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();

  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-20 md:px-15 md:py-24 xl:px-28">
      <div className="mx-auto max-w-4xl">
        {/* Section Title */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-normal text-white md:text-5xl lg:text-6xl"
        >
          My <span className="font-bold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70 md:p-8"
              onMouseEnter={() => handleMouseEnter(150)}
              onMouseLeave={() => handleMouseLeave(40)}
            >
              {/* Background Gradient on Hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                style={{
                  background: `linear-gradient(135deg, ${experience.companyColor}20, transparent)`
                }}
              />

              {/* Card Content */}
              <div className="relative z-10 flex items-start gap-4 md:gap-6">
                {/* Company Logo */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-white md:h-16 md:w-16"
                  style={{ backgroundColor: experience.companyColor }}
                >
                  <span className="text-lg font-bold md:text-xl">
                    {experience.logo}
                  </span>
                </motion.div>

                {/* Experience Details */}
                <div className="flex-1 space-y-3">
                  {/* Header */}
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <motion.h3
                      className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-gray-100 md:text-xl"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {experience.role}
                    </motion.h3>
                    <span className="text-sm text-gray-400 md:text-base">
                      {experience.period}
                    </span>
                  </div>

                  {/* Description */}
                  <motion.p
                    className="leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {experience.description}
                  </motion.p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-opacity-30"
                style={{ borderColor: experience.companyColor }}
              />

              {/* Bottom Right Accent */}
              <motion.div
                className="absolute bottom-4 right-4 h-2 w-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                style={{ backgroundColor: experience.companyColor }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute left-10 top-20 h-20 w-20 rounded-full bg-blue-500/10 blur-xl" />
        <div className="absolute right-10 bottom-20 h-32 w-32 rounded-full bg-red-500/10 blur-xl" />
      </div>
    </section>
  );
}