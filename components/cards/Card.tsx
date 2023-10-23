import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

export const cardVariants = cva(
    "bg-white border border-zinc-200 shadow hover:scale-105 transition-transform",
    {
        variants: {
            corners: {
                default: "rounded-2xl",
                full: "rounded-full"
            },
        },
        defaultVariants: {
            corners: "default",
        }
    }
)

export default function Card({ children, corners, className }: { children: React.ReactNode, className?: string } & VariantProps<typeof cardVariants>) {
    return (
        <div className={cn(cardVariants({ corners, className }))}>
            {children}
        </div>
    )
}
