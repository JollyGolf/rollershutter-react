import React, { Component } from 'react';

class Photo extends Component {
  render() {
    return (
      <img className="Photo" src={this.props.srcImage} alt="pictureOfGallery" content={this.props.content} />
    );
  }
}

export default Photo;
