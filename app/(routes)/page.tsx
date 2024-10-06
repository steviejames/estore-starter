import getBillboard from '@/actions/get-billboard'
import BillboardProps from '@/components/billboard'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0
async function HomePage() {
    let billboard 
    
    try{
        billboard = await getBillboard("6701bce84d40ecf4b94f631d")
    }catch(error){
        console.error('Error fetching billboard data:', error)
        billboard = {}
    }
  return (
    <Container>
        <div className='space-y-10 pb-10'>
            <BillboardProps data={billboard}/>
        </div>
    </Container>
  )
}

export default HomePage