import React, {Component} from 'react';
import './AddTaskForm.css';
import SearchInput from '../SearchInput/SearchInput.js';
import PrioritySelect from './PrioritySelect.js'
import DateSelect from '../DateSelect/DateSelect.js';
import PropTypes from 'prop-types';
import { Form, TextArea } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

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
          <Input name="title" title="Title"  placeholder='Title'/>
          <PrioritySelect name="priority"/>
          <DateSelect name="date" title="Date" value="Date"/>
          <Form>
            <TextArea name="descript" autoHeight placeholder='Description' style={{ minHeight: 100 }} />
          </Form>
          <Input type="submit" className="submit" value="Add"></Input>
        </fieldset>
      </form>
    )
  }
}

AddTaskForm.PropTypes={
    title: PropTypes.string
}
