import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import faqImg from '../assets/clear-answers.png';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can we kick off a new sprint?',
    answer:
      'We can typically kick off within 48 to 72 hours of your initial discovery call. Once the sprint scope and technical requirements are confirmed, our senior squad embeds into your communication channels (Slack/Discord) and begins Sprint Day 1 immediately.',
  },
  {
    id: 'faq-2',
    question: 'How does the AI prototyping workflow differ from traditional design?',
    answer:
      'Instead of static mockups and click-through Figma slides that hide technical constraints, we build interactive functional code directly connected to live LLMs, API endpoints, and real-time state machines. This allows your team to test actual prompt latencies, ergonomics, and edge cases on day one.',
  },
  {
    id: 'faq-3',
    question: 'What deliverables do we receive at the end of a sprint?',
    answer:
      'You receive full intellectual property and source code ownership. Deliverables include a clean, typed React/TypeScript codebase styled with Tailwind CSS, production component architecture, comprehensive design tokens, Figma master libraries, and async video documentation explaining every architectural decision.',
  },
  {
    id: 'faq-4',
    question: 'Can we pause or cancel our subscription at any time?',
    answer:
      'Yes, absolutely. Our Growth Squad retainer model is billing-cycle based with zero long-term lock-in or cancellation penalties. If your internal roadmap requires a pause between major milestones, you can pause your cycle and reactivate when you are ready to sprint again.',
  },
  {
    id: 'faq-5',
    question: 'Do you collaborate with our existing engineering and product teams?',
    answer:
      'Yes. We do not operate in a silo. We work directly alongside your VP of Product, CTO, and frontend engineers. We participate in standups, submit clean pull requests to your repositories, and ensure all design decisions align with your production infrastructure.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="w-full bg-black py-24 sm:py-32 px-6 sm:px-10 md:px-12 lg:px-16 border-t border-white/[0.06] relative"
    >
      <div className="w-full max-w-[1000px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141418] border border-white/10 text-xs font-medium text-zinc-400 mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#ff4e3e]" />
            <span>Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4"
          >
            Clear answers.{' '}
            <span className="bg-gradient-to-r from-[#ff5b4c] via-[#eb3528] to-[#ff4e3e] bg-clip-text text-transparent">
              Zero ambiguity.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base font-normal max-w-lg"
          >
            Everything you need to know about our sprint agreements, technical deliverables, and partnership model.
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
            src={faqImg} 
            alt="Clear answers. Zero ambiguity." 
            className="w-full h-auto object-cover rounded-3xl group-hover:scale-[1.01] transition-transform duration-500"
          />
        </motion.div>

        {/* 5 Questions Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.id}
                id={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#101015] border-[#ff4e3e]/40 shadow-[0_0_24px_rgba(255,78,62,0.12)]'
                    : 'bg-[#0e0e12]/90 hover:bg-[#121217] border-white/[0.08] hover:border-white/15'
                }`}
              >
                <button
                  id={`btn-toggle-faq-${index + 1}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer select-none"
                >
                  <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? 'bg-[#ff4e3e] text-white rotate-180 shadow-[0_0_12px_rgba(255,78,62,0.4)]'
                        : 'bg-white/5 text-zinc-400 border border-white/10'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
