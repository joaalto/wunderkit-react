import React from "react";
import "./TodoForm.css";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    // We should hold the value of our input text in component state
  }

  handleChange = event => {
    // We should update the component state here
  };

  handleSubmit = event => {
    event.preventDefault();
    // We should call the callback for adding a todo item here with the state text,
    // and clear our component state text
  };

  render() {
    return (
      <form>
        <input className="Todo-input" type="text" placeholder="Add todo" />
      </form>
    );
  }
}
