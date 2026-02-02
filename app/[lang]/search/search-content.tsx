'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionary'

interface SearchContentProps {
  dict: Dictionary
  lang: string
}

interface SearchResult {
  id: string
  title: string
  description: string
  href: string
  category: string
  icon: React.ReactNode
}

const icons = {
  page: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  service: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  resource: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  database: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  app: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
}

export function SearchContent({ dict, lang }: SearchContentProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isFocused, setIsFocused] = useState(false)

  const searchableContent: SearchResult[] = useMemo(() => [
    { id: 'home', title: dict.nav.home, description: dict.hero.subtitle, href: `/${lang}`, category: 'Page', icon: icons.page },
    { id: 'approach', title: dict.nav.approach, description: dict.approach.subtitle, href: `/${lang}/approach`, category: 'Page', icon: icons.page },
    { id: 'apps', title: dict.nav.apps || 'Apps', description: dict.apps?.subtitle || 'Custom-built tools', href: `/${lang}/apps`, category: 'Page', icon: icons.page },
    { id: 'resources', title: dict.nav.resources || 'Resources', description: dict.resources?.subtitle || 'Guides and templates', href: `/${lang}/resources`, category: 'Page', icon: icons.page },
    { id: 'database', title: dict.nav.database || 'Database', description: dict.database?.subtitle || 'Knowledge base', href: `/${lang}/database`, category: 'Page', icon: icons.page },
    { id: 'about', title: dict.nav.about, description: dict.about.p1.slice(0, 100), href: `/${lang}/about`, category: 'Page', icon: icons.page },
    { id: 'contact', title: dict.nav.contact, description: dict.contact.subtitle, href: `/${lang}/contact`, category: 'Page', icon: icons.page },
    { id: 'diagnose', title: dict.services.diagnose.title, description: dict.services.diagnose.description, href: `/${lang}#services`, category: 'Service', icon: icons.service },
    { id: 'design', title: dict.services.design.title, description: dict.services.design.description, href: `/${lang}#services`, category: 'Service', icon: icons.service },
    { id: 'build', title: dict.services.build.title, description: dict.services.build.description, href: `/${lang}#services`, category: 'Service', icon: icons.service },
    { id: 'app-tracker', title: 'OL Tracker', description: 'Real-time workflow tracking and optimization dashboard.', href: `/${lang}/apps`, category: 'App', icon: icons.app },
    { id: 'app-flow', title: 'Process Flow', description: 'Visual process mapping and bottleneck identification tool.', href: `/${lang}/apps`, category: 'App', icon: icons.app },
    { id: 'res-optimization', title: 'Process Optimization Guide', description: 'Learn our systematic approach to identifying and eliminating inefficiencies.', href: `/${lang}/resources`, category: 'Resource', icon: icons.resource },
    { id: 'res-workflow', title: 'Workflow Template Pack', description: 'Ready-to-use templates for mapping and documenting your processes.', href: `/${lang}/resources`, category: 'Resource', icon: icons.resource },
    { id: 'db-lean', title: 'Lean Manufacturing Principles', description: 'Core principles of eliminating waste and maximizing value.', href: `/${lang}/database`, category: 'Database', icon: icons.database },
    { id: 'db-supply', title: 'Supply Chain Optimization', description: 'Strategies for improving supply chain efficiency.', href: `/${lang}/database`, category: 'Database', icon: icons.database },
    { id: 'db-automation', title: 'Automation Tools Comparison', description: 'Comprehensive comparison of workflow automation tools.', href: `/${lang}/database`, category: 'Database', icon: icons.database },
  ], [dict, lang])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const lower = query.toLowerCase()
    return searchableContent.filter(
      item => item.title.toLowerCase().includes(lower) || item.description.toLowerCase().includes(lower)
    )
  }, [query, searchableContent])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(i => Math.min(i + 1, results.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(i => Math.max(i - 1, 0))
      }
      if (e.key === 'Enter' && results[selectedIndex]) {
        window.location.href = results[selectedIndex].href
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [results, selectedIndex])

  useEffect(() => {
    setSelectedIndex(0)
  }, [results])

  const quickLinks = [
    { title: dict.nav.approach, href: `/${lang}/approach`, icon: icons.service },
    { title: dict.nav.apps || 'Apps', href: `/${lang}/apps`, icon: icons.app },
    { title: dict.nav.resources || 'Resources', href: `/${lang}/resources`, icon: icons.resource },
    { title: dict.nav.database || 'Database', href: `/${lang}/database`, icon: icons.database },
  ]

  return (
    <section className="py-32 min-h-screen bg-gray-50 dark:bg-transparent">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            {dict.search?.title || 'Search'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {dict.search?.subtitle || 'Find pages, services, resources, and more.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative"
        >
          <div className={`relative rounded-2xl transition-all duration-300 ${isFocused ? 'ring-2 ring-blue-500/50' : ''}`}>
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={dict.search?.placeholder || 'Search...'}
              autoFocus
              className="w-full pl-14 pr-6 py-5 text-lg rounded-2xl bg-white dark:bg-white/5 border-2 border-gray-300 dark:border-white/10 outline-none transition-colors text-gray-900 dark:text-white placeholder-gray-500 shadow-sm"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <AnimatePresence>
            {query && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
              >
                {results.length > 0 ? (
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {results.map((result, index) => (
                      <Link
                        key={result.id}
                        href={result.href}
                        className={`flex items-start gap-4 px-5 py-4 transition-colors ${
                          index === selectedIndex
                            ? 'bg-blue-500/10 border-l-2 border-blue-500'
                            : 'hover:bg-gray-50 dark:hover:bg-white/5 border-l-2 border-transparent'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center flex-shrink-0 text-gray-500 dark:text-gray-400">
                          {result.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400">
                              {result.category}
                            </span>
                            <span className="font-medium text-gray-900 dark:text-white truncate">{result.title}</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">{result.description}</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 flex-shrink-0 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-500">{dict.search?.noResults || 'No results found'}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-600 mt-1">Try a different search term</p>
                  </div>
                )}
                
                <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 dark:border-white/10 text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400">↑↓</kbd> navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400">↵</kbd> select
                    </span>
                  </div>
                  <span>{results.length} results</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {!query && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-500 uppercase tracking-wider mb-4">
              {dict.search?.quickLinks || 'Quick Links'}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-all duration-200 group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <span className="font-medium" style={{ color: 'var(--foreground)' }}>{link.title}</span>
                </Link>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{dict.search?.hint || 'Start typing to search pages, services, and resources...'}</p>
                  <p className="text-xs text-gray-500 mt-1">Use ⌘K anywhere to open quick search</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
