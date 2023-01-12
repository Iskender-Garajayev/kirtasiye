import React, { useState } from 'react'
import './main.css'
// import Data from '../Data'

const Main = () => {

  const [form, setForm] = useState({paper_type:"" })

  const onChangeForm = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmite = () =>{
    console.log(form);
  }

  return (
    <div className='main-container'>
      <form action="" onClick={onSubmite} >
        <div className='paper-type'>
        <input className='paper-input' type="radio" name="paper_type" onChangeForm={onChangeForm} value="a4" id="1" />
        <label htmlFor="1">A4</label>

        <input type="radio" name="paper_type" onChangeForm={onChangeForm} value="A5" id="2" />
        <label htmlFor="2">A5</label>

        <input type="radio" name="paper_type" onChangeForm={onChangeForm} value="A3" id="3" />
        <label htmlFor="3">A3</label>
        </div>
        
        <div className="paper-color">
          <div className="color-bw">B/W</div>
          <div className="color-color">Color</div>
        </div>      
        <div className="btn">
          <button>Submite</button>
        </div>
      </form>
    </div>
  )
}

export default Main