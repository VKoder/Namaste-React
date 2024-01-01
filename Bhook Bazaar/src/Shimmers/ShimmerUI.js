import ShimmerCard from "./ShimmerCard";
import ShimmerMidCarousal from "./ShimmerMidCarousal";

const ShimmerUI = () => {
  return (
    <div className="Shimmer-container px-12">
      <div className="Shimmer-cards">
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
      </div>
    </div>
  );
};

export default ShimmerUI;
