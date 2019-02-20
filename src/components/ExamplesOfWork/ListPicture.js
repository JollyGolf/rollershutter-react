import React, { Component } from 'react';
import ItemPicture from './ItemPicture.js';
import { examplesOfWorkArray } from './../../image/image.js';

class ListPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startPoint: 0,
      endPoint: examplesOfWorkArray.length
    }
  }
  showPhoto(){
  	return examplesOfWorkArray.slice(this.state.startPoint, this.state.endPoint).map((item, index) => { 
	  return (
        <ItemPicture key={index} text={item} getSourcePicture={this.props.getSourcePicture}/>
      );
  	});
  }
  render() {
    return (
      <div className="ListPicture">
        { this.showPhoto() }
      </div>
    )
  }
}

export default ListPicture;
