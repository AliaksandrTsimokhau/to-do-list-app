import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import HeaderColumnSort from './HeaderColumnSort';
import PropTypes from 'prop-types';

class RowHeadTable extends Component {
  render(){

     const orderBy = (name) => (order) => this.props.setOrder(`${order ? '' : '-'}${name}`);

    return(
      <Table.Header>
        <Table.Row>
        <HeaderColumnSort setSort={orderBy('id')} columnName="Id" />
        <HeaderColumnSort setSort={orderBy('complited')} columnName="Done" />
        <HeaderColumnSort setSort={orderBy('title')} columnName="Title" />
        <HeaderColumnSort columnname="Priority" />
        <HeaderColumnSort columnName="Date"/>
        <HeaderColumnSort columnName="Remove"/>
      </Table.Row>
    </Table.Header>
    )
  }
}

RowHeadTable.propTypes = {
  setOrder: PropTypes.func
}
 export default RowHeadTable;
