import SocialMedia from "./SocialMedia";
import girl from "../../assets/girlWithLaptop.webp";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import OptimizedImage from "../UI/OptimizedImage";

export default function Hero() {
  return (
    <section className="flex-center bg-primary-white flex-col-reverse justify-evenly px-4 py-8 sm:px-6 md:flex-row md:px-20 md:py-10 lg:px-28 relative z-10">
      <motion.section
        className="flex flex-col gap-8 md:w-1/2"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-3 text-[28px]/[114%] tracking-tight lg:gap-5 lg:text-5xl/[117%]">
          <h1>
            <span style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 900,
              fontSize: '220px',
              lineHeight: '0.75',
              letterSpacing: '-0.06em',
              color: '#060606ff',
              display: 'inline-block',
              transform: 'scaleX(0.95)',
              userSelect: 'none',
            }}>HI!</span>
            <span>I`am</span>{" "}
            <TypeAnimation
              sequence={["Asma", 3000, "", 1000, "Asma", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontWeight: 800, display: "inline-block" }}
              repeat={0}
              preRenderFirstString={true}
            />
          </h1>
          <p>
            <span className="font-extrabold">Full-Stack </span>
            <span className="text-primary-white text-stroke-1 text-stroke-primary-black font-extrabold">
              Developer
            </span>
          </p>
          <p>
            <span>Based In </span>
            <span className="font-extrabold">Pakistan.</span>
          </p>
        </div>
        <p className="text-base/6 font-normal text-zinc-500">
          Building reliable apps and AI-first data features that turn messy signals into clear decisions.
        </p>
        <div className="lg:mt-10">
          <SocialMedia />
        </div>
      </motion.section>

      <motion.div
        className="flex-center md:w-1/2 relative"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, type: "spring" }}
        viewport={{ once: true }}
      >
        <div className="max-h-[750px] pb-8 sm:w-[539px] xl:w-630 relative">
          <OptimizedImage
            src={girl}
            alt="girl with laptop"
            className="w-full h-auto"
            loading="eager"
            priority={true}
          />
        </div>
      </motion.div>
    </section>
  );
}
