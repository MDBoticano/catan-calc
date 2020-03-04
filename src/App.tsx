import React, { useState } from 'react';
import './App.scss';

import Catan from './components/Catan';

  /**
   * @TODOS:
   * 1. Num players to determine max number of deserts (territory value 7)
   * 2. Don't lose React form focus on input change
   */

  type TerritoryProps = { index: number, chances: number[], setChances: Function };
  const Territory = ({ index, chances, setChances }: TerritoryProps) => {
    
    const modifyChances = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      const newChances: number[] = [...chances];
      const newValue: string = event.target.value;
      newChances[index] = Number(newValue);

      setChances(newChances);
    }

    return (
      <div className="territories__territory">
        <input
          type="number"
          min="2" max="12"
          value={chances[index]}
          onChange={(event) => modifyChances(event)}
        />
      </div>
    );
  }

const App = () => {
  const [chances, setChances] = useState([7, 7, 7]);
  const [totalChance, setTotalChance] = useState(0);
  const [myCatan] = useState(new Catan());

  const calculate = (event: React.SyntheticEvent) => {
    event.preventDefault();
    
    const calculation = myCatan.calculateChances(chances);
    setTotalChance(calculation);
  }

  return (
    <div className="App">
      <div className="catanForm">
        <div className="territories">
          <Territory index={0} chances={chances} setChances={setChances} />
          <Territory index={1} chances={chances} setChances={setChances} />
          <Territory index={2} chances={chances} setChances={setChances} />
        </div>
        
        <button
          className="catanForm__submit"
          type="submit"
          onClick={(e) => calculate(e)}
        >
          Calculate
        </button>

        <div className="catanForm__result">
          Result: {totalChance} / 36
        </div>  
      </div>
    </div>
  );
}

export default App;
