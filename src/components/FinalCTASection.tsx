import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onBookCall: () => void;
  onViewPricing: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onBookCall,
  onViewPricing,
}) => {
  return (
    <section 
      id="final-cta" 
      className="w-full bg-black py-24 sm:py-32 px-6 sm:px-10 md:px-12 lg:px-16 border-t border-white/[0.06] relative overflow-hidden"
    >
      {/* Ambient Red Glow in Background */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(227,53,41,0.18),transparent_70%)] blur-2xl" 
      />

      <div className="w-full max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0e0e13]/90 backdrop-blur-xl border border-white/[0.1] rounded-3xl sm:rounded-[2.5rem] p-10 sm:p-16 lg:p-20 text-center relative shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Subtle 4-Point Star Accent */}
          <div className="absolute top-8 right-8 sm:top-12 sm:right-12 pointer-events-none opacity-40">
            <Sparkles className="w-6 h-6 text-[#ff4e3e]" />
          </div>

          <div className="max-w-2xl mx-auto flex flex-col items-center">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171e] border border-white/10 text-xs font-medium text-zinc-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff4e3e] animate-pulse"></span>
              <span>Available for Sprints This Month</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
              Ready to{' '}
              <span className="bg-gradient-to-r from-[#ff5b4c] via-[#eb3528] to-[#ff4e3e] bg-clip-text text-transparent">
                Sprint?
              </span>
            </h2>

            {/* Sub-headline */}
            <p className="text-zinc-400 text-sm sm:text-lg font-normal leading-relaxed max-w-xl mb-10">
              Stop debating static wireframes. Bring your high-impact AI product to life in a focused 14-day cycle with senior specialists.
            </p>

            {/* Two Pill Buttons: One Red, One Dark */}
            <div className="flex items-center justify-center gap-4 flex-wrap w-full sm:w-auto">
              {/* Red Pill Button */}
              <button
                id="btn-final-cta-book"
                onClick={onBookCall}
                className="w-full sm:w-auto bg-gradient-to-r from-[#de3126] to-[#ff4e3e] hover:brightness-110 active:scale-95 text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-[0_0_28px_rgba(222,49,38,0.5)] flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </button>

              {/* Dark Pill Button */}
              <button
                id="btn-final-cta-pricing"
                onClick={onViewPricing}
                className="w-full sm:w-auto bg-[#151518] hover:bg-[#202025] active:scale-95 text-zinc-200 border border-white/10 hover:border-white/20 px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2"
              >
                <span>View Pricing Plans</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
