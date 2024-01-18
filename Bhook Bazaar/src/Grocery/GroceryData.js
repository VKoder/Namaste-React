import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CORS_API } from "../Utils/constants";
const GroceryData = () => {

    const { id } = useParams();
    const [groceryInfo, setgroceryInfo] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);
   
    const fetchData = async () => {
      const data = await fetch(
        CORS_API +
        "https://www.swiggy.com/api/instamart/item/"+ { id } + "storeId=1383574"
        );
      const json = await data.json();
      setgroceryInfo(json?.data?.widgets?.[4]?.data);
      console.log(json);
    };
  

    return (
        <div>
           
            hiii
        </div>
    )
}
export default GroceryData