"use client"

import HTMLFlipBook from "react-pageflip";

import DiplomaImage from "@/public/img/diploma.jpg"
import DiplomaTumbImage from "@/public/img/diploma_thumb.jpg"
import SupplementImage from "@/public/img/supplement.jpg"
import SupplementThumbImage from "@/public/img/supplement_thumb.jpg"
import Image from "next/image";
import Magnifier from "@/components/widgets/magnifier/Magnifier"
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

export function Book() {

    return (
        //@ts-ignore
        <HTMLFlipBook
            width={450}
            height={650}
            maxWidth={0}
            minWidth={280}
            maxHeight={0}
            minHeight={404}
            size="stretch"
            usePortrait
            showCover={true}
            showPageCorners={false}
            maxShadowOpacity={0.25}
        >
            <div
                className="min-[600px]:-translate-x-1/2 cursor-pointer shadow-lg"
                data-density="hard"
            >
                <div className="flex pt-28 justify-center h-full bg-[url(../public/img/textures/leather-texture-bake.png)] bg-[length:200px_200px] rounded-l-sm rounded-r-md">
                    <h3 className="text-xl md:text-2xl bg-[url(../public/img/textures/gold-texture-bake.png)] bg-clip-text  bg-[length:200px_200px] text-transparent font-serif tracking-wider shadow-inner [text-shadow:_-3px_-3px_5px_rgba(0,0,0,.8),_1px_1px_2px_rgba(255,255,255,.45)]">
                        Diploma Suplement
                    </h3>
                </div>
            </div>
            <div
                data-density="hard"
                className="shadow-lg cursor-pointer"
            >
                <div className="flex h-full p-3 bg-[url(../public/img/textures/leather-texture-bake.png)] bg-[length:200px_200px] rounded-md min-[600px]:rounded-r-none min-[600px]:pr-0">
                    <div className="flex items-center w-full h-full p-2 min-[600px]:p-5 bg-slate-50">
                        <div className="w-full rounded-md shadow-md">
                            <Magnifier src={DiplomaTumbImage} zoomSrc={DiplomaImage} />
                        </div>
                        {/* <Image
                            src={DiplomaImage}
                            alt="Diploma supplement"
                            quality={100}
                            className="w-full rounded-md shadow-md"
                        /> */}
                    </div>
                    <div className="hidden min-[600px]:block w-2 h-full shadow-inner bg-slate-50">

                    </div>
                </div>
            </div>
            <div
                data-density="hard"
                className="shadow-lg cursor-pointer"
            >
                <div className="h-full p-3 bg-[url(../public/img/textures/leather-texture-bake.png)] bg-[length:200px_200px] rounded-md min-[600px]:pl-0 min-[600px]:rounded-l-none">
                    <div className="flex items-center h-full p-2 min-[600px]:p-5 bg-slate-50">
                        <div className="w-full rounded-sm shadow-md">
                            <Magnifier src={SupplementThumbImage} zoomSrc={SupplementImage} />
                        </div>

                        {/* <Image
                            src={SupplementImage}
                            alt="Diploma supplement"
                            quality={100}
                            className="w-full rounded-sm shadow-md hover:animate-show-picture"
                        /> */}
                    </div>
                </div>
            </div>
        </HTMLFlipBook>
    );
}