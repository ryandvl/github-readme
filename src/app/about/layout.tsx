import "@/styles/globals.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from "react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // title: 'github-readme',
  // description: 'about',
  metadataBase: new URL("https://ryandvl.github.io"),
  openGraph: {
    title: 'github-readme',
    description: 'testando',
    images: [
      {
        url: 'https://ryandvl.github.io/opengraph-image.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://ryandvl.github.io/opengraph-image.png',
        width: 1800,
        height: 1600,
        alt: 'ata',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <body className={`${inter.className}`}>
      {children}
    </body>
  )
}