"use client"
import { BestSellers } from "@/components/ui/BestSellers";
import { Carroucel } from "@/components/ui/Carroucel";
import { Title } from "@/components/ui/Title";
import { banners } from "@/data/banners";
import { ProductType } from "@/types/productType";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {
    product: ProductType;
}


export const Product = ({product}: Props) => {
    
    const searchParams = useSearchParams();
    const [name, description, price, category, imageURL] = Array.from(searchParams.values());

    useEffect(() => {
        document.title = name;
    })

    return (
        <main className="bg-white py-10 px-4">
            <Title title={name} />
           <div className="grid grid-cols-3">
                <div className="p-3 col-span-2">
                    <Carroucel banners={banners} />
                </div>
                <div className="flex flex-col p-4">
                    <p className="grow text-lg font-bold">{description}</p>
                    <h2 className="text-3xl p-4">R$: {price}</h2>
                    <button className="py-3 px-6 rounded-md w-full bg-blue-500 hover:bg-blue-400 text-white font-bold">Comprar agora</button>
                    <button className="py-3 px-6 mb-7 mt-2 rounded-md w-full bg-gray-300 hover:bg-gray-200 text-risoflora font-bold">Adicionar ao carrinho</button>
                </div>
            </div>
            <BestSellers />
        </main>
    )
}

export default Product;