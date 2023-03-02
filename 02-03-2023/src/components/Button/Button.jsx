import "./index.css";

const Button = ({ text, clickFun }) => {
  return (
    <button className="btn" onClick={clickFun}>
      {text}
    </button>
  );
};

export default Button;
