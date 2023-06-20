export const validateTodo = (todo) => {
  const { id, title, body, isDone } = todo;
  if (typeof id !== "string") return false;
  if (typeof title !== "string") return false;
  if (typeof body !== "string") return false;
  if (typeof isDone !== "boolean") return false;
  return true;
};
