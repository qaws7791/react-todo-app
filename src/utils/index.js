export const validateTodo = (todo) => {
  const { id, title, body, isDone } = todo;
  if (typeof id !== "string") return false;
  if (typeof title !== "string") return false;
  if (typeof body !== "string") return false;
  if (typeof isDone !== "boolean") return false;
  return true;
};

export const findTodoById = (todos, id) =>
  Object.values(todos).find((todo) => todo.id === id);

export const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todoData", JSON.stringify(todos));
};

export const getCurrentTimeStamp = () => new Date().getTime();
