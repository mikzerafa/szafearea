import React from "react";
import {card} from "./Generic/Card";
import './Generic/Icons';
import { InfoIcon } from "./Generic/Icons";

import '../Assets/Conditions.css'

const conditions = (conditionList:JSX.Element[]) =>{
    return conditionList.map((cond, index) => { return (
        <div className= "ConditionCard">
            {card.normal(index,
                InfoIcon(),
                card.skipLine(`conditionCard + ${index}`),
                conditionList[index]
            )}
        </div>
    )})
}


export default{
    conditions
}