import React, { Component } from 'react';
import Icon from './Icon.js';
import Title from './Title.js';
import Information from './Information.js';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<Information />
      	<hr />
      	<Icon />
      	<Title />
      	Other header
      </div>
    );
  }
}

export default Header;
