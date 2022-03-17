import React from 'react';
import NumberButton from './NumberButton';

const NumpadSelector = ({ onNumberSelect, currentlySelected }) => {
  const onNumberClick = (number) => onNumberSelect(number);

  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
    const selected = currentlySelected.indexOf(number) !== -1;
    return (
      <NumberButton
        number={number}
        isSelected={selected}
        onNumberClick={onNumberClick}
        key={number}
      />
    );
  });

  return <div className="numpadSelector">{numberButtons}</div>;
};

export default NumpadSelector;
