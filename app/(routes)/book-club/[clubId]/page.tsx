"use client"
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Book, Calendar, MessageCircle, Users, ArrowLeft, Star } from 'lucide-react'
import Link from 'next/link'

// Simulação de dados do clube
const clubeData = {
  id: 1,
  nome: "Ficção Científica Futurista",
  livroAtual: "Neuromancer",
  autor: "William Gibson",
  descricao: "Explorando os limites da tecnologia e da consciência humana, Neuromancer é um clássico cyberpunk que definiu o gênero.",
  membros: 42,
  proximaReuniao: "2024-05-15",
  horaReuniao: "19:00",
  livrosAnteriores: [
    "Fundação", "Duna", "2001: Uma Odisseia no Espaço"
  ],
  discussoes: [
    { usuario: "Alice", comentario: "A descrição do ciberespaço é fascinante!" },
    { usuario: "Bob", comentario: "Como vocês interpretam o papel da IA na história?" },
  ]
}

export default function ClubeSingle() {
  const router = useRouter()
  const { clubId } = useParams()

  // Na implementação real, você buscaria os dados do clube com base no ID

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex items-start">
            <img
              src={`/placeholder.svg?height=300&width=200`}
              alt={`Capa do livro ${clubeData.livroAtual}`}
              className="w-40 h-60 object-cover rounded-md mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{clubeData.livroAtual}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">por {clubeData.autor}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{clubeData.descricao}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <Users className="h-5 w-5 mr-1 text-[#65b443]" />
                  {clubeData.membros} membros
                </span>
                <span className="flex items-center">
                  <Calendar className="h-5 w-5 mr-1 text-[#65b443]" />
                  Próxima reunião: {new Date(clubeData.proximaReuniao).toLocaleDateString()} às {clubeData.horaReuniao}
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Livros Anteriores</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {clubeData.livrosAnteriores.map((livro, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Book className="h-5 w-5 text-[#65b443]" />
                  <span className="text-gray-700 dark:text-gray-300">{livro}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Discussões Recentes</h3>
            <div className="space-y-4">
              {clubeData.discussoes.map((discussao, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="font-medium text-gray-900 dark:text-white mb-1">{discussao.usuario}</p>
                  <p className="text-gray-700 dark:text-gray-300">{discussao.comentario}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <button className="w-full bg-[#65b443] hover:bg-[#54a332] text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center">
              Participar deste Clube
              <MessageCircle className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </main>

     
    </div>
  )
}