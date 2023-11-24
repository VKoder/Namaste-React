import { useEffect, useState } from "react";
import { CARD_IMG_URL } from "../Utils/constants";
import ShimmerUI from "./ShimmerCard";
import { useParams } from "react-router-dom";
import { REST_MENU_API } from "../Utils/constants";
import { CORS_API } from "../Utils/constants";

const RestaurantMenu = () => {
  //UseState to hold and update data
  console.log(useState())
  const [restInfo, setrestInfo] = useState(null);
  const [restMenu, setrestMenu] = useState(null);
  const [NewrestMenu, setNewrestMenu] = useState(null);
  const [restMenuTitle, setrestMenuTitle] = useState(null);
  const [veg, setveg] = useState("Veg");


  //UseParams to fetch dynamic from router child
  const { id } = useParams();

  //useEffect() to fetch the API after component will load
  useEffect(() => {
    fetchData();
  }, []);

  //ASYNC (CB Func) to fetch the data
  const fetchData = async () => {
    const data = await fetch( CORS_API + REST_MENU_API + id);
    const json = await data.json();
    setrestMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setNewrestMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setrestMenuTitle(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card
    );
    setrestInfo(json?.data?.cards[0]?.card?.card?.info);
  };

  //Have to do this before destructing the data (we dont kn how much time it take to fetch so it will return.. is not defined)
  if (restMenu === null) {
    return <ShimmerUI />;
  }

  //Destructing
  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId } =
    restInfo;
  const { deliveryTime } = restInfo.sla;
  const { title } = restMenuTitle;

  console.log(restMenu);

  return (
    <div className="rest-menu">
      <div className="top-menu">
        <div className="top-menu-left">
          <img src={CARD_IMG_URL + cloudinaryImageId}></img>
        </div>
        <div className="top-menu-right">
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <div className="top-menu-right-child">
            <p
              style={
                avgRating > 3.9
                  ? { backgroundColor: "darkgreen" }
                  : { backgroundColor: "rgb(164, 14, 14)" }
              }
            >
              <i class="ri-star-fill"></i>
              {avgRating}
            </p>
            <span>|</span>
            <p>{deliveryTime}mins</p>
            <span>|</span>
            <p>{costForTwoMessage}</p>
          </div>
        </div>
      </div>

      <div className="mid-menu">
        <button
          id="isVegBtn"
          onClick={() => {
            if (veg === "Veg") {
              setveg("All");
            } else {
              setveg("Veg");
            }
           

            if (veg === "All") {
              setrestMenu(NewrestMenu);
              console.log("rest");
            } else {
              const filteredRestMenu = restMenu?.filter(
                (rest) => rest.card.info.isVeg > 0
              );
              setrestMenu(filteredRestMenu);
              console.log("filterd");
            }
          }}
          style={{ backgroundColor: veg === "Veg" ? "green" : "grey" }}
        >
          {veg}
        </button>
      </div>

      <li>
        <div className="main-menu">
          <h1>
            {title}
            <span>({restMenu?.length})</span>
          </h1>

          {/* Iterating the recommended list/array of objs */}

          {restMenu?.map((rest) => (
            <div key={rest.card.info.id} className="menu-card">
              <div className="menu-left">
                <h3>{rest.card.info.name}</h3>
                <p>{"Rs " + rest.card.info.price / 100}</p>
                <p>{rest.card.info.description}</p>
              </div>
              <div className="menu-right">
                <img src={CARD_IMG_URL + rest.card.info.imageId}></img>
                <button id="addBtn">Add</button>
              </div>
            </div>
          ))}
        </div>
      </li>
    </div>
  );
};
export default RestaurantMenu;
