import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import NavMenu from './components/Nav'
import NewsBar from './components/News'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={cn(
        "h-screen w-full bg-main-bg-img bg-cover bg-fixed",
        inter.className
      )}>
        <NavMenu />
        <NewsBar />
        {children}
      </body>
    </html>
  )
}
