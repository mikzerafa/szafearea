import React from 'react';
import "../../Assets/inputField.css";
import { Symptom } from '../SymptomList';

interface props{
  toSearch: string;
  setToSearch: React.Dispatch<React.SetStateAction<string>>;
}

interface prop{
  toSearch: string;
  setToSearch: React.Dispatch<React.SetStateAction<string>> | any;
  toStore: Symptom[];
  setToStore: React.Dispatch<React.SetStateAction<Symptom[]>>;

}

function toNumArray(arr:string){
  const strArr = arr.split(',');
  const numArr = strArr.map(Number)

  return numArr;
}

const InputField = {
  checkBox:({toStore, setToStore, toSearch, setToSearch}: prop, toRun:Function, symptoms:Symptom[],symptom:Symptom)=> {
    // console.log({key})
    // console.log({key}.key)
    // console.log(key)
    //console.log('key value:' + key);
    //console.log('Kety second value: ' + keyValue);
    return (
    <form className='checkboxInput' key= {'checkboxInput' + {toStore}}>
    <input type='checkbox' className='checkBox' key = {'checkBox' + {toStore} }
      onChange={(e) => {
        if(e.target.checked)
        {
          console.log('Ticked checkbox');
          toStore.push(symptom);
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