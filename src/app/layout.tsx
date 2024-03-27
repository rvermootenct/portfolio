import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Theme from '@/components/Theme'
import DarkLight from '@/components/DarkLight'
import React from 'react'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryan Vermooten',
  description: "Ryan Vermooten's portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <DarkLight />
          {children}
        </Theme>
        <Analytics />
      </body>
    </html>
  )
}
