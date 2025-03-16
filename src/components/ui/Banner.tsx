type Props = {
    title: string;
    color: string;
    url: string;
    imageURL: string;
}

export const Banner = ({title, color, url, imageURL}: Props) => {

    return (
        <a href={url} style={{ backgroundImage: `url('${imageURL}')` }} className={`w-full bg-gray-100 bg-cover bg-center h-52 sm:h-96 flex items-center justify-center text-center`}>
            <h1 className={`bg-${color} p-1 pt-3 text-risoflora m-5 text-6xl sm:text-9xl font-bold`}>{title}</h1>
        </a>
    )
};