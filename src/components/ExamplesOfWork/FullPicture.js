import React, { Component } from 'react';
import Photo from './../Gallery/Photo.js';

class FullPicture extends Component {

  render() {
    return (
      <div className="FullPicture">
		<Photo content="full-size-picture" srcImage={ this.props.srcImg } size="l-absolute"/>
      </div>
    )
  }
}

export default FullPicture;
