import React, { Component } from 'react';
import Icon from './Icon.js';
import Title from './Title.js';
import MenuBar from './MenuBar.js';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="imitate-Contacts"/>
        <div className="menu-bar menu-bar__font">
          <div className="icon-and-title">
            <Icon size="s"/>
              &nbsp;&nbsp;
            <Title />
          </div>
          <MenuBar getTypeContent={this.props.getTypeContent}/>
        </div>
      </div>
    );
  }
}

export default Header;
