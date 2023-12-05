import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useRestaurantList from "../Utils/useRestaurantList";
import useOnlineStatus from "../Utils/useOnlineStatus";

// HERO COMPONENT
const Hero = () => {
  const restaurantList = useRestaurantList();

  const [filteredRestList, setfilteredRestList] = useState(null);

  const [searchTxt, setsearchTxt] = useState("");

  const OnlineStatus = useOnlineStatus();

  //once the restaurant list changes ie the data is fetched change FILTEREDLIST
  useEffect(() => {
    setfilteredRestList(restaurantList);
  }, [restaurantList]);

 

  if (OnlineStatus === false) {
    return <h2>Your Offline</h2>;
  }

  if (restaurantList === null) {
    return <ShimmerUI />;
  }
  if (filteredRestList === null) {
    return <h1>Hii</h1>
  }
 
  return (
    <div className="hero">
      <h1 className="w-full text-left px-12 pb-8 font-[800] text-2xl tracking-normal">
        Restaurants with online food delivery in Pune
      </h1>
      <div className="w-full heroupper flex justify-between items-center px-12">
        <div className="heroleft flex justify-between items-center">

        <button className="bg-transparent border-2 border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4"
           onClick={()=>{setfilteredRestList(restaurantList)}}
          >
           All
          </button>

          <button className="bg-transparent border-2 border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4"
            onClick={() => {
              const TopRated = restaurantList.filter(
                (rest) => rest.info.avgRating > 4
              );
              setfilteredRestList(TopRated);
            }}
          >
            Top Rated
          </button>

          

          <button className="bg-transparent border-2 border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4"
            onClick={() => {
              const isVeg = restaurantList.filter(
                (rest) => rest.info.veg === true
              );
              setfilteredRestList(isVeg);
            }}
          >
            Pure Veg
          </button>
          <button className="bg-transparent border-2 border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4"
            onClick={() => {
              const lessThan300 = restaurantList.filter(
                (rest) => rest.info.feeDetails.totalFee/100 < 50
              );
              setfilteredRestList(lessThan300);
            }}
          >
            Less than Rs.300
          </button>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Feeling Hungry?"
            id="searchInp"
            value={searchTxt}
            onChange={(e) => {
              setsearchTxt(e.target.value);
            }}
          ></input>
          <button
            id="searchBtn"
            onClick={() => {
              let filterSearch = restaurantList.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setfilteredRestList(filterSearch);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restraunt">
        {
          filteredRestList?.map((resItem) => (
            <Link to={"/restaurant/" + resItem.info.id} key={resItem.info.id}>
              <Card resData={resItem} />
            </Link>
          )) // Iteratedly store restraunt Obj into resData which is a parameter of card!
        }
      </div>
    </div>
  );
};
export default Hero;
