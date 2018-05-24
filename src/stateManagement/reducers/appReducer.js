import { SET_gameSize } from '../actionTypes';
import gameReducer from './gameReducer';

const getgameSize = ({ currentgameSize, action }) => {

  var { type, gameSize } = action;

  if (type !== SET_gameSize) {
    return currentgameSize;
  }

  return Math.max(gameSize, 0.1);

};

const initialState = {
  gameSize: 1,
  gameState: gameReducer(undefined, {})
};

const appReducer = (state = initialState, action) => {

  return {
    gameSize: getgameSize({ currentgameSize: state.gameSize, action }),
    gameState: gameReducer(state.gameState, action)
  };
  
};

export default appReducer;
