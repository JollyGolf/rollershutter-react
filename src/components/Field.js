import React from 'react';
import MainField from './Fields/mainField.js';
import CategoryField from './Fields/categoryField.js';
import ExampleField from './Fields/exampleField.js';
import DescriptionField from './Fields/descriptionField.js';

const Field = ({type, content}) => {
    if(type === "mainType") {
      return <MainField type={type} content={content} />
    }
    else if(type === "categoryType") {
      return <CategoryField type={type} content={content} />
    }
    else if(type === "exampleType") {
      return <ExampleField type={type} content={content} />
    }
    else if(type === "descriptionType") {
      return <DescriptionField type={type} content={content} />
    }
}

export default Field;