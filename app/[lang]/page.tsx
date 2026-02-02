import { getDictionary } from '@/lib/dictionary'
import type { Locale } from '@/i18n-config'
import { HeroSection } from '@/components/sections/hero'
import { ServicesSection } from '@/components/sections/services'
import { CTASection } from '@/components/sections/cta'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <HeroSection dict={dict} lang={lang} />
      <ServicesSection dict={dict} />
      <CTASection dict={dict} lang={lang} />
    </>
  )
}
