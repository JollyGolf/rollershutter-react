import React from 'react';
import Icon from './Icon.js';
import Title from './Title.js';
import MenuBar from './Menu/MenuBar.js';

const Header = ({getTypeContent}) => (
  <div className="Header">
    <div className="imitate-Contacts"/>
    <div className="menu-bar menu-bar__font">
      <div className="icon-and-title">
        <Icon size="s"/>
        &nbsp;&nbsp;
        <Title />
      </div>
      <MenuBar getTypeContent={getTypeContent}/>
    </div>
  </div>
)

export default Header;
