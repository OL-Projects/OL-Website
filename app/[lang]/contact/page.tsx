import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'
import { ContactContent } from './contact-content'

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <ContactContent dict={dict} />
}
