import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Layers, Cpu, Globe, Compass, ShieldCheck } from 'lucide-react';
import craftedImg from '../assets/crafted-at-speed.png';

interface WorksSectionProps {
  onSelectProject?: (title: string) => void;
}

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  accent: string;
  previewType: 'ai-interface' | 'defi-chart' | 'design-system' | 'mobile-sprint' | 'agent-canvas' | 'spatial-ui';
}

const projects: ProjectItem[] = [
  {
    id: 'project-synthetix',
    title: 'Synthetix Protocol',
    category: 'AI Prototyping & Interface',
    description: 'Real-time multi-agent autonomous prompt orchestration workspace with latency <120ms.',
    accent: '#ff4e3e',
    previewType: 'ai-interface',
  },
  {
    id: 'project-chronos',
    title: 'Chronos Yield Engine',
    category: 'DeFi & Fintech Ecosystem',
    description: 'Algorithmic liquidity visualization and responsive high-frequency telemetry dashboard.',
    accent: '#eb3528',
    previewType: 'defi-chart',
  },
  {
    id: 'project-veloce',
    title: 'Veloce Mobility',
    category: 'Product Design & Mobile',
    description: 'Autonomous vehicle booking platform and live vehicle telemetry HUD experience.',
    accent: '#ff5b4c',
    previewType: 'mobile-sprint',
  },
  {
    id: 'project-aura',
    title: 'Aura Spatial Systems',
    category: 'Art Direction & 3D Web',
    description: 'Interactive spatial canvas and 3D architectural soundscape explorer for spatial audio.',
    accent: '#ff705f',
    previewType: 'spatial-ui',
  },
  {
    id: 'project-nexus',
    title: 'Nexus Enterprise Core',
    category: 'Design System & Architecture',
    description: 'Unified multi-platform component library adopted across 14 enterprise global engineering teams.',
    accent: '#de2c1f',
    previewType: 'design-system',
  },
  {
    id: 'project-orbit',
    title: 'Orbit Compute Agent',
    category: 'AI Prototyping & Agents',
    description: 'Cloud cluster orchestration powered by contextual LLM agents with automated rollback safety.',
    accent: '#ff4e3e',
    previewType: 'agent-canvas',
  },
];

export const WorksSection: React.FC<WorksSectionProps> = ({ onSelectProject }) => {
  return (
    <section 
      id="works" 
      className="w-full bg-black py-24 sm:py-32 px-6 sm:px-10 md:px-12 lg:px-16 border-t border-white/[0.06] relative"
    >
      <div className="w-full max-w-[1550px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141418] border border-white/10 text-xs font-medium text-zinc-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e3e]"></span>
              <span>Selected Engagements</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Crafted at speed.{' '}
              <span className="bg-gradient-to-r from-[#ff5b4c] via-[#eb3528] to-[#ff4e3e] bg-clip-text text-transparent">
                Shipped to scale.
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
            Explore recent sprint cycles where our design and engineering squad delivered flagship digital experiences for industry front-runners.
          </motion.p>
        </div>

        {/* Section Visual Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full mb-12 sm:mb-16 rounded-3xl overflow-hidden border border-white/10 bg-[#0e0e12] shadow-[0_12px_45px_rgba(0,0,0,0.8)] group"
        >
          <img 
            src={craftedImg} 
            alt="Crafted at speed. Shipped to scale." 
            className="w-full h-auto object-cover rounded-3xl group-hover:scale-[1.01] transition-transform duration-500"
          />
        </motion.div>

        {/* Projects Grid: 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => onSelectProject?.(project.title)}
                className="group relative bg-[#0e0e12]/90 hover:bg-[#121217] border border-white/[0.08] hover:border-white/20 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_12px_45px_rgba(0,0,0,0.85)]"
              >
                {/* Project Mockup Graphic Placeholder */}
                <div className="relative w-full h-56 sm:h-64 bg-[#141419] overflow-hidden border-b border-white/[0.06] flex items-center justify-center p-6 select-none">
                  {/* Atmospheric Glow behind mockup */}
                  <div 
                    className="absolute -top-12 -right-12 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ backgroundColor: project.accent }}
                  />

                  {/* Visual Composition */}
                  <div className="w-full h-full rounded-2xl bg-[#09090c] border border-white/10 p-4 flex flex-col justify-between relative group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff4e3e]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">v2.4 active</span>
                    </div>

                    {/* Middle Graphic based on type */}
                    <div className="my-auto py-2">
                      {project.previewType === 'ai-interface' && (
                        <div className="space-y-2">
                          <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                          <div className="h-2 w-1/2 bg-[#ff4e3e]/40 rounded-full" />
                          <div className="grid grid-cols-3 gap-1.5 pt-1">
                            <div className="h-7 rounded-lg bg-white/5 border border-white/5" />
                            <div className="h-7 rounded-lg bg-[#ff4e3e]/20 border border-[#ff4e3e]/30" />
                            <div className="h-7 rounded-lg bg-white/5 border border-white/5" />
                          </div>
                        </div>
                      )}

                      {project.previewType === 'defi-chart' && (
                        <div className="flex items-end justify-between h-14 px-2 gap-1.5">
                          <div className="w-full h-[40%] bg-zinc-800 rounded-t-sm" />
                          <div className="w-full h-[65%] bg-zinc-700 rounded-t-sm" />
                          <div className="w-full h-[50%] bg-zinc-800 rounded-t-sm" />
                          <div className="w-full h-[85%] bg-gradient-to-t from-[#80100a] to-[#ff4e3e] rounded-t-sm shadow-[0_0_12px_rgba(255,78,62,0.4)]" />
                          <div className="w-full h-[70%] bg-zinc-700 rounded-t-sm" />
                          <div className="w-full h-[95%] bg-[#ff4e3e] rounded-t-sm" />
                        </div>
                      )}

                      {project.previewType === 'mobile-sprint' && (
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Compass className="w-6 h-6 text-[#ff4e3e]" />
                          </div>
                          <div className="space-y-1.5 flex-1">
                            <div className="h-2.5 w-4/5 bg-white/30 rounded-full" />
                            <div className="h-2 w-3/5 bg-zinc-600 rounded-full" />
                          </div>
                        </div>
                      )}

                      {project.previewType === 'spatial-ui' && (
                        <div className="flex items-center justify-center py-1">
                          <div className="w-16 h-16 rounded-full border border-dashed border-[#ff4e3e]/50 flex items-center justify-center animate-spin-slow">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#de3126] to-[#ff4e3e] opacity-80" />
                          </div>
                        </div>
                      )}

                      {project.previewType === 'design-system' && (
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[10px] text-zinc-400 font-mono">
                            Button.Primary
                          </div>
                          <div className="p-2 rounded-lg bg-[#ff4e3e]/20 border border-[#ff4e3e]/40 text-[10px] text-white font-mono">
                            Active State
                          </div>
                        </div>
                      )}

                      {project.previewType === 'agent-canvas' && (
                        <div className="flex items-center justify-between gap-2 px-1">
                          <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-400">
                            LLM
                          </div>
                          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 via-[#ff4e3e] to-white/20" />
                          <div className="w-7 h-7 rounded-lg bg-[#de2c1f] flex items-center justify-center text-[10px] font-mono text-white">
                            API
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                      <span>DEPLOYED PROD</span>
                      <span className="text-[#ff4e3e]">99.9% UPTIME</span>
                    </div>
                  </div>
                </div>

                {/* Card Text & Metadata */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-[#ff4e3e] tracking-wide uppercase">
                        {project.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-[#ff4e3e]/40 group-hover:bg-[#ff4e3e]/10 transition-all">
                        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#ff4e3e] transition-colors" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
