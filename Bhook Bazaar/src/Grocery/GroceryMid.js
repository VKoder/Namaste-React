import { useEffect, useState } from "react";
import { CORS_API } from "../Utils/constants";
import GroceryCompo from "./GroceryCompo";

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
    // console.log(json?.data?.widgets?.[3]?.data);
    setgroceryList(json?.data?.widgets?.[3]?.data);
    setgroceryTitle(json?.data?.widgets?.[3]?.widgetInfo);
  };

  return (
    <GroceryCompo groceryList={groceryList} groceryTitle={groceryTitle}/>
  );
};
export default GroceryMid;
