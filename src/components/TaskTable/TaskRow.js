import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';


class TaskRow extends Component {
  changeTaskProp(propName, value) {
        this.props.updateTask(this.props.task.id, {
            [propName]: value
        });
    }

    render() {
        const { task, removeTask } = this.props;
        return (
          <Table.Row>
            <Table.Cell>{task.id}</Table.Cell>

              <Table.Cell><input type="checkbox" checked={task.complited} onChange={(ev) =>
                  this.changeTaskProp('complited', ev.target.checked)
              } /> </Table.Cell>
              <Table.Cell>{task.title}</Table.Cell>
              <Table.Cell>{task.priority}</Table.Cell>
              <Table.Cell>{task.date}</Table.Cell>
              <Table.Cell><Button basic color='red' icon='remove'  onClick={() => removeTask(task.id)}></Button></Table.Cell>
          </Table.Row>
        );
    }
}
TaskRow.propTypes = {
    task: PropTypes.object,
    removeTask: PropTypes.removeTask,
    updateTask: PropTypes.func
};
export default TaskRow;
