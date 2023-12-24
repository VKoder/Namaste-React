import { useState, useEffect } from "react";
import { CORS_API } from "../Utils/constants";
import { useParams } from "react-router-dom";
import Card from "./Card";
import ShimmerUI from "../Shimmers/ShimmerUI";
import { CARD_IMG_URL } from "../Utils/constants";
import { ITEM_API } from "../Utils/constants";

const ItemsMenu = () => {
  const [restaurantList, setrestaurantList] = useState(null);
  const [restaurantListName, setrestaurantListName] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CORS_API + "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.447523597754362&lng=73.85565485805273&collection=" + id);
    const json = await data.json();
    setrestaurantList(json?.data?.cards);
    setrestaurantListName(json?.data?.cards[0]?.card.card)
    console.log(json?.data)
  };
  if (restaurantList === null) {
    return <ShimmerUI />;
  }

  if (restaurantList === undefined) {
    return <h1>Something went wrg</h1>
  }
  return (
    <div className="restraunt">
        <h1>{restaurantListName?.title}</h1>
        <h1>{restaurantListName?.description}</h1>
       <img className="rounded-3xl" src={CARD_IMG_URL + restaurantListName?.imageId}></img>
      {/* {
          restaurantList.slice(3,10)?.map((resItem) => (
            <Card  resData={resItem.card.card} />
          )) 
        } */}
    </div>
  );
};
export default ItemsMenu;
