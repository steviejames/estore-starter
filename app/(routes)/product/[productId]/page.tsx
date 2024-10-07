import { getProduct, getProducts } from '@/actions/products'
import Gallery from '@/components/gallery';
import Info from '@/components/product-info';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import { redirect } from 'next/navigation';

import React from 'react'

interface ProductPageProps {
  params:{
    productId:string
  }
}
async function ProductPage({params}: ProductPageProps) {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id
  })

  //const suggestedProducts = results.filter(p => p.id!== product.id)
if(!product) return redirect("/")
  return (
    <div className='bg-white'>

      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 lg:items-start lg:gap-x-2">
            {/* GALLERY */}
            {product?.images.length && <Gallery data={product?.images}/>}
            <div className="mt-10 lg:px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product}/>
            </div>
           </div>
           <hr className='my-10'/>
           <ProductList items={suggestedProducts} title='Produtos relacionados'/>
        </div>
      </Container>
    </div>
  )
}

export default ProductPage