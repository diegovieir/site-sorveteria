// Arquivo: src/app/cardapio/page.tsx

// 1. Aqui definimos os dados do nosso cardápio.
// No futuro, isso pode vir de um banco de dados!
const sabores = [
  {
    id: 1,
    nome: "Chocolate Belga",
    descricao: "O clássico chocolate, com a cremosidade que só o chocolate belga tem.",
    preco: "R$ 8,00",
  },
  {
    id: 2,
    nome: "Morango Silvestre",
    descricao: "Feito com morangos frescos da estação, doce e levemente ácido.",
    preco: "R$ 8,00",
  },
  {
    id: 3,
    nome: "Ninho com Nutella",
    descricao: "A combinação perfeita entre o creme de leite Ninho e a irresistível Nutella.",
    preco: "R$ 10,00",
  },
  {
    id: 4,
    nome: "Pistache Premium",
    descricao: "Sabor autêntico de pistache, importado e selecionado.",
    preco: "R$ 12,00",
  },
  {
    id: 5,
    nome: "Limão Siciliano",
    descricao: "Refrescante e cítrico, perfeito para os dias quentes de Cuité.",
    preco: "R$ 8,00",
  },
];

export default function CardapioPage() {
  return (
    <div className="bg-gray-50 min-h-full">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-5xl font-bold text-center text-pink-500 mb-12">
          Nosso Cardápio
        </h1>

        {/* 2. Usamos .map() para transformar nossa lista de dados em elementos na tela */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sabores.map((sabor) => (
            // 3. O "key" é importante para o React saber identificar cada item
            <div key={sabor.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold text-gray-800">{sabor.nome}</h2>
                <span className="text-xl font-semibold text-pink-500">{sabor.preco}</span>
              </div>
              <p className="text-gray-600 flex-grow">{sabor.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}