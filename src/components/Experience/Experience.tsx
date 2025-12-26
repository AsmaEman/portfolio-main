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
    id: "fscai",
    company: "FSC",
    role: "Software Engineer — AI-Assisted Decisioning & Operational Intelligence",
    period: "May 2025 – Present",
    description: "I build AI-first features that turn noisy event streams and operational signals into actionable insights for real-time services. My work focuses on creating reliable data foundations, explainable ML signals, and workflows that help ops teams investigate and act quickly on exceptions. Designed end-to-end feature pipelines converting streaming events into stable, explainable signals. Developed AI-assisted workflows surfacing unusual patterns in routing, matching, and reconciliation flows. Built internal analytics surfaces blending rule-based checks with model-driven indicators for clear investigation context.",
    logo: "F",
    logoAlt: "FSCAI logo",
    companyColor: "#6366F1"
  },
  {
    id: "netsol",
    company: "NETSOL Technologies",
    role: "Software Developer — Asset Management Platform ",
    period: "Jun 2022 – Mar 2025",
    description: "I contributed to a core asset-management platform across frontend, backend, and data pipelines, focusing on system reliability and usability for financial users. Designed and integrated .NET (C#) RESTful APIs with Angular frontend for secure, maintainable feature delivery. Built and refined ETL patterns to prepare financial and operational data for reporting and visualization. Developed interactive dashboards making complex financial insights approachable for business users. Mentored peers on code quality, architecture patterns, and testability while taking ownership of critical production issues.",
    logo: "N",
    logoAlt: "NETSOL Technologies logo",
    companyColor: "#0066CC"
  },
  {
    id: "pepsico",
    company: "PepsiCo",
    role: "Software Developer",
    period: "May 2021 – Oct 2021",
    description: "I worked on internal tools that automated manual finance and supply-chain tasks, helping business teams focus on analysis rather than repetitive processes. Built internal React tools to automate workflows and simplify complex Excel-based processes for finance teams. Acted as technical translator between finance stakeholders and engineering, turning requirements into reliable, testable features. Ran user-acceptance sessions and iterated on feedback to ensure usability and adoption.",
    logo: "P",
    logoAlt: "PepsiCo logo",
    companyColor: "#E32934"
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Tech Consultant & Tutor",
    period: "Feb 2021 – Present",
    description: "I partner with startups and product teams to solve engineering and data challenges end-to-end. My work blends hands-on delivery, technical mentorship, and pragmatic architecture designed for maintainability and fast iteration. Coached engineers and product teams through system design, code quality, and deployment practices. Designed and delivered full-stack analytics dashboards and data pipelines surfacing actionable insights for non-technical stakeholders. Created tailored learning plans helping developers communicate ideas clearly and prepare for interviews with confidence.",
    logo: "FL",
    logoAlt: "Freelance logo",
    companyColor: "#28A745"
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