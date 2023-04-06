import React from "react"
import "../Assets/Grid.css"

const Grid = (elements: JSX.Element[]) => {
    const size:number = elements.length;
    const gridItems = elements.map((item, index) => <div className="grid-item" key={index}>{item}</div>)

  return (
    <div className="grid-container" style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
        {gridItems}
    </div>
  )
}

export { Grid }
