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
      <div className="todoListMain">
        <div className="header">
          <form>
            <label>
              <input
              placeholder="enter task..."
                type="text"
                name="task"
                value={this.state.newTask}
                onChange={this.handleChanges}
              />
            </label>
            <button onClick={this.handleSubmit}>Add Todo</button>
            <button onClick={this.props.deleteTask}>Clear Completed</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoForm;
