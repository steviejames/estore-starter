"use client"
import { useState } from 'react'
import { Menu, Bell, Search } from 'lucide-react'
import Bookshelf from './components/bookshelf'
import Reports from './components/reports'
import Overview from './components/overview'

export default function PainelDoAutor() {
  const [abaAtiva, setAbaAtiva] = useState('painel')

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Menu className="w-6 h-6" />
            <h1 className="text-xl font-bold">Painel do Autor</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5" />
            <Bell className="w-5 h-5" />
            <div className="w-8 h-8 bg-[#72cb4b] rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Navegação */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto flex space-x-4 p-2">
          {['Painel', 'Estante', 'Relatórios', 'Análises', 'Configurações'].map((item) => (
            <button
              key={item}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                abaAtiva === item.toLowerCase() ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setAbaAtiva(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="container mx-auto p-6">
        {/* Nova Jornada do Livro */}
        {abaAtiva === 'painel' && <Overview />}
        {abaAtiva === 'estante' && <Bookshelf />}
        {abaAtiva === 'relatórios' && <Reports />}
      </main>
    </div>
  )
}
