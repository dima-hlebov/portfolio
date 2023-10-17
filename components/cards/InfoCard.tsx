import Link from "next/link";
import Card from "./Card";

export function InfoCard({ Icon, link, heading, text }: { Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>, link: string, heading: string, text: string }) {
    return (
        <Card>
            <Link href={link}>
                <div className="flex p-5 gap-3">
                    <div className="flex items-center justify-center rounded-full w-12 h-12 bg-emerald-400/20">
                        <Icon />
                    </div>
                    <div className="flex flex-col">
                        <h5 className="font-medium text-emerald-400">{heading}</h5>
                        <p className="text-sm">{text}</p>
                    </div>
                </div>
            </Link>
        </Card>
    )
}
