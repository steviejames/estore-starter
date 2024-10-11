import React from 'react'

function NoResults({count, message}:{count:string, message?:string}) {
  return (
    <div className='flex items-center justify-center h-full w-full text-neutral-500'>{message || `Nenhum resultado encontrado para ${count}.`}</div>
  )
}

export default NoResults