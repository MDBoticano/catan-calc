import React from 'react';
import './App.css';

import Catan from './components/Catan';

const myCatan = new Catan();
const adjacent345 = myCatan.calculateChances([3, 4, 5]);

const App = () => {
  return (
    <div className="App">
      {adjacent345}
    </div>
  );
}

export default App;
