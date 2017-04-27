import React from "react";
import { List } from "immutable";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import { getItems, addItem, removeItem } from "./Api";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: List()
    };
  }

  componentDidMount() {
    getItems().then(res => {
      this.setState({
        todoItems: List(res.data)
      });
    });
  }

  onAddTodo = text => {
    addItem({ text }).then(res => {
      this.setState({
        todoItems: this.state.todoItems.push(res.data)
      });
    });
  };

  onRemoveTodo = id => {
    removeItem(id).then(() => {
      this.setState({
        todoItems: this.state.todoItems.filter(item => item.id !== id)
      });
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

const Title = ({ todoCount }) => {
  return (
    <div>
      <div>
        <h1>To-dos: {todoCount}</h1>
      </div>
    </div>
  );
};
