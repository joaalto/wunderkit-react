import React from "react";
import "./TodoForm.css";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="Todo-input"
          type="text"
          placeholder="Add todo"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
