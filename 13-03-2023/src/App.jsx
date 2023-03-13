import { useState } from "react";
import { todo } from "./mock/todo";
import "./App.css";

function App() {
  const [newTodo, setNewtodo] = useState([]);
  const [value, setValue] = useState("");

  const OnHandleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    const inputTodo = value;
    let todos = newTodo.concat(inputTodo);
    setNewtodo(todos);
  };

  return (
    <div className="App">
      <form className="todo_form" onSubmit={OnHandleSubmit}>
        <input type="submit" value="aggiungi" />
        <input
          type="text"
          placeholder="attività da eseguire"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
