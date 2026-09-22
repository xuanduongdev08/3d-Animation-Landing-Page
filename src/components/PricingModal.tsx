import React from 'react';
import { motion } from 'motion/react';
import { X, Check, Zap, Rocket, Shield } from 'lucide-react';

interface PricingModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onBookCall: () => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  onClose,
  onBookCall,
}) => {
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
        id="pricing-modal-content"
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 15 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#101014] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-3xl w-full relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center max-w-md mx-auto mb-8">
          <span className="text-xs font-semibold text-[#ff503e] uppercase tracking-wider">
            Transparent Sprint Models
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            AI Sprint Pricing Plans
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Fixed sprint pricing. No endless agency retainers or surprise hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Plan 1 */}
          <div className="bg-[#15151b] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300">
                  <Zap className="w-4 h-4 text-[#ff503e]" />
                </div>
                <span className="text-[10px] uppercase font-mono text-zinc-400 tracking-wider bg-white/5 px-2.5 py-1 rounded-full">
                  2-Week Sprint
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">MVP & Prototype Sprint</h3>
              <div className="mt-3 mb-5">
                <span className="text-3xl font-extrabold text-white">$6,500</span>
                <span className="text-xs text-zinc-400 ml-1.5">/ sprint</span>
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-300 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff503e]" />
                  Dedicated Senior AI Architect + Full-Stack Dev
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff503e]" />
                  Functional prototype integrated with your API
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff503e]" />
                  Custom prompt engineering & evaluation benchmark
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff503e]" />
                  Full source code ownership & handover
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer"
            >
              Select MVP Sprint
            </button>
          </div>

          {/* Plan 2: Flagship */}
          <div className="bg-[#171720] border border-[#ff503e]/40 rounded-2xl p-6 flex flex-col justify-between relative shadow-[0_0_30px_rgba(235,53,41,0.15)] hover:border-[#ff503e] transition-all">
            <div className="absolute -top-2.5 right-6 bg-[#ff503e] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#ff4e3e]/15 flex items-center justify-center text-[#ff503e]">
                  <Rocket className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase font-mono text-[#ff796c] tracking-wider bg-[#ff4e3e]/10 px-2.5 py-1 rounded-full">
                  4-Week Sprint
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">Production AI Scale</h3>
              <div className="mt-3 mb-5">
                <span className="text-3xl font-extrabold text-white">$12,800</span>
                <span className="text-xs text-zinc-400 ml-1.5">/ sprint</span>
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-300 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff503e]" />
                  Complete Autonomous Agent / Multi-Agent workflows
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff503e]" />
                  Production Cloud deployment & telemetry
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff503e]" />
                  Enterprise security audit & guardrails
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff503e]" />
                  30-day post-launch optimization support
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="w-full bg-gradient-to-r from-[#de3126] to-[#ff4e3e] text-white py-2.5 rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(222,49,38,0.4)] hover:brightness-110 transition-all cursor-pointer"
            >
              Book Production Sprint
            </button>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <Shield className="w-4 h-4 text-[#ff503e]" />
          <span>100% money-back sprint guarantee if feasibility criteria aren&apos;t satisfied.</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

