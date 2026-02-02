'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Dictionary } from '@/lib/dictionary'
import { FadeIn } from '@/components/animations/fade-in'

interface CTASectionProps {
  dict: Dictionary
  lang: string
}

export function CTASection({ dict, lang }: CTASectionProps) {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {dict.cta.title}
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            {dict.cta.subtitle}
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 px-10 py-5 bg-blue-500 text-white rounded-full font-medium text-lg hover:bg-blue-600 transition-colors glow"
            >
              {dict.cta.button}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
