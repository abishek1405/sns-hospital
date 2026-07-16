import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';

export default function Loader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary">
            <HeartPulse className="w-12 h-12 animate-pulse" />
          </div>
          <div className="text-left">
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">SNS HOSPITAL</h1>
            <p className="text-xs tracking-widest text-primary font-bold uppercase">Fortius IVF & Fertility Centre</p>
          </div>
        </div>

        <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden relative mt-2">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-r from-primary via-secondary to-accent"
          />
        </div>
        <p className="text-sm font-medium text-slate-400 mt-3 animate-pulse">Loading Healthcare Excellence...</p>
      </motion.div>
    </motion.div>
  );
}