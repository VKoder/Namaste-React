import ShimmerCard from "./ShimmerCard";

const ShimmerUI = () => {
  return (
    <div className="Shimmer-container">
      <div className="Shimmer-search">
        <input
          type="text"
          placeholder="Feeling Hungry?"
          id="shimmer-inp"
        ></input>
        <button id="shimmer-btn">Search</button>
      </div>


      <div className="Shimmer-cards">
                <ShimmerCard/>
                <ShimmerCard/>

                <ShimmerCard/>

                <ShimmerCard/>

                <ShimmerCard/>

                <ShimmerCard/>

                <ShimmerCard/>

                <ShimmerCard/>

      </div>
    </div>
  );
};

export default ShimmerUI;
