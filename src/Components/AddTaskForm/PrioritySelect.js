import React, { Component } from 'react';
import './AddTaskForm.css';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';

class PrioritySelect extends Component {
  state = {
      selectedOption: '',
    }

      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
      }

  render() {
        const { selectedOption } = this.state;
      	const value = selectedOption && selectedOption.value;

    return (
      <Select
        name={this.props.name}
        onChange={this.handleChange}
        defualtvalue='High'
        options={[
          { value: 'Normal', label: 'Normal' },
          { value: 'High', label: 'High' },
        ]} >
      </Select>
    )
  }
}




PrioritySelect.propTypes = {
  name: PropTypes.string
};
export default PrioritySelect;
