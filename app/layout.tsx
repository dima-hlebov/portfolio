import { Header } from '@/layouts/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Provider } from 'react-redux'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dmytro Hlebov | Web Developer',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${openSans.className} h-full`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
