import { getDictionary } from '@/lib/dictionary'
import HeroSection from '@/components/sections/hero'
import ServicesSection from '@/components/sections/services'
import CTASection from '@/components/sections/cta'
import Link from 'next/link'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }]
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'fr')

  return (
    <main>
      <HeroSection lang={lang} dictionary={dict} />
      <ServicesSection dictionary={dict} />

      {/* Technology Strip */}
      <section style={{ padding: '48px 0', borderTop: '1px solid var(--surface-border)', borderBottom: '1px solid var(--surface-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--foreground-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 20 }}>
            {dict.technology.title}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {dict.technology.items.map((tech: string) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="section">
        <div className="container">
          <div className="surface-card" style={{ padding: '64px 48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
            <div>
              <span className="badge badge-live" style={{ marginBottom: 16, display: 'inline-flex' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', marginRight: 6 }} />
                {dict.featured.label}
              </span>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 12 }}>
                {dict.featured.title}
              </h2>
              <p style={{ fontSize: 16, color: 'var(--foreground-muted)', lineHeight: 1.6, maxWidth: 560 }}>
                {dict.featured.description}
              </p>
            </div>
            <Link href={`/${lang}/products`} className="btn-secondary" style={{ whiteSpace: 'nowrap' }}>
              {dict.featured.cta} →
            </Link>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section" style={{ background: 'var(--background-subtle)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', textAlign: 'center', marginBottom: 64 }}>
            {dict.principles.title}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[dict.principles.privacy, dict.principles.performance, dict.principles.canadian].map((p: { title: string; description: string }, i: number) => (
              <div key={i} className="surface-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{['🔒', '⚡', '🇨🇦'][i]}</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection lang={lang} dictionary={dict} />
    </main>
  )
}
