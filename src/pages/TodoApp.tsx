import { useEffect, useState } from 'react'
import { TodoForm, TodoList, TodoModal} from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { Todo, deleteTodo, toggleTodoStatus, updateTodo } from '../redux/modules/todos'
import { useNavigate, useParams } from 'react-router-dom'
import { findTodoById } from '../utils'
import { RootState } from '../redux/config/configStore'

const TodoApp = () => {
  const [editTodo,setEditTodo] = useState<Todo | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state:RootState) => {
    return state.todos;
  })


  // editTodo //
  const endEditTodo = () => {
    if(!editTodo) return
    dispatch(updateTodo(editTodo))
    navigate('/')
  }

  const deleteEditTodo = () => {
    if(!editTodo?.id) return
    dispatch(deleteTodo(editTodo.id))
    setEditTodo(null);
  }

  const updateEditTodo = (newTodo:Todo) => {
    setEditTodo(newTodo)
    dispatch(updateTodo(newTodo))
  }

  const updateEditTodoIsDone = () => {
    if(!editTodo?.id) return
    dispatch(toggleTodoStatus(editTodo.id))
    navigate('/')
  }

  useEffect(() => {
    if(id) {
      const data = findTodoById(todos,id);
      if(data) setEditTodo(data)
      else navigate('/')
    } else {
      setEditTodo(null)
    }
  }, [id,navigate,todos]);

  return (
    <div>
      <TodoForm/>
      <TodoList
        todos={todos}
      />
      {id && editTodo && (
        <TodoModal
          editTodo={editTodo}
          endEditTodo={endEditTodo}
          deleteTodo={deleteEditTodo}
          updateEditTodoIsDone={updateEditTodoIsDone}
          updateEditTodo={updateEditTodo}
        />
      )}
    </div>
  )
}

export default TodoApp