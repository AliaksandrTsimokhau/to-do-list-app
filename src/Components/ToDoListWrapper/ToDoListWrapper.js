import React, {Component } from 'react';
import './ToDoListWrapper.css';
import {AddTaskForm} from '../AddTaskForm';
import FilterForm from '../FilterForm/FilterForm';
import TaskTable from '../TaskTable/TaskTable';
import PropTypes from 'prop-types';

import {getTasks, addTask, removeTask} from '../utils/apiWrapper';

class ToDoListWrapper extends Component{
  state = {
    tasks:[]
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
  removeTask(id).then(()=>this.setState({
    tasks: this.state.tasks.filter(item => item.id !== id)
  }))
}

  render(){
    return(
      <div className="toDoListWrapper">
        <AddTaskForm title="Add task" onSubmit={this.addTask}/>
        <FilterForm title="Filter"/>
        <TaskTable tasks={this.state.tasks} removeTask={this.removeTask}/>
      </div>
    );
  }
}

export default ToDoListWrapper;
