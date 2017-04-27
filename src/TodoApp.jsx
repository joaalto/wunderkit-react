import React from "react";
import { List } from "immutable";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: 0,
      todoItems: List()
    };
  }

  onAddTodo = text => {
    const nextId = this.state.nextId + 1;
    const todoItem = { id: nextId, text: text };
    this.setState({
      nextId: nextId,
      todoItems: this.state.todoItems.push(todoItem)
    });
  };

  onRemoveTodo = id => {
    this.setState({
      todoItems: this.state.todoItems.filter(item => item.id !== id)
    });
  };

  render() {
    return (
      <div>
        <Title todoCount={this.state.todoItems.size} />
        <TodoForm addTodo={this.onAddTodo} />
        <TodoItems items={this.state.todoItems} remove={this.onRemoveTodo} />
      </div>
    );
  }
}

// Implement a stateless <Title> component
const Title = ({ todoCount }) => {
  return (
    <div>
      <div>
        <h1>To-dos: {todoCount}</h1>
      </div>
    </div>
  );
};
