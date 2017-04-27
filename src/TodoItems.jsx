import React from "react";
import "./TodoItems.css";

const TodoItem = ({ item, remove }) => {
  // We should call the remove callback when an item is clicked
  return (
    <div className="Todo-item">
    </div>
  );
};

export default ({ items, remove }) => {
  // We should build a list of item components from the props

  return (
    <div className="Todo-item-list" style={{ marginTop: "30px" }}>
    </div>
  );
};
