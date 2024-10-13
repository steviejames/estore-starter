import React, { useState } from 'react'
import { Book, Mail, Loader, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface BuildingPageProps {
  title?: string
  description?: string
}

const defaultDescription = "A Kamba Livros está em construção. Estamos trabalhando duro para trazer a melhor plataforma de autopublicação de obras literárias."


export default function BuildingPage({ title="Estamos chegando!", description=defaultDescription }: BuildingPageProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Falha ao salvar o email')
      }

      setStatus('success')
      setMessage('Obrigado! Você será notificado.')
    } catch (error) {
      setStatus('error')
      setMessage('Ocorreu um erro. Por favor, tente novamente.')
    }
  }


  const date = new Date(Date.now())

  return (
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <div >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {description}
            </p>
          </div>
          
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-6">
            <div
              className="h-full bg-[#65b443] rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: '70%' }}
            ></div>
          </div>

          {status !== 'success' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Fique por dentro
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 pl-10 border focus:ring-0 outline-none border-gray-300 rounded-md  focus:border-[#65b443] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="seu@email.com"
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#65b443] hover:bg-[#54a332] text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader className="animate-spin mr-2 h-5 w-5" />
                    Enviando...
                  </>
                ) : (
                  'Notifique-me'
                )}
              </button>
              <Link className='text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 my-2 block text-center'   href="/">Voltar para a página inicial</Link>
            </form>
          ) : null}
          
          {status === 'success' && (
            <div className="text-center text-green-600 dark:text-green-400 flex items-center justify-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              <span>{message}</span>
            </div>
          )}
          
          {status === 'error' && (
            <div className="text-center text-red-600 dark:text-red-400 flex items-center justify-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              <span>{message}</span>
            </div>
          )}
        </div>
        <div className="px-8 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          &copy; {date.getFullYear()} Kamba Livros. Todos os direitos reservados.
          </p>
        </div>
      </div>
  )
}