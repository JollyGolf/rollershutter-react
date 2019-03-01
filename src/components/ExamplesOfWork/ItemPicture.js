import React, { Component, Fragment } from 'react';
import Photo from './../Gallery/Photo.js';

class ItemPicture extends Component {

  render() {
    return (
      <Fragment>
        {/*<div className="number-of-picture">{this.props.index}</div>*/}
      	<div className="ItemPicture" onClick={() => {this.props.getSourcePicture(this.props.text)}}>
          <Photo content="item-picture" srcImage={ this.props.text } size="s"/>
        </div>
      </Fragment>
      
    )
  }
}

export default ItemPicture;
