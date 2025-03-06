import Link from "next/link";
import { db } from "@/db";

export default async function Home() {

  const todos = await db.todo.findMany();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todos!</h1>
      <div className="space-y-4">
        {todos.map((todo) => (
          <div className="p-4 bg-gray-100 rounded-lg shadow" key={todo.id}>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">Titulo: {todo.titulo}</h2>
                <p>Descrição: {todo.descricao}</p>
              </div>
              <div className="flex space-x-2 mt-3">
                <Link href={`/todos/${todo.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
                  Vizualizar
                </Link>
                <Link href="/"
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-2 rounded">
                  Editar
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded">
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
