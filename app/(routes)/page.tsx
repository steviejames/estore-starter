import { getProducts } from '@/actions/products'
import Button from '@/components/ui/custom-button'
import { Book } from '@/types'
import { Bookmark, ChevronRight, PenTool,  TrendingUp } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

export const revalidate = 0
async function HomePage() {

  let products: Book[] = []

  try {
    products = await getProducts({
      isFeatured: true,
    })
  } catch (error) {
    console.log(error)
  }

  console.log(products)

  return (
    <div className=' overflow-hidden'>
        <section style={{
          //backgroundColor: "#000",
          backgroundImage: `url('/bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "darken",
        }} className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-black/40">
          <div className=" mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-6">
              Conectando escritores e leitores em toda CPLP
            </h1>
            <p className="mx-auto  max-w-[700px] text-xl text-gray-200 mb-8">
              Leia, escreva e conecte-se com milhões de leitores e escritores em todo o mundo.
            </p>
            <div className="relative w-full">

              <div className='flex items-center justify-center gap-x-4 mx-auto'>
                <Link href="/book">
                  <Button className='bg-white text-black'>Comece a ler</Button>
                </Link>
                <Link href="/publish">
                  <Button className='bg-[#65b443]'>Publicar obras</Button>
                </Link>
              </div>
            </div>
      
          </div>
        </section>

     
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Bookmark, title: 'Leia sem limites', description: 'Acesse milhões de histórias gratuitamente, de qualquer gênero que você possa imaginar.' },
              { icon: PenTool, title: 'Escreva e publique', description: 'Compartilhe suas histórias com uma comunidade global de leitores ávidos.' },
              { icon: TrendingUp, title: 'Cresça como autor', description: 'Receba feedback, construa seu público e aprimore suas habilidades de escrita.' },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <feature.icon className="h-6 w-6 text-[#65b443]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Comece sua jornada hoje
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 mb-8">
            Junte-se a uma comunidade vibrante de escritores e leitores. Publique sua história rapidamente, monetize-a e alcance milhões de leitores falantes de português em todo o mundo.
          </p>
          <Link href="/publish">
            <button className="bg-[#65b443] hover:bg-[#54a332] text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 flex items-center justify-center mx-auto">
              Publicar obra
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Mais de 1 milhão de histórias publicadas. Seja o próximo sucesso!
          </p>
        </div>
      </section>
    </div>

  )
}

export default HomePage