import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan?: (planName: string) => void;
  onBookCall?: () => void;
}

interface PlanItem {
  id: string;
  name: string;
  price: string;
  cadence: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  features: string[];
  ctaLabel: string;
}

const plans: PlanItem[] = [
  {
    id: 'plan-starter',
    name: 'Starter Sprint',
    price: '$4,900',
    cadence: '/ sprint',
    description: 'Perfect for early-stage teams needing a focused, production-grade MVP or high-fidelity AI proof of concept.',
    features: [
      'One concentrated 10-day sprint',
      'Dedicated Senior Designer & Technologist',
      'Functional browser-based UI prototype',
      'Core component design system & typography',
      'Async Loom walkthroughs & daily updates',
      'Clean TypeScript / Tailwind code handoff',
    ],
    ctaLabel: 'Get Started',
  },
  {
    id: 'plan-growth',
    name: 'Growth Squad',
    price: '$8,900',
    cadence: '/ month',
    badge: 'Most Popular',
    isPopular: true,
    description: 'Our flagship continuous sprint model for scaling startups needing high-velocity feature design and AI implementation.',
    features: [
      'Bi-weekly recurring feature sprints',
      'Embedded Product Designer + Creative Engineer',
      'Real-time Slack / Discord communication',
      'Live model integration & latency tuning',
      'Interactive motion physics & micro-interactions',
      'Unlimited revisions during active sprints',
      'Pause or cancel anytime with zero lock-in',
    ],
    ctaLabel: 'Get Started',
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise Custom',
    price: '$16,500',
    cadence: '/ month',
    description: 'Tailored squad architecture for established enterprises needing multi-product redesigns and strategic agentic systems.',
    features: [
      'Full dedicated strike team (3 senior specialists)',
      'Multi-platform design system synchronization',
      'Custom LLM agent pipelines & security review',
      'Executive stakeholder presentations',
      'Priority SLA with <2 hour response times',
      'Custom enterprise contracts & NDAs',
    ],
    ctaLabel: 'Get Started',
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  onBookCall,
}) => {
  return (
    <section 
      id="pricing" 
      className="w-full bg-black py-24 sm:py-32 px-6 sm:px-10 md:px-12 lg:px-16 border-t border-white/[0.06] relative"
    >
      <div className="w-full max-w-[1550px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141418] border border-white/10 text-xs font-medium text-zinc-400 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e3e]"></span>
            <span>Transparent Investment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4"
          >
            Predictable pricing.{' '}
            <span className="bg-gradient-to-r from-[#ff5b4c] via-[#eb3528] to-[#ff4e3e] bg-clip-text text-transparent">
              Compounding results.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl"
          >
            No hidden retainer fees, unpredictable billing hours, or surprise invoices. Choose the sprint rhythm that matches your trajectory.
          </motion.p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">
          {plans.map((plan, index) => {
            const isPopular = plan.isPopular;
            return (
              <motion.div
                key={plan.id}
                id={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#101015] border-2 border-[#ff4e3e] shadow-[0_0_40px_rgba(255,78,62,0.22)] lg:-translate-y-2'
                    : 'bg-[#0e0e12]/90 hover:bg-[#121217] border border-white/[0.08] hover:border-white/20 shadow-lg'
                }`}
              >
                {/* Most Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#de3126] to-[#ff4e3e] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-[0_0_18px_rgba(255,78,62,0.6)] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                {/* Card Top Information */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-8 pb-7 border-b border-white/[0.08]">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-zinc-400">
                      {plan.cadence}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      What is included:
                    </span>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPopular
                              ? 'bg-[#ff4e3e]/20 text-[#ff4e3e]'
                              : 'bg-white/10 text-zinc-300'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs sm:text-sm text-zinc-300 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Get Started Pill Button */}
                <div className="pt-2">
                  <button
                    id={`btn-pricing-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      onSelectPlan?.(plan.name);
                      onBookCall?.();
                    }}
                    className={`w-full py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#de3126] to-[#ff4e3e] text-white shadow-[0_0_24px_rgba(222,49,38,0.45)] hover:brightness-110 active:scale-[0.98]'
                        : 'bg-[#151518] hover:bg-[#202025] text-zinc-200 border border-white/10 hover:border-white/20 active:scale-[0.98]'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee subnote */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-400 font-mono">
            All plans include full source-code ownership, Figma design library, and zero cancellation fees.
          </p>
        </div>
      </div>
    </section>
  );
};
