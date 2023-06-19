import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
