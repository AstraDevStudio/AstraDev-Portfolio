import { motion } from "framer-motion";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const CTASection = () => {
  return (
    <section className="relative w-full bg-[#08021E] py-32 overflow-hidden" aria-label="Start your project">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[10%] w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-purple-400 font-Josefin_Sans text-lg tracking-widest uppercase mb-6"
        >
          Ready to build something great?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white text-5xl md:text-8xl font-Rammetto-One leading-tight mb-8"
        >
          LET'S MAKE IT
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            HAPPEN
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 font-Josefin_Sans text-lg md:text-2xl max-w-2xl mx-auto mb-12"
        >
          Whether it's a brand-new product or a redesign that needs to hit different — we're here for it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <InteractiveHoverButton
            text="Start a Project"
            className="rounded-full py-5 px-12 text-xl border-purple-500/50 text-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
