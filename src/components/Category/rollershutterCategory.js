import React, { Component } from 'react';
import Gallery from './../Gallery/Gallery.js';

class RollerShutterCategory extends Component {
  render() {
    return (
      <div className="RollerShutterCategory">
      	<Gallery content={this.props.content} />
      	Категория - {this.props.content}
      </div>
    );
  }
}

export default RollerShutterCategory;
