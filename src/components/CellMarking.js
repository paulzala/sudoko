import React from 'react';

const CellMarking = ({ marking }) => {
  let text = null;
  let className = '';
  if (marking === 'NOT') {
    text = '\u00D7';
    className = 'notContains';
  } else if (marking === 'COULD') {
    text = '\u2022';
    className = 'couldContain';
  }
  return <div className={`cellMarking ${className}`}>{text}</div>;
};

export default CellMarking;
