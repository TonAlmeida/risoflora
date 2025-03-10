import {categories} from "@/data/categories";
export const Categories = () => {
    return (
        <section className="text-center p-10 my-10">
            <h2 className="my-10 text-2xl text-orange-950">Categories</h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-4">
                {
                    categories.map((item) => (
                        <a href="/" key={item.id}>
                            <div className="flex flex-col items-center rounded-md text-orange-950 hover:text-orange-500 transition-all duration-300" >
                                <div className="size-36 overflow-hidden">
                                    <img className="object-contain w-full h-full" src={item.path} alt={item.title} />
                                </div>
                                <h4 className="mt-5 italic text-lg">{item.title}</h4>
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
    )
};