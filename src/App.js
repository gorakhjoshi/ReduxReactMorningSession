// useReducer: simple Counter

import * as React from 'react';

function countReducer(state, action) {
  console.log('Inside Reducer');
  console.log(state);
  console.log(action);
  return { ...state, ...action };
}

function Counter({ initialCount = 0, step = 1 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  });

  console.log(state);

  const { count } = state;

  console.log(count);

  const increment = () => setState(() => ({ count: count + step }));

  return <button onClick={increment}>{count}</button>;
}

function App() {
  return <Counter />;
}

export default App;
