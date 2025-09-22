export default function Home() {
  return (
    <section className="relative flex items-center justify-center h-[calc(100vh-68px)]">
      {/* Camada 1: Imagem de Fundo */}
      <div
        className="absolute inset-0 bg-[url('/images/sorvete-hero.jpg')] bg-cover bg-center bg-no-repeat"
      />
      
      {/* Camada 2: Véu Escuro (Overlay) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Camada 3: Conteúdo de Texto e Botão */}
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
          Bem-vindo à Delícia Gelada!
        </h1>
        <p className="mt-4 text-xl md:text-2xl drop-shadow-lg">
          O sabor que refresca a alma em Cuité.
        </p>
        <a
          href="/cardapio"
          className="mt-8 inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg"
        >
          Conheça nosso Cardápio
        </a>
      </div>
    </section>
  );
}