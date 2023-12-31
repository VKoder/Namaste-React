import { useDispatch, useSelector } from "react-redux";
import ItemCategory from "./ItemCategory"
import { clearCart } from "../Redux Store/cartSlice";
import { CARD_IMG_URL } from "../Utils/constants";
import { Link } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    if (cartItems.length === 0) {
        return (
        <div className="m-auto w-6/12 h-fit flex flex-col justify-center items-center py-10">
            <div><img className="w-80" src={CARD_IMG_URL + "fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"}></img></div>
            <div className="flex flex-col justify-center items-center py-6">
                <span className="text-xl text-gray-600 font-extrabold tracking-wide">Your cart is empty</span>
                <span className="text-sm text-gray-400 tracking-wide">You can go to home page to view more restaurants</span>
            </div>
            <div className="pt-4">
                <Link to={"/"}><span className="bg-orange-400 py-2 px-3 text-base font-bold text-white">SEE RESTAURANTS NEAR YOU</span>
                </Link>
            </div>
        </div>
        )
    }
    return (
       <div className="m-auto w-6/12 pt-5">
        
        <div className="m-auto text-center flex items-center flex-col text-2xl font-extrabold py-3"><span className="text-2xl font-extrabold">Cart</span>
        <button className="text-base py-2 my-3 bg-slate-900 m-auto text-center text-white rounded-md px-5" onClick={handleClearCart}>Clear Cart</button></div>
        <ItemCategory item={cartItems}/>
       </div>        
    )
}
export default Cart;