
type Props = {
    title: string;
    body: string;
}

export const Curiosity = ({title, body}: Props) => {
    return (
        <section className="px-5 py-10 text-center bg-orange-700 text-gray-300">
            <h2 className="m-2 text-xl font-bold text-white">
                {title}
            </h2>
            <p className="m-2">
                {body}
            </p>
        </section>
    )
};