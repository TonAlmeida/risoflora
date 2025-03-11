"use client";
import { useEffect, useState } from "react";
import { SideBar } from "@/components/SideBar";
import { MenuIcon, XIcon, ShoppingBagIcon } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen ?
    (document.body.style.overflow = "hidden"):
    (document.body.style.overflow = "auto");
  }, [isOpen])

  return (
    <header className="flex items-center justify-between h-16 min-h-16 w-full bg-gray-100 relative z-40">

      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex items-center justify-between w-full px-3">
        <div className="flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="mr-3">
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>

          <a href="/">
            <h1 className="text-xl font-bold ml-2 text-orange-950">Risoflora</h1>
          </a>
        </div>

        {/* Cart Icon */}
        <a href="/cart">
          <ShoppingBagIcon size={26} className="mx-3" />
        </a>
      </div>
    </header>
  );
};
