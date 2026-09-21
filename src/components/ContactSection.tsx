import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Twitter, 
  Github, 
  Linkedin, 
  Globe,
  ArrowUp
} from 'lucide-react';
import { NavTab } from '../types';

interface ContactSectionProps {
  onNavClick?: (tab: NavTab) => void;
  onScrollToTop?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onNavClick,
  onScrollToTop,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const navLinks: { label: string; tab: NavTab }[] = [
    { label: 'Home', tab: 'Home' },
    { label: 'Services', tab: 'Services' },
    { label: 'Works', tab: 'Works' },
    { label: 'About', tab: 'About' },
    { label: 'Contact', tab: 'Contact' },
  ];

  return (
    <section 
      id="contact" 
      className="w-full bg-black pt-24 sm:pt-32 pb-12 px-6 sm:px-10 md:px-12 lg:px-16 border-t border-white/[0.06] relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 opacity-75"
        src="https://res.cloudinary.com/sgu1fi3k/video/upload/v1789974702/Let_s_build_something_iconic.mp4"
      />

      {/* Dark Gradient / Blur Overlay for Contrast */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] bg-black/65 backdrop-blur-[1px]"
      />

      <div className="w-full max-w-[1550px] mx-auto relative z-10">
        {/* Contact Header & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141418] border border-white/10 text-xs font-medium text-zinc-400 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e3e]"></span>
                <span>Get in Touch</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Let's build{' '}
                <span className="bg-gradient-to-r from-[#ff5b4c] via-[#eb3528] to-[#ff4e3e] bg-clip-text text-transparent">
                  something iconic.
                </span>
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base font-normal leading-relaxed mb-10 max-w-md">
                Have a project in mind, need to audit your user interface, or want to discuss an on-demand sprint? Drop us a line and our squad will reply within 2 hours.
              </p>

              {/* Direct Info Pills */}
              <div className="space-y-3.5">
                <div className="bg-[#0e0e12] border border-white/[0.08] rounded-2xl p-4 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff4e3e]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 font-mono block">Direct Inquiries</span>
                    <a 
                      href="mailto:hello@agentai.design" 
                      className="text-sm font-semibold text-white hover:text-[#ff4e3e] transition-colors"
                    >
                      hello@agentai.design
                    </a>
                  </div>
                </div>

                <div className="bg-[#0e0e12] border border-white/[0.08] rounded-2xl p-4 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff4e3e]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 font-mono block">Response Time</span>
                    <span className="text-sm font-semibold text-white">
                      Guaranteed within 2 hours
                    </span>
                  </div>
                </div>

                <div className="bg-[#0e0e12] border border-white/[0.08] rounded-2xl p-4 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff4e3e]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 font-mono block">Studio Locations</span>
                    <span className="text-sm font-semibold text-white">
                      San Francisco • London • Remote Worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0e0e12]/90 backdrop-blur-md border border-white/[0.08] rounded-3xl p-8 sm:p-10 shadow-xl relative">
              {isSubmitted ? (
                <div className="py-16 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#ff4e3e]/20 text-[#ff4e3e] border border-[#ff4e3e]/40 flex items-center justify-center mb-5 shadow-[0_0_24px_rgba(255,78,62,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Received!
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-md mb-8 leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Our sprint lead has received your details and will follow up at <span className="text-white font-medium">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="bg-[#151518] hover:bg-[#202025] text-zinc-200 border border-white/10 px-6 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div>
                      <label 
                        htmlFor="contact-name" 
                        className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-[#14141a] border border-white/10 focus:border-[#ff4e3e] focus:ring-1 focus:ring-[#ff4e3e] rounded-2xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label 
                        htmlFor="contact-email" 
                        className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full bg-[#14141a] border border-white/10 focus:border-[#ff4e3e] focus:ring-1 focus:ring-[#ff4e3e] rounded-2xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label 
                      htmlFor="contact-message" 
                      className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2"
                    >
                      Project Details & Goals *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about what you want to build, current timelines, or tech stack constraints..."
                      className="w-full bg-[#14141a] border border-white/10 focus:border-[#ff4e3e] focus:ring-1 focus:ring-[#ff4e3e] rounded-2xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      id="btn-submit-contact"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-gradient-to-r from-[#de3126] to-[#ff4e3e] hover:brightness-110 active:scale-95 text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-[0_0_24px_rgba(222,49,38,0.45)] flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Routing to Squad...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
