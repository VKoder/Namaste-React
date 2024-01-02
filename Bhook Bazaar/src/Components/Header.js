import { useContext } from "react";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import userContext from "../Utils/userContext";
import themeContext from "../themeContext";
import { useSelector } from "react-redux";

// HEADER COMPONENT
const Header = () => {

  const cartItems = useSelector((store)=> store.cart.items)

  const data = useContext(userContext)
  // const {loggedInUser} = useContext(userContext)   - one n the same

  const {theme} = useContext(themeContext)

  return (
    <div className="h-[80px] w-full flex justify-between items-center overflow-hidden px-10 py-5 z-10 shadow-xl bg-white top-0 m-auto fixed">
    <div className="rounded-sm py-5 w-[70px]">
    <Link to="/"><img src={logo}></img></Link>
    </div>
    <div className="flex items-center justify-center flex-row">
      <div className="flex justify-center items-center">
        <ul className="flex items-center justify-center flex-row">
          <li className="pr-12 text-base font-semibold text-gray-600 tracking-wide hover:text-orange-400">{<Link to="/about"><i className="ri-pencil-line text-lg font-semibold text-gray-600 tracking-wide pr-2"></i>About</Link>}</li>
          <li className="pr-12 text-base font-semibold text-gray-600 tracking-wide  hover:text-orange-400">{<Link to="/contact"><i className="ri-customer-service-line text-lg font-semibold text-gray-600 tracking-wide pr-2"></i>Help</Link>}</li>
        </ul>
      </div>
      <div id="hr2">
      <Link to={"/Cart"}><i className="ri-shopping-cart-line text-lg font-semibold text-gray-600 tracking-wide pr-3"></i></Link>
        <span className="pl-1 text-base font-semibold text-gray-600">{cartItems.length}</span>
      </div>
      <span>{data.loggedInUser}</span>
      <span>{theme}</span>
    </div>
  </div>
  )
};

export default Header;
