import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sharaksh - Custom High-Quality Websites & AI Marketing',
  description: 'Professional custom website development and AI-powered ad campaigns that increase reach and drive results. Modern, premium web solutions for your business.',
  keywords: 'custom websites, web development, AI marketing, digital marketing, business websites',
  authors: [{ name: 'Sharaksh' }],
  openGraph: {
    title: 'Sharaksh - Custom High-Quality Websites & AI Marketing',
    description: 'Professional custom website development and AI-powered ad campaigns that increase reach and drive results.',
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
