'use client'

import { IconApps, IconCode, IconGlobe, IconAI } from '@/components/icons'
import Link from 'next/link'
import { FadeIn } from '@/components/animations/fade-in'
import type { Dictionary } from '@/lib/dictionary'

interface ServicesProps {
  lang: string
  dictionary: Dictionary
}

const icons = [IconApps, IconCode, IconGlobe, IconAI]

export default function ServicesSection({ lang, dictionary }: ServicesProps) {
  const cap = dictionary.capabilities
  const items = [cap.apps, cap.software, cap.web, cap.ai]

  return (
    <section style={{ padding: '120px 0', background: 'var(--background-subtle)' }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16, color: 'var(--foreground)' }}>
              {cap.title}
            </h2>
            <p style={{ fontSize: 17, color: 'var(--foreground-muted)', maxWidth: 500, margin: '0 auto' }}>
              {cap.subtitle}
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <Link
                  href={`/${lang}/solutions`}
                  className="surface-card"
                  style={{ display: 'block', padding: 32, textDecoration: 'none', height: '100%', transition: 'border-color 0.2s ease' }}
                >
                  <div style={{ marginBottom: 16, color: 'var(--accent)' }}>
                    {Icon && <Icon />}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: 'var(--foreground)' }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>{item.description}</p>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
