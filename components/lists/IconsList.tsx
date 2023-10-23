import { Icon } from "@/types";
import Image from "next/image";

export function IconsList({ icons, isHoverable = false }: { icons: Icon[], isHoverable?: boolean }) {
    return (
        <ul>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
                {icons.map(icon =>
                    <li key={icon.alt} className={isHoverable ? "group hover:-translate-y-2 transition-transform duration-300" : ""}>
                        <Image src={icon.img} alt={icon.alt} className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]" />
                    </li>
                )}
            </div>
        </ul>
    )
}
