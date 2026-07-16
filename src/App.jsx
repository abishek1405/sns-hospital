import React, { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import FortiusIVF from './sections/FortiusIVF';
import Doctors from './sections/Doctors';
import FounderSpotlight from './sections/FounderSpotlight';
import AppointmentModal from './components/AppointmentModal';
import About from './sections/About';
import Departments from './sections/Departments';
import { HOSPITAL_INFO } from './data/hospitalData';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';


export default function App() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-primary selection:text-white">
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar onBookClick={() => setModalOpen(true)} />
          
          <main>
            <Hero onBookClick={() => setModalOpen(true)} />
            <About />
            <FortiusIVF />
            <Doctors />
            <Departments />
            <FounderSpotlight />
            {/* Contact Section */}
            <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <span className="text-primary font-bold text-xs uppercase bg-primary/10 px-3 py-1 rounded-full">Contact Us</span>
                  <h2 className="text-3xl font-extrabold text-slate-900">Get in Touch with SNS Hospital</h2>
                  <p className="text-slate-600 text-sm">{HOSPITAL_INFO.address}</p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <Phone className="w-5 h-5 text-primary" /> {HOSPITAL_INFO.phone1} / {HOSPITAL_INFO.phone2}
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <Mail className="w-5 h-5 text-primary" /> {HOSPITAL_INFO.email}
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <Globe className="w-5 h-5 text-primary" /> {HOSPITAL_INFO.website}
                    </div>
                  </div>
                </div>

                <div className="h-80 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <iframe
                    title="SNS Hospital Location"
                    src="https://maps.google.com/maps?q=SNS%20Hospital%20Neyveli&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-slate-900 text-slate-400 py-10 text-center text-xs border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4">
              <p>© 2026 SNS Hospital & Fortius IVF Fertility Centre. All Rights Reserved.</p>
            </div>
          </footer>

          <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
      )}
    </div>
  );
}