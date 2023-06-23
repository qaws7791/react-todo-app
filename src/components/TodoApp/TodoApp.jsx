import React, { useEffect, useState } from 'react'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import TodoModal from '../TodoModal'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, deleteTodo, toggleTodoStatus, updateTodo } from '../../redux/modules/todos'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { findTodoById } from '../../utils'

const TodoApp = () => {
  const [editTodo,setEditTodo] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const todos = useSelector((state) => {
    return state.todos;
  })

  const createTodoFunc = (title, body) => {
    dispatch(createTodo(title, body))
  };

  // editTodo //
  const endEditTodo = () => {
    dispatch(updateTodo(editTodo))
    navigate('/')
  }
  const deleteEditTodo = () => {
    dispatch(deleteTodo(editTodo.id))
    setEditTodo(null);
  }

  const updateEditTodo = (newTodo) => {
    setEditTodo(newTodo)
    dispatch(updateTodo(newTodo))
  }

  const updateEditTodoIsDone = () => {
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
  }, [location,editTodo,id,todos,navigate]);

  return (
    <div>
      <TodoForm createTodo={createTodoFunc} />
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