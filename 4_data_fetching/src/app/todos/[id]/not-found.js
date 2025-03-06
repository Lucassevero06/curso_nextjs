import Link from 'next/link'
import React from 'react'

const TodosNotFound = () => {
  return (
      <div>
         <h1>Todo não encontrado</h1>
         <Link href={'/'}>Voltar para a Home</Link>
      </div>
  )
}

export default TodosNotFound
