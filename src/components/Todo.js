import React from "react";

class Todo extends React.Component {

  render() {
    return (
      <div className={this.props.item.completed ? "item" : null} onClick={() => this.props.toggleComplete(this.props.item.id)} >
        <h4>{this.props.item.task}</h4>
      </div>
    );
  }
}
export default Todo;
