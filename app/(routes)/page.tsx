import getBillboard from '@/actions/get-billboard'
import getProductTypes from '@/actions/get-product-types'
import { getProducts } from '@/actions/products'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0
async function HomePage() {
    let billboard


    billboard = await getBillboard("6701bce84d40ecf4b94f631d")
    const products = await getProducts({
        isFeatured: true,

    })

   
    return (
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard} />
            </div>
            <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
                <ProductList title="Produtos em destaque" items={products} />
            </div>
        </Container>
    )
}

export default HomePage