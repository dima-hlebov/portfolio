import { Blob } from "@/components/badges";
import Navigation, { NavigationItem } from "@/components/navigation";
import { Container } from "@/layouts";
import Image from "next/image";

import HTMLImage from "@/public/img/HTML.svg"
import CSSImage from "@/public/img/CSS.svg"
import TailwindImage from "@/public/img/TailwindCSS.svg"
import SassImage from "@/public/img/Sass.svg"
import JSImage from "@/public/img/JavaScript.svg"
import TSImage from "@/public/img/TypeScript.svg"
import NextImage from "@/public/img/NextJS.svg"
import ReactImage from "@/public/img/React.svg"
import ExpressImage from "@/public/img/ExpressJS.svg"
import { Icon } from "@/types";
import { IconsList } from "@/components/lists";

const techs: Icon[] = [
    { img: HTMLImage, alt: "HTML" },
    { img: CSSImage, alt: "CSS" },
    { img: SassImage, alt: "Sass" },
    { img: JSImage, alt: "JavaScript" },
    { img: TSImage, alt: "TypeScript" },
    { img: ReactImage, alt: "React" },
    { img: NextImage, alt: "NextJS" },
    { img: ExpressImage, alt: "Express" },
    { img: TailwindImage, alt: "Tailwind" },
]

export function Hero() {

    return (
        <Container>
            <div className="flex pt-48">
                <div>
                    <h1 className="text-4xl font-extrabold whitespace-pre-line uppercase">
                        {"Hi, 👋 \n I'm Dmytro Hlebov "}
                    </h1>
                    <h2 className="mt-1 text-2xl font-bold text-emerald-400 uppercase">Front-End / Web Developer</h2>
                    <p className="mt-7">Dedicated and versatile developer with a strong academical background and a passion for creating responsive, user-friendly, and accessible web applications.</p>
                    <div className="mt-4 ">
                        <Navigation size={"sm"}>
                            <NavigationItem href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </NavigationItem>
                            <NavigationItem href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </NavigationItem>
                        </Navigation>
                    </div>
                </div>
                <div>
                    <Blob />
                </div>
            </div>
            <div className="pt-10">
                <IconsList heading="Tech Skills" icons={techs} isHoverable />
            </div>
        </Container>
    )
}
