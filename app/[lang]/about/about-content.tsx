'use client'

import { motion } from 'framer-motion'

interface AboutContentProps {
  dictionary: {
    about: {
      title: string
      subtitle: string
      mission: { title: string; description: string }
      team: { title: string; description: string }
      values: { title: string; items: { title: string; description: string }[] }
      tech: { title: string; description: string }
    }
  }
}

export default function AboutContent({ dictionary }: AboutContentProps) {
  const a = dictionary.about

  return (
    <main style={{ paddingTop: 120 }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 80 }}>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16 }}>{a.title}</h1>
          <p style={{ fontSize: 20, color: 'var(--foreground-muted)' }}>{a.subtitle}</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48, paddingBottom: 120 }}>
          {/* Mission */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface-card" style={{ padding: 48 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>{a.mission.title}</h2>
            <p style={{ fontSize: 18, color: 'var(--foreground-muted)', lineHeight: 1.7, maxWidth: 720 }}>{a.mission.description}</p>
          </motion.div>

          {/* Team */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface-card" style={{ padding: 48 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>{a.team.title}</h2>
            <p style={{ fontSize: 18, color: 'var(--foreground-muted)', lineHeight: 1.7, maxWidth: 720 }}>{a.team.description}</p>
          </motion.div>

          {/* Values */}
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>{a.values.title}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {a.values.items.map((v: { title: string; description: string }, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="surface-card">
                  <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technology */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface-card" style={{ padding: 48 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>{a.tech.title}</h2>
            <p style={{ fontSize: 18, color: 'var(--foreground-muted)', lineHeight: 1.7, maxWidth: 720 }}>{a.tech.description}</p>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
