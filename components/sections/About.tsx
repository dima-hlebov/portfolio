import { Container } from "@/layouts";
import Image from "next/image";
import Snowboard from "@/public/img/snowboard.jpg"
import { EmojiBadge } from "../badges";
import Link from "next/link";

export function About() {

    return (
        <Container>
            <div className="flex flex-col gap-10 pt-60 lg:gap-20 lg:flex-row">
                <div className="relative mx-auto w-fit">
                    <Image className="w-full lg:w-auto rounded-2xl max-w-[420px]" src={Snowboard} alt={""} />
                    <div className="absolute hidden right-1 -bottom-8 sm:block sm:-right-16">
                        <EmojiBadge text="Web developer" emoji="👨🏻‍💻" />
                    </div>
                </div>
                <article className="text-center lg:text-left">
                    <h2>About me</h2>
                    <h3>A passionate Web Developer based in Kyiv, Ukraine 📍</h3>
                    <p className="mt-5 whitespace-pre-line text-md">
                        I have a solid foundation in web development backed by a <Link href="/diploma" className="text-emerald-400 hover:text-emerald-500 active:text-emerald-400">degree</Link> in Business Applications.
                        My enthusiasm fuels the art of developing and maintaining reusable and clean code that forms the backbone of smooth,
                        engaging and user-friendly interfaces. I excel in problem-solving, clear communication, creativity, and effective time management,
                        which collectively empower me to navigate complex challenges, collaborate seamlessly, and deliver innovative and high-quality
                        solutions on time.
                        <br />
                        Apart from coding, I enjoy various sports and outdoor activities like going to gym, hiking, snowboarding, wakeboarding, cycling. They provide a healthy balance to my life and keep me refreshed and creative.
                    </p>
                </article>
            </div>
        </Container>
    )
}
