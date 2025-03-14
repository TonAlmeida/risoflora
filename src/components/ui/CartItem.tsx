import { TrashIcon } from "lucide-react"

export const CartItem = () => {
    return (
        <div className="flex flex-row justify-around text-xs sm:text-md bg-white items-center rounded-sm mb-4 p-2 border-risoflora min-w-80 w-full">
            <img src="images/bestSellers/cacto.jpeg" alt="cacto" className="size-12 sm:size-20" />
            <p className="">
                {/**nome */}
                cacto vindo do egito que fala
            </p>
            {/**quantidade */}
            <input type="number" defaultValue={1} className="border w-8"/>
            <TrashIcon className="hover:text-red-500 cursor-pointer" />
            <h1>
                {/**preço */}
                RS: 110,00
            </h1>
        </div>
    )
}