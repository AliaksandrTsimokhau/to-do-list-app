import React, {Component } from 'react';
import './ToDoListWrapper.css';
import {AddTaskForm} from '../AddTaskForm';
import FilterForm from '../FilterForm/FilterForm';
import TaskTable from '../TaskTable/TaskTable';
import PropTypes from 'prop-types';

import {getTasks, addTask, removeTask, updateTask} from '../../utils/apiWrapper';

class ToDoListWrapper extends Component{
  state = {
    tasks:[],
    filter: {
      showCompleted: true
    }
  }

  componentWillMount(){
    getTasks().then((tasks)=>this.setState({tasks}));
  }

  addTask = (taskData) => {
    addTask(taskData).then((taskData)=>
  this.setState({
    tasks: [...this.state.tasks, taskData]
  }))
  }

removeTask = (id) =>{
  let tasks = this.state.tasks;
  this.setState({
    tasks: this.state.tasks.filter(item => item.id !== id)
  });
  removeTask(id).catch(()=>this.setState({
    tasks
  }))
}

updateTask = (id, changes) => {
    updateTask(id, changes).then((udatedItem) => this.setState({
      tasks: this.state.tasks.map(item => item.id !== id ? item : {
        ...item,
        ...udatedItem
      })
    }))
  }

onFilterUpdate = (changes) => {
    this.setState({
      filter: {
        ...this.state.filter,
        ...changes
      }
    });
  }

render(){
    const {
      tasks,
      filter,
      filter: { showCompleted }
    } = this.state;

    const filteredTasks = showCompleted ? tasks : tasks.filter((item) => !item.complited);

    return(
      <div className="toDoListWrapper">
        <AddTaskForm title="Add task" onSubmit={this.addTask}/>
        <FilterForm filter={filter} onFilterUpdate={this.onFilterUpdate} title="Filter" />
        <TaskTable tasks={filteredTasks} removeTask={this.removeTask} updateTask={this.updateTask} />
      </div>
    );
  }
}

export default ToDoListWrapper;
