import React, { Component } from 'react';
import './TaskTable.css';
import TaskRow from './TaskRow.js';
import RowHeadTable from './RowHeadTable.js';
import PropTypes from 'prop-types';

import sortBy from '../../utils/sortBy';

class TaskTable extends Component {

  state = {
          tasks: [],
          order: 'id'
      }

  render(){
    const {
            tasks = [],
            updateTask,
            removeTask
        } = this.props;
        let sortedTasks = sortBy(tasks, this.state.order);
    return(
          <div>
                Ordered by {this.state.order}
                <table className="taskTable">
                    <RowHeadTable setOrder={(order) => this.setState({ order })} />
                    <tbody>
                        {sortedTasks.map((task) =>
                            <TaskRow key={task.id} task={task} removeTask={removeTask} updateTask={updateTask} />)}
                    </tbody>
                </table>
            </div>
    )
  }
}



TaskTable.PropTypes = {
  removeTask: PropTypes.func,
  tasks: PropTypes.array,
  updateTask: PropTypes.func
};

export default TaskTable;
