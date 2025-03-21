import { BestSellers } from "@/components/BestSellers";
import { Carroucel } from "@/components/ui/Carroucel";
import { Categories } from "@/components/Categories";
import { Curiosity } from "@/components/Curiosity";
import { RecomendedServices } from "@/components/RecomendedServices";

import { banners } from "@/data/banners";

const curiosity = {
  title: 'Porque Orgânico?',
  body: `Consumir produtos orgânicos é uma escolha saudável
    porque eles são cultivados sem pesticidas e fertilizantes
    sintéticos, preservando a saúde do solo, da água e dos
    consumidores. Além disso, eles tendem a ter mais nutrientes
    e são mais sustentáveis, beneficiando o meio ambiente.`
}

export default function Page() {

  return (
    <main className="h-full bg-white">
      <Carroucel banners={banners} />
      <Categories />
      <Curiosity title={curiosity.title} body={curiosity.body} />
      <BestSellers />
      <RecomendedServices />
    </main>
  );
}