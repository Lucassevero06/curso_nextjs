"use client"
import Link from 'next/link'

const TodoEditErrorPage = () => {
  return (
    <div>
      <h1>Ocorreu um erro, tente novamente mais tarde</h1>
      <Link href="/">Voltar Para a Home</Link>
    </div>
  )
}

export default TodoEditErrorPage
