import React from 'react';
import { motion } from 'motion/react';
import { X, ArrowUpRight, Sparkles, PhoneCall, Code2, Layers, Compass } from 'lucide-react';
import { NavTab } from '../types';

interface MenuDrawerProps {
  isOpen?: boolean;
  onClose: () => void;
  onSelectTab: (tab: NavTab) => void;
  onBookCall: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  onClose,
  onSelectTab,
  onBookCall,
}) => {
  const navItems = [
    { tab: 'Home' as NavTab, desc: 'Return to agency hero screen', icon: Compass },
    { tab: 'Services' as NavTab, desc: 'AI discovery, prototyping & stack integration', icon: Layers },
    { tab: 'Works' as NavTab, desc: 'Case studies & 230+ deployed AI systems', icon: Code2 },
    { tab: 'About' as NavTab, desc: 'Our sprint engineers and methodology', icon: Sparkles },
    { tab: 'Contact' as NavTab, desc: 'Direct access to sprint leads', icon: PhoneCall },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm"
    >
      <motion.div 
        id="menu-drawer-panel"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 280 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0f0f13] border-l border-white/10 w-full max-w-md h-full p-8 flex flex-col justify-between shadow-2xl overflow-y-auto"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">AgentAI</span>
              <span className="text-[10px] bg-[#ff4e3e]/20 text-[#ff503e] border border-[#ff4e3e]/30 px-2 py-0.5 rounded-full font-medium">
                Agency Menu
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Navigation links with stagger effect */}
          <div className="py-8 space-y-4">
            {navItems.map(({ tab, desc, icon: Icon }, idx) => (
              <motion.div
                key={tab}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: 0.08 + idx * 0.05 }}
                onClick={() => {
                  onSelectTab(tab);
                  onClose();
                }}
                className="group flex items-start justify-between p-3.5 rounded-2xl hover:bg-[#16161b] transition-all cursor-pointer border border-transparent hover:border-white/5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-zinc-300 group-hover:text-[#ff503e] group-hover:bg-[#ff4e3e]/10 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white group-hover:text-[#ff503e] transition-colors">
                      {tab}
                    </h4>
                    <p className="text-xs text-zinc-400">{desc}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <div className="bg-[#15151a] border border-white/5 p-4 rounded-2xl">
            <span className="text-xs text-zinc-400 block mb-1">Ready to ship your AI?</span>
            <span className="text-sm font-semibold text-white block">Next Sprint availability: 3 slots open</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="w-full bg-gradient-to-r from-[#de3126] to-[#ff4e3e] text-white py-3 rounded-full text-sm font-semibold shadow-[0_0_22px_rgba(222,49,38,0.4)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
          >
            Book a Discovery Call
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

