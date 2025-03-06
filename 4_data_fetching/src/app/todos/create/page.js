import { db } from "@/db"
import { redirect } from "next/navigation"

const TodoPage = () => {

  const addTodo = async (formData) => {
    "use server"
    const titulo = formData.get("titulo")
    const descricao = formData.get("descricao")

    await db.todo.create({
      //validações
      data: {
        titulo,
        descricao
      },
    });
    
    redirect("/")
  };

  return (
    <div className='max-w-md mx-auto mt-10'>
      <h1 className='text-2xl font-bold text-center mb-6'>Criar nova Tarefa</h1>

      <form action={addTodo} method='post' className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
        <label className='block text-sm font-medium text-gray-700' htmlFor="titulo">
          Titulo
        </label>
        <input 
          className='mt-1 px-4 py-2 border border-gray-300 rounded-md w-full' 
          type="text" 
          name='titulo' 
          id='titulo'
          placeholder='Digite o titulo'
          required />

        <label className='block text-sm font-medium text-gray-700' htmlFor="descricao">
          Descrição
        </label>
        <textarea 
          className='mt-1 px-4 py-2 border border-gray-300 rounded-md w-full h-32' 
          type="text" 
          name='descricao' 
          id='descricao'
          placeholder='Digite a descrição'
          required
        />

        <button type='submit' className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Criar Todo</button>
      </form>
    </div>
  )
}

export default TodoPage
