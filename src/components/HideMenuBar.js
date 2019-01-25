import React, { Component } from 'react';

class HideMenuBar extends Component {
  render() {
    if(this.props.isMountMenu) {
      return (
        <div className="items-of-catalog">
          <div className="item-of-catalog">Рулонные шторы</div>
          <div className="item-of-catalog">Плиссе</div>
          <div className="item-of-catalog">Римские шторы</div>
        </div>
      );
    }
    else return null;
  }
}

export default HideMenuBar;
