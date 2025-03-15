"use client"
import { ProductType } from "@/types/productType"
import { useRouter } from "next/navigation"

type Props = {
    product: ProductType;
}

export const ProductItem = ({product}: Props) => {

    const router = useRouter();

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    const handleProductClick = (e: React.MouseEvent) => {
        router.push(
            `/product?
            name=${product.name}&
            description=${product.description}&
            price=${product.price.toFixed(2)}&
            category=${product.category}&
            imageURL=${product.url}`
        );
    }

    return (
        <div onClick={e => handleProductClick(e)} className="group cursor-pointer">
            <div className="bg-white p-4 w-40 h-64 sm:h-[350px] sm:w-52 md:w-64 md:h-96 flex flex-col justify-between">
                <img className="border h-36 w-36 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto" src={product.url} alt={product.description}/>
                
                <div className="flex flex-col justify-between h-full">
                    <p className="whitespace-nowrap truncate italic text-xs sm:text-lg my-2 group-hover:underline text-left">{product.name}</p>
                    <h2 className="text-sm sm:text-2xl text-left">R$: {product.price.toFixed(2)}</h2>
                </div>

                <button onClick={e => handleButtonClick(e)} className="px-3 mt-2 py-2 border text-[7px] sm:text-sm bg-green-100 rounded-md text-risoflora hover:bg-green-200 italic w-full sm:w-auto">
                    Adicionar ao carrinho
                </button>
            </div>
        </div>


    )
}