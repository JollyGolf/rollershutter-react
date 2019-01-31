import React, { Component } from 'react';
import Gallery from './../Gallery/Gallery.js';

class RhymesShutterCategory extends Component {
  render() {
    return (
      <div className="RhymesShutterCategory">
      <Gallery content={this.props.content} />
      	Категория - {this.props.content}
      </div>
    );
  }
}

export default RhymesShutterCategory;
