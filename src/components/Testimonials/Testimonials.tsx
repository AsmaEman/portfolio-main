import { motion } from "motion/react";
import { useCursorHover } from "../../hooks/useCursorHover";

interface TestimonialType {
  id: string;
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
  isHighlighted?: boolean;
}

const testimonialsData: TestimonialType[] = [
  {
    id: "netsol-manager",
    name: "Sarah Ahmed",
    role: "Engineering Manager at NETSOL",
    testimonial: "Asma consistently delivered high-quality frontend solutions that improved our platform's performance by 30%. Her expertise in Angular and ability to mentor junior developers made her an invaluable team member.",
    avatar: "/src/assets/testimonials/sarah.jpg",
    isHighlighted: false
  },
  {
    id: "freelance-client",
    name: "Michael Chen",
    role: "CTO at Polix Analytics",
    testimonial: "Working with Asma on our React + .NET Core analytics dashboard was exceptional. She reduced our reporting time by 30% and delivered exactly what we needed. Her technical skills and communication are top-notch.",
    avatar: "/src/assets/testimonials/michael.jpg",
    isHighlighted: true
  },
  {
    id: "pepsico-lead",
    name: "David Rodriguez",
    role: "Tech Lead at PepsiCo",
    testimonial: "Asma's work on automating our supply chain workflows was impressive. She quickly understood our business requirements and delivered solutions that reduced manual processes by 15%. Highly recommended!",
    avatar: "/src/assets/testimonials/david.jpg",
    isHighlighted: false
  }
];

export default function Testimonials() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();

  return (
    <section className="bg-primary-white px-4 py-16 sm:px-6 sm:py-20 md:px-15 md:py-24 xl:px-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-normal text-black md:text-5xl lg:text-6xl"
        >
          My <span className="font-bold">Testimonial</span>
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 ${testimonial.isHighlighted
                ? 'bg-black text-white shadow-2xl'
                : 'bg-white text-black shadow-lg hover:shadow-xl'
                }`}
              onMouseEnter={() => handleMouseEnter(150)}
              onMouseLeave={() => handleMouseLeave(40)}
            >
              {/* Quote Icon */}
              <motion.div
                className={`absolute right-6 top-6 text-4xl opacity-20 ${testimonial.isHighlighted ? 'text-white' : 'text-black'
                  }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                "
              </motion.div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Avatar */}
                <motion.div
                  className="flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-gray-200">
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name} avatar`}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          // Fallback to a colored circle with initials if image fails
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                                ${testimonial.name.split(' ').map(n => n[0]).join('')}
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    {/* Quote bubble */}
                    <div className={`absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${testimonial.isHighlighted
                      ? 'bg-white text-black'
                      : 'bg-black text-white'
                      }`}>
                      "
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial Text */}
                <motion.p
                  className={`text-center leading-relaxed ${testimonial.isHighlighted ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {testimonial.testimonial}
                </motion.p>

                {/* Divider */}
                <div className="flex justify-center">
                  <div className={`h-px w-16 ${testimonial.isHighlighted ? 'bg-white/30' : 'bg-black/20'
                    }`} />
                </div>

                {/* Name and Role */}
                <div className="text-center space-y-1">
                  <motion.h4
                    className={`text-lg font-bold ${testimonial.isHighlighted ? 'text-white' : 'text-black'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonial.name}
                  </motion.h4>
                  <p className={`text-sm ${testimonial.isHighlighted ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-300 ${testimonial.isHighlighted
                ? 'group-hover:border-white/20'
                : 'group-hover:border-black/10'
                }`} />

              {/* Background Pattern */}
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-5 ${testimonial.isHighlighted
                ? 'bg-gradient-to-br from-white/10 to-transparent'
                : 'bg-gradient-to-br from-black/5 to-transparent'
                }`} />
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-20 top-32 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute right-20 bottom-32 h-40 w-40 rounded-full bg-purple-500/5 blur-3xl" />
      </div>
    </section>
  );
}