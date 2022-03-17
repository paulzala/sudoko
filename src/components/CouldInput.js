import React from 'react';
import NumpadSelector from './NumpadSelector';

const CouldInput = ({ onSetCoulds, currentlyCould }) => {
  const onNumberSelect = (number) => {
    // return onSetCoulds with the new array of numbers
    if (currentlyCould.indexOf(number) === -1) {
      onSetCoulds([...currentlyCould, number].sort());
    } else {
      onSetCoulds(currentlyCould.filter((item) => item !== number));
    }
  };

  return (
    <div className="input couldContain">
      <h4>It could contain:</h4>
      <NumpadSelector
        onNumberSelect={onNumberSelect}
        currentlySelected={currentlyCould}
      />
      <button
        className="clearButton"
        onClick={() => {
          onSetCoulds([]);
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default CouldInput;
