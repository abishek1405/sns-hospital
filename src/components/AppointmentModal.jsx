import React, { useState } from 'react';
import { X, Calendar, User, Phone, CheckCircle } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600">
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-slate-800">Appointment Request Received!</h3>
            <p className="text-slate-500 text-sm">Our medical receptionist will contact you shortly to confirm your slot.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Book an Appointment</h3>
            <p className="text-xs text-slate-500">Fortius IVF & SNS Hospital Neyveli</p>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase">Patient Name</label>
              <div className="relative mt-1">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input required type="text" placeholder="John / Jane Doe" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase">Phone Number</label>
              <div className="relative mt-1">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input required type="tel" placeholder="94444 10811" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase">Department</label>
              <select className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary outline-none">
                <option>Fortius IVF & Fertility Centre</option>
                <option>Obstetrics & Gynecology</option>
                <option>Laparoscopic Surgery</option>
                <option>General Medicine & ICU</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase">Preferred Date</label>
              <input required type="date" className="w-full mt-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary outline-none" />
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 transition mt-2">
              Confirm Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
}