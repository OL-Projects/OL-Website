import Link from 'next/link'

interface FooterProps {
  lang: string
  dictionary: {
    footer: {
      tagline: string
      rights: string
      privacy: string
      terms: string
      contact: string
    }
    nav: {
      solutions: string
      products: string
      about: string
      contact: string
    }
  }
}

export default function Footer({ lang, dictionary }: FooterProps) {
  return (
    <footer style={{ borderTop: '1px solid var(--surface-border)', background: 'var(--background)' }}>
      <div className="container" style={{ padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--foreground)', marginBottom: 12, letterSpacing: '-0.03em' }}>OL</div>
            <p style={{ fontSize: 14, color: 'var(--foreground-muted)', lineHeight: 1.6 }}>
              {dictionary.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link href={`/${lang}/solutions`} style={{ fontSize: 14, color: 'var(--foreground-muted)', textDecoration: 'none' }}>{dictionary.nav.solutions}</Link>
              <Link href={`/${lang}/products`} style={{ fontSize: 14, color: 'var(--foreground-muted)', textDecoration: 'none' }}>{dictionary.nav.products}</Link>
              <Link href={`/${lang}/about`} style={{ fontSize: 14, color: 'var(--foreground-muted)', textDecoration: 'none' }}>{dictionary.nav.about}</Link>
              <Link href={`/${lang}/contact`} style={{ fontSize: 14, color: 'var(--foreground-muted)', textDecoration: 'none' }}>{dictionary.nav.contact}</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link href={`/${lang}/privacy`} style={{ fontSize: 14, color: 'var(--foreground-muted)', textDecoration: 'none' }}>{dictionary.footer.privacy}</Link>
              <Link href={`/${lang}/terms`} style={{ fontSize: 14, color: 'var(--foreground-muted)', textDecoration: 'none' }}>{dictionary.footer.terms}</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{dictionary.footer.contact}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="mailto:admin@olpro.ca" style={{ fontSize: 14, color: 'var(--foreground-muted)', textDecoration: 'none' }}>admin@olpro.ca</a>
              <span style={{ fontSize: 14, color: 'var(--foreground-muted)' }}>Canada 🇨🇦</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ marginTop: 64, paddingTop: 24, borderTop: '1px solid var(--surface-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontSize: 13, color: 'var(--foreground-subtle)' }}>
            © {new Date().getFullYear()} OL. {dictionary.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  )
}
