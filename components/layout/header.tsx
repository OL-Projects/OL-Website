'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/components/theme-provider'
import { motion } from 'framer-motion'
import type { Dictionary } from '@/lib/dictionary'

interface HeaderProps {
  dict: Dictionary
  lang: string
}

export function Header({ dict, lang }: HeaderProps) {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  
  const otherLang = lang === 'en' ? 'fr' : 'en'
  const switchLangPath = pathname.replace(`/${lang}`, `/${otherLang}`)

  const navItems = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/approach`, label: dict.nav.approach },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/5 dark:bg-black/20 border-b border-white/10"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${lang}`} className="text-2xl font-bold tracking-tight">
          <span className="text-black dark:text-white">OL</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:text-black dark:hover:text-white ${
                pathname === item.href
                  ? 'text-black dark:text-white'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <Link
            href={switchLangPath}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors uppercase"
          >
            {otherLang}
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
