// Arquivo: src/components/Header.tsx

export default function Header() {
  return (
    <header className="w-full bg-pink-500 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">
          Delícia Gelada
        </h1>
        <ul className="flex gap-6 text-lg">
          <li>
            <a href="/" className="hover:underline">Início</a>
          </li>
          <li>
            <a href="/cardapio" className="hover:underline">Cardápio</a>
          </li>
          <li>
            <a href="/contato" className="hover:underline">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}