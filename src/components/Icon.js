import React, { Component } from 'react';
import icon from '../image/icon-yellow.png';
class Icon extends Component {
  render() {
  	const { size } = this.props;
    return (
      <img className={`Icon-${size}`} src={icon} alt="LOGO"/>
    );
  }
}

export default Icon;
