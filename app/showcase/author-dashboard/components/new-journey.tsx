import { Plus } from "lucide-react";

export default function NewJourney() {
  return (
    <section className="bg-gray-800 rounded-lg p-6 mb-8 flex justify-between items-center">
    <div>
      <h2 className="text-xl font-bold mb-2">Iniciar nova jornada de livro</h2>
      <p className="text-gray-400">Vamos começar uma nova jornada para você se tornar autor novamente.</p>
    </div>
    <button className="bg-[#72cb4b] text-black px-4 py-2 rounded-md font-semibold flex items-center">
      <Plus className="w-5 h-5 mr-2" />
      Criar Manuscrito
    </button>
  </section>
  )
}