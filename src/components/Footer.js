import React from "react"
import Zuri from "../images/Zuri.Internship_Logo.png"
import I4G from "../images/I4G.png"

function Footer() {
    return(
        <div className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <img 
                    src={Zuri}
                    alt=""
                    />
                    <p>HNG Internship 9 Frontend Task</p>
                    <img 
                    src={I4G}
                    alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer