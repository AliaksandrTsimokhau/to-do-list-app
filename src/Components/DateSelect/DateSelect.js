import React, { Component } from 'react';
import './DateSelect.css';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';


class DateSelect extends Component {



  render() {

let date = new Date();

    return (
      <Input type="date" name={this.props.name} value="2018-01-18" onChange={this.handleChange}/>


    )
  }
}

DateSelect.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

export default DateSelect;
