import React, { Component } from 'react';
import './TaskTable.css';
import HeaderColumnSort from './HeaderColumnSort';
import PropTypes from 'prop-types';

class RowHeadTable extends Component {
  render(){
    return(
      <tr>
        <HeaderColumnSort columnName="Id"/>
        <HeaderColumnSort columnName="Done"/>
        <HeaderColumnSort columnName="Title"/>
        <HeaderColumnSort columnname="Priority" />
        <HeaderColumnSort columnName="Date"/>
        <HeaderColumnSort columnName="Remove"/>

      </tr>
    )
  }
}
