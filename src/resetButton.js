import React from 'react';
import { resetButtonStyle } from './reactCSS/componentStyles';
import { socket } from './socket';

const ResetButton = () => {

  var joinRoom = () => socket.emit('join room');
  var resetBoard = () => socket.emit('reset board');
  var buttonAction = socket.piece === '' ? joinRoom : resetBoard;
  var buttonText = socket.piece === '' ? 'Join Room' : 'Reset Game';

  return (

    <div>
      <button style={ resetButtonStyle } onClick={ buttonAction }>
        { buttonText }
      </button>
    </div>
    
  );

}

export default ResetButton;
