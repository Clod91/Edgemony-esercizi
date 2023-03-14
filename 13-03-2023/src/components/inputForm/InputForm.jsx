import { useState } from "react";
import "./index.css";

const InputForm = ({ setList }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => setInputValue(() => e.target.value);
  const OnSubmitInput = (e) => {
    e.preventDefault();
    setList((prev) => {
      if (
        prev.find(
          (item) => item.body.toLowerCase() == !inputValue.toLowerCase()
        )
      ) {
        return [
          ...prev,
          {
            id: prev.length + 1,
            body: inputValue,
          },
        ];
      } else {
        alert("l'esercizio inserito è già nella lista");
        return prev;
      }
    });
  };

  return (
    <form className="input_form" onSubmit={OnSubmitInput}>
      <input
        type="text"
        placeholder="Aggiungi un esercizio"
        onChange={onInputChange}
        value={inputValue}
        className="input_text"
      />
      <input type="submit" value="Inserisci" className="input_submit" />
    </form>
  );
};

export default InputForm;
