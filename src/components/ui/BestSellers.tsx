import { bestSellers } from "@/data/bestSellers";
import { Title } from "./Title";
export const BestSellers = () => {
    return (
        <section className="text-center p-14 text-orange-950 bg-white">
            <Title title="Mais Vendidos" />
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-7 gap-4">
                {
                bestSellers.map((product, index) => {
                    return (
                        <div
                            key={product.id}
                            className={`
                                    ${index != 0 && index != (bestSellers.length-1) && 'sm:row-span-2'}
                            `}>
                            <a href="/" className="h-full p-10 bg-white shadow-md flex flex-col items-center justify-center">
                                <img src={product.image} alt={product.name} className="h-48 w-48 object-cover" />
                                <h3 className="text-lg italic font-semibold">{product.name}</h3>
                                <p className="text-xs">{product.description}</p>
                                <p className="text-lg font-semibold">${product.price}</p>
                            </a>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
};