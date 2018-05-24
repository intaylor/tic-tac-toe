import expect from 'expect';
import deepFreeze from 'deep-freeze';
import gameReducer from '../src/stateManagement/reducers/gameReducer.js';
import { describe, it } from 'mocha'; // Not required, but shows where these functions come from

describe('Game Reducer', function() {
  it('returns a default state if passed an undefined state', function() {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = {
      gameOver: false,
      currentPlayer: 'X',
      boardState: ['', '', '', '', '', '', '', '', '']
    };

    expect(
      gameReducer(stateBefore, action)
    ).toEqual(stateAfter);
  })

  it('passes back the same state if given an invalid action', function() {
    const stateBefore = {
      gameOver: false,
      currentPlayer: 'X',
      boardState: ['', '', '', 'O', '', '', '', '', '']
    };
    const stateAfter = {
      gameOver: false,
      currentPlayer: 'X',
      boardState: ['', '', '', 'O', '', '', '', '', '']
    };
    const action = {};
    deepFreeze(stateBefore);

    expect(
      gameReducer(stateBefore, action)
    ).toEqual(stateAfter);
  })

  it('switches a players turn when a piece is placed', function() {
    const stateBefore = {
      gameOver: false,
      currentPlayer: 'X',
      boardState: ['', '', '', '', '', '', '', '', '']
    };
    const stateAfter = {
      gameOver: false,
      currentPlayer: 'O',
      boardState: ['X', '', '', '', '', '', '', '', '']
    };
    const action = {
      type:'ADD_PIECE',
      piece: 'X',
      position: 0
    };
    deepFreeze(action);
    deepFreeze(stateBefore);

    expect(
      gameReducer(stateBefore, action)
    ).toEqual(stateAfter);
  })

  it('does not skip a players turn when the action is invalid', function() {
    const stateBefore = {
      gameOver: false,
      currentPlayer: 'X',
      boardState: ['O', '', '', '', '', '', '', '', '']
    };
    const action = {
      type:'ADD_PIECE',
      piece: 'X',
      position: 0
    };
    deepFreeze(action);
    deepFreeze(stateBefore);

    expect(
      gameReducer(stateBefore, action)
    ).toEqual(stateBefore);
  })

  it('does not allow adding pieces after the game is over', function() {
    const stateBefore = {
      gameOver: true,
      currentPlayer: 'X',
      boardState: ['O', '', 'X', 'O', 'X', 'X', 'O', '', '']
    };
    const action = {
      type:'ADD_PIECE',
      piece: 'X',
      position: 8
    };
    deepFreeze(action);
    deepFreeze(stateBefore);

    expect(
      gameReducer(stateBefore, action)
    ).toEqual(stateBefore);
  })

  it('allows resetting the board after the game is over', function() {
    const stateBefore = {
      gameOver: true,
      currentPlayer: 'X',
      boardState: ['O', '', 'X', 'O', 'X', 'X', 'O', '', '']
    };
    const stateAfter = {
      gameOver: false,
      currentPlayer: 'X',
      boardState: ['', '', '', '', '', '', '', '', '']
    };
    const action = { type:'RESET_BOARD' };

    deepFreeze(action);
    deepFreeze(stateBefore);

    expect(
      gameReducer(stateBefore, action)
    ).toEqual(stateAfter);
  })

})
