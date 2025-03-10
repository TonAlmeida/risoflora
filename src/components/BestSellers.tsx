import { bestSellers } from "@/data/bestSellers";
export const BestSellers = () => {
    return (
        <section className="text-center p-10 my-10 text-orange-950 ">
            <h2 className="my-10 text-2xl ">
                Mais Vendidos
            </h2>
            <div className="grid grid-cols-2 grid-rows-7 gap-4">
                {
                bestSellers.map((product, index) => {
                    return (
                        <div
                            key={product.id}
                            className={`
                                    ${index != 0 && index != (bestSellers.length-1) && 'row-span-2'}
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