import React, { useState } from 'react';
import { getRandomBoardAsState } from '../helpers/boardHelpers';
import SudokuBoard from './SudokuBoard';
import GuessInput from './GuessInput';
import NotInput from './NotInput';
import CouldInput from './CouldInput';
import { connect } from 'react-redux';
import { setBoardState, setSelectedCell } from '../actions';

const SudokuGame = ({
  boardState,
  setBoardState,
  selectedCell,
  setSelectedCell,
}) => {
  /** Redux is responsible for tracking the top-level states of boardState and selectedCell,
   * as these are likely to be things that the App in general will need to manipulate.
   * Anything else concerning the SudokuGame itself will be managed internally with useState.
   */

  //const [boardState, setBoardState] = useState(boardInitState);
  //const [selectedCell, setSelectedCell] = useState(null);
  const [showInput, setShowInput] = useState(false);

  if (!boardState) {
    // A temporary filler for making the game render with something.
    // Eventually there'll probably be menus etc that let you select your board or load a saved game.
    setBoardState(getRandomBoardAsState());
    return null;
  }

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
    <>
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    boardState: state.boardState,
    selectedCell: state.selectedCell,
  };
};

export default connect(mapStateToProps, {
  setBoardState,
  setSelectedCell,
})(SudokuGame);
