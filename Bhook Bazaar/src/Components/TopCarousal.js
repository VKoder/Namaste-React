import React, { useRef, useState, useEffect } from "react";
import { Carousal1 } from "./Carousal";
import ShimmerCarousal from "../Shimmers/ShimmerCarousal";
import { REST_API } from "../Utils/constants";
import { CORS_API } from "../Utils/constants";
import { Link } from "react-router-dom";

const TopCarousal = () => {
  const [carausaldata, setcarausaldata] = useState(null);

  const sliderRef = useRef(null);

  const scrollHandler = (scrollOffset) => {
    const newScrollLeft = sliderRef.current.scrollLeft + scrollOffset;
    sliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CORS_API + REST_API);
    const json = await data.json();
    setcarausaldata(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  if (carausaldata === null) {
    return <ShimmerCarousal />;
  }

  return (
    <div className="slider" ref={sliderRef}>
      <div className="carausal-head">
        <h2>Best offers for you</h2>
        <div className="slider__nav">{/* buttons */}</div>
      </div>

      <div className="slider__content">
        {carausaldata?.map((rest) => (

          <Carousal1 key={rest.id} restData={rest} />
        
        ))}
      </div>
    </div>
  );
};

export default TopCarousal;
