'use client';

import { BestSellers } from "@/components/BestSellers";
import { Input } from "@/components/ui/Input";
import { ProductItem } from "@/components/ui/ProductItem";
import { ProductsList } from "@/data/productsList";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from "react";

function ProductListWithSearch() {
    const [search, setSearch] = useState<string>('');
    const searchParams = useSearchParams();
    const getSearch = searchParams.get("search");

    useEffect(() => {
        if (getSearch) {
            setSearch(getSearch);
        }
    }, [getSearch]);

    const filterResult = ProductsList.filter(product => {
        const data = `${product.category} ${product.description} ${product.name} ${product.url}`;
        return data.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <>
            <Input search={search} setSearch={setSearch} />
            <div className="flex gap-5 flex-wrap justify-around p-4 pt-8 bg-gray-200">
                {filterResult.map(item => (
                    <ProductItem key={item.id} product={item} />
                ))}
                {filterResult.length < 1 && (
                    <div className="text-gray-500">
                        <p>Ops...</p>
                        <p>nada encontrado</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default function Products() {
    return (
        <main className="">
            <Suspense fallback={<div>Loading...</div>}>
                <ProductListWithSearch />
            </Suspense>
            <BestSellers />
        </main>
    );
}