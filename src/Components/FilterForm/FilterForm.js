import React, { Component } from 'react';
import './FilterForm.css';
import SearchInput from '../SearchInput/SearchInput.js';
import DateSelect from '../DateSelect/DateSelect.js';
import PropTypes from 'prop-types';


class FilterForm extends Component {
  render() {
    return (
      <form name={this.props.name} className="toDoListForm">
        <fieldset>
          <legend>{this.props.title}</legend>
          <input
            type="checkbox"
            checked={this.props.filter.showCompleted}
            onChange={(ev) => this.props.onFilterUpdate({ showCompleted: ev.target.checked })} ></input>
          <label>Show complited</label>
          <DateSelect name="dateFrom" title="DateFrom" />
          <DateSelect name="dateTo" title="DateTo" />
          <br />
          <SearchInput name="searchText" className="fullWidth" title="Text search (title+description)" />
        </fieldset>
      </form>

    )
  }
}
FilterForm.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  onFilterUpdate: PropTypes.func,
  filter: PropTypes.object
};
export default FilterForm;
