import React from "react"
import '../Assets/footer.css'
const Footer = {

    nav: (elements: JSX.Element) => {
        return (<div className="footerNav">{elements}</div>)
    }

}

export {
    Footer
}