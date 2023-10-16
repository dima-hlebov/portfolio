import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

export const containerVariants = cva(
  "mx-auto",
  {
    variants: {
      size: {
        md: "max-w-[950px]",

      },
    },
    defaultVariants: {
      size: "md",
    }
  }
)

export function Container({ children, size }: { children: React.ReactNode } & VariantProps<typeof containerVariants>) {
  return (
    <div className={cn(containerVariants({ size }))}>
      {children}
    </div>
  )
}
