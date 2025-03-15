'use client';

import { BestSellers } from "@/components/ui/BestSellers";
import { Input } from "@/components/ui/Input";
import { ProductItem } from "@/components/ui/ProductItem";
import { Products } from "@/data/products";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Page() {
    const [search, setSearch] = useState<string>('');

    const searchParams = useSearchParams();
    const getSearch = searchParams.get("search");
    
    useEffect(() => {
        getSearch && 
            setSearch(getSearch);
    }, [])
    
    const filterResolt = Products.filter(product => {
        const data = `${product.category} ${product.description} ${product.name} ${product.url}`;
        return data.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <main className="">
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
            <BestSellers />
        </main>
    );
}
