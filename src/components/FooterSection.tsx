import React from 'react';
import logoImg from '../assets/Logo_Agent-removebg.png';
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Globe,
  ArrowUp
} from 'lucide-react';
import { NavTab } from '../types';

interface FooterSectionProps {
  onNavClick?: (tab: NavTab) => void;
  onScrollToTop?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onNavClick,
  onScrollToTop,
}) => {
  const navLinks: { label: string; tab: NavTab }[] = [
    { label: 'Home', tab: 'Home' },
    { label: 'Services', tab: 'Services' },
    { label: 'Works', tab: 'Works' },
    { label: 'About', tab: 'About' },
    { label: 'Contact', tab: 'Contact' },
  ];

  return (
    <footer 
      id="footer" 
      className="w-full bg-black py-12 sm:py-16 px-6 sm:px-10 md:px-12 border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 opacity-75"
        src="https://res.cloudinary.com/sgu1fi3k/video/upload/v1789975644/footer-animation.mp4"
      />

      {/* Dark Gradient / Blur Overlay for Contrast */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] bg-black/65 backdrop-blur-[1px]"
      />

      {/* Main Content Container - Properly Sized */}
      <div className="w-full max-w-[1350px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer select-none group"
            onClick={onScrollToTop}
          >
            <img 
              src={logoImg} 
              alt="AgentAI Logo" 
              className="h-14 sm:h-16 md:h-20 -my-3 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_18px_rgba(255,78,62,0.65)]"
            />
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
            {navLinks.map((item) => (
              <button
                key={item.tab}
                id={`footer-nav-${item.tab.toLowerCase()}`}
                onClick={() => onNavClick?.(item.tab)}
                className="text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              id="social-twitter"
              className="w-9 h-9 rounded-full bg-[#141418]/90 border border-white/10 hover:border-white/25 hover:text-white text-zinc-300 flex items-center justify-center transition-all backdrop-blur-md"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              id="social-github"
              className="w-9 h-9 rounded-full bg-[#141418]/90 border border-white/10 hover:border-white/25 hover:text-white text-zinc-300 flex items-center justify-center transition-all backdrop-blur-md"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              id="social-linkedin"
              className="w-9 h-9 rounded-full bg-[#141418]/90 border border-white/10 hover:border-white/25 hover:text-white text-zinc-300 flex items-center justify-center transition-all backdrop-blur-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              id="social-dribbble"
              className="w-9 h-9 rounded-full bg-[#141418]/90 border border-white/10 hover:border-white/25 hover:text-white text-zinc-300 flex items-center justify-center transition-all backdrop-blur-md"
              aria-label="Dribbble"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/[0.08] text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} AgentAI Studio Inc. All rights reserved.</p>
          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1.5 font-medium hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ff4e3e]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
