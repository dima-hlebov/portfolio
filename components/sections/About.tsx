import { Container } from "@/layouts";
import Image from "next/image";
import Snowboard from "@/public/img/snowboard.jpg"
import { EmojiBadge } from "../badges";

export function About() {

    return (
        <Container>
            <div className="flex gap-20 py-40">
                <div className="relative">
                    <Image className="rounded-2xl min-w-[420px]" src={Snowboard} alt={""} />
                    <div className="absolute -right-16 -bottom-8 ">
                        <EmojiBadge text="Front-end web developer" emoji="👨🏻‍💻" />
                    </div>
                </div>
                <article>
                    <h2>About me</h2>
                    <h3>A dedicated Web Developer based in Kyiv, Ukraine 📍</h3>
                    <p className="mt-5 text-md whitespace-pre-line">
                        {
                            "I have a solid foundation in web development backed by a degree in buisness aplications. " +
                            "My enthusiasm fuels the art of developing and maintaining reusable and clean code that forms the backbone of smooth, " +
                            "engaging and user-friendly interfaces. I excel in problem-solving, clear communication, creativity, and effective time management, " +
                            "which collectively empower me to navigate complex challenges, collaborate seamlessly, and deliver innovative and high-quality " +
                            "solutions on time." +
                            "\n" +
                            "Apart from coding, I enjoy various sports and outdoor activities like gym, hiking, snowboarding, wakeboarding etc. They provide a healthy balance to my life and keep me refreshed and creative."
                        }
                    </p>
                </article>
            </div>
        </Container>
    )
}
