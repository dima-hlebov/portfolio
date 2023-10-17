import { Blob } from "@/components/badges";
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
                        {"Hi, 👋🏻 \n I'm Dmytro Hlebov "}
                    </h1>
                    <h2 className="mt-1 text-2xl font-bold text-emerald-400 uppercase">Front-End / Web Developer</h2>
                    <p className="mt-7">Dedicated and versatile developer with a strong academical background and a passion for creating responsive, user-friendly, and accessible web applications.</p>
                    <div className="mt-4 ">
                        <Navigation size={"sm"}>
                            <NavigationItem href={"/"}>
                                <GithubIcon />
                            </NavigationItem>
                            <NavigationItem href={"/"}>
                                <LinkedinIcon />
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
