"use client"

import HTMLFlipBook from "react-pageflip";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

import DiplomaImage from "@/public/img/diploma.jpg"
import DiplomaTumbImage from "@/public/img/diploma_thumb.jpg"
import SupplementImage from "@/public/img/supplement.jpg"
import SupplementThumbImage from "@/public/img/supplement_thumb.jpg"

import { useRef } from "react";

export function Book() {
    const book = useRef();

    const handleFlip = (e: React.MouseEvent<HTMLDivElement>) => {
        const elementRect: DOMRect = e.currentTarget.getBoundingClientRect()
        const clickX: number = e.clientX - elementRect.left
        if (clickX < elementRect.width / 2) {
            //@ts-ignore
            book.current.pageFlip().flipPrev()
        }
        if (clickX > elementRect.width / 2) {
            //@ts-ignore
            book.current.pageFlip().flipNext()
        }
    }

    return (
        //@ts-ignore
        <HTMLFlipBook
            width={450}
            height={650}
            maxWidth={0}
            minWidth={260}
            maxHeight={0}
            minHeight={404}
            size="stretch"
            usePortrait
            showCover={true}
            maxShadowOpacity={0.25}
            useMouseEvents={false}
            ref={book}
        >
            <div
                className="min-[600px]:-translate-x-1/2 cursor-pointer shadow-lg"
                data-density="hard"
                onClick={handleFlip}
            >
                <div className="flex pt-28 justify-center h-full bg-[url(../public/img/textures/leather-texture-bake.png)] bg-[length:200px_200px] rounded-l-sm rounded-r-md">
                    <h3 className="text-lg md:text-2xl bg-[url(../public/img/textures/gold-texture-bake.png)] bg-clip-text  bg-[length:200px_200px] text-transparent font-serif tracking-wider shadow-inner [text-shadow:_-3px_-3px_5px_rgba(0,0,0,.8),_1px_1px_2px_rgba(255,255,255,.45)]">
                        Diploma Suplement
                    </h3>
                </div>
            </div>
            <div
                data-density="hard"
                className="shadow-lg cursor-pointer"
                onClick={handleFlip}
            >
                <div className="flex h-full p-3 bg-[url(../public/img/textures/leather-texture-bake.png)] bg-[length:200px_200px] rounded-md min-[600px]:rounded-r-none min-[600px]:pr-0">
                    <div className="flex items-center w-full h-full p-2 min-[600px]:p-5 bg-slate-50">
                        <div onClick={e => e.stopPropagation()}>
                            <InnerImageZoom
                                src={DiplomaTumbImage.src}
                                zoomSrc={DiplomaImage.src}
                                zoomType={"hover"}
                                zoomPreload
                                hideCloseButton
                                hideHint
                                className="w-full rounded-md shadow-md" />
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
                onClick={handleFlip}
            >
                <div className="h-full p-3 bg-[url(../public/img/textures/leather-texture-bake.png)] bg-[length:200px_200px] rounded-md min-[600px]:pl-0 min-[600px]:rounded-l-none">
                    <div className="flex items-center h-full p-2 min-[600px]:p-5 bg-slate-50">
                        <div onClick={e => e.stopPropagation()}>
                            <InnerImageZoom
                                src={SupplementThumbImage.src}
                                zoomSrc={SupplementImage.src}
                                zoomType={"hover"}
                                zoomPreload
                                hideCloseButton
                                hideHint
                                className="w-full rounded-sm shadow-md" />
                        </div>
                    </div>
                </div>
            </div>
        </HTMLFlipBook>
    );
}