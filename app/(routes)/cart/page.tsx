"use client"
import Container from '@/components/ui/container'
import useCart from '@/hooks/use-cart'
import React, { useEffect, useState } from 'react'
import CartItem from './components/cart-item'
import Summary from './components/summary'

type Props = {}

const CartPage = (props: Props) => {
    const [isMounted, setIsmounted] = useState(false)
    const cart = useCart()
    useEffect(() => {
        setIsmounted(true)
    }, [])
    if (!isMounted) return null

    return (
        <div className='bg-white'>
            <Container>
                <div className='px-4 py-16 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl font-bold text-black'>Carrinho de compras</h1>
                    <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-8´'>
                        <div className='lg:col-span-7 lg:mr-4'>
                            {cart.items.length === 0 &&
                                <p className='text-neutral-500'>Nenhum item adicionado ao carrinho.</p>
                            }
                            <ul>
                                {
                                    cart.items.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            data={item}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CartPage