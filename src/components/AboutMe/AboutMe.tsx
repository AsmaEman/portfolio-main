import girl from "../../assets/girl.png";
import { useCursorHover } from "../../hooks/useCursorHover";
import { motion } from "motion/react";

export default function AboutMe() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <section
      className="bg-primary-black flex flex-col gap-10 px-4 py-5 sm:p-6 md:p-20 lg:flex-row lg:px-28"
      id="about"
    >
      <div className="flex-center lg:w-1/2">
        <img src={girl} alt="girl illustration" />
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
            I am a Full-Stack Developer with 3+ years of experience designing scalable, data-driven, high-performance software systems across fintech, analytics, and enterprise domains. Currently pursuing BSc. Computer Engineering at University of Engineering & Technology (UET), Lahore, with a focus on Software Engineering, Algorithms, Distributed Systems, Databases, and Embedded Systems.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            My technical expertise spans across modern web technologies including Angular, React, Next.js, TypeScript, JavaScript on the frontend, and .NET (C#, ASP.NET Core), Python (Flask, FastAPI) on the backend. I'm proficient in database technologies like SQL, PostgreSQL, MongoDB, Redis, and experienced with data engineering tools including ETL pipelines, Kafka, Hadoop, and Spark. My cloud and DevOps skills include REST APIs, Microservices Architecture, CI/CD pipelines, Docker, and GitHub Actions.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            At NETSOL Technologies, I designed scalable frontend architecture for fintech SaaS platforms, reducing UI load times by 30% and building real-time visualization systems used by 10,000+ global users. I've also worked as a freelance tech consultant, delivering 100+ structured tutoring sessions with a 4.9/5 rating and building full-stack analytics dashboards. My passion lies in building real-time dashboards, distributed data systems, and AI-assisted automation tools that solve real-world problems.
          </motion.p>
        </article>
      </div>
    </section>
  );
}
