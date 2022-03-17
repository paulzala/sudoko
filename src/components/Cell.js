import React from 'react';
import StaticCell from './StaticCell';
import GuessedCell from './GuessedCell';
import MarkedCell from './MarkedCell';
import CanOnlyBeCell from './CanOnlyBeCell';

const Cell = ({ config, onSelectCell, isSelected }) => {
  const isStatic = config.type === 'STATIC';

  const cellClass = `cell ${isStatic ? 'staticCell' : ''} ${
    isSelected ? 'selected' : ''
  }`;

  const renderMarkedCell = (config) => {
    // determine if enough 'nots' have been marked to switch to 'only' mode, where it lists the only few numbers it can be
    const isCellInOnlyMode = config.data.notContains.length >= 5;

    return isCellInOnlyMode ? (
      <CanOnlyBeCell notContains={config.data.notContains} />
    ) : (
      <MarkedCell
        notContains={config.data.notContains}
        couldContain={config.data.couldContain}
      />
    );
  };

  const onClickCell = (e) => {
    e.preventDefault();
    onSelectCell(config);
  };

  return (
    <div className={cellClass} onClick={onClickCell}>
      {config.type === 'STATIC' ? (
        <StaticCell value={config.data.value} />
      ) : null}
      {config.type === 'GUESSED' ? (
        <GuessedCell guessedValue={config.data.guessedValue} />
      ) : null}
      {config.type === 'MARKED' ? renderMarkedCell(config) : null}
    </div>
  );
};

export default Cell;
