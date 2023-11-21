import React, { useRef, useState, useEffect } from "react";
import Carousal from "./Carousal";
import ShimmerCarousal from "./ShimmerCarousal";

const TopCarousal = () => {
  const sliderRef = useRef(null);

  const scrollHandler = (scrollOffset) => {
    const newScrollLeft = sliderRef.current.scrollLeft + scrollOffset;
    sliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const [carausaldata, setcarausaldata] = useState([]);
  const [carausal2data, setcarausal2data] = useState([]);


  const fetchData2 = async () => {
    const data2 = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4529322&lng=73.86523799999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
    const json2 = await data2.json();
    console.log(json2)
    setcarausal2data(json2?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    
  };

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4529322&lng=73.86523799999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setcarausaldata(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
  };

 
//   console.log(carausal2data)

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

//   if (carausaldata.length === 0) {
//     return <ShimmerCarousal />;
//   }

  return (
    <div className="slider" ref={sliderRef}>
      <div className="carausal-head">
        <h2>heading</h2>
        <div className="slider__nav">{/* buttons */}</div>
      </div>

      <div className="slider__content">
        {carausaldata.map((rest) => (
          <Carousal key={rest.id} restData={rest} />
        ))}
      </div>
      <div className="slider__content">
        {
            carausal2data.map((rest)=> <Carousal key={rest.id} restData={rest}/>)
        }
      </div>
    </div>
  );
};

export default TopCarousal;
