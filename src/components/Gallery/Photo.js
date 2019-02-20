import React, { Component } from 'react';

class Photo extends Component {
  render() {
    return (
      <img 
        className={`photo-size-${this.props.size}`}
        src={this.props.srcImage} 
        alt="pictureOfGallery" 
        content={this.props.content} 
      />
    );
  }
}

export default Photo;
