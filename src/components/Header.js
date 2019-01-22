import React, { Component } from 'react';
import Icon from './Icon.js';
import Title from './Title.js';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<Icon />
      	<Title />
      	Other header
      </div>
    );
  }
}

export default Header;
