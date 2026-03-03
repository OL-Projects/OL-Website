'use client'

import { IconCheck } from '@/components/icons'
import { FadeIn } from '@/components/animations/fade-in'

interface ProductsContentProps {
  lang: string
  dictionary: {
    products: {
      title: string
      subtitle: string
      ol: { title: string; tagline: string; description: string; status: string; platform: string; price: string; features: string[] }
      comingSoon: { title: string; description: string; status: string }
    }
  }
}

export default function ProductsContent({ dictionary }: ProductsContentProps) {
  const p = dictionary.products

  return (
    <main style={{ paddingTop: 120 }}>
      <div className="container">
        <FadeIn>
          <div style={{ marginBottom: 80 }}>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16 }}>{p.title}</h1>
            <p style={{ fontSize: 20, color: 'var(--foreground-muted)', maxWidth: 640 }}>{p.subtitle}</p>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingBottom: 120 }}>
          <FadeIn>
            <div className="surface-card" style={{ padding: 48 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
                <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em' }}>{p.ol.title}</h2>
                <span className="badge badge-live">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', marginRight: 6 }} />
                  {p.ol.status}
                </span>
              </div>
              <p style={{ fontSize: 18, color: 'var(--accent)', fontWeight: 500, marginBottom: 16 }}>{p.ol.tagline}</p>
              <p style={{ fontSize: 16, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 12, maxWidth: 720 }}>{p.ol.description}</p>
              
              <div style={{ display: 'flex', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 14, color: 'var(--foreground-subtle)' }}>Platform: <strong style={{ color: 'var(--foreground)' }}>{p.ol.platform}</strong></span>
                <span style={{ fontSize: 14, color: 'var(--foreground-subtle)' }}>Price: <strong style={{ color: 'var(--success)' }}>{p.ol.price}</strong></span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
                {p.ol.features.map((f: string, i: number) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--foreground-muted)' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}><IconCheck size={14} /></span> {f}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="surface-card" style={{ padding: 48, borderStyle: 'dashed' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                <h2 style={{ fontSize: 24, fontWeight: 600 }}>{p.comingSoon.title}</h2>
                <span className="badge badge-dev">{p.comingSoon.status}</span>
              </div>
              <p style={{ fontSize: 16, color: 'var(--foreground-muted)' }}>{p.comingSoon.description}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  )
}
