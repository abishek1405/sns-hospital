import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Baby, 
  Activity, 
  Stethoscope, 
  Syringe, 
  Flame, 
  Bone, 
  Eye, 
  Pill, 
  Microscope,
  Scissors,
  ShieldAlert
} from 'lucide-react';

export default function Departments() {
  const departments = [
    {
      title: "Obstetrics & Gynecology",
      icon: Baby,
      desc: "Complete comprehensive prenatal, high-risk pregnancy management, and painless childbirth."
    },
    {
      title: "Fortius IVF & Fertility",
      icon: Flame,
      desc: "State-of-the-art ART laboratory, ICSI, blastocyst culture, and genetic screening."
    },
    {
      title: "Laparoscopic Surgery",
      icon: Scissors,
      desc: "Minimally invasive keyhole procedures for faster recovery and minimal scarring."
    },
    {
      title: "24/7 ICU & Emergency",
      icon: ShieldAlert,
      desc: "Fully equipped intensive care unit staffed with critical care specialists and round-the-clock doctors."
    },
    {
      title: "Pediatrics & NICU",
      icon: Stethoscope,
      desc: "Level-III Neonatal ICU for specialized care of newborns and premature infants."
    },
    {
      title: "Cardiology & Echo",
      icon: Heart,
      desc: "Advanced cardiac diagnostics, 2D Echo, ECG, and preventive cardiovascular screening."
    },
    {
      title: "Orthopedics & Joint Care",
      icon: Bone,
      desc: "Trauma surgery, fracture care, joint preservation, and rehabilitation."
    },
    {
      title: "Diabetology & General Medicine",
      icon: Syringe,
      desc: "Endocrine evaluation, metabolic disease management, and systemic disease care."
    },
    {
      title: "Advanced Diagnostics & USG",
      icon: Microscope,
      desc: "High-resolution 3D/4D ultrasound imaging, Doppler scans, and automated pathology lab."
    }
  ];

  return (
    <section id="departments" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs uppercase bg-primary/10 px-4 py-1.5 rounded-full tracking-wider">
            Clinical Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Our Departments & Medical Specialties
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Delivering holistic multispeciality care through specialized medical units, expert doctors, and advanced diagnostic infrastructure.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="p-3.5 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white rounded-2xl w-max transition-colors duration-300 mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{dept.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{dept.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}