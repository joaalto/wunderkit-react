import React from "react";
// import { List } from "immutable";
// import TodoForm from "./TodoForm";
// import TodoItems from "./TodoItems";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    // This is a container component which should handle our app state.
    // Our state should consist of todo items (and perhaps the next item id).
  }

  onAddTodo = text => {
    // We should add a new todo item to our app state here (and update the next id).
  };

  onRemoveTodo = id => {
    // We should remove a todo list item by id and update state here.
  };

  render() {
    return <div />
    // return (
    //   <div>
    //     <Title todoCount={this.state.todoItems.size} />
    //     <TodoForm addTodo={this.onAddTodo} />
    //     <TodoItems items={this.state.todoItems} remove={this.onRemoveTodo} />
    //   </div>
    // );
  // }
}

// Implement a stateless <Title> component
};
