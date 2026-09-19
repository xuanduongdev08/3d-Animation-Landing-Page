import React from 'react';

export const ServiceBadge: React.FC = () => {
  return (
    <div className="flex flex-col items-end text-right select-none">
      <span className="text-[11px] text-zinc-500 font-medium mb-1 tracking-wider">
        Also do
      </span>
      <div className="flex flex-col items-end space-y-0.5">
        <span className="text-xs font-bold tracking-wider text-[#eb3b2e] hover:brightness-125 transition-colors cursor-default">
          BRANDING
        </span>
        <span className="text-xs font-bold tracking-wider text-zinc-400 hover:text-zinc-200 transition-colors cursor-default">
          ART DIRECTION
        </span>
        <span className="text-xs font-bold tracking-wider text-[#eb3b2e] hover:brightness-125 transition-colors cursor-default">
          MOTION
        </span>
      </div>
    </div>
  );
};
