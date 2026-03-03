'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Accent label */}
          <div style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'var(--accent-subtle)', borderRadius: 9999, fontSize: 13, fontWeight: 500, color: 'var(--accent)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)' }} />
            Technology & Innovation
          </div>

          {/* Title */}
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--foreground)', maxWidth: 800, margin: '0 auto 24px' }}>
            {dictionary.hero.title}
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--foreground-muted)', maxWidth: 640, margin: '0 auto 48px', lineHeight: 1.6 }}>
            {dictionary.hero.subtitle}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`/${lang}/solutions`} className="btn-primary">
              {dictionary.hero.cta}
            </Link>
            <Link href={`/${lang}/products`} className="btn-secondary">
              {dictionary.hero.ctaSecondary}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 24, height: 40, border: '2px solid var(--surface-border)', borderRadius: 12, display: 'flex', justifyContent: 'center', paddingTop: 8 }}
        >
          <div style={{ width: 3, height: 8, borderRadius: 2, background: 'var(--foreground-muted)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
