import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { getDictionary } from '@/lib/dictionary'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OL | Technology & Innovation',
  description: 'OL is a technology company that designs, builds, and deploys intelligent software — apps, platforms, and AI systems that optimize how businesses operate.',
  openGraph: {
    title: 'OL | Technology & Innovation',
    description: 'We design, build, and deploy intelligent software — applications, platforms, and AI systems that optimize how organizations operate.',
    siteName: 'OL',
    type: 'website',
  },
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'fr')

  return (
    <html lang={lang} className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ fontFamily: 'var(--font-geist-sans)' }}>
        <ThemeProvider>
          <Header lang={lang} dictionary={dict} />
          <div style={{ minHeight: '100vh' }}>
            {children}
          </div>
          <Footer lang={lang} dictionary={dict} />
        </ThemeProvider>
      </body>
    </html>
  )
}
