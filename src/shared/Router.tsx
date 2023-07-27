import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "../pages/TodoApp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/todo/:id" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
