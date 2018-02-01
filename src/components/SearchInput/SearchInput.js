import React, { Component } from 'react';
import './SearchInput.css';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

class SearchInput extends Component {
    render() {
      return (

    <Input loading icon='user' className={this.props.className} name={this.props.name} type="text" placeholder='SearchInput'></Input>
      )
    }
  }
  SearchInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string
};
export default SearchInput;
