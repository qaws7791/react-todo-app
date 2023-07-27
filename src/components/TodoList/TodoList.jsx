import { useMemo } from "react";
import TodoListSection from "../TodoListSection";

const TodoList = ({ todos }) => {

  //첫 번째 방법
  // const workingTodos = [];
  // const doneTodos = [];

  // if(todos?.length > 0) {
  //   todos.forEach((item) => {
  //     if (item.isDone) doneTodos.push(item);
  //     else workingTodos.push(item);
  //   });
  // }

  //두 번째 방법
  // const workingTodos = todos?.filter((item) => !item.isDone) || [];
  // const doneTodos = todos?.filter((item) => item.isDone) || [];

  //세 번째 방법
  const [workingTodos, doneTodos] = useMemo(()=>todos?.reduce(
    (acc, item) => {
      if (item.isDone) acc[1].push(item);
      else acc[0].push(item);
      return acc;
    },[[],[]]),[todos])
    
  return (
    <>
      <TodoListSection
        title={"진행중인 작업⌛"}
        todos={workingTodos}
        columnWidth={360}
        rowGap={20}
      />
      <TodoListSection
        title={"완료된 작업🎉"}
        todos={doneTodos}
        columnWidth={360}
        rowGap={20}
      />
    </>
  );
};

export default TodoList;