import TodoItem from "../TodoItem/TodoItem";
import './TodoListSection.css';

const TodoListSection = ({ title, todos, deleteTodo, updateTodo }) => {
  return (
    <div className="TodoListSection">
      <h2 className="TodoListSection__title">{title}</h2>
      <ul className="TodoListSection__list">
        {todos.map((todo) => (
          <li className="TodoListSection__Item">
          <TodoItem
            key={todo.id}
            data={todo}
            deleteFunc={deleteTodo}
            changeFunc={updateTodo}
          />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListSection;