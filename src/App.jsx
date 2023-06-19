import "./App.css";
import Layout from "./Layout";
import { TodoApp } from "./components";
import Router from "./shared/Router";

function App() {
  return (
  <Layout>
    <Router/>
  </Layout>
  );
}

export default App;
