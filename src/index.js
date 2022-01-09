import React from 'react';
import ReactDom from 'react-dom';
import SudokuBoard from './components/SudokuBoard';

const App = () => {
  return (
    <div>
      <h1>Sudoku!</h1>
      <SudokuBoard />
      <div>Cell:</div>
      <div className="cell">3</div>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
