"use server"

import {db} from "@/db"
import { redirect } from "next/navigation"

export async function deleteTodo(formData) {
   const id = Number(formData.get("id"));
   await db.todo.delete({
     where: { id },
   });
   redirect("/");
};

export async function pegarTodos() {
   return await db.todo.findMany();
};

export async function addTodo (formData) {
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

export const buscarTodoPeloId = async (id) => {
   const todo = db.todo.findFirst({
      where: {id: id},
   });

   return todo;
}

export const updateTodo = async (formState, formData) => {
   const id = Number(formData.get("id"))
   const titulo = formData.get("titulo")
   const descricao = formData.get("descricao")

   if (titulo.length < 5) {
      return {
         errors: "O Título precisa de no mínimo 5 caracteres"
      }
   }

   if (descricao.length < 10) {
      return {
         errors: "A Descrição precisa de no mínimo 10 caracteres"
      }
   }

   const todo = await db.todo.update({
      where: {id},
      data: {
         titulo,
         descricao
      }
   });

   redirect("/")
}