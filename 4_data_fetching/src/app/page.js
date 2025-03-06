import Link from "next/link";
import Button from "@/components/Button";
import {deleteTodo} from "@/actions";
import {pegarTodos} from "@/actions"

export default async function Home() {

  const todos = await pegarTodos();

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
                <Link href={`/todos/${todo.id}/edit`}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-2 rounded">
                  Editar
                </Link>
                <form action={deleteTodo} method="post">
                  <input type="hidden" value={todo.id} name="id"/>
                  <Button>Excluir</Button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
