import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import TodoModal from '../TodoModal/TodoModal'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, deleteTodo, updateTodo } from '../../redux/modules/todos'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const TodoApp = () => {
  const [editTodo,setEditTodo] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const todos = useSelector((state) => {
    return state.todos;
  })

  useEffect(() => {
    if(id) {
      const data = Object.values(todos).find(todo => todo.id === id);
      console.log(data)
      if(data) setEditTodo(data)
    } else {
      setEditTodo(null)
    }

  }, [location]);


  const createTodoFunc = (title, body) => {
    const newTodo = {
      id: uuidv4(),
      title,
      body,
      isDone: false,
    };
    dispatch(createTodo(newTodo))
  };


  // editTodo //
  const endEditTodo = () => {
    dispatch(updateTodo(editTodo))
    navigate('/')
  }
  const deleteEditTodo = () => {
    console.log(editTodo.id)
    dispatch(deleteTodo(editTodo.id))
    setEditTodo(null);
  }

  const updateEditTodo = (newTodo) => {
    setEditTodo(newTodo)
  }

  const updateEditTodoTitle = (title) => {
    setEditTodo((prevTodo)=> { return{...prevTodo,title}})
  }

  const updateEditTodoBody = (body) => {
    setEditTodo((prevTodo)=> { return{...prevTodo,body} })
  }

  const updateEditTodoIsDone = () => {
    setEditTodo((prevTodo)=> {return{...prevTodo,isDone:!(prevTodo.isDone)}});
  }

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
        updateEditTodoTitle={updateEditTodoTitle}
        updateEditTodoBody={updateEditTodoBody}
        deleteTodo={deleteEditTodo}
        updateEditTodoIsDone={updateEditTodoIsDone}
        updateEditTodo={updateEditTodo}
        />
      )}
    </div>
  )
}

export default TodoApp