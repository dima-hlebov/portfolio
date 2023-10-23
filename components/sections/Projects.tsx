import { Container } from "@/layouts";
import { ImageCard } from "@/components/cards";

import CatPawImage from "@/public/img/catpaw.jpg"
import BillSplitterImage from "@/public/img/billsplitter.png"
import ItalianRestaurantImage from "@/public/img/italianrestaurant.png"
import ChuckNorrisImage from "@/public/img/chucknorris.png"

import NextImage from "@/public/img/NextJS-custom.svg"
import ReduxImage from "@/public/img/Redux-custom.svg"
import TailwindImage from "@/public/img/TailwindCSS-custom.svg"
import TSImage from "@/public/img/TypeScript-custom.svg"
import ReactImage from "@/public/img/React-custom.svg"
import SassImage from "@/public/img/Sass-custom.svg"
import ExpressImage from "@/public/img/ExpressJS-custom.svg"
import BootstrapImage from "@/public/img/Bootstrap-custom.svg"
import MongoImage from "@/public/img/MongoDB-custom.svg"
import JQuery from "@/public/img/JQuery-custom.svg"
import JS from "@/public/img/JavaScript-custom.svg"
import HTML from "@/public/img/HTML-custom.svg"
import Link from "next/link";


export function Projects() {
    return (
        <Container>
            <div className="text-center pt-28 sm:pt-60">
                <h2>Portfolio</h2>
                <h3>Explore My Coding Journey 🛣️</h3>
                <div className="flex flex-wrap justify-center gap-5 mt-10 lg:justify-between">
                    <ImageCard
                        img={CatPawImage}
                        mainLink="https://thepetspaw.vercel.app/"
                        secondaryLink="https://github.com/dima-hlebov/cat-paw"
                        heading="PetsPaw"
                        description="PetsPaw is an app that allows users to vote for the preferred cat images, 
                        save them as favorites, search through an extensive collection of adorable cat photos, 
                        and easily upload own beloved cat pictures. Dive into the world of cats with user-friendly and entertaining app!"
                        icons={[
                            { img: ReduxImage, alt: "Redux" },
                            { img: TSImage, alt: "TypeScript" },
                            { img: NextImage, alt: "NextJS" },
                            { img: TailwindImage, alt: "Tailwind" },

                        ]}
                    />
                    <ImageCard
                        img={BillSplitterImage}
                        mainLink="https://splitmybill.vercel.app/"
                        secondaryLink="https://github.com/dima-hlebov/bill-splitter"
                        heading="BillSplitter"
                        description="User-friendly expense-sharing and money collection app 
                        designed to simplify your financial life. Whether you're splitting bills with friends, 
                        organizing group events, or managing shared expenses in a household, BillSplitter has you covered."
                        icons={[
                            { img: SassImage, alt: "Sass" },
                            { img: ReduxImage, alt: "Redux" },
                            { img: ReactImage, alt: "React" },
                            { img: ExpressImage, alt: "ExpressJs" },
                            { img: MongoImage, alt: "Mongo" },
                        ]}
                    />
                    <ImageCard
                        img={ItalianRestaurantImage}
                        mainLink="https://myitalianrestaurant.vercel.app/"
                        secondaryLink="https://github.com/dima-hlebov/react-restaurant-app"
                        heading="My Italian Restaurant"
                        description="My Italian Restaurant is a web application designed to showcase
                        and manage the online presence of an Italian restaurant. It provides a smooth interface
                        for customers to explore menu of the restaurant and place orders. Buon appetito!"
                        icons={[
                            { img: SassImage, alt: "Sass" },
                            { img: BootstrapImage, alt: "Bootstrap" },
                            { img: ReduxImage, alt: "Redux" },
                            { img: ReactImage, alt: "React" },
                            { img: ExpressImage, alt: "ExpressJs" },
                        ]}
                    />
                    <ImageCard
                        img={ChuckNorrisImage}
                        mainLink="https://norrisjokegenerator.vercel.app/"
                        secondaryLink="https://github.com/dima-hlebov/joke-generator"
                        heading="Joke Generator"
                        description="Introducing Chuck Norris Joke Generator - your source of endless laughter
                         and legendary Chuck Norris humor. In your disposal a random, from category, or free search jokes.
                        Enjoy a daily dose of Chuck Norris jokes and entertain your friends. Get ready to Chuckle your way through the day!"
                        icons={[
                            { img: HTML, alt: "Html" },
                            { img: JS, alt: "JS" },
                            { img: JQuery, alt: "JQuery" },
                        ]}
                    />
                </div>
                <div className="mt-5 text-center">
                    <Link href={"https://github.com/dima-hlebov"} className="font-medium hover:text-emerald-400">More projects...</Link>
                </div>
            </div>

        </Container>
    )
}
