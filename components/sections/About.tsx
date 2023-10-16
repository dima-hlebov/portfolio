import { Container } from "@/layouts";
import Image from "next/image";
import Snowboard from "@/public/img/snowboard.jpg"
import { EmojiBadge } from "../badges";

export function About() {
    return (
        <Container>
            <div className="flex gap-20 py-40">
                <div className="relative">
                    <Image className="rounded-3xl min-w-[300px]" src={Snowboard} alt={""} />
                    <div className="absolute -right-14 -bottom-14 ">
                        <EmojiBadge text="Front-end web developer" emoji="👨🏻‍💻" />
                    </div>
                </div>
                <article>
                    <h2>About me</h2>
                    <h3 className="text-2xl font-semibold uppercase">A dedicated Web Developer based in Kyiv, Ukraine 📍</h3>
                    <p className="mt-8 text-md">
                        I have a solid foundation in web development backed by degree in buisness aplications.
                        My enthusiasm fuels the art of crafting and nurturing reusable code that forms the backbone of smooth and
                        user-friendly digital landscapes. I excel in problem-solving, clear communication, creativity, and effective time management,
                        which collectively empower me to navigate complex challenges, collaborate seamlessly, and deliver innovative and high-quality
                        web solutions on time.
                    </p>
                </article>
            </div>
        </Container>
    )
}
