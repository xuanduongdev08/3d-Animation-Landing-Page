import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface BookCallModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: 'AI Prototyping & MVP Sprint',
    timeline: 'Within 2-4 weeks',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
    >
      <motion.div 
        id="book-call-modal-content"
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 15 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#121216] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle2 className="w-14 h-14 text-[#ff4e3e] mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white mb-2">Sprint Discovery Booked!</h3>
            <p className="text-zinc-400 text-sm max-w-xs">
              Our lead AI engineer will review your stack and reach out within 2 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#ff503e] mb-2 uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>Sprint Discovery Call</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
              Book a 20-Min AI Sprint Session
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">
              Let&apos;s map out your architecture, feature feasibility, and delivery timeline.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#191920] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff503e] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#191920] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff503e] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Target AI Scope
                </label>
                <select
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full bg-[#191920] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff503e] transition-colors"
                >
                  <option>AI Prototyping & MVP Sprint (2 Weeks)</option>
                  <option>Full-Stack AI Agent & LLM Workflow (4 Weeks)</option>
                  <option>Design System & Art Direction Sprint</option>
                  <option>Enterprise AI Architecture & Tuning</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#e33428] via-[#eb3e31] to-[#ff5341] hover:brightness-110 active:scale-[0.98] text-white py-3 rounded-full text-sm font-semibold shadow-[0_0_24px_rgba(235,53,41,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  <span>Confirm Discovery Call</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

