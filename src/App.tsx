import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { NavTab } from './types';
import { Navbar } from './components/Navbar';
import { ServiceBadge } from './components/ServiceBadge';
import { HeroTitle } from './components/HeroTitle';
import { MetricsCards } from './components/MetricsCards';
import { SocialWidget } from './components/SocialWidget';
import { RightStatsCards } from './components/RightStatsCards';
import { BookCallModal } from './components/BookCallModal';
import { MenuDrawer } from './components/MenuDrawer';
import { PricingModal } from './components/PricingModal';
import { ServicesModal } from './components/ServicesModal';
import { EarnCryptoPage } from './components/EarnCryptoPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'hero' | 'crypto'>('hero');
  const [activeTab, setActiveTab] = useState<NavTab>('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleTabSelect = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'Home') {
      setCurrentPage('hero');
    } else if (tab === 'Services') {
      setIsServicesOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#060608] text-white flex flex-col justify-between overflow-x-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
        src="https://res.cloudinary.com/sgu1fi3k/video/upload/v1789787259/kling_20260918_Image_to_Video__2925_0.mp4"
      />

      {/* Light Black Gradient Overlay: ~65% left, ~35% middle, ~10% right */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.35) 50%, rgba(0, 0, 0, 0.10) 100%)',
        }}
      />

      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabSelect}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {currentPage === 'crypto' ? (
        <main className="w-full flex-1 flex flex-col justify-center relative z-10">
          <EarnCryptoPage
            onBackToHero={() => {
              setCurrentPage('hero');
              setActiveTab('Home');
            }}
          />
        </main>
      ) : (
        /* Main Hero Container */
        <main className="w-full max-w-[1550px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 pt-2 sm:pt-4 pb-10 flex-1 flex flex-col justify-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 xl:gap-x-12 items-start">
            
            {/* Left Hero Section (Span 7 or 8 columns on large screens) */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between h-full">
              {/* Main Headline & CTAs */}
              <HeroTitle
                onGetStarted={() => setCurrentPage('crypto')}
                onExploreServices={() => setIsServicesOpen(true)}
                onViewPricing={() => setIsPricingOpen(true)}
              />

              {/* Bottom Section: Metrics + Social Presence aligned side-by-side */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-12 pt-2">
                <div className="flex-1 max-w-xl">
                  <MetricsCards />
                </div>

                {/* Social Widget positioned right beside bottom metrics */}
                <div className="hidden sm:block pl-2 pb-1">
                  <SocialWidget />
                </div>
              </div>
            </div>

            {/* Right Column (Span 5 or 4 columns on large screens) */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-end w-full lg:max-w-[380px] ml-auto">
              {/* Top Right "Also do" Tags */}
              <div className="mb-5 self-end">
                <ServiceBadge />
              </div>

              {/* Stacked Cards: 230+ and 400+ */}
              <RightStatsCards onBookCall={() => setIsBookCallOpen(true)} />

              {/* Mobile Social Widget fallback for small screens */}
              <div className="sm:hidden mt-8 w-full flex justify-center">
                <SocialWidget />
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Far Right "scroll down" vertical label */}
      <div className="fixed right-3 bottom-12 hidden 2xl:flex items-center gap-1.5 -rotate-90 origin-right text-[10px] text-zinc-500 font-mono tracking-widest uppercase select-none z-20 pointer-events-none">
        <span>scroll down</span>
        <ArrowDown className="w-3 h-3 text-zinc-500 rotate-90" />
      </div>

      {/* Interactive Modals & Drawers */}
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectTab={(tab) => handleTabSelect(tab)}
        onBookCall={() => setIsBookCallOpen(true)}
      />

      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        onBookCall={() => setIsBookCallOpen(true)}
      />

      <ServicesModal
        isOpen={isServicesOpen}
        onClose={() => setIsServicesOpen(false)}
        onBookCall={() => setIsBookCallOpen(true)}
      />
    </div>
  );
}
