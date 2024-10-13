"use client"
import React, { useState } from 'react'
import Button from './ui/custom-button'
import { Search, ShoppingBag, ShoppingCart, User } from 'lucide-react'
import useCart from '@/hooks/use-cart'
import { useRouter } from 'next/navigation'
import { useAuth, UserButton, useUser } from '@clerk/nextjs'
import { Input } from './ui/input'

function NavbarActions() {
    const [search, setSearch] = useState("")
    const user = useUser()
    const auth = useAuth()
    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter()
    React.useEffect(() => {
        setIsMounted(true)
        return () => setIsMounted(false)
    }, [])

    const { items } = useCart()
    if (!isMounted) return null
    return (
        <div className='ml-auto flex items-center gap-x-4'>

            {!user?.isSignedIn ? <div className='flex items-center gap-x-2'>
                <Button onClick={()=>{
              
                    router.push("/sign-in")
                }} className='text-white py-2'>Entrar</Button>
            </div> :
                <div className="flex flex-1 items-center justify-end space-x-4">
                <div className="w-full flex-1 md:w-auto md:flex-none hidden md:block">
                  <div className="relative hidden">
                    <Search onClick={() => {
                        router.push(`/book?search=${search}`)
                    }} className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            router.push(`/book?search=${search}`)
                        }
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                      type="search"
                      placeholder="Pesquisar livros..."
                      className="pl-8 md:w-[300px] lg:w-[300px]"
                    />
                  </div>
                </div>
                <nav className="flex items-center space-x-2">
               
                  <Button onClick={() => router.push("/cart")} className='flex items-center rounded-full bg-[#72cb4b] px-4 py-2'>
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Carrinho</span>
                  </Button>
                  <UserButton  userProfileMode="navigation" userProfileUrl='/profile' />
                </nav>
              </div>
            }

          
        </div>
    )
}

export default NavbarActions