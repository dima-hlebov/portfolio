import Link from "next/link";
import Blob from "@/components/widgets";
import Navigation, { NavigationItem } from "@/components/navigation";
import { IconsList } from "@/components/lists";
import { Container } from "@/layouts";
import { Icon } from "@/types";

import HTMLImage from "@/public/img/HTML.svg"
import CSSImage from "@/public/img/CSS.svg"
import TailwindImage from "@/public/img/TailwindCSS.svg"
import SassImage from "@/public/img/Sass.svg"
import JSImage from "@/public/img/JavaScript.svg"
import TSImage from "@/public/img/TypeScript.svg"
import MongoDbImage from "@/public/img/MongoDB.svg"
import PostgreSQLImage from "@/public/img/PostgreSQL.svg"
import NextImage from "@/public/img/NextJS.svg"
import ReactImage from "@/public/img/React.svg"
import ExpressImage from "@/public/img/ExpressJS.svg"
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const techs: Icon[] = [
    { img: HTMLImage, alt: "HTML" },
    { img: CSSImage, alt: "CSS" },
    { img: SassImage, alt: "Sass" },
    { img: JSImage, alt: "JavaScript" },
    { img: TSImage, alt: "TypeScript" },
    { img: MongoDbImage, alt: "MongoDb" },
    { img: PostgreSQLImage, alt: "PostgreSQL" },
    { img: ReactImage, alt: "React" },
    { img: NextImage, alt: "NextJS" },
    { img: ExpressImage, alt: "Express" },
    { img: TailwindImage, alt: "Tailwind" },
]

export function Hero() {

    return (
        <Container>
            <div className="flex flex-col items-center pt-16 md:pt-48 md:flex-row">
                <div className="md:order-2">
                    <Blob />
                </div>
                <div className="text-center md:text-left pt-7">
                    <h1 className="text-3xl font-extrabold uppercase whitespace-pre-line md:text-4xl">
                        {"Hi, 👋🏻 \n I'm Dmytro Hlebov "}
                    </h1>
                    <h2 className="mt-1 text-xl font-bold uppercase md:text-2xl text-emerald-400">Web Developer</h2>
                    <p className="mt-5 md:mt-7">Dedicated and versatile developer with a strong <Link href="/diploma" className="text-emerald-400 hover:text-emerald-500 active:text-emerald-400">academic</Link> background and a passion for creating impactful solutions that make a difference.</p>
                    <div className="flex justify-center mt-4 md:justify-start">
                        <Navigation>
                            <NavigationItem href={"https://github.com/dima-hlebov"}>
                                <GithubIcon />
                            </NavigationItem>
                            <NavigationItem href={"https://www.linkedin.com/in/dmytro-hlebov/"}>
                                <LinkedinIcon />
                            </NavigationItem>
                        </Navigation>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center pt-10 mb-10 md:items-start lg:items-center lg:flex-row">
                <h5 className="pb-4 mb-5 font-semibold border-b-2 lg:pr-4 lg:mb-0 lg:mr-5 lg:border-r-2 lg:pb-0 lg:border-b-0 border-zinc-800">Tech Skills</h5>
                <IconsList icons={techs} isHoverable />
            </div>
        </Container>
    )
}
