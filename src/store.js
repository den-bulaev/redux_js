import createStore from './redux.js';

const amountReducer = (amount, action) => {
  switch (action.type) {
    case 'add':
      return amount + action.value;

    case 'take':
      return amount - action.value;

    case 'clear':
      return 0;

    default:
      return amount;
  }
};

const store = createStore(amountReducer, 100);

export default store;
