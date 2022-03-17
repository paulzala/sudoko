import React, { useState } from 'react'
import { getRandomBoardAsState } from '../helpers/boardHelpers';
import SudokuBoard from './SudokuBoard';
import GuessInput from './GuessInput';
import NotInput from './NotInput';
import CouldInput from './CouldInput';

const boardInitState = getRandomBoardAsState(); //TODO actually fetch or generate random

const App = () => {
  const [boardState, setBoardState] = useState(boardInitState);
  const [showInput, setShowInput] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  const onSelectCell = (config) => {
    if (config.type !== 'STATIC') {
      // If the cell type is empty, initialise the data properties so that the cell will work properly.
      if (config.type === 'EMPTY') {
        config.data = {
          guessedValue: null,
          notContains: [],
          couldContain: [],
        };
        config.type = 'MARKED';
      }

      setSelectedCell(config);
      setShowInput(true);
    }
  };

  const onGuessSubmit = (number) => {
    setShowInput(false);
    let config = boardState;
    config[selectedCell.position].data.guessedValue = number;
    config[selectedCell.position].type = number ? 'GUESSED' : 'MARKED';
    setBoardState(config);
    setSelectedCell(null);
  };

  const onSetNots = (notNumbers) => {
    let newConfig = boardState.map((c) => {
      if (c.position === selectedCell.position) {
        c.data.notContains = notNumbers;
        c.type = 'MARKED'; // In case it was simply empty before
        if (!c.data.hasOwnProperty('couldContains')) {
          c.data.couldContains = []; // initialise this if not yet set.
        }
      }
      return c;
    });
    setBoardState(newConfig);
  };

  const onSetCoulds = (couldNumbers) => {
    let newConfig = boardState.map((c) => {
      if (c.position === selectedCell.position) {
        c.data.couldContain = couldNumbers;
        c.type = 'MARKED'; // In case it was simply empty before
        if (!c.data.hasOwnProperty('notContains')) {
          c.data.notContains = []; // initialise this if not yet set.
        }
      }
      return c;
    });
    setBoardState(newConfig);
  };

  const selectedCellType = selectedCell ? selectedCell.type : null;

  const currentlyGuessed =
    selectedCellType === 'GUESSED' ? selectedCell.data.guessedValue : null;
  const currentlyMarkedNot =
    selectedCellType === 'MARKED' ? selectedCell.data.notContains : [];
  const currentlyMarkedCould =
    selectedCellType === 'MARKED' ? selectedCell.data.couldContain : [];
  const showMarkingInputs =
    selectedCellType === 'EMPTY' || selectedCellType === 'MARKED';

  return (
    <div>
      <h1>Sudoku!</h1>
      <SudokuBoard
        boardState={boardState}
        onSelectCell={onSelectCell}
        selectedCell={selectedCell}
      />

      {showInput ? (
        <div className="inputs">
          <GuessInput
            onGuessSubmit={onGuessSubmit}
            currentlyGuessed={currentlyGuessed}
          />
          {showMarkingInputs ? (
            <NotInput onSetNots={onSetNots} currentlyNot={currentlyMarkedNot} />
          ) : null}
          {showMarkingInputs ? (
            <CouldInput
              onSetCoulds={onSetCoulds}
              currentlyCould={currentlyMarkedCould}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default App;