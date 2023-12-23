import React, { useState, useEffect } from 'react';
import axios from "axios";
import level from "../level";

function Progressbar() {
  const [number1, setNumber1] = useState();
  const [currentExp, setTotal] = React.useState([]);
  useEffect(()=>{
    const fetchNotes = async() =>{
        try{
            const res = await axios.get("http://localhost:8800/character")
            setTotal(res.data)
            console.log(res)
        }catch(err){
            console.log(err);
        }
    }
    fetchNotes();
    
}, [])

  async function calculateTotal() {
    setTotal(parseInt(number1) + parseInt(currentExp));
    try{
      await axios.put("http://localhost:8800/character/1", currentExp)
      }catch(err){
      console.log(err)
     }

  }
  function levelBar(){
    let currentLevel = 0;
    while(exp.exp >= level[currentLevel].exp){
        currentLevel++;
    }
    
    let levelExp = level[currentLevel].exp;
    let levelPercentage = (currentExp/levelExp) * 100;
    return levelPercentage
  }
  return (

    <div>
           {currentExp.map(exp=>(
           
      <div key={exp.id}>
      <p>{exp.name}</p>
      <p>{exp.exp}</p>

      <div className='progress-bar'>
        <div className='pro>gress-bar-fill' 
        style={{transform: `translate(${levelPercentage - 100}%)`}}
        />    
    </div> 

      </div>
          ))}
        <form>
            <input name="title" onChange={(e) => setNumber1(+e.target.value)} value={number1}></input>
            <button onClick={calculateTotal}>Add</button>
    </form>
    </div>
  )
}

export default Progressbar