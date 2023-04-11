import React from "react";

import {card} from '../Components/Generic/Card';

type cond = {
    name: string,
    detail: string
};

const condition = (name: string, details: string) => {
    //console.log(`name: ${name} details ${details}`);
    return (
      <div className={`Condition ${name}`}>
        <div className={`conditionNameDiv${name}`}>
          <span className={`conditionName${name}`}>
            {name}
          </span>
          <br/>
          <span className={`conditionDetails${name}`}>
            {details}
          </span>
        </div>
      </div>
    );
  };

const conditionList = (conditions:cond[]) => {
    console.log(conditions.length);
    const conditionsHtml =conditions.map((condi, index) => {
        return (condition(condi.name, condi.detail));
    });



    return conditionsHtml;
}

export default{
    condition,
    conditionList
}