import { useEffect, useState } from "react";
import { CORS_API } from "../Utils/constants";
import GroceryCard from "./GroceryCard";
import { Link } from "react-router-dom";

const GroceryTop = () => {
  const [groceryList, setgroceryList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    const data = await fetch(
      CORS_API +
        "https://www.swiggy.com/api/instamart/home?pageNo=1&layoutId=3173&storeId=1383574&clientId=INSTAMART-APP"
    );
    const json = await data.json();
    setgroceryList(json?.data?.widgets?.[4]?.data);
    console.log(json?.data?.widgets);
  };

  return (
    <div className="slider lg:px-16 lg:my-10 md:px-16 my-3 md:my-5 w-full pt-3">
      <div className="slider__content md:pt-3  pt-2">
        
       {groceryList?.map((grocery) => (
           <Link to={"/groceryInfo/" + grocery.product_id}><GroceryCard key={grocery.product_id} groceryData={grocery} /></Link>
        ))}
      </div>
    </div>
  );
};
export default GroceryTop;
