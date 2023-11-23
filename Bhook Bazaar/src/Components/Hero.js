import Card from "./Card";
import { useState, useEffect } from "react";
// import { restrauntData } from "../Utils/mockData";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

// HERO COMPONENT
const Hero = () => {
  const [restrauntList, setrestrauntList] = useState(null);
  const [filteredRestList, setfilteredRestList] = useState([]);

  const [searchTxt, setsearchTxt] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4529322&lng=73.86523799999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json)
    setrestrauntList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
    setfilteredRestList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log(filteredRestList);
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
            if (filterSearch.length === 0) {
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
          filteredRestList.map((resItem) => (
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
