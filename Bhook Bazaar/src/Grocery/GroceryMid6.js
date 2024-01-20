import { useState, useEffect } from "react";
import { CORS_API } from "../Utils/constants";
import { Link } from "react-router-dom";
import GroceryCard from "./GroceryCard";

const GroceryMid6 = () => {

    const [groceryList, setgroceryList] = useState(null);
    const [groceryTitle, setgroceryTitle] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(
        CORS_API +
          "https://www.swiggy.com/api/instamart/home?pageNo=2&layoutId=3173&storeId=1383574&clientId=INSTAMART-APP"
      );
      const json = await data.json();
      console.log(json)
      setgroceryList(json?.data?.widgets?.[1]?.data)
      setgroceryTitle(json?.data?.widgets?.[1]?.widgetInfo?.title)
    };
  

    return (
        <div className="slider lg:px-16 lg:my-10 md:px-16 my-3 md:my-5 w-full pt-3">
        <div className="flex justify-between items-center flex-row">
          <span className="lg:text-xl text-lg md:text-xl font-extrabold px-2 text-gray-950">
            {groceryTitle}
          </span>
          {groceryTitle && (
            <Link to={"/groceryCollection/" + groceryList?.collectionId}>
              <span className="lg:text-sm text-xs md:text-sm font-bold text-orange-600 cursor-pointer">
                See All
              </span>
            </Link>
          )}
        </div>
        <div className="slider__content mt-4">
          {groceryList?.map((grocery) => (
            <Link to={"/groceryInfo/" + grocery.product_id}>
              <GroceryCard key={grocery.product_id} groceryData={grocery} />
            </Link>
          ))}
        </div>
      </div>
    )
}
export default GroceryMid6;