import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CORS_API } from "../Utils/constants";
import { GROCERY_INFO_API } from "../Utils/constants";
import { CARD_IMG_URL } from "../Utils/constants";

const GroceryData = () => {
  const { id } = useParams();
  const [groceryInfo, setgroceryInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      CORS_API + GROCERY_INFO_API + id + "?storeId=1383574"
    );
    const json = await data.json();
    setgroceryInfo(json?.data);
    console.log(json?.data);
  };

  if (groceryInfo === null) {
    return <h1>hdshlh</h1>;
  }

  const { disclaimer, long_description } = groceryInfo?.variations?.[0]?.meta;
  const { brand, product_name_without_brand } = groceryInfo;
  const { images, sku_quantity_with_combo } = groceryInfo?.variations?.[0];
  const { store_price, offer_price } = groceryInfo?.variations?.[0]?.price;
  const { product_description } =
    groceryInfo?.variations?.[0]?.price?.offer_applied;

  return (
    <div className="mx-36 bg-gray-200 px-2 py-2 rounded-lg my-4 relative">
      {product_description && (
        <div className="absolute top-5 left-5 ">
          <img
            className="w-12 rounded-md"
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_64,h_108/instamart-assets/offer_tag.png"
          ></img>
          <div className="absolute top-4 left-2 flex justify-center gap-0 flex-col">
            <span className="text-white text-[16px] font-extrabold">
              {product_description.slice(0, 3)}
            </span>
            <span className="text-white text-[16px] font-extrabold">
              {product_description.slice(3, 7)}
            </span>
          </div>
        </div>
      )}
      <div className="flex bg-white rounded-xl mb-2 justify-center items-center flex-col py-4 p-2">
        <div className="rounded-md w-[500px] relative overflow-hidden">
          <img
            className="w-full h-[560px]"
            src={CARD_IMG_URL + images[0]}
          ></img>
        </div>
        <div className="flex justify-center px-4 flex-col items-start w-full pt-2">
          <span className="text-left text-base font-light text-gray-500">
            {brand}
          </span>
          <span className="font-bold text-lg  text-slate-700">
            {product_name_without_brand.length > 25
              ? `${product_name_without_brand.slice(0, 25)}..`
              : product_name_without_brand}
          </span>
          <span className="text-base font-light  text-gray-500 py-2">
            {sku_quantity_with_combo}
          </span>
        </div>
        <div className="flex justify-between px-4 items-center flex-row w-full">
          <div className="flex justify-center items-start flex-col">
            <span className="text-[13px] font-light line-through text-gray-500">
              <span className="text-[13px]">₹</span>
              {store_price}
            </span>
            <span className="text-base font-bold text-gray-700">
              <span className="text-sm">₹</span>
              {offer_price}
            </span>
          </div>
          <div>
            <button className="text-base font-extrabold text-green-600  border rounded-lg px-10 py-3 shadow-md">
              ADD
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl flex justify-center items-start flex-col px-4 py-8">
        {long_description && (
          <div className="border-b py-6 flex justify-center items-start flex-col">
            <span className="text-base text-gray-600 font-light pb-2">
              Product Information
            </span>
            <span className="text-sm text-gray-400 font-thin">
              {long_description}
            </span>
          </div>
        )}
    <div className="py-6 flex justify-center items-start flex-col">
        <span className="text-base text-gray-600 font-light pb-2">
          Important Information
        </span>
        <span className="text-sm text-gray-400 font-thin">{disclaimer}</span>
        </div>
      </div>
    </div>
  );
};
export default GroceryData;
