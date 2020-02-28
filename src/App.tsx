import React, { useState } from 'react';
import './App.css';

import Catan from './components/Catan';

const App = () => {
  const [chances, setChances] = useState([0, 0, 0]);
  const [totalChance, setTotalChance] = useState(0);
  const [myCatan] = useState(new Catan());

  const modifyChances = (index: number, value: number) => {
    const newChances: number[] = chances;
    newChances[index] = value;
    setChances(newChances);
  }

  const calculate = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const calculation = myCatan.calculateChances(chances);
    console.log(calculation);
    setTotalChance(calculation);
  }

  return (
    <div className="App">
      <input type="number" min="2" max="12" onChange={(e) => modifyChances(0, Number(e.target.value))}/>
      <input type="number" min="2" max="12" onChange={(e) => modifyChances(1, Number(e.target.value))}/>
      <input type="number" min="2" max="12" onChange={(e) => modifyChances(2, Number(e.target.value))}/>
      <button type="submit" onClick={(e) => calculate(e) }>Calculate</button>

      <div>
        Result: {totalChance} / 36
      </div>
      
    </div>
  );
}

export default App;
