import React from 'react';
import ReactDOM from 'react-dom';
import AppList from './AppList';
import AppHead from './AppHead';
import Loader from './Loader';
import axios from 'axios';
import './index.css';

// Create global variable for task id
window.id = 0;

// Create main task app component
class TaskApp extends React.Component {
  constructor(prop) {
    // Provide parent class with prop
    super(prop);

    // Set initial state as empty
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    axios.get('../tasks.json')
      .then(response => {
        let tasks = response.data.tasks
        this.setState({data: tasks})
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  componentDidMount() {
    setTimeout(() => {
      document.querySelector('#root').className += 'fullyLoaded'
    }, 2000)
  }

  // Add task handler
  addTask(val) {
    // Get the data for tasks such as text and id
    const task = {
      text: val,
      id: window.id++
    }
    
    // Update data if input contains some text
    if (val.length > 0) this.state.data.push(task);
    
    // Update state with newest data - append new task
    this.setState({
      data: this.state.data
    });
  }
  
  // Handle remove
  removeTask(id) {
    // Filter all tasks except the one to be removed
    const taskCollection = this.state.data.filter((task) => {
      return (task.id !== id)
    });

    // Update state with filtered results
    this.setState({
      data: taskCollection
    });
  }

  render() {
    // Render whole App component
    // use AppHead and AppList components
    return (
      <div>
        <AppHead addTask={this.addTask.bind(this)}/>

        <AppList 
          tasks={this.state.data}
          remove={this.removeTask.bind(this)}
        />

        <Loader />
      </div>
    );
  }
}

// Render full app to element with ID root
ReactDOM.render(<TaskApp />, document.querySelector('#root'));