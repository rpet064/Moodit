import React, { useState } from "react";

export default function InputArea(props: any) {
  const [inputText, setInputText] = useState("");

  function handleChange(event: any) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        id="toDoButton"
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
