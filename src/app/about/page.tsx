import { Banner } from "@/components/ui/Banner";
import { OurClients } from "@/components/OurClients";
import { Tabs } from "@/components/Tabs";
import { OurWork } from "@/components/OurWork";
import { OurTeam } from "@/components/OurTeam";

export default function About() {
    return (
        <main className="h-full bg-white">
            <Banner url="/about" title="Sobre" color="white" imageURL="" />
            <Tabs />
            <OurWork />
            <OurTeam />
            <hr className="bg-gray-500 w-4/5 mt-10 m-auto" />
            <OurClients />
        </main>
    )
};