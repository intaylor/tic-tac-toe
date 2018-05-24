import React from 'react';

var PieceO = props => (

  <svg style={ props.style } viewBox='0 0 100 100'>
    <title> Circle </title>
    <circle id='a' cx='50' cy='50' r='30' stroke='#FF9D9D'
      strokeWidth='6' fill='#FFF' fillRule='evenodd' fillOpacity='0'
    />
  </svg>
  
)

PieceO.propTypes = {
  style: React.PropTypes.object.isRequired,
};

export default PieceO;
