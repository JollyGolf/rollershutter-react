import React, { Component } from 'react';
import Icon from './Icon.js';
import Title from './Title.js';

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
          <div className="list-of-items list-of-items__font">
            <div className="item-of-list">Главная</div>
            <i className="fas fa-circle item-of-list item-icon"></i>
            <div className="item-of-list">Каталог</div>
            <i className="fas fa-circle item-of-list item-icon"></i>
            <div className="item-of-list">Наши работы</div>
            <i className="fas fa-circle item-of-list item-icon"></i>
            <div className="item-of-list">Про нас</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
