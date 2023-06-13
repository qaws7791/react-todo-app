import TodoItem from "../TodoItem/TodoItem";
import './TodoListSection.css';

const TodoListSection = ({ title, todos, deleteTodo, updateTodo,editTodo }) => {
  return (
    <div className="TodoListSection">
      <h2 className="TodoListSection__title">{title}</h2>
      <ul className="TodoListSection__list">
        {todos.map((todo) => (
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