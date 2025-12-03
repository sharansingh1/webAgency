import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Arcwell Digital - Custom High-Quality Websites',
  description: 'Professional custom website development that delivers exceptional results. Modern, premium web solutions for your business.',
  keywords: 'custom websites, web development, digital marketing, business websites',
  authors: [{ name: 'Arcwell Digital' }],
  openGraph: {
    title: 'Arcwell Digital - Custom High-Quality Websites',
    description: 'Professional custom website development that delivers exceptional results.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
