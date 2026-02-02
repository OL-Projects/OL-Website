import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'
import { ResourcesContent } from './resources-content'

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <ResourcesContent dict={dict} />
}
