'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Dictionary } from '@/lib/dictionary'
import { FadeIn } from '@/components/animations/fade-in'

interface ContactContentProps {
  dict: Dictionary
}

export function ContactContent({ dict }: ContactContentProps) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setSubmitted(true)
  }

  return (
    <section className="py-32 bg-gray-50 dark:bg-transparent">
      <div className="max-w-2xl mx-auto px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">{dict.contact.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">{dict.contact.subtitle}</p>
        </FadeIn>

        {submitted ? (
          <FadeIn>
            <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20 text-center">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl font-medium text-gray-900 dark:text-white">Message sent!</p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                  {dict.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border-2 border-gray-300 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors outline-none text-gray-900 dark:text-white placeholder-gray-500 shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                  {dict.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border-2 border-gray-300 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors outline-none text-gray-900 dark:text-white placeholder-gray-500 shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                  {dict.contact.form.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border-2 border-gray-300 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors outline-none resize-none text-gray-900 dark:text-white placeholder-gray-500 shadow-sm"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/25"
              >
                {dict.contact.form.submit}
              </motion.button>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
