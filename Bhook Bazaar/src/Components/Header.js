import {  useState, useEffect } from "react";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CORS_API } from "../Utils/constants";

// HEADER COMPONENT
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [menu, setmenu] = useState(false);

  const handlemenu = () => {
    setmenu(!menu);
  };

  const searchToggle = () => {
    setSearch(!Search)
  }

  const spanCsss = "pr-12 lg:pr-6 lg:text-sm xl:pr-12 xl:text-base font-bold"
  const linkCss = "  text-gray-600 hover:text-orange-300"

  useEffect(()=>{
    fetchData()
})
const fetchData = async()=>{
    const data = await fetch(CORS_API + "https://www.swiggy.com/api/instamart/campaign/mxn?layoutId=2586&limit=40&pageNo=1&serviceLine=INSTAMART&customerPage=STORES_MxN_18&storeId=1383574")
          const json = await data.json()
    console.log(json)
}

  return (
    <div className="flex flex-col justify-center mb-16 sm:mb-20 md:mb-20 lg:mb-24 xl:mb-24">
      <div className="h-14 sm:h-16 md:h-[65px] lg:h-[70px] xl:h-20 w-full flex justify-between items-center overflow-hidden px-4 sm:px-8 md:px-8 lg:px-10 xl:px-10 py-5 z-10 shadow-lg md:shadow-xl lg:shadow-xl bg-slate-50 top-0 m-auto fixed">
        <div className="rounded-sm py-5 ">
          <Link to="/">
            <img
              className="w-10  sm:w-12 md:w-[55px] lg:w-[65px] xl:w-[70px] duration-200 ease-in"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center flex-row">
          <div className=" justify-center items-center  hidden lg:flex ">
            <ul className="flex items-center justify-center flex-row">
              <Link to={"/about"}>
                <div className={linkCss}>
                  <i className="ri-pencil-line text-lg lg:text-base lg:pr-1 lg:font-semibold pr-2  font-bold"></i>
                  <span className={spanCsss}>About</span>
                </div>
              </Link>

              <Link to={"/offers"}>
                <div className={linkCss}>
                  <i class="ri-gift-line text-lg lg:text-base lg:pr-1 lg:font-semibold pr-2 font-bold  "></i>
                  <span className={spanCsss}>Offers</span>
                </div>
              </Link>

              <Link to={"/contact"}>
                <div className={linkCss}>
                  <i class="ri-customer-service-line lg:text-base lg:pr-1 lg:font-semibold text-lg pr-2 font-bold  "></i>
                  <span className={spanCsss}>Contact</span>
                </div>
              </Link>

              <Link to={"/cart"}>
                <div className={linkCss}>
                  <i class="ri-shopping-cart-2-line lg:text-base lg:pr-1 lg:font-semibold text-lg pr-2 font-bold  "></i>
                  <span className={spanCsss}>
                    Cart ({cartItems.length})
                  </span>
                </div>
              </Link>
              <Link to={"/grocery"}>
                <div className={linkCss}>
                  <i class="ri-shopping-cart-2-line lg:text-base lg:pr-1 lg:font-semibold text-lg pr-2 font-bold  "></i>
                  <span className={spanCsss}>Grocery </span>
                </div>
              </Link>
            </ul>
          </div>
          <div className="lg:hidden">
            {menu ? <button onClick={handlemenu}><i class="ri-close-fill text-xl font-bold"></i></button> : <button onClick={handlemenu}><i class="ri-menu-line text-xl font-bold"></i></button>}
          </div>
        </div>
      </div>
      {menu && (
        <div className="bg-gray-200 ">
          <div className="py-20 w-full m-auto text-center">Currently Dummy Data</div>
        </div>
      )}
    </div>
  );
};

export default Header;
