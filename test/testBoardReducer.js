import expect from 'expect';
import deepFreeze from 'deep-freeze';
import boardReducer from '../src/stateManagement/reducers/boardReducer.js';
import { describe, it } from 'mocha'; // Not required, but shows where these functions come from

describe('Board Reducer', function() {
  it('returns a default state if passed an undefined state', function() {
    const stateAfter = ['', '', '', '', '', '', '', '', ''];
    const stateBefore = undefined;
    const action = {};

    expect(
      boardReducer(stateBefore, action)
    ).toEqual(stateAfter);
  })

  it('passes back the same state if given an invalid action', function() {
    const stateBefore = ['', 'X', '', '', 'O', '', '', '', ''];
    const stateAfter = ['', 'X', '', '', 'O', '', '', '', ''];
    const action = {};

    deepFreeze(stateBefore);

    expect(
      boardReducer(stateBefore, action)
    ).toEqual(stateAfter);
  });

  it('adds a piece to the board', function() {
    const stateBefore = ['', '', '', '', '', '', '', '', ''];
    const stateAfter = ['X', '', '', '', '', '', '', '', ''];
    const action = {
      type:'ADD_PIECE',
      piece: 'X',
      position: 0
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      boardReducer(stateBefore, action)
    ).toEqual(stateAfter);
  })

  it('does not replace an existing piece on the board', function() {

    const stateBefore = ['O', '', '', '', '', '', '', '', ''];
    const stateAfter = ['O', '', '', '', '', '', '', '', ''];
    const action = {
      type:'ADD_PIECE',
      piece: 'X',
      position: 0
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      boardReducer(stateBefore, action)
    ).toEqual(stateAfter);
  })

  it('resets the game board to an empty board', function() {
    const stateBefore = ['X', 'X', 'O', 'X', 'O', 'O', '', 'O', ''];
    const stateAfter = ['', '', '', '', '', '', '', '', ''];
    const action = {
      type:'RESET_BOARD'
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      boardReducer(stateBefore, action)
    ).toEqual(stateAfter);
  })
})
