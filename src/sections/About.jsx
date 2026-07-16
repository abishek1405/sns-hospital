import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { HOSPITAL_INFO, STATS } from '../data/hospitalData';
import { ShieldCheck, Heart, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      desc: "Putting patient dignity, emotional comfort, and well-being at the heart of every treatment."
    },
    {
      icon: ShieldCheck,
      title: "Ethical Standards",
      desc: "NABH-accredited protocols ensuring transparent, honest, and affordable healthcare."
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      desc: "Backed by over four decades of trusted medical practice and internationally trained specialists."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs uppercase bg-primary/10 px-4 py-1.5 rounded-full tracking-wider">
            About Our Institution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Serving Families Since {HOSPITAL_INFO?.established || "1981"}
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            SNS Hospital is a premier multispeciality medical institution and NABH-accredited healthcare provider located in Neyveli, Tamil Nadu. Founded with a vision to deliver compassionate and accessible medicine, we have grown into a cornerstone for maternal and reproductive health.
          </p>
        </div>

        {/* Story & Vision/Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-r-2xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be the most trusted multispeciality hospital and fertility center in Southern Tamil Nadu, recognized for advanced medical innovation, clinical transparency, and unparalleled patient satisfaction.
              </p>
            </div>

            <div className="bg-slate-50 border-l-4 border-secondary p-6 rounded-r-2xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To provide high-quality, evidence-based medical treatment using state-of-the-art diagnostic and surgical equipment, while making world-class reproductive medicine accessible to every family.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition">
                  {Icon && (
                    <div className="p-3 bg-white text-primary rounded-xl w-max mx-auto shadow-sm mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                  )}
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{v.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Counter Statistics */}
        {STATS && STATS.length > 0 && (
          <div className="bg-gradient-to-r from-primary via-blue-600 to-accent rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {STATS.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-black tracking-tight">
                    {typeof CountUp === 'function' ? (
                      <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                    ) : (
                      <span>{stat.value}</span>
                    )}
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-xs font-medium text-blue-100 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}