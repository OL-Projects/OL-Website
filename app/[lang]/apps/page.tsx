import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'
import { AppsContent } from './apps-content'

export default async function AppsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <AppsContent dict={dict} />
}
