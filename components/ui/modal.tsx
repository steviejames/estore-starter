"use client"
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import React, { Fragment } from 'react'
import IconButton from './icon-button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

const Modal = (props: Props) => {
  return (
    <Transition show={props.open} as={Fragment}>
            <Dialog as='div' className='relative z-40 outline-none' onClose={props.onClose}>
            <div className='fixed inset-0 bg-black bg-opacity-50' />
            <div className='fixed inset-0 overflow-y-auto '>
                <div className='flex min-h-full  items-center justify-center bg-transparent text-center'>
                    <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    >
                        <DialogPanel className={cn('w-full max-w-3xl p-4 overflow-hidden rounded-lg text-left align-middle', props.className)}>
                            <div className='relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 
                            shadow-2xl outline-none  sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
                                <div className='absolute  top-4 right-4'>
                                    <IconButton icon={<X size={15} />} onClick={props.onClose} />
                                </div>
                                {props.children}
                            </div>

                        </DialogPanel>

                    </TransitionChild>
                    
                  
                </div>
            </div>
        </Dialog>
    </Transition>
  )
}

export default Modal