import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import TodoModal from '../TodoModal/TodoModal';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기1",
      body: "리액트 기초를 공부해봅시다.리액트 기초를 공부해봅시다.리액트 기초를 공부해봅시다.리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기 2",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
    {
      id: 3,
      title: "리액트 공부하기 3",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 4,
      title: "리액트 공부하기 4",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 5,
      title: "리액트 공부하기 5",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 6,
      title: "리액트 공부하기 6",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 7,
      title: "리액트 공부하기 7",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

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

  const updateTodoIsDone = (id) => {
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

  return (
    <div>
      <TodoForm createTodo={createTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodoIsDone={updateTodoIsDone}
        startEditTodo={startEditTodo}
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