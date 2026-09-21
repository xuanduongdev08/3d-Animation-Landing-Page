import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Zap, Users, ArrowUpRight } from 'lucide-react';
import aboutImg from '../assets/built-by-builders.png';

interface AboutSectionProps {
  onBookCall?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookCall }) => {
  return (
    <section 
      id="about" 
      className="w-full bg-black py-24 sm:py-32 px-6 sm:px-10 md:px-12 lg:px-16 border-t border-white/[0.06] relative"
    >
      <div className="w-full max-w-[1550px] mx-auto">
        {/* Section Visual Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full mb-12 sm:mb-16 rounded-3xl overflow-hidden border border-white/10 bg-[#0e0e12] shadow-[0_12px_45px_rgba(0,0,0,0.8)] group"
        >
          <img 
            src={aboutImg} 
            alt="Built by builders, trusted by industry pioneers." 
            className="w-full h-auto object-cover rounded-3xl group-hover:scale-[1.01] transition-transform duration-500"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Agency Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141418] border border-white/10 text-xs font-medium text-zinc-400 mb-5 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e3e]"></span>
              <span>Our Mission & Collective</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Built by builders,{' '}
              <span className="bg-gradient-to-r from-[#ff5b4c] via-[#eb3528] to-[#ff4e3e] bg-clip-text text-transparent">
                trusted by industry pioneers.
              </span>
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base font-normal leading-relaxed mb-8">
              <p>
                AgentAI was founded on a simple realization: traditional digital agencies move too slowly for the compounding velocity of artificial intelligence and modern product ecosystems.
              </p>
              <p className="text-zinc-400">
                We operate as an elite, high-leverage strike team of senior product designers, creative technologists, and system architects. We embed seamlessly into your existing product pipeline to design, validate, and ship category-defining AI features in concentrated two-week sprints.
              </p>
            </div>

            {/* Ethos Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              <div className="bg-[#0e0e12] border border-white/[0.08] rounded-2xl p-3.5 flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-[#ff4e3e] shrink-0" />
                <span className="text-xs font-medium text-zinc-300">2-Week Sprints</span>
              </div>
              <div className="bg-[#0e0e12] border border-white/[0.08] rounded-2xl p-3.5 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#ff4e3e] shrink-0" />
                <span className="text-xs font-medium text-zinc-300">Senior Hands Only</span>
              </div>
              <div className="bg-[#0e0e12] border border-white/[0.08] rounded-2xl p-3.5 flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-[#ff4e3e] shrink-0" />
                <span className="text-xs font-medium text-zinc-300">Zero Bureaucracy</span>
              </div>
            </div>

            {/* CTA button */}
            {onBookCall && (
              <div className="self-start">
                <button
                  onClick={onBookCall}
                  className="bg-[#151518] hover:bg-[#202025] active:scale-95 text-zinc-200 border border-white/10 px-7 py-3 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 shadow-sm"
                >
                  <span>Schedule a Team Discovery</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#ff4e3e]" />
                </button>
              </div>
            )}
          </motion.div>

          {/* Right Column: 4 Glass Stat Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Stat Card 1: 230+ */}
            <motion.div
              id="about-stat-projects"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0e0e12]/90 hover:bg-[#121217] border border-white/[0.08] hover:border-white/20 rounded-3xl p-7 flex flex-col justify-between min-h-[190px] transition-all shadow-lg group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Track Record</span>
                <span className="w-2 h-2 rounded-full bg-[#ff4e3e] group-hover:scale-125 transition-transform" />
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-2">
                  230+
                </div>
                <p className="text-xs text-zinc-400 font-medium">
                  Flagship projects designed, engineered & launched worldwide.
                </p>
              </div>
            </motion.div>

            {/* Stat Card 2: 400+ */}
            <motion.div
              id="about-stat-partners"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0e0e12]/90 hover:bg-[#121217] border border-white/[0.08] hover:border-white/20 rounded-3xl p-7 flex flex-col justify-between min-h-[190px] transition-all shadow-lg group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Global Network</span>
                <span className="w-2 h-2 rounded-full bg-[#ff4e3e] group-hover:scale-125 transition-transform" />
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-2">
                  400+
                </div>
                <p className="text-xs text-zinc-400 font-medium">
                  Trusted partners across fintech, AI models, and hyper-growth SaaS.
                </p>
              </div>
            </motion.div>

            {/* Stat Card 3: 95% */}
            <motion.div
              id="about-stat-roi"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#0e0e12]/90 hover:bg-[#121217] border border-white/[0.08] hover:border-white/20 rounded-3xl p-7 flex flex-col justify-between min-h-[190px] transition-all shadow-lg group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">ROI Impact</span>
                <span className="w-2 h-2 rounded-full bg-[#ff4e3e] group-hover:scale-125 transition-transform" />
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-2">
                  95%
                </div>
                <p className="text-xs text-zinc-400 font-medium">
                  Clients reported faster launch or immediate ROI within 1 month.
                </p>
              </div>
            </motion.div>

            {/* Stat Card 4: 88% */}
            <motion.div
              id="about-stat-retention"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#0e0e12]/90 hover:bg-[#121217] border border-white/[0.08] hover:border-white/20 rounded-3xl p-7 flex flex-col justify-between min-h-[190px] transition-all shadow-lg group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">Client Loyalty</span>
                <span className="w-2 h-2 rounded-full bg-[#ff4e3e] group-hover:scale-125 transition-transform" />
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-2">
                  88%
                </div>
                <p className="text-xs text-zinc-400 font-medium">
                  Return for multi-quarter feature sprints and product extensions.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
