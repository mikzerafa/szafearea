import React from 'react';
import "../../Assets/inputField.css";

interface props{
  toSearch: string;
  setToSearch: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = {
  normal: ({toSearch, setToSearch}:props) => {return (
    <form className='input'>
        <input type='input' placeholder='Enter Text' className='inputField'
          value={toSearch}
          onChange={(e) => {
            setToSearch(e.target.value)
          }}>
        </input>
        <button className='inputSubmit' type='submit'>
            <span className= 'inputButtonText'>Submit</span>
        </button>
    </form>
  )},
  inDiv:  ({toSearch, setToSearch}:props) => { return (
    <div className='inputFieldDiv'>
        {InputField.normal({toSearch, setToSearch})}
    </div>
  )}
}

export {
    InputField
}