import Link from "next/link";

export default function NotFound() {
    return (
        <div className="absolute text-lg font-medium translate-x-1/2 translate-y-1/2 top-1/2 right-1/2">
            Sorry the page wasn&apos;t found. Please return <Link className="text-emerald-400 hover:text-emerald-500" href={"/"}>home</Link>.
        </div>
    )
}
