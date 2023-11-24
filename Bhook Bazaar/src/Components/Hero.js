import Card from "./Card";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { REST_API } from "../Utils/constants";
import { CORS_API } from "../Utils/constants";

// HERO COMPONENT
const Hero = () => {
  const [restrauntList, setrestrauntList] = useState(null);
  const [filteredRestList, setfilteredRestList] = useState(null);

  const [searchTxt, setsearchTxt] = useState("");

 
  useEffect(() => {
    console.log("fetching")
    fetchData();
  },[restrauntList]);

 

  const fetchData = async () => {
  
    const data = await fetch(
      CORS_API + REST_API
    );
    const json = await data.json();

    setrestrauntList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
    setfilteredRestList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  if (restrauntList === null) {
    return <ShimmerUI />;
  } 
   
  return (
    <div className="hero">
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
            let filterSearch = restrauntList.filter((rest) =>
              rest.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            if (filterSearch?.length === 0) {
            } else {
              setfilteredRestList(filterSearch);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt">
        {
          filteredRestList?.map((resItem) => (
            <Link to={'/restaurant/' + resItem.info.id} key={resItem.info.id}>
            <Card resData={resItem} />
            </Link>
          )) // Iteratedly store restraunt Obj into resData which is a parameter of card!
        }
      </div>
    </div>
  );
};
export default Hero;
