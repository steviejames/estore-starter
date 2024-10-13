import { Book, Product } from '@/types'
import { Star } from 'lucide-react'
import React from 'react'

interface Props  {
    data: Book
}

const BookCard = ({data}: Props) => {
  return (
        <div key={data.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="h-48 bg-gray-200 dark:bg-gray-700">
          <img
            alt={`Capa do Livro ${data.name}`}
            className="w-full h-full object-cover"
            src={`/placeholder.svg?height=200&width=300`}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Título do Livro {data.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">por Autor {data.author}</p>
          <div className="flex items-center mt-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-current' : ''}`} />
            ))}
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">4.0</span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <button className="w-full bg-[#65b443] hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Ler Agora
          </button>
        </div>
      </div>
  )
}

export default BookCard