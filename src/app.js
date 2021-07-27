import createStore from './redux.js';
import amountReducer, { actions } from './store/amount.js';

const store = createStore(amountReducer);
const store2 = createStore(amountReducer, 100);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.add(20));
store.dispatch(actions.take(50));
store.dispatch(actions.add(40));
store.dispatch(actions.add(500));
store.dispatch(actions.clear());
