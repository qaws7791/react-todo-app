import { useEffect, useRef, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import './TodoListSection.css';

const TodoListSection = ({ 
  title,
  todos,
  columnWidth = 300,
  rowGap = 20 
}) => {
  const componentRef = useRef(null);
  const [resizing, setResizing] = useState(false);

  const handleResize = () => {
    if(!resizing) {
      setResizing(true)
      setTimeout(() => {
        if(componentRef?.current?.offsetWidth)calcPositions()
        setResizing(false)
      }, 500)
    }
  }

  useEffect(() => {
    if(componentRef?.current?.offsetWidth)calcPositions()
  })

  useEffect(() => {
    window.addEventListener('resize',handleResize)
    return () => {
      window.removeEventListener('resize',handleResize)
    }
  })

  function calcPositions() {
    const listComponent = componentRef.current;
    const maxColumn = Math.floor(listComponent.offsetWidth / columnWidth);
    const colLength = maxColumn || 1;

    const colGap =
      maxColumn > 0
        ? (listComponent.offsetWidth % columnWidth) / (colLength + 1)
        : 0;
    const childElements = listComponent.childNodes;
    let sumX = colGap;
    let sumY = new Array(colLength).fill(0);
    childElements.forEach((childElement, i) => {
      const colIndex = i % colLength;
      childElement.style.transform = `translate(${sumX}px, ${sumY[colIndex]}px)`;

      sumX += childElement.offsetWidth + colGap;
      sumY[colIndex] += childElement.offsetHeight + rowGap;

      if (colIndex === colLength - 1) sumX = colGap;
    });
    listComponent.style.height = `${Math.max(...sumY)}px`;
  }

  return (
    <div className="TodoListSection">
      <h2 className="TodoListSection__title">{title}</h2>
      <ul className="TodoListSection__list" ref={componentRef}>
      {todos.map((todo, index) => (
          <li key={todo.id} className="TodoListSection__Item">
          <TodoItem
            data={todo}
          />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListSection;