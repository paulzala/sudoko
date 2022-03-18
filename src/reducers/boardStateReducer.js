const boardStateReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_BOARD_STATE':
      return action.payload;
    default:
      return state;
  }
};

export default boardStateReducer;
