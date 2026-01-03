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
            I build things full-stack APIs that don't break under pressure, dashboards that people actually want to use, and ML features that help humans make better decisions without replacing them. Think: smart alerting that cuts through noise, prioritization systems that learn what matters, recommendations that feel helpful (not creepy).
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            <p className="mb-2"><strong>What I'm really good at:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Making AI explainable to the people who need to trust it</li>
              <li>Building data pipelines that don't mysteriously fail at 3 AM</li>
              <li>Shipping small, focused features that compound into big improvements</li>
              
              <li>Turning "the model says X" into "here's why, and here's what to do about it"</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
            <p className="mb-2"><strong>What I believe:</strong></p>
            <p>
              The best software doesn't try to automate everything it amplifies human expertise. Models should be understandable. Data should be reliable. And "it works" isn't good enough if nobody knows <em>how</em> it works.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // Replace with actual Google Drive link for Reachout.mp4
                window.open("https://drive.google.com/file/d/YOUR_VIDEO_ID/view?usp=drive_link", '_blank');
              }}
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-200 hover:scale-105"
              onMouseEnter={() => handleMouseEnter(80)}
              onMouseLeave={() => handleMouseLeave(40)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              
            </a>
          </motion.div>
        </article>
      </div>
    </section>
  );
}