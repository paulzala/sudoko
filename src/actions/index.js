export const setBoardState = (boardConfig) => {
  return { type: 'SET_BOARD_STATE', payload: boardConfig };
};

export const setSelectedCell = (cellConfig) => {
  return { type: 'SET_SELECTED_CELL', payload: cellConfig };
};
