import React, {Component} from 'react';
import './AddTaskForm.css';
import SearchInput from '../SearchInput/SearchInput.js';
import PrioritySelect from './PrioritySelect.js'
import DateSelect from '../DateSelect/DateSelect.js';
import PropTypes from 'prop-types';

export class AddTaskForm extends Component {
onSubmit(ev){
  ev.prvevntDefault();
  let formData = [...ev.target.querySelectorAll('[name]')]
  .reduce((hash,item) =>({
    ...hash,
    [item.getAttribute('name')]:item.value
  }),{});
  this.props.onSubmit(formData);
  ev.target.reset();
}
  render(){
    return(
      <form className="toDoListForm" onSubmit={this.onSubmit.bind(this)}>
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
    title: PropTypes.string
}
