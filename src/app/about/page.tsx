import { Banner } from "@/components/ui/Banner";
import { OurClients } from "@/components/OurClients";
import { Tabs } from "@/components/Tabs";
import { OurWork } from "@/components/OurWork";
import { OurTeam } from "@/components/OurTeam";
import { Curiosity } from "@/components/Curiosity";

const curiosity = {
    title: 'Porque Orgânico?',
    body: `Consumir produtos orgânicos é uma escolha saudável
      porque eles são cultivados sem pesticidas e fertilizantes
      sintéticos, preservando a saúde do solo, da água e dos
      consumidores. Além disso, eles tendem a ter mais nutrientes
      e são mais sustentáveis, beneficiando o meio ambiente.`
  }

export const About = () => {
    return (
        <main className="h-full bg-white">
            <Banner url="/about" title="Sobre" color="risoflora" />
            <Tabs />
            <OurWork />
            <OurTeam />
             <Curiosity title={curiosity.title} body={curiosity.body} />
            <OurClients />
        </main>
    )
};

export default About;