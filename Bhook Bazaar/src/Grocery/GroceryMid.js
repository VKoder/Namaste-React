import { useEffect, useState } from "react";
import { CORS_API } from "../Utils/constants";
import GroceryCard from "./GroceryCard";
import { Link } from "react-router-dom";

const GroceryMid = () => {
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
    setgroceryList(json?.data?.widgets?.[3]);
    setgroceryTitle(json?.data?.widgets?.[3]?.widgetInfo);
  };

  return (
    <div className="slider lg:px-16 lg:my-10 md:px-16 my-3 md:my-5 w-full pt-3">
      <div className="flex justify-between items-center flex-row">
      <div className="flex justify-start items-start flex-col">
      <span className="lg:text-xl text-base sm:text-lg md:text-xl font-extrabold px-2 text-gray-950">
            {groceryTitle?.title}
          </span>
          { groceryTitle?.subtitle && <span className="lg:text-base text-xs md:text-sm pt-1 font-extralight px-2 text-gray-500">
            {groceryTitle?.subtitle}
          </span>}
          </div>
        {groceryTitle && (
          <Link to={"/groceryCollection/" + groceryList?.collectionId}>
            <span className="lg:text-sm text-xs md:text-sm font-bold text-orange-600 cursor-pointer">
              See All
            </span>
          </Link>
        )}
      </div>
      <div className="slider__content mt-4">
        {groceryList?.data?.map((grocery) => (
          <Link to={"/groceryInfo/" + grocery.product_id}>
            <GroceryCard key={grocery.product_id} groceryData={grocery} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default GroceryMid;
