import React from 'react';
import icon from '../image/icon-yellow.png';

const Icon = ({size}) => (
  <img className={`Icon-${size}`} src={icon} alt="LOGO"/>
)

export default Icon;