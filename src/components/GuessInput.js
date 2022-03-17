import React from 'react';
import NumpadSelector from './NumpadSelector';

const GuessInput = ({ onGuessSubmit, currentlyGuessed }) => {
  return (
    <div className="input guess">
      <h4>Take a guess:</h4>
      <NumpadSelector
        onNumberSelect={onGuessSubmit}
        currentlySelected={[currentlyGuessed]}
      />
      <button
        className="clearButton"
        onClick={() => {
          onGuessSubmit(null);
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default GuessInput;
