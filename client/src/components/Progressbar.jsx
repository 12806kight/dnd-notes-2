import React from 'react'

function Progressbar({progress = 50}) {
    const level = 1;
  return (
    <div>
        <h1>Level {level}</h1>
    <div className='progress-bar'>
        <div className='progress-bar-fill' style={{transform: `translate(${progress - 100}%)`}}/>
    </div>
    </div>
  )
}

export default Progressbar