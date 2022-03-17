import React from 'react';
import Cell from './Cell';

const SudokuBoard = ({ boardState, onSelectCell, selectedCell }) => {
  const cells = boardState.map((config) => {
    const isSelected =
      selectedCell && selectedCell.position === config.position;
    return (
      <Cell
        config={config}
        key={config.position}
        onSelectCell={onSelectCell}
        isSelected={isSelected}
      />
    );
  });

  return <div className="sudokuBoard">{cells}</div>;
};

export default SudokuBoard;
