import GroceryShimmerCard from "./GroceryShimmerCard";

const GroceryShimmer = () => {
    return (
        <div className="lg:px-16 lg:my-10 md:px-16 my-3 md:my-5 flex justify-center items-center flex-row gap-10 w-10/12 mx-auto pt-3">
          <GroceryShimmerCard/>   
          <GroceryShimmerCard/>   
          <GroceryShimmerCard/>   
          <GroceryShimmerCard/>   
          <GroceryShimmerCard/>   
          <GroceryShimmerCard/>   
        </div>
    )
}
export default GroceryShimmer;