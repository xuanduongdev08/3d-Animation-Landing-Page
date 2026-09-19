import React from 'react';

interface RightStatsCardsProps {
  onBookCall: () => void;
}

export const RightStatsCards: React.FC<RightStatsCardsProps> = ({
  onBookCall,
}) => {
  return (
    <div className="flex flex-col gap-3.5 w-full select-none">
      {/* Top Card: 230+ Projects */}
      <div 
        id="stats-card-projects"
        className="bg-[#0e0e12]/90 backdrop-blur-md border border-white/[0.08] rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between min-h-[220px] shadow-xl hover:border-white/15 transition-all"
      >
        {/* Top bar with indicator and step */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-zinc-300 tracking-wide">
              AgentAi
            </span>
            <div className="w-7 h-[1.5px] bg-zinc-300 mt-1 rounded-full"></div>
          </div>
          <span className="text-[11px] text-zinc-500 font-mono tracking-wider">
            01/04
          </span>
        </div>

        {/* Big Stat + Description */}
        <div className="mt-10">
          <div className="text-5xl font-extrabold text-white tracking-tight mb-1.5">
            230+
          </div>
          <p className="text-xs text-zinc-400 leading-snug">
            Projects successfully launched
            <br />
            worldwide
          </p>
        </div>
      </div>

      {/* Bottom Card: 400+ Trusted Partner */}
      <div 
        id="stats-card-partners"
        className="bg-[#0e0e12]/90 backdrop-blur-md border border-white/[0.08] rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between min-h-[320px] shadow-xl hover:border-white/15 transition-all overflow-hidden"
      >
        {/* Top Header info */}
        <div>
          <div className="text-5xl font-extrabold text-white tracking-tight mb-0.5">
            400+
          </div>
          <div className="text-xs text-zinc-400">
            Trusted Partner
          </div>
        </div>

        {/* Partner Logos Matrix with Glowing Sparkle */}
        <div className="relative my-6 py-2">
          {/* Glowing 4-point Diamond Star */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none z-10">
            <svg
              className="w-16 h-16 text-zinc-200 fill-current drop-shadow-[0_0_18px_rgba(255,255,255,0.7)]"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" />
            </svg>
          </div>

          {/* Grid of Partner Logos */}
          <div className="grid grid-cols-3 gap-y-4 gap-x-2 opacity-70">
            {/* Logo 1: Wave / Script */}
            <div className="flex items-center gap-1">
              <span className="font-serif italic font-bold text-sm tracking-tighter text-zinc-300">
                three~
              </span>
            </div>

            {/* Logo 2: Leafe */}
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3 text-zinc-300 fill-current" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
              </svg>
              <span className="text-[11px] font-semibold tracking-tight text-zinc-300">
                Leafe
              </span>
            </div>

            {/* Logo 3: Hues */}
            <div className="flex items-center gap-1">
              <div className="flex -space-x-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
              </div>
              <span className="text-[11px] font-semibold tracking-tight text-zinc-300">
                Hues
              </span>
            </div>

            {/* Logo 4: Cloude */}
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full border border-zinc-300"></div>
              <span className="text-[10px] font-medium tracking-tight text-zinc-400 leading-tight">
                Counce
                <br />
                <span className="text-[8px] opacity-75">project</span>
              </span>
            </div>

            {/* Logo 5: Crone */}
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#0e0e12]"></div>
              </div>
              <span className="text-[11px] font-semibold tracking-tight text-zinc-300">
                Crone
              </span>
            </div>

            {/* Logo 6: Mercury */}
            <div className="flex items-center gap-1">
              <span className="text-[9px] font-bold text-zinc-400 tracking-wider uppercase">
                Mercury
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button: Book a call */}
        <button
          id="btn-book-call"
          onClick={onBookCall}
          className="bg-[#212127] hover:bg-[#2b2b33] active:scale-95 text-zinc-200 text-center py-2.5 rounded-full text-xs font-medium w-full transition-all border border-white/5 cursor-pointer shadow-sm"
        >
          Book a call
        </button>
      </div>
    </div>
  );
};
