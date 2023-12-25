import { CARD_IMG_URL } from "../Utils/constants";

// RESTRAUNT CARD COMPONENT
const Card = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, areaName } =
    resData.info;

  const { slaString } = resData.info.sla;
  return (
    <div className="ele bg-zinc-100">
      <div className="eleimg">
        <img src={CARD_IMG_URL + cloudinaryImageId}></img>
      </div>
      <div className="eleinner">
        <h3 className="font-bold">{name}</h3>
        <p>{[cuisines[0], cuisines[1]].join(", ")}</p>

        <div className="date">
          <h5
            id="tag"
            style={
              avgRating >= 4
                ? { backgroundColor: "rgb(84, 180, 20)" }
                : { backgroundColor: "rgb(235, 51, 0)" }
            }
          >
            <span>
              <i class="ri-star-fill"></i>
            </span>
            {avgRating}
          </h5>
          <h5>
            <span>
              <i class="ri-star-fill"></i>
            </span>
            {/* {header} */}
            {costForTwo}
          </h5>
          <h5>
            <span>
              <i class="ri-e-bike-2-fill"></i>
            </span>
            {slaString}
          </h5>
        </div>
        <p id="rm">
          <span>
            <i class="ri-more-2-line"></i>
          </span>
          {areaName}
        </p>
      </div>
    </div>
  );
};

// HOC takes Component as an INPUT and Enhanced it by adding extra props etc to it and than return the Component
// here it is taking CARD and adding promoted label and returning the component 
export const withPromoted = (Card) => {
  return (props) => {
    return (
      <div className="ele relative">
        <span className="absolute top-2 left-4 text-white bg-slate-900 rounded-md px-3 py-1 ">Promoted</span>
        {/*  ... is a spread operater that is used to accept the data in a prop by our function    */}
        <Card {...props}/>    
      </div>
    )
  }
}


export default Card;
