// Arquivo: src/app/page.tsx (CORRIGIDO)

import Link from 'next/link'; // 1. IMPORTAMOS O LINK

export default function Home() {
  return (
    <section className="relative flex items-center justify-center h-full">
      <div
        className="absolute inset-0 bg-[url('/images/sorvete-hero.jpg')] bg-cover bg-center bg-no-repeat"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
          Bem-vindo à Delícia Gelada!
        </h1>
        <p className="mt-4 text-xl md:text-2xl drop-shadow-lg">
          O sabor que refresca a alma em Cuité.
        </p>
        {/* 2. TROCAMOS <a> POR <Link> */}
        <Link
          href="/cardapio"
          className="mt-8 inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg"
        >
          Conheça nosso Cardápio
        </Link>
      </div>
    </section>
  );
}