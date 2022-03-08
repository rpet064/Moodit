import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Title from "../Title";

export default function ToDoList() {
  const [items, setItems] = useState([]) as any;

  function addItem(inputText: any) {
    setItems((prevItems: any) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id: any) {
    setItems((prevItems: any) => {
      return prevItems.filter((item: any, index: any) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Title titleText="To-Do List" subTitleText="Feeling Motivated?" />
      <div id="toDoList">
        <InputArea onAdd={addItem} />
        <div>
          <ul>
            {items.map((todoItem: any, index: any) => (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
