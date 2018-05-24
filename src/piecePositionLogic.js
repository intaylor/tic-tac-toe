import React from 'react';
import PieceX from './pieceX';
import PieceO from './pieceO';
import EmptyCell from './emptyCell';
import { pieceStyle } from './reactCSS/componentStyles';
import { socket } from './socket';

var getPieces = function(state) {
  var boardCells = state.gameState.boardState;
  var currentCells = [];

  for (var rowNum = 0; rowNum < 3; rowNum++) {
    for (var colNum = 0; colNum < 3; colNum++) {
      let position = (rowNum*3) + colNum;
      var identifier = '' + rowNum + colNum;
      var handleCellSelect = function() {
        socket.emit('add piece', { position, player: socket.piece });
      };

      if (state.gameState.gameOver) {
        handleCellSelect = () => {};
      }
      var Piece = EmptyCell;

      if ( boardCells[rowNum * 3 + colNum] === 'X' ) {
        Piece = PieceX;
      }

      if ( boardCells[rowNum * 3 + colNum] === 'O' ) {
        Piece = PieceO;
      }

      currentCells.push(
        <Piece key={ identifier } style={ pieceStyle }
          handleCellSelect={ handleCellSelect }
        />
      );
      
    }
  }

  return currentCells;
}

export default getPieces;
