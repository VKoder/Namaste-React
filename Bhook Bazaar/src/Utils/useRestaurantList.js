import { useEffect, useState } from "react";
import { REST_API } from "../Utils/constants";
import { CORS_API } from "../Utils/constants";

const useRestaurantList = () => {
  const [restaurantList, setrestaurantList] = useState(null);

  useEffect(() => {
    console.log("fetching");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CORS_API + REST_API);
    const json = await data.json();

    setrestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // setfilteredRestList(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };
  return restaurantList;
};
export default useRestaurantList;
