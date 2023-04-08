import React from 'react';
import "../../Assets/inputField.css";

interface props{
  toSearch: string;
  setToSearch: React.Dispatch<React.SetStateAction<string>>;
}

interface prop{
  toSearch: string;
  setToSearch: React.Dispatch<React.SetStateAction<string>> | any;
  toStore: string[];
  setToStore: React.Dispatch<React.SetStateAction<string[]>>;
  keyValue: string;
  setKey:React.Dispatch<React.SetStateAction<string>>;

}

function toNumArray(arr:string){
  const strArr = arr.split(',');
  const numArr = strArr.map(Number)

  return numArr;
}

const InputField = {
  checkBox:({toStore, setToStore, toSearch, setToSearch, keyValue, setKey}: prop, toRun:Function, symptoms:string[])=> {
    // console.log({key})
    // console.log({key}.key)
    // console.log(key)
    //console.log('key value:' + key);
    //console.log('Kety second value: ' + keyValue);
    return (
    <form className='checkboxInput' key= {'checkboxInput' + {keyValue}}>
    <input id= {''+{keyValue}} type='checkbox' className='checkBox' key = {'checkBox' + keyValue }
      onChange={(e) => {
        if(e.target.checked)
        {
          console.log('Ticked checkbox');
          e.target.value = keyValue;
          toStore.push(keyValue);
          setToStore([...toStore])
          symptoms = [...toStore];
          toRun(symptoms);
          
        }
        else{
          e.target.value = 'cardCheckBox'
        }
      }}>
    </input>
    </form>
  )},
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