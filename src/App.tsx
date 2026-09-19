import React, { useState, useEffect } from 'react';
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
import { ServicesSection } from './components/ServicesSection';
import { WorksSection } from './components/WorksSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Active scroll listener to highlight current section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections: { id: string; tab: NavTab }[] = [
        { id: 'hero', tab: 'Home' },
        { id: 'services', tab: 'Services' },
        { id: 'works', tab: 'Works' },
        { id: 'about', tab: 'About' },
        { id: 'contact', tab: 'Contact' },
      ];

      const scrollPosition = window.scrollY + 280;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(sections[i].tab);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabSelect = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'Home') {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'Services') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'Works') {
      document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'About') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'Contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col overflow-x-hidden">
      {/* Top Sticky Navigation with dynamic highlight */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabSelect}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Hero Section Container (Video strictly stays in hero) */}
      <section 
        id="hero" 
        className="relative min-h-[calc(100vh-80px)] w-full flex flex-col justify-between overflow-hidden"
      >
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

        {/* Main Hero Container */}
        <main className="w-full max-w-[1550px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 pt-2 sm:pt-4 pb-12 flex-1 flex flex-col justify-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 xl:gap-x-12 items-start">
            
            {/* Left Hero Section (Span 7 or 8 columns on large screens) */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between h-full">
              {/* Main Headline & CTAs */}
              <HeroTitle
                onGetStarted={scrollToPricing}
                onExploreServices={scrollToServices}
                onViewPricing={scrollToPricing}
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

        {/* Far Right "scroll down" vertical label */}
        <div 
          onClick={scrollToServices}
          className="absolute right-4 bottom-8 hidden 2xl:flex items-center gap-1.5 -rotate-90 origin-right text-[10px] text-zinc-400 font-mono tracking-widest uppercase select-none z-20 cursor-pointer hover:text-white transition-colors"
        >
          <span>scroll down</span>
          <ArrowDown className="w-3 h-3 text-[#ff4e3e] rotate-90" />
        </div>
      </section>

      {/* 1. Services Section (id="services") */}
      <ServicesSection onBookCall={() => setIsBookCallOpen(true)} />

      {/* 2. Works Section (id="works") */}
      <WorksSection onSelectProject={() => setIsBookCallOpen(true)} />

      {/* 3. Process Section */}
      <ProcessSection />

      {/* 4. About Section (id="about") */}
      <AboutSection onBookCall={() => setIsBookCallOpen(true)} />

      {/* 5. Pricing Section (id="pricing") */}
      <PricingSection 
        onSelectPlan={() => setIsBookCallOpen(true)}
        onBookCall={() => setIsBookCallOpen(true)}
      />

      {/* 6. Testimonials Section */}
      <TestimonialsSection />

      {/* 7. FAQ Section */}
      <FAQSection />

      {/* 8. Final CTA Section */}
      <FinalCTASection 
        onBookCall={() => setIsBookCallOpen(true)}
        onViewPricing={scrollToPricing}
      />

      {/* 9. Contact (id="contact") & Footer Section */}
      <ContactSection 
        onNavClick={handleTabSelect}
        onScrollToTop={() => {
          document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

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
