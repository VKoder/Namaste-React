import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../Images/Logo.png";

// HEADER COMPONENT
const Header = () => (
  <div className="header">
    <div className="hleft">
      <img src={logo}></img>
    </div>
    <div className="hright">
      <div id="hr1">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
        </ul>
      </div>
      <div id="hr2">
        <i class="ri-shopping-cart-fill"></i>
      </div>
    </div>
  </div>
);

//JSON DATA
const restrauntObj = {
                        "info": {
                        "id": "24127",
                        "name": "Kalyan Bhel",
                        "cloudinaryImageId": "n4ggreyxvmcyaahscobd",
                        "locality": "Bharti Vidyapeeth Road",
                        "areaName": "Katraj",
                        "costForTwo": "₹100 for two",
                        "cuisines": [
                            "Street Food",
                            "Chaat",
                            "Snacks",
                            "South Indian"
                        ],
                        "avgRating": 4.1,
                        "veg": true,
                        "feeDetails": {
                            "restaurantId": "24127",
                            "fees": [
                            {
                                "name": "BASE_DISTANCE",
                                "fee": 3400
                            },
                            {
                                "name": "BASE_TIME"
                            },
                            {
                                "name": "ANCILLARY_SURGE_FEE"
                            }
                            ],
                            "totalFee": 3400
                        },
                        "parentId": "532",
                        "avgRatingString": "4.1",
                        "totalRatingsString": "10K+",
                        "promoted": true,
                        "adTrackingId": "cid=9204261~p=1~eid=0000018b-d2c9-4558-6e1d-ac9700ff017c~srvts=1700048487768~45995",
                        "sla": {
                            "deliveryTime": 21,
                            "lastMileTravel": 1.3,
                            "serviceability": "SERVICEABLE",
                            "slaString": "21 mins",
                            "lastMileTravelString": "1.3 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-11-15 22:45:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                {
                                    "attributes": {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                    }
                                }
                                ]
                            },
                            "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "60% OFF",
                            "subHeader": "UPTO ₹100"
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                        "link": "swiggy://menu?restaurant_id=24127",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                        }
                    }
                 

// RESTRAUNT CARD COMPONENT
const Card = (props) => {
   const  {name, cloudinaryImageId, header,deliveryTime, avgRating, cuisines}
    return (
  < div className="ele">
    {console.log(props)}
    {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId}></img>
    <div class="eleinner">
      <h3>{name}</h3>
      <p>{cuisines}</p>
      <div className="date">
        <h5><span><i class="ri-star-fill"></i></span>{avgRating}</h5>
        <h5><span><i class="ri-star-fill"></i></span>{header}</h5>
        <h5><span><i class="ri-e-bike-2-fill"></i></span>{deliveryTime}mins</h5>
      </div>
      <h5 id="rm"><span><i class="ri-more-2-line"></i></span>READ MORE</h5>
    </div> */}
  </div>
)
};

// HERO COMPONENT
const Hero = () => (
  <div className="hero">
    <div className="search">
    
      <input type="text" placeholder="Feeling Hungry?" id="searchInp"></input>
      <button id="searchBtn">Search</button>
    </div>
    <div className="restraunt">
      <Card  {...restrauntObj}/>
    </div>
  </div>
);

// FOOTER COMPONENT
const Footer = () => (
    <div className="footer">
        <h4 id="foot">Copyright@asyncVivek.com</h4>
    </div>
)

const AppLayout = () => (
  <div className="app">
    <Header />
    <Hero />
    <Footer/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
