import logo from "../Images/Logo.png";
import { useState } from "react";

// HEADER COMPONENT
const Header = () => {

  const [login, setlogin] = useState("Login") 

  return (
    <div className="header">
    <div className="hleft">
      <img src={logo}></img>
    </div>
    <div className="hright">
      <div id="hr1">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
        </ul>
      </div>
      <div id="hr2">
        <i class="ri-shopping-cart-fill"></i>
      </div>
      <div id="hr3">
        <button className="login" onClick={()=>{
          login === "Login" 
          ? setlogin("Logout") 
          : setlogin("Login");
        }}>{login}</button>
      </div>
    </div>
  </div>
  )
};

export default Header;
