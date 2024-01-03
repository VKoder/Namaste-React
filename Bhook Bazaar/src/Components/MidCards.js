import { useEffect, useState } from "react";
import { CORS_API, REST_API } from "../Utils/constants";
import Card from "./Card";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import ShimmerUI from "../Shimmers/ShimmerUI";

const Offers = () => {
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


      setrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilteredRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log(json)
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
    <div className="flex justify-between items-center flex-col px-16 my-8 w-full">
        <div className="w-11/12 pb-5">
        <Link to={"/"}><span className="text-[10px] text-gray-400 font-bold pr-1">Home</span></Link>
        <span className="text-[10px] text-gray-400 font-bold pr-1">/</span> 
        <span className="text-[10px] text-gray-600 font-bold pr-1">Offers</span>
      </div>
      <span className="w-full text-left px-12 pb-8  font-black text-2xl tracking-tight" style={{wordSpacing:3.5}} >
      Restaurants With Great Offers Near Me
      </span>
      <div className="w-full heroupper flex justify-between items-center px-12">
        <div className="heroleft flex justify-between items-center">

          <button className="bg-transparent border-2 shadow-md border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4 text-sm md:px-3 md:py-1 md:mr-3 md:text-xs lg:px-3.5 lg:py-1.5 lg:mr-4 lg:text-sm "
           onClick={()=>{setfilteredRestList(restaurantList)}}
          >
           All
          </button>
          <button className="bg-transparent border-2 shadow-md border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4 md:px-3 md:py-1 md:mr-3 md:text-xs lg:px-3.5 lg:py-1.5 lg:mr-4 lg:text-sm"
            onClick={() => {
              const TopRated = restaurantList.filter(
                (rest) => rest.info.avgRating > 4.2
              );
              setfilteredRestList(TopRated);
            }}
          >
            Top Rated
          </button>
          <button className="bg-transparent border-2  shadow-md border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4 md:px-3 md:py-1 md:mr-3 md:text-xs lg:px-3.5 lg:py-1.5 lg:mr-4 lg:text-sm"
            onClick={() => {
              const isVeg = restaurantList.filter(
                (rest) => rest.info.veg === true
              );
              setfilteredRestList(isVeg);
            }}
          >
            Pure Veg
          </button>
          <button className="bg-transparent border-2 shadow-md border-solid border-zinc-300 px-3.5 py-1.5 rounded-3xl mr-4 md:px-3 md:py-1 md:mr-3 md:text-xs lg:px-3.5 lg:py-1.5 lg:mr-4 lg:text-sm"
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
            className="py-3 pr-24 pl-5 rounded-3xl text-sm border-2 border-gray-300  "
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
export default Offers;
