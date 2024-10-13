'use client'

import { createFeedback } from "@/actions/feedback"
import IconButton from "@/components/ui/icon-button"
import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/nextjs"
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react"
import { Send, AlertCircle, X } from 'lucide-react'
import { Fragment, useState } from "react"

interface FeedbackButtonProviderProps {
    children?: React.ReactNode,
    open: boolean,
    onClose: () => void
}

export default function FeedbackButtonProvider(props: FeedbackButtonProviderProps) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [feedbackType, setFeedbackType] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { userId } = useAuth()

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            setLoading(true)
            e.preventDefault()
            if (!name || !email || !feedbackType || !message) {
            setError('Please fill in all fields')
            return
        }
        // Here you would typically send the data to your backend
        await createFeedback({ userId: userId || name, email, page: window.location.pathname, message })
        setSubmitted(true)
        setError('')
        // Reset form
        setName('')
        setEmail('')
            setFeedbackType('')
            setMessage('')
            setLoading(false)
        } catch (error) {
            console.error(error)
            setError('Ocorreu um erro ao enviar o feedback')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {props.children}
            <Transition show={props.open}>

                <Dialog as="div" className="bg-gray-900 min-h-screen flex items-center justify-center p-4 relative" onClose={props.onClose}>

                    <div className='fixed inset-0 bg-black bg-opacity-50' />
                    <div className='fixed inset-0 overflow-y-auto '>
                        <div className='flex min-h-full  items-center justify-center bg-transparent text-center'>
                            <TransitionChild
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                            >
                                <DialogPanel className={cn('w-full max-w-3xl p-4 overflow-hidden rounded-lg text-left align-middle')}>
                                    <div className='relative flex w-full items-center overflow-hidden bg-none  p-8
                             outline-none    '>
                                        <div className='absolute  top-4 right-4'>
                                            <IconButton icon={<X size={15} />} onClick={props.onClose} />
                                        </div>
                                        <div className="bg-gray-800 rounded-lg  w-full p-8">
                                            <h2 className="text-2xl font-bold text-white mb-6">Envie-nos seu feedback</h2>
                                            {submitted ? (
                                                <div className="text-green-400 mb-4">
                                                    Obrigado pelo seu feedback! Agradecemos sua contribuição.
                                                </div>
                                            ) : (
                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                    <div>
                                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                                            Nome
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                                            placeholder="Seu nome"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                                            E-mail
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                                            placeholder="seu@email.com"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="feedbackType" className="block text-sm font-medium text-gray-300 mb-1">
                                                            Tipo de Feedback
                                                        </label>
                                                        <select
                                                            id="feedbackType"
                                                            value={feedbackType}
                                                            onChange={(e) => setFeedbackType(e.target.value)}
                                                            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                                        >
                                                            <option value="">Selecione um tipo</option>
                                                            <option value="bug">Relatório de Bug</option>
                                                            <option value="feature">Solicitação de Recurso</option>
                                                            <option value="improvement">Sugestão de Melhoria</option>
                                                            <option value="other">Outro</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                                            Seu Feedback
                                                        </label>
                                                        <textarea
                                                            id="message"
                                                            value={message}
                                                            onChange={(e) => setMessage(e.target.value)}
                                                            rows={4}
                                                            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                                            placeholder="Por favor, forneça seu feedback aqui..."
                                                        ></textarea>
                                                    </div>
                                                    {error && (
                                                        <div className="flex items-center text-red-400 text-sm">
                                                            <AlertCircle className="w-4 h-4 mr-2" />
                                                            {error}
                                                        </div>
                                                    )}
                                                    <button
                                                        type="submit"
                                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center transition duration-300"
                                                    >
                                                        <Send className="w-5 h-5 mr-2" />
                                                        Enviar Feedback
                                                    </button>
                                                </form>
                                            )}
                                        </div>
                                    </div>

                                </DialogPanel>

                            </TransitionChild>


                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}




