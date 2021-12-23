import React from 'react';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Header />
      <Counter />
      <Auth />
    </>
  );
}

export default App;
