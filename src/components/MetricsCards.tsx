import React from 'react';

export const MetricsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-[550px] select-none">
      {/* Card 1: Happy people */}
      <div 
        id="metric-card-happy-people"
        className="bg-[#0e0e11]/90 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-4 flex flex-col justify-between min-h-[110px] hover:border-white/15 transition-all shadow-md"
      >
        <span className="text-[11px] text-zinc-400 font-normal">
          Happy people
        </span>
        <div className="flex items-center justify-between mt-3">
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            3M+
          </span>
          {/* Overlapping User Avatars */}
          <div className="flex -space-x-2 overflow-hidden items-center">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0e0e11] object-cover grayscale opacity-80"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
              alt="Client avatar 1"
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0e0e11] object-cover grayscale opacity-85"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              alt="Client avatar 2"
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0e0e11] object-cover grayscale opacity-90"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
              alt="Client avatar 3"
            />
          </div>
        </div>
      </div>

      {/* Card 2: ROI Improvement */}
      <div 
        id="metric-card-roi-improvement"
        className="bg-[#0e0e11]/90 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-4 flex flex-col justify-between min-h-[110px] hover:border-white/15 transition-all shadow-md"
      >
        <span className="text-[11px] text-zinc-400 font-normal">
          ROI Improvement
        </span>
        <div className="flex items-end justify-between mt-3 gap-2">
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none">
            95%
          </span>
          <span className="text-[9px] text-zinc-400 leading-tight max-w-[85px] pb-0.5">
            Clients reported faster launch or 1 month
          </span>
        </div>
      </div>

      {/* Card 3: Client Retention */}
      <div 
        id="metric-card-client-retention"
        className="bg-[#0e0e11]/90 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-4 flex flex-col justify-between min-h-[110px] hover:border-white/15 transition-all shadow-md"
      >
        <span className="text-[11px] text-zinc-400 font-normal">
          Client Retention
        </span>
        <div className="flex items-end justify-between mt-3 gap-2">
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none">
            88%
          </span>
          <span className="text-[9px] text-zinc-400 leading-tight max-w-[85px] pb-0.5">
            Come back for weighed final requests
          </span>
        </div>
      </div>
    </div>
  );
};
