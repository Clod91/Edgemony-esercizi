import TodoItem from "../todoItem";
import "./index.css";

const TodoList = ({ list, setList }) => {
  return (
    <ul className="todo_list">
      {list.map((todo) => (
        <TodoItem todo={todo} setList={setList} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
