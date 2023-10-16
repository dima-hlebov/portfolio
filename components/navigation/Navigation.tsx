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
            size: {
                sm: "gap-3",
                md: "gap-6"

            },
        },
        defaultVariants: {
            variant: "row",
            size: "md",
        }
    }
)

export default function Navigation({ children, variant, size, className }:
    { children: React.ReactNode, className?: string } & VariantProps<typeof navigationVariants>) {
    return (
        <nav>
            <ul className={cn(navigationVariants({ variant, size, className }))}>
                {children}
            </ul>
        </nav>
    )
}
