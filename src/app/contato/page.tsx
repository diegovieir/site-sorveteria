// Arquivo: src/app/contato/page.tsx (Versão Final com Formulário)
'use client'; // <-- Isso transforma a página em um Componente de Cliente, permitindo interatividade

import { useState } from 'react'; // <-- Importamos o "useState" do React para gerenciar o que o usuário digita

export default function ContatoPage() {
  // Estados para guardar os dados do formulário e o status do envio
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede que a página recarregue ao enviar o formulário
    setStatus('Enviando...');

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (response.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        throw new Error('Falha ao enviar a mensagem.');
      }
    } catch (error) {
      setStatus('Erro ao enviar. Tente novamente.');
    }
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-pink-500 mb-12">
          Onde nos Encontrar & Contato
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Seção de Endereço e Horários (continua a mesma) */}
          <div className="text-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Delícia Gelada</h2>
            <p className="text-gray-700 mb-2"><strong>Endereço:</strong> Rua Centro, 123 - Centro</p>
            <p className="text-gray-700 mb-6">Cuité - PB, 58175-000</p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Horário de Funcionamento</h3>
            <p className="text-gray-700"><strong>Terça a Domingo:</strong> 14:00 - 22:00</p>
            <p className="text-gray-700"><strong>Segunda-feira:</strong> Fechado</p>
          </div>
          {/* Seção do Mapa (continua a mesma) */}
          <div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.718871984262!2d-36.1601616789791!3d-6.49377488806087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b278351538356d%3A0x7a306a45e3ab9889!2sCuit%C3%A9%2C%20PB%2C%2058175-000!5e0!3m2!1spt-BR!2sbr!4v1726972621183!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        {/* --- SEÇÃO DO FORMULÁRIO --- */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Envie uma mensagem</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-lg font-medium text-gray-700">Nome</label>
              <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"/>
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-lg font-medium text-gray-700">Mensagem</label>
              <textarea id="mensagem" rows={4} value={mensagem} onChange={(e) => setMensagem(e.target.value)} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors duration-300 shadow-lg">
                Enviar Mensagem
              </button>
            </div>
            {status && <p className="text-center text-lg mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}