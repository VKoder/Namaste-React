import { useEffect, useState } from "react";
import { REST_API } from "../Utils/constants";
import { CORS_API } from "../Utils/constants";

const useRestaurantList = () => {
  const [restaurantList, setrestaurantList] = useState(null);

  useEffect(() => {
   fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CORS_API + REST_API);
    const json = await data.json();

    setrestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ||
    json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  return restaurantList;
};
export default useRestaurantList;
