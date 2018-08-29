import React, {Component} from "react";

export class Todo extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <tr>            
          <td>{this.props.text.toString()}</td>
          <td>{this.props.priority.toString()}</td>
          <td>{this.props.dueDate.toString()}</td>
        </tr>
      );
    }
  }
  
export default Todo;