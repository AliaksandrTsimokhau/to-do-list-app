import React, {Component } from 'react';
import './ToDoListWrapper.css';
import {AddTaskForm} from '../AddTaskForm';
import FilterForm from '../FilterForm/FilterForm';
import TaskTable from '../TaskTable/TaskTable';
import PropTypes from 'prop-types';

var Tasks = [
  {complited: true, title: 'Create ToDo app', priority: 'Normal', date: '2018-01-01'},
  {complited: false, title: 'Make a plan', priority: 'Low', date: '2018-01-10'},
  {complited: false, title: 'Always commit changes', priority: 'Normal', date: '2018-01-21'},
];

class ToDoListWrapper extends Component{
  render(){
    return(
      <div className="toDoListWrapper">
        <AddTaskForm title="Add task"/>
        <FilterForm title="Filter"/>
        <TaskTable tasks={Tasks}/>
      </div>
    );
  }
}

exports default ToDoListWrapper;
