import { StaticImageData } from "next/image";

export type Icon = { img: StaticImageData, alt: string }

export type SvgIcon = React.FunctionComponent<React.SVGProps<SVGSVGElement>>