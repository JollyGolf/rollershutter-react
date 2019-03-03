import React from 'react';
import Photo from './../Gallery/Photo.js';

const ItemPicture = ({text, getSourcePicture}) => (
  <div className="ItemPicture" onClick={() => {getSourcePicture(text)}}>
    <Photo content="item-picture" srcImage={text} size="s"/>
  </div>
)

export default ItemPicture;