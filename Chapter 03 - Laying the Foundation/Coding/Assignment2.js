import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./NamasteDev-Logo.webp";
import user from "./user.webp";


//Q. Create a Header Component using Functional Component using JSX
    const Header = () => (
        <div id="head">
            <img id="img1" src={logo}></img>
            <input id="text" type="text" placeholder="Search.."></input>
            <img id="img2" src={user}></img>
        </div>
    )
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<Header/>)