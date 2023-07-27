import { useCallback, useEffect, useRef, useState,memo, useLayoutEffect } from "react";
import TodoItem from "../TodoItem";
import styles from './TodoListSection.module.css';

const TodoListSection = ({ 
  title,
  todos,
  columnWidth = 300,
  rowGap = 20 
}) => {
  const componentRef = useRef(null);
  const [resizing, setResizing] = useState(false);
  const [height,setHeight] = useState(0);
  const [positions,setPositions] = useState([[0,0]]);

  const calcPositions = useCallback(()=> {
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
    const calculatedPositions = []
    childElements.forEach((childElement, i) => {
      const colIndex = i % colLength;
      //childElement.style.transform = `translate(${sumX}px, ${sumY[colIndex]}px)`;
      calculatedPositions.push([sumX,sumY[colIndex]])
      sumX += childElement.offsetWidth + colGap;
      sumY[colIndex] += childElement.offsetHeight + rowGap;

      if (colIndex === colLength - 1) sumX = colGap;
    });
    //listComponent.style.height = `${Math.max(...sumY)}px`;
    setPositions(calculatedPositions)
    setHeight(Math.max(...sumY))
  },[columnWidth,rowGap])


  const handleResize = useCallback(() => {
    if(!resizing) {
      setResizing(true)
      setTimeout(() => {
        if(componentRef?.current?.offsetWidth)calcPositions()
        setResizing(false)
      }, 500)
    }
  },[resizing,calcPositions])

  useLayoutEffect(() => {
    const listComponent = componentRef.current;
    if (!listComponent) return;
    calcPositions()
  },[calcPositions,todos])

  useEffect(() => {
    window.addEventListener('resize',handleResize)
    return () => {
      window.removeEventListener('resize',handleResize)
    }
  },[handleResize])

  return (
    <div className={styles['TodoListSection']}>
      <h2 className={styles['TodoListSection__title']}>{title}</h2>
      <ul className={styles['TodoListSection__list']} ref={componentRef} style={{height: `${height}px`}}>
      {todos.map((todo, index) => (
            <li key={todo.id} className={styles['TodoListSection__Item']} style={positions[index] && {transform:`translate(${positions[index][0]}px, ${positions[index][1]}px)`}}>
          <TodoItem
            data={todo}
          />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(TodoListSection);