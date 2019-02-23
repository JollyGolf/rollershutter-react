import React, { Component } from 'react';

class Text extends Component {
  render() {
  	if(this.props.type === "title") {
  	  return (
        <div className="Text Text-size-l">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.text}
        </div>
      );
  	}
  	else {
  	  return (
        <div className="Text">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.text}
        </div>
      );
  	}
    
  }
}

export default Text;