import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

interface HeroTitleProps {
  onGetStarted: () => void;
  onExploreServices: () => void;
  onViewPricing: () => void;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({
  onGetStarted,
  onExploreServices,
  onViewPricing,
}) => {
  return (
    <div className="flex flex-col items-start select-none">
      {/* AI-Driven Agency Badge */}
      <div 
        id="badge-ai-agency"
        className="bg-[#141418]/90 border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2 mb-6 shadow-sm hover:border-white/20 transition-all cursor-default"
      >
        <Rocket className="w-3.5 h-3.5 text-[#ff4e3e] transform -rotate-12" />
        <span className="text-xs text-zinc-300 font-medium tracking-wide">
          AI-Driven Agency
        </span>
      </div>

      {/* Main Massive Display Headline */}
      <div className="flex flex-col tracking-tight">
        {/* Line 1: Your AI */}
        <h1 className="text-white font-extrabold text-5xl sm:text-7xl lg:text-[5.4rem] xl:text-[5.8rem] leading-[0.98] tracking-tight">
          Your AI
        </h1>

        {/* Line 2: Sprint Team */}
        <div className="text-5xl sm:text-7xl lg:text-[5.4rem] xl:text-[5.8rem] font-extrabold leading-[0.98] tracking-tight mt-1.5">
          <span className="text-white">Sprint </span>
          <span className="bg-gradient-to-r from-white via-[#ff7c6e] to-[#ec372a] bg-clip-text text-transparent">
            Team
          </span>
        </div>

        {/* Line 3: On Demand */}
        <div className="text-5xl sm:text-7xl lg:text-[5.4rem] xl:text-[5.8rem] font-extrabold leading-[0.98] tracking-tight mt-1.5">
          <span className="bg-gradient-to-r from-[#ff5b4c] via-[#eb3528] to-[#99150d] bg-clip-text text-transparent">
            On Demand
          </span>
        </div>
      </div>

      {/* Sub-headline Paragraph */}
      <p className="text-zinc-400 text-sm sm:text-base max-w-[530px] font-normal leading-relaxed mt-7 mb-9">
        From discovery to deployment, we plug into your stack to prototype,
        validate, and launch AI experiences your users actually love.
      </p>

      {/* Primary Action Buttons */}
      <div className="flex items-center gap-3.5 flex-wrap">
        <button
          id="btn-get-started"
          onClick={onGetStarted}
          className="bg-gradient-to-r from-[#de3126] to-[#ff4e3e] hover:brightness-110 active:scale-95 text-white px-7 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-[0_0_24px_rgba(222,49,38,0.45)] flex items-center gap-2"
        >
          <span>Get Started</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          id="btn-explore-services"
          onClick={onExploreServices}
          className="bg-[#151518] hover:bg-[#202025] active:scale-95 text-zinc-200 border border-white/10 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-sm"
        >
          Explore Services
        </button>

        <div className="relative group">
          {/* Subtle soft ambient glow under the View Pricing Plans button */}
          <div className="absolute -inset-1 bg-white/5 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
          <button
            id="btn-view-pricing"
            onClick={onViewPricing}
            className="relative bg-[#1c1c20] hover:bg-[#26262b] active:scale-95 text-zinc-200 border border-white/10 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-[0_10px_35px_rgba(255,255,255,0.06)]"
          >
            View Pricing Plans
          </button>
        </div>
      </div>
    </div>
  );
};
