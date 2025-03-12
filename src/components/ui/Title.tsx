type Props = {
    title: string;
}
export const Title = ({title}: Props) => {
    return  (
        <h2 className="my-10 text-2xl text-orange-950">
            {title}
        </h2>)
}