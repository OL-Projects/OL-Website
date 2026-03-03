'use client'

import { FadeIn } from '@/components/animations/fade-in'

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
        <FadeIn>
          <div style={{ marginBottom: 80 }}>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16 }}>{a.title}</h1>
            <p style={{ fontSize: 20, color: 'var(--foreground-muted)' }}>{a.subtitle}</p>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48, paddingBottom: 120 }}>
          <FadeIn>
            <div className="surface-card" style={{ padding: 48 }}>
              <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>{a.mission.title}</h2>
              <p style={{ fontSize: 18, color: 'var(--foreground-muted)', lineHeight: 1.7, maxWidth: 720 }}>{a.mission.description}</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="surface-card" style={{ padding: 48 }}>
              <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>{a.team.title}</h2>
              <p style={{ fontSize: 18, color: 'var(--foreground-muted)', lineHeight: 1.7, maxWidth: 720 }}>{a.team.description}</p>
            </div>
          </FadeIn>

          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>{a.values.title}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {a.values.items.map((v: { title: string; description: string }, i: number) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="surface-card">
                    <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{v.title}</h3>
                    <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>{v.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn>
            <div className="surface-card" style={{ padding: 48 }}>
              <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>{a.tech.title}</h2>
              <p style={{ fontSize: 18, color: 'var(--foreground-muted)', lineHeight: 1.7, maxWidth: 720 }}>{a.tech.description}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  )
}
