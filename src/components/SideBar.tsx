"use client"
import { pages } from '@/data/pages';
 
export const SideBar = ({ isOpen }: { isOpen: boolean }) => {

    const currentPath = window.location.pathname;

    return (
        <nav
            className={`absolute top-14 left-0 w-64 h-screen bg-gray-200 transform transition-all duration-400 z-50 ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}>
            <ul>
                {pages.map((page,) => {

                    const isActive = currentPath === page.path;

                    return (
                        <li
                            key={page.path}
                            className={`p-4 hover:bg-orange-950 hover:text-white
                                cursor-pointer ${isActive && "bg-orange-950 text-white"}`}  
                        >
                            {page.title}
                        </li>
                    )
                })
                }
            </ul>
        </nav>
    )
};

