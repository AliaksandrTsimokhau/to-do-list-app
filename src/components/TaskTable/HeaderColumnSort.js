import React, { Component } from 'react';
import './TaskTable.css';
import PropTypes from 'prop-types';


class HeaderColumnSort extends Component {
  drawSortButtons() {
    return (
      <div>
        <div className="sortUp" onClick={() => this.props.setSort(true)}></div>
        <div className="sortDown" onClick={() => this.props.setSort(false)}></div>
      </div>
    );
  }
  render() {
    return (
      <th>
        <label>{this.props.columnName}</label>
        {this.props.setSort && this.drawSortButtons()}
      </th>
    )
  }
}
HeaderColumnSort.propTypes = {
  columnName: PropTypes.string,
  setSort: PropTypes.func
};
export default HeaderColumnSort;
