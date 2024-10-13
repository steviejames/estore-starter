"use client"
import Button from "@/components/ui/custom-button"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"
import { Book } from "@/types"
import Image from "next/image"
import usePreviewModal from "@/hooks/use-preview-modal"
import { useState } from "react"
import WatingListModal from "@/components/wating-list-modal"
import CategoryMap from "@/components/category-map"
export default  function ProductsPage() {
  const [show, setShow] = useState(false)
  let products: Book[] | undefined
  return (
    <>
    
    <main className="flex-1">
      <section className="w-full mx-auto pt-8 pb-4 md:py-24 lg:py-16  bg-cover bg-center">
        <Container>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 px-4">
              <h1 className="text-3xl font-bold capitalize tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
               Sua biblioteca a um clique...
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Em breve você poderá explorar nossa vasta coleção de livros digitais, e audiolivros.
              </p>
            </div>
            <div className="space-x-4">
              <Button onClick={() => {
                setShow(true)
              }} className="bg-[#65b443] hover:bg-[#54a332] text-white">Me avise quando estiver pronto</Button>
            </div>
            <div className="flex items-center justify-center">
              <Image src='/preview.png' alt="preview" width={500} height={500}/>
            </div>
            
          <CategoryMap/>
          </div>
        </Container>
      </section>
    </main>
  
      {show && <WatingListModal open={show} onClose={() => setShow(false)}/>} 
    </>       
  )
}