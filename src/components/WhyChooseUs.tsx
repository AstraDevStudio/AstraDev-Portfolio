import { motion } from "framer-motion";

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "We dive deep into your brand, audience, and goals to craft a strategy that actually works.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Design",
    desc: "Pixel-perfect mockups and prototypes that look stunning and feel intuitive on every device.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Develop",
    desc: "Clean, performant code built with modern frameworks. No bloat, no shortcuts — just solid engineering.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Launch",
    desc: "Rigorous testing, seamless deployment, and ongoing support to keep everything running smooth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-[#08021E] py-28 overflow-hidden" aria-label="Why choose Astradev">
      {/* Background glow matching site theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-800/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12">
        {/* Section header — same style as Features/HeroParallax */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-[60rem] mb-20"
        >
          <h2 className="md:text-6xl text-4xl text-white">How We Work</h2>
          <div className="flex flex-col mt-5 md:text-3xl text-lg text-white font-thin font-Josefin_Sans">
            <p>A clear process. No guesswork. No wasted time.</p>
            <p>From first call to final deploy — we've got it mapped out.</p>
          </div>
        </motion.div>

        {/* Process cards — glassmorphism matching StackedCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-4xl md:h-[18rem] h-auto p-10 bg-radial from-gray-500/20 from-30% to-purple-950/50 shadow-md shadow-gray-800 backdrop-blur-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-purple-600/0 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Step number watermark */}
              <span className="absolute -bottom-4 -right-2 text-[8rem] font-Rammetto-One text-white/[0.03] leading-none pointer-events-none select-none">
                {item.step}
              </span>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-purple-400/80 group-hover:text-purple-300 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-purple-500/40 font-Josefin_Sans text-sm tracking-[0.3em] uppercase">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="text-white md:text-[2.5rem] text-[1.8rem] font-Josefin_Sans mb-3">{item.title}</h3>
                </div>
                <p className="text-gray-400 font-Josefin_Sans md:text-lg text-base font-extralight leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
