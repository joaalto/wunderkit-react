import React from "react";
import "./TodoItems.css";

const TodoItem = ({ item, remove }) => {
  return (
    <div className="Todo-item" onClick={() => remove(item.id)}>
      {item.text}
    </div>
  );
};

export default ({ items, remove }) => {
  const todoItems = items.map(item => (
    <TodoItem key={item.id} item={item} remove={remove} />
  ));
  return (
    <div className="Todo-item-list" style={{ marginTop: "30px" }}>
      {todoItems}
    </div>
  );
};
