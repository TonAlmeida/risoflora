"use client"
import { useState } from "react";

export const Tabs = () => {
  const tabClass =
    "cursor-pointer p-3 text-sm sm:text-xl md:text-2xl text-center hover:border-risoflora hover:border-b-4 flex-1";
  

  const [selected, setSelected] = useState<string>("about");

  const changeSelectedTab = (tab: string) => {
    setSelected(tab);
  };

  return (
    <div className="py-10 text-orange-950 h-[600px] sm:h-[400px] bg-white">
      <div id="tabs" className="w-full flex justify-around italic">
        <div
          className={`${tabClass} ${selected == "about" && "border-risoflora border-b-4"}`}
          onClick={() => changeSelectedTab("about")}
        >
          Sobre Nós
        </div>
        <div
          className={`${tabClass} ${selected === "mission" && "border-risoflora border-b-4"}`}
          onClick={() => changeSelectedTab("mission")}
        >
          Nossa Missão
        </div>
        <div
          className={`${tabClass} ${selected === "goals" && "border-risoflora border-b-4"}`}
          onClick={() => changeSelectedTab("goals")}
        >
          Nossos Objetivos
        </div>
      </div>
      
      <div className="h-10 w-full justify-around flex p-6 text-orange-950">

        <div
          className={`transition-all duration-200 w-full italic h-fit rounded-md p-5 bg-white ${
            selected === "about" ? "block" : "hidden opacity-0"
          }`}
        >
          <h1 className="text-2xl p-5">Sobre Nós</h1>
          <div className="p-5 text-xl">
            <p>
              Na Risoflora, nossa paixão por flores e plantas nos inspira a criar momentos únicos e emocionantes.
            </p>
            <p>
              Oferecemos produtos frescos, de alta qualidade, cuidadosamente selecionados, para que cada ocasião seja especial.
            </p>
            <p>
              Com uma ampla variedade de arranjos, estamos aqui para espalhar beleza e sentimentos através da natureza.
            </p>
          </div>
        </div>


        <div
          className={`transition-all duration-200 w-full italic h-fit rounded-md p-5 bg-white ${
            selected === "mission" ? "block" : "hidden opacity-0"
          }`}
        >
          <h1 className="text-2xl p-5">Nossa Missão</h1>
          <div className="p-5 text-xl">
            <p>
              Nosso compromisso é proporcionar aos nossos clientes uma experiência encantadora e inesquecível,
              conectando o mundo das flores às suas celebrações.
            </p>
            <p>
              Com um atendimento personalizado e acolhedor, buscamos sempre oferecer o melhor para embelezar o seu dia
              e fortalecer os laços entre as pessoas.
            </p>
          </div>
        </div>

 
        <div
          className={`transition-all duration-200 w-full italic h-fit rounded-md p-5 bg-white ${
            selected === "goals" ? "block" : "hidden opacity-0"
          }`}
        >
          <h2 className="text-2xl p-5">Nossos Objetivos</h2>
          <ul className="list-disc p-5">
            <li className="m-1">Proporcionar uma experiência encantadora e inesquecível aos nossos clientes.</li>
            <li className="m-1">Oferecer produtos frescos e de alta qualidade, cuidadosamente selecionados.</li>
            <li className="m-1">Embelezar o dia e fortalecer os laços entre as pessoas.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
