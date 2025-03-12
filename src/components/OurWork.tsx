import { photos } from "@/data/photos";
import { Carroucel } from "./ui/Carroucel";
import { Title } from "./ui/Title";
export const OurWork = () => {
    return (
        <section className="text-center p-14 text-orange-950 bg-white">
            <Title title="Nosso Trabalho" />
            <Carroucel banners={photos} />
        </section>
    )
};