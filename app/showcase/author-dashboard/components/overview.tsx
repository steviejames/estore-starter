import { formatPrice } from '@/lib/utils'
import React from 'react'
import NewJourney from './new-journey'

type Props = {}

const Overview = (props: Props) => {
    return (
        <div>
            <NewJourney />

            {/* Vendas de Livros */}
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Vendas de Livros</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">Royalties Estimados</h3>
                        <p className="text-3xl font-bold mb-4">{formatPrice(15000000)}</p>
                        <div className="h-32 bg-gray-700 rounded-md"></div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">Unidades Pedidas</h3>
                        <p className="text-3xl font-bold mb-4">500 unidades</p>
                        <div className="h-32 bg-gray-700 rounded-md"></div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">Páginas Lidas Estimadas</h3>
                        <p className="text-3xl font-bold mb-4">1000</p>
                        <p className="text-gray-400">Páginas lidas</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">Preço Médio de Venda</h3>
                        <p className="text-3xl font-bold mb-4">{formatPrice(5000)}</p>
                        <p className="text-gray-400">Dos 5 livros publicados</p>
                    </div>
                </div>
            </section>

            {/* Etapas de Publicação */}
            <section>
                <h2 className="text-xl font-bold mb-4">Etapas de Publicação</h2>
                <div className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-center mb-6">
                        <div className="w-24 h-36 bg-gray-700 rounded-md mr-4"></div>
                        <div>
                            <h3 className="text-lg font-semibold">O Cão dos Baskervilles</h3>
                            <p className="text-gray-400">Ficção • Português</p>
                            <p className="text-gray-400">Contagem de Palavras: 8.500</p>
                            <p className="text-gray-400">Formatos do Livro: Brochura | E-book | Capa dura</p>
                            <p className="text-gray-400">Tipo de Livro: Ilustrado</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                            <span className="font-semibold mr-2">Manuscrito Preliminar</span>
                            <span className="text-green-500">Manuscrito Aceito</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                            <span className="font-semibold mr-2">Acordo</span>
                            <span className="text-green-500">Pagamento Concluído</span>
                        </div>
                        <div>
                            <div className="flex items-center mb-2">
                                <div className="w-4 h-4 rounded-full bg-[#72cb4b] mr-2"></div>
                                <span className="font-semibold">Publicação</span>
                            </div>
                            <div className="flex justify-between items-center bg-gray-700 rounded-full p-1">
                                {['Detalhes do Perfil', 'Info do Autor', 'Detalhes do Livro', 'Design do Livro', 'Info da Conta'].map((etapa, index) => (
                                    <div key={etapa} className="flex items-center">
                                        <div className={`w-8 h-8 rounded-full ${index === 0 ? 'bg-[#72cb4b]' : 'bg-gray-600'} flex items-center justify-center mr-2`}>
                                            {index + 1}
                                        </div>
                                        <span className="text-xs hidden lg:inline">{etapa}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                        <button className="bg-[#72cb4b] text-black px-4 py-2 rounded-md font-semibold">Continuar</button>
                        <div className="text-right">
                            <p className="font-semibold">Reunião com Carla Mathews (Editora)</p>
                            <p className="text-gray-400">21 de Julho de 2022 | 17h</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Overview