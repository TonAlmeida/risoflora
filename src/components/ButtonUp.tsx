"use client"
import { useState, useEffect } from 'react';

export const ButtonUp = () => {
  const [showButton, setShowButton] = useState(false);

  // Função para verificar a posição da rolagem
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // UseEffect para adicionar e limpar o event listener de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpeza do event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* Botão de voltar ao topo, aparece apenas se showButton for true */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-3 bg-risoflora opacity-50 text-white rounded-full shadow-lg transform transition-all hover:scale-110 hover:opacity-95"
          style={{ transition: 'transform 0.3s ease-in-out' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7-7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
