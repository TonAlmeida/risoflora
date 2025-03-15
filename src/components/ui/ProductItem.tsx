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
            `/product?name=${product.name}&
            description=${product.description}&
            price=${product.price.toFixed(2)}&
            category=${product.category}&
            imageURL=${product.url}`
        );
    }

    return (
        <div onClick={e => handleProductClick(e)} className="group">
            <div className="bg-white p-4 w-52 flex flex-col justify-between">
                <img className="border w-48 h-48" src={product.url} alt={product.description}/>
                <p className="whitespace-nowrap truncate italic text-mds my-2 group-hover:underline">{product.name}</p>
                <h2 className="text-2xl">R$: {product.price.toFixed(2)}</h2>
                <button onClick={e => handleButtonClick(e)} className="px-3 mt-2 py-2 border text-sm bg-green-100 rounded-md text-risoflora hover:bg-green-200 italic">Adicionar ao carrinho</button>
            </div>
        </div>
    )
}