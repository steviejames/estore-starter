import getProductTypes from '@/actions/get-product-types'
import { getProducts } from '@/actions/products'
import React from 'react'

interface CategoryPageProps {
    params:{
        categoryId:string
    },
    searchParams:{

    }
}

const CategoryPage = async ({params}: CategoryPageProps) => {
    const products = await getProducts({
       //categoryId: params.categoryId,
        search:"físico"
    })
    const productTypes = await getProductTypes()

   
    console.log(products)
  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage