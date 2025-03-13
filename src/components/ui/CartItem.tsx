
export const CartItem = () => {
    return (
        <div className="flex flex-row justify-around bg-white items-center rounded-sm mb-4 p-2 border-risoflora min-w-80 w-full">
            <img src="images/bestSellers/cacto.jpeg" alt="cacto" className="size-24" />
            <p>
                {/**nome */}
                cacto vindo do egito que
            </p>
            {/**quantidade */}
            <input type="number" defaultValue={1} className="border w-8"/>
            <h1>
                {/**preço */}
                RS: 110,00
            </h1>
        </div>
    )
}