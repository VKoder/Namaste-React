import React, { useRef, useState, useEffect } from "react";
import { Carousal2 } from "./Carousal";

import { REST_API } from "../Utils/constants";
import { CORS_API } from "../Utils/constants";
import { Link } from "react-router-dom";
import ShimmerMidCarousal from "../Shimmers/ShimmerMidCarousal";

const MidCarousal = () => {
  const [carausal2data, setcarausal2data] = useState(null);
  const [midcarousaltitle, setmidcarousaltitle] = useState(null)

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
    setcarausal2data(json?.data?.cards[0]?.card?.card?.imageGridCards?.info || json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    setmidcarousaltitle(json?.data?.cards[0]?.card?.card?.header?.title || json?.data?.cards[1]?.card?.card?.header?.title);
  };


  return (
    <div className="slider" ref={sliderRef}>
      <div className="carausal-head">
        { carausal2data && <h2>Whats on your mind?</h2>}
        <div className="slider__nav">{/* buttons */}</div>
      </div>

     
      <div className="slider__content">
        {
        carausal2data?.map((rest) => (
          // <Link to={rest?.entityId} key={rest.id}>
          <Carousal2 key={rest?.id} restData={rest}/>
          // </Link>
        ))
        }
      </div>
      <hr></hr>
    </div>
    
  );
};

export default MidCarousal;
