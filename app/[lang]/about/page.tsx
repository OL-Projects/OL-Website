import { getDictionary } from '@/lib/dictionary'
import AboutContent from './about-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | OL',
  description: 'OL is a technology company. Canadian built. Teams of developers and engineers building intelligent software powered by AI.',
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }]
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'fr')
  return <AboutContent dictionary={dict} />
}
