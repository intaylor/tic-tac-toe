const createStore = reducer => {
  var state;
  var observers = [];

  const getState = () => state;

  const subscribe = observer => observers.push( observer );

  const dispatch = action => {
    state = reducer(state, action);

    observers.forEach( observer => observer());
  };

  dispatch({});

  return { getState, subscribe, dispatch };
}

export default createStore;
