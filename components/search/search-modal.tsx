'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionary'

interface SearchModalProps {
  dict: Dictionary
  lang: string
}

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
}

export function SearchModal({ dict, lang }: SearchModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Define searchable content
  const searchableContent: SearchResult[] = [
    { title: dict.nav.home, description: dict.hero.subtitle, href: `/${lang}`, category: 'Page' },
    { title: dict.nav.approach, description: dict.approach.subtitle, href: `/${lang}/approach`, category: 'Page' },
    { title: dict.nav.about, description: dict.about.p1.slice(0, 100), href: `/${lang}/about`, category: 'Page' },
    { title: dict.nav.contact, description: dict.contact.subtitle, href: `/${lang}/contact`, category: 'Page' },
    { title: dict.nav.apps || 'Apps', description: dict.apps?.subtitle || 'Browse our applications', href: `/${lang}/apps`, category: 'Page' },
    { title: dict.nav.resources || 'Resources', description: dict.resources?.subtitle || 'Helpful resources', href: `/${lang}/resources`, category: 'Page' },
    { title: dict.nav.database || 'Database', description: dict.database?.subtitle || 'Knowledge base', href: `/${lang}/database`, category: 'Page' },
    { title: dict.services.diagnose.title, description: dict.services.diagnose.description, href: `/${lang}#services`, category: 'Service' },
    { title: dict.services.design.title, description: dict.services.design.description, href: `/${lang}#services`, category: 'Service' },
    { title: dict.services.build.title, description: dict.services.build.description, href: `/${lang}#services`, category: 'Service' },
  ]

  const search = useCallback((q: string) => {
    if (!q.trim()) {
      setResults([])
      return
    }
    const lower = q.toLowerCase()
    const filtered = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower)
    )
    setResults(filtered)
    setSelectedIndex(0)
  }, [searchableContent])

  useEffect(() => {
    search(query)
  }, [query, search])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      // Close with Escape
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
      // Navigate results
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedIndex((i) => Math.max(i - 1, 0))
        }
        if (e.key === 'Enter' && results[selectedIndex]) {
          window.location.href = results[selectedIndex].href
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex])

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors text-sm text-gray-400"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">{dict.search?.placeholder || 'Search...'}</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 text-xs">
          ⌘K
        </kbd>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-50 p-4"
            >
              <div className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 p-4 border-b border-white/10">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={dict.search?.placeholder || 'Search pages, services, resources...'}
                    autoFocus
                    className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
                  />
                  <kbd className="px-2 py-1 rounded bg-white/10 text-xs text-gray-400">ESC</kbd>
                </div>

                {/* Results */}
                <div className="max-h-80 overflow-y-auto">
                  {results.length > 0 ? (
                    <div className="p-2">
                      {results.map((result, index) => (
                        <Link
                          key={result.href}
                          href={result.href}
                          onClick={() => setIsOpen(false)}
                          className={`block p-3 rounded-lg transition-colors ${
                            index === selectedIndex
                              ? 'bg-blue-500/20 border border-blue-500/30'
                              : 'hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-gray-400">
                              {result.category}
                            </span>
                            <span className="font-medium text-white">{result.title}</span>
                          </div>
                          <p className="mt-1 text-sm text-gray-400 line-clamp-1">
                            {result.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ) : query ? (
                    <div className="p-8 text-center text-gray-500">
                      {dict.search?.noResults || 'No results found'}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      {dict.search?.hint || 'Start typing to search...'}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between p-3 border-t border-white/10 text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-white/10">↑↓</kbd> navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-white/10">↵</kbd> select
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10">esc</kbd> close
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
