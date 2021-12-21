import { createStore } from 'redux';

const counterReducer = (state = { counter: 0, update: 5 }, action) => {
  return state;
};

const store = createStore(counterReducer);

export default store;
