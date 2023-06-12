import TodoItem from "../TodoItem/TodoItem";

const TodoListSection = ({ title, todos, deleteTodo, updateTodo }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {" "}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            data={todo}
            deleteFunc={deleteTodo}
            changeFunc={updateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoListSection;