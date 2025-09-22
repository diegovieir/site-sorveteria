// Arquivo: src/components/Header.tsx (CORRIGIDO)

import Link from 'next/link'; // 1. IMPORTAMOS O LINK

export default function Header() {
  return (
    <header className="w-full bg-pink-500 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">Delícia Gelada</Link> {/* Usamos Link para o logo também */}
        </h1>
        <ul className="flex gap-6 text-lg">
          <li>
            {/* 2. TROCAMOS <a> POR <Link> */}
            <Link href="/" className="hover:underline">Início</Link>
          </li>
          <li>
            <Link href="/cardapio" className="hover:underline">Cardápio</Link>
          </li>
          <li>
            <Link href="/contato" className="hover:underline">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}