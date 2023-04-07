import React from "react"
import {InputField}from './Generic/InputField';
import SymptomList from "./SymptomList";
import { Grid } from "./Generic/Grid";
import { card } from "./Generic/Card";
import { InfoIcon } from "./Generic/Icons";

import '../Assets/SymptomsAndStrategies.css'

const SymptomsAndStrategiesPage = () => {
    const cards = SymptomList.SymptomList.map((symptom, index) => {
        return card.normal(card.cardText(symptom.name), card.cardCheckBox(), InfoIcon())
    });

    const gridOfCards = Grid(cards, 6);
    
    return (
        
    <div className='SymptomsAndStrategiesDiv'>
        <div className="SymptomsAndStrategiesHeader">
            <InputField.inDiv/>
        </div>
        <div className="SymptomsList">
            {gridOfCards}
        </div>
    </div>

  )
}

export {
    SymptomsAndStrategiesPage
}