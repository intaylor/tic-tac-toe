import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';
import { store } from './socket';

var render = function render() {

  ReactDOM.render(
    <Game state={ store.getState() }/>,
    document.getElementById('root')
  );
  
};

store.subscribe(render);
render();
