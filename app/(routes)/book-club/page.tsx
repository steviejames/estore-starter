"use client"
import React, { useState } from 'react'
import { Book, Calendar, MessageCircle, Users, ChevronRight, Search } from 'lucide-react'
import Link from 'next/link'
import ClubCard from './components/club-card'
import Button from '@/components/ui/custom-button'
import Container from '@/components/ui/container'

export default function ClubeLivro() {
  const [searchTerm, setSearchTerm] = useState('')

  const clubes = [
    { id: 1, nome: "Ficção Científica Futurista", livroAtual: "Neuromancer", membros: 42, proximaReuniao: "2024-05-15" },
    { id: 2, nome: "Clássicos Atemporais", livroAtual: "1984", membros: 38, proximaReuniao: "2024-05-18" },
    { id: 3, nome: "Mistérios e Suspenses", livroAtual: "O Silêncio dos Inocentes", membros: 35, proximaReuniao: "2024-05-20" },
    { id: 4, nome: "Fantasia Épica", livroAtual: "O Nome do Vento", membros: 50, proximaReuniao: "2024-05-22" },
  ]

  const clubesFiltrados = clubes.filter(clube =>
    clube.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    clube.livroAtual.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <Container >

<div className="mt-10 mx-auto h-[calc(100vh-13rem)]">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Crie seu próprio clube do livro</h2>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      Tem uma ideia para um novo clube? Compartilhe sua paixão pela leitura e crie uma comunidade em torno dos livros que você ama.
    </p>
    <Button className="bg-[#65b443] hover:bg-[#54a332] text-white font-bold  flex items-center justify-center">
      Criar Novo Clube
      <MessageCircle className="ml-2 h-5 w-5" />
    </Button>
  </div>
</Container>
    </div>

  )
}
