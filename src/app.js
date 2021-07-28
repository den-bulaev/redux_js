/* eslint-disable import/extensions */
import createStore, { combineReducers } from './redux.js';
import amountReducer, { actions as amountActions } from './store/amount.js';
import goodsReducer, { actions as goodsActions } from './store/goods.js';

const initialState = {
  amount: 0,
  goods: [],
};

const reducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
});

const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(amountActions.add(20));
store.dispatch(goodsActions.add(20));

store.dispatch(amountActions.take(10));
store.dispatch(goodsActions.take(20));

store.dispatch(amountActions.add(40));
store.dispatch(goodsActions.add(40));

store.dispatch(amountActions.add(500));
store.dispatch(goodsActions.add(500));

store.dispatch(amountActions.clear());
store.dispatch(goodsActions.clear());
