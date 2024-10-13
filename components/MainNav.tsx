"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MainNavProps {
    data: ({href: string, name: string, status: boolean})[]
}
function MainNav({ data }: MainNavProps) {
    const pathname = usePathname()
    const routes = data.map((route) => ({
        href: route.href,
        label: route.name,
        active: route.status

    }))

    return (
        <nav className='mx-6  items-center space-x-4 lg:space-x-6 hidden md:flex'>

            <Link key={"home"} href={"/"} className={cn("font-medium transition-colors hover:text-black", `/` === pathname ? "text-[#65b443]" : "text-neutral-500")}>
                Início
            </Link>
            {
                routes.map((route) => (
                    <Link key={route.href} href={route.href} className={cn("font-medium transition-colors hover:text-black", route.active ? "text-[#65b443]" : "text-neutral-500")}>
                        {route.label}
                    </Link>
                ))
            }

        </nav>
    )
}

export default MainNav