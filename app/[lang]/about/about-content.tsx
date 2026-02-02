'use client'

import type { Dictionary } from '@/lib/dictionary'
import { FadeIn } from '@/components/animations/fade-in'

interface AboutContentProps {
  dict: Dictionary
}

export function AboutContent({ dict }: AboutContentProps) {
  return (
    <section className="py-32 bg-gray-50 dark:bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-gray-900 dark:text-white">{dict.about.title}</h1>
        </FadeIn>

        <div className="space-y-8 text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
          <FadeIn delay={0.1}>
            <p>{dict.about.p1}</p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p>{dict.about.p2}</p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-gray-900 dark:text-white font-medium italic">
              &ldquo;{dict.about.p3}&rdquo;
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="pt-8 border-t border-gray-200 dark:border-white/10">
              <p className="text-xl text-gray-900 dark:text-white">{dict.about.philosophy}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
