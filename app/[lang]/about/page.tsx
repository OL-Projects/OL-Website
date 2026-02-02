import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'
import { AboutContent } from './about-content'

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <AboutContent dict={dict} />
}
