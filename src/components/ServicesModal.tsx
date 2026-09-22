import React from 'react';
import { motion } from 'motion/react';
import { X, Sparkles, Cpu, Palette, Film, Gauge, ArrowRight } from 'lucide-react';

interface ServicesModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onBookCall: () => void;
}

export const ServicesModal: React.FC<ServicesModalProps> = ({
  onClose,
  onBookCall,
}) => {
  const services = [
    {
      icon: Cpu,
      title: 'AI Sprint & Full-Stack Integration',
      desc: 'Rapid prototyping of LLMs, multimodal vision agents, and vector search systems connected directly into your frontend and backend stack.',
      tag: 'Core Sprint',
    },
    {
      icon: Palette,
      title: 'Branding & Visual Identity',
      desc: 'Distinctive, world-class aesthetic systems tailored for high-growth tech ventures and next-generation AI platforms.',
      tag: 'Creative',
    },
    {
      icon: Sparkles,
      title: 'Art Direction',
      desc: 'Guiding the cohesive visual narrative, interactive feel, color geometry, and typography across digital surfaces.',
      tag: 'Design',
    },
    {
      icon: Film,
      title: 'Motion & Interactive Dynamics',
      desc: 'Precision micro-interactions, canvas animation, and cinematic transitions that make software feel alive.',
      tag: 'Experience',
    },
    {
      icon: Gauge,
      title: 'Model Evaluation & Latency Tuning',
      desc: 'Benchmarking context caching, streaming performance, latency reduction, and token cost optimization.',
      tag: 'Performance',
    },
  ];

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
        id="services-modal-content"
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 15 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#101014] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-semibold text-[#ff503e] uppercase tracking-wider">
            AgentAI Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Explore Agency Services
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Everything your team needs to conceptualize, engineer, and deploy industry-defining AI products.
          </p>
        </div>

        <div className="space-y-3">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-[#15151b] border border-white/5 rounded-2xl p-4 flex items-start justify-between gap-4 hover:border-white/15 transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff503e] shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">{srv.title}</h4>
                      <span className="text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full font-mono">
                        {srv.tag}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{srv.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs text-zinc-400">Have a custom technical challenge?</span>
          <button
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="bg-gradient-to-r from-[#de3126] to-[#ff4e3e] text-white px-5 py-2 rounded-full text-xs font-semibold shadow-[0_0_18px_rgba(222,49,38,0.4)] hover:brightness-110 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book Discovery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

