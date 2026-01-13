import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sensati from './pages/Sensati';
import Spoleto from './pages/Spoleto';
import Umbria from './pages/Umbria';

// COMPONENTE NAVBAR COORDINATO AL LOGO
function Navbar() {
  const navLinkStyle = "font-light tracking-[0.2em] uppercase text-[10px] md:text-xs hover:text-blue-600 transition-all duration-300";
  
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-6 md:p-10 bg-white sticky top-0 z-50 shadow-sm gap-6 md:gap-0">
      {/* LOGO */}
      <Link to="/" className="text-xl md:text-2xl font-light tracking-[0.4em] uppercase text-slate-900">
        Sensati
      </Link>

      {/* MENU */}
      <ul className="flex flex-wrap justify-center gap-6 md:gap-10 text-slate-500">
        <li><Link to="/" className={navLinkStyle}>Home</Link></li>
        <li><Link to="/sensati" className={navLinkStyle}>Sensati</Link></li>
        <li><Link to="/spoleto" className={navLinkStyle}>Spoleto</Link></li>
        <li><Link to="/umbria" className={navLinkStyle}>Umbria</Link></li>
        <li>
          <Link to="/sensati" className={`${navLinkStyle} text-blue-600 font-medium`}>
            Invest with us
          </Link>
        </li>
        <li>
          <a href="mailto:aparenti@platinum-partners.swiss" className={navLinkStyle}>
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}

// FUNZIONE PRINCIPALE
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sensati" element={<Sensati />} />
          <Route path="/spoleto" element={<Spoleto />} />
          <Route path="/umbria" element={<Umbria />} />
        </Routes>

        {/* FOOTER COORDINATO */}
        <footer className="py-20 bg-slate-50 border-t border-slate-100 text-center">
          <p className="font-light tracking-[0.3em] uppercase text-[10px] text-slate-400">
            © 2026 Sensati — Spoleto, Umbria
          </p>
        </footer>
      </div>
    </Router>
  );
}