export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white border border-zinc-200 rounded-2xl shadow hover:scale-105 transition-transform">
            {children}
        </div>
    )
}
