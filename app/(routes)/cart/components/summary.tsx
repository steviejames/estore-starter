"use client"
import axios from "axios"
import Currency from "@/components/ui/currency"
import useCart from "@/hooks/use-cart"
import Button from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"



const Summary = () => {
    const [isMounted, setIsmounted] = useState(false)


    const searchParams = useSearchParams()
    const router = useRouter()
    const cart = useCart()


    useEffect(()=>{
        setIsmounted(true)
    },[])

    useEffect(()=>{
        if(searchParams.get('success') && isMounted){
            toast.success("Finalizado com sucesso")
            cart.removeAll()
            router.push("/orders")
        }

        if(searchParams.get('canceled')){
            toast.error("Alguma coisa correu mal.")
        }

    },[searchParams, cart.removeAll, isMounted])

    const totalPrice = cart.items.reduce((acc, curr) => {
        return acc + (curr.quantity * Number(curr.price))
    }, 0)

    const onCheckout = async ()=>{
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
                products: cart.items.map((item)=>{
                    return {id: item.id, quantity: item.quantity}
                })
            })
            window.location = response.data.url
        } catch (error) {
            console.log(error)
            toast.error("Algo correu mal")
        }
    }   
    return (
        <div
            className="mt-16 rounded-lg bg-gray-50 
        px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >

            <h2 className="text-lg font-medium text-gray-900">Resumo do pedido</h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">

                    <div className="text-base font-medium text-gray-900">Total</div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button onClick={onCheckout} className="w-full mt-6">Finalizar</Button>
        </div>
    )
}

export default Summary