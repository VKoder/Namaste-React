import { CARD_IMG_URL } from "../Utils/constants";
const RestaurantHeader = ({ restInfo }) => {
  //Destructing
  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    feeDetails,
    areaName,
    totalRatingsString,
  } = restInfo;
  const { slaString, lastMileTravelString } = restInfo.sla;

  return (
    <div>
      <div className="flex justify-between items-center flex-row  border-b-2 border-dotted py-4">
        <div className="flex justify-between items-start flex-col ">
          <h2 className="text-2xl font-bold pb-3">{name}</h2>
          <span className="text-sm font-semibold text-gray-400">
            {cuisines.join(", ")}
          </span>
          <span className="text-sm font-semibold text-gray-400">
            {areaName}, {lastMileTravelString}
          </span>
          <div className="mt-4">
            {feeDetails?.message && (
              <span className="pr-2 text-sm text-gray-500 font-semibold flex flex-row gap-2">
                <img
                  className="w-5"
                  src={CARD_IMG_URL + feeDetails?.icon}
                ></img>
                {feeDetails?.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center flex-col text-end px-2 py-2 rounded-md border border-gray-300">
          <span className="text-green-700 font-extrabold text-xs py-1 items-center flex justify-between gap-2">
            <i className="ri-star-fill text-xs"></i>
            {avgRating}
          </span>
          <span
            style={{ letterSpacing: -1, wordSpacing: 1 }}
            className="border-t  text-xs font-semibold text-gray-400  py-1 "
          >
            {totalRatingsString}
          </span>
        </div>
      </div>

      <div className="flex justify-start items-start my-5 gap-4">
        {slaString && (
          <span className="font-extrabold text-base">
            <i className="ri-time-fill pr-2 text-lg"></i>
            {slaString}
          </span>
        )}
        <span className="font-extrabold text-base">
          <i className="ri-cash-line pr-2 text-lg"></i>
          {costForTwoMessage}
        </span>
      </div>
    </div>
  );
};
export default RestaurantHeader;
