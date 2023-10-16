import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

export const emojiBadgeVariants = cva(
    "relative flex justify-center items-center rounded-full",
    {
        variants: {
            color: {
                white: "bg-white"
            },
            size: {
                md: "w-36 h-36 text-5xl"

            },
        },
        defaultVariants: {
            color: "white",
            size: "md",
        }
    }
)

export function EmojiBadge({ color, size, text, emoji }: { text: string, emoji: string, } & VariantProps<typeof emojiBadgeVariants>) {
    return (
        <div className={cn(emojiBadgeVariants({ color, size }))}>
            <svg className="absolute uppercase text-xs w-36 h-36 animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                    <path id="circle"
                        d="M 50, 50
                        m -37, 0
                        a 37,37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0"/>
                </defs>
                <text>
                    <textPath xlinkHref="#circle" textLength={"210%"}>
                        {text}
                    </textPath>
                </text>
            </svg>
            {emoji}
        </div>
    )
}
