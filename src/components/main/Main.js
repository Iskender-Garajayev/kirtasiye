import React, { useState } from 'react'
import './main.css'
// import Data from '../Data'

const Main = () => {

  const [form, setForm] = useState({paper_type:"" })

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
          <input type="radio" name="paper_type" id="1" value='A3' onChange={onChangeForm} />
          <label htmlFor="1">A3</label>

          <input type="radio" name="paper_type" id="2" value='A4' onChange={onChangeForm}/>
          <label htmlFor="2">A4</label>

        </div>
        {/* <div>
          <input type="radio" name="paper" id="a3"  />
          <label htmlFor="a3">a3</label>

          <input type="radio" name="paper" id="a4" checked/>
          <label htmlFor="a4">a4</label>
        </div> */}
        
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