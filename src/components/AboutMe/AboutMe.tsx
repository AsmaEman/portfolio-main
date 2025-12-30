import girl from "../../assets/girl.webp";
import { useCursorHover } from "../../hooks/useCursorHover";
import { motion } from "motion/react";
import OptimizedImage from "../UI/OptimizedImage";

export default function AboutMe() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <section
      className="bg-primary-black flex flex-col gap-10 px-4 py-5 sm:p-6 md:p-20 lg:flex-row lg:px-28"
      id="about"
    >
      <div className="flex-center lg:w-1/2">
        <OptimizedImage
          src={girl}
          alt="girl illustration"
          className="max-w-full h-auto"
          loading="lazy"
          onMouseEnter={() => handleMouseEnter(150)}
          onMouseLeave={() => handleMouseLeave(40)}
        />
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-primary-white mb-10 text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">About</span>{" "}
          <span className="font-extrabold">Me</span>
        </h3>
        <article
          className="flex flex-col gap-4 text-zinc-300"
          onMouseEnter={() => handleMouseEnter(150)}
          onMouseLeave={() => handleMouseLeave(40)}
        >
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            I design and build software that bridges engineering, data, and product. My career spans product teams and freelance projects where I’ve focused on bringing structure to noisy operational data, creating APIs and ETL pipelines that power reliable dashboards, and shipping small, explainable ML signals that amplify human decision-making.
            I enjoy the full lifecycle: from turning a fuzzy product question into measurable features, to implementing pragmatic pipelines and dashboards, to iterating with users until the solution actually helps them do their job. That means thinking about architecture and testability, but also about clarity models and metrics should be understandable and actionable by the people who rely on them.

          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            As a freelancer I pair hands-on delivery with mentoring and knowledge transfer so teams can own and evolve what we build together. I like small, focused AI features that improve workflows (prioritization, alerting, recommendations) rather than ambitious end-to-end automation the goal is to amplify people, reduce toil, and make systems more trustworthy.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            What I do (services / focus areas)
            •	Full-stack product engineering (frontend, backend, APIs)
            •	Data & event pipelines, feature engineering for analytics and ML
            •	AI-assisted tooling: small, explainable models that fit operational workflows
            •	Internal dashboards and observability surfaces for non-technical stakeholders
            •	Technical mentoring, code quality, and developer enablement

          </motion.p>
        </article>
      </div>
    </section>
  );
}
