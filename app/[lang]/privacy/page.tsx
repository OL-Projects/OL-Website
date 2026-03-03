import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'
import { PrivacyContent } from './privacy-content'

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <PrivacyContent dict={dict} lang={lang} />
}
