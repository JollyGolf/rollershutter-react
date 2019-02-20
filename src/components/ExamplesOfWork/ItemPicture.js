import React, { Component } from 'react';
import Photo from './../Gallery/Photo.js';

class ItemPicture extends Component {

  render() {
    return (
      <div className="ItemPicture" onClick={() => {this.props.getSourcePicture(this.props.text)}}>
        <Photo content="item-picture" srcImage={ this.props.text } size="s"/>
      </div>
    )
  }
}

export default ItemPicture;
