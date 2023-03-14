import "./index.css";

const TodoItem = ({ todo, setList }) => {
  const onHandleClick = () => {
    setList((prev) => [...prev.filter((item) => item.body !== todo.body)]);
  };

  return (
    <li className="todo_item" onClick={onHandleClick}>
      <p>{todo.body}</p>
    </li>
  );
};

export default TodoItem;
