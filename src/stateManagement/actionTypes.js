// Action Types
export const ADD_PIECE = 'ADD_PIECE';
export const RESET_BOARD = 'RESET_BOARD';

// Players
export const PLAYERS = {
  X: 'X',
  O: 'O'
};

// Action Creators
export function addPiece (position, player) {

  return {
    type: ADD_PIECE,
    piece: player,
    position
  };
  
};

export function resetBoard () {
  return { type: RESET_BOARD };
};
