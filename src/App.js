import React, { Component } from "react";
import "./App.css";
import TodoApp from "./TodoApp.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>To-do list</h2>
        </div>
        <div className="App-body">
          <TodoApp />
        </div>
      </div>
    );
  }
}

export default App;
