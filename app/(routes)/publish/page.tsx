"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { Book, FileText, User, Tag, Info, Upload, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import Iphone15Pro from '@/components/ui/iphone-15-pro';
import BuildingPage from '@/components/building-page';

export default function SubmeterObra() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      titulo: '',
      autor: '',
      genero: '',
      sinopse: '',
      conteudo: '',
      capa: null,
      termos: false
    }
  });

  const onSubmit = (data: any) => {
    console.log('Dados do formulário:', data);
    toast.success('Obra submetida com sucesso!');
  };

  return (
    <div className="h-screen  dark:bg-gray-900">
      <div className='flex justify-center items-center h-full'>
        <BuildingPage title='Falta pouco...' description='Estamos trabalhando duro para trazer a melhor plataforma de autopublicação, divulgação e monetização de obras literárias.' />
      </div>
      <main className="max-w-3xl hidden mx-auto py-6 sm:px-6 lg:px-8 space-y-4">
        <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>Publicar Obra</h1>
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            <div>
              <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Título da Obra
              </label>
              <input
                {...register("titulo", { required: "O título é obrigatório" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#65b443] focus:border-[#65b443] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.titulo && <p className="mt-1 text-sm text-red-600">{errors.titulo.message}</p>}
            </div>

            <div>
              <label htmlFor="autor" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nome do Autor
              </label>
              <input
                {...register("autor", { required: "O nome do autor é obrigatório" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#65b443] focus:border-[#65b443] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.autor && <p className="mt-1 text-sm text-red-600">{errors.autor.message}</p>}
            </div>

            <div>
              <label htmlFor="genero" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Gênero
              </label>
              <select
                {...register("genero", { required: "Selecione um gênero" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#65b443] focus:border-[#65b443] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Selecione um gênero</option>
                <option value="ficcao">Ficção</option>
                <option value="nao-ficcao">Não-Ficção</option>
                <option value="romance">Romance</option>
                <option value="misterio">Mistério</option>
                <option value="fantasia">Fantasia</option>
                <option value="sci-fi">Ficção Científica</option>
              </select>
              {errors.genero && <p className="mt-1 text-sm text-red-600">{errors.genero.message}</p>}
            </div>

            <div>
              <label htmlFor="sinopse" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Sinopse
              </label>
              <textarea
                {...register("sinopse", {
                  required: "A sinopse é obrigatória",
                  minLength: { value: 100, message: "A sinopse deve ter pelo menos 100 caracteres" }
                })}
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#65b443] focus:border-[#65b443] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
              {errors.sinopse && <p className="mt-1 text-sm text-red-600">{errors.sinopse.message}</p>}
            </div>

            <div>
              <label htmlFor="conteudo" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Conteúdo da Obra
              </label>
              <textarea
                {...register("conteudo", {
                  required: "O conteúdo é obrigatório",
                  minLength: { value: 1000, message: "O conteúdo deve ter pelo menos 1000 caracteres" }
                })}
                rows={10}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#65b443] focus:border-[#65b443] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
              {errors.conteudo && <p className="mt-1 text-sm text-red-600">{errors.conteudo.message}</p>}
            </div>

            <div>
              <label htmlFor="capa" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Capa da Obra
              </label>
              <input
                type="file"
                {...register("capa", { required: "A capa é obrigatória" })}
                accept="image/*"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#65b443] file:text-white hover:file:bg-[#54a332]"
              />
              {errors.capa && <p className="mt-1 text-sm text-red-600">{errors.capa.message}</p>}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                {...register("termos", { required: "Você deve aceitar os termos e condições" })}
                className="h-4 w-4 text-[#65b443] focus:ring-[#65b443] border-gray-300 rounded"
              />
              <label htmlFor="termos" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                Eu concordo com os <Link href="/termos" className="text-[#65b443] hover:underline">termos e condições</Link>
              </label>
            </div>
            {errors.termos && <p className="mt-1 text-sm text-red-600">{errors.termos.message}</p>}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#65b443] hover:bg-[#54a332] text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center"
              >
                Submeter Obra
                <Upload className="ml-2 h-5 w-5" />
              </button>
              <Link href="/ajuda-submissao" className="text-[#65b443] hover:underline flex items-center">
                <Info className="mr-1 h-5 w-5" />
                Ajuda para submissão
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}