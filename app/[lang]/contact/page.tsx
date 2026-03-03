import { getDictionary } from '@/lib/dictionary'
import ContactContent from './contact-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | OL',
  description: 'Business inquiries, support, and partnership opportunities. Connect with OL.',
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }]
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'fr')
  return <ContactContent dictionary={dict} />
}
