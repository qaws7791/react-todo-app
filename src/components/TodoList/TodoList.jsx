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
        title={"Working..."}
        todos={workingTodos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
      <TodoListSection
        title={"Done..."}
        todos={doneTodos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  );
};

export default TodoList;