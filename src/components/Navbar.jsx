import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import snslogo from '../assets/sns.webp';

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Fortius IVF", href: "#ivf-centre" },
    { name: "Services", href: "#departments" },
    { name: "Facilities", href: "#facilities" },
    { name: "Doctors", href: "#doctors" },
    { name: "Founder Tribute", href: "#founder" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="text-white p-2 rounded-xl font-black text-xl">
            <img src={snslogo} alt="SNS Hospital Logo" className="w-full h-full object-cover" style={{ width: '50px' }} />
          </div>
          <div>
            <div className="font-extrabold text-slate-800 text-lg leading-tight tracking-tight">SNS HOSPITAL</div>
            <div className="text-[10px] text-primary font-bold tracking-wider">FORTIUS FERTILITY</div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-600 hover:text-primary font-medium text-sm transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:9444410811" className="flex items-center gap-2 text-slate-700 font-semibold text-sm hover:text-primary">
            <Phone className="w-4 h-4 text-primary" /> 944 44 108 11
          </a>
          <button onClick={onBookClick} className="bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-blue-500/20 flex items-center gap-2 transition-transform active:scale-95">
            <Calendar className="w-4 h-4" /> Book Appointment
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-slate-700">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="block text-slate-700 font-medium hover:text-primary">
              {link.name}
            </a>
          ))}
          <button onClick={() => { setMobileOpen(false); onBookClick(); }} className="w-full bg-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" /> Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}