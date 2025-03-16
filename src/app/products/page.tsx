'use client';

import { BestSellers } from "@/components/BestSellers";
import { Input } from "@/components/ui/Input";
import { ProductItem } from "@/components/ui/ProductItem";
import { ProductsList } from "@/data/productsList";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";
import { Suspense } from "react";

export default function Products() {
    const [search, setSearch] = useState<string>('');

    const searchParams = useSearchParams();
    const getSearch = searchParams.get("search");
    
    useEffect(() => {
        getSearch && 
            setSearch(getSearch);
    }, [])
    
    const filterResolt = ProductsList.filter(product => {
        const data = `${product.category} ${product.description} ${product.name} ${product.url}`;
        return data.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <main className="">
            <Suspense fallback={<div>Loading...</div>}>
            <Input search={search} setSearch={setSearch} />
            <div className="flex gap-5 flex-wrap justify-around n p-4 pt-8 bg-gray-200">
                {
                    filterResolt.map(item => <ProductItem key={item.id} product={item} />)
                }
                {
                    filterResolt.length < 1 &&
                        <div className="text-gray-500">
                            <p>
                                Ops...
                            </p>
                            <p className="">
                                nada encontrado
                            </p>
                        </div>
                }
            </div>
            </Suspense>
            <BestSellers />
        </main>
    );
}
