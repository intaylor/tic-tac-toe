import boardReducer from './boardReducer';
import { ADD_PIECE, RESET_BOARD, PLAYERS } from '../actionTypes';
const { X, O } = PLAYERS;

function checkIfWon(boardState, action) {
  const newBoard = boardReducer(boardState, action);
  const winningConfigurations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  const hasBeenWon = winningConfigurations.some(function(winningConfiguration) {
    var XHasWon = winningConfiguration.every(function(position) {
      var index = position - 1;
      return newBoard[index] === X;
    });
    var OHasWon = winningConfiguration.every(function(position) {
      var index = position - 1;
      return newBoard[index] === O;
    });

    return XHasWon || OHasWon;
  });
  return hasBeenWon;
}

function getNextPlayer(gameState, action, gameOver) {
  if (gameState.boardState[action.position] !== '' || gameOver) {
    return gameState.currentPlayer;
  }
  return gameState.currentPlayer === X ? O: X;
}

const initialState = {
  currentPlayer: X,
  boardState: boardReducer(undefined, {}),
  gameOver: false
};

const gameReducer = (gameState = initialState, action) => {
  const { boardState, gameOver, currentPlayer } = gameState;

  switch (action.type) {
    case ADD_PIECE:
      if (gameOver || currentPlayer !== action.piece) return gameState;
      var won = checkIfWon(boardState, action);

      return {
        currentPlayer: getNextPlayer(gameState, action, won),
        boardState: boardReducer(boardState, action),
        gameOver: won
      };

    case RESET_BOARD:
      return Object.assign({}, initialState, {
        currentPlayer: gameState.currentPlayer === 'O' ? 'X' : 'O'
      });

    default:
      return gameState;
  }
};

export default gameReducer;
