import CARD_IMG_URL from "../Utils/constants";

// RESTRAUNT CARD COMPONENT
const Card = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, areaName } =
    resData.info;
  const { header } = resData.info.aggregatedDiscountInfoV3;
  const { slaString } = resData.info.sla;
  return (
    <div className="ele">
      <div className="eleimg">
        <img src={CARD_IMG_URL + cloudinaryImageId}></img>
      </div>
      <div class="eleinner">
        <h3>{name}</h3>
        <p style={{ letterSpacing: "0.2px" }}>{cuisines.join(", ")}</p>
        <div className="date">
          <h5 id="tag" style={avgRating > 4 ? { backgroundColor: "rgb(0, 212, 21)" } : { backgroundColor: "red" }}>
            <span>
              <i class="ri-star-fill"></i>
            </span>
          {avgRating}
          </h5>
          <h5>
            <span>
              <i class="ri-star-fill"></i>
            </span>
            {header}
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

export default Card;
