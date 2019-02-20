import React, { Component } from 'react';
import ListPicture from './../ExamplesOfWork/ListPicture.js';
import FullPicture from './../ExamplesOfWork/FullPicture.js';
import { initFullSizePicture } from './../../image/image.js';

class ExampleField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startPoint: 0,
      endPoint: 5,
      srcPicture: initFullSizePicture[0]
    }
  }
  getSourcePicture = (src) => {
    this.setState({srcPicture: src});
  }
  render() {
    return (
      <div className="Field ExampleField">
      	<ListPicture getSourcePicture={this.getSourcePicture}/>
      	<FullPicture srcImg={this.state.srcPicture}/>
      </div>
    );
  }
}

export default ExampleField;
