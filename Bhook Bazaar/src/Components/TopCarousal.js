import React, { useRef, useState, useEffect } from "react";
import Carousal from "./Carousal";
import ShimmerCarousal from "./ShimmerCarousal";
import { REST_API } from "../Utils/constants";
import { CORS_API } from "../Utils/constants";

const TopCarousal = () => {
  const [carausaldata, setcarausaldata] = useState(null);
  const [carausal2data, setcarausal2data] = useState(null);

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
    const data = await fetch(
      CORS_API + REST_API
    );
    const json = await data.json();
    setcarausaldata(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setcarausal2data(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
  };

  if (carausaldata === null || carausal2data === null) {
    return <ShimmerCarousal />;
  }

  return (
    <div className="slider" ref={sliderRef}>
      <div className="carausal-head">
        <h2>heading</h2>
        <div className="slider__nav">{/* buttons */}</div>
      </div>

      <div className="slider__content">
        {carausaldata?.map((rest) => (
          <Carousal key={rest.id} restData={rest} />
        ))}
      </div>
      <div className="slider__content">
        {carausal2data?.map((rest) => (
          <Carousal key={rest.id} restData={rest} />
        ))}
      </div>
    </div>
  );
};

export default TopCarousal;
