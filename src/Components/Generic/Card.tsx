import React from "react";

import '../../Assets/Card.css'
import { InputField } from "./InputField";

interface props{
    toStore: string[];
    setToStore: React.Dispatch<React.SetStateAction<string[]>>;
    keyValue: string;
    setKey: React.Dispatch<React.SetStateAction<string>>;
}

const card = {
    normal: (key: number, ...elements: JSX.Element[]) =>(<div className="card" key={'card' +{key}.key}>{elements}</div>),
    cardText: (key: number, text: string) => (<span className="cardText" key={'cardText' +{key}.key}>{text}</span>),
    cardCheckBox:({toStore, setToStore, keyValue, setKey}:props, toRun:Function, symptoms:string[]) => {
        //console.log('key value at card level is: ' + key);
        //toRun(symptoms);
        keyValue = 'cardCheckBox' + keyValue;
        return InputField.checkBox({toStore, setToStore, keyValue, setKey}, toRun, symptoms);
    },

    cardDetails: (key: number, text: string) => (<span className="cardDetails" key= {"cardDetails"+ {key}.key}>{text}</span>),
    skipLine:(key: string) =>{return <br className="skipLine" key= {"SkipLine" + {key}.key}/>}
    }

export {
    card
}