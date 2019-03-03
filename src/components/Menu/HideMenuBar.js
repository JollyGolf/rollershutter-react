import React from 'react';

const HideMenuBar = ({isMountMenu, getTypeContent}) => {
  if(isMountMenu) {
    return (
      <div className="items-of-catalog">
        <div className="item-of-catalog" onClick={() => {getTypeContent("categoryType", "rollershutter")}}>Рулонные шторы</div>
        <div className="item-of-catalog" onClick={() => {getTypeContent("categoryType", "plisse")}}>Плиссе</div>
        <div className="item-of-catalog" onClick={() => {getTypeContent("categoryType", "rhymesshutter")}}>Римские шторы</div>
      </div>
    );
  }
  else return null;
}

export default HideMenuBar;