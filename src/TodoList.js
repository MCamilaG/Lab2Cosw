import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const list = this.props.todoList;
    const listTo = list.map(lis => (
        <Todo key={lis.text.toString()} text={lis.text} priority={lis.priority} dueDate={lis.dueDate}/>   
    ));
    return (
      <table>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Date</th>
          </tr>
        <tbody>{listTo}</tbody>
      </table>
    );
  }
}

export default TodoList;
