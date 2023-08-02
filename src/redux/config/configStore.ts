import { saveTodosToLocalStorage } from "../../utils";
import todos from "../modules/todos";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    todos,
  },
});

const onChangeStore = () => {
  const prevState = store.getState();
  // console.log("prevState", prevState);
  saveTodosToLocalStorage(prevState.todos);
};

store.subscribe(onChangeStore);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
