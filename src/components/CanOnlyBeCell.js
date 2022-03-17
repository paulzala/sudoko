import React from 'react';

const CanOnlyBeCell = ({ notContains }) => {
  const canOnlyBe = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
    (num) => notContains.indexOf(num) === -1
  );
  return <div className="canOnlyBeCell">{canOnlyBe}</div>;
};

export default CanOnlyBeCell;
