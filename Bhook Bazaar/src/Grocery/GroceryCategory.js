// https://www.swiggy.com/api/instamart/home?pageNo=1&layoutId=3173&storeId=1383574&clientId=INSTAMART-APP

import { useState, useEffect } from "react";
import { CORS_API } from "../Utils/constants";
import { Link } from "react-router-dom";
import GroceryCard from "./GroceryCard";
import { CARD_IMG_URL } from "../Utils/constants";

const GroceryCategory = () => {
  const [groceryList, setgroceryList] = useState(null);
  const [groceryTitle, setgroceryTitle] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      CORS_API +
        "https://www.swiggy.com/api/instamart/home?pageNo=1&layoutId=3173&storeId=1383574&clientId=INSTAMART-APP"
    );
    const json = await data.json();

    setgroceryList(json?.data?.widgets?.[0]?.data);
    setgroceryTitle(json?.data?.widgets?.[1]?.widgetInfo?.title);
  };

  return (
    <div className="lg:mx-32 md:mx-28  border-b pb-8 mx-5">
      <span className="lg:text-xl text-base sm:text-lg  md:text-xl font-extrabold px-2 text-gray-950">
        {groceryTitle}
      </span>
      <div className="flex lg:justify-between justify-evenly sm:justify-between md:justify-between items-start  flex-row flex-wrap pt-6 gap-4 lg:gap-6 md:gap-4">
        {groceryList?.map((gros) => (
          <div className="flex justify-center items-center lg:w-[100px] md:w-[80px] gap-2 flex-col" key={gros?.imageId}>
            <img
              className="lg:w-24 md:w-24 w-20"
              src={CARD_IMG_URL + gros.imageId}
            ></img>
            {gros.imageId && (
              <div className="flex justify-center items-center ">
                <span className="text-xs text-center hidden lg:flex font-bold text-gray-700">
                  {gros.displayName.length > 25
                    ? `${gros.displayName.slice(0, 25)}...`
                    : gros.displayName}
                </span>
                <span className="text-xs text-center flex lg:hidden font-bold text-gray-700">
                  {gros.displayName.length > 10
                    ? `${gros.displayName.slice(0, 10)}...`
                    : gros.displayName}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default GroceryCategory;
