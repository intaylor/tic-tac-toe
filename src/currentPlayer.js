import React from 'react';
import { playerStyle } from './reactCSS/componentStyles';
import { socket } from './socket';

const CurrentPlayer = props => {

  var activePlayer = props.state.gameState.currentPlayer === socket.piece ? 'yours': 'theirs';
  activePlayer = socket.piece === '' ? 'waiting on player to connect' : 'Turn: ' + activePlayer;
  if (props.state.gameState.gameOver) {
    activePlayer = socket.piece === props.state.gameState.currentPlayer ? 'You Win!' : 'You lose!';
  }

  return <div style={ playerStyle }> { activePlayer } </div>;

}

CurrentPlayer.propTypes = {
  state: React.PropTypes.object.isRequired
};

export default CurrentPlayer;
