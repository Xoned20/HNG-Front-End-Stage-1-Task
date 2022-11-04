import React from "react"
// import { Routes, Route, Outlet, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home"
import "./style.css"

function App(){
    return(
        <div>
        {/* <Routes> */}
           {/* <Route path="/" element={<Home />}/> */}
           <Home />
           <Contact />
        {/* </Routes> */}
        </div>
    )
}

export default App