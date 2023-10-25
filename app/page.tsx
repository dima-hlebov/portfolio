import { About, Contacts, Hero, Projects } from "@/components/sections";
import Card from '@/components/cards'
import Image from 'next/image'
import Link from 'next/link'

import CvImage from "@/public/img/cv.png"

export default function Home() {
  return (
    <div>
      <main className="h-[calc(100vh-56px)] min-h-[875px]">
        <section id="hero" className="h-full">
          <Hero />
        </section>
        <section id="about" className="bg-gradient-to-b from-transparent via-white">
          <About />
        </section>
        <section id="portfolio" className="bg-gradient-to-b from-transparent via-white">
          <Projects />
        </section>
        <section id="contacts" className="bg-gradient-to-b from-transparent via-white">
          <Contacts />
        </section>
      </main>
      <div className='fixed z-20 bottom-5 right-5 md:bottom-10 md:right-10'>
        <Link href={"https://drive.google.com/file/d/1KDwoyV1K6KD1uhy6kMU_0vjHOEB6fO8h/view"}>
          <Card corners={"full"}>
            <Image
              src={CvImage}
              alt={'cv'}
              className='p-3 h-14 w-14' />
          </Card>
        </Link>
      </div>
    </div>
  )
}
