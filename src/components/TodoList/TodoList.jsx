import TodoListSection from "../TodoListSection";

const TodoList = ({ todos }) => {
  const workingTodos = [];
  const doneTodos = [];

  if(todos?.length > 0) {
    todos.forEach((item) => {
      if (item.isDone) doneTodos.push(item);
      else workingTodos.push(item);
    });
  }

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