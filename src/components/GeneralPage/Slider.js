import React, { Component } from 'react';
import { generalPicture } from './../../image/image.js';
import Photo from './../Gallery/Photo.js';

class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemOfSlide: 1
    }
  }
  showPhoto(item){
    return (
      <div className="Slide">
        <Photo content="full-size-picture" srcImage={ generalPicture[item] } size="l"/>
      </div>
    );
  }

  toggleToDown() {
    if(this.state.itemOfSlide !== 0) this.setState({itemOfSlide: this.state.itemOfSlide - 1});
    else this.setState({itemOfSlide: generalPicture.length - 1});
  }

  toggleToUp(){
  	if(this.state.itemOfSlide !== generalPicture.length - 1) this.setState({itemOfSlide: this.state.itemOfSlide + 1});
    else this.setState({itemOfSlide: 0});
  }
  
  render() {
    return (
      <div className="Slider">
    	{this.showPhoto(this.state.itemOfSlide)}
        <div className="optionsOfSlider">
          <i onClick={this.toggleToDown.bind(this)} className="fas fa-arrow-alt-circle-left switchSlide switchSlide-left"></i>
          <i onClick={this.toggleToUp.bind(this)} className="fas fa-arrow-alt-circle-right switchSlide switchSlide-right"></i>
        </div>
      </div>
    );
  }
}

export default Slider;