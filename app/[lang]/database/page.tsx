import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'
import { DatabaseContent } from './database-content'

export default async function DatabasePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <DatabaseContent dict={dict} />
}
