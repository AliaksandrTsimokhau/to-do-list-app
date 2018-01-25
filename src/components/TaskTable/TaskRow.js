import React, { Component } from 'react';
import './TaskTable.css';
import PropTypes from 'prop-types';



class TaskRow extends Component {
  changeTaskProp(propName, value) {
        this.props.updateTask(this.props.task.id, {
            [propName]: value
        });
    }

    render() {
        const { task, removeTask } = this.props;
        return (
            <tr>
                <td>{task.id}</td>
                <td><input type="checkbox" checked={task.complited} onChange={(ev) =>
                    this.changeTaskProp('complited', ev.target.checked)
                } /></td>
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td>{task.date}</td>
                <td><button onClick={() => removeTask(task.id)}>X</button></td>
            </tr>
        );
    }
}
TaskRow.propTypes = {
    task: PropTypes.object,
    removeTask: PropTypes.removeTask,
    updateTask: PropTypes.func
};
export default TaskRow;
