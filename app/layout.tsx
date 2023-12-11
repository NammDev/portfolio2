import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/layout'
import { Outfit as FontHeading, Geologica as FontBody } from 'next/font/google'
import { cn } from '@/lib/utils'

const fontHeading = FontHeading({
  subsets: ['latin'],
  variable: '--font-heading',
})

const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  adjustFontFallback: false,
})

const creator = 'Namm'
const baseUrl = 'https://sznm.dev'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    types: {
      'application/rss+xml': `${baseUrl}/rss.xml`,
    },
  },
  applicationName: 'sznm.dev',
  authors: { name: 'sozonome' },
  creator,
  publisher: creator,
  generator: 'Next.js',
  keywords: ['sozonome', 'agustinusnathaniel', 'Namm', 'sznm', 'sznm.dev'],
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: '/favicon.ico',
  },
  appleWebApp: {
    title: 'sznm.dev',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.json',
  title: {
    default: 'Namm - Digital Crafter | sozonome',
    template: '%s | sozonome',
  },
  description: "Namm's Dev Site | namm.dev",
  openGraph: {
    url: 'https://sznm.dev',
    title: 'sozonome | Digital Crafter',
    description: "Namm's Dev Site",
    images: [
      {
        url: 'https://og.sznm.dev/api/generate?heading=sozonome&text=https://sznm.dev',
        alt: 'sznm.dev og-image',
      },
    ],
    siteName: 'sozonome',
  },
  twitter: {
    creator: '@sozonome',
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn(fontBody.variable, fontHeading.variable)}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
