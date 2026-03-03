'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface CTAProps {
  lang: string
  dictionary: {
    cta: { title: string; subtitle: string; button: string }
  }
}

export default function CTASection({ lang, dictionary }: CTAProps) {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="surface-card"
          style={{ textAlign: 'center', padding: '80px 40px', borderColor: 'var(--accent-subtle)' }}
        >
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
            {dictionary.cta.title}
          </h2>
          <p style={{ fontSize: 18, color: 'var(--foreground-muted)', maxWidth: 480, margin: '0 auto 32px' }}>
            {dictionary.cta.subtitle}
          </p>
          <Link href={`/${lang}/contact`} className="btn-primary">
            {dictionary.cta.button}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
