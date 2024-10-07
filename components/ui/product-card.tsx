"use client"
import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'
import IconButton from './icon-button'
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from './currency'
import { useRouter } from 'next/navigation'


interface ProductCard {
    data: Product
}
function ProductCard({ data }: ProductCard) {
    const router = useRouter()

    function handleOnclick() {
        router.push(`/product/${data?.id}`)
    }
    return (
        <div onClick={handleOnclick} className='bg-white group cursor-pointer rounded-xl p-3 border space-y-4'>

            {/* IMAGE AND ACTIONS */}
            <div className='aspect-square rounded-xl bg-gray-100 relative'>
                <Image src={String(data.imageUrl)} alt='product image' fill className='
            aspect-square object-cover rounded-md'/>

                <div className='opacity-0 group-hover:opacity-100 z-30 transition absolute w-full px-6 bottom-5'>
                    <div className='flex gap-x-6 justify-center'>
                        <IconButton
                            onClick={() => { }}
                            icon={<Expand size={20} className='text-gray-600' />}
                        />

                        <IconButton
                            onClick={() => { }}
                            icon={<ShoppingCart size={20} className='text-gray-600' />}
                        />
                    </div>
                </div>
            </div>
            {/* DESCRIPTIOM */}
            <div>
                <p className='text-lg font-bold'>{data.name}</p>
                <p className='text-sm text-gray-500'>{data?.category.name}</p>
            </div>
            {/* PRICE */}
            <div className='flex items-center justify-between'>
                <Currency value={data?.price} />
            </div>
        </div>
    )
}

export default ProductCard