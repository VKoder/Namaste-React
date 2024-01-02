import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import OfferCard from "./OfferCard";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenuShimmer from "../Shimmers/RestaurantMenuShimmer";

const RestaurantMenu = () => {
  //UseParams to fetch dynamic from router child
  const { id } = useParams();

  //CUSTOM HOOK TO FETCH THE ALL INFO OF THE Rest
  const { restInfo, restMenu, restOff } = useRestaurantMenu(id);

  //Have to do this before destructing the data (we dont kn how much time it take to fetch so it will return.. is not defined)
  if (restInfo === null) {
    return <RestaurantMenuShimmer />;
  }

  return (
    <div>
      <div className="w-8/12 mx-auto pt-5">
        <Link to={"/"}><span className="text-[10px] text-gray-400 font-bold pr-1">Home</span></Link>
        <span className="text-[10px] text-gray-400 font-bold pr-1">/</span> 
        <span className="text-[10px] text-gray-400 font-bold pr-1">Pune</span>   
        <span className="text-[10px] text-gray-400 font-bold pr-1">/</span> 
        <span className="text-[10px] text-gray-600 font-bold pr-1">{restInfo.name}</span>
      </div>
      <div className="rest-menu my-4 w-8/12 mx-auto">
      <RestaurantHeader restInfo={restInfo} />

      <div className="flex justify-start items-center flex-row gap-1 auto overflow-x-scroll space-x-4 p-4">
        {restOff.map((off) => (
          <OfferCard offdata={off} key={off?.info?.description}  />
        ))}
       
      </div>

      {restMenu.map((cat, index) => (
        <RestaurantCategory data={cat?.card?.card} key={index} />
      ))}

      <div className="bgc flex justify-start items-start flex-col pt-6 pb-32 px-4 py-6 bg-gray-100">
        <div>
          <span className="text-sm font-extrabold text-gray-500">
            {restInfo?.name}
          </span>
          <br></br>
          <span className="text-sm font-bold text-gray-400">
            (Outlet: {restInfo?.areaName})
          </span>
        </div>
        <span className="text-xs font-medium text-gray-400 pt-3">
          <i className="ri-map-pin-line"></i> {restInfo?.labels?.[1]?.message}
        </span>
      </div>
    </div>
    </div>
  );
};
export default RestaurantMenu;
