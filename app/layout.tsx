import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Harry Potter — Senior Auror',
  description:
    'Seasoned Auror, Chosen One, and Dark Lord vanquisher. Order of Merlin First Class. Open to senior leadership roles in magical law enforcement.',
  keywords: ['Harry Potter', 'Auror', 'Chosen One', 'Hogwarts', 'Ministry of Magic', 'Order of the Phoenix'],
  authors: [{ name: 'Harry Potter' }],
  openGraph: {
    title: 'Harry Potter — Senior Auror',
    description:
      'Seasoned Auror, Chosen One, and Dark Lord vanquisher. Order of Merlin First Class. Open to senior leadership roles in magical law enforcement.',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
  },
  themeColor: '#0d1117',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
