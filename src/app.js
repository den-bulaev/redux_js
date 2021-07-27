import store from './store.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'add', value: 20 });
store.dispatch({ type: 'take', value: 50 });
store.dispatch({ type: 'add', value: 40 });
store.dispatch({ type: 'add', value: 500 });
store.dispatch({ type: 'clear' });
