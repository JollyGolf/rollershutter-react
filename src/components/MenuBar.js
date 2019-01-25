import React, { Component } from 'react';
import HideMenuBar from './HideMenuBar.js';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMountMenu: false
    }
  }
  
  componentDidMount() { }
  onClick() {
    this.setState({isMountMenu: false});
    if(!this.state.isMountMenu) this.setState({isMountMenu: true});
  }
  
  render() {
    return (
      <div className="list-of-items list-of-items__font">
        <div className="item-of-list">Главная</div>
          <i className="fas fa-circle item-of-list item-icon"></i>
        <div className="item-of-list header-catalog">
          <div onClick={this.onClick.bind(this)}>Каталог</div>
          <HideMenuBar isMountMenu={this.state.isMountMenu}/>
        </div>
          <i className="fas fa-circle item-of-list item-icon"></i>
        <div className="item-of-list">Наши работы</div>
          <i className="fas fa-circle item-of-list item-icon"></i>
        <div className="item-of-list">Про нас</div>
      </div>
    );
  }
}

export default MenuBar;
