import React from "react";

import '../../Assets/Card.css'

const card = {
    normal: (key: number, ...elements: JSX.Element[]) =>(<div className="card" key={'card' +{key}.key}>{elements}</div>),
    cardText: (key: number, text: string) => (<span className="cardText" key={'cardText' +{key}.key}>{text}</span>),
    cardCheckBox:(key: number) => (<input type="checkbox" className="cardCheckbox" key={'cardCheckbox'+{key}.key}></input>),
    cardDetails: (key: number, text: string) => (<span className="cardDetails" key= {"cardDetails"+ {key}.key} >{text}</span>),
    skipLine:(key: string) =>{return <br className="skipLine" key= {"SkipLine" + {key}.key}/>}
}

export {
    card
}