"use client"
import { Menu, X } from "@/components/icons";
import { useState } from "react";
import Navigation, { NavigationItem } from "@/components/navigation";

export default function Burger() {
    const [isOpen, setIsOpen] = useState(false)

    const menuHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div className="flex items-center">
                <button
                    className={`hover:text-emerald-400`}
                    onClick={menuHandler}>
                    <Menu />
                </button>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} absolute right-5 mt-4 z-20 w-40 shadow-custom text-center bg-white rounded-2xl`}>
                <Navigation variant={"column"} gap={"none"}>
                    <NavigationItem onClick={menuHandler} href="#hero" className="p-3 rounded-t-2xl hover:bg-emerald-400/10">Home</NavigationItem>
                    <NavigationItem onClick={menuHandler} href="#about" className="p-3 hover:bg-emerald-400/10">About</NavigationItem>
                    <NavigationItem onClick={menuHandler} href="#portfolio" className="p-3 hover:bg-emerald-400/10">Portfolio</NavigationItem>
                    <NavigationItem onClick={menuHandler} href="#contacts" className="p-3 rounded-b-2xl hover:bg-emerald-400/10">Contacts</NavigationItem>
                </Navigation>
            </div>
        </div>
    )
}
