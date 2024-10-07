"use client"
import React from 'react';
import Currency from './ui/currency';
import { Dimensions, Product } from '@/types';
import Button from './ui/button';
import { ShoppingCart } from 'lucide-react';



interface ProductDetailsProps {
  data: Product;
}

function Info({ data }: ProductDetailsProps) {
    
  const attributes = data?.attributes || {};
  const attributeTypes = data.productType.attributes.reduce((acc, attr) => {
    acc[attr.key] = attr.label;
    return acc;
  }, {} as Record<string, string>);

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

  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className='text-2xl text-gray-900'>
          <Currency value={data.price} />
        </p>
      </div>
      <hr className='my-6' />
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-4 flex-wrap gap-y-6'>
        {Object.entries(attributes).map(([key, value]) => (
          <div key={key} className='flex items-center gap-x-4 text-left'>
            <h3 className='font-bold text-black'>{attributeTypes[key] || key}:</h3>
            {renderAttributeValue(key, value)}
          </div>
        ))}
      </div>

      <div className='mt-10'>
            <Button className='flex items-center gap-x-2'>
                Adicionar ao carrinho
                <ShoppingCart/>
            </Button>
      </div>
    </div>
  );
}

export default Info;