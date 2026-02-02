import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'
import { SearchContent } from './search-content'

export default async function SearchPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <SearchContent dict={dict} lang={lang} />
}
