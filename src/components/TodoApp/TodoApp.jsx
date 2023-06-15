import React, { useEffect, useState } from 'react'
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import TodoModal from '../TodoModal/TodoModal';

const TodoApp = () => {
  const [todos, setTodos] = useState(null);

  const [editTodo,setEditTodo] = useState(null);

  const createTodo = (title, body) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      body,
      isDone: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const startEditTodo = (id) => {
    const editTodo = todos.filter(todo => todo.id === id)[0]
    setEditTodo(editTodo);
  }

  const endEditTodo = () => {
    setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === editTodo.id ? editTodo : todo
    )
  );
    setEditTodo(null);
  }
  const deleteEditTodo = () => {
    deleteTodo(editTodo.id);
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
    if(typeof id !== 'number') return false
    if(typeof title !== 'string') return false
    if(typeof body !== 'string') return false
    if(typeof isDone !== 'boolean') return false
    return true
  }

  useEffect(() => {
    if(todos) {
      todos.forEach(todo=>console.log(todo.id))
      const todosString = JSON.stringify(todos)
      localStorage.setItem('todoData',todosString)
    }
  },[todos])

  useEffect(() => {
    const todoData = localStorage.getItem('todoData')
    try{
      const parsedTodoData = JSON.parse(todoData)
      if(parsedTodoData) {
        const validatedData = parsedTodoData.filter(todo => validateTodo(todo))
        setTodos(validatedData)
      } else {
        setTodos([])
      }
    } catch (error) {
      console.error('localStorage에서 데이터를 가져올 수 없습니다.')
      setTodos([])
    }
  },[])

  return (
    <div>
      <TodoForm createTodo={createTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        editTodo={startEditTodo}
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