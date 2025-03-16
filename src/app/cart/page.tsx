import { BestSellers } from "@/components/BestSellers";
import { CartItem } from "@/components/ui/CartItem";
import { Title } from "@/components/ui/Title";

export default function Page() {
    return (
        <main className="h-full p-3 bg-gray-200">
            <Title title="Carrinho" />
            
            <div className="flex flex-col sm:flex-row items-start pb-10">
                <div className="my-5 sm:my-0 w-full">
                    <CartItem />
                    <CartItem />
                </div>
                 
                <div className="flex flex-col justify-around border-2 border-black p-3 italic sm:w-1/2 sm:ml-2 w-full text-lg">
                    <div className="flex justify-between items-end p-3 text-center">
                        <h2 className="">tax</h2>
                        <h2>R$: 11,00</h2>
                    </div>
                    <div className="flex justify-between items-end p-3 text-center">
                        <h2 className="">IOF</h2>
                        <h2>R$: 4,00</h2>
                    </div>
                    <hr className="border-b-2 border-black w-full" />
                    <div className="flex justify-between items-end p-3 text-center font-bold">
                        <h2 className="">Total</h2>
                        <h2>R$: 125,00</h2>
                    </div>
                    <button
                    className={`bg-black rounded-lg text-gray-200
                        text-xl w-full h-14 transform hover:opacity-80`}
                    >
                        Comprar

                    </button>
                </div>
            </div>

            <BestSellers />
            
        </main>
    )
}