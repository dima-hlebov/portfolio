import { Header } from '@/layouts/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Card from '@/components/cards'
import Image from 'next/image'
import Link from 'next/link'

import CvImage from "@/public/img/cv.png"

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
        <div className='fixed z-20 bottom-5 left-5 '>
          <Link href={"https://drive.google.com/file/d/1KDwoyV1K6KD1uhy6kMU_0vjHOEB6fO8h/view"}>
            <Card corners={"full"}>
              <Image
                src={CvImage}
                alt={'cv'}
                className='p-3 h-14 w-14' />
            </Card>
          </Link>
        </div>
        {children}
      </body>
    </html>
  )
}
