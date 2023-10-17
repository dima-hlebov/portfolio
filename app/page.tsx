import { About, Hero, Projects } from "@/components/sections";

export default function Home() {
  return (
    <main className="h-[calc(100vh-56px)]">
      <section className="h-full">
        <Hero />
      </section>
      <section className="bg-gradient-to-b from-transparent via-white">
        <About />
      </section>
      <section className="bg-gradient-to-b from-transparent via-white">
        <Projects />
      </section>
    </main>
  )
}
