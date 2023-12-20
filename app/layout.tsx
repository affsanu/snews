import type { Metadata } from 'next'
import { Noto_Sans_Bengali } from 'next/font/google'
import './globals.css'
import NavMenu from './components/Nav'
import NewsBar from './components/News'

const inter = Noto_Sans_Bengali({ subsets: ['latin'], weight: ["200", "400", "600"] })

export const metadata: Metadata = {
  title: 'Saidpur News',
  description: 'Bangla Newspaper & Magazine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`
        h-screen w-full bg-main-bg-img bg-cover bg-fixed
        ${inter.className}`}>
        <NavMenu />
        <NewsBar />
        {children}
      </body>
    </html>
  )
}
