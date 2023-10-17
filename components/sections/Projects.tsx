import { Container } from "@/layouts";
import { ImageCard } from "@/components/cards";

import CatPaw from "@/public/img/catpaw.jpg"
import Next from "@/public/img/NextJS.svg"
import Redux from "@/public/img/Redux.svg"
import Tailwind from "@/public/img/TailwindCSS.svg"


export function Projects() {
    return (
        <Container>
            <div className="py-40">
                <h2>Portfolio</h2>
                <h3>Explore My Coding Journey 🛣️</h3>
                <div className="flex justify-between gap-5 mt-10">
                    <ImageCard
                        img={CatPaw}
                        mainLink="https://catpaw-five.vercel.app/"
                        secondaryLink="https://github.com/dima-hlebov/cat-paw"
                        heading="PetsPaw"
                        description="PetsPaw is an app that allows users to vote for the preferred cat images, 
                        save them as favorites, search through an extensive collection of adorable cat photos, 
                        and easily upload own beloved cat pictures. Dive into the world of cats with user-friendly and entertaining app!"
                        icons={[
                            { img: Next, alt: "NextJS" },
                            { img: Redux, alt: "NextJS" },
                            { img: Tailwind, alt: "NextJS" },
                        ]}
                    />
                    {/* <Card img={CatPaw} /> */}
                </div>
            </div>
        </Container>
    )
}
