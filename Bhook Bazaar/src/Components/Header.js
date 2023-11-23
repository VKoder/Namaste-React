import logo from "../Images/Logo.png";
import { useState } from "react";
import { day, night } from "./icon";
import { Link } from "react-router-dom";

// HEADER COMPONENT
const Header = () => {

  const [login, setlogin] = useState(day);


  return (
    <div className="header">
    <div className="hleft">
      <img src={logo}></img>
    </div>
    <div className="hright">
      <div id="hr1">
        <ul>
          <li>{<Link to="/">Home</Link>}</li>
          <li>{<Link to="/about">About</Link>}</li>
          <li>{<Link to="/contact">Support</Link>}</li>
        </ul>
      </div>
      <div id="hr2">
        <i class="ri-shopping-cart-fill"></i>
      </div>
      <div id="hr3">
      <button onClick={() => {
        login.props.className === day().props.className
        ? setlogin(night)
        : setlogin(day);
        }}>{login}</button>
      </div>
    </div>
  </div>
  )
};

export default Header;
