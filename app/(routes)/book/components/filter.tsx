"use client"
import Button from '@/components/ui/custom-button'
import { cn } from '@/lib/utils'
import { ProductType } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import queryString from 'query-string'
import React from 'react'

interface FilterProps {
    valueKey: string
    name: string,
    data: ProductType[]
}

function Filter({ valueKey, name, data }: FilterProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const selectedValue = searchParams.get(valueKey)

    const onClick = (id: string) => {
        const current = queryString.parse(searchParams.toString())

        const query = {
            ...current,
            [valueKey]: id
        }

        if (current[valueKey] === id) {
            query[valueKey] = null
        }

        const url = queryString.stringifyUrl({
            url: window.location.href,
            query
        }, {skipNull: true})

        router.push(url)
    }   
    
    return (
        <div className='mb-8 w-full'>
            <h3 className='text-lg font-semibold'>
                {name}
            </h3>
            <hr className='my-4'/>
            <div className='flex flex-wrap gap-2'>
                {data.map((filter) => (
                    <div key={filter.id} className='flex items-center'>
                        <Button
                        className={cn(
                            'rounded-md text-sm p-2 border border-gray-300',
                            selectedValue == filter.id ? 'bg-black text-white':'text-gray-800  bg-white',
                            )}
                        onClick={() => onClick(filter.id)}
                        >
                            {filter.name}
                        </Button>
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default Filter