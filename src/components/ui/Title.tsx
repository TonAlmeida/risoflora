type Props = {
    title: string;
}
export const Title = ({title}: Props) => {
    return  (
        <h2 className={`p-10 text-2xl text-orange-950 text-center m-auto`}>
            {title}
        </h2>)
}