import { useState } from "react";
import { REST_MENU_API } from "../Utils/constants";
import { CORS_API } from "../Utils/constants";
import { useEffect } from "react";

const useRestaurantMenu= (id)=>{
    //UseState to hold and update data
  const [restInfo, setrestInfo] = useState(null);
  const [restMenu, setrestMenu] = useState(null);
  const [NewrestMenu, setNewrestMenu] = useState(null);
  const [restMenuTitle, setrestMenuTitle] = useState(null);


//useEffect() to fetch the API after component will load
useEffect(() => {
    fetchData();
  }, []);

  //ASYNC (CB Func) to fetch the data
  const fetchData = async () => {
    const data = await fetch( CORS_API + REST_MENU_API + id);
    const json = await data.json();
    const Category = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat)=> cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    setrestMenu(Category);
    setNewrestMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setrestMenuTitle(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card
    );
    setrestInfo(json?.data?.cards[0]?.card?.card?.info);

    console.log(json)
   
  };
  return {restInfo , restMenu, restMenuTitle, NewrestMenu};

}
export default useRestaurantMenu;