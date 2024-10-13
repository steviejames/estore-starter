import { useState } from 'react'
import {  Grid, List } from 'lucide-react'

const books = [
  { id: 1, title: "The Song of Achilles", author: "Madeline Miller", cover: "/placeholder.svg?height=200&width=150" },
  { id: 2, title: "Hounds of Baskerville", author: "Arthur Conan Doyle", cover: "/placeholder.svg?height=200&width=150" },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen", cover: "/placeholder.svg?height=200&width=150" },
  { id: 4, title: "1984", author: "George Orwell", cover: "/placeholder.svg?height=200&width=150" },
  { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee", cover: "/placeholder.svg?height=200&width=150" },
]


export default function Bookshelf() {
  const [viewMode, setViewMode] = useState('grid')

 return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Minha Obras</h2>
        <div className="flex space-x-2">
          <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-gray-700' : ''}`}>
            <Grid className="w-5 h-5" />
          </button>
          <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-gray-700' : ''}`}>
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className={viewMode === 'grid' ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" : "space-y-4"}>
        {books.map((book) => (
          <div key={book.id} className={viewMode === 'grid' ? "bg-gray-800 rounded-lg overflow-hidden" : "bg-gray-800 rounded-lg overflow-hidden flex"}>
            <img src={book.cover} alt={book.title} className={viewMode === 'grid' ? "w-full h-48 object-cover" : "w-24 h-36 object-cover"} />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
              <p className="text-gray-400">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )

}