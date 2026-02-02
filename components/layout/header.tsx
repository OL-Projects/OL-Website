'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/components/theme-provider'
import { motion, AnimatePresence } from 'framer-motion'
import { MagneticButton } from '@/components/animations/magnetic-button'

interface HeaderProps {
  dict: {
    nav: {
      home: string
      approach: string
      apps?: string
      resources?: string
      database?: string
      search?: string
      about: string
      contact: string
    }
    [key: string]: unknown
  }
  lang: string
}

export function Header({ dict, lang }: HeaderProps) {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const otherLang = lang === 'en' ? 'fr' : 'en'
  const switchLangPath = pathname.replace(`/${lang}`, `/${otherLang}`)

  const navItems = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/approach`, label: dict.nav.approach },
    { href: `/${lang}/apps`, label: dict.nav.apps || 'Apps' },
    { href: `/${lang}/resources`, label: dict.nav.resources || 'Resources' },
    { href: `/${lang}/database`, label: dict.nav.database || 'Database' },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white dark:bg-gray-950/80 border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none will-change-transform"
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <MagneticButton strength={0.2}>
          <Link href={`/${lang}`} className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">OL</span>
          </Link>
        </MagneticButton>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <MagneticButton key={item.href} strength={0.1}>
              <Link
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-gray-900 dark:text-white font-medium bg-gray-100 dark:bg-white/10'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            </MagneticButton>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Dynamic Search Button */}
          <MagneticButton strength={0.2}>
            <Link
              href={`/${lang}/search`}
              className="relative group flex items-center gap-2 px-3 py-2 rounded-xl overflow-hidden"
              aria-label="Search"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gray-100 dark:bg-white/10 group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-xl" />
              </div>
              <div className="relative flex items-center gap-2 z-10">
                <span className="text-sm font-semibold text-gray-800 dark:text-white group-hover:text-white transition-colors duration-300">OL</span>
                <div className="w-px h-4 bg-gray-300 dark:bg-white/30 group-hover:bg-white/50 transition-colors duration-300" />
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <div className="absolute inset-0 rounded-xl border border-gray-200 dark:border-white/10 group-hover:border-transparent transition-colors duration-300" />
            </Link>
          </MagneticButton>

          {/* Language Toggle */}
          <MagneticButton strength={0.2}>
            <Link
              href={switchLangPath}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 uppercase px-2 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5"
            >
              {otherLang}
            </Link>
          </MagneticButton>

          {/* Theme Toggle */}
          <MagneticButton strength={0.2}>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 border border-gray-200 dark:border-white/10 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
          </MagneticButton>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg className="w-4 h-4 text-gray-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden border-t border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950/95 backdrop-blur-xl"
          >
            <div className="p-4 space-y-1">
              <Link
                href={`/${lang}/search`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">OL</span>
                  <div className="w-px h-4 bg-gray-300 dark:bg-white/30" />
                  <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{dict.nav.search || 'Search'}</span>
              </Link>
              
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl transition-colors duration-200 ${
                    pathname === item.href
                      ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
