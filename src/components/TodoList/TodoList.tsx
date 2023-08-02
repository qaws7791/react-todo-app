import { useMemo } from "react";
import { Todo } from "../../redux/modules/todos";
import TodoSection from "./TodoSection";
import TodoSectionTitle from "./TodoSectionTitle/TodoSectionTitle";
import TodoSectionContents from "./TodoSectionContents";


interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ 
  todos 
}:TodoListProps) => {
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
  const [workingTodos, doneTodos] = useMemo(()=>{
    const emptyTodos:[Todo[],Todo[]] = [[],[]]
    return todos?.reduce(
      (acc, item) => {
        if (item.isDone) acc[1].push(item);
        else acc[0].push(item);
        return acc;
      },emptyTodos) || emptyTodos
  },[todos])
    
  return (
    <>
    <TodoSection>
      <TodoSectionTitle>
      "진행중인 작업⌛"
      </TodoSectionTitle>
      <TodoSectionContents 
        todos={workingTodos} 
        columnWidth={360} 
        rowGap={20}
      />
    </TodoSection>
    <TodoSection>
      <TodoSectionTitle>
      "완료된 작업🎉"
      </TodoSectionTitle>
      <TodoSectionContents 
        todos={doneTodos} 
        columnWidth={360} 
        rowGap={20}
      />
    </TodoSection>
    </>
  );
};

export default TodoList;