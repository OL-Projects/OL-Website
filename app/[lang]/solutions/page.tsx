import { getDictionary } from '@/lib/dictionary'
import SolutionsContent from './solutions-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions | OL',
  description: 'Comprehensive technology services — application development, software engineering, web development, and AI automation.',
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }]
}

export default async function SolutionsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'fr')
  return <SolutionsContent lang={lang} dictionary={dict} />
}
