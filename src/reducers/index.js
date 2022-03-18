import { combineReducers } from 'redux';
import boardStateReducer from './boardStateReducer';
import selectedCellReducer from './selectedCellReducer';

export default combineReducers({
  boardState: boardStateReducer,
  selectedCell: selectedCellReducer,
});
