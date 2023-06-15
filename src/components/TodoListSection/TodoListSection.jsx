import { useEffect, useRef } from "react";
import TodoItem from "../TodoItem/TodoItem";
import './TodoListSection.css';

const TodoListSection = ({ 
  title,
  todos,
  deleteTodo,
  updateTodo,
  editTodo,
  columnWidth = 300,
  rowGap = 20 
}) => {
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
    const colLength = Math.floor(componentRef.current.offsetWidth / columnWidth);
    const colGap = (componentRef.current.offsetWidth % columnWidth) / (colLength + 1);
    const childElements = componentRef.current.childNodes;
    let sumWidth = colGap;
    let sumHeight = new Array(colLength).fill(0);
    for (let i = 0; i < childElements.length; i++) {
      childElements[i].style.transform = `translate(${sumWidth}px, ${sumHeight[i%colLength]}px)`;

      sumWidth += childElements[i].offsetWidth+colGap;
      sumHeight[i%colLength] += childElements[i].offsetHeight + rowGap;

      if( i % colLength === colLength-1) sumWidth = colGap
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