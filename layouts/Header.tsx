import Navigation, { NavigationItem } from "@/components/navigation";
import Burger from "@/components/navigation/Burger";

export function Header() {

    return (
        <header className="fixed top-0 right-0 z-10 pt-4 pr-5 md:pr-auto md:-translate-x-1/2 md:left-1/2 md:right-auto">
            <div className="flex px-5 py-2 bg-white shadow-custom rounded-2xl">
                <div className="md:hidden">
                    <Burger />
                </div>
                <div className="hidden md:block">
                    <Navigation >
                        <NavigationItem href="#hero">Home</NavigationItem>
                        <NavigationItem href="#about">About</NavigationItem>
                        <NavigationItem href="#portfolio">Portfolio</NavigationItem>
                        <NavigationItem href="#contacts">Contacts</NavigationItem>
                    </Navigation>
                </div>
            </div>
        </header>
    )
}
