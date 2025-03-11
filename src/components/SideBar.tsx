"use client"
import { pages } from '@/data/pages';
import { useEffect, useState } from 'react';


type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};
 
export const SideBar = ({ isOpen, setIsOpen }: Props) => {

    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <>
            <nav
                className={`absolute top-16 left-0 w-64 h-screen bg-gray-200 transform transition-all duration-400 z-50 ${
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}>
                <ul>
                    {pages.map((page,) => {

                        const isActive = currentPath === page.path;

                        return (
                            <a key={page.path} href={page.path}>
                                <li
                                    className={`p-4 hover:bg-risoflora hover:text-white
                                        cursor-pointer ${isActive && "bg-risoflora text-white"}`}  
                                >
                                    {page.title}
                                </li>
                            </a>
                        )
                    })
                    }
                </ul>
            </nav>
            {
                isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-5 z-30`}
                    />
                )
            }
        </>
    )
};

