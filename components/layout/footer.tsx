'use client'

import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionary'

interface FooterProps {
  dict: Dictionary
  lang: string
}

export function Footer({ dict, lang }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">OL</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">{dict.footer.tagline}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm">
              <Link
                href={`/${lang}/privacy`}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {dict.footer.privacy}
              </Link>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <Link
                href={`/${lang}/terms`}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {dict.footer.terms}
              </Link>
            </div>
            <div className="text-sm text-gray-500">
              © {year} OL. {dict.footer.rights}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
