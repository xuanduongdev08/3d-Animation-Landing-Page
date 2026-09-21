import React from 'react';
import { motion } from 'motion/react';
import { Search, Code2, CheckCircle2, Rocket, Clock } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: React.ElementType;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Scope, Architecture & Strategy',
    duration: 'Sprint Days 1–3',
    description: 'We rapidly audit your technical landscape, user touchpoints, and growth objectives. No 40-page decks — just raw alignment and an actionable technical roadmap.',
    deliverables: ['Tech Stack Audit', 'Core User Journeys', 'Sprint Architecture Spec'],
    icon: Search,
  },
  {
    number: '02',
    title: 'Prototype',
    subtitle: 'Functional Code & High-Fi Craft',
    duration: 'Sprint Days 4–8',
    description: 'We build interactive functional sandboxes plugging live AI models, interactive state, and polished layouts directly into browser builds you can test on day one.',
    deliverables: ['Clickable Web Builds', 'Live LLM Integration', 'Interactive UI Sandbox'],
    icon: Code2,
  },
  {
    number: '03',
    title: 'Validate',
    subtitle: 'Stress Testing & Conversion Loop',
    duration: 'Sprint Days 9–11',
    description: 'We stress-test model outputs, latency thresholds, accessibility, and user comprehension with stakeholder feedback and telemetry-backed iteration.',
    deliverables: ['Latency Optimization', 'Usability Audits', 'Design System Sync'],
    icon: CheckCircle2,
  },
  {
    number: '04',
    title: 'Launch',
    subtitle: 'Production Handoff & Momentum',
    duration: 'Sprint Days 12–14',
    description: 'Clean developer handoff with typed components, edge deployment setup, CI/CD verification, and post-release support to guarantee immediate traction.',
    deliverables: ['Typed Component Repo', 'Production Deployment', 'Post-Launch Sprint Care'],
    icon: Rocket,
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section 
      id="process" 
      className="w-full bg-black py-24 sm:py-32 px-6 sm:px-10 md:px-12 lg:px-16 border-t border-white/[0.06] relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 opacity-75"
        src="https://res.cloudinary.com/sgu1fi3k/video/upload/v1789964191/From_concept_to_live._Four_decisive_steps.mp4"
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
              <span>The Sprint Operating Model</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              From concept to live.{' '}
              <span className="bg-gradient-to-r from-[#ff5b4c] via-[#eb3528] to-[#ff4e3e] bg-clip-text text-transparent">
                Four decisive steps.
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
            A 14-day cadence engineered for speed without compromising typographic precision or engineering integrity.
          </motion.p>
        </div>

        {/* Timeline Visual Container */}
        <div className="relative">
          {/* Desktop connecting progress bar behind cards */}
          <div className="hidden lg:block absolute top-[4.5rem] left-8 right-8 h-[2px] bg-gradient-to-r from-[#de3126] via-[#ff4e3e] to-[#de3126] opacity-30 pointer-events-none" />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  id={`process-step-${step.title.toLowerCase()}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0e0e12]/90 hover:bg-[#121217] border border-white/[0.08] hover:border-white/20 rounded-3xl p-7 flex flex-col justify-between min-h-[360px] transition-all duration-300 shadow-lg group relative"
                >
                  {/* Step Header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      {/* Red Accent Node */}
                      <div className="w-12 h-12 rounded-2xl bg-[#17171d] border border-white/10 flex items-center justify-center text-[#ff4e3e] group-hover:bg-[#ff4e3e] group-hover:text-white transition-all shadow-[0_0_18px_rgba(255,78,62,0.2)]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#ff4e3e] tracking-widest px-2.5 py-1 rounded-full bg-[#ff4e3e]/10 border border-[#ff4e3e]/20">
                        STEP {step.number}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono mb-2">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{step.duration}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-medium text-[#ff4e3e] mb-3">
                      {step.subtitle}
                    </p>

                    <p className="text-zinc-400 text-sm font-normal leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables pill list */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                    {step.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e3e]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
