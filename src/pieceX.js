import React from 'react';

var PieceX = props => (

  <svg style={ props.style } viewBox="0 0 100 100">
    <title> X </title>
    <g fill="#79C0D4" fillRule="evenodd">
      <path d="M26 71.67L72.67 25l2.828 2.828-46.67 46.67z"/>
      <path d="M28.83 25l46.668 46.67-2.83 2.828L26 27.828z"/>
    </g>
  </svg>
  
)

PieceX.propTypes = {
  style: React.PropTypes.object.isRequired
};

export default PieceX;
