import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShieldAlert, Sparkles, Award } from 'lucide-react';
import snshopital from '../assets/snshopital.png';
export default function Hero({ onBookClick }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* World IVF Day 2026 Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-md"
        >
          <Sparkles className="w-4 h-4 animate-spin" />
          <span>July 2026 Special: World IVF Day Free Camp & 15% Off Packages!</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Compassion. Care. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Excellence in Healthcare.
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              SNS Hospital & Fortius IVF Fertility Centre in Neyveli brings over four decades of trusted clinical expertise, state-of-the-art reproductive technologies, and compassionate patient care.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button onClick={onBookClick} className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-semibold shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5">
                Book Free Consultation
              </button>
              <a href="#ivf-centre" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all">
                Explore Fortius IVF
              </a>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 mt-8">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase">Emergency</h4>
                  <p className="text-xs text-slate-500">24/7 Obstetric Care</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-secondary" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase">Accredited</h4>
                  <p className="text-xs text-slate-500">NABH Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-accent" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase">Success Rate</h4>
                  <p className="text-xs text-slate-500">World-Class IVF Lab</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src={snshopital}
                alt="SNS Hospital & Fortius Fertility Center Facility"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="bg-primary/90 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider w-max mb-2">
                  NABH Accredited Hospital
                </span>
                <h3 className="text-xl font-bold">Fortius IVF & Fertility Centre</h3>
                <p className="text-xs text-slate-200">A Unit of SNS Hospital Neyveli</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}