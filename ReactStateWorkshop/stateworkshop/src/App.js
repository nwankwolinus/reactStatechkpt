// eslint-disable-all-lines
import React, { Component } from 'react';
import './App.css';
import TodoList from './Component/TodoList';
import AddTasks from './Component/addTask';

class App extends Component {

  state = {
    tasks: [
      {
        id: 1,
        description: "Buy New Shoes!",
        done: "False"
      },
      {
        id: 2,
        description: "Pay for rent!",
        done: "False"
      },
      {
        id: 3,
        description: "Save the world man!",
        done: "False"
      },
    ]
  }
  
  addTask = (task) => this.setState({
    tasks : [...this.state.tasks, task]
  });

  doneTask = (id) => this.setState ({
    tasks : this.state.tasks.map ((el) => 
    el.id === id ? {...el, done : !el.done} : el
    )
  });

  deleteTask = (id) => this.setState ({
    tasks : this.state.tasks.filter((el) =>
    el.id !== id
    )
  })
  render(){
    return(
      <div className = "App">
        <div className="row justify-content-centre">
        <h2>Todo List</h2>
        </div>

        <TodoList
        todos={this.state.tasks}
        handleDelete={this.deleteTask}
        handleDone={this.doneTask}
        />

        <AddTasks handleAdd={this.addTask}/>
      </div>
    )
  }
}
export default App;


/*React State Example */
// import './App.css';
// import Index from './Component';


// function App() {

//   return (
//     <div className = "App">
//       <h2>Welcome to React State</h2>
      
//       <Index/>
//     </div>
  
//   );
// }

// export default App;
