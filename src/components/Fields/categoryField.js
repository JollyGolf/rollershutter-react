import React from 'react';
import PlisseCategory from './../Category/plisseCategory.js';
import RhymesShutterCategory from './../Category/rhymesshutterCategory.js';
import RollerShutterCategory from './../Category/rollershutterCategory.js';

const CategoryField = ({content, type}) => {
  if(content === "rollershutter") {
    return (
      <div className="Field">
        <RollerShutterCategory type={type} content={content} />
      </div>
    );
  }
  else if(content === "plisse") {
    return (
      <div className="Field">
        <PlisseCategory type={type} content={content} />
      </div>
    );
  }
  else if(content === "rhymesshutter") {
    return (
      <div className="Field">
        <RhymesShutterCategory type={type} content={content} />
      </div>
    );
  }
}

export default CategoryField;
