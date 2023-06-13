import "./App.css";
import Layout from "./Layout";
import { Header, TodoApp } from "./components";

function App() {
  return (
      <Layout>
        <Header title="TODO LIST" subTitle="BY REACT"/>
        <main>
          <TodoApp />
        </main>
      </Layout>
  );
}

export default App;
