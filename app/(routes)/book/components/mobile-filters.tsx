"use client"
import Button from '@/components/ui/custom-button'
import IconButton from '@/components/ui/icon-button'
import { ProductType } from '@/types'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Plus, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Filter from './filter'

interface FilterProps {

    productTypes: ProductType[]
}

function MobileFilters({ productTypes }: FilterProps) {
    const [open, setOpen] = useState(false)
    const searchParams = useSearchParams()  
    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    useEffect(()=>{
        setOpen(false)
    },[searchParams])
    return (
        <>
            <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
                Filtros
                <Plus size={20} />
            </Button>

            <Dialog open={open} onClose={onClose} className='lg:hidden'>
                <div className='fixed inset-0 bg-black bg-opacity-25' />
                <div className='fixed inset-0 z-40 flex'>
                    <DialogPanel className={"relative flex w-full max-w-xs flex-col overflow-y-auto bg-white p-4 pb-6 shadow-xl"}>
                        <div className='flex items-center justify-end '>
                            <IconButton icon={<X size={15} />} onClick={onClose} />
                        </div>
                        <div>
                            <Filter
                                name='Tipos de produtos'
                                data={productTypes}
                                valueKey="productTypeId"
                            />
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default MobileFilters