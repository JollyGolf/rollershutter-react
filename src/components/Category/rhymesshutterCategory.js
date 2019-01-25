import React, { Component } from 'react';

class RhymesShutterCategory extends Component {
  render() {
    return (
      <div className="RhymesShutterCategory">
      	Категория - {this.props.content}
      </div>
    );
  }
}

export default RhymesShutterCategory;
