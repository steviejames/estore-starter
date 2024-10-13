"use client"
import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './MainNav'
import NavbarActions from './navbar-actions'
import { usePathname } from 'next/navigation'

export const revalidate = 0
 function Navbar() {
        const pathname = usePathname()

    const routes= [
     
        {
            href: "/book",
            name: "Para Leitores",
            status: pathname === "/book",
        },
        {
            href: "/publish",
            name: "Para Autores",
            status: pathname === "/publish",
        },
        {
            href: "/book-club",
            name: "Clube do livro",
            status: pathname === "/book-club",
        },
     
    ]
    return (
        <>
        <div className='border-b  bg-white dark:bg-gray-800'>
            <Container>

                <div className='relative px-4 sm:px-6 lg:px-8  h-16 flex items-center justify-between'>
                    <div className='flex items-center gap-8'>
                        <Link href={"/"} className='ml-4 flex lg:ml-0 gap-x-2'>
                            <p className='font-bold text-xl text-[#65b443]'>KAMBA LIVROS</p>
                        </Link>
                        <MainNav data={routes} />
                    </div>
                    <NavbarActions/>
                </div>
                
            </Container>
        </div>
        </>
    )
}

export default Navbar