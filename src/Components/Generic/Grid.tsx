import React from "react"
import "../../Assets/Grid.css"

const Grid = (elements: JSX.Element[], amount:number|string = "all") => {
    const size:number = elements.length;
    if(amount=="all")
    {
      amount = size;
    }
    const gridItems = elements.map((item, index) => <div className="grid-item" key={"gridItems" +index}>{item}</div>)

  return (
    <div className="grid-container" style={{ gridTemplateColumns: `repeat(${amount}, 1fr)` }}>
        {gridItems}
    </div>
  )
}

export { Grid }
