import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Palette, 
  PlayCircle, 
  Cpu, 
  Layout, 
  Rocket,
  ArrowUpRight
} from 'lucide-react';

interface ServicesSectionProps {
  onBookCall?: () => void;
}

interface ServiceCardData {
  id: string;
  counter: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
}

const servicesList: ServiceCardData[] = [
  {
    id: 'service-branding',
    counter: '01/06',
    title: 'Branding',
    description: 'Distinctive visual identities, typographic systems, and brand guidelines built to differentiate next-generation AI and tech ventures.',
    icon: Sparkles,
    tags: ['Visual Identity', 'Typography', 'Design Systems'],
  },
  {
    id: 'service-art-direction',
    counter: '02/06',
    title: 'Art Direction',
    description: 'Bespoke aesthetic strategy, immersive 3D scene compositions, and editorial direction that elevate digital products into category leaders.',
    icon: Palette,
    tags: ['Creative Strategy', '3D Visuals', 'Visual Tone'],
  },
  {
    id: 'service-motion',
    counter: '03/06',
    title: 'Motion',
    description: 'Fluid interface physics, micro-interactions, kinetic typography, and high-conversion launch reels engineered to captivate audiences.',
    icon: PlayCircle,
    tags: ['Kinetic UI', 'Launch Reels', 'Interactive Physics'],
  },
  {
    id: 'service-ai-prototyping',
    counter: '04/06',
    title: 'AI Prototyping',
    description: 'Fast-cycle functional prototypes plugging real models and LLMs directly into intuitive user flows, testing hypotheses in days instead of months.',
    icon: Cpu,
    tags: ['LLM Workflows', 'Agent Sandbox', 'Rapid MVP'],
  },
  {
    id: 'service-product-design',
    counter: '05/06',
    title: 'Product Design',
    description: 'End-to-end UX/UI architecture, complex data dashboards, multi-platform design systems, and friction-free user journeys.',
    icon: Layout,
    tags: ['UX Architecture', 'Web & Mobile Apps', 'Data Vis'],
  },
  {
    id: 'service-launch-support',
    counter: '06/06',
    title: 'Launch Support',
    description: 'Production-ready handoffs, release QA, conversion rate optimization, and rapid sprint iterations right through post-launch momentum.',
    icon: Rocket,
    tags: ['Dev Handoff', 'Release Sprints', 'Growth Tuning'],
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookCall }) => {
  return (
    <section 
      id="services" 
      className="w-full bg-black py-24 sm:py-32 px-6 sm:px-10 md:px-12 lg:px-16 border-t border-white/[0.06] relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 opacity-75"
        src="https://res.cloudinary.com/sgu1fi3k/video/upload/v1789959051/High-velocity_sprints_for_bold_visions.mp4"
      />

      {/* Dark Gradient / Blur Overlay for Contrast */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] bg-black/65 backdrop-blur-[1px]"
      />

      <div className="w-full max-w-[1550px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141418]/90 border border-white/10 text-xs font-medium text-zinc-400 mb-4 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e3e]"></span>
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              High-velocity sprints{' '}
              <span className="bg-gradient-to-r from-[#ff5b4c] via-[#eb3528] to-[#ff4e3e] bg-clip-text text-transparent">
                for bold visions.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-sm sm:text-base max-w-md font-normal leading-relaxed"
          >
            We eliminate months of agency bureaucracy. Our embedded sprint squads ship production-grade digital craft and functional AI experiences at warp speed.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={onBookCall}
                className="group relative bg-[#0e0e12]/90 hover:bg-[#121217] border border-white/[0.08] hover:border-white/20 rounded-3xl p-7 sm:p-8 flex flex-col justify-between min-h-[310px] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
              >
                {/* Card Top: Icon & Counter */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#17171d] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-[#ff4e3e]/40 group-hover:shadow-[0_0_20px_rgba(255,78,62,0.25)] transition-all">
                      <Icon className="w-5 h-5 text-[#ff4e3e] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500 tracking-wider">
                      {service.counter}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-white transition-colors flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#ff4e3e] transition-all" />
                  </h3>

                  <p className="text-zinc-400 text-sm font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Bottom: Tags */}
                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-white/[0.06]">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-full px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
