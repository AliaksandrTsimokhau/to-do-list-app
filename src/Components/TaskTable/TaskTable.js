import React, { Component } from 'react';
import './TaskTable.css';
import TaskRow from './TaskRow.js';
import RowHeadTable from './RowHeadTable.js';
import PropTypes from 'prop-types';

class TaskTable extends Component {
  render(){
    return(
      <table className="taskTable">
        <RowHeadTable/>
        <tbody>
          {this.props.tasks.map((task) =>
            <TaskRow key={task.id} task={task} removeTask={this.props.removeTask}/>)}
        </tbody>
      </table>
    )
  }
}

TaskTable.PropTypes = {
  removeTask: PropTypes.func,
  tasks: PropTypes.array
};

export default Tasktable;
