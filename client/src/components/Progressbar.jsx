import React, { useState } from 'react'
import level from "../level";

function Progressbar() {
  const [number1, setNumber1] = useState();
  const [currentExp, setTotal] = React.useState(0);

  function calculateTotal() {
    setTotal(number1 + currentExp);
  }



    let currentLevel = 0;
    while(currentExp >= level[currentLevel].exp){
        currentLevel++;
    }
    
    let levelExp = level[currentLevel].exp;
    let levelPercentage = (currentExp/levelExp) * 100;

  return (
    <div>
        <h1>Level {currentLevel}</h1>
    <div className='progress-bar'>
        <div className='progress-bar-fill' style={{transform: `translate(${levelPercentage - 100}%)`}}/>    
    </div>
    
            <input name="title" onChange={(e) => setNumber1(+e.target.value)} value={number1}></input>
            <button onClick={calculateTotal}>Add</button>
    
    </div>
  )
}

export default Progressbar