import React from 'react';
import ResetButton from './resetButton';
import GameBoard from './gameBoard';
import CurrentPlayer from './currentPlayer';
import { gameStyle, optionsStyle } from './reactCSS/componentStyles';
import { socket } from './socket';

const Game = props => (

  <div>
    <div id="board-container" style={ gameStyle }>
      <div style={ optionsStyle }>
        <ResetButton />
        <CurrentPlayer state= { props.state }/>
      </div>
      <GameBoard state={ props.state } />
    </div>
  </div>
  
)

Game.propTypes = {
  state: React.PropTypes.object.isRequired
};

export default Game;
