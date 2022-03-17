import React from 'react';
import NumpadSelector from './NumpadSelector';

const NotInput = ({ onSetNots, currentlyNot }) => {
  const onNumberSelect = (number) => {
    // return onSetNots with the new array of numbers
    if (currentlyNot.indexOf(number) === -1) {
      onSetNots([...currentlyNot, number].sort());
    } else {
      onSetNots(currentlyNot.filter((item) => item !== number));
    }
  };

  return (
    <div className="input notContains">
      <h4>It's definitely not:</h4>
      <NumpadSelector
        onNumberSelect={onNumberSelect}
        currentlySelected={currentlyNot}
      />
      <button
        className="clearButton"
        onClick={() => {
          onSetNots([]);
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default NotInput;
