import { validateTodo } from "../../utils";

const CREATE_TODO = "CREATE_TODO";
const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const LOAD_LOCAL_STORAGE = "LOAD_LOCAL_STORAGE";

//action
export const createTodo = (newTodo) => {
  return (dispatch, getState) => {
    dispatch({ type: CREATE_TODO, payload: newTodo });

    const state = getState();
    localStorage.setItem("todoData", JSON.stringify(state.todos));
  };
};

export const toggleTodoStatus = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: TOGGLE_TODO_STATUS, payload: id });

    const state = getState();
    localStorage.setItem("todoData", JSON.stringify(state.todos));
  };
};

export const deleteTodo = (id) => {
  console.log("deleteTodo: ", id);
  return (dispatch, getState) => {
    dispatch({ type: DELETE_TODO, payload: id });

    const state = getState();
    localStorage.setItem("todoData", JSON.stringify(state.todos));
  };
};

export const updateTodo = (updatedTodo) => {
  return (dispatch, getState) => {
    dispatch({ type: UPDATE_TODO, payload: updatedTodo });

    const state = getState();
    localStorage.setItem("todoData", JSON.stringify(state.todos));
  };
};

export const loadLocalStorage = () => {
  return (dispatch) => {
    const todoData = localStorage.getItem("todoData");
    console.log(todoData);
    try {
      const parsedTodoData = JSON.parse(todoData);
      if (parsedTodoData?.length > 0) {
        const result = parsedTodoData.filter((todo) => validateTodo(todo));
        dispatch({ type: "LOAD_LOCAL_STORAGE", payload: result });
      } else {
      }
    } catch (error) {
      console.error("localStorage에서 데이터를 가져올 수 없습니다.");
    }
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
    case LOAD_LOCAL_STORAGE:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default todos;
