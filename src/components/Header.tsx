"use client";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { MenuIcon, ShieldCloseIcon, ShoppingBagIcon, SidebarCloseIcon, XIcon } from "lucide-react";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex h-14 w-full bg-gray-100 relative">
            <SideBar isOpen={isOpen} />
            <div className="flex items-center justify-between w-full">
                <div>
                    <div className="flex items-center mx-3">
                        {
                            isOpen ?
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <XIcon size={24} />
                            </button> :
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <MenuIcon size={24} />
                            </button>
                        }
                        <a href="/">
                        <h1 className="text-xl font-bold ml-8 text-orange-950">Risoflora</h1>
                        </a>
                    </div>
                </div>
                <a href="/cart">
                <ShoppingBagIcon size={26} className="mx-3" />
                </a>
            </div>
            
        </header>
    );
}