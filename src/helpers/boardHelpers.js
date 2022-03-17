const getRandomBoard = () => {
  //okay so its not random yet.
  // Boards are stored as full rows, left to right, then onto the next line.
  // The filled is the same, 1 being a static number on the board, 0 requiring user to guess it.
  /* const boardFromFrontCover = {
    numbers: [
      8, 3, 1, 4, 2, 9, 7, 6, 5, 6, 4, 7, 5, 8, 3, 2, 1, 9, 9, 5, 2, 7, 1, 6, 8,
      4, 3, 5, 1, 4, 6, 3, 7, 9, 2, 8, 2, 6, 3, 8, 9, 5, 1, 7, 4, 7, 8, 9, 1, 4,
      2, 5, 3, 6, 3, 7, 8, 9, 6, 1, 4, 5, 2, 1, 9, 6, 2, 5, 4, 3, 8, 7, 4, 2, 5,
      3, 7, 8, 6, 9, 1,
    ],
    filled: [
      0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
      1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0,
      0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0,
      1, 0, 0, 1, 1, 0,
    ],
  }; */

  const boardIScrewedUp1 = {
    numbers: [
      2, 1, 4, 6, 3, 8, 7, 9, 5, 8, 6, 7, 5, 4, 9, 1, 3, 2, 5, 3, 9, 7, 2, 1, 4,
      8, 6, 4, 2, 6, 8, 1, 5, 9, 7, 3, 1, 5, 8, 9, 7, 3, 6, 2, 4, 9, 7, 3, 2, 6,
      4, 5, 1, 8, 6, 9, 1, 3, 5, 2, 8, 4, 7, 3, 8, 5, 4, 9, 7, 2, 6, 1, 7, 4, 2,
      1, 8, 6, 3, 5, 9,
    ],
    filled: [
      0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1,
      1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0,
      0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0,
      0, 0, 1, 0, 1, 0,
    ],
  };
  return boardIScrewedUp1;
};

const convertBoardToState = (board) => {
  // Board is converted into a stateful array of objects, in rows left to right
  return board.numbers.map((number, index) => {
    if (board.filled[index]) {
      return {
        type: 'STATIC',
        position: index,
        data: { value: number },
      };
    } else {
      return {
        type: 'EMPTY',
        position: index,
        data: { trueValue: number },
      };
    }
  });
};

export const getRandomBoardAsState = () => {
  return convertBoardToState(getRandomBoard());
};
