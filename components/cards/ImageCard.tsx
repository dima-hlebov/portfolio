import Card from "./Card";
import { IconsList } from "@/components/lists";
import Navigation, { NavigationItem } from "@/components/navigation";
import { Icon } from "@/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export function ImageCard({ img, heading, description, icons, mainLink, secondaryLink }:
    { img: StaticImageData, heading: string, description: string, icons?: Icon[], mainLink: string, secondaryLink?: string }) {
    return (
        <Card>
            <div className="max-w-md">
                <Link href={mainLink}>
                    <Image className="w-full rounded-t-2xl" src={img} alt="Home page" />
                </Link>
                <div>
                    <article className="p-5">
                        <Link href={mainLink}>
                            <h5 className="inline-flex mb-2 text-2xl font-semibold text-emerald-400">{heading}</h5>
                        </Link>
                        <p className="text-sm font-medium">{description}</p>
                    </article>
                    <div className="flex justify-between px-5 pb-5 ">
                        {secondaryLink
                            ?
                            <Navigation size={"sm"}>
                                <NavigationItem href={secondaryLink}>
                                    <div className="flex flex-col items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        <span className="font-semibold leading-none">code</span>
                                    </div>
                                </NavigationItem>
                            </Navigation>
                            : null
                        }

                        {icons
                            ?
                            <div className="flex justify-center">
                                <IconsList icons={icons} />
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </Card>
    )
}
