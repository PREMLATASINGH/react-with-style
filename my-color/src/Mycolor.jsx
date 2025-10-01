import React, { useState } from 'react';
import './index.css'

function Mycolor() {
    const [color, setColor] = useState('#c23a3aff');
    const handleChangeColor = (event) => {
    setColor(event.target.value);
        
    }
  return ( <div className='box-container'>
  <h1>My Color Component</h1>
    <div className='box' style={{backgroundColor: color}}>
    
       <p>Selected Color: {color}</p></div>
       <label>Choose Color: </label>
       <input type="color" value={color} onChange={handleChangeColor}/>
  </div>);
}   
export default Mycolor;