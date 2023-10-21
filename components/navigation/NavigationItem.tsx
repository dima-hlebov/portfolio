import Link from "next/link";

export function NavigationItem({ children, href, className, onClick }:
    { children: React.ReactNode, href: string, className?: string, onClick?: (e: React.MouseEvent<HTMLElement>) => void }) {
    return (
        <li onClick={onClick}>
            <Link className={`block hover:text-emerald-400 ${className}`} href={href}>
                {children}
            </Link>
        </li>
    )
}
