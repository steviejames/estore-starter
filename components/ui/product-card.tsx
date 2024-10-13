"use client"
import { Book } from '@/types'
import Image from 'next/image'
import React, { MouseEventHandler } from 'react'
import IconButton from './icon-button'
import { Expand, ShoppingCart, Star, User } from 'lucide-react'
import Currency from './currency'
import { useRouter } from 'next/navigation'
import usePreviewModal from '@/hooks/use-preview-modal'
import useCart from '@/hooks/use-cart'


interface ProductCard {
    data: Book
}
function ProductCard({ data }: ProductCard) {
    const { addItem } = useCart()
    const { onOpen } = usePreviewModal()
    const router = useRouter()

    function handleOnclick() {
        router.push(`/book/${data?.id}`)
    }

    const onPreview: MouseEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation()
        onOpen(data)
    }

    const onAddToCart: MouseEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation()
        addItem(data)
    }
    console.log(data)
    return (
        <div onClick={handleOnclick} className='bg-white group cursor-pointer rounded-xl p-3 border space-y-4'>

            {/* IMAGE AND ACTIONS */}
            <div className='aspect-square rounded-xl bg-gray-100 relative'>
                <Image src={String(data.imageUrl)} alt='product image' fill className='
            aspect-square object-cover rounded-md'/>

                <div className='opacity-0 group-hover:opacity-100 z-30 transition absolute w-full px-6 bottom-5'>
                    <div className='flex gap-x-6 justify-center'>
                        <IconButton
                            //@ts-expect-error type errors
                            onClick={onPreview}
                            icon={<Expand size={20} className='text-gray-600' />}
                        />

                        <IconButton
                            //@ts-expect-error type errors
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className='text-gray-600' />}
                        />
                    </div>
                </div>
            </div>
            <div className='space-y-2 flex gap-4 items-end justify-between'>
                <p className='text-lg font-bold'>{data.name}</p>
                <div className='flex items-center gap-x-2 text-gray-500'>
                    <User className='h-4 w-4' />
                    {/* @ts-expect-error type errors */}
                    <p className='text-sm '>{data?.attributes.author || "Autor desconhecido"}</p>

                </div>
            </div>
            <div className='flex items-center justify-between'>
                <Currency value={data?.price} />

                <div className="flex items-center  text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-current' : ''}`} />
                    ))}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">4.0</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard