import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerUI from "../Shimmers/ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { CORS_API } from "../Utils/constants";
import { REST_API } from "../Utils/constants";


// HERO COMPONENT
const Hero = () => {

  const [restaurantList, setrestaurantList] = useState(null);
  const [filteredRestList, setfilteredRestList] = useState(null);


  const [searchTxt, setsearchTxt] = useState("");

  const OnlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
   }, []);
 
   const fetchData = async () => {
     const data = await fetch(CORS_API + REST_API);
     const json = await data.json();


      setrestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilteredRestList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   };


  if (OnlineStatus === false) {
    return <h2>Your Offline</h2>;
  }

  if (restaurantList === null) {
    return <ShimmerUI />;
  }

  if (filteredRestList === undefined) {
    return <h1>Something went wrg</h1>
  }

 
  return (
    <div className="flex justify-between items-center flex-col px-12 my-10 w-full">
      <h1 className="w-full text-left px-12 pb-8  font-[1000] text-2xl tracking-normal ">
        Restaurants with online food delivery in Pune
      </h1>
      <div className="w-full heroupper flex justify-between items-center px-12">
        <div className="heroleft flex justify-between items-center">

          <button className="bg-transparent border-2 shadow-md border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4 text-sm sm:"
           onClick={()=>{setfilteredRestList(restaurantList)}}
          >
           All
          </button>
          <button className="bg-transparent border-2 shadow-md border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4"
            onClick={() => {
              const TopRated = restaurantList.filter(
                (rest) => rest.info.avgRating > 4.2
              );
              setfilteredRestList(TopRated);
            }}
          >
            Top Rated
          </button>
          <button className="bg-transparent border-2  shadow-md border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4"
            onClick={() => {
              const isVeg = restaurantList.filter(
                (rest) => rest.info.veg === true
              );
              setfilteredRestList(isVeg);
            }}
          >
            Pure Veg
          </button>
          <button className="bg-transparent border-2 shadow-md border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4"
            onClick={() => {
              const deliveryTime = restaurantList.map((re)=>re.info.sla.deliveryTime)
             
              const sortDeliveryTime = deliveryTime.sort((a,b) => a - b)
              const hi = restaurantList.map((rest)=>rest.info.sla)
              const del = hi.filter((del)=>del.deliveryTime)
            
              console.log(del)
            }}
          >
            Less than Rs.300
          </button>
        </div>

        <div>
          <input
            type="text"
            placeholder="Feeling Hungry?"
            className="py-3 pr-24 pl-5 rounded-3xl text-sm border-2 border-gray-300"
            value={searchTxt}
            onChange={(e) => {
              setsearchTxt(e.target.value);
            }}
          ></input>
          <button
           className="py-3 px-6 border-none rounded-3xl text-base font-bold cursor-pointer bg-orange-400"
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
      <div className="flex justify-start items-center flex-wrap gap-7 px-12 mt-12">
        {
          filteredRestList?.map((resItem) => (
            <Link to={"/restaurant/" + resItem.info.id} key={resItem.info.id}>

              {
             <Card resData={resItem}/>
              }
              
            </Link>
           
          )) // Iteratedly store restraunt Obj into resData which is a parameter of card!
        }
      </div>
    </div>
  );
};
export default Hero;
