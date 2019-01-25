import React, { Component } from 'react';

class RollerShutterCategory extends Component {
  render() {
    return (
      <div className="RollerShutterCategory">
      	Категория - {this.props.content}
      </div>
    );
  }
}

export default RollerShutterCategory;
