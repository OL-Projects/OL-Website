import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ChatWidget } from '@/components/chat/chat-widget'
import { getDictionary } from '@/lib/dictionary'
import { i18n, type Locale } from '@/i18n-config'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: langParam } = await params
  const lang = langParam as Locale
  const dict = await getDictionary(lang)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    manifest: '/manifest.json',
    icons: {
      icon: '/icons/icon-192.png',
      apple: '/icons/apple-touch-icon.png',
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang: langParam } = await params
  const lang = langParam as Locale
  const dict = await getDictionary(lang)

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header dict={dict} lang={lang} />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer dict={dict} />
          <ChatWidget dict={dict} />
        </ThemeProvider>
      </body>
    </html>
  )
}
