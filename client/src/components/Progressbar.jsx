import React from 'react'
import level from "../level";

function Progressbar() {
    let currentLevel = 0;
    const currentExp = 1500;
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
    </div>
  )
}

export default Progressbar