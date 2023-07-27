import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../config/configStore";
import { getCurrentTimeStamp, getTodosFromLocalStorage } from "../../utils";

// Define the Todo type
export interface Todo {
  id: string;
  title: string;
  body: string;
  isDone: boolean;
  createdAt: number;
  updatedAt: number;
}

// Define the initial state
const initialState: Todo[] = [];

// Create the todosSlice using createSlice
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (
      state,
      action: PayloadAction<{ title: string; body: string }>
    ) => {
      const currentTime = getCurrentTimeStamp();
      const newTodo: Todo = {
        id: uuidv4(),
        title: action.payload.title,
        body: action.payload.body,
        isDone: false,
        createdAt: currentTime,
        updatedAt: currentTime,
      };
      state.unshift(newTodo);
    },
    toggleTodoStatus: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
        todo.updatedAt = getCurrentTimeStamp();
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const { id, title, body } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        todo.body = body;
        todo.updatedAt = getCurrentTimeStamp();
      }
    },
    loadLocalStorage: (state, action: PayloadAction<Todo[]>) => {
      return [...action.payload, ...state];
    },
  },
});

export const { createTodo, toggleTodoStatus, deleteTodo, updateTodo } =
  todosSlice.actions;

// Create and export the reducer
export default todosSlice.reducer;

export const loadLocalStorageAsync = (): ThunkAction<
  void,
  RootState,
  unknown,
  PayloadAction<Todo[]>
> => {
  return (dispatch, getState) => {
    const todos = getTodosFromLocalStorage();
    dispatch(todosSlice.actions.loadLocalStorage(todos));
  };
};
