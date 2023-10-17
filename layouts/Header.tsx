import Navigation, { NavigationItem } from "@/components/navigation";

export function Header() {
    return (
        <header className="fixed pt-4 top-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-fit px-5 py-2 shadow-custom rounded-2xl bg-white">
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
