"use client"

import {categories} from "@/data/categories";
import {Title} from '@/components/ui/Title';

import { CategoryType } from "@/types/categoryType";
import { useRouter } from "next/navigation";

export const Categories = () => {

    const router = useRouter();

    const handleClick = (item: CategoryType) => {
        router.push(`/products?search=${item.title}`);
    }
    
    return (
        <section className="text-center p-14 bg-white">
           <Title title="Categorias de produtos" />
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-4 pt-10">
                {
                    categories.map((item) => (
                        <div onClick={() => handleClick(item)} key={item.id} className="cursor-pointer">
                            <div className="flex flex-col items-center rounded-md text-orange-950 hover:text-orange-500 transition-all duration-300" >
                                <div className="size-36 overflow-hidden">
                                    <img className="object-contain w-full h-full" src={item.path} alt={item.title} />
                                </div>
                                <h4 className="mt-5 italic text-lg">{item.title}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};