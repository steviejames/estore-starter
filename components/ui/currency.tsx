"use client"
import { formatPrice } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
interface CurrencyProps{
    value: string | number
}
function Currency({value}: CurrencyProps) {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(()=>{
            setIsMounted(true)
    },[])

    if(!isMounted) return null
  return (
    <div className='font-semibold'>{formatPrice(value)}</div>
  )
}

export default Currency