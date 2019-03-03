import React from 'react';

const Photo = ({size, srcImage, content}) => (
  <img 
    className={`photo-size-${size}`}
    src={srcImage} 
    alt="pictureOfGallery" 
    content={content} 
  />
)

export default Photo;