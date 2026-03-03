'use client'

import { motion } from 'framer-motion'
import { IconApps, IconCode, IconGlobe, IconAI, IconCheck } from '@/components/icons'

interface SolutionsContentProps {
  lang: string
  dictionary: {
    solutions: {
      title: string
      subtitle: string
      apps: { title: string; description: string; capabilities: string[] }
      software: { title: string; description: string; capabilities: string[] }
      web: { title: string; description: string; capabilities: string[] }
      ai: { title: string; description: string; capabilities: string[] }
    }
  }
}

const icons = [IconApps, IconCode, IconGlobe, IconAI]

export default function SolutionsContent({ dictionary }: SolutionsContentProps) {
  const sections = [
    dictionary.solutions.apps,
    dictionary.solutions.software,
    dictionary.solutions.web,
    dictionary.solutions.ai,
  ]

  return (
    <main style={{ paddingTop: 120 }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 80 }}>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16 }}>{dictionary.solutions.title}</h1>
          <p style={{ fontSize: 20, color: 'var(--foreground-muted)', maxWidth: 640 }}>{dictionary.solutions.subtitle}</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48, paddingBottom: 120 }}>
          {sections.map((s, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="surface-card"
                style={{ padding: 48 }}
              >
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20 }}>
                  <div style={{ color: 'var(--accent)' }}><Icon size={32} /></div>
                  <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>{s.title}</h2>
                </div>
                <p style={{ fontSize: 16, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 24, maxWidth: 720 }}>{s.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
                  {s.capabilities.map((cap: string, j: number) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--foreground-muted)' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}><IconCheck size={14} /></span> {cap}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
