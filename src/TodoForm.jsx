import React from "react";
import "./TodoForm.css";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          className="Todo-input"
          type="text"
          placeholder="Add todo"
          value={this.state.text}
        />
      </form>
    );
  }
}
