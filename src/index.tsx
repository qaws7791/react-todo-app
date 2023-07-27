import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/config/configStore";
import { loadLocalStorageAsync } from "./redux/modules/todos";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root")!);

store.dispatch(loadLocalStorageAsync());

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
