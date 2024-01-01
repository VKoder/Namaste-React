// import { CARD_IMG_URL } from "../Utils/constants";

// // RESTRAUNT CARD COMPONENT
// const Card = (props) => {
//   const { resData } = props;

//   const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, areaName } =
//     resData.info;

//   const { slaString } = resData.info.sla;
//   return (
//     <div className="ele bg-zinc-100">
//       <div className="eleimg">
//         <img src={CARD_IMG_URL + cloudinaryImageId}></img>
//       </div>
//       <div className="eleinner">
//         <h3 className="font-bold">{name}</h3>
//         <p>{[cuisines[0], cuisines[1]].join(", ")}</p>

//         <div className="date">
//           <h5
//             id="tag"
//             style={
//               avgRating >= 4
//                 ? { backgroundColor: "rgb(84, 180, 20)" }
//                 : { backgroundColor: "rgb(235, 51, 0)" }
//             }
//           >
//             <span>
//               <i className="ri-star-fill"></i>
//             </span>
//             {avgRating}
//           </h5>
//           <h5>
//             <span>
//               <i className="ri-star-fill"></i>
//             </span>
//             {/* {header} */}
//             {costForTwo}
//           </h5>
//           <h5>
//             <span>
//               <i className="ri-e-bike-2-fill"></i>
//             </span>
//             {slaString}
//           </h5>
//         </div>
//         <p id="rm">
//           <span>
//             <i className="ri-more-2-line"></i>
//           </span>
//           {areaName}
//         </p>
//       </div>
//     </div>
//   );
// };

// // HOC takes Component as an INPUT and Enhanced it by adding extra props etc to it and than return the Component
// // here it is taking CARD and adding promoted label and returning the component 
// export const withPromoted = (Card) => {
//   return (props) => {
//     return (
//       <div className="ele relative">
//         <span className="absolute top-2 left-4 text-white bg-slate-900 rounded-md px-3 py-1 ">Promoted</span>
//         {/*  ... is a spread operater that is used to accept the data in a prop by our function    */}
//         <Card {...props}/>    
//       </div>
//     )
//   }
// }


// export default Card;

import { CARD_IMG_URL } from "../Utils/constants";

const Card = (props) =>{

    const {resData} = props;
    const {name,sla,cuisines,avgRating,areaName} = resData?.info;

    const aggregatedDiscountInfoV3 = resData?.info?.aggregatedDiscountInfoV3;
    // Check if aggregatedDiscountInfoV3 exists before destructuring
    const { header, subHeader } = aggregatedDiscountInfoV3 || {};

    return(
        <div className="w-[270px] group hover:shadow-lg rounded-xl hover:scale-90 transition-transform duration-200 ease-in-out cursor-pointer relative">
            <div className="relative">
                <img
                className="w-[270px] h-[180px] rounded-xl"
                src={CARD_IMG_URL + resData.info.cloudinaryImageId}
                alt={name}
                
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparen opacity-55 rounded-xl">
                    <div className="absolute bottom-0 left-0 right-0 text-white text-center py-2 px-2">
                        <p className=" text-start text-2xl font-extrabold leading-6 text-white">{header} {subHeader}</p>
                    </div>
                </div>
            </div>
        
            <p className="p-3 py-1 text-lg font-bold leading-6 tracking-[-0.3px] text-[#02060CBF]">
                {name.length > 25 ? `${name.substr(0, 25)}...` : name}
            </p>
            <p className="px-3 py-1 flex items-center gap-1 text-[#02060CBF] font-bold">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" stopColor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
                <span>{avgRating}</span>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <span>{sla.deliveryTime} min</span>
            </p>
            <p className="px-3 py-1 text-[#02060C99] text-base leading-4 tracking-[-0.3px]">
                {cuisines.length > 3 ? `${cuisines.slice(0, 3).join(", ")}...` : cuisines.join(", ")}
            </p>
            <p className="px-3 pb-2 text-[#02060C99] text-base leading-4 tracking-[-0.3px]">
                {areaName}
            </p>
        </div>
    )
}

export default Card
