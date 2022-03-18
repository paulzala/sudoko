const selectedCellReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_SELECTED_CELL':
      return action.payload;
    default:
      return state;
  }
};

export default selectedCellReducer;
