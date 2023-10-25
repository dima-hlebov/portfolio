import Navigation, { NavigationItem } from "@/components/navigation";
import Burger from "@/components/navigation/Burger";

export function Header() {

    return (
        <header className="fixed top-0 z-10 pt-4 right-5 md:-translate-x-1/2 md:left-1/2 md:right-auto">
            <div className="flex px-2 py-2 bg-white rounded-lg md:rounded-2xl md:px-5 shadow-custom">
                <div className="md:hidden">
                    <Burger />
                </div>
                <div className="hidden md:block">
                    <Navigation >
                        <NavigationItem href="/#hero">Home</NavigationItem>
                        <NavigationItem href="/#about">About</NavigationItem>
                        <NavigationItem href="/#portfolio">Portfolio</NavigationItem>
                        <NavigationItem href="/#contacts">Contacts</NavigationItem>
                    </Navigation>
                </div>
            </div>
        </header>
    )
}
