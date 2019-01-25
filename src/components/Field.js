import React, { Component } from 'react';
import MainField from './Fields/mainField.js';
import CategoryField from './Fields/categoryField.js';
import ExampleField from './Fields/exampleField.js';
import DescriptionField from './Fields/descriptionField.js';

class Field extends Component {
  render() {
  	if(this.props.type === "mainType") {
  	  return <MainField type={this.props.type} content={this.props.content} />
  	}
  	else if(this.props.type === "categoryType") {
  	  return <CategoryField type={this.props.type} content={this.props.content} />
  	}
  	else if(this.props.type === "exampleType") {
  	  return <ExampleField type={this.props.type} content={this.props.content} />
  	}
  	else if(this.props.type === "descriptionType") {
  	  return <DescriptionField type={this.props.type} content={this.props.content} />
    }
  }
}

export default Field;
