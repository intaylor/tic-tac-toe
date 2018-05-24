// into game.js

export const gameStyle = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '350px',
  minWidth: '300px',
};

export const optionsStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  minHeight: '50px',
  minWidth: '300px',
  maxHeight: '15vh',
  maxWidth: '85vh',
  width: '100%',
  height: '15vh',
};

export const gameBoardStyle = {
  height: '85vh',
  width: '100vw',
  display: 'flex',
  minWidth: '300px',
  minHeight: '300px',
  maxWidth: '85vh',
  maxHeight: '100vw',
  flexWrap: 'wrap',
};

export const playerStyle = {
  color: 'black',
  maxHeight: '14.25vh',
  fontSize: '6.25vmin',
  fontFamily: 'Helvetica'
};

export const resetButtonStyle = {
  backgroundColor: '#f55',
  color: 'white',
  border: 'none',
  minHeight: '50px',
  maxHeight: '14.25vh',
  fontSize: '6.25vmin',
  fontFamily: 'Helvetica',
  borderRadius: '5px',
  padding: '0 15px'
};

export const pieceStyle = {
  zIndex: '1',
  boxSizing: 'border-box',
  height: '33.33333333333333333%',
  width: '33.33333333333333333%'
};

export const gridStyle = {
  width: '85vh',
  maxWidth: '100vw',
  maxHeight: '85vh',
  minWidth: '300px',
  minHeight: '300px',
  position: 'absolute',
};
