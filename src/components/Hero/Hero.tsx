import SocialMedia from "./SocialMedia";
import girl from "../../assets/girlWithLaptop.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload critical hero image
  useEffect(() => {
    const img = new Image();
    img.src = girl;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="flex-center bg-primary-white flex-col-reverse justify-evenly px-4 sm:px-6 md:flex-row md:px-20 md:pt-10 lg:px-28">
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
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="max-h-[750px] pb-8 sm:w-[539px] xl:w-630 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        )}

        {/* Actual image */}
        <img
          src={girl}
          alt="girl with laptop"
          fetchPriority="high"
          loading="eager"
          className={`max-h-[750px] pb-8 sm:w-[539px] xl:w-630 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
            }`}
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>
    </div>
  );
}
