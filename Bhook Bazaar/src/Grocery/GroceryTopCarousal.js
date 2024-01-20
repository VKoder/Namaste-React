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
    console.log(json)
    setgroceryList(json?.data?.widgets?.[1]?.data)
    setgroceryTitle(json?.data?.widgets?.[1]?.widgetInfo)
  };

  return (
    <div className="flex justify-center items-start flex-col lg:mx-[120px] mx-2 md:mx-[120px] lg:mt-4 mt-2 md:mt-4">
       <div className="flex justify-start items-start pb-8 flex-col">
       <span className="lg:text-xl text-base sm:text-lg md:text-xl font-extrabold px-2 text-gray-950">
            {groceryTitle?.title}
          </span>
          { groceryTitle?.subtitle && <span className="lg:text-base text-xs md:text-sm pt-1 font-extralight px-2 text-gray-500">
            {groceryTitle?.subtitle}
          </span>}
          </div>
    <div className="flex justify-evenly items-center w-full">
        
        {
            groceryList?.map((gros)=> 
                <div>
                    <img className="lg:w-24 sm:w-20 w-14 md:w-24" src={CARD_IMG_URL + gros.creativeId}></img>
                </div>
            )
        }
    </div>
    </div>
  );
};
export default GroceryTopCarousal;
