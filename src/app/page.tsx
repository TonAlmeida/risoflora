import { BestSellers } from "@/components/BestSellers";
import { Carroucel } from "@/components/Carroucel";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";
import { WhyOrganic } from "@/components/WhyOrganic";

export default function Page() {
  return (
    <main className="h-full bg-white">
      <Carroucel />
      <Categories />
      <WhyOrganic />
      <BestSellers />
      <Footer />
    </main>
  );
}