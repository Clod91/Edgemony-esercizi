import { useState } from "react";
import InputForm from "./components/inputForm";
import { todos } from "./mock/todos";
import "./App.css";
import TodoList from "./components/todoList";

function App() {
  const [list, setList] = useState(todos);

  return (
    <div className="App">
      <h2 className="title">In Forma Con Claudio</h2>
      <div className="container">
        <InputForm setList={setList} />
        <TodoList list={list} setList={setList} />
      </div>
    </div>
  );
}

export default App;
