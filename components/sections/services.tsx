'use client'

import { motion } from 'framer-motion'

interface ServicesProps {
  dictionary: {
    capabilities: {
      title: string
      subtitle: string
      apps: { title: string; description: string }
      software: { title: string; description: string }
      web: { title: string; description: string }
      ai: { title: string; description: string }
    }
  }
}

const icons = {
  apps: '📱',
  software: '💻',
  web: '🌐',
  ai: '🤖',
}

export default function ServicesSection({ dictionary }: ServicesProps) {
  const items = [
    { key: 'apps', ...dictionary.capabilities.apps },
    { key: 'software', ...dictionary.capabilities.software },
    { key: 'web', ...dictionary.capabilities.web },
    { key: 'ai', ...dictionary.capabilities.ai },
  ]

  return (
    <section className="section" style={{ background: 'var(--background-subtle)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
            {dictionary.capabilities.title}
          </h2>
          <p style={{ fontSize: 18, color: 'var(--foreground-muted)', maxWidth: 560, margin: '0 auto' }}>
            {dictionary.capabilities.subtitle}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
          {items.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="surface-card"
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{icons[item.key as keyof typeof icons]}</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>{item.title}</h3>
              <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
