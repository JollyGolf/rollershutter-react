import React from 'react';
import Photo from './../Gallery/Photo.js';

const FullPicture = ({srcImg}) => (
  <div className="FullPicture">
	<Photo content="full-size-picture" srcImage={ srcImg } size="l-absolute"/>
  </div>
)

export default FullPicture;