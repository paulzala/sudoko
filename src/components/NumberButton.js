import React from 'react';

const NumberButton = ({ number, isSelected, onNumberClick }) => {
  const className = `numberButton ${isSelected ? 'selected' : ''}`;
  return (
    <button className={className} onClick={() => onNumberClick(number)}>
      {number}
    </button>
  );
};

export default NumberButton;
