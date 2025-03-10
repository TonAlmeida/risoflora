import { Carroucel } from "@/components/Carroucel";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="h-full">
      <Carroucel />
      <Categories />
      <Footer />
    </div>
  );
}