"use client"
import React, { useState } from 'react'
import Button from './ui/button'
import { ShoppingBag } from 'lucide-react'
import useCart from '@/hooks/use-cart'
import { useRouter } from 'next/navigation'

function NavbarActions() {
    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter()
    React.useEffect(() => {
        setIsMounted(true)
        return () => setIsMounted(false)
    }, [])

    const {items} = useCart()
    if(!isMounted) return null
    return (
        <div className='ml-auto flex items-center gap-x-4'>
            <Button onClick={()=>router.push("/cart")} className='flex items-center rounded-full bg-black px-4 py-2'>
                <ShoppingBag size={20} color='white' />
                <span className='ml-2 text-sm font-medium text-white'>{items.length}</span>
            </Button>
        </div>
    )
}

export default NavbarActions