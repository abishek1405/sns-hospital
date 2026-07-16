import React from 'react';
import { motion } from 'framer-motion';
import { IVF_SERVICES, IVF_TIMELINE } from '../data/hospitalData';
import { Microscope, Dna, ShieldCheck, Snowflake, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap = { Microscope, Dna, ShieldCheck, Snowflake, Activity, Sparkles };

export default function FortiusIVF() {
  return (
    <section id="ivf-centre" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm tracking-wider uppercase bg-primary/10 px-4 py-1.5 rounded-full">
            Centre of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">
            Fortius IVF & Fertility Centre
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Integrated advanced reproductive technology, strict laminar flow embryology labs, genetic screening, and highly experienced fertility consultants to help fulfill your dream of parenthood.
          </p>
        </div>

        {/* July 2026 Special Offer Showcase Card */}
        <div className="mb-16 bg-gradient-to-r from-primary to-accent text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                World IVF Day — July 2026 Special
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">Precious Yet Affordable — Free IVF Camp</h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Celebrating reproductive freedom with FREE Counselling, FREE Consultation, ₹999 USG Pelvis + Semen Analysis package, and 15% OFF complete IVF treatment packages throughout July 2026.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow">
                  FREE Counselling & Consultation
                </span>
                <span className="bg-white/10 border border-white/30 px-4 py-2 rounded-xl text-sm font-semibold">
                  15% OFF IVF Packages
                </span>
              </div>
            </div>
            <div className="lg:col-span-4 text-right">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-black">₹999 ONLY</div>
                <div className="text-xs uppercase tracking-wide opacity-80 mt-1">USG Pelvis + Semen Analysis</div>
                <a href="#contact" className="mt-4 inline-block w-full bg-white text-primary font-bold py-2.5 rounded-xl hover:bg-blue-50 transition">
                  Book Camp Slot
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {IVF_SERVICES.map((serv, index) => {
            const Icon = iconMap[serv.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="p-3 bg-secondary/10 text-secondary rounded-xl w-max mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{serv.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{serv.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* IVF Journey Timeline */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Your Step-by-Step IVF Journey</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IVF_TIMELINE.map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="text-2xl font-extrabold text-primary bg-primary/10 px-3 py-1.5 rounded-xl">
                  {item.step}
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 text-base">{item.title}</h5>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}