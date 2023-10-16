import Navigation, { NavigationItem } from "@/components/navigation";

export function Header() {
    return (
        <header className="sticky top-0 pt-4">
            <div className="w-fit mx-auto px-5 py-2 shadow-custom rounded-2xl bg-white">
                <Navigation>
                    <NavigationItem href="/">Home</NavigationItem>
                    <NavigationItem href="/">About</NavigationItem>
                    <NavigationItem href="/">Portfolio</NavigationItem>
                    <NavigationItem href="/">Contacts</NavigationItem>
                </Navigation>
            </div>
        </header>
    )
}
