import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기 false",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기 true",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

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

  return (
    <div>
      <TodoForm createTodo={createTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoApp