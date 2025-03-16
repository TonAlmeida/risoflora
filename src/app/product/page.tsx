'use client';

import { BestSellers } from "@/components/BestSellers";
import { Title } from "@/components/ui/Title";
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from "react";

// Componente filho que usa useSearchParams
function ProductDetails() {
    const searchParams = useSearchParams();
    const [name, description, category, price, imageURL] = searchParams.values();

    useEffect(() => {
        if (name) {
            document.title = name;
        }
    }, [name]);

    return (
        <>
            <Title title={name} />
            <div className="grid grid-cols-1 sm:grid-cols-3 py-4 border-2 rounded-lg">
                <div className="p-3 sm:col-span-2">
                    <img className="h-72 m-auto" src={imageURL} alt={name} />
                </div>
                <div className="flex flex-col p-4 border-l-2">
                    <p className="grow text-lg font-bold">{description}, {category}</p>
                    <h2 className="text-3xl p-4">R$: {price}</h2>
                    <button className="py-3 px-6 rounded-md w-full bg-blue-500 hover:bg-blue-400 text-white font-bold">Comprar agora</button>
                    <button className="py-3 px-6 mb-7 mt-2 rounded-md w-full bg-gray-300 hover:bg-gray-200 text-risoflora font-bold">Adicionar ao carrinho</button>
                </div>
            </div>
        </>
    );
}

// Componente principal da página
export default function Product() {
    return (
        <main className="bg-white py-10 px-4">
            <Suspense fallback={<div>Loading...</div>}>
                <ProductDetails />
            </Suspense>
            <BestSellers />
        </main>
    );
}