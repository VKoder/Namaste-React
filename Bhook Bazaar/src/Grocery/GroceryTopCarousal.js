import { useEffect, useState } from "react";
import { CORS_API } from "../Utils/constants";
import { CARD_IMG_URL } from "../Utils/constants";

const GroceryTopCarousal = () => {
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

    setgroceryList(json?.data?.widgets?.[1]?.data)
    setgroceryTitle(json?.data?.widgets?.[1]?.widgetInfo?.title)
  };

  return (
    <div className="flex justify-center items-start flex-col lg:px-16 lg:my-10 md:px-16 my-3 md:my-5 w-full pt-3">
     <span className="lg:text-xl text-lg md:text-xl items-start font-extrabold text-gray-950">
          {groceryTitle}
        </span>
    <div className="flex justify-evenly items-center w-full">
        
        {
            groceryList?.map((gros)=> 
                <div>
                    <img className="w-24" src={CARD_IMG_URL + gros.creativeId}></img>
                </div>
            )
        }
    </div>
    </div>
  );
};
export default GroceryTopCarousal;