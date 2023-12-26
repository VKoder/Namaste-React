import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";

// HEADER COMPONENT
const Header = () => {


  return (
    <div className="header shadow-lg bg-white top-0 fixed">
    <div className="hleft w-16">
    <Link to="/"><img src={logo}></img></Link>
    </div>
    <div className="hright">
      <div id="hr1">
        <ul>
          <li className="text-base font-semibold text-gray-600 tracking-wide hover:text-orange-400">{<Link to="/about"><i class="ri-pencil-line text-lg font-semibold text-gray-600 tracking-wide pr-2"></i>About</Link>}</li>
          <li className="text-base font-semibold text-gray-600 tracking-wide  hover:text-orange-400">{<Link to="/contact"><i class="ri-customer-service-line text-lg font-semibold text-gray-600 tracking-wide pr-2"></i>Help</Link>}</li>
        </ul>
      </div>
      <div id="hr2">
        <i class="ri-shopping-cart-line text-lg font-semibold text-gray-600 tracking-wide pr-3"></i>
      </div>
      
    </div>
  </div>
  )
};

export default Header;
