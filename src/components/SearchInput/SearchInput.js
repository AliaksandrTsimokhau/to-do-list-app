import React, { Component } from 'react';
import './SearchInput.css';
import PropTypes from 'prop-types';
class SearchInput extends Component {
    render() {
      return (
        <input className={this.props.className} name={this.props.name} type="text" placeholder={this.props.title}></input>
      )
    }
  }
  SearchInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string
};
export default SearchInput;
