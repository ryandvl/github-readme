import ThemeProvider from "@/components/Theme/ThemeContext"
import "@/styles/globals.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home • DOS Card Game',
  description: 'DOS Card Game website, play with friends!'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </ThemeProvider>
  )
}
