import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import TodoModal from '../TodoModal/TodoModal'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, deleteTodo, updateTodo } from '../../redux/modules/todos'
import { useParams } from 'react-router-dom'

const TodoApp = () => {
  // const [todos, setTodos] = useState(null);

  const [editTodo,setEditTodo] = useState(null);
  const { id } = useParams();
  console.log('id: ', id)
  const todos = useSelector((state) => {
    return state.todos;
  })
  console.log(todos)
  const dispatch = useDispatch();
  const createTodoFunc = (title, body) => {
    const newTodo = {
      id: uuidv4(),
      title,
      body,
      isDone: false,
    };
    dispatch(createTodo(newTodo))
    // setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

useEffect(() => {
  console.log(todos)
  const data =   Object.values(todos).find(todo => todo.id === id);
  console.log(data)
  if(data) setEditTodo(data)
})



  const startEditTodo = (id) => {
    const editTodo = todos.filter(todo => todo.id === id)[0]
    setEditTodo(editTodo);
  }

  const endEditTodo = () => {
    dispatch(updateTodo(editTodo))
  //   setTodos((prevTodos) =>
  //   prevTodos.map((todo) =>
  //     todo.id === editTodo.id ? editTodo : todo
  //   )
  // );
    setEditTodo(null);
  }
  const deleteEditTodo = () => {
    dispatch(deleteTodo(editTodo.id))
    setEditTodo(null);
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

  const validateTodo = (todo) => {
    const { id, title, body, isDone } = todo
    if(typeof id !== 'string') return false
    if(typeof title !== 'string') return false
    if(typeof body !== 'string') return false
    if(typeof isDone !== 'boolean') return false
    return true
  }

  // useEffect(() => {
  //   if(todos) {
  //     todos.forEach(todo=>console.log(todo.id))
  //     const todosString = JSON.stringify(todos)
  //     localStorage.setItem('todoData',todosString)
  //   }
  // },[todos])

  // useEffect(() => {
  //   const todoData = localStorage.getItem('todoData')
  //   try{
  //     const parsedTodoData = JSON.parse(todoData)
  //     if(parsedTodoData) {
  //       parsedTodoData.forEach((todo) => {
  //         if(validateTodo(todo)) {
  //           console.log(todo)
  //           dispatch(createTodo(todo))
  //         }
  //       })
  //     } else {
  //     }
  //   } catch (error) {
  //     console.error('localStorage에서 데이터를 가져올 수 없습니다.')
  //   }
  // },[])

  return (
    <div>
      <TodoForm createTodo={createTodoFunc} />
      <TodoList
        todos={todos}
      />
      {editTodo && (
        <TodoModal
        editTodo={editTodo}
        endEditTodo={endEditTodo}
        updateEditTodoTitle={updateEditTodoTitle}
        updateEditTodoBody={updateEditTodoBody}
        deleteTodo={deleteEditTodo}
        updateEditTodoIsDone={updateEditTodoIsDone}
        />
      )}
    </div>
  )
}

export default TodoApp