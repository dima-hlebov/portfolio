import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

export const navigationVariants = cva(
    "flex font-medium",
    {
        variants: {
            variant: {
                column: "flex-col",
                row: "h-full flex-row items-center"
            },
            gap: {
                none: "",
                sm: "gap-3",
                md: "gap-6"

            },
        },
        defaultVariants: {
            variant: "row",
            gap: "md",
        }
    }
)

export default function Navigation({ children, variant, gap, className }:
    { children: React.ReactNode, className?: string } & VariantProps<typeof navigationVariants>) {
    return (
        <nav>
            <ul className={cn(navigationVariants({ variant, gap, className }))}>
                {children}
            </ul>
        </nav>
    )
}