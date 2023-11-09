import "@/styles/globals.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from "react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'github-readme',
  description: 'Generated custom images to my profile.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <body className={`${inter.className}`}>
      {children}
    </body>
  )
}