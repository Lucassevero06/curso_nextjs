import Link from 'next/link'
import React from 'react'

const SobrePage = () => {
  return (
    <div className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
      <h1>Página de Sobre</h1>
      <Link href='/'>Home Page</Link>
    </div>
  )
}

export default SobrePage
