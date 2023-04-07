import React from "react";

const heading = (name:string) => {
    return (<a href="/" style={{textDecoration: 'none'}}><span className="Heading">
        {name}
    </span></a>);
    
} 
export{
    heading
}