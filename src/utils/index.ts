import { Todo } from "../redux/modules/todos";

export const validateTodo = (todo: Todo) => {
  const { id, title, body, isDone } = todo;
  if (
    typeof id !== "string" ||
    typeof title !== "string" ||
    typeof body !== "string" ||
    typeof isDone !== "boolean"
  )
    return false;
  return true;
};

export const findTodoById = (todos: Todo[], id: string): Todo | undefined =>
  Object.values(todos).find((todo) => todo.id === id);

export const saveTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem("todoData", JSON.stringify(todos));
};

export const getTodosFromLocalStorage = (): Todo[] => {
  const todoData = localStorage.getItem("todoData");
  if (!todoData) return [];
  try {
    const parsedTodoData = JSON.parse(todoData);
    console.log(parsedTodoData);
    if (!Array.isArray(parsedTodoData) || parsedTodoData.length === 0)
      return [];
    const validTodos = parsedTodoData.filter((todo: Todo) =>
      validateTodo(todo)
    );
    return validTodos;
  } catch (error) {
    console.error("localStorage에서 데이터를 가져올 수 없습니다.");
    return [];
  }
};

export const getCurrentTimeStamp = () => new Date().getTime();
