import { useState } from "react"
import ItemCategory from "./ItemCategory"
import ShimmerUI from "../Shimmers/ShimmerUI"
const RestaurantCategory = ({data})=>{
    const [showlist, setshowlist] = useState(false)

    function handleClick(){
        setshowlist(!showlist)  // toggle functionality - after clicking on handle setshowlist opp of showlist
        console.log(showlist)
   }

    return (
        <div className="my-4 shadow-md cursor-pointer transition-all" >
            <div className="flex justify-between items-center py-5 px-4" onClick={handleClick}>
                <h1 className="font-extrabold text-lg">{data?.title} ({data?.itemCards.length})</h1>
                { showlist ? <span><i class="ri-arrow-up-s-line"></i></span> : <span><i class="ri-arrow-down-s-line"></i></span> }
            </div>

        {showlist && <ItemCategory item={data}/>}
        </div>
    )
}
export default RestaurantCategory