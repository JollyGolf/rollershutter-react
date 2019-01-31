import React, { Component } from 'react';
import Photo from './Photo.js';
import {rollershutterArray, plisseArray, rhymeshutterArray} from './../../image/image.js';

class Gallery extends Component {
  showPhoto(type){
  	return type.map((photo, index) => {
      return (
        <Photo content={this.props.content} key={ index } srcImage={ photo } size="m"/>
      );
    })
  }
  render() {
  	if(this.props.content === "rollershutter") {
  	  return (
        <div className="Gallery">
      	  { this.showPhoto(rollershutterArray) }
        </div>
      );
  	}
  	if(this.props.content === "plisse") {
  	  return (
        <div className="Gallery">
      	  { this.showPhoto(plisseArray) }
        </div>
      );
  	}
  	if(this.props.content === "rhymesshutter") {
  	  return (
        <div className="Gallery">
      	  { this.showPhoto(rhymeshutterArray) }
        </div>
      );
  	}
    
  }
}

export default Gallery;
