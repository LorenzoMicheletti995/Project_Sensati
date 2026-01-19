import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Home() {
  // Parallax Hooks
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Styles
  const overlineStyle = "font-light tracking-[0.4em] uppercase text-[10px] md:text-xs text-blue-600 mb-4 block";
  const titleStyle = "font-serif text-3xl md:text-5xl text-slate-900 leading-[1.1]";
  const paragraphStyle = "font-light text-slate-500 text-sm md:text-base leading-relaxed mt-6 max-w-lg";

  return (
    <div className="bg-white overflow-x-hidden" ref={containerRef}>

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 w-full h-full">
          <img
            src="/images/Foto dal basso/©TrabalzaJin25_TIJ5390.jpg"
            alt="Sensati Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
        >
          <span className="font-light tracking-[0.6em] uppercase text-xs md:text-sm mb-6 block text-blue-100/80">
            Umbria, Italy
          </span>
          <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8">
            “Non abbiamo nulla: <br />
            <span className="text-blue-200">perciò abbiamo tutto.</span>”
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce mt-12"
          >
            <svg className="w-6 h-6 mx-auto text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. IL PROGETTO */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className={overlineStyle}>Il Progetto</span>
            <h2 className={titleStyle}>
              Un ritorno alle radici, <br /> tra silenzio e architettura.
            </h2>
            <p className={paragraphStyle}>
              Sensati non è solo un luogo, è una filosofia di vita. Immerso nelle colline umbre,
              rappresenta l'essenza della semplicità ritrovata. Un rifugio dove il tempo rallenta
              e la natura riprende i suoi spazi.
            </p>
            <div className="mt-10">
              <Link to="/sensati" className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-slate-900 border-b border-slate-300 pb-1 hover:border-blue-600 transition-all">
                Scopri di più
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-50 z-0 rounded-2xl transform rotate-2 transition-transform group-hover:rotate-1"></div>
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src="/images/Foto dal basso/©TrabalzaJin25_TIJ5365.jpg"
              className="relative z-10 w-full rounded-lg shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Architettura Sensati"
            />
          </div>
        </div>
      </section>

      {/* 3. BENTO GALLERY */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className={overlineStyle}>Visual Diary</span>
            <h2 className={titleStyle}>Frammenti di Bellezza</h2>
          </div>
          <p className="max-w-xs text-sm font-light text-slate-500 text-right md:text-left">
            Ogni angolo racconta una storia antica, <br /> ogni pietra ha una memoria.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl relative group"
          >
            <img src="/images/Foto dal basso/©TrabalzaJin25_TIJ5383.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 overflow-hidden rounded-2xl relative group min-h-[250px]"
          >
            <img src="/images/Foto dal basso/©TrabalzaJin25_TIJ5402.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="overflow-hidden rounded-2xl relative group min-h-[250px]"
          >
            <img src="/images/Foto dal basso/©TrabalzaJin25_TIJ5420.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="overflow-hidden rounded-2xl relative group min-h-[250px]"
          >
            <img src="/images/Foto dal basso/©TrabalzaJin25_TIJ5416.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </motion.div>
        </div>
      </section>

      {/* 4. ESSENZA */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <img
            src="/images/Foto dal basso/©TrabalzaJin25_TIJ5390.jpg"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <span className="font-light tracking-[0.5em] uppercase text-xs mb-6 block text-blue-200">
            L'Essenza
          </span>
          <h2 className="font-serif italic text-4xl md:text-6xl leading-tight">
            “Qui, la ricchezza non si conta: <br />
            <span className="text-white/70">si contempla.</span>”
          </h2>
        </motion.div>
      </section>

      {/* 5. FOOTER CALL TO ACTION */}
      <section className="py-28 text-center px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 mb-10">Ready to explore?</h2>
          <Link to="/sensati">
            <button className="border border-slate-900 text-slate-900 px-10 py-4 rounded-full font-normal tracking-[0.2em] uppercase text-[10px] md:text-xs hover:bg-slate-900 hover:text-white transition-all duration-500">
              Scopri il progetto
            </button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}