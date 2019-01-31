import React, { Component } from 'react';
import Gallery from './../Gallery/Gallery.js';

class PlisseCategory extends Component {
  render() {
    return (
      <div className="PlisseCategory">
      	<Gallery content={this.props.content} />
      	Категория - {this.props.content}
      </div>
    );
  }
}

export default PlisseCategory;
