"use client"
import React from 'react';
import Currency from './ui/currency';
import { Dimensions, Product } from '@/types';
import Button from './ui/custom-button';
import { ShoppingCart } from 'lucide-react';
import { getAttributes } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import useCart from '@/hooks/use-cart';



interface ProductDetailsProps {
  data: Product;
}

function Info({ data }: ProductDetailsProps) {
    
  const attributes = data?.attributes || {};
  const attributeTypes = getAttributes(data)
  const renderAttributeValue = (key: string, value: any) => {
    if (key.toLowerCase() === 'color' && typeof value === 'string') {
      return (
        <>
          <div 
            className='h-6 w-6 rounded-full border border-gray-600' 
            style={{ background: value }} 
          />
          <span className="ml-2">{value}</span>
        </>
      );
    } else if (key === 'dimensions' && typeof value === 'object') {
      const dimensions = value as Dimensions;
      return (
        <div>
          {dimensions.height} x {dimensions.width} x {dimensions.depth} cm
        </div>
      );
    }
    return <div className=''>{String(value)}</div>;
  };
  const cart = useCart()
  return (
    <div className='w-full'>
      <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className='text-2xl text-gray-900'>
          <Currency value={data.price} />
        </p>
      </div>

      <hr className='my-6' />
<div>
  <h3 className='font-bold text-black'>Sinopse</h3>
  <p className='text-gray-500'>{data.description}</p>
</div>
      <hr className='my-6' />
      <div className='flex gap-x-4 flex-wrap gap-y-6'>
        {Object.entries(attributes).map(([key, value]) => (
          <div key={key} className='flex items-center gap-x-4 text-left'>
            <h3 className='font-bold text-black'>{attributeTypes[key] || key}:</h3>
            {renderAttributeValue(key, value)}
          </div>
        ))}
      </div>
 
      <div className='mt-10'>
            <Button onClick={ ()=>cart.addItem(data)} className='flex items-center gap-x-2'>
                Adquirir
                <ShoppingCart/>
            </Button>
      </div>
    </div>
  );
}

export default Info;