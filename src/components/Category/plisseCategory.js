import React, { Component } from 'react';

class PlisseCategory extends Component {
  render() {
    return (
      <div className="PlisseCategory">
      	Категория - {this.props.content}
      </div>
    );
  }
}

export default PlisseCategory;
