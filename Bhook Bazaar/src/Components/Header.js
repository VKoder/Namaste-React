import logo from "../Images/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

// HEADER COMPONENT
const Header = () => {

  const [login, setlogin] = useState(day);


  return (
    <div className="header shadow-md">
    <div className="hleft w-20">
    <Link to="/"><img src={logo}></img></Link>
    </div>
    <div className="hright">
      <div id="hr1">
        <ul>
          <li>{<Link to="/about">About</Link>}</li>
          <li>{<Link to="/contact">Support</Link>}</li>
        </ul>
      </div>
      <div id="hr2">
        <i class="ri-shopping-cart-fill"></i>
      </div>
      
    </div>
  </div>
  )
};

export default Header;
