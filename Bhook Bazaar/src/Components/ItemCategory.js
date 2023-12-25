import { CARD_IMG_URL } from "../Utils/constants"

const ItemCategory = ({item}) => {
    
    const {itemCards} = item

    console.log(itemCards)
    return (
        itemCards.map((items)=> 
            <div className="menu-card py-12 px-4 my-2 ">
            <div className="menu-left">
            <h3>{items.card.info.name}</h3>
            <p>{"Rs " + items.card.info.price / 100}</p>
            <p>{items.card.info.description}</p>
            </div>
            <div className="menu-right">
            <img src={CARD_IMG_URL + items.card.info.imageId}></img>
            <button id="addBtn">Add</button>
            </div>
        </div>
        )



  

    )
}
export default ItemCategory