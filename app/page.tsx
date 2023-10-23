import { About, Contacts, Hero, Projects } from "@/components/sections";

export default function Home() {
  return (
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
  )
}
