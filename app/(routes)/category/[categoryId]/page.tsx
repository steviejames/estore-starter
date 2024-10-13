import {  getCategory } from '@/actions/get-categories'
import getProductTypes from '@/actions/get-product-types'
import { getProducts } from '@/actions/products'
import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'
import React from 'react'
import Filter from './components/filter'
import MobileFilters from './components/mobile-filters'
import NoResults from '@/components/ui/no-results'
import ProductCard from '@/components/ui/product-card'

interface CategoryPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
        search: string,
        productTypeId: string
    }
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
    const category = await getCategory(params.categoryId)
    const products = await getProducts({
        categoryId: params.categoryId,
        search: searchParams.search,
        productTypeId: searchParams.productTypeId
    })
    const productTypes = await getProductTypes(params.categoryId)

    return (
        <div className='white'>
            <Container>
                <Billboard data={category.billboard} />
                <div className='px-4 sm:px-6 lg:px-8 pb-24'>
                    <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
                        <MobileFilters productTypes={productTypes} />
                        <div className='hidden lg:block'>
                            <Filter
                                valueKey="productTypeId"
                                name='Tipos'
                                data={productTypes}
                            />
                        </div>
                        <div className='mt-6 lg:col-span-4 lg:mt-0'>
                            {products.length === 0 && <NoResults count={category.name} />}
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                                {products.map((item) => (
                                    <ProductCard key={item.id} data={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage