import React from "react";

import '../../Assets/Card.css'
import { Symptom } from "../SymptomList";
import { InputField } from "./InputField";


interface prop{
    toSearch: string;
    setToSearch: React.Dispatch<React.SetStateAction<string>> | any;
    toStore: Symptom[];
    setToStore: React.Dispatch<React.SetStateAction<Symptom[]>>;
  
  }

const card = {
    coloured: (symptom:Symptom, key: number, ...elements: JSX.Element[]) => {
        const classNameValue = "cardColoured symptomType" + symptom.type;
        return (<div className={classNameValue} key={'card' +{key}.key}>{elements}</div>)},
    normal: (key: number, ...elements: JSX.Element[]) =>(<div className="card" key={'card' +{key}.key}>{elements}</div>),
    cardText: (key: number, text: string) => (<span className="cardText" key={'cardText' +{key}.key}>{text}</span>),
    cardCheckBox:({toStore, setToStore, toSearch, setToSearch}:prop, toRun:Function, symptoms:Symptom[], symptom:Symptom) => {
        //console.log('key value at card level is: ' + key);
        //toRun(symptoms);
        return InputField.checkBox({toStore, setToStore, toSearch,setToSearch}, toRun, symptoms, symptom);
    },

    cardDetails: (key: number, text: string) => (<span className="cardDetails" key= {"cardDetails"+ {key}.key}>{text}</span>),
    skipLine:(key: string) =>{return <br className="skipLine" key= {"SkipLine" + {key}.key}/>},
    addTags: (tags:JSX.Element[], className:string="", keyValue:number = 0)=>{
        console.log('Adding tags: ' + tags.length)
        const output=  (tags.map((tag, index) => 
        
        <div className="cardTag" key={'cardTag'+ className +keyValue}>
                {tag}
        </div>
      
        
        ));

        console.log(output)

        return output
    }
    }

export {
    card
}