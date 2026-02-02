'use client'

import { useState, useMemo, useCallback, useDeferredValue } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/fade-in'

interface DatabaseContentProps {
  dict: {
    database?: {
      title: string
      subtitle: string
      search: string
      categories: { all: string; optimization: string; logistics: string; tools: string; processes: string }
    }
  }
}

const entries = [
  { id: 1, title: 'Lean Manufacturing Principles', category: 'optimization', description: 'Core principles of eliminating waste and maximizing value in manufacturing processes.', tags: ['lean', 'efficiency', 'waste'] },
  { id: 2, title: 'Supply Chain Optimization', category: 'logistics', description: 'Strategies for improving supply chain efficiency and reducing lead times.', tags: ['supply chain', 'logistics', 'planning'] },
  { id: 3, title: 'Automation Tools Comparison', category: 'tools', description: 'A comprehensive comparison of workflow automation tools for different use cases.', tags: ['automation', 'software', 'tools'] },
  { id: 4, title: 'Process Mapping Techniques', category: 'processes', description: 'Different methodologies for documenting and analyzing business processes.', tags: ['mapping', 'documentation', 'analysis'] },
  { id: 5, title: 'KPI Selection Framework', category: 'optimization', description: 'How to choose the right key performance indicators for your operations.', tags: ['KPIs', 'metrics', 'measurement'] },
  { id: 6, title: 'Inventory Management Models', category: 'logistics', description: 'Overview of inventory models including JIT, EOQ, and safety stock calculations.', tags: ['inventory', 'JIT', 'stock'] },
  { id: 7, title: 'Bottleneck Analysis Methods', category: 'processes', description: 'Techniques for identifying and resolving operational bottlenecks.', tags: ['bottleneck', 'constraints', 'analysis'] },
  { id: 8, title: 'Time Study Templates', category: 'tools', description: 'Templates and guides for conducting time and motion studies.', tags: ['time study', 'efficiency', 'measurement'] },
]

const categoryColors = {
  optimization: 'text-blue-600 dark:text-blue-400 bg-blue-500/10',
  logistics: 'text-purple-600 dark:text-purple-400 bg-purple-500/10',
  tools: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
  processes: 'text-amber-600 dark:text-amber-400 bg-amber-500/10',
}

export function DatabaseContent({ dict }: DatabaseContentProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = ['all', 'optimization', 'logistics', 'tools', 'processes']
  const deferredQuery = useDeferredValue(searchQuery)

  const filteredEntries = useMemo(() => {
    return entries.filter(entry => {
      const matchesSearch = !deferredQuery.trim() || 
        entry.title.toLowerCase().includes(deferredQuery.toLowerCase()) ||
        entry.description.toLowerCase().includes(deferredQuery.toLowerCase()) ||
        entry.tags.some(tag => tag.toLowerCase().includes(deferredQuery.toLowerCase()))
      const matchesCategory = activeCategory === 'all' || entry.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [deferredQuery, activeCategory])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat)
  }, [])

  return (
    <section className="py-32 min-h-screen bg-gray-50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">{dict.database?.title || 'Knowledge Base'}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {dict.database?.subtitle || 'A curated collection of insights, data, and useful information.'}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative max-w-xl mx-auto mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={dict.database?.search || 'Search the database...'}
              className="w-full px-6 py-4 pl-12 rounded-2xl bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 shadow-sm"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white dark:bg-white/5 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10'
                }`}
              >
                {dict.database?.categories?.[cat as keyof typeof dict.database.categories] || cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${deferredQuery}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <StaggerContainer className="space-y-4">
              {filteredEntries.map((entry) => (
                <StaggerItem key={entry.id}>
                  <motion.div
                    layout
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-all cursor-pointer shadow-sm hover:shadow-lg dark:shadow-none will-change-transform"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className={`inline-block text-xs uppercase tracking-wide font-medium px-2 py-1 rounded-md ${categoryColors[entry.category as keyof typeof categoryColors]}`}>
                          {entry.category}
                        </span>
                        <h3 className="text-lg font-semibold mt-2 text-gray-900 dark:text-white">{entry.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{entry.description}</p>
                        <div className="flex gap-2 mt-3 flex-wrap">
                          {entry.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {filteredEntries.length === 0 && (
          <FadeIn>
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-500">No entries found matching your search.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear filters
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
