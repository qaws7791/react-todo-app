import TodoListSection from "../TodoListSection/TodoListSection";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  const workingTodos = [];
  const doneTodos = [];

  todos.forEach((item) => {
    if (item.isDone) doneTodos.push(item);
    else workingTodos.push(item);
  });

  return (
    <>
      <TodoListSection
        title={"진행중인 작업"}
        todos={workingTodos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
      <TodoListSection
        title={"완료된 작업"}
        todos={doneTodos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  );
};

export default TodoList;