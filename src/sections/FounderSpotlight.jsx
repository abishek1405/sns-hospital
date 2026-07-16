import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Award, Star, Quote } from 'lucide-react';
import maralkodi from '../assets/maralkodi.png';

export default function FounderSpotlight() {
  return (
    <section id="founder" className="relative py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white overflow-hidden">
      {/* Subtle Glowing Radial Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Honoring Our Visionary Founder</span>
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 tracking-tight">
            Founder & Managing Director Spotlight
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait with Golden Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Golden Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-300/40 bg-slate-900 p-2">
                <img
                  src={maralkodi}
                  alt="Dr. Malarkodi - Founder & Managing Director"
                  className="w-full h-[480px] object-cover rounded-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-amber-500/30 text-center">
                  <h3 className="text-xl font-bold text-amber-200">Dr. Malarkodi</h3>
                  <p className="text-xs text-amber-400/80 uppercase font-medium">Founder & Managing Director</p>
                  <p className="text-[11px] text-slate-300 mt-1">M.B.B.S., D.G.O. • Specialist Ultrasonologist</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tribute & Biography */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Four Decades of Exemplary Healthcare Leadership
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Dr. Malarkodi established SNS Hospital in 1981 with a single noble vision: providing world-class, ethical, and affordable healthcare to families across Neyveli and Cuddalore district. Her pioneering expertise in obstetrics and ultrasonography laid the foundation for quality patient care.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-start gap-3">
                <Star className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white text-sm">Visionary Pioneer</h5>
                  <p className="text-xs text-slate-400 mt-0.5">Established Neyveli’s premier multispeciality medical hub.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-start gap-3">
                <Heart className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white text-sm">Compassionate Care</h5>
                  <p className="text-xs text-slate-400 mt-0.5">Dedicated to affordable women's healthcare and safety.</p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="relative bg-gradient-to-r from-amber-500/10 to-amber-900/10 border-l-4 border-amber-400 p-6 rounded-r-2xl my-6">
              <Quote className="w-8 h-8 text-amber-400/30 absolute top-4 right-4" />
              <p className="text-amber-100 font-serif italic text-base sm:text-lg">
                "Every healthy family begins with compassionate care. True medical success is measured by the trust and joy of the mothers and children we serve."
              </p>
              <p className="text-xs font-bold text-amber-400 mt-3 uppercase tracking-wider">— Dr. Malarkodi</p>
            </div>

            {/* Closing Tribute */}
            <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-center">
              <p className="text-sm font-medium text-amber-200">
                Thank you Dr. Malarkodi for building a trusted healthcare institution for thousands of families across generations.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}