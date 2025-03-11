type Props = {
    title: string;
    color: string;
}

export const Banner = ({title, color}: Props) => {

    return (
        <a href="/about" className={`w-full bg-white text-gray-600 h-96 flex items-center justify-center text-center`}>
            <h1 className={`bg-${color} p-1 pt-3 text-white m-5 text-9xl font-bold`}>{title}</h1>
        </a>
    )
};