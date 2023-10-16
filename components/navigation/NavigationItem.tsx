import Link from "next/link";

export function NavigationItem({ children, href }: { children: React.ReactNode, href: string }) {
    return (
        <li className="hover:text-emerald-400">
            <Link href={href}>
                {children}
            </Link>
        </li>
    )
}
