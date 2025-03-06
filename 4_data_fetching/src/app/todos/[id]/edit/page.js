import TodoForm from '@/components/TodoForm'
import {buscarTodoPeloId} from '../../../../actions'

const TodoEdit = async ({params}) => {
   const id = Number(params.id)

   const todo = await buscarTodoPeloId(id)

   return (
      <div>
         <TodoForm todo={todo}/>
      </div>
   )
}

export default TodoEdit
