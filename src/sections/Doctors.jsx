import React from 'react';
import { DOCTORS } from '../data/hospitalData';
import { Award, UserCheck } from 'lucide-react';

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm tracking-wider uppercase bg-primary/10 px-4 py-1.5 rounded-full">
            Expert Clinical Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">
            Meet Our Specialist Doctors
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Our multidisciplinary medical team brings together international qualifications, decades of clinical practice, and compassionate patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div key={doc.id} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="h-64 overflow-hidden relative">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top hover:scale-105 transition duration-500" />
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Award className="w-3 h-3 text-primary" /> {doc.experience}
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900">{doc.name}</h4>
                <p className="text-xs text-primary font-semibold mt-0.5">{doc.title}</p>
                <p className="text-[11px] text-slate-500 mt-2 font-mono">{doc.qualifications}</p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">{doc.intro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}