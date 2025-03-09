import { pages } from '@/data/pages';
 
export const SideBar = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <nav
            className={`absolute top-14 left-0 w-64 h-screen bg-gray-200 transform transition-all duration-500 ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}>
            <ul>
                {pages.map((page,) => (
                    <li
                        key={page.path}
                        className="p-4 hover:bg-orange-950 hover:text-white cursor-pointer"
                    >
                        {page.title}
                    </li>
                ))}
            </ul>
        </nav>
    )
};

