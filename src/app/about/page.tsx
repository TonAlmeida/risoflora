import { Curiosity } from "@/components/Curiosity";
import { OurClients } from "@/components/OurClients";
import { OurTeam } from "@/components/OurTeam";
import { OurWork } from "@/components/OurWork";
import { Tabs } from "@/components/Tabs";
import { Banner } from "@/components/ui/Banner";

export default function About() {
    return (
        <main>
            <Banner title="Sobre" color="gray-100" url="/about" imageURL=""  />
            <Tabs />
            <OurWork />
            <OurTeam />
            <Curiosity title="história" body="foi criada em 1945 e tem uma longa história contada aqui" />
            <OurClients />
        </main>
    )
}