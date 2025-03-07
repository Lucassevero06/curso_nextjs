"use client";

import { updateTodo } from "@/actions";
import { useFormState } from "react-dom";

const TodoForm = ({ todo }) => {

   const [formState, action] = useFormState(updateTodo, {errors: ""});
  return (
      <form action={action} method='post' className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">

         {formState.errors ? (
            <div className="bg-red-500 text-white py-2 px-4 my-4 rounded">
               {formState.errors}
            </div>
         ) : ""}

         <input type="hidden" name="id" value={todo.id} />
         <label className='block text-sm font-medium text-gray-700' htmlFor="titulo">
              Titulo
         </label>
         <input 
            className='mt-1 px-4 py-2 border border-gray-300 rounded-md w-full' 
            type="text" 
            name='titulo' 
            id='titulo'
            placeholder='Digite o titulo'
            required
            defaultValue={todo.titulo} />
    
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
            defaultValue={todo.descricao}
         />

         <button type='submit' className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Editar</button>
      </form>
  )
}

export default TodoForm
