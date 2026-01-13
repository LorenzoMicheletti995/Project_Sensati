export default function Contact() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-4xl font-bold mb-6">Pronto a far decollare il tuo progetto?</h3>
        <p className="text-blue-100 text-lg mb-10">
          Contattaci oggi per una consulenza gratuita e scopri come possiamo aiutarti.
        </p>
        <a 
          href="mailto:info@esempio.it" 
          className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition"
        >
          Invia una Email
        </a>
      </div>
    </section>
  );
}