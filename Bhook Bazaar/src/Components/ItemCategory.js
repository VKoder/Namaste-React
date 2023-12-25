import { CARD_IMG_URL } from "../Utils/constants";
import veg from "../Images/veg.webp"
import non_veg from "../Images/non-veg.webp"

const ItemCategory = ({ item }) => {
  const { itemCards } = item;

    

  return itemCards.map((items) => (

    <div className="menu-card py-8 px-4 my-1 border-2 border-dotted">
        <div className="menu-left">
        <span>{items?.card?.info?.itemAttribute?.vegClassifier == "NONVEG" ?  <img className="w-3" src={non_veg}></img> : <img className="w-5" src={veg}></img> }</span>
        
    
        <h3 className="text-sm font-bold text-slate-900 pt-2">
          {items.card.info.name}
        </h3>
        <p className="font-semibold text-slate-800 pb-2 price">
          <span className="text-base">₹ </span>
          <span className="text-sm">{items.card.info.price / 100}</span>
          <span  className="ml-3 justify-center items-center py-0.5 px-1"
            style={{
           
              backgroundColor:
                items?.card?.info?.offerTags?.[0]?.backgroundColor,
              color: items?.card?.info?.offerTags?.[0]?.textColor,
              borderLeft: `2px solid ${items?.card?.info?.offerTags?.[0]?.textColor}`,
            }}
          >
            
               
           
           <span style={{fontSize:"10px"}} className="font-bold text-xs px-1 ">{items?.card?.info?.offerTags?.[0]?.title}</span> 
             <span style={{fontSize:"10px"}} className="font-extralight text-xs">{items?.card?.info?.offerTags?.[0]?.subTitle}</span>

          </span>
            
        </p>

{console.log(items.card)}
        <p className="text-xs  text-gray-400 ">{items.card.info.description}</p>
      </div>
      
      <div className="menu-right">
        <img
          style={{ color: "black" }}
          src={CARD_IMG_URL + items.card.info.imageId}
        ></img>
        <button id="addBtn">Add</button>
      </div>
    </div>
  ));
};
export default ItemCategory;
