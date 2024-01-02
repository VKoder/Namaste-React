import { CARD_IMG_URL } from "../Utils/constants";
import veg from "../Images/veg.webp";
import non_veg from "../Images/non-veg.webp";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux Store/cartSlice";

const ItemCategory = ({ item }) => {
  // console.log(item)
  // const { itemCards } = item;

  const dispatch = useDispatch()

  const handleAddItem = (items) => {
    dispatch(addItem(items))
  }

  return item.map((items) => (
    <div key={items?.card?.info?.id} className="w-full flex justify-between items-start bg-white py-8 px-4 my-1 border-2 border-dotted">
      <div className="w-[65%]">
        <span>
          {items?.card?.info?.itemAttribute?.vegClassifier == "NONVEG" ? (
            <img className="w-3" src={non_veg}></img>
          ) : (
            <img className="w-5" src={veg}></img>
          )}
        </span>
        {items?.card?.info?.ribbon?.text && (
          <span className="text-orange-400 font-semibold text-xs">
            {" "}
            <i className="ri-star-fill pr-1 text-xs"></i>
            {items?.card?.info?.ribbon?.text}
          </span>
        )}

        <h3 className="text-sm font-bold text-slate-900 pt-2">
          {items.card.info.name}
        </h3>
        <p className="font-semibold text-slate-800 pb-2 price">
          <span className="text-base">₹ </span>
          <span className="text-sm">{items.card.info.defaultPrice / 100 || items.card.info.price / 100.00}</span>
          <span
            className="ml-3 justify-center items-center py-0.5 px-1"
            style={{
              backgroundColor:
                items?.card?.info?.offerTags?.[0]?.backgroundColor,
              color: items?.card?.info?.offerTags?.[0]?.textColor,
              borderLeft: `2px solid ${items?.card?.info?.offerTags?.[0]?.textColor}`,
            }}
          >
            <span
              style={{ fontSize: "10px" }}
              className="font-bold text-xs px-1 "
            >
              {items?.card?.info?.offerTags?.[0]?.title}
            </span>
            <span
              style={{ fontSize: "10px" }}
              className="font-extralight text-xs"
            >
              {items?.card?.info?.offerTags?.[0]?.subTitle}
            </span>
          </span>
        </p>
        <p className="text-xs  text-gray-400 ">{items.card.info.description}</p>
      </div>
      <div className="flex flex-col justify-center gap-1 items-center">
        {items.card.info.imageId ? (
          <img className="w-[150px] h-[100px] rounded-xl shadow-lg"
            style={{ color: "black" }}
            src={CARD_IMG_URL + items.card.info.imageId}
          ></img>
        ) : (
          <div className="w-40 h-32 bg-slate-200 rounded-lg stroke animate relative">
            <span className="text-sm font-semibold text-gray-500 absolute top-10 left-12 ">
              No Image Available
            </span>
          </div>
        )}
        <button className="rounded-xl bg-slate-900 text-white font-semibold px-7 py-[6px]" onClick={()=> handleAddItem(items)}>Add</button>
      </div>
    </div>
  ));
};
export default ItemCategory;
