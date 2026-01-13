import { motion } from "framer-motion";
import { useState } from "react";

export default function Sensati() {
  const [isTourActive, setIsTourActive] = useState(false);

  // STYLES
  const overlineStyle = "font-light tracking-[0.4em] uppercase text-[10px] md:text-xs text-blue-600 mb-4 block";
  const titleStyle = "font-serif text-3xl md:text-5xl text-slate-900 leading-[1.1]";
  const paragraphStyle = "font-light text-slate-500 text-sm md:text-base leading-relaxed mt-6";

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden font-light">

      {/* 1. HERO SENSATI */}
      <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/Foto dal basso/©TrabalzaJin25_TIJ5390.jpg"
          className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-slate-900/90"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-light tracking-[0.6em] uppercase text-xs md:text-sm text-blue-200 mb-6 block"
          >
            The Project
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white text-5xl md:text-7xl font-serif italic mb-6"
          >
            Sensati
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/70 font-light uppercase tracking-[0.2em] text-[10px] md:text-xs max-w-lg mx-auto leading-loose"
          >
            A unique investment opportunity <br className="hidden md:block" /> in the green heart of Umbria
          </motion.p>
        </div>
      </section>

      {/* 2. INVESTMENT OVERVIEW */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className={overlineStyle}>The Vision</span>
            <h2 className={titleStyle}>Barefoot Luxury & <br />Slow Living.</h2>
            <p className={paragraphStyle}>
              Sensati is a uniquely attractive location for hospitality projects combining nature immersion
              with understated, refined, unpretentious luxury. The property ideally fits the
              “barefoot luxury” concept: privacy, simplicity, elegance, and authenticity.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
              <div>
                <span className="text-blue-600 block text-xs tracking-widest uppercase mb-2">Area</span>
                <span className="text-slate-900 text-xl font-serif">121 Hectares</span>
              </div>
              <div>
                <span className="text-blue-600 block text-xs tracking-widest uppercase mb-2">Altitude</span>
                <span className="text-slate-900 text-xl font-serif">800 MT</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
            </div>
            <h3 className="font-serif text-2xl mb-8 text-slate-800">Key Highlights</h3>
            <ul className="space-y-6">
              {[
                "Reconstruction of a medieval hamlet in Spoleto.",
                "Naturally restorative environment: sunlight, pure air and absolute silence.",
                "Untouched woods well known for spontaneous black truffle production.",
                "Private natural water source on property."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-slate-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. VIRTUAL TOUR */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-light tracking-[0.4em] uppercase text-xs text-blue-400 mb-4 block">
              Digital Exploration
            </span>
            <h3 className="font-serif italic text-4xl md:text-5xl">Virtual Tour 360°</h3>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10"
            onMouseLeave={() => setIsTourActive(false)}
          >
            <iframe
              src="https://manuelm140.sg-host.com/virtualtours/sensati/?wheel=0"
              className={`absolute inset-0 w-full h-full border-none transition-opacity duration-700 ${isTourActive ? 'opacity-100' : 'opacity-40'}`}
              title="Sensati Virtual Tour"
              allowFullScreen
              style={{ pointerEvents: isTourActive ? 'auto' : 'none' }}
            ></iframe>

            {!isTourActive && (
              <div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer bg-black/20 backdrop-blur-sm transition-all hover:bg-black/10 hover:backdrop-blur-none"
                onClick={() => setIsTourActive(true)}
              >
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-md mb-6 animate-pulse">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <p className="font-light tracking-[0.2em] uppercase text-xs text-white">
                  Click to explore the ruins
                </p>
              </div>
            )}
          </motion.div>

          <div className="flex justify-center mt-8 gap-8 opacity-50 text-[10px] tracking-widest uppercase">
            <span>Scroll to Zoom</span>
            <span>•</span>
            <span>Drag to Navigate</span>
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC FACTORS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <span className={overlineStyle}>Strategic Advantage</span>
            <h2 className={titleStyle}>ZES Unica: <br />Fiscal Benefits</h2>
            <p className={paragraphStyle}>
              In November 2025, Umbria was officially included in the “ZES Unica”.
              This offers attractive administrative and fiscal advantages: tax credits up to 40%
              of invested capital and a "Sportello Unico" for digital authorization procedures.
            </p>
            <div className="mt-8 flex gap-4">
              <span className="px-4 py-2 bg-blue-50 text-blue-800 text-xs tracking-widest uppercase rounded-lg">Tax Credit 40%</span>
              <span className="px-4 py-2 bg-blue-50 text-blue-800 text-xs tracking-widest uppercase rounded-lg">Fast Track</span>
            </div>
          </div>
          <div className="md:col-span-5 bg-slate-900 text-white p-10 rounded-3xl shadow-xl">
            <h4 className="font-light tracking-[0.2em] uppercase text-xs text-blue-400 mb-8 border-b border-white/10 pb-4">Distances</h4>
            <ul className="space-y-6">
              {[
                { label: "Spoleto", time: "20 MIN" },
                { label: "Perugia Airport", time: "45 MIN" },
                { label: "Rome", time: "90 MIN" },
                { label: "Florence", time: "120 MIN" }
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-center text-sm font-light">
                  <span className="text-slate-300">{item.label}</span>
                  <span className="font-mono text-white">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. HISTORY */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute top-10 -left-10 w-full h-full border border-slate-200 rounded-2xl hidden md:block"></div>
            <img src="/images/Foto dal basso/©TrabalzaJin25_TIJ5365.jpg" className="relative z-10 rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl" />
          </div>
          <div className="order-1 md:order-2">
            <span className={overlineStyle}>The History</span>
            <h2 className={titleStyle}>A Medieval Legacy.</h2>
            <p className={paragraphStyle}>
              Founded between the 10th and 13th century, Sensati was a fortified rural hamlet.
              After 60 years of being uninhabited, it is now ready for a state-of-the-art
              reconstruction, without structural legacies.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-32 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="font-serif italic text-4xl mb-8">Ready to partner with us?</h2>
          <p className="font-light text-slate-500 text-xs uppercase tracking-[0.3em] mb-12 leading-relaxed">
            The owners are open to a sale of the property <br /> or to partner with investors.
          </p>

          <a
            href="mailto:aparenti@platinum-partners.swiss"
            className="inline-block bg-slate-900 text-white px-12 py-5 rounded-full font-light tracking-[0.2em] uppercase text-[10px] md:text-xs hover:bg-blue-900 transition-colors duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Contact the Owners
          </a>
        </motion.div>
      </section>

    </div>
  );
}