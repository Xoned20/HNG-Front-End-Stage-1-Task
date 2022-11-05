import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

export function enableButton() {
    const check = document.getElementById("check");
    const btn = document.getElementById("btn__submit")

    btn.disabled = "true"

    if (check.checked) {
        btn.removeAttribute("disabled");
    }
}