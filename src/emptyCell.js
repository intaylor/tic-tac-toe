import React from 'react';

var EmptyCell = props => (
  <div style={ props.style } onClick={ props.handleCellSelect }></div>
);

EmptyCell.propTypes = {
  style: React.PropTypes.object.isRequired,
  handleCellSelect: React.PropTypes.func.isRequired
};

export default EmptyCell;
