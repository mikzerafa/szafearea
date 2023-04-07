import React from "react";

import '../../Assets/Card.css'

const card = {
    normal: (...elements: JSX.Element[]) =>(<div className="card">{elements}</div>),
    cardText: (text: string) => (<span className="cardText">{text}</span>),
    cardCheckBox:() => (<input type="checkbox" className="cardCheckbox"></input>)

}

export {
    card
}