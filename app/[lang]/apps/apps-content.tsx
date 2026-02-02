'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/fade-in'
import { TiltCard } from '@/components/animations/tilt-card'

interface AppsContentProps {
  dict: {
    apps?: {
      title: string
      subtitle: string
      comingSoon: string
      viewApp: string
      download: string
    }
  }
}

const icons = {
  tracker: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  processFlow: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
    </svg>
  ),
  optimizer: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
}

const sampleApps = [
  { id: 1, name: 'OL Tracker', description: 'Real-time workflow tracking and optimization dashboard.', icon: icons.tracker, status: 'coming-soon', color: 'blue' },
  { id: 2, name: 'Process Flow', description: 'Visual process mapping and bottleneck identification tool.', icon: icons.processFlow, status: 'coming-soon', color: 'purple' },
  { id: 3, name: 'Task Optimizer', description: 'AI-powered task prioritization and scheduling.', icon: icons.optimizer, status: 'coming-soon', color: 'amber' },
]

const colorClasses = {
  blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
}

export function AppsContent({ dict }: AppsContentProps) {
  return (
    <section className="py-32 min-h-screen bg-gray-50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">{dict.apps?.title || 'Our Apps'}</h1>
            <p className="text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
              {dict.apps?.subtitle || 'Custom-built tools designed to solve real problems.'}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleApps.map((app) => (
            <StaggerItem key={app.id}>
              <TiltCard className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 h-full flex flex-col will-change-transform shadow-sm"
                >
                  <div className={`w-16 h-16 rounded-2xl ${colorClasses[app.color as keyof typeof colorClasses]} flex items-center justify-center mb-6`}>
                    {app.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{app.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">{app.description}</p>
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10">
                    <span className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      {dict.apps?.comingSoon || 'Coming Soon'}
                    </span>
                  </div>
                </motion.div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <p className="text-center text-gray-600 dark:text-gray-500 mt-16">
            {dict.apps?.comingSoon || 'More apps coming soon...'}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
