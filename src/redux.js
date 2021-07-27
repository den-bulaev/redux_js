function createStore(reduce, initialState) {
  let state = initialState;
  const callbacks = [];

  return {
    getState() {
      return state;
    },

    dispatch(action) {
      state = reduce(state, action);
      callbacks.forEach((f) => f());
    },

    subscribe(f) {
      callbacks.push(f);
    },
  };
}

export default createStore;
