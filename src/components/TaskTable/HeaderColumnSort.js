import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Icon, Table } from 'semantic-ui-react'


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
        <Table.HeaderCell>
          {this.props.columnName}
        {this.props.setSort && this.drawSortButtons()}
      </Table.HeaderCell>
    )
  }
}
HeaderColumnSort.propTypes = {
  columnName: PropTypes.string,
  setSort: PropTypes.func
};
export default HeaderColumnSort;
