import Link from 'next/link'
import React from 'react'

const CategoryPage = ({ params }) => {
  return (
    <div>
        <h1 className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            Conheça nossas Roupas
        </h1>
        <Link href="/produtos/categorias/roupas/camisa_gola_v">Camisa Gola Verde</Link>
    </div>
  )
}

export default CategoryPage
