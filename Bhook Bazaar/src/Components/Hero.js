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
            let filterSearch = restaurantList.filter((rest) =>
              rest.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            setfilteredRestList(filterSearch);
          }}
        >
          Search
        </button>
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
