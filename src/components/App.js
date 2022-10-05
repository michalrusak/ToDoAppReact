import React, { Component } from 'react';

import './styles/App.scss';

import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: []
    } 

    addTask = (text) => {
      let tasks = [...this.state.tasks];
      const id = tasks.length+1;
      const task = {id: id, task: text, active: true};
      tasks = [...tasks, task];
      
      this.setState({
        tasks
      })
      return true;
    }
    deleteTask = (id) => {
      let tasks = [...this.state.tasks];
      tasks = tasks.filter(task => task.id !== id);
      
      this.setState({
        tasks
      })
    }
    changeStatusTask = (id) => {
      let tasks = [...this.state.tasks];
      tasks.forEach(task => {
        if(task.id === id) task.active = false;
      });

      this.setState({
        tasks
      })
    }
  render() { 
    return (
      <div className='app'>
      <h1 className='title'>To do app</h1>
      <AddTask addTask={this.addTask} />
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} changeStatus={this.changeStatusTask} />
      </div>
    );
  }
}
 
export default App;
