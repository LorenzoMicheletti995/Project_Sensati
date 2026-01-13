import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Spoleto() {
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

      {/* 1. HERO SPOLETO */}
      <section className="relative h-[70vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/Foto dal basso/©TrabalzaJin25_TIJ5375.jpg"
          className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white/0"></div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-light tracking-[0.6em] uppercase text-xs md:text-sm text-blue-200 mb-6 block"
          >
            The City
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white text-5xl md:text-7xl font-serif italic mb-6"
          >
            Spoleto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/80 font-light uppercase tracking-[0.2em] text-[10px] md:text-xs max-w-lg mx-auto"
          >
            Art, Culture, and History just 20 minutes away
          </motion.p>
        </div>
      </section>

      {/* 2. INTRODUZIONE */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className={overlineStyle}>A Cultural Gem</span>
            <h2 className={titleStyle}>The Festival of <br /> Two Worlds.</h2>
            <p className={paragraphStyle}>
              Spoleto is one of Umbria's most fascinating cities, known worldwide for the
              <strong> Festival dei Due Mondi</strong>, an international event of music, art, and culture.
              Walking through its streets means breathing in history, from the Roman Theater
              to the majestic Rocca Albornoziana.
            </p>
            <p className={paragraphStyle}>
              Living in Sensati means having this cultural richness just a short drive away,
              combining the absolute silence of nature with the vibrant artistic life of the city.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images/Foto dal basso/©TrabalzaJin25_TIJ5393.jpg" className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8 grayscale hover:grayscale-0 transition-all duration-700" />
            <img src="/images/Foto dal basso/©TrabalzaJin25_TIJ5397.jpg" className="w-full h-64 object-cover rounded-2xl shadow-lg -mb-8 grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHTS */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className={overlineStyle}>What to see</span>
            <h2 className={titleStyle}>Heritage & Beauty</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center bg-white p-12 rounded-3xl shadow-sm">
            <div className="space-y-4 hover:-translate-y-2 transition-transform duration-500 p-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
              </div>
              <h3 className="font-serif text-xl">The Duomo</h3>
              <p className="font-light text-slate-500 text-sm leading-relaxed">
                A masterpiece of Romanesque architecture set against the backdrop of the hills.
              </p>
            </div>
            <div className="space-y-4 hover:-translate-y-2 transition-transform duration-500 p-4 border-l border-r border-slate-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 className="font-serif text-xl">Rocca Albornoziana</h3>
              <p className="font-light text-slate-500 text-sm leading-relaxed">
                The ancient fortress dominating the city, symbol of power and history.
              </p>
            </div>
            <div className="space-y-4 hover:-translate-y-2 transition-transform duration-500 p-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="font-serif text-xl">Ponte delle Torri</h3>
              <p className="font-light text-slate-500 text-sm leading-relaxed">
                An iconic aqueduct bridge connecting the Rocca to the Monteluco woods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-28 text-center px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-8">Experience the silence near the city.</h2>
        <Link to="/sensati">
          <button className="border border-slate-900 text-slate-900 px-10 py-4 rounded-full font-light tracking-[0.2em] uppercase text-[10px] md:text-xs hover:bg-slate-900 hover:text-white transition-all duration-500">
            Discover Sensati
          </button>
        </Link>
      </section>

    </div>
  );
}