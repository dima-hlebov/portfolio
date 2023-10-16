import { About, Hero } from "@/components/sections";

export default function Home() {
  return (
    <main className="h-[calc(100vh-56px)]">
      <section className="h-full">
        <Hero />
      </section>
      <section className="bg-white">
        <About />
      </section>
    </main>
  )
}
