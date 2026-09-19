import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';

interface EarnCryptoPageProps {
  onBackToHero: () => void;
  onExplorePools?: () => void;
}

export const EarnCryptoPage: React.FC<EarnCryptoPageProps> = ({
  onBackToHero,
}) => {
  const [activeTab, setActiveTab] = useState<'pools' | 'farms'>('pools');
  const [selectedPool, setSelectedPool] = useState<string | null>(null);

  const syrupPools = [
    { pair: 'TokenA-TokenB LP', rate: '259.848%', type: 'ARP', id: '1' },
    { pair: 'TokenA-TokenB LP', rate: '259.848%', type: 'ARP', id: '2' },
    { pair: 'TokenA-TokenB LP', rate: '259.848%', type: 'ARP', id: '3' },
    { pair: 'TokenA-TokenB LP', rate: '259.848%', type: 'ARP', id: '4' },
  ];

  const farms = [
    { pair: 'AGENT-ETH LP', rate: '342.120%', type: 'APY', id: 'f1' },
    { pair: 'USDT-USDC LP', rate: '48.950%', type: 'APY', id: 'f2' },
    { pair: 'BTC-AGENT LP', rate: '184.620%', type: 'APY', id: 'f3' },
    { pair: 'SOL-AGENT LP', rate: '298.410%', type: 'APY', id: 'f4' },
  ];

  const currentList = activeTab === 'pools' ? syrupPools : farms;

  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-8 md:px-12 py-6 sm:py-10 flex flex-col justify-between relative z-10 select-none animate-fade-in">
      {/* Back to Hero Action Button */}
      <div className="mb-6 flex items-center justify-between">
        <button
          id="btn-back-to-hero"
          onClick={onBackToHero}
          className="group flex items-center gap-2 bg-[#121216]/90 hover:bg-[#1c1c22] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 text-[#ff4e3e]" />
          <span>Back to Hero</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-[#ff4e3e] animate-pulse"></span>
          <span>Protocol Live • Network Online</span>
        </div>
      </div>

      {/* Top 4 Metrics / Asset Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
        {/* Card 1: Total Supply */}
        <div 
          id="crypto-stat-supply"
          className="bg-[#0e0e12]/90 backdrop-blur-md border border-white/[0.08] rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center justify-between min-h-[195px] shadow-lg hover:border-white/20 transition-all group"
        >
          {/* 3D Hourglass / Double Pyramid Geometry */}
          <div className="w-16 h-16 relative flex items-center justify-center mb-2">
            <svg className="w-14 h-14 drop-shadow-[0_4px_12px_rgba(255,255,255,0.12)]" viewBox="0 0 64 64" fill="none">
              {/* Top Pyramid */}
              <polygon points="32,6 16,28 32,24" fill="#e2e8f0" />
              <polygon points="32,6 32,24 48,28" fill="#94a3b8" />
              <polygon points="16,28 32,24 32,30" fill="#64748b" />
              <polygon points="48,28 32,24 32,30" fill="#475569" />
              {/* Bottom Inverted Pyramid */}
              <polygon points="32,58 16,36 32,40" fill="#cbd5e1" />
              <polygon points="32,58 32,40 48,36" fill="#64748b" />
              <polygon points="16,36 32,40 32,34" fill="#94a3b8" />
              <polygon points="48,36 32,40 32,34" fill="#334155" />
            </svg>
          </div>
          <div>
            <span className="text-xs text-zinc-400 font-medium tracking-wide">
              Total Supply
            </span>
            <div className="text-2xl sm:text-[1.65rem] font-extrabold text-white tracking-tight mt-1">
              255,080,266
            </div>
          </div>
        </div>

        {/* Card 2: Market Cap */}
        <div 
          id="crypto-stat-market-cap"
          className="bg-[#0e0e12]/90 backdrop-blur-md border border-white/[0.08] rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center justify-between min-h-[195px] shadow-lg hover:border-white/20 transition-all group"
        >
          {/* 3D Diamond + Ruby Gemstones */}
          <div className="w-16 h-16 relative flex items-center justify-center mb-2">
            <svg className="w-14 h-14 drop-shadow-[0_4px_14px_rgba(235,53,41,0.2)]" viewBox="0 0 64 64" fill="none">
              {/* Large Silver Diamond */}
              <polygon points="28,12 14,24 28,24" fill="#f1f5f9" />
              <polygon points="28,12 28,24 42,24" fill="#cbd5e1" />
              <polygon points="14,24 28,48 28,24" fill="#94a3b8" />
              <polygon points="42,24 28,48 28,24" fill="#64748b" />
              {/* Small Red/Ruby Gemstone Accent */}
              <polygon points="42,32 34,40 42,40" fill="#ff796c" />
              <polygon points="42,32 42,40 50,40" fill="#eb3528" />
              <polygon points="34,40 42,54 42,40" fill="#de2c1f" />
              <polygon points="50,40 42,54 42,40" fill="#99150d" />
            </svg>
          </div>
          <div>
            <span className="text-xs text-zinc-400 font-medium tracking-wide">
              Market Cap
            </span>
            <div className="text-2xl sm:text-[1.65rem] font-extrabold text-white tracking-tight mt-1">
              332,372,544
            </div>
          </div>
        </div>

        {/* Card 3: TVL */}
        <div 
          id="crypto-stat-tvl"
          className="bg-[#0e0e12]/90 backdrop-blur-md border border-white/[0.08] rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center justify-between min-h-[195px] shadow-lg hover:border-white/20 transition-all group"
        >
          {/* 3 Database / Server Token Cylinders */}
          <div className="w-16 h-16 relative flex items-center justify-center mb-2">
            <svg className="w-14 h-14 drop-shadow-[0_4px_12px_rgba(255,255,255,0.1)]" viewBox="0 0 64 64" fill="none">
              {/* Column 1 */}
              <rect x="12" y="16" width="10" height="32" rx="5" fill="#475569" />
              <ellipse cx="17" cy="16" rx="5" ry="3" fill="#cbd5e1" />
              <ellipse cx="17" cy="27" rx="5" ry="3" fill="#94a3b8" />
              <ellipse cx="17" cy="38" rx="5" ry="3" fill="#64748b" />
              {/* Column 2 */}
              <rect x="27" y="12" width="10" height="40" rx="5" fill="#334155" />
              <ellipse cx="32" cy="12" rx="5" ry="3" fill="#f8fafc" />
              <ellipse cx="32" cy="25" rx="5" ry="3" fill="#cbd5e1" />
              <ellipse cx="32" cy="38" rx="5" ry="3" fill="#94a3b8" />
              {/* Column 3 */}
              <rect x="42" y="16" width="10" height="32" rx="5" fill="#475569" />
              <ellipse cx="47" cy="16" rx="5" ry="3" fill="#cbd5e1" />
              <ellipse cx="47" cy="27" rx="5" ry="3" fill="#94a3b8" />
              <ellipse cx="47" cy="38" rx="5" ry="3" fill="#64748b" />
            </svg>
          </div>
          <div>
            <span className="text-xs text-zinc-400 font-medium tracking-wide">
              TVL
            </span>
            <div className="text-2xl sm:text-[1.65rem] font-extrabold text-white tracking-tight mt-1">
              $4.20b
            </div>
          </div>
        </div>

        {/* Card 4: Price */}
        <div 
          id="crypto-stat-price"
          className="bg-[#0e0e12]/90 backdrop-blur-md border border-white/[0.08] rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center justify-between min-h-[195px] shadow-lg hover:border-white/20 transition-all group"
        >
          {/* Stack of Shiny Coins */}
          <div className="w-16 h-16 relative flex items-center justify-center mb-2">
            <svg className="w-14 h-14 drop-shadow-[0_4px_12px_rgba(255,255,255,0.1)]" viewBox="0 0 64 64" fill="none">
              {/* Coin stack */}
              <ellipse cx="30" cy="46" rx="14" ry="6" fill="#475569" />
              <ellipse cx="30" cy="42" rx="14" ry="6" fill="#64748b" />
              <ellipse cx="30" cy="38" rx="14" ry="6" fill="#94a3b8" />
              <ellipse cx="30" cy="34" rx="14" ry="6" fill="#cbd5e1" />
              <ellipse cx="38" cy="24" rx="13" ry="6" fill="#94a3b8" />
              <ellipse cx="38" cy="20" rx="13" ry="6" fill="#e2e8f0" />
              {/* Embossed Symbol */}
              <path d="M35 18 L41 18 M38 15 L38 23" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <span className="text-xs text-zinc-400 font-medium tracking-wide">
              Price
            </span>
            <div className="text-2xl sm:text-[1.65rem] font-extrabold text-white tracking-tight mt-1">
              $2.52m
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Big Display Headline + Subtitle + Glowing EXPLORE Button */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Earn passive income with crypto
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-normal mt-3 max-w-lg">
          GataSwap makes it easy to make your crypts work for you
        </p>

        {/* Glowing Deep Crimson Pill Button */}
        <div className="mt-7 relative group">
          <div className="absolute -inset-1 bg-[#de2c1f] rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          <button
            id="btn-crypto-explore"
            onClick={() => setActiveTab(activeTab === 'pools' ? 'farms' : 'pools')}
            className="relative bg-gradient-to-r from-[#80100a] via-[#de2c1f] to-[#ff4e3e] text-white px-9 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_26px_rgba(222,44,31,0.6)] hover:brightness-115 active:scale-95 transition-all cursor-pointer"
          >
            EXPLORE
          </button>
        </div>
      </div>

      {/* Pools & Farms Category Tabs */}
      <div className="w-full mb-6">
        <div className="flex items-center border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-8">
            <button
              id="tab-syrup-pools"
              onClick={() => setActiveTab('pools')}
              className={`relative text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'pools' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <span>Top Syrup pools</span>
              {activeTab === 'pools' && (
                <div className="absolute -bottom-2.5 left-0 right-0 h-[2px] bg-white rounded-full"></div>
              )}
            </button>

            <button
              id="tab-top-farms"
              onClick={() => setActiveTab('farms')}
              className={`relative text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'farms' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <span>Top Farms</span>
              {activeTab === 'farms' && (
                <div className="absolute -bottom-2.5 left-0 right-0 h-[2px] bg-[#ff4e3e] rounded-full shadow-[0_0_8px_#ff4e3e]"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4 Pool Cards in a Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {currentList.map((item) => {
          const isSelected = selectedPool === item.id;
          return (
            <div
              key={item.id}
              id={`pool-card-${item.id}`}
              onClick={() => setSelectedPool(isSelected ? null : item.id)}
              className={`bg-[#0e0e12]/90 backdrop-blur-md border rounded-2xl p-5 flex flex-col justify-between min-h-[140px] transition-all cursor-pointer shadow-md ${
                isSelected
                  ? 'border-[#ff4e3e] shadow-[0_0_20px_rgba(255,78,62,0.25)]'
                  : 'border-white/[0.08] hover:border-white/20'
              }`}
            >
              {/* Top Row: Pair name + Overlapping pair circles */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-300">
                  {item.pair}
                </span>
                {/* 2 overlapping circular coin glyphs */}
                <div className="flex -space-x-1.5 items-center">
                  <div className="w-5 h-5 rounded-full bg-zinc-400 border border-[#0e0e12] flex items-center justify-center">
                    <span className="text-[8px] font-bold text-zinc-900">A</span>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-[#de2c1f] border border-[#0e0e12] flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">B</span>
                  </div>
                </div>
              </div>

              {/* Stat & Label */}
              <div className="mt-4">
                <div className="text-2xl sm:text-[1.7rem] font-extrabold text-white tracking-tight leading-none">
                  {item.rate}
                </div>
                <div className="text-[11px] text-zinc-500 font-mono tracking-wider mt-1">
                  {item.type}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Wide Banner with Glowing 4-Point Star */}
      <div 
        id="crypto-wide-banner"
        className="relative bg-[#0e0e13]/95 backdrop-blur-md border border-white/[0.08] rounded-3xl p-8 sm:p-12 text-center shadow-2xl overflow-hidden hover:border-white/15 transition-all"
      >
        {/* Glowing 4-Point Diamond Star on the right */}
        <div className="absolute right-8 sm:right-14 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:block">
          <svg
            className="w-14 h-14 text-zinc-200 fill-current drop-shadow-[0_0_22px_rgba(255,255,255,0.7)]"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" />
          </svg>
        </div>

        <div className="max-w-xl mx-auto flex flex-col items-center">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            banner introduce introduce
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-normal mt-2 mb-6">
            DataSwap makes it easy to make your crypto work for you
          </p>
          <button
            id="btn-banner-read-more"
            onClick={onBackToHero}
            className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 py-1"
          >
            <span>READ MORE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ff4e3e]" />
          </button>
        </div>
      </div>
    </div>
  );
};
