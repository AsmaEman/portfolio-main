import { motion } from "motion/react";
import { useCursorHover } from "../../hooks/useCursorHover";

// Import client logos
import pepsiLogo from "../../assets/clients/pepsi.svg";
import preplyLogo from "../../assets/clients/preply.png";
import tamimiLogo from "../../assets/clients/Tamimi.png";
import allicaLogo from "../../assets/clients/allica.svg";
import ikeaLogo from "../../assets/clients/ikea.svg";
import ikanoLogo from "../../assets/clients/Ikano.svg";

interface ClientType {
  name: string;
  logo: string;
  alt: string;
}

const clientsData: ClientType[] = [
  {
    name: "Pepsi",
    logo: pepsiLogo,
    alt: "Pepsi logo"
  },
  {
    name: "Preply",
    logo: preplyLogo,
    alt: "Preply logo"
  },
  {
    name: "Tamimi Group",
    logo: tamimiLogo,
    alt: "Tamimi Group logo"
  },
  {
    name: "Allica Bank",
    logo: allicaLogo,
    alt: "Allica Bank logo"
  },
  {
    name: "IKEA",
    logo: ikeaLogo,
    alt: "IKEA logo"
  },
  {
    name: "IKANO",
    logo: ikanoLogo,
    alt: "IKANO logo"
  }
];

export default function Clients() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();

  // Triple the array for seamless infinite scroll
  const duplicatedClients = [...clientsData, ...clientsData, ...clientsData];

  return (
    <section className="bg-primary-white px-4 py-10 lg:pb-25 sm:px-6 md:px-20 lg:px-28 2xl:px-36">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-[48px]/[114%]"
      >
        <span className="pr-2 md:pr-4">My</span>
        <span className="font-extrabold">Clients</span>
      </motion.h2>

      {/* Horizontal Sliding Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12 lg:gap-16"
          animate={{
            x: [0, -33.33 + "%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0"
            >
              <div
                className="group flex h-40 w-40 items-center justify-center rounded border-2 bg-primary-white p-6 transition-all duration-300 hover:bg-primary-black sm:h-[186px] sm:w-[186px] sm:p-10"
                onMouseEnter={() => handleMouseEnter(150)}
                onMouseLeave={() => handleMouseLeave(40)}
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-primary-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-primary-white to-transparent z-10"></div>
      </div>
    </section>
  );
}