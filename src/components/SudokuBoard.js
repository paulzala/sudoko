import React from 'react';
import Cell from './Cell';

const SudokuBoard = () => {
  // This components will be responsible for maintaining state of the board
  // and knowing how it works. The app above shouldn't need to know for now.

  const tempConfigStatic = {
    type: 'STATIC',
    data: {
      value: 4,
    },
  };

  const tempConfigGuessed = {
    type: 'GUESSED',
    data: {
      trueValue: 9,
      guessedValue: 5,
    },
  };

  const tempConfigEmpty = {
    type: 'EMPTY',
    data: {
      trueValue: 7,
    },
  };

  return (
    <div className="sudokuBoard">
      <div className="quadrantRow">
        <div className="quadrant">
          <div className="cellRow">
            <Cell config={tempConfigStatic} />
            <Cell config={tempConfigGuessed} />
            <Cell config={tempConfigEmpty} />
          </div>
          <div className="cellRow">
            <div className="cell">3</div>
            <div className="cell">3</div>
            <div className="cell">3</div>
          </div>
          <div className="cellRow">
            <div className="cell">3</div>
            <div className="cell">3</div>
            <div className="cell">3</div>
          </div>
        </div>

        <div className="quadrant">
          <div className="cellRow">
            <div className="cell">3</div>
            <div className="cell">3</div>
            <div className="cell">3</div>
          </div>
          <div className="cellRow">
            <div className="cell">3</div>
            <div className="cell">3</div>
            <div className="cell">3</div>
          </div>
          <div className="cellRow">
            <div className="cell">3</div>
            <div className="cell">3</div>
            <div className="cell">3</div>
          </div>
        </div>

        <div className="quadrant">
          <div className="cellRow">
            <div className="cell">3</div>
            <div className="cell">3</div>
            <div className="cell">3</div>
          </div>
          <div className="cellRow">
            <div className="cell">3</div>
            <div className="cell">3</div>
            <div className="cell">3</div>
          </div>
          <div className="cellRow">
            <div className="cell">3</div>
            <div className="cell">3</div>
            <div className="cell">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SudokuBoard;
