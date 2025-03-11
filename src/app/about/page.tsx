import { Banner } from "@/components/Banner";
import { Carroucel } from "@/components/Carroucel";
import { Footer } from "@/components/Footer";
import { OurClients } from "@/components/OurClients";
import { Tabs } from "@/components/Tabs";

export const About = () => {
    return (
        <main className="h-full bg-white">
            <Banner title="Sobre" color="risoflora" />
            <Tabs />
            <OurClients />
            <Footer />
        </main>
    )
};

export default About;