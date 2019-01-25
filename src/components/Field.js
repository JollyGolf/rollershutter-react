import React, { Component } from 'react';

class Field extends Component {
  render() {
  	if(this.props.type === "mainType") {
  	  return (
        <div className="Field">
          {this.props.type}, {this.props.content}
        </div>
      );
  	}
  	else if(this.props.type === "categoryType") {
  	  return (
        <div className="Field">
          {this.props.type}, {this.props.content}
        </div>
      );
  	}
  	else if(this.props.type === "exampleType") {
  	  return (
        <div className="Field">
          {this.props.type}, {this.props.content}
        </div>
      );
  	}
  	else if(this.props.type === "descriptionType") {
  	  return (
        <div className="Field">
          {this.props.type}, {this.props.content}
        </div>
      );
    }
  }
}

export default Field;
