import { useSelector } from "react-redux";
import "./App.css";
import Layout from "./Layout";
import { TodoApp } from "./components";

function App() {
  const data = useSelector((state) => {
    return state;
  })
  console.log(data)
  return (
  <Layout>
    <TodoApp />
  </Layout>
  );
}

export default App;
