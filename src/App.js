import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css"

const Tasks = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskArray: Tasks,
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = (newTask) => {
    const newTasks = {
      task: newTask,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      taskArray: [...Tasks, newTasks],
    });
    console.log("Task added!", newTasks);
  };

  toggleComplete = (id) => {
    const newArray = this.state.taskArray.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    this.setState({
      ...this.state,
      taskArray: newArray
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleComplete={this.toggleComplete} tasks={this.state.taskArray} />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
