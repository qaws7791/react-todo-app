import TodoItem from "../TodoItem/TodoItem";
import './TodoListSection.css';

const TodoListSection = ({ title, todos, deleteTodo, updateTodoIsDone,startEditTodo }) => {
  return (
    <div className="TodoListSection">
      <h2 className="TodoListSection__title">{title}</h2>
      <ul className="TodoListSection__list">
        {todos.map((todo) => (
          <li key={todo.id} className="TodoListSection__Item">
          <TodoItem
            data={todo}
            deleteFunc={deleteTodo}
            changeIsDoneFunc={updateTodoIsDone}
            startEditFunc={startEditTodo}
          />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListSection;