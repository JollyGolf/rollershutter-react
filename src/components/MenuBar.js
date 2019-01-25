import React, { Component } from 'react';
import HideMenuBar from './HideMenuBar.js';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMountMenu: false,
      isActiveItem: false
    }
  }
  
  componentDidMount() { }
  onClick() {
    this.setState({isActiveItem: !this.state.isActiveItem});
    this.setState({isMountMenu: false});
    if(!this.state.isMountMenu) this.setState({isMountMenu: true});
  }
  
  render() {
    return (
      <div className="list-of-items list-of-items__font">
        <div className="item-of-list" onClick={() => {this.props.getTypeContent("mainType", "Default")}}>Главная</div>
          <i className="fas fa-circle item-of-list item-icon"></i>
        <div className="item-of-list header-catalog">
          <div onClick={this.onClick.bind(this)} className={`category-${this.state.isActiveItem}`}>Каталог</div>
          <HideMenuBar isMountMenu={this.state.isMountMenu} getTypeContent={this.props.getTypeContent}/>
        </div>
          <i className="fas fa-circle item-of-list item-icon"></i>
        <div className="item-of-list" onClick={() => {this.props.getTypeContent("exampleType", "Examples")}}>Наши работы</div>
          <i className="fas fa-circle item-of-list item-icon"></i>
        <div className="item-of-list" onClick={() => {this.props.getTypeContent("descriptionType", "Description")}}>Про нас</div>
      </div>
    );
  }
}

export default MenuBar;
