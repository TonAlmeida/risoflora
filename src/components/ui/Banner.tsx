type Props = {
    title: string;
    color: string;
    url: string;
}

export const Banner = ({title, color, url}: Props) => {

    return (
        <a href={url} style={{ backgroundImage: "url('images/banner2.jpg')" }} className={`w-full bg-risoflora bg-cover bg-center text-gray-600 h-40 sm:h-96 flex items-center justify-center text-center`}>
            <h1 className={`bg-${color} p-1 pt-3 text-white m-5 text-6xl sm:text-9xl font-bold`}>{title}</h1>
        </a>
    )
};