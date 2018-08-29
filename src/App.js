import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.todos = [
      { text: "Learn React", priority: 5, dueDate: new Date() },
      { text: "Learn about APIs", priority: 4, dueDate: new Date(2018, 8, 30) },
      { text: "write TODO App", priority: 3, dueDate: new Date(2018, 9, 30) }
    ];
    this.state = { items: this.todos, text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Todo-List-App">TODO</h1>
        </header>
        <div className="App-intro">
              <TodoList todoList={this.state.items} />
            <div className="row">
              <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">
                What needs to be done?
                </label>
                <input
                  id="new-todo"
                  onChange={this.handleChange}
                  value={this.state.text}
                />
                <button>Add # {this.state.items.length + 1}</button>
              </form>
            </div>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: 1,
      dueDate: new Date(),
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ""
    }));
  }

}

export default App;