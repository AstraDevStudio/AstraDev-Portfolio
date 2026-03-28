import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "⬢" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Figma", icon: "🎯" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Python", icon: "🐍" },
  { name: "Kotlin", icon: "K" },
  { name: "Three.js", icon: "3D" },
  { name: "GSAP", icon: "🟢" },
  { name: "AWS", icon: "☁️" },
];

const TechStack = () => {
  return (
    <section className="relative w-full bg-[#08021E] py-20 overflow-hidden" aria-label="Technologies we use">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-500 font-Josefin_Sans text-lg mb-10 tracking-widest uppercase"
        >
          Technologies we work with
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-radial from-gray-500/10 from-30% to-purple-950/30 border border-white/5 hover:border-purple-500/30 backdrop-blur-xl shadow-sm shadow-gray-800/50 cursor-default transition-all duration-300"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="text-white/80 font-Josefin_Sans text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
