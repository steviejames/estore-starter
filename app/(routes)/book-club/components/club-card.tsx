import { Book, Calendar, MessageCircle, Users, ChevronRight, Search } from 'lucide-react'
import Link from 'next/link'

import React from 'react'

interface Props {
    data: any
}

const ClubCard = ({data}: Props) => {
  return (
    <div key={data.id} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg flex flex-col justify-between">
    <div className="p-5">
      <div className="flex items-center gap-x-2">
        <div className="flex-shrink-0">
          <img
            src={`/placeholder.svg?height=120&width=80`}
            alt={`Capa do livro ${data.livroAtual}`}
            className="w-20 h-30 object-cover rounded-md"
          />
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
              {data.nome}
            </dt>
            <dd>
              <div className="text-lg font-medium text-gray-900 dark:text-white">
                {data.livroAtual}
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 mt-auto dark:bg-gray-700 px-5 py-3">
      <div className="text-sm">
        <div className="font-medium text-[#65b443] hover:text-[#54a332] flex justify-between">
          <span className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {data.membros} membros
          </span>
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            Próxima reunião: {new Date(data.proximaReuniao).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
    <div className="px-5 py-3 mt-auto">
      <Link href={`/book-club/${data.id}`} passHref>
        <button className="w-full mt-auto bg-[#65b443] hover:bg-[#54a332] text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center">
          Ver Detalhes
          <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </Link>
    </div>
  </div>
  )
}

export default ClubCard