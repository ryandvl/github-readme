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
    description: 'testando, e por que ainda ta o link?',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/1141103894961868973/1170485957712154695/image.png?ex=655936fe&is=6546c1fe&hm=d9d727ac13aeb39ede4224c016453aa6b57ed841dcdd18ecba8f40cdbd199e36&',
        width: 800,
        height: 600,
      },
      {
        url: 'https://cdn.discordapp.com/attachments/1141103894961868973/1170485957712154695/image.png?ex=655936fe&is=6546c1fe&hm=d9d727ac13aeb39ede4224c016453aa6b57ed841dcdd18ecba8f40cdbd199e36&',
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