import React from 'react';
import Photo from './Photo.js';
import {rollershutterArray, plisseArray, rhymeshutterArray, jalousieArray, msqtnetArray} from './../../image/image.js';

const Gallery = ({content}) => {
  function showPhoto(type){
    return type.map((photo, index) => {
      return (
        <Photo content={content} key={ index } srcImage={ photo } size="m"/>
      );
    })
  }
  if(content === "rollershutter") {
    return (
      <div className="Gallery">
        { showPhoto(rollershutterArray) }
      </div>
    );
  }
  if(content === "plisse") {
    return (
      <div className="Gallery">
        { showPhoto(plisseArray) }
      </div>
    );
  }
  if(content === "rhymesshutter") {
    return (
      <div className="Gallery">
        { showPhoto(rhymeshutterArray) }
      </div>
    );
  }
  if(content === "jalousie") {
    return (
      <div className="Gallery">
        { showPhoto(jalousieArray) }
      </div>
    );
  }
  if(content === "msqnet") {
    return (
      <div className="Gallery">
        { showPhoto(msqtnetArray) }
      </div>
    );
  }
}

export default Gallery;