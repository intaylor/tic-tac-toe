import React from 'react';
import Grid from './grid';
import getPieces from './piecePositionLogic';
import { gameBoardStyle } from './reactCSS/componentStyles';

const GameBoard = props => (

  <div style={ gameBoardStyle }>
    <Grid/>
    { getPieces(props.state) }
  </div>
  
)

GameBoard.propTypes = {
  state: React.PropTypes.object.isRequired
};

export default GameBoard;
