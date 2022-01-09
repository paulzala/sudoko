import React from 'react';
import StaticCell from './StaticCell';
import GuessedCell from './GuessedCell';

const Cell = ({ config }) => {
  console.log(config);
  const isStatic = config.type === 'STATIC';
  const isEmpty = config.type === 'EMPTY';
  const cellClass = `cell ${isStatic ? 'staticCell' : ''}`;

  const cellClicked = (e) => {
    e.preventDefault();
    console.log('clicked', config);
    if (isEmpty) {
      alert('you clicked an empty one');
    }
  };

  return (
    <div className={cellClass} onClick={cellClicked}>
      {config.type === 'STATIC' ? (
        <StaticCell value={config.data.value} />
      ) : null}
      {config.type === 'GUESSED' ? (
        <GuessedCell guessedValue={config.data.guessedValue} />
      ) : null}
    </div>
  );
};

export default Cell;
