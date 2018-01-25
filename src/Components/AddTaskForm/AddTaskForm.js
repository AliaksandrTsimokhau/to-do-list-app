import React, {Component} from 'react';
import './AddTaskForm.css';
import SearchInput from '../SearchInput/SearchInput.js';
import PrioritySelect from './PrioritySelect.js'
import DateSelect from '../DateSelect/DateSelect.js';
import PropTypes from 'prop-types';

export class AddTaskForm extends Component {
  render(){
    return(
      <form name={this.props.name} className="toDoListForm">
        <fieldset>
          <legend>{this.props.title}</legend>
          <SearchInput name="title" title="Title"/>
          <PrioritySelect name="priority"/>
          <DateSelect name="date" title="Date"/>
          <textarea name="descript" placeholder="Description"/>
          <input type="submit" class="submit" value="Add"></input>
        </fieldset>
      </form>
    )
  }
}

AddTaskForm.PropTypes={
  name: PropTypes.string,
  title: PropTypes.string
}
