import React, { Component } from 'react';

class Text extends Component {
  render() {
    return (
      <div className="Text">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.text}
      </div>
    );
  }
}

export default Text;