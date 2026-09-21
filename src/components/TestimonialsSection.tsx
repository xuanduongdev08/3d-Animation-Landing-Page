import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import testimonialsImg from '../assets/validated-by-founders.png';

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metrics: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    quote:
      'AgentAI completely transformed how our product team operates. In just 14 days, they prototyped and stress-tested an autonomous multi-agent canvas that had been stuck in our backlog for six months. Our user retention jumped 38% after launch.',
    author: 'Elena Rostova',
    role: 'VP of Product Experience',
    company: 'Synthetix Cloud',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    metrics: '+38% 30-Day Retention',
  },
  {
    id: 'testimonial-2',
    quote:
      'Working with AgentAI feels like having an unfair competitive advantage. The typographic precision, interaction physics, and real LLM integration exceeded every benchmark. They don’t just hand over Figma files — they ship working code that drops straight into production.',
    author: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Veloce AI Labs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    metrics: 'Launched 2 Weeks Ahead of Schedule',
  },
  {
    id: 'testimonial-3',
    quote:
      'The speed and aesthetic caliber of their sprint squad is unlike any agency on the market. They redesigned our entire DeFi analytics suite and delivered sub-100ms UI responses. Our community and institutional backers were genuinely stunned.',
    author: 'Siddharth Chen',
    role: 'Head of Engineering',
    company: 'Chronos Protocol',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    metrics: '$28M Total Volume Surpassed',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section 
      id="testimonials" 
      className="w-full bg-black py-24 sm:py-32 px-6 sm:px-10 md:px-12 lg:px-16 border-t border-white/[0.06] relative"
    >
      <div className="w-full max-w-[1550px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141418] border border-white/10 text-xs font-medium text-zinc-400 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4e3e]"></span>
            <span>Proof of Velocity</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4"
          >
            Validated by{' '}
            <span className="bg-gradient-to-r from-[#ff5b4c] via-[#eb3528] to-[#ff4e3e] bg-clip-text text-transparent">
              founders & leaders.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base font-normal"
          >
            Real results from visionary teams who accelerated their product cycles with our embedded sprint squad.
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
            src={testimonialsImg} 
            alt="Validated by founders & leaders." 
            className="w-full h-auto object-cover rounded-3xl group-hover:scale-[1.01] transition-transform duration-500"
          />
        </motion.div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              id={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0e0e12]/90 hover:bg-[#121217] border border-white/[0.08] hover:border-white/20 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-lg group relative"
            >
              <div>
                {/* 5 Stars & Metric Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#ff4e3e] text-[#ff4e3e]"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-medium text-[#ff4e3e] bg-[#ff4e3e]/10 border border-[#ff4e3e]/20 px-2 py-0.5 rounded-full">
                    {t.metrics}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-zinc-300 text-sm sm:text-base font-normal leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-white/[0.06]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {t.author}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {t.role} • <span className="text-zinc-300 font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
