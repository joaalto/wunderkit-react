import React from "react";
import { List } from "immutable";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    // This is a container component which should handle our app state.
    // Our state should consist of todo todoItems (and perhaps the next item id).
    this.state = {
      nextId: 0,
      todoItems: List()
    };
  }

  onAddTodo = text => {
    console.log('text: ', text)
    const nextId = this.state.nextId + 1;

    this.setState({
      nextId: nextId,
      todoItems: this.state.todoItems.push({
        id: nextId,
        text: text
      })
    });
  };

  onRemoveTodo = id => {
    // We should remove a todo list item by id and update state here.
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

const Title = ({ todoCount }) => {
  return (
    <div>
      Todo items: {todoCount}
    </div>
  );
};
