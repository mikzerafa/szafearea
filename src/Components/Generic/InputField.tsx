import React from 'react';
import "../../Assets/inputField.css";
import "../../Assets/Box.css";
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

interface describedSymptoms{
  text: String;
  setText: React.Dispatch<React.SetStateAction<string>> | any;
}

function toNumArray(arr:string){
  const strArr = arr.split(',');
  const numArr = strArr.map(Number)

  return numArr;
}

const InputField = {
  Box:({text, setText}:describedSymptoms, placeholderText:string = "Enter Text") => {
    return (
      <form className='BoxInputForm'>
        <input type='text' className='BoxInput' placeholder={placeholderText}
        onChange={(e) => {
          console.log('Box Text Updated');
          text = e.target.value;
          setText(text);
      }}>
        </input>
      </form>
    )
  },
  checkBox:({toStore, setToStore, toSearch, setToSearch}: prop, toRun:Function, symptoms:Symptom[],symptom:Symptom, isChecked:boolean=false)=> {
    // console.log({key})
    // console.log({key}.key)
    // console.log(key)
    //console.log('key value:' + key);
    //console.log('Kety second value: ' + keyValue);
    return (
    <form className='checkboxInput' key= {'checkboxInput' + {toStore}}>
    <input type='checkbox' className='checkBox' checked={isChecked} key = {'checkBox' + {toStore} }
      onChange={(e) => {
        if(e.target.checked)
        {
          console.log('Ticked checkbox');
          toStore.push(symptom);
          setToStore([...toStore])
          
        }
        else{
          e.target.value = 'cardCheckBox'
          toStore.splice(toStore.indexOf(symptom), 1)
          setToStore([...toStore])
        }
      }}>
    </input>
    </form>
  )},
  normal: ({toSearch, setToSearch}:props, placeholderText:string = 'Enter Text') => {return (
    <form className='input'>
        <input type='input' placeholder={placeholderText} className='inputField'
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

export default{
    InputField
}