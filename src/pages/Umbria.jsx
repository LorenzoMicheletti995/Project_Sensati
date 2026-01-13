import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Umbria() {
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

      {/* 1. HERO UMBRIA */}
      <section className="relative h-[70vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/Foto dal basso/©TrabalzaJin25_TIJ5418.jpg"
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
            The Region
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white text-5xl md:text-7xl font-serif italic mb-6"
          >
            Umbria
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/80 font-light uppercase tracking-[0.2em] text-[10px] md:text-xs max-w-lg mx-auto"
          >
            The Green Heart of Italy
          </motion.p>
        </div>
      </section>

      {/* 2. INTRODUZIONE */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-50 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-1"></div>
            <img src="/images/Foto dal basso/©TrabalzaJin25_TIJ5378.jpg" className="relative z-10 w-full rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className={overlineStyle}>Land of Saints and Warriors</span>
            <h2 className={titleStyle}>Authenticity <br /> at its purest.</h2>
            <p className={paragraphStyle}>
              Umbria is the only Italian region without a coastline that remains untouched by mass tourism.
              It is a land of mystical silence, rolling hills, and medieval hilltowns.
            </p>
            <p className={paragraphStyle}>
              From the truffles of Norcia to the wines of Sagrantino, Umbria offers a culinary journey
              rooted in centuries of tradition. Sensati is perfectly positioned to explore this
              richness while remaining a secluded sanctuary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. LIFESTYLE GRID */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Umbrian Lifestyle</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl mb-6 block text-blue-300">🍷</span>
              <h3 className="font-serif text-xl mb-4">Food & Wine</h3>
              <p className="font-light text-slate-500 text-sm leading-relaxed">
                Home to Sagrantino di Montefalco and superior olive oils. A paradise for gourmets.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl mb-6 block text-blue-300">🌲</span>
              <h3 className="font-serif text-xl mb-4">Untouched Nature</h3>
              <p className="font-light text-slate-500 text-sm leading-relaxed">
                Dense forests, waterfalls, and hiking trails that have remained unchanged for centuries.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl mb-6 block text-blue-300">🕊️</span>
              <h3 className="font-serif text-xl mb-4">Spirituality</h3>
              <p className="font-light text-slate-500 text-sm leading-relaxed">
                The land of St. Francis of Assisi and St. Benedict. A place for spiritual retreat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-28 text-center px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-8">Ready to invest in this land?</h2>
        <Link to="/sensati">
          <button className="border border-slate-900 text-slate-900 px-10 py-4 rounded-full font-light tracking-[0.2em] uppercase text-[10px] md:text-xs hover:bg-slate-900 hover:text-white transition-all duration-500">
            View the Project
          </button>
        </Link>
      </section>

    </div>
  );
}