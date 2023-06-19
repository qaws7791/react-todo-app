const CREATE_TODO = "CREATE_TODO";
const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

export const createTodo = (payload) => {
  return {
    type: CREATE_TODO,
    payload,
  };
};

export const toggleTodoStatus = (payload) => {
  return {
    type: TOGGLE_TODO_STATUS,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

// 초기 값
const initialState = [];
// 리듀서

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO_STATUS:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    default:
      return state;
  }
};

export default todos;
