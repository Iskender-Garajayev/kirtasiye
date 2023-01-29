import React, { useState } from 'react'
import './main.css'
// import Data from '../Data'

const Main = () => {

  const [form, setForm] = useState({paper_type:"", input_box:"" })

  const onChangeForm = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmite = (e) =>{
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className='main-container'>
      <form action="" onClick={onSubmite} >
       
      <div>
        <input type="radio" name="paper_type" value="A3" id="qwer0" onChange={onChangeForm} />name
        <input type="radio" name="paper_type" value="A4" id="qwer1" onChange={onChangeForm} />surname
        <input type="radio" name="paper_type" value="A5" id="qwer2" onChange={onChangeForm} />qwer
    </div>
        <div className="paper-color">
          <div className="color-bw">B/W</div>
          <div className="color-color">Color</div>
        </div>      
        <div>
          <input type="text" name='input_box' onChange={onChangeForm} />
        </div>
        <div className="btn">
          <button>Submite</button>
        </div>
      </form>


      {/* incomein box  */}

      <div>
 
      </div>
    </div>
  )
}

export default Main