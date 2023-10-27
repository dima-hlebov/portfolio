import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function Magnifier({ src, zoomSrc }: { src: StaticImageData, zoomSrc: StaticImageData }) {
    const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setBackgroundPosition(`${x}% ${y}%`);
    };

    return (
        <figure
            onMouseMove={handleMouseMove}
            style={{
                backgroundImage: `url(${zoomSrc.src})`,
                backgroundPosition: backgroundPosition,
            }}
            className="w-full bg-no-repeat cursor-zoom-in"
        >
            <Image quality={100} loading="lazy" src={src} alt="Diploma" className="block hover:opacity-0" />
        </figure>
    );
}
