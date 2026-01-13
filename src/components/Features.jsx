import { CheckCircle, Zap, Shield, Smartphone } from 'lucide-react';

const features = [
  { title: "Velocità", desc: "Siti ottimizzati per caricare in meno di un secondo.", icon: <Zap className="text-blue-500" /> },
  { title: "Responsive", desc: "Perfetto su smartphone, tablet e computer.", icon: <Smartphone className="text-blue-500" /> },
  { title: "Sicurezza", desc: "Certificati SSL e codice pulito e sicuro.", icon: <Shield className="text-blue-500" /> },
  { title: "Qualità", desc: "Design moderno curato nei minimi dettagli.", icon: <CheckCircle className="text-blue-500" /> },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Perché scegliere noi</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 border border-slate-100 rounded-2xl hover:shadow-lg transition">
              <div className="mb-4">{f.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}