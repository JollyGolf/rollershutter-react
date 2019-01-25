import React, { Component } from 'react';

class HideMenuBar extends Component {
  render() {
    if(this.props.isMountMenu) {
      return (
        <div className="items-of-catalog">
          <div className="item-of-catalog" onClick={() => {this.props.getTypeContent("categoryType", "rollershutter")}}>Рулонные шторы</div>
          <div className="item-of-catalog" onClick={() => {this.props.getTypeContent("categoryType", "plisse")}}>Плиссе</div>
          <div className="item-of-catalog" onClick={() => {this.props.getTypeContent("categoryType", "rhymesshutter")}}>Римские шторы</div>
        </div>
      );
    }
    else return null;
  }
}

export default HideMenuBar;
