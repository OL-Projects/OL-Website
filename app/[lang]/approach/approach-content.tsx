'use client'

import { motion } from 'framer-motion'
import type { Dictionary } from '@/lib/dictionary'
import { FadeIn } from '@/components/animations/fade-in'

interface ApproachContentProps {
  dict: Dictionary
}

const stepIcons = [
  <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg key="3" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  <svg key="4" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
]

export function ApproachContent({ dict }: ApproachContentProps) {
  const steps = [
    { ...dict.approach.steps.assess, icon: stepIcons[0] },
    { ...dict.approach.steps.design, icon: stepIcons[1] },
    { ...dict.approach.steps.build, icon: stepIcons[2] },
    { ...dict.approach.steps.implement, icon: stepIcons[3] },
  ]

  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{dict.approach.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">{dict.approach.subtitle}</p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-blue-500/20">0{index + 1}</span>
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md">{step.description}</p>
                  </div>
                  
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center text-blue-500 relative z-10">
                    {step.icon}
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
