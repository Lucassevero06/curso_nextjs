import React from 'react'
import { db } from "@/db"
import { redirect } from 'next/dist/server/api-utils';
import { notFound } from 'next/navigation';

const TodoShow = async ({ params }) => {

  await new Promise((a) => setTimeout(a, 2000)); //simulando tempo de espera até que a requisição seja concluida

   const id = Number(params.id);

   const todo = await db.todo.findFirst({
      where: {
         id: id
      }
   });

   if (!todo) return notFound(); //diz ao next para que ele redirecione para a page not found 404 mais próxima

  return (
    <div>
      <h1>Tarefa de Id: {todo.id}</h1>
      <h2>Titulo: {todo.titulo}</h2>
      <p>Descrição: {todo.descricao}</p>
    </div>
  )
}

export default TodoShow
