import React from 'react';
import CellMarking from './CellMarking';

const MarkedCell = ({ notContains = [], couldContain = [] }) => {
  const markings = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    .map((num) => {
      let marking;
      if (notContains.includes(num)) {
        marking = 'NOT';
      } else if (couldContain.includes(num)) {
        marking = 'COULD';
      } else {
        marking = null;
      }
      return { marking, num };
    })
    .map(({ marking, num }) => {
      return <CellMarking marking={marking} key={num} number={num} />;
    });
  return <div className="markingGrid">{markings}</div>;
};

export default MarkedCell;
