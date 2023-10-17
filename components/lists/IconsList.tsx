import { Icon } from "@/types";
import Image from "next/image";

export function IconsList({ heading, icons, isHoverable = false }: { heading?: string, icons: Icon[], isHoverable?: boolean }) {
    return (
        <ul className="flex items-center gap-6 ">
            {heading ? <h5 className="font-semibold pr-4 border-r-2 border-zinc-800">{heading}</h5> : null}
            {icons.map(icon =>
                <li key={icon.alt} className={isHoverable ? "hover:-translate-y-2 transition-transform duration-300" : ""}>
                    <Image src={icon.img} alt={icon.alt} width={40} height={40} />
                </li>
            )}
        </ul>
    )
}
