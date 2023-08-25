import React from 'react';
import Home from './Pages/Home';
import Counter from './components/Counter';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      <Outlet/>
    </div>
  );
};

export default App;