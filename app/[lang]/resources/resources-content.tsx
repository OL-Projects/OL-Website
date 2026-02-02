'use client'

import { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/fade-in'
import { TiltCard } from '@/components/animations/tilt-card'

interface ResourcesContentProps {
  dict: {
    resources?: {
      title: string
      subtitle: string
      categories: { guides: string; templates: string; tools: string }
      download: string
      readMore: string
    }
  }
}

// Quality SVG Icons
const icons = {
  book: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  clipboard: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  ),
  calculator: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
    </svg>
  ),
  checkCircle: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  chartBar: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  magnifyingGlass: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
}

const resources = [
  { id: 1, title: 'Process Optimization Guide', category: 'guides', icon: icons.book, description: 'Learn our systematic approach to identifying and eliminating inefficiencies.', color: 'blue' },
  { id: 2, title: 'Workflow Template Pack', category: 'templates', icon: icons.clipboard, description: 'Ready-to-use templates for mapping and documenting your processes.', color: 'purple' },
  { id: 3, title: 'Efficiency Calculator', category: 'tools', icon: icons.calculator, description: 'Calculate potential time and cost savings from optimization.', color: 'emerald' },
  { id: 4, title: 'Team Alignment Checklist', category: 'guides', icon: icons.checkCircle, description: 'Ensure your team is aligned on goals, roles, and responsibilities.', color: 'green' },
  { id: 5, title: 'KPI Dashboard Template', category: 'templates', icon: icons.chartBar, description: 'Track the metrics that matter most for your operations.', color: 'amber' },
  { id: 6, title: 'Bottleneck Finder', category: 'tools', icon: icons.magnifyingGlass, description: 'Identify where your processes slow down and why.', color: 'rose' },
]

const colorClasses = {
  blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 dark:bg-blue-500/20',
  purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 dark:bg-purple-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-500/20',
  green: 'bg-green-500/10 text-green-600 dark:text-green-400 dark:bg-green-500/20',
  amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 dark:bg-amber-500/20',
  rose: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 dark:bg-rose-500/20',
}

export function ResourcesContent({ dict }: ResourcesContentProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = ['all', 'guides', 'templates', 'tools']

  const filteredResources = useMemo(() => {
    if (activeCategory === 'all') return resources
    return resources.filter(r => r.category === activeCategory)
  }, [activeCategory])

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat)
  }, [])

  return (
    <section className="py-32 min-h-screen bg-gray-50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">{dict.resources?.title || 'Resources'}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {dict.resources?.subtitle || 'Guides, templates, and tools to help you optimize.'}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
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
                {cat === 'all' ? 'All' : dict.resources?.categories?.[cat as keyof typeof dict.resources.categories] || cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <StaggerItem key={resource.id}>
                  <TiltCard className="h-full">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 h-full flex flex-col cursor-pointer will-change-transform shadow-sm hover:shadow-lg dark:shadow-none transition-shadow"
                    >
                      <div className={`w-14 h-14 rounded-xl ${colorClasses[resource.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
                        {resource.icon}
                      </div>
                      <span className="text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wide font-medium mb-2">{resource.category}</span>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{resource.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">{resource.description}</p>
                      <button className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 group font-medium">
                        {dict.resources?.readMore || 'Read More'} 
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </motion.div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
