import { useContext } from "react";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import userContext from "../Utils/userContext";
import themeContext from "../themeContext";
import { useSelector } from "react-redux";

// HEADER COMPONENT
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const data = useContext(userContext);
  // const {loggedInUser} = useContext(userContext)   - one n the same

  const { theme } = useContext(themeContext);

  return (
    <div className="h-[80px] w-full flex justify-between items-center overflow-hidden px-10 py-5 z-10 shadow-xl bg-white top-0 m-auto fixed">
      <div className="rounded-sm py-5 ">
        <Link to="/">
          <img className="w-[70px]  hover:w-[73px] duration-200 ease-in" src={logo}></img>
        </Link>
      </div>
      <div className="flex items-center justify-center flex-row">
        <div className="flex justify-center items-center">
          <ul className="flex items-center justify-center flex-row">
            <Link to={"/about"}>
              <div className="  text-gray-600 hover:text-orange-300">
                <i className="ri-pencil-line text-lg pr-2 font-bold"></i>
                <span className="pr-12 text-base font-bold">About</span>
              </div>
            </Link>
          
            <Link to={"/offers"}>
            <div className="  text-gray-600 hover:text-orange-300">
            <i class="ri-gift-line text-lg pr-2 font-bold  "></i>
                <span className="pr-12 text-base font-bold ">Offers</span>
              </div>
            </Link>

            <Link to={"/contact"}>
            <div className="  text-gray-600 hover:text-orange-300">
                <i class="ri-customer-service-line text-lg pr-2 font-bold  "></i>
                <span className="pr-12 text-base font-bold ">Contact</span>
              </div>
            </Link>

            <Link to={"/cart"}>
            <div className="  text-gray-600 hover:text-orange-300">
              <i class="ri-shopping-cart-2-line text-lg pr-2 font-bold  "></i>
                <span className="pr-12 text-base font-bold">Cart ({cartItems.length})</span>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
