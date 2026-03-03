import { getDictionary } from '@/lib/dictionary'
import ProductsContent from '../apps/apps-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products | OL',
  description: 'Technology built by OL — intelligent tools designed for real-world operations.',
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }]
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'fr')
  return <ProductsContent lang={lang} dictionary={dict} />
}
