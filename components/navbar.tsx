import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './MainNav'
import getCategories from "@/actions/get-categories"
import NavbarActions from './navbar-actions'

export const revalidate = 0
async function Navbar() {
    const categories = await getCategories()
    return (
        <div className='border-b'>
            <Container>

                <div className='relative px-4 sm:px-6 lg:px-8  h-16 flex items-center justify-between'>
                    <div className='flex items-center gap-8'>
                        <Link href={"/"} className='ml-4 flex lg:ml-0 gap-x-2'>
                            <p className='font-bold text-xl'>CUTXI</p>
                        </Link>
                        <MainNav data={categories} />
                    </div>
                    <NavbarActions/>
                </div>
                
            </Container>
        </div>
    )
}

export default Navbar