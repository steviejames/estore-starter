"use client"
import React from 'react'

import { Image as ImageType } from '@/types';
import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import GalleryTab from './gallery-tab';
import Image from 'next/image';

interface GalleryImageProps extends ImageType {
  width: number,
  height: number
}
interface GalleryProps {
  data: ImageType[]
}
function Gallery({ data }: GalleryProps) {
 
  return (

    <TabGroup as="div" className={"flex flex-col-reverse "}>
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <TabList className={"grid grid-cols-4 gap-6"}>
          {
            data.map((image,) => (
              <GalleryTab key={image.id} image={image} />
            ))
          }

        </TabList>
      </div>
      <TabPanels className={"aspect-square w-full"}>
        {
          data.map((image,) => (
            <TabPanel key={image.id} className={"relative aspect-square h-full"}>
              <Image src={image.url}
                alt='product image'
                fill
                className='object-cover object-center' />
            </TabPanel>
          ))
        }
      </TabPanels>
    </TabGroup>
  )
}

export default Gallery