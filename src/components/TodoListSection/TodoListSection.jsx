import { useEffect, useMemo, useRef, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import './TodoListSection.css';

const TodoListSection = ({ title, todos, deleteTodo, updateTodo,editTodo }) => {
  const componentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      calcPositions()
    }
    handleResize();
    window.addEventListener('resize',handleResize)
    return () => {
      window.removeEventListener('resize',handleResize)
    }
  })

  function calcPositions() {
    const colWidth = 360;
    const colLength = Math.floor(componentRef.current.offsetWidth / colWidth);
    const childElements = componentRef.current.childNodes;
    console.log(childElements)
    let sumWidth = 0;
    let sumHeight = new Array(colLength).fill(0);
    const rowGap = 20;
    for (let i = 0; i < childElements.length; i++) {
      childElements[i].style.transform = `translate(${sumWidth}px, ${sumHeight[i%colLength]}px)`;

      sumWidth += childElements[i].offsetWidth
      sumHeight[i%colLength] += childElements[i].offsetHeight + rowGap;

      if( i % colLength === colLength-1) {
        sumWidth = 0;
      }  
    }
    componentRef.current.style.height =`${Math.max(...sumHeight)}px`
  }

  return (
    <div className="TodoListSection">
      <h2 className="TodoListSection__title">{title}</h2>
      <ul className="TodoListSection__list" ref={componentRef}>
      {todos.map((todo, index) => (
          <li key={todo.id} className="TodoListSection__Item">
          <TodoItem
            data={todo}
            deleteFunc={deleteTodo}
            changeFunc={updateTodo}
            editFunc={editTodo}
          />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListSection;