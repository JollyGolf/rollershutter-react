import React from 'react';

const Text = ({text, type}) => {
  if(type === "title") {
    return (
      <div className="Text Text-size-l">&nbsp;&nbsp;&nbsp;{text}</div>
    );
  }
  else {
    return (
      <div className="Text">&nbsp;&nbsp;&nbsp;{text}</div>
    );
  }
}

export default Text;