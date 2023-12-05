import React from 'react'

function Stats() {
  return (
    <div className='container'>
      <div className='progress-bar'>
        <div className='progress-bar-fill'></div>
      </div>
      <div className='progress-label'>50%</div>
      <button>Progress</button>
      <button>Reset</button>
    </div>
  )
}

export default Stats