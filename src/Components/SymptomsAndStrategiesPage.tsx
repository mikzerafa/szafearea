import React, { useState } from "react"
import {InputField}from './Generic/InputField';
import SymptomList, {Symptom} from "./SymptomList";
import { Grid } from "./Generic/Grid";
import { card } from "./Generic/Card";
import { InfoIcon } from "./Generic/Icons";

import '../Assets/SymptomsAndStrategies.css'


let visibleSymptoms = SymptomList.SymptomList;


interface prop{
    toSearch: string;
    setToSearch: React.Dispatch<React.SetStateAction<string>> | any;
    toStore: string[];
    setToStore: React.Dispatch<React.SetStateAction<string[]>>;
    keyValue: string;
    setKey:React.Dispatch<React.SetStateAction<string>>;

}

function AddedSymptoms (symptoms: string[]) {
    console.log('Adding symptoms')
    if(symptoms)
    {
        if(symptoms.length > 0)
        {
            symptoms.forEach((sym) => console.log('Added Symptoms: ' + sym));
        }
    }
}

const SymptomsAndStrategiesPage = ({toSearch, setToSearch, toStore, setToStore, keyValue, setKey}: prop) => {
    
    if(toStore.length>0)
    {
        toStore.forEach((store) => console.log('to Store4: ' + store));
    }
    
    
    console.log('toSearch:' + toSearch);

    if(toSearch.length>2)
    {
        visibleSymptoms =  SymptomList.SymptomList;
        //console.log('Visible symptoms length' + visibleSymptoms.length)
        //console.log('Symptom name: ' + visibleSymptoms[0].name)
        visibleSymptoms = visibleSymptoms.filter((symptom)=>
            symptom.name.toLowerCase().includes(toSearch.toLowerCase()) || symptom.description.toLowerCase().includes(toSearch.toLowerCase()) || symptom.type.toLocaleString().toLowerCase().includes(toSearch.toLowerCase())
        );
    }
    else{
        visibleSymptoms = SymptomList.SymptomList;
    }
    //Filter Symptom List
    const cards = visibleSymptoms.map((symptom, index) => {
        keyValue = ''+index;
        let symptomsToStore = [...toStore];
       // console.log('key value in symptoms: ' + key)
        return card.normal(index,
            InfoIcon(index+'', "SymptomInfoIcon"),
            card.skipLine('first' + index),
            card.cardText(index, symptom.name), 
            
            
            card.cardCheckBox({toStore, setToStore,keyValue, setKey}, AddedSymptoms, symptomsToStore), 
            
            card.skipLine('second' + index),
            card.cardDetails(index, symptom.description),
            )
   
        }
    );

    const gridOfCards = Grid(cards, 6);
    
    return (
        
    <div className='SymptomsAndStrategiesDiv'>
        <div className="SymptomsAndStrategiesHeader">
            <InputField.inDiv toSearch={toSearch} setToSearch={setToSearch}/>
        </div>
        <div className="SymptomsList">
            {gridOfCards}
        </div>
    </div>

     )
}

export {
    SymptomsAndStrategiesPage,
    AddedSymptoms
}