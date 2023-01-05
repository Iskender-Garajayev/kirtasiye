import React from 'react'
import './main.css'

const Main = () => {
  return (
    <div className='main-container'>
      <form action="">
        <div className='paper-type'>
        <input className='paper-input' type="radio" name="Paper-type" id="1" />
        <label htmlFor="1">A4</label>

        <input type="radio" name="Paper-type" id="2" />
        <label htmlFor="2">A5</label>

        <input type="radio" name="Paper-type" id="3" />
        <label htmlFor="3">A3</label>
        </div>
        
        <div className="paper-color">
          <div className="color-bw">B/W</div>
          <div className="color-color">Color</div>
        </div>      
      </form>
    </div>
  )
}

export default Main