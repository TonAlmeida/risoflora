import { pages } from '@/data/pages';

type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};
 
export const SideBar = ({ isOpen, setIsOpen }: Props) => {

    const currentPath = window.location.pathname;

    return (
        <>
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
            {
                isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed top-14 left-0 w-full h-full bg-black bg-opacity-50 z-40"
                    />
                )
            }
        </>
    )
};

