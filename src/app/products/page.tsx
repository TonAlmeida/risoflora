"use client"
import { BestSellers } from "@/components/ui/BestSellers";
import { Input } from "@/components/ui/Input";
import { ProductItem } from "@/components/ui/ProductItem";
import { Products } from "@/data/products";
import { useState } from "react";

export default function Page() {//Products page

    const [search, setSearch] = useState('');

    return (
        <main className="">
            <Input search={search} setSearch={setSearch} />
            <div
                style={{minHeight: 'calc(100vh - 244px)'}}
                className="flex gap-5 flex-wrap justify-around n p-4 pt-8 bg-gray-200"
            >
                {
                    Products.filter(product => {
                        const data = `${product.category} ${product.description} ${product.name} ${product.url}`;
                        return data.toLowerCase().includes(search.toLowerCase())
                    }).map(item =>
                        <ProductItem key={item.id} product={item} />)
                }
            </div>
            <BestSellers />
        </main>
    )
}