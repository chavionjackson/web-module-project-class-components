import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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
      Tasks: Tasks
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = (newTask) => {
    this.setState({
      ...this.state,
      Tasks: [
        ...this.state.Tasks,
        {
          task: newTask,
          id: Date.now(),
          completed: false
        }
      ]
    })
    console.log("Task added!", newTask)
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.Tasks} />
        <TodoForm onChange={this.handleChanges} addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
