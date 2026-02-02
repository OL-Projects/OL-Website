import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'
import { ApproachContent } from './approach-content'

export default async function ApproachPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <ApproachContent dict={dict} />
}
