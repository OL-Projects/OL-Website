'use client'

import Link from 'next/link'
import { FadeIn } from '@/components/animations/fade-in'

interface HeroProps {
  lang: string
  dictionary: {
    hero: { title: string; subtitle: string; cta: string; ctaSecondary: string }
  }
}

export default function HeroSection({ lang, dictionary }: HeroProps) {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center', paddingTop: 120, paddingBottom: 120 }}>
        <FadeIn>
          {/* Accent label */}
          <div style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'var(--accent-subtle)', borderRadius: 9999, fontSize: 13, fontWeight: 500, color: 'var(--accent)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)' }} />
            Technology &amp; Innovation
          </div>

          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: 800, margin: '0 auto 24px', color: 'var(--foreground)' }}>
            {dictionary.hero.title}
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--foreground-muted)', maxWidth: 600, margin: '0 auto 48px', lineHeight: 1.6 }}>
            {dictionary.hero.subtitle}
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href={`/${lang}/solutions`}
              style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', background: 'var(--accent)', color: '#fff', borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s ease' }}
            >
              {dictionary.hero.cta}
            </Link>
            <Link
              href={`/${lang}/products`}
              style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', border: '1px solid var(--surface-border)', color: 'var(--foreground)', borderRadius: 10, fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: 'border-color 0.2s ease' }}
            >
              {dictionary.hero.ctaSecondary}
            </Link>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }}>
          <div style={{ width: 24, height: 40, border: '2px solid var(--foreground-muted)', borderRadius: 12, display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
            <div className="scroll-dot" style={{ width: 3, height: 8, background: 'var(--foreground-muted)', borderRadius: 2 }} />
          </div>
        </div>
      </div>
    </section>
  )
}
