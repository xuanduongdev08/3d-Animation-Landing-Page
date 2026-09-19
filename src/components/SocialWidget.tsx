import React from 'react';

export const SocialWidget: React.FC = () => {
  return (
    <div className="flex flex-col items-start select-none py-2">
      {/* Top: Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        id="social-btn-facebook"
        aria-label="Facebook"
        className="w-11 h-11 bg-[#111115] hover:bg-[#1b1b22] border border-white/10 rounded-2xl flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-md group cursor-pointer"
      >
        <svg
          className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>

      {/* Middle Row: SOCIAL PRESENCE label + Instagram Button */}
      <div className="flex items-center gap-3 my-2.5">
        <div className="text-right w-11 flex flex-col justify-center">
          <span className="text-[8px] font-bold tracking-widest text-zinc-500 uppercase leading-none">
            SOCIAL
          </span>
          <span className="text-[8px] font-bold tracking-widest text-zinc-500 uppercase leading-none mt-0.5">
            PRESENCE
          </span>
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          id="social-btn-instagram"
          aria-label="Instagram"
          className="w-11 h-11 bg-[#111115] hover:bg-[#1b1b22] border border-white/10 rounded-2xl flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-md group cursor-pointer"
        >
          <svg
            className="w-4 h-4 stroke-current stroke-[1.8] fill-none transition-transform group-hover:scale-110"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>

      {/* Bottom: X (Twitter) Button */}
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        id="social-btn-x"
        aria-label="X (formerly Twitter)"
        className="w-11 h-11 bg-[#111115] hover:bg-[#1b1b22] border border-white/10 rounded-2xl flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-md group cursor-pointer"
      >
        <svg
          className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
    </div>
  );
};
