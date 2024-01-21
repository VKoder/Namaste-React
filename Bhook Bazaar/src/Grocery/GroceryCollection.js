import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CORS_API } from "../Utils/constants";

const GroceryCollection = () => {
  const [groceryList, setgroceryList] = useState(null);
  const [groceryTitle, setgroceryTitle] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      CORS_API +
        "https://www.swiggy.com/api/instamart/collection?collectionId=" +
        { id } +
        "&limit=40&pageNo=0&serviceLine=INSTAMART&storeId=1383574&offerId=undefined"
    );
    const json = await data.json();
    console.log(json?.data);
  };
  return <div>tmkoc</div>;
};
export default GroceryCollection;
