import React, { Component } from 'react';
import './DateSelect.css';
import PropTypes from 'prop-types';


class DateSelect extends Component {
  render() {
    let date = new Date();
    return (
      <input type="date" name={this.props.name} value="2018-01-18" />
    )
  }
}
DateSelect.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string
};
export default DateSelect;
