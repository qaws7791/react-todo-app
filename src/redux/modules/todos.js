import { getCurrentTimeStamp, validateTodo } from "../../utils";
import { v4 as uuidv4 } from "uuid";
import { saveTodosToLocalStorage } from "../../utils";
const CREATE_TODO = "CREATE_TODO";
const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const LOAD_LOCAL_STORAGE = "LOAD_LOCAL_STORAGE";

// 액션
export const createTodo = (title, body) => {
  return (dispatch, getState) => {
    const newTodo = {
      id: uuidv4(),
      title,
      body,
      isDone: false,
      createdAt: getCurrentTimeStamp(),
      updatedAt: getCurrentTimeStamp(),
    };
    dispatch({ type: CREATE_TODO, payload: newTodo });

    const { todos } = getState();
    saveTodosToLocalStorage(todos);
  };
};

export const toggleTodoStatus = (id) => {
  return (dispatch, getState) => {
    const payload = {
      id,
      updatedAt: getCurrentTimeStamp(),
    };
    dispatch({ type: TOGGLE_TODO_STATUS, payload });

    const { todos } = getState();
    saveTodosToLocalStorage(todos);
  };
};

export const deleteTodo = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: DELETE_TODO, payload: id });

    const { todos } = getState();
    saveTodosToLocalStorage(todos);
  };
};

export const updateTodo = (updatedTodo) => {
  return (dispatch, getState) => {
    const newTodo = {
      ...updatedTodo,
      updatedAt: getCurrentTimeStamp(),
    };
    dispatch({ type: UPDATE_TODO, payload: newTodo });

    const { todos } = getState();
    saveTodosToLocalStorage(todos);
  };
};

export const loadLocalStorage = () => {
  return (dispatch) => {
    const todoData = localStorage.getItem("todoData");
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
      return [action.payload, ...state];
    case TOGGLE_TODO_STATUS:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              updatedAt: action.payload.updatedAt,
              isDone: !todo.isDone,
            }
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case LOAD_LOCAL_STORAGE:
      return [...action.payload, ...state];
    default:
      return state;
  }
};

export default todos;
