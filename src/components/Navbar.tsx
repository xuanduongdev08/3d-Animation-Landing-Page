import React from 'react';
import logoImg from '../assets/Logo_Agent.png';
import { NavTab } from '../types';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenMenu,
}) => {
  const navItems: NavTab[] = ['Home', 'Services', 'Works', 'About', 'Contact'];

  return (
    <header className="sticky top-0 z-40 w-full py-5 px-6 md:px-12 lg:px-16 flex items-center justify-between bg-transparent border-none transition-colors">
      {/* Brand Logo */}
      <div 
        className="flex items-center gap-2.5 cursor-pointer select-none group"
        onClick={() => setActiveTab('Home')}
      >
        <img 
          src={logoImg} 
          alt="AgentAI Logo" 
          className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(255,78,62,0.3)]"
        />
      </div>

      {/* Floating Center Navigation Capsule */}
      <nav 
        id="main-nav-pill"
        className="hidden md:flex items-center bg-[#141418]/80 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all"
      >
        {navItems.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              id={`nav-item-${tab.toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#e33428] via-[#eb3e31] to-[#ff5341] text-white shadow-[0_0_24px_rgba(235,53,41,0.55)] scale-100'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </nav>

      {/* Right Action Menu Button */}
      <div className="flex items-center gap-3">
        <button
          id="hero-menu-button"
          onClick={onOpenMenu}
          className="bg-gradient-to-r from-[#de3126] to-[#ff4e3e] hover:brightness-110 active:scale-95 text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-[0_0_22px_rgba(222,49,38,0.45)] transition-all cursor-pointer"
        >
          <span>Menu</span>
          {/* 4 dots diamond pattern */}
          <div className="grid grid-cols-2 gap-0.5 w-3 h-3 rotate-45">
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="w-1 h-1 rounded-full bg-white"></div>
          </div>
        </button>
      </div>
    </header>
  );
};
