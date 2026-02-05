import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'HTD Transfers - VIP Transfer i Limo Servis',
  description: 'Luksuzni transfer putnika u zemlji i inostranstvu po najboljim cenama. Profesionalni vozači, luksuzna vozila najnovijih generacija.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
