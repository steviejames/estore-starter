import React from 'react'

function Footer() {
    const date = new Date(Date.now())
  return (
    <footer className='bg-white border-t'>
        <div className='mx-auto py-10'>
            <p className='text-center text-xs text-black'>
                &copy; {date.getFullYear()} Gift Store. Todos os direitos reservados.
            </p>
        </div>
    </footer>
  )
}

export default Footer