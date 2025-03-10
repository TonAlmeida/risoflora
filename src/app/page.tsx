import { Carroucel } from "@/components/Carroucel";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="h-full flex flex-col justify-between">
      <Carroucel />
      <Footer />
    </div>
  );
}