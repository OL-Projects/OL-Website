import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'
import { TermsContent } from './terms-content'

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <TermsContent dict={dict} lang={lang} />
}
