import React, { Component } from 'react';
import PlisseCategory from './../Category/plisseCategory.js';
import RhymesShutterCategory from './../Category/rhymesshutterCategory.js';
import RollerShutterCategory from './../Category/rollershutterCategory.js';

class CategoryField extends Component {
  render() {
  	if(this.props.content === "rollershutter") {
  	  return (
  	  	<div className="Field">
  	  	  <RollerShutterCategory type={this.props.type} content={this.props.content} />
  	  	</div>
  	  );
  	}
  	else if(this.props.content === "plisse") {
  	  return (
  	  	<div className="Field">
  	  	  <PlisseCategory type={this.props.type} content={this.props.content} />
  	  	</div>
  	  );
  	}
  	else if(this.props.content === "rhymesshutter") {
  	  return (
  	  	<div className="Field">
  	  	  <RhymesShutterCategory type={this.props.type} content={this.props.content} />
  	  	</div>
  	  );
  	}
  }
}

export default CategoryField;
