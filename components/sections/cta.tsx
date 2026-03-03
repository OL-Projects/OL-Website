'use client'

import Link from 'next/link'
import { FadeIn } from '@/components/animations/fade-in'

interface CTAProps {
  lang: string
  dictionary: {
    cta: { title: string; subtitle: string; button: string }
  }
}

export default function CTASection({ lang, dictionary }: CTAProps) {
  return (
    <section style={{ padding: '120px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16, color: 'var(--foreground)' }}>
            {dictionary.cta.title}
          </h2>
          <p style={{ fontSize: 17, color: 'var(--foreground-muted)', maxWidth: 500, margin: '0 auto 40px' }}>
            {dictionary.cta.subtitle}
          </p>
          <Link
            href={`/${lang}/contact`}
            style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 36px', background: 'var(--accent)', color: '#fff', borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s ease' }}
          >
            {dictionary.cta.button}
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
