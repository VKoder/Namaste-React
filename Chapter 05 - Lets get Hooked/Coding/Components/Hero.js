import Card from "./Card";
import { useState } from "react";
import { restrauntData } from "../Utils/mockData";


// HERO COMPONENT
const Hero = () => {

  const [restrauntList, setrestrauntList] = useState(restrauntData);
  
  return(
  <div className="hero">
    <div className="search">
      <input type="text" placeholder="Feeling Hungry?" id="searchInp"></input>
      <button id="searchBtn">Search</button>
      <button id="filter-btn" 
            onClick={()=>{
              let filteredList = restrauntList.filter((rest => rest.info.avgRating > 4.2));
               {setrestrauntList(filteredList)}
            }}>
           
            
      Top Rated Restraunt</button>
    </div>
    <div className="restraunt">
      {
        restrauntList.map((resItem) => (
          <Card resData={resItem} />
        )) // Iteratedly store restraunt Obj into resData which is a parameter of card!
      }
    </div>
  </div>
)};
export default Hero;
