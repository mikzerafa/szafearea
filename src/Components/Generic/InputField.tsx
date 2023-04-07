import React from 'react';
import "../../Assets/inputField.css";

const InputField = {
  normal: () => {return (
    <form className='input'>
        <input type='input' placeholder='Enter Text' className='inputField'>
        </input>
        <button className='inputSubmit' type='submit'>
            <span className= 'inputButtonText'>Submit</span>
        </button>
    </form>
  )},
  inDiv:  () => { return (
    <div className='inputFieldDiv'>
        {InputField.normal()}
    </div>
  )}
}

export {
    InputField
}