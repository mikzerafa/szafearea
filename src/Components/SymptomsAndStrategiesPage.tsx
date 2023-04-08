import React, { useState } from "react"
import {InputField}from './Generic/InputField';
import SymptomList, {SchizophreniaCopingStrategies, SchizophreniaCopingStrategiesIcons, Symptom} from "./SymptomList";
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

const medIcon = SchizophreniaCopingStrategiesIcons[SchizophreniaCopingStrategies.MEDS];
const therapyIcon = SchizophreniaCopingStrategiesIcons[SchizophreniaCopingStrategies.THERAPY];
const cleanlinessicon = SchizophreniaCopingStrategiesIcons[SchizophreniaCopingStrategies.CLEANLINESS];
const socialIcon = SchizophreniaCopingStrategiesIcons[SchizophreniaCopingStrategies.SOCIAL];
const meditationIcon = SchizophreniaCopingStrategiesIcons[SchizophreniaCopingStrategies.MEDITATION];
const exerciseIcon = SchizophreniaCopingStrategiesIcons[SchizophreniaCopingStrategies.EXERCISE];
const eductionIcon = SchizophreniaCopingStrategiesIcons[SchizophreniaCopingStrategies.EDUCATION];
const routineIcon = SchizophreniaCopingStrategiesIcons[SchizophreniaCopingStrategies.ROUTINE];
const sleepIcon = SchizophreniaCopingStrategiesIcons[SchizophreniaCopingStrategies.SLEEP_HYGIENE];


function AddTagsInDiv(card: any, symptom:Symptom){
    let output:JSX.Element;
    const elements: JSX.Element[] =  AddTheRightTags(card, symptom);

    console.log('Amount of Tags found: ' + elements.length);

    return(<div className="TagsOnCard" key={"TagsOnCard_" + symptom.name}> 
                { elements.map((element) => element)}
    </div> )
}

function AddTheRightTags(cards:any, symptom: Symptom, index =0, output:JSX.Element[] = []){
    
    if(symptom)
    {
        if(symptom.copingStrategies.length > output.length)
        {
            console.log('There are strategies: ' + symptom.copingStrategies.length);
            switch(symptom.copingStrategies[index]){
                case SchizophreniaCopingStrategies.MEDS:
                    output = output.concat(card.addTags([medIcon], symptom.name, output.length));
                    break;
                case SchizophreniaCopingStrategies.THERAPY:
                    output = output.concat(card.addTags([therapyIcon], symptom.name, output.length));
                    break;
                case SchizophreniaCopingStrategies.CLEANLINESS:
                    output = output.concat(card.addTags([cleanlinessicon], symptom.name, output.length));
                    break;
                case SchizophreniaCopingStrategies.SOCIAL:
                    output = output.concat(card.addTags([socialIcon], symptom.name, output.length));
                    break;
                case SchizophreniaCopingStrategies.MEDITATION:
                    output = output.concat(card.addTags([meditationIcon], symptom.name, output.length));
                    break;
                case SchizophreniaCopingStrategies.EXERCISE:
                    output = output.concat(card.addTags([exerciseIcon], symptom.name, output.length));
                    break;
                case SchizophreniaCopingStrategies.EDUCATION:
                    output = output.concat(card.addTags([eductionIcon], symptom.name, output.length));
                    break;
                case SchizophreniaCopingStrategies.ROUTINE:
                    output = output.concat(card.addTags([routineIcon], symptom.name, output.length));
                    break;
                case SchizophreniaCopingStrategies.SLEEP_HYGIENE:
                    output = output.concat(card.addTags([sleepIcon], symptom.name, output.length));
                    break;
                default:
                    break;
            }

            if(symptom.copingStrategies.length > index +1)
            {
                console.log('Recursion and concat')
                output = AddTheRightTags(card, symptom, (index+1), output);
            }
        }
    }
  
    console.log('returning output.length: ' + output.length);
    return output;
}

const SymptomsAndStrategiesPage = ({toSearch, setToSearch, toStore, setToStore, keyValue, setKey}: prop) => {
    
    if(toStore.length>0)
    {
        //setToStore(toStore)
        toStore.forEach((store) => console.log('to Store4: ' + store));
    }
    
    
    console.log('toSearch:' + toSearch);

    if(toSearch.length>2)
    {
        visibleSymptoms =  SymptomList.SymptomList;
        //console.log('Visible symptoms length' + visibleSymptoms.length)
        //console.log('Symptom name: ' + visibleSymptoms[0].name)
        visibleSymptoms = visibleSymptoms.filter((symptom)=>
            symptom.name.toLowerCase().includes(toSearch.toLowerCase()) || 
            symptom.description.toLowerCase().includes(toSearch.toLowerCase()) || 
            symptom.type.toLocaleString().toLowerCase().includes(toSearch.toLowerCase()) ||
            symptom.keys.some((key) => { console.log('checking key');
                return key.toLowerCase().includes(toSearch.toLowerCase())})
        );
    }
    else{
        visibleSymptoms = SymptomList.SymptomList;
    }
    let gridOfCards:JSX.Element;
    let gridOfSelectedCards: JSX.Element;
    let symptomsToStore:string[] = [];
    let symptomsToStoreIndex:number[] = [];

    //Filter Symptom List
    const cards = visibleSymptoms.map((symptom, index) => {
        keyValue = ''+index;
        symptomsToStore = [...toStore];
       // console.log('key value in symptoms: ' + key)
       console.log('To store symptom: '  +symptomsToStore[0]);
       const numbersAtEndRegEx = /\d+$/;

       if(symptomsToStore[0])
       {
        symptomsToStoreIndex = symptomsToStore.map((symp) => symp.match(numbersAtEndRegEx)).map(Number);
       }
      
            if(symptomsToStoreIndex.includes(index))
            {
                return card.coloured(symptom, index,
                    InfoIcon(index+'', "SymptomInfoIcon"),
                    card.skipLine('first' + index),
                    card.cardText(index, symptom.name), 
                    
                    
                    card.cardCheckBox({toStore, setToStore,keyValue, setKey, toSearch, setToSearch}, AddedSymptoms, symptomsToStore), 
                    
                    card.skipLine('second' + index),
                    card.cardDetails(index, symptom.description),
                    card.skipLine('third' + index),
                    AddTagsInDiv(card, symptom)
        
                )
            }
            else{
                return card.normal(index,
                    InfoIcon(index+'', "SymptomInfoIcon"),
                    card.skipLine('first' + index),
                    card.cardText(index, symptom.name), 
                    
                    
                    card.cardCheckBox({toStore, setToStore,keyValue, setKey, toSearch, setToSearch}, AddedSymptoms, symptomsToStore), 
                    
                    card.skipLine('second' + index),
                    card.cardDetails(index, symptom.description),
                    card.skipLine('third' + index),
                    AddTagsInDiv(card, symptom)
        
                )
            }
    });
    const SelectedSymptoms = cards.filter((element:JSX.Element, index:number) => symptomsToStoreIndex.includes(index)? element: null);
    const unSelectedSymptoms = cards.filter((element:JSX.Element, index:number) => symptomsToStoreIndex.includes(index)? null: element);
    
    gridOfSelectedCards = Grid(SelectedSymptoms, 6);
    gridOfCards = Grid(unSelectedSymptoms, 6);

       
        


    
    return (
        
    <div className='SymptomsAndStrategiesDiv'>
        <div className="SymptomsAndStrategiesHeader">
            <InputField.inDiv toSearch={toSearch} setToSearch={setToSearch}/>
        </div>
        <div className="SelectedSymptomList">
            {gridOfSelectedCards}
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