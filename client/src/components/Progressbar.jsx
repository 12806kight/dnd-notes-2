import React, { useState, useEffect } from 'react';
import axios from "axios";
import level from "../level";

function Progressbar() {
  const [number1, setNumber1] = useState();
  const [currentExp, setTotal] = React.useState(0);
  useEffect(()=>{
    const fetchNotes = async() =>{
        try{
            const res = await axios.get("http://localhost:8800/character")
            console.log(res.data[0].Experience)
            setTotal(res.data[0].Experience)
        }catch(err){
            console.log(err);
        }
    }
    fetchNotes();
    
}, [])

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
        <h1>Level {currentLevel - 1}</h1>
    <div className='progress-bar'>
        <div className='progress-bar-fill' style={{transform: `translate(${levelPercentage - 100}%)`}}/>    
    </div>
    
            <input name="title" onChange={(e) => setNumber1(+e.target.value)} value={number1}></input>
            <button onClick={calculateTotal}>Add</button>
    
    </div>
  )
}

export default Progressbar