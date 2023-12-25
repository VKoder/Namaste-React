import { useState } from "react";
import { CARD_IMG_URL } from "../Utils/constants";
import ShimmerUI from "../Shimmers/ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import OfferCard from "./OfferCard";
const RestaurantMenu = () => {
  const [veg, setveg] = useState("Veg");

  //UseParams to fetch dynamic from router child
  const { id } = useParams();


  //CUSTOM HOOK TO FETCH THE ALL INFO OF THE Rest
  const { restInfo, restMenu, restMenuTitle, NewrestMenu } =
    useRestaurantMenu(id);

  //Have to do this before destructing the data (we dont kn how much time it take to fetch so it will return.. is not defined)
  if (restMenu === null) {
    return <ShimmerUI />;
  }


  //Destructing
  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId, areaName} =
    restInfo;
  const { deliveryTime } = restInfo.sla;

  // console.log(restMenu); 

  return (
    <div className="rest-menu my-4 w-8/12 mx-auto">
      <div className="flex justify-between items-center flex-row   border-b-2 py-4">
        <div className="flex justify-between items-start flex-col ">
          <h2 className="text-2xl font-bold pb-3">{name}</h2>
         <span className="text-sm font-semibold text-gray-400">{cuisines}</span>
         <span className="text-sm font-semibold text-gray-400">{areaName}</span>
         <div className="mt-4">
          <span className="pr-2 text-sm text-gray-500 font-semibold"><i className="ri-e-bike-2-fill pr-2 text-base"></i>0.8km</span>
          <span className="text-sm font-medium text-gray-500">|</span>
          <span className="pl-2 text-sm  text-gray-500 font-semibold">₹33 Delivery fee will apply</span>
        </div>
        </div>
        <div className="flex justify-between items-center flex-col text-end px-2 py-2 border-black rounded-lg shadow-lg">
          <span className="text-green-700 font-extrabold text-sm py-2 px-0.5 items-center flex justify-between gap-2"><i className="ri-star-fill"></i>{avgRating}</span>
          <span className="border-t-2 py-2 px-0.5">4k rating</span>
        </div>

        
       

      </div>


    <div className="flex justify-start items-start mt-5 gap-4">
      <span className="font-extrabold text-base"><i class="ri-time-fill pr-2 text-lg"></i>25 MINS</span>
      <span className="font-extrabold text-base"><i class="ri-money-rupee-circle-line"></i>₹{costForTwoMessage}</span>
    </div>

    <OfferCard/>

      <div className="mid-menu">
        <button
          id="isVegBtn"
          onClick={() => {
            if (veg === "Veg") {
              setveg("All");
            } else {
              setveg("Veg");
            }

            if (veg === "All") {
              setrestMenu(NewrestMenu);
            } else {
              const filteredRestMenu = restMenu?.filter(
                (rest) => rest.card.info.isVeg > 0
              );
              setrestMenu(filteredRestMenu);
            }
          }}
          style={{ backgroundColor: veg === "Veg" ? "green" : "grey" }}
        >
          {veg}
        </button>
      </div>

      {
      restMenu.map((cat)=>
        <RestaurantCategory data={cat?.card?.card} key={cat?.card?.card?.id}/>
      )
    }
    </div>
  );
};
export default RestaurantMenu;
