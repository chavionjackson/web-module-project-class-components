import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      newTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
  };

  render() {
    return (
      <div>
        <form>
          <label>
            <input
              type="text"
              name="task"
              value={this.state.newTask}
              onChange={this.handleChanges}
            />
          </label>
          <button onClick={this.handleSubmit} >Add Todo</button>
          <button onClick={this.props.deleteTask} >Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
