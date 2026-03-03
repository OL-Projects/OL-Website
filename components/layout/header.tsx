'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTheme } from '@/components/theme-provider'
import { IconSun, IconMoon, IconMenu, IconX } from '@/components/icons'

interface HeaderProps {
  lang: string
  dictionary: {
    nav: {
      home: string
      solutions: string
      products: string
      about: string
      contact: string
    }
  }
}

export default function Header({ lang, dictionary }: HeaderProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const otherLang = lang === 'en' ? 'fr' : 'en'
  const langPath = pathname.replace(`/${lang}`, `/${otherLang}`)

  const navItems = [
    { href: `/${lang}/solutions`, label: dictionary.nav.solutions },
    { href: `/${lang}/products`, label: dictionary.nav.products },
    { href: `/${lang}/about`, label: dictionary.nav.about },
    { href: `/${lang}/contact`, label: dictionary.nav.contact },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'var(--background)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--surface-border)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <Link href={`/${lang}`} style={{ fontSize: 22, fontWeight: 700, color: 'var(--foreground)', textDecoration: 'none', letterSpacing: '-0.03em' }}>
          OL
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: isActive(item.href) ? 'var(--foreground)' : 'var(--foreground-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link
            href={langPath}
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--foreground-muted)',
              textDecoration: 'none',
              padding: '6px 12px',
              border: '1px solid var(--surface-border)',
              borderRadius: 6,
            }}
          >
            {otherLang.toUpperCase()}
          </Link>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: 'none',
              border: '1px solid var(--surface-border)',
              borderRadius: 6,
              padding: '6px 8px',
              cursor: 'pointer',
              color: 'var(--foreground-muted)',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            aria-label="Menu"
            style={{
              background: 'none',
              border: '1px solid var(--surface-border)',
              borderRadius: 6,
              padding: '6px 8px',
              cursor: 'pointer',
              color: 'var(--foreground-muted)',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            {mobileOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden" style={{ padding: '16px 24px 24px', borderTop: '1px solid var(--surface-border)', background: 'var(--background)' }}>
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: 16,
                fontWeight: 500,
                color: isActive(item.href) ? 'var(--foreground)' : 'var(--foreground-muted)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--surface-border)',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
