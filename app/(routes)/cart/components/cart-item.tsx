"use client"

import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"

import IconButton from "@/components/ui/icon-button"
import Currency from "@/components/ui/currency"
import useCart from "@/hooks/use-cart"
import { Product } from "@/types"
import Link from "next/link"


interface CartItemProps {
    data: Product & {quantity:number}
}

export default function CartItem({ data }: CartItemProps) {

    const cart = useCart()
    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                    fill
                    src={data?.images[0].url}
                    alt=""
                    className="object-cover object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 top-0 right-0">
                    <IconButton
                    onClick={()=>cart.removeItem(data.id)}
                    icon={<X size={15}/>}
                    />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-black">
                            {data.name}
                        </p>
                    </div>
                    <div className="mt-1 flex text-sm">
                       <Link href={`/category/${data.category.id}`}>
                       <p className="text-gray-500">
                            {data.category.name}
                        </p>
                       </Link>
                        
                    </div>
                   <div>
                   <Currency value={data.price}/>
                   <div className="hidden flex items-center gap-x-2 mt-4">
                   <IconButton className="bg-muted shadow-none" onClick={()=> data.quantity >1 && cart.removeItem(data.id)} icon={<Minus size={12}/>}/>
                   <p className="text-gray-500">x {data.quantity}</p>
                   <IconButton className="bg-muted shadow-none" onClick={()=>cart.addItem(data)} icon={<Plus size={12}/>}/>
                   </div>
                   </div>
                </div>
            </div>
        </li>
    )
}